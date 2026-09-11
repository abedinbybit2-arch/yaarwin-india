import { useEffect, useState } from 'react'
import './App.css'

const REGISTER_URL =
  'https://www.25yaarwin.com/#/register?invitationCode=764465632926'
const TELEGRAM_URL = 'https://t.me/yaarwin_india_xyz'
const GIFT = '₹1,00,000'

const GAME_CATEGORIES = [
  {
    title: 'Colour Prediction & Lottery Games',
    text: 'Explore fast-result prediction and lottery-style games designed for users who enjoy quick rounds, simple choices, and instant gameplay.',
  },
  {
    title: 'Instant Play Entertainment Games',
    text: 'Enjoy quick-play games that are perfect for short sessions, offering easy navigation, fast loading, and smooth performance on all devices.',
  },
  {
    title: 'Slots & Casino Style Games',
    text: 'Discover interactive slot and casino-style games with engaging layouts, smooth controls, and an enjoyable experience for both new and regular users.',
  },
  {
    title: 'Popular & Trending Games',
    text: 'Access some of the most played and trending games on YaarWin Game, ideal for users looking for quick entertainment and easy game selection.',
  },
  {
    title: 'Card & Arcade Gaming Options',
    text: 'Play a variety of card-based and arcade-style games designed for casual users who prefer simple and entertaining gameplay.',
  },
]

const GRAND_PRIZES = [
  { rank: 'Grand Prize', prize: 'Mercedes-Benz A-Class Limousine', value: '₹55 Lakh' },
  { rank: '1st Prize', prize: 'Diamond Jewelry (2 Items)', value: '₹15 Lakh' },
  { rank: '2nd Prize', prize: 'Gold + Diamond Jewelry', value: '₹5 Lakh' },
  { rank: '3rd Prize', prize: 'Gold Bar 999.9', value: '₹2 Lakh' },
  { rank: '4th Prize', prize: 'Gold Necklace 999.9', value: '₹1 Lakh' },
  { rank: '5th Prize', prize: 'Gold Bracelet 999.9', value: '₹50,000' },
  { rank: '6th Prize', prize: 'Nothing Phone (256GB)', value: '₹30,000' },
  { rank: '7th Prize', prize: 'Gold Ring 999.9', value: '₹20,000' },
  { rank: '8th Prize', prize: 'Gold Earrings 999.9', value: '₹10,000' },
  { rank: '9th Prize', prize: 'Treasure Box (Consolation)', value: '₹5,000' },
]

const REFERRAL_JACKPOT = [
  { members: '10', bonus: '₹1,500' },
  { members: '25', bonus: '₹5,000' },
  { members: '50', bonus: '₹8,000' },
  { members: '100', bonus: '₹20,000' },
  { members: '250', bonus: '₹50,000' },
  { members: '500', bonus: '₹1,00,000' },
  { members: '2,000', bonus: '₹2,00,000' },
  { members: '5,000', bonus: '₹3,50,000' },
]

const DEPOSIT_BONUS = [
  { recharge: '₹100 – 299', member: '₹30', agent: '₹30' },
  { recharge: '₹300 – 499', member: '₹100', agent: '₹100' },
  { recharge: '₹500 – 999', member: '₹150', agent: '₹150' },
  { recharge: '₹1,000 – 4,999', member: '₹200', agent: '₹200' },
]

const DAILY_SALARY = [
  { members: '10', amount: '₹5,000', salary: '₹600' },
  { members: '25', amount: '₹10,000', salary: '₹1,500' },
  { members: '50', amount: '₹30,000', salary: '₹3,500' },
  { members: '80', amount: '₹60,000', salary: '₹6,000' },
  { members: '100', amount: '₹80,000', salary: '₹8,000' },
  { members: '150', amount: '₹1,30,000', salary: '₹13,000' },
  { members: '200', amount: '₹2,00,000', salary: '₹20,000' },
  { members: '350', amount: '₹3,50,000', salary: '₹30,000' },
  { members: '500', amount: '₹5,00,000', salary: '₹50,000' },
]

