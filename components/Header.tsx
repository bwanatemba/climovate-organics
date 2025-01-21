"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky-top custom-bg-primary text-white py-3">
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
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
              ].map(({ href, label }) => (
                <li key={href} className="nav-item">
                  <Link href={href} className={`nav-link text-white ${pathname === href ? "active" : ""}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}