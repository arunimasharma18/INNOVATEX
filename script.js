'use strict';


const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];


const EVENTS_DATA = [
  {
    id: 'hack',
    name: 'Hack the Grid',
    cat: 'tech',
    icon: '</>',
    color: '#2230e8',
    when: 'Day 1–2 · 24 Hours',
    team: 'Teams of 2–4',
    prize: '₹2,00,000',
    desc: 'Build working prototypes that solve urban mobility, clean energy, or campus resilience with real APIs.',
    more: [
      '₹1,20,000 for 1st place, ₹50,000 runner-up, ₹30,000 best hardware hack',
      'High-speed dedicated Wi-Fi 6 mesh and unlimited energy refreshments',
      'API sponsors: Cloud credits, LLM API keys & hardware starter kits',
      'Round-the-clock technical mentors from top tech companies'
    ]
  },
  {
    id: 'robo',
    name: 'RoboRumble',
    cat: 'robotics',
    icon: 'R2',
    color: '#e0402f',
    when: 'Day 2 · 6 Hours',
    team: 'Teams of 3–5',
    prize: '₹1,00,000',
    desc: 'Battle-hardened combat bots clash in the hazard arena while navigating sandpits, spikes, and rotating hammers.',
    more: [
      'Weight class: Up to 8 kg bots with pneumatic or spinning weapons',
      'Steel cage arena with pneumatic flippers and hazardous saw pits',
      'Free pit stops with soldering stations and 3D printing repair support',
      'Multi-angle livestreamed arena combat broadcast'
    ]
  },
  {
    id: 'pitch',
    name: 'Pitch Perilous',
    cat: 'biz',
    icon: '₹',
    color: '#b57d00',
    when: 'Day 3 · 3.5 Hours',
    team: 'Teams of 1–3',
    prize: '₹1,00,000 + Incubation',
    desc: 'Present your early-stage venture in 5 minutes to seasoned VC partners, angel syndicates, and unicorn operators.',
    more: [
      'Direct fast-track interview with Delhi Innovation Seed Fund',
      '5-minute pitch followed by 5-minute rigorous investor Q&A',
      '₹10,00,000 worth of legal, cloud & workspace credits to finalists',
      'Exclusive 1-on-1 feedback deck review session'
    ]
  },
  {
    id: 'pixel',
    name: 'PixelForge',
    cat: 'design',
    icon: 'UI',
    color: '#8a2be2',
    when: 'Day 2 · 5 Hours',
    team: 'Solo or Duo',
    prize: '₹50,000',
    desc: 'Live UI/UX sprint: redesign high-friction digital experiences against the clock with surprise accessibility challenges.',
    more: [
      'Surprise user persona and problem space revealed at sprint kickoff',
      'Tools: Figma, Penpot, Framer or whichever design stack you master',
      'Critique judged by Lead Product Designers from top consumer unicorns',
      'Winning design published in InnovateX Design Anthology'
    ]
  },
  {
    id: 'cipher',
    name: 'Code Cipher',
    cat: 'tech',
    icon: '01',
    color: '#12805c',
    when: 'Day 1 · 3 Hours',
    team: 'Solo',
    prize: '₹30,000',
    desc: 'Competitive algorithmic showdown with brain-bending dynamic programming, graph theory, and logic puzzles.',
    more: [
      'Live dynamic leaderboard projected on the main atrium display',
      'Allowed languages: C++, Python 3, Java, Rust, Go',
      'Hidden stress tests and automated telemetry anti-cheat systems',
      'Fastest solve bonus prizes for the first 3 problem submissions'
    ]
  },
  {
    id: 'neural',
    name: 'Neural Nights',
    cat: 'ai',
    icon: 'AI',
    color: '#d6277a',
    when: 'Day 3 · 4 Hours',
    team: 'Solo or Pairs',
    prize: '₹40,000 + Badges',
    desc: 'Hands-on Generative AI & local model fine-tuning masterclass: build, evaluate, and deploy edge AI agents.',
    more: [
      'Guided sandbox with GPU cloud instances provided for all participants',
      'Take-home verified certification co-signed by industry partners',
      'Capstone micro-challenge: fine-tune a model to beat benchmark scores',
      'Best capstone submission receives ₹40,000 cash grant'
    ]
  },
  {
    id: 'cyber',
    name: 'CyberClash (CTF)',
    cat: 'security',
    icon: '🛡️',
    color: '#0ea5e9',
    when: 'Day 2 · 5 Hours',
    team: 'Teams of 1–3',
    prize: '₹50,000',
    desc: 'Capture-the-flag cybersecurity battlefield covering reverse engineering, cryptography, web exploitation, and steganography.',
    more: [
      'Jeopardy style challenges ranging from Easy to Insane difficulty',
      'Dedicated sandboxed VPN environment with real-time flag leaderboard',
      'Industry badges and direct interview referrals for top scorers'
    ]
  }
];

