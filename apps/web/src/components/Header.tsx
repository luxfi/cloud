import { Link } from 'wouter'
import { Logo } from './Logo'
import { TryLux } from './TryLux'

export function Header() {
  return (
    <header className="site">
      <div className="inner">
        <Logo />
        <nav className="primary">
          <Link href="/services">Products</Link>
          <a href="https://docs.lux.network">Docs</a>
          <a href="https://lux.network">Network</a>
        </nav>
        <div className="right-side">
          <TryLux />
          <a href="https://lux.id" className="btn">Sign In</a>
          <Link href="/dashboard" className="btn primary">Dashboard</Link>
        </div>
      </div>
    </header>
  )
}
