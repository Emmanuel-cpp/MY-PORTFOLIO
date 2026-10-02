import { profile } from '../data.js'
export default function Hero() {
  const photo = '/image/emmanuel.jpeg'
  return (
    <section className="hero" id="top" style={{ '--photo': `url(${photo})` }}>
      <div className="wrap">
        <div className="herotext">
          
          <h1>
            {profile.headline.map((l) => <span className="line" key={l}>{l}</span>)}
            <span className="sub">{profile.sub}</span>
          </h1>
          <p className="lead">{profile.intro}</p>
          <p className="statement">{profile.statement}</p>
          <div className="btns">
            <a className="btn" href="#projects">See our work</a>
            <a className="btn ghost" href={`mailto:${profile.email}`}>Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}