const SCHEDULE_DATA = {
  'Day 1 · Fri 27 Nov': [
    { time: '08:30 – 10:00 AM', title: 'Grand Inauguration & Keynote', desc: 'Keynote address by chief architect of NITI Tech on emerging AI frontiers.', venue: 'Main Auditorium' },
    { time: '10:30 AM', title: 'Hack the Grid — Kickoff', desc: 'Mystery problem statements revealed; 24-hour sprint timer starts.', venue: 'Auditorium Hack Arena (Block A)' },
    { time: '02:00 – 05:00 PM', title: 'Code Cipher — Algorithmic Sprint', desc: 'Round 1 & 2 live speed coding on the Turing cluster.', venue: 'Turing Computer Labs' },
    { time: '05:30 – 07:30 PM', title: 'Hardware & Tech Expo 2026', desc: 'Student projects, autonomous drone swarms & sponsor showcases.', venue: 'Atrium Exhibition Hall' },
    { time: '08:00 – 10:30 PM', title: 'Acoustic Jam & Indie Campus Night', desc: 'Live performances and comedy under the starlit quadrangle.', venue: 'Open Air Amphitheatre' }
  ],
  'Day 2 · Sat 28 Nov': [
    { time: '09:30 AM – 01:00 PM', title: 'RoboRumble — Qualifier Heats', desc: 'Obstacle agility runs, hill climbs, and 8kg bot skirmishes.', venue: 'Central Workshop Courtyard' },
    { time: '10:30 AM – 03:30 PM', title: 'PixelForge — Live UI/UX Sprint', desc: '5-hour design challenge from user research to interactive prototype.', venue: 'Design Studio Lab (Block C)' },
    { time: '01:00 – 06:00 PM', title: 'CyberClash — CTF Security Siege', desc: 'Sandboxed capture-the-flag challenge across web, binary & crypto.', venue: 'Cyber Defense Lab (Block B)' },
    { time: '04:00 – 05:30 PM', title: 'Panel: Zero to Series A at Age 21', desc: 'Y Combinator alumni founders share lessons on building in public.', venue: 'Senate Hall' },
    { time: '06:00 – 07:30 PM', title: 'RoboRumble Grand Finals', desc: 'The championship cage showdown with flamethrowers & spinning saws.', venue: 'Central Workshop Courtyard' },
    { time: '08:00 – 11:00 PM', title: 'Cosmic Pulse: Electronic & Fusion Concert', desc: 'Headline DJ set, live laser projection mapping, and campus dance troupe.', venue: 'Main Sports Complex' }
  ],
  'Day 3 · Sun 29 Nov': [
    { time: '09:00 AM – 12:30 PM', title: 'Hack the Grid — Final Prototype Demos', desc: 'Top 10 shortlisted squads pitch to jury on the main stage.', venue: 'Main Auditorium' },
    { time: '10:30 AM – 02:30 PM', title: 'Neural Nights — Agentic AI Masterclass', desc: 'Hands-on edge AI deployment and micro-grant sprint.', venue: 'Seminar Hall 2 & Cloud Cluster' },
    { time: '02:00 – 05:00 PM', title: 'Pitch Perilous — Shark Pit Finale', desc: '12 student ventures pitch for seed capital and institutional incubation.', venue: 'Senate Hall & Venture Lounge' },
    { time: '05:30 – 07:00 PM', title: 'Grand Valedictory & ₹5,00,000 Prize Ceremony', desc: 'Winners announced, trophies presented, and certificates awarded.', venue: 'Main Auditorium' },
    { time: '07:30 – 09:30 PM', title: 'Innovators Mixer & Networking Dinner', desc: 'Connect with sponsors, recruiters, mentors, and fellow builders.', venue: 'North Lawn & Dining Terrace' }
  ]
};

