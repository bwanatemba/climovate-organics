"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="custom-bg-primary text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2025 Climovate Organics Ltd. All rights reserved.</p>
            <p>Business Registration Number: BN-9PCGB657 (Registered in Kenya)</p>
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
    </footer>
  );
}
