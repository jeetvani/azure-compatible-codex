import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";
import { programs, programTemplate } from "../content/programs.ts";
import { metadataCopy } from "../content/site.ts";

// Run against the production preview. No requests leave loopback.
const origin = "http://127.0.0.1:3217";
const routes = new Map([
  ["/", "home"], ["/programs", "programs"], ["/programs/program-details", "details"],
  ["/how-live-cohorts-work", "how"], ["/enroll", "enroll"], ["/faq", "faq"],
  ["/about", "about"], ["/contact", "contact"],
] as const);
const decode = (s: string) => s.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"');
const pages = new Map<string, string>();
for (const route of routes.keys()) {
  const response = await fetch(new URL(route, origin));
  assert.equal(response.status, 200, route);
  pages.set(route, await response.text());
}

test("all eight production routes have unique matching metadata and semantic structure", () => {
  for (const [route, key] of routes) {
    const html = pages.get(route)!;
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, route);
    assert.match(html, /<html lang="en"/);
    assert.match(html, /<main id="main-content"/);
    assert.match(html, /href="#main-content"/);
    assert.match(html, /<header/);
    assert.match(html, /<footer/);
    assert.equal(decode(html.match(/<title>([\s\S]*?)<\/title>/)![1]), metadataCopy[key].title);
    assert.ok(html.includes(`name="description" content="${metadataCopy[key].description}"`), route);
    assert.ok(html.includes(`property="og:title" content="${metadataCopy[key].title}"`), route);
    assert.ok(html.includes(`property="og:description" content="${metadataCopy[key].description}"`), route);
    assert.doesNotMatch(html, /rel="canonical"|property="og:url"/);
  }
});

test("all rendered navigation, CTA, breadcrumb and section links resolve", () => {
  for (const [route, html] of pages) {
    for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const href = decode(match[1]);
      assert.ok(href.startsWith("/") || href.startsWith("#"), `${route}: unexpected external link ${href}`);
      const target = new URL(href, new URL(route, origin));
      assert.ok(pages.has(target.pathname), `${route}: unknown route ${href}`);
      if (target.hash) assert.ok(pages.get(target.pathname)!.includes(`id="${target.hash.slice(1)}"`), `${route}: missing anchor ${href}`);
    }
  }
});

test("draft cannot collect, submit, or fabricate enrollment information", async () => {
  assert.equal(programs.length, 0);
  assert.equal(programTemplate.kind, "draft-template");
  for (const field of ["title", "overview", "curriculum", "cohorts", "duration", "instructors", "prerequisites", "learningExpectations", "fees", "enrollmentAvailability"] as const) assert.equal(programTemplate[field], null);
  for (const [route, html] of pages) {
    assert.doesNotMatch(html, /<(form|input|textarea|select)\b|mailto:|tel:|application\/ld\+json/i, route);
  }
  const enrollment = pages.get("/enroll")!;
  assert.match(enrollment, /<button[^>]*disabled=""[^>]*>Enrollment unavailable<\/button>/);
  assert.match(enrollment, /Enrollment is not connected yet\./);
  assert.match(pages.get("/programs/program-details")!, /DRAFT TEMPLATE — NOT AN AVAILABLE PROGRAM/);
  for (const route of ["/enroll", "/programs/program-details"]) assert.match(pages.get(route)!, /name="robots" content="noindex, follow"/);
  const query = await fetch(`${origin}/enroll?program=FICTIONAL_PROGRAM&cohort=FAKE_COHORT`);
  const body = await query.text();
  assert.doesNotMatch(body, /FICTIONAL_PROGRAM|FAKE_COHORT/);
});

test("native accordions and closed mobile-menu markup expose honest states", () => {
  for (const [route, expected] of [["/", 3], ["/faq", 7], ["/programs/program-details", 2]] as const) {
    const html = pages.get(route)!;
    assert.equal((html.match(/<details\b/g) ?? []).length, expected);
    assert.equal((html.match(/<summary\b/g) ?? []).length, expected);
    assert.equal((html.match(/<details open=""/g) ?? []).length, 1);
  }
  for (const html of pages.values()) {
    assert.match(html, /aria-expanded="false" aria-controls="mobile-navigation"/);
    assert.match(html, /<nav id="mobile-navigation"[^>]*hidden=""/);
    assert.match(html, /<noscript>/);
  }
});

test("missing and unsupported program routes return 404", async () => {
  for (const route of ["/does-not-exist", "/programs/fictional-program"]) {
    const response = await fetch(origin + route);
    assert.equal(response.status, 404, route);
  }
});

test("discovery stays empty and blocked without a confirmed production origin", async () => {
  const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
  assert.doesNotMatch(sitemap, /<loc>/);
  const robots = await (await fetch(origin + "/robots.txt")).text();
  assert.match(robots, /Disallow: \/\n/);
  assert.doesNotMatch(robots, /Sitemap:/);
});

test("rendered local styles and scripts are served successfully", async () => {
  const assets = new Set<string>();
  for (const html of pages.values()) {
    for (const match of html.matchAll(/(?:href|src)="([^\"]+\.(?:css|js)(?:\?[^\"]*)?)"/g)) assets.add(decode(match[1]));
  }
  assert.ok(assets.size > 0);
  for (const asset of assets) {
    assert.ok(asset.startsWith("/_next/"), asset);
    assert.equal((await fetch(origin + asset)).status, 200, asset);
  }
});

test("actual palette combinations meet AA text and control contrast", () => {
  const luminance = (hex: string) => {
    const rgb = hex.replace("#", "").match(/../g)!.map(part => parseInt(part, 16) / 255).map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
    return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
  };
  const ratio = (a: string, b: string) => { const x = luminance(a), y = luminance(b); return (Math.max(x, y) + .05) / (Math.min(x, y) + .05); };
  for (const background of ["#F6F4ED", "#FFFFFF", "#ECEFE9"]) {
    for (const foreground of ["#182B29", "#4B605A", "#124D43"]) assert.ok(ratio(foreground, background) >= 4.5, `${foreground} on ${background}`);
    for (const control of ["#71837A", "#005FCC"]) assert.ok(ratio(control, background) >= 3, `${control} on ${background}`);
  }
  for (const [fg, bg] of [["#FFFFFF", "#124D43"], ["#FFFFFF", "#0C3B33"], ["#182B29", "#D7ED83"], ["#D7ED83", "#124D43"]]) assert.ok(ratio(fg, bg) >= 4.5);
});

test("source has no font network dependency, storage simulation, or transmission handlers", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.doesNotMatch(css, /@import|https?:\/\//);
  assert.match(css, /prefers-reduced-motion/);
  for (const path of ["../app/enroll/page.tsx", "../components/site/Navigation.tsx"]) {
    const source = await readFile(new URL(path, import.meta.url), "utf8");
    assert.doesNotMatch(source, /localStorage|sessionStorage|fetch\(|onSubmit|"use server"/);
  }
});