const GALLERY_DATA = [
  { title: 'Hackathon Midnight Surge', caption: 'Teams debugging at 3:00 AM fueled by caffeine and sheer focus.', gradient: 'linear-gradient(135deg, #1e1b4b, #2230e8)' },
  { title: 'Cage Arena Bot Showdown',  caption: 'Sparks flying as eight-kilo combat bots collide in the hazard pit.', gradient: 'linear-gradient(135deg, #991b1b, #ff5a4e)' },
  { title: 'Shark Pit Pitch Day', caption: 'Student founders fielding questions from venture capital partners.', gradient: 'linear-gradient(135deg, #78350f, #ffd23f)' },
  { title: 'PixelForge UX Critique', caption: 'Design mentors reviewing wireframes and accessibility micro-interactions.', gradient: 'linear-gradient(135deg, #581c87, #8a2be2)' },
  { title: 'Grand Trophy Celebration', caption: 'Winners securing the top ₹2,00,000 prize for their smart city prototype.', gradient: 'linear-gradient(135deg, #064e3b, #12805c)' },
  { title: 'Cultural Rock Concert', caption: 'Over 2,500 students singing in unison during the headline concert.', gradient: 'linear-gradient(135deg, #0f172a, #d6277a)' },
  { title: '1-on-1 Mentor Circles', caption: 'Staff engineers helping participants profile low-latency pipelines.', gradient: 'linear-gradient(135deg, #1e3a8a, #2563eb)' },
  { title: 'Hardware Robotics Expo', caption: 'Autonomous rovers and computer-vision sorting arms on live display.', gradient: 'linear-gradient(135deg, #831843, #db2777)' }
];


const themeBtn = $('#theme-toggle');
const themeIcon = $('#theme-icon');
const themeText = $('#theme-text');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('innovatex-theme', theme);
  if (theme === 'dark') {
    themeText.textContent = 'Light';
    themeBtn.setAttribute('aria-label', 'Switch to light mode');
  } else {
    themeText.textContent = 'Dark';
    themeBtn.setAttribute('aria-label', 'Switch to dark mode');
  }
}

const savedTheme = localStorage.getItem('innovatex-theme') || 
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

themeBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});


const nav = $('#nav');
const menu = $('#menu');
const burger = $('#burger');
const topBtn = $('#top');

burger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
});

$$('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('scroll', () => {
  nav.classList.toggle('solid', window.scrollY > 40);
  topBtn.hidden = window.scrollY < 500;
}, { passive: true });

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const TARGET_TIMESTAMP = new Date('2026-11-27T09:00:00+05:30').getTime();
const padZero = (n) => String(n).padStart(2, '0');

