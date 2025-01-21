import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky-top bg-success text-white py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <Link href="/" className="d-flex align-items-center text-white text-decoration-none">
              <Image src="/logo.svg" alt="Climovate Organics Logo" width={40} height={40} className="me-2" />
              <span className="fs-4 fw-bold">Climovate Organics</span>
            </Link>
          </div>
          <nav className="col-auto ms-auto">
            <ul className="nav">
              <li className="nav-item">
                <Link href="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link text-white">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link text-white">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/privacy" className="nav-link text-white">
                  Privacy
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/terms" className="nav-link text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
