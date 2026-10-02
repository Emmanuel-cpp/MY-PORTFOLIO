import { profile as p, services } from '../data.js'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot">
        <div>
          <h3>{p.name}</h3>
          <p>Software, cloud, cybersecurity and AI solutions that keep your business running.</p>
          <div className="social">
            <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${p.email}`}>Email</a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>{['about', 'services', 'projects', 'contact'].map((l) => <li key={l}><a href={`#${l}`}>{l}</a></li>)}</ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>{services.map((s) => <li key={s.title}>{s.title}</li>)}</ul>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} Emmanuel Siamoonga. All rights reserved.</p>
    </footer>
  )
}
