import Link from "next/link";

export default function Footer() {
  return (
    <footer className="custom-bg-primary text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Climovate Organics Ltd. All rights reserved.</p>
            <p>Business Registration Number: BRS-009879 (Registered in Kenya)</p>
          </div>
          <div className="col-md-6 text-md-end">
            <nav>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link href="/privacy" className="text-white footer-link">
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/terms" className="text-white footer-link">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <style jsx>{`
        .footer-link {
          position: relative;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: var(--secondary-color) !important;
          text-decoration: none;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -2px;
          left: 0;
          background-color: var(--secondary-color);
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.3s ease-in-out;
        }
        .footer-link:hover::after {
          visibility: visible;
          transform: scaleX(1);
        }
      `}</style>
    </footer>
  );
}
