import { services } from '../data.js'
export default function Services() {
  return (
    <section id="services" className="alt">
      <div className="wrap">
        <h2 className="reveal">How We Can Help</h2>
        <div className="grid">
          {services.map((s, i) => (
            <div className="card service reveal" key={s.title} style={{ '--d': `${(i % 3) * 90}ms` }}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
