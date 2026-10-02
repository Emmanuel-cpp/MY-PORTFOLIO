import { profile as p } from '../data.js'
export default function Contact() {
  const rows = [
    ['Email', p.email, `mailto:${p.email}`],
    ['Phone / WhatsApp', p.phone, `https://wa.me/${p.phone.replace(/\D/g, '')}`],
    ['GitHub', 'emmanuel-cpp', p.github],
    ['LinkedIn', 'Emmanuel Siamoonga', p.linkedin],
  ]
  return (
    <section id="contact">
      <div className="wrap">
        <h2 className="reveal">Let's work together</h2>
        <p className="center">Need an app, a security checkup, IT help or lessons? Send a message and get a plain-language plan and price.</p>
        <div className="grid">
          {rows.map(([k, v, h]) => (
            <a className="card contact reveal" key={k} href={h} target="_blank" rel="noreferrer"><small>{k}</small><strong>{v}</strong></a>
          ))}
        </div>
      </div>
    </section>
  )
}
