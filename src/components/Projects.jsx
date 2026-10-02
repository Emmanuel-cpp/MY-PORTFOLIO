import { projects } from '../data.js'
import { Cover } from './Art.jsx'
export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <h2 className="reveal">Why work with us</h2>
        <div className="grid two">
          {projects.map((p, i) => (
            <article className="card project reveal" key={p.title} style={{ '--c': p.color, '--d': `${(i % 2) * 90}ms` }}>
              {p.image ? <img className="cover" src={p.image} alt={p.title} /> : <Cover tag={p.tag} color={p.color} />}
              <div className="body">
                <div className="meta"><span className="tag">{p.tag}</span><span className="status">{p.status}</span></div>
                <h3>{p.title}</h3>
                <p>{p.plain}</p>
                <div className="chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                {p.link && <a className="more" href={p.link} target="_blank" rel="noreferrer">View code →</a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
