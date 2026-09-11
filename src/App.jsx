import { useEffect, useState } from 'react'
import './App.css'

const REGISTER_URL =
  'https://www.25yaarwin.com/#/register?invitationCode=764465632926'
const TELEGRAM_URL = 'https://t.me/yaarwin_india_xyz'

const POSTERS = [
  {
    id: 'hero',
    src: '/images/hero.jpg',
    title: 'Join YaarWin Today',
    subtitle: 'Play and win with a cleaner, faster India-first experience.',
    tag: 'Featured',
  },
  {
    id: 'referral',
    src: '/images/referral.jpg',
    title: 'Referral Super Jackpot',
    subtitle: 'Invite friends and unlock layered team bonuses.',
    tag: 'Rewards',
  },
  {
    id: 'deposit',
    src: '/images/deposit.jpg',
    title: 'Deposit Bonus',
    subtitle: 'First recharge rewards for members and agents.',
    tag: 'Welcome',
  },
  {
    id: 'ads',
    src: '/images/ads-fee.jpg',
    title: 'Ads Fee Daily Support',
    subtitle: 'Daily advertising support designed for growth.',
    tag: 'Growth',
  },
  {
    id: 'salary',
    src: '/images/daily-salary.jpg',
    title: 'Daily Salary System',
    subtitle: 'Earn a daily salary from qualifying team activity.',
    tag: 'Income',
  },
]

const GAME_CATEGORIES = [
  {
    title: 'Colour Prediction & Lottery',
    text: 'Fast-result prediction and lottery-style rounds with simple choices and instant outcomes.',
  },
  {
    title: 'Instant Play Games',
    text: 'Short-session entertainment with clean navigation and smooth performance on every device.',
  },
  {
    title: 'Slots & Casino Style',
    text: 'Interactive slots and table-style games with refined layouts for new and regular players.',
  },
  {
    title: 'Popular & Trending',
    text: 'The most played titles, curated so you can start in one tap without searching.',
  },
  {
    title: 'Card & Arcade',
    text: 'Casual card and arcade options for players who prefer simple, familiar gameplay.',
  },
]

const PILLARS = [
  {
    title: 'Secure Access',
    text: 'Encrypted sessions and protected transactions on every deposit and withdrawal.',
  },
  {
    title: 'Fast Payouts',
    text: 'Withdraw winnings quickly. Most requests move to UPI or bank within minutes.',
  },
  {
    title: 'Mobile First',
    text: 'A calm, premium interface that stays fast on phones, tablets, and desktop.',
  },
  {
    title: 'Daily Rewards',
    text: 'Welcome gift, referral bonuses, and ongoing promotions for active members.',
  },
]

function openRegister() {
  window.open(REGISTER_URL, '_blank', 'noopener,noreferrer')
}