function updateCountdown() {
  const now = Date.now();
  const diff = TARGET_TIMESTAMP - now;

  if (diff <= 0) {
    $('#countdown').innerHTML = '<div style="grid-column:1/-1; background:var(--sun); color:#14123a; padding:1rem; border-radius:14px; font-weight:800; text-align:center;"> The Festival is Officially Live!</div>';
    clearInterval(countdownTimer);
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  $('#d').textContent = padZero(days);
  $('#h').textContent = padZero(hours);
  $('#m').textContent = padZero(minutes);
  $('#s').textContent = padZero(seconds);
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

$('#cal-btn')?.addEventListener('click', () => {
  const icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//InnovateX 2026//Tech Fest Portal//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'SUMMARY:InnovateX 2026 - The Annual Tech & Innovation Fest',
    'DESCRIPTION:Three days of hackathons, robotics combat, startup pitches, and design sprints at Aryabhata Institute of Technology.',
    'LOCATION:Aryabhata Institute of Technology, Sector 12, Dwarka, New Delhi 110075',
    'DTSTART:20261127T033000Z',
    'DTEND:20261129T143000Z',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const tempLink = document.createElement('a');
  tempLink.href = url;
  tempLink.setAttribute('download', 'InnovateX-2026.ics');
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  URL.revokeObjectURL(url);
});

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    statsObserver.unobserve(entry.target);

    const el = entry.target;
    const targetVal = +el.dataset.n;
    const startTime = performance.now();
    const duration = 1400;

    function frame(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.round(targetVal * progress);
      el.textContent = current.toLocaleString('en-IN') + (progress === 1 ? '+' : '');
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}, { threshold: 0.5 });

$$('[data-n]').forEach((el) => statsObserver.observe(el));

const cardsContainer = $('#cards');
const eventSelect = $('#event');

cardsContainer.innerHTML = EVENTS_DATA.map((e) => `
  <article class="card" data-cat="${e.cat}" data-id="${e.id}" style="--c:${e.color}" tabindex="0" role="button" aria-expanded="false" aria-label="${e.name}">
    <span class="hint" aria-hidden="true">+</span>
    <div class="ic">${e.icon.replace('<', '&lt;').replace('>', '&gt;')}</div>
    <h3>${e.name}</h3>
    <p>${e.desc}</p>
    <div class="prize-pill">Prize: ${e.prize}</div>
    <div class="meta">
      <span>${e.when}</span>
      <span>${e.team}</span>
    </div>
    <div class="more">
      <div>
        <ul>
          ${e.more.map((m) => `<li>${m}</li>`).join('')}
        </ul>
        <button type="button" class="pick" data-pick="${e.id}">Register for this event →</button>
      </div>
    </div>
  </article>
`).join('');

eventSelect.insertAdjacentHTML('beforeend', EVENTS_DATA.map((e) => `
  <option value="${e.id}">${e.name} (${e.when} · ${e.prize})</option>
`).join(''));

function toggleCard(card) {
  const isExpanded = card.classList.toggle('open');
  card.setAttribute('aria-expanded', isExpanded);
}

cardsContainer.addEventListener('click', (e) => {
  const pickBtn = e.target.closest('[data-pick]');
  if (pickBtn) {
    const eventId = pickBtn.dataset.pick;
    eventSelect.value = eventId;
    validateField(eventSelect);
    $('#register').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => $('#name').focus(), 400);
    return;
  }

  const card = e.target.closest('.card');
  if (card) toggleCard(card);
});

cardsContainer.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) {
    e.preventDefault();
    toggleCard(e.target);
  }
});


$('#filters').addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  $$('#filters button').forEach((b) => b.classList.toggle('on', b === btn));
  const filterCat = btn.dataset.f;
  applyFilters(filterCat, $('#search-events').value.trim().toLowerCase());
});

$('#search-events').addEventListener('input', (e) => {
  const activeBtn = $('#filters button.on');
  const filterCat = activeBtn ? activeBtn.dataset.f : 'all';
  applyFilters(filterCat, e.target.value.trim().toLowerCase());
});

function applyFilters(cat, query) {
  $$('.card').forEach((card) => {
    const matchesCat = cat === 'all' || card.dataset.cat === cat;
    const cardText = card.textContent.toLowerCase();
    const matchesSearch = !query || cardText.includes(query);
    card.hidden = !(matchesCat && matchesSearch);
  });
}

const scheduleTabs = $('#tabs');
const timelineList = $('#timeline');
const scheduleDays = Object.keys(SCHEDULE_DATA);

scheduleTabs.innerHTML = scheduleDays.map((d, i) => `
  <button type="button" role="tab" class="${i === 0 ? 'on' : ''}" aria-selected="${i === 0}" data-d="${d}">${d}</button>
`).join('');

function renderScheduleDay(dayKey) {
  $$('#tabs button').forEach((b) => {
    const isActive = b.dataset.d === dayKey;
    b.classList.toggle('on', isActive);
    b.setAttribute('aria-selected', isActive);
  });

  timelineList.innerHTML = SCHEDULE_DATA[dayKey].map((item, idx) => `
    <li style="animation-delay: ${idx * 60}ms">
      <time>${item.time}</time>
      <div class="timeline-card">
        <b>${item.title}</b>
        <span>${item.desc}</span>
        <div class="venue"> ${item.venue}</div>
      </div>
    </li>
  `).join('');
}

scheduleTabs.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (btn) renderScheduleDay(btn.dataset.d);
});
renderScheduleDay(scheduleDays[0]);

