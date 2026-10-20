import { Header, Pricing } from "./components";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero section-pad">
        <div className="hero-copy">
          <div className="eyebrow"><span>●</span> Fitness that fits real life</div>
          <h1>Move like<br />you <em>mean it.</em></h1>
          <p>Adaptive workouts. Actual human coaches. A wildly supportive crew. Everything you need to feel stronger—in body and in life.</p>
          <div className="hero-actions">
            <a className="button dark" href="#pricing">Try 14 days free <Arrow /></a>
            <a className="text-link" href="#method"><span className="play">▶</span> See how it works</a>
          </div>
          <div className="trust-row">
            <div className="avatars" aria-hidden="true"><span>A</span><span>M</span><span>J</span><span>K</span></div>
            <div><strong>4.9</strong> ★★★★★<br /><small>loved by 12,000+ movers</small></div>
          </div>
        </div>

        <div className="hero-art" aria-label="MOTIF workout app preview">
          <div className="sun-orbit"><span>JUST START · KEEP GOING · </span></div>
          <div className="shape shape-blue" />
          <div className="shape shape-coral" />
          <div className="phone-card">
            <div className="phone-top"><span>9:41</span><b>MOTIF</b><span>•••</span></div>
            <div className="class-visual">
              <div className="figure"><i className="head" /><i className="body" /><i className="arm left" /><i className="arm right" /><i className="leg left" /><i className="leg right" /></div>
              <div className="class-tag">LIVE · 09:30</div>
            </div>
            <div className="phone-copy"><small>TODAY&apos;S SESSION</small><h3>Power Flow</h3><p>28 min · with Maya</p></div>
            <button type="button" aria-label="Play Power Flow workout">▶</button>
          </div>
          <div className="stat-card"><span>THIS WEEK</span><strong>4</strong><p>workouts done <b>↑ 33%</b></p></div>
          <div className="sticker">NO BAD<br />WORKOUTS<br /><span>★</span></div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true"><div>STRONGER DAYS <span>✦</span> BETTER ENERGY <span>✦</span> REAL COACHES <span>✦</span> YOUR OWN PACE <span>✦</span> STRONGER DAYS <span>✦</span> BETTER ENERGY <span>✦</span></div></div>

      <section className="method section-pad" id="method">
        <div className="section-kicker">01 — The MOTIF method</div>
        <div className="method-intro">
          <h2>Not another plan<br />you&apos;ll quit by <em>Tuesday.</em></h2>
          <p>We built MOTIF around how motivation actually works: variety, visible progress, and people who notice when you show up.</p>
        </div>
        <div className="method-grid">
          <article className="method-card yellow"><span className="number">01</span><div className="mini-calendar"><i>M</i><i>T</i><i className="done">W</i><i>T</i><i className="done">F</i></div><h3>It adapts to you</h3><p>Your plan flexes with your energy, schedule, equipment, and goals. Miss a day? We simply redraw the map.</p></article>
          <article className="method-card blue"><span className="number">02</span><div className="coach-bubble"><span>“</span>How did that last set feel?</div><h3>Real people. Really.</h3><p>Our coaches learn your name, refine your form, and make sure the next move is the right one.</p></article>
          <article className="method-card coral"><span className="number">03</span><div className="progress-rings"><i /><i /><strong>84%</strong></div><h3>Progress you can feel</h3><p>We track strength, stamina, sleep, and mood—because the scale tells a very small story.</p></article>
        </div>
      </section>

      <section className="classes section-pad" id="classes">
        <div className="section-kicker light">02 — Move your way</div>
        <div className="classes-title"><h2>Whatever today<br />calls for.</h2><p>5 to 50 minutes. Bedroom to gym. Gentle to gloriously sweaty.</p></div>
        <div className="class-list">
          <article><span>01</span><h3>Build</h3><p>Strength · Gym or home</p><div className="class-icon dumbbell">●━●</div><Arrow /></article>
          <article><span>02</span><h3>Burn</h3><p>HIIT · Cardio · Boxing</p><div className="class-icon bolt">ϟ</div><Arrow /></article>
          <article><span>03</span><h3>Flow</h3><p>Yoga · Mobility · Pilates</p><div className="class-icon wave">≈</div><Arrow /></article>
          <article><span>04</span><h3>Reset</h3><p>Recovery · Breathwork</p><div className="class-icon flower">✿</div><Arrow /></article>
        </div>
        <a className="button light-button" href="#pricing">Explore 700+ classes <Arrow /></a>
      </section>

      <section className="stories section-pad" id="stories">
        <div className="section-kicker">03 — The feeling is mutual</div>
        <div className="story-layout">
          <div className="quote-mark">“</div>
          <blockquote>I stopped chasing a &apos;before and after&apos;. Now I chase how <em>alive</em> I feel after.</blockquote>
          <div className="member-card">
            <div className="portrait"><div className="portrait-face">☻</div></div>
            <div><strong>Amara K.</strong><span>Member since 2023</span><p>“MOTIF changed my relationship with moving.”</p></div>
          </div>
          <div className="story-stats">
            <div><strong>91%</strong><span>feel more energized</span></div>
            <div><strong>8.4×</strong><span>more likely to stick with it</span></div>
            <div><strong>4.9/5</strong><span>average member rating</span></div>
          </div>
        </div>
      </section>

      <Pricing />

      <section className="faq section-pad">
        <div><div className="section-kicker">05 — Good questions</div><h2>Wondering<br /><em>something?</em></h2></div>
        <div className="faq-list">
          <details><summary>Do I need equipment?<span>+</span></summary><p>No. You can filter every session by the equipment and space you have—even if that&apos;s just a yoga mat and two square metres.</p></details>
          <details><summary>Is MOTIF beginner-friendly?<span>+</span></summary><p>Very. Every class includes modifications, and your starting plan meets you exactly where you are.</p></details>
          <details><summary>How does coaching work?<span>+</span></summary><p>Momentum and All In members can message coaches, review progress, and get live check-ins based on their plan.</p></details>
          <details><summary>Can I really cancel anytime?<span>+</span></summary><p>Yes—straight from your account in a few taps. No calls, forms, or awkward break-up speech.</p></details>
        </div>
      </section>

      <footer>
        <div className="footer-cta section-pad"><p>Ready when you are.</p><h2>Your strongest<br />chapter starts <em>now.</em></h2><a className="button dark" href="#pricing">Start your free trial <Arrow /></a></div>
        <div className="footer-bottom">
          <a className="brand footer-brand" href="#top">M<span>O</span>TIF</a>
          <div className="footer-links"><a href="#method">Method</a><a href="#classes">Classes</a><a href="#stories">Community</a><a href="mailto:hello@motif.fit">Contact</a></div>
          <div className="socials"><a href="#top" aria-label="Instagram">ig</a><a href="#top" aria-label="TikTok">tk</a><a href="#top" aria-label="YouTube">yt</a></div>
          <p>© 2026 MOTIF Movement, Inc. Move kindly.</p>
        </div>
      </footer>
    </main>
  );
}
