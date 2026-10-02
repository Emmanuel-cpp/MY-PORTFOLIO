// Built-in illustrations: no image files needed. Real screenshots can override them (see data.js).
export function HeroArt() {
  return (
    <svg className="heroart" viewBox="0 0 420 360" aria-hidden="true">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0d47a1" /><stop offset="1" stopColor="#00897b" /></linearGradient>
      </defs>
      <circle cx="210" cy="180" r="160" fill="url(#g1)" opacity=".12" />
      <circle cx="210" cy="180" r="120" fill="none" stroke="#0d47a1" strokeOpacity=".25" strokeDasharray="4 8" className="spin" />
      <g className="float a">
        <rect x="30" y="50" width="220" height="150" rx="12" fill="#1a237e" />
        <circle cx="50" cy="68" r="5" fill="#ef5350" /><circle cx="66" cy="68" r="5" fill="#ffca28" /><circle cx="82" cy="68" r="5" fill="#66bb6a" />
        <rect x="50" y="95" width="90" height="8" rx="4" fill="#00897b" /><rect x="70" y="115" width="140" height="8" rx="4" fill="#90caf9" />
        <rect x="70" y="135" width="100" height="8" rx="4" fill="#fff" opacity=".7" /><rect x="50" y="155" width="120" height="8" rx="4" fill="#00897b" />
      </g>
      <g className="float b"><path d="M290 150a34 34 0 0 1 62-16a30 30 0 0 1 36 40a24 24 0 0 1-8 46H300a30 30 0 0 1-10-70z" fill="#0d47a1" /><path d="M320 185l14 14 26-30" stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" /></g>
      <g className="float c"><path d="M200 215l58 21v48c0 38-26 58-58 70-32-12-58-32-58-70v-48z" fill="#00897b" /><rect x="184" y="262" width="32" height="26" rx="5" fill="#fff" /><path d="M190 262v-8a10 10 0 0 1 20 0v8" stroke="#fff" strokeWidth="5" fill="none" /></g>
    </svg>
  )
}

const icons = {
  shield: <><path d="M0-42l34 12v28c0 22-15 34-34 42-19-8-34-20-34-42v-28z" fill="#fff" /><path d="M-14 0l10 10 18-20" stroke="#0d47a1" strokeWidth="6" fill="none" strokeLinecap="round" /></>,
  cloud: <path d="M-42 22a24 24 0 0 1 6-46a30 30 0 0 1 56-6a26 26 0 0 1 24 52z" fill="#fff" />,
  mobile: <><rect x="-24" y="-42" width="48" height="84" rx="9" fill="#fff" /><rect x="-18" y="-32" width="36" height="58" rx="3" fill="#0d47a1" opacity=".35" /><circle cy="34" r="3" fill="#0d47a1" /></>,
  code: <text textAnchor="middle" y="18" fontSize="58" fontWeight="700" fill="#fff" fontFamily="monospace">{'</>'}</text>,
}
const kindOf = (tag) => (tag.includes('Cyber') ? 'shield' : tag.includes('Mobile') || tag.includes('Design') ? 'mobile' : tag.includes('IoT') || tag.includes('Final') ? 'cloud' : 'code')

export function Cover({ tag, color }) {
  return (
    <svg className="cover" viewBox="0 0 400 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="150" fill={color} />
      <circle cx="40" cy="20" r="90" fill="#fff" opacity=".07" /><circle cx="380" cy="150" r="110" fill="#000" opacity=".12" />
      {[...Array(6)].map((_, i) => <circle key={i} cx={30 + i * 68} cy={130 - (i % 3) * 10} r="2.5" fill="#fff" opacity=".4" />)}
      <g transform="translate(200 75)" className="coverico">{icons[kindOf(tag)]}</g>
    </svg>
  )
}
