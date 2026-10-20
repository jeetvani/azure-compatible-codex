"use client";

import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="MOTIF home">
        M<span>O</span>TIF
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
        <a href="#method" onClick={() => setOpen(false)}>The method</a>
        <a href="#classes" onClick={() => setOpen(false)}>Classes</a>
        <a href="#stories" onClick={() => setOpen(false)}>Stories</a>
        <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
      </nav>
      <a className="header-cta" href="#pricing">Start moving <span>↗</span></a>
    </header>
  );
}

const plans = [
  {
    name: "Move",
    monthly: 19,
    description: "A flexible plan for building your rhythm.",
    features: ["Unlimited on-demand classes", "Weekly training plan", "Progress insights"],
  },
  {
    name: "Momentum",
    monthly: 39,
    description: "Coaching and community to go further.",
    features: ["Everything in Move", "2 live coach check-ins / month", "Small-group challenges"],
    featured: true,
  },
  {
    name: "All in",
    monthly: 79,
    description: "Your goals, with a coach in your corner.",
    features: ["Everything in Momentum", "Weekly 1:1 coaching", "Recovery & nutrition guidance"],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="pricing section-pad" id="pricing">
      <div className="section-kicker">04 — Choose your pace</div>
      <div className="pricing-head">
        <h2>Big energy.<br /><em>Small commitment.</em></h2>
        <div className="billing-toggle" aria-label="Billing period">
          <button className={!yearly ? "active" : ""} onClick={() => setYearly(false)}>Monthly</button>
          <button className={yearly ? "active" : ""} onClick={() => setYearly(true)}>Yearly <span>−20%</span></button>
        </div>
      </div>
      <div className="plan-grid">
        {plans.map((plan) => {
          const price = yearly ? Math.round(plan.monthly * 0.8) : plan.monthly;
          return (
            <article className={plan.featured ? "plan featured" : "plan"} key={plan.name}>
              {plan.featured && <div className="popular">Most popular</div>}
              <p className="plan-name">{plan.name}</p>
              <div className="price"><sup>$</sup>{price}<span>/mo</span></div>
              <p className="plan-description">{plan.description}</p>
              <ul>{plan.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <a href="mailto:hello@motif.fit?subject=Start%20my%20MOTIF%20trial">Try 14 days free <span>→</span></a>
            </article>
          );
        })}
      </div>
      <p className="pricing-note">No joining fee. Pause or cancel anytime. We won’t make it weird.</p>
    </section>
  );
}