function openTelegram() {
  window.open(TELEGRAM_URL, '_blank', 'noopener,noreferrer')
}

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconTelegram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.5 3.2 18.3 20.4c-.24 1.06-.87 1.32-1.76.82l-4.86-3.58-2.35 2.26c-.26.26-.48.48-.98.48l.35-4.95L17.9 6.4c.38-.34-.08-.53-.59-.2L6.3 13.18l-4.8-1.5c-1.04-.32-1.06-1.04.22-1.54L20.2 2.7c.86-.32 1.62.2 1.3.5z" />
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  return (
    <div className="site">
      <div className="ambient" aria-hidden="true" />

      <nav className="nav">
        <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">Y</span>
          <span className="brand-text">
            YaarWin <em>India</em>
          </span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#games" className="nav-link" onClick={() => setMenuOpen(false)}>
            Games
          </a>
          <a href="#offers" className="nav-link" onClick={() => setMenuOpen(false)}>
            Offers
          </a>
          <a href="#how" className="nav-link" onClick={() => setMenuOpen(false)}>
            How it works
          </a>
          <a href="#faq" className="nav-link" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <a
            href={TELEGRAM_URL}
            className="nav-link nav-tg"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Telegram
          </a>
          <button className="nav-cta" type="button" onClick={openRegister}>
            Register
          </button>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Official India access</p>
          <h1>
            YaarWin login &amp; register.
            <span> ₹777 gift code on sign up.</span>
          </h1>
          <p className="lead">
            A refined entry point for YaarWin in India. Create your account,
            claim the welcome gift, and play colour prediction, lottery, slots
            and more — without the clutter.
          </p>
          <div className="hero-actions">
            <button className="btn btn-gold" type="button" onClick={openRegister}>
              Register now <IconArrow />
            </button>
            <button className="btn btn-ghost" type="button" onClick={openRegister}>
              Login
            </button>
            <button className="btn btn-tg" type="button" onClick={openTelegram}>
              <IconTelegram /> Join Telegram
            </button>
          </div>
          <ul className="trust-row">
            <li>₹777 welcome gift</li>
            <li>100+ games</li>
            <li>24/7 support</li>
            <li>UPI &amp; bank payouts</li>
          </ul>
        </div>

        <aside className="gift-panel">
          <div className="gift-card">
            <p className="gift-kicker">Welcome gift</p>
            <p className="gift-amount">₹777</p>
            <p className="gift-copy">
              New members receive the gift code after a successful YaarWin
              register. No countdown. No hidden steps.
            </p>
            <button className="btn btn-gold gift-btn" type="button" onClick={openRegister}>
              Create account
            </button>
            <a
              className="gift-tg"
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official channel · t.me/yaarwin_india_xyz
            </a>
          </div>
        </aside>
      </header>

      <section className="stats">
        <div className="stat">
          <strong>₹777</strong>
          <span>Gift code</span>
        </div>
        <div className="stat">
          <strong>100+</strong>
          <span>Games</span>
        </div>
        <div className="stat">
          <strong>24/7</strong>
          <span>Live support</span>
        </div>
        <div className="stat">
          <strong>India</strong>
          <span>UPI ready</span>
        </div>
      </section>

      <section id="games" className="section">
        <div className="section-head">
          <p className="eyebrow">Catalogue</p>
          <h2>Game categories</h2>
          <p className="section-sub">
            A focused set of YaarWin game types — built for quick rounds and
            clear choices, whether you play for a minute or a session.
          </p>
        </div>
        <div className="cat-grid">
          {GAME_CATEGORIES.map((g, i) => (
            <article key={g.title} className="cat-card">
              <span className="cat-index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{g.title}</h3>
              <p>{g.text}</p>
              <button type="button" onClick={openRegister}>
                Explore <IconArrow />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="offers" className="section">
        <div className="section-head">
          <p className="eyebrow">Campaigns</p>
          <h2>Official offers &amp; rewards</h2>
          <p className="section-sub">
            Current promotions, presented clearly. Register to claim each offer
            inside your YaarWin account.
          </p>
        </div>
        <div className="poster-stack">
          {POSTERS.map((p, i) => (
            <article key={p.id} className="poster-card">
              <div className="poster-copy">
                <span className="poster-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
                <button className="btn btn-gold" type="button" onClick={openRegister}>
                  Claim offer
                </button>
              </div>
              <div className="poster-frame">
                <img
                  src={p.src}
                  alt={p.title}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="section">
        <div className="section-head">
          <p className="eyebrow">Get started</p>
          <h2>Three steps. Then you play.</h2>
        </div>
        <ol className="steps">
          <li>
            <span>01</span>
            <h3>Create your account</h3>
            <p>Register with your mobile number. The form takes under a minute.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Add your first funds</h3>
            <p>Deposit securely. Credit is fast so you can start without delay.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Claim ₹777 and play</h3>
            <p>Unlock the welcome gift after sign up and open 100+ games.</p>
          </li>
        </ol>
        <div className="center-cta">
          <button className="btn btn-gold" type="button" onClick={openRegister}>
            Register now
          </button>
          <button className="btn btn-tg" type="button" onClick={openTelegram}>
            <IconTelegram /> Telegram
          </button>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-head">
          <p className="eyebrow">Why this page</p>
          <h2>A calmer way into YaarWin</h2>
          <p className="section-sub">
            YaarWin India is the official login and register hub for gift codes,
            rewards, and support — designed to feel premium, not noisy.
          </p>
        </div>
        <div className="pillar-grid">
          {PILLARS.map((item) => (
            <article key={item.title} className="pillar">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>Login, register &amp; gift code</h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>How do I YaarWin login and register?</summary>
            <p>
              Tap <strong>Register</strong> or <strong>Login</strong> on this page,
              complete signup with your mobile number, and start in under a minute.
            </p>
          </details>
          <details>
            <summary>What is the YaarWin ₹777 gift code?</summary>
            <p>
              New users can claim a <strong>₹777 gift code</strong> / welcome bonus
              after registration through YaarWin India.
            </p>
          </details>
          <details>
            <summary>Which games can I play after register?</summary>
            <p>
              Colour prediction and lottery, instant play, slots and casino style,
              trending titles, plus card and arcade options.
            </p>
          </details>
          <details>
            <summary>Where is the official Telegram channel?</summary>
            <p>
              Join{' '}
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                t.me/yaarwin_india_xyz
              </a>{' '}
              for updates and support.
            </p>
          </details>
        </div>
      </section>

      <section id="promo" className="promo">
        <p className="eyebrow">Welcome offer</p>
        <h2>Claim ₹777 on YaarWin register</h2>
        <p>
          Exclusive welcome gift for new YaarWin India members. Register once,
          then keep Telegram for official updates.
        </p>
        <div className="hero-actions">
          <button className="btn btn-gold" type="button" onClick={openRegister}>
            Register &amp; claim bonus
          </button>
          <button className="btn btn-tg" type="button" onClick={openTelegram}>
            <IconTelegram /> Join Telegram
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="brand">
          <span className="brand-mark">Y</span>
          <span className="brand-text">
            YaarWin <em>India</em>
          </span>
        </div>
        <p>
          © {new Date().getFullYear()} YaarWin India · Login &amp; Register · ₹777
          gift code on sign up
        </p>
        <div className="footer-links">
          <button type="button" onClick={openRegister}>
            Register / Login
          </button>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
        </div>
      </footer>

      <div className="sticky">
        <div className="sticky-copy">
          <strong>₹777 gift code</strong>
          <span>Register or open Telegram</span>
        </div>
        <div className="sticky-actions">
          <button className="btn btn-tg sticky-btn" type="button" onClick={openTelegram}>
            Telegram
          </button>
          <button className="btn btn-gold sticky-btn" type="button" onClick={openRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}