const ADS_FEE = [
  { charge: '10', fee: '₹2,000' },
  { charge: '25', fee: '₹5,000' },
  { charge: '50', fee: '₹10,000' },
  { charge: '80', fee: '₹18,000' },
  { charge: '100', fee: '₹25,000' },
  { charge: '150', fee: '₹35,000' },
  { charge: '200', fee: '₹45,000' },
  { charge: '350', fee: '₹75,000' },
  { charge: '500', fee: '₹1,00,000' },
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

function OfferTable({ columns, rows }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
            <span>{GIFT} gift code on sign&nbsp;up.</span>
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
            <li>{GIFT} welcome gift</li>
            <li>100+ games</li>
            <li>24/7 support</li>
            <li>UPI &amp; bank payouts</li>
          </ul>
        </div>

        <aside className="gift-panel">
          <div className="gift-card">
            <p className="gift-kicker">Welcome gift</p>
            <p className="gift-amount">{GIFT}</p>
            <p className="gift-copy">
              New members receive the gift code after a successful YaarWin
              register. One form. Then you play.
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
          <strong>{GIFT}</strong>
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
          <h2>Game categories on YaarWin Game</h2>
          <p className="section-sub">
            YaarWin Game offers a wide range of game categories designed to suit
            every player&apos;s interest and playing style. Whether you prefer
            quick prediction-based games or simple entertainment options, the
            platform provides smooth access and an easy-to-use experience for
            all users.
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
            Live YaarWin Game promotions — referral jackpot, deposit bonus,
            daily salary and ads support. Register to claim inside your account.
          </p>
        </div>

        <div className="offer-stack">
          <article className="offer-panel offer-featured">
            <div className="offer-head">
              <span className="poster-tag">Event 2026</span>
              <h3>YaarWin Grand Referral Event</h3>
              <p>
                Invite members and unlock premium prizes. Duration: 2 months.
                Invite more, win more.
              </p>
            </div>
            <OfferTable
              columns={['Rank', 'Prize', 'Value']}
              rows={GRAND_PRIZES.map((p) => [p.rank, p.prize, p.value])}
            />
            <button className="btn btn-gold" type="button" onClick={openRegister}>
              Join the event
            </button>
          </article>

          <article className="offer-panel">
            <div className="offer-head">
              <span className="poster-tag">Rewards</span>
              <h3>Referral Super Jackpot</h3>
              <p>Invite friends and unlock layered team bonuses as your network grows.</p>
            </div>
            <OfferTable
              columns={['Referral members', 'Bonus']}
              rows={REFERRAL_JACKPOT.map((r) => [r.members, r.bonus])}
            />
            <ul className="offer-notes">
              <li>Referral members need to recharge 3 times and actively play games.</li>
              <li>Same IP, bank details or phone number cannot claim salary.</li>
              <li>Refer friends to join the platform and grow together.</li>
            </ul>
            <button className="btn btn-gold" type="button" onClick={openRegister}>
              Claim offer
            </button>
          </article>

          <article className="offer-panel">
            <div className="offer-head">
              <span className="poster-tag">Welcome</span>
              <h3>Deposit Bonus</h3>
              <p>First recharge rewards for members and agents. Earn more, win more.</p>
            </div>
            <OfferTable
              columns={['First recharge', 'Member bonus', 'Agent bonus']}
              rows={DEPOSIT_BONUS.map((r) => [r.recharge, r.member, r.agent])}
            />
            <ul className="offer-notes">
              <li>Member must bind a bank card. One person, one account.</li>
              <li>Same IP, bank detail or phone number cannot claim the bonus.</li>
              <li>Illegal betting, all-in or brush bonus is not allowed.</li>
            </ul>
            <button className="btn btn-gold" type="button" onClick={openRegister}>
              Claim offer
            </button>
          </article>

          <article className="offer-panel">
            <div className="offer-head">
              <span className="poster-tag">Income</span>
              <h3>Daily Salary System</h3>
              <p>Earn a fixed daily salary from qualifying deposit members and team activity.</p>
            </div>
            <OfferTable
              columns={['Deposit members', 'Deposit amount', 'Daily salary']}
              rows={DAILY_SALARY.map((r) => [r.members, r.amount, r.salary])}
            />
            <ul className="offer-notes">
              <li>Only genuine, verified members are counted.</li>
              <li>Valid unique bank account required. Duplicates are blocked.</li>
              <li>Fake or made-up referrals receive no salary or commission.</li>
            </ul>
            <button className="btn btn-gold" type="button" onClick={openRegister}>
              Claim offer
            </button>
          </article>

          <article className="offer-panel">
            <div className="offer-head">
              <span className="poster-tag">Growth</span>
              <h3>Ads Fee Daily Support</h3>
              <p>Daily advertising support designed for agents who grow first-charge members.</p>
            </div>
            <OfferTable
              columns={['Direct first charge', 'Ads fee']}
              rows={ADS_FEE.map((r) => [r.charge, r.fee])}
            />
            <ul className="offer-notes">
              <li>Final decision is made by your assigned supervisor after review.</li>
              <li>Member quality and advertising campaign expenses are checked.</li>
            </ul>
            <button className="btn btn-gold" type="button" onClick={openRegister}>
              Claim offer
            </button>
          </article>
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
            <h3>Claim {GIFT} and play</h3>
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
            <summary>What is the YaarWin {GIFT} gift code?</summary>
            <p>
              New users can claim a <strong>{GIFT} gift code</strong> / welcome bonus
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
        <h2>Claim {GIFT} on YaarWin register</h2>
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
          © {new Date().getFullYear()} YaarWin India · Login &amp; Register · {GIFT}{' '}
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
          <strong>{GIFT} gift code</strong>
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
