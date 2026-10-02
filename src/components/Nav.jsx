const links = ['services', 'projects', 'contact']
export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#top" className="logo">Emmanuel Siamoonga</a>
        <nav>{links.map((l) => <a key={l} href={`#${l}`}>{l}</a>)}</nav>
      </div>
    </header>
  )
}
