import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-success text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 Climovate Organics Ltd. All rights reserved.</p>
            <p>Business Registration Number: 0123456789 (Registered in Kenya)</p>
          </div>
          <div className="col-md-6 text-md-end">
            <nav>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link href="/privacy" className="text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/terms" className="text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