const galleryGrid = $('#grid');
const lightbox = $('#lb');
const lightboxBox = $('#lbbox');
const lightboxCaption = $('#lbcaption');
const lightboxClose = $('#lbx');

galleryGrid.innerHTML = GALLERY_DATA.map((item, i) => `
  <button type="button" data-i="${i}" data-g="${item.emoji}" style="background: ${item.gradient}" aria-label="Open preview: ${item.title}">
    <span>${item.title}</span>
    <small>${item.caption}</small>
  </button>
`).join('');

galleryGrid.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const item = GALLERY_DATA[+btn.dataset.i];
  lightboxBox.style.background = item.gradient;
  lightboxBox.dataset.g = item.emoji;
  $('#lbtitle').textContent = item.title;
  lightboxCaption.textContent = item.caption;
  lightbox.hidden = false;
  lightboxClose.focus();
});

const closeLightbox = () => {
  lightbox.hidden = true;
};
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

const form = $('#form');
const successBox = $('#ok');

const validationRules = {
  name: (val) => {
    const trimmed = val.trim();
    if (!trimmed) return 'Please enter your full name.';
    if (trimmed.length < 3) return 'Name must be at least 3 characters.';
    if (!/^[A-Za-z\s.'-]+$/.test(trimmed)) return 'Name should contain letters only.';
    return '';
  },
  email: (val) => {
    const trimmed = val.trim();
    if (!trimmed) return 'Please enter your college email.';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(trimmed)) return 'Enter a valid email address (e.g. name@college.edu).';
    return '';
  },
  college: (val) => {
    const trimmed = val.trim();
    if (!trimmed) return 'Please enter your college or institution name.';
    if (trimmed.length < 3) return 'College name must be at least 3 characters.';
    return '';
  },
  event: (val) => {
    if (!val) return 'Please choose an event to participate in.';
    return '';
  },
  terms: (val, el) => {
    if (!el.checked) return 'You must accept the code of conduct to register.';
    return '';
  }
};

function validateField(inputEl) {
  const fieldKey = inputEl.id;
  const validator = validationRules[fieldKey];
  if (!validator) return true;

  const errorMessage = validator(inputEl.value, inputEl);
  const errorEl = $('#e-' + fieldKey);
  if (errorEl) errorEl.textContent = errorMessage;

  if (fieldKey !== 'terms') {
    inputEl.classList.toggle('bad', !!errorMessage);
    inputEl.classList.toggle('good', !errorMessage && inputEl.value.trim().length > 0);
  }
  inputEl.setAttribute('aria-invalid', !!errorMessage);
  return !errorMessage;
}

const formInputs = ['name', 'email', 'college', 'event', 'terms'].map((id) => $('#' + id));

formInputs.forEach((inputEl) => {
  if (!inputEl) return;
  
  inputEl.addEventListener('blur', () => validateField(inputEl));
  
  inputEl.addEventListener('input', () => {
    if (inputEl.classList.contains('bad') || inputEl.value.trim().length >= 3) {
      validateField(inputEl);
    }
  });
  inputEl.addEventListener('change', () => validateField(inputEl));
});

let availableSeats = +(localStorage.getItem('ix-seats') || 137);
$('#seats').textContent = availableSeats;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const validationResults = formInputs.map((el) => validateField(el));
  const firstInvalidIndex = validationResults.indexOf(false);

  if (firstInvalidIndex !== -1) {
    formInputs[firstInvalidIndex].focus();
    return;
  }

  const selectedEventObj = EVENTS_DATA.find((x) => x.id === eventSelect.value) || { name: 'Main Fest', when: 'Nov 27–29' };
  const ticketId = 'IX26-' + Math.random().toString(36).substring(2, 7).toUpperCase();
  const attendeeName = $('#name').value.trim();
  const attendeeEmail = $('#email').value.trim();
  const attendeeCollege = $('#college').value.trim();

  
  try {
    const existing = JSON.parse(localStorage.getItem('ix-registrations') || '[]');
    existing.push({ ticketId, name: attendeeName, email: attendeeEmail, college: attendeeCollege, event: selectedEventObj.name, date: new Date().toISOString() });
    localStorage.setItem('ix-registrations', JSON.stringify(existing));
    localStorage.setItem('ix-seats', Math.max(0, --availableSeats));
  } catch (_) {
    availableSeats = Math.max(0, availableSeats - 1);
  }
  $('#seats').textContent = availableSeats;

  successBox.innerHTML = `
    <div id="pass-card-print">
      <h3> You're in, ${attendeeName.split(' ')[0]}!</h3>
      <p>Your registration for <b>InnovateX 2026</b> is confirmed. A receipt copy was sent to <b>${attendeeEmail}</b>.</p>
      
      <div class="pass-card">
        <div class="pass-header">
          <div>
            <div style="font-family:var(--font-display); font-weight:900; font-size:1.15rem;">
              Innovate<b style="color:var(--sun)">X</b> 2026 <span style="font-size:0.7rem; background:var(--coral); padding:2px 8px; border-radius:99px; margin-left:6px;">DELEGATE PASS</span>
            </div>
            <small style="opacity:0.8">Aryabhata Institute of Technology, New Delhi</small>
          </div>
          <div class="ticket-id">${ticketId}</div>
        </div>

        <div class="pass-body">
          <div>
            <div style="font-size:0.75rem; text-transform:uppercase; opacity:0.7;">Attendee Name</div>
            <div style="font-family:var(--font-display); font-weight:800; font-size:1.3rem;">${attendeeName}</div>
            
            <div style="margin-top:0.6rem; font-size:0.85rem;">
              <span style="opacity:0.7;">Event:</span> <b style="color:var(--sun)">${selectedEventObj.name}</b> (${selectedEventObj.when})<br>
              <span style="opacity:0.7;">Institution:</span> <b>${attendeeCollege}</b>
            </div>
          </div>

          <div class="pass-qr">
            <svg viewBox="0 0 100 100" width="100%" height="100%" fill="#14123a">
              <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z M20,20 h10 v10 h-10 z" />
              <path d="M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z M70,20 h10 v10 h-10 z" />
              <path d="M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z M20,70 h10 v10 h-10 z" />
              <rect x="45" y="15" width="8" height="8" /><rect x="45" y="30" width="8" height="8" />
              <rect x="15" y="45" width="8" height="8" /><rect x="30" y="45" width="8" height="8" />
              <rect x="45" y="45" width="10" height="10" /><rect x="60" y="45" width="8" height="8" />
              <rect x="75" y="45" width="8" height="8" /><rect x="45" y="60" width="8" height="8" />
              <rect x="60" y="60" width="12" height="12" /><rect x="75" y="75" width="15" height="15" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="ticket-actions">
      <button type="button" class="btn" id="print-ticket"> Print / Save Pass</button>
      <button type="button" class="btn ghost" id="register-another" style="color:var(--ink); border-color:var(--ink);">+ Register Another Delegate</button>
    </div>
  `;

  form.style.display = 'none';
  successBox.hidden = false;
  successBox.focus();

  $('#print-ticket').addEventListener('click', () => window.print());
  $('#register-another').addEventListener('click', () => {
    form.reset();
    formInputs.forEach((f) => f.classList.remove('good', 'bad'));
    form.style.display = 'grid';
    successBox.hidden = true;
    $('#name').focus();
  });
});

const ghModal = $('#gh-modal');
const ghOpenButtons = [$('#gh-open-btn'), $('#gh-foot-btn')].filter(Boolean);
const ghCloseBtn = $('#gh-close-btn');
const ghCopyBtn = $('#gh-copy-btn');
const ghUrlInput = $('#gh-url-input');

ghOpenButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    ghModal.hidden = false;
    ghCloseBtn.focus();
  });
});

const closeGhModal = () => {
  ghModal.hidden = true;
};
ghCloseBtn.addEventListener('click', closeGhModal);
ghModal.addEventListener('click', (e) => {
  if (e.target === ghModal) closeGhModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !ghModal.hidden) closeGhModal();
});

ghCopyBtn.addEventListener('click', () => {
  ghUrlInput.select();
  navigator.clipboard.writeText(ghUrlInput.value).then(() => {
    const originalText = ghCopyBtn.textContent;
    ghCopyBtn.textContent = 'Copied! ✓';
    setTimeout(() => { ghCopyBtn.textContent = originalText; }, 2000);
  });
});
