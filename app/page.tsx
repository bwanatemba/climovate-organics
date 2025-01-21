import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container">
      <section className="text-center py-5">
        <h1 className="display-4 fw-bold">Welcome to Climovate Organics</h1>
        <Image
          src="/placeholder.svg"
          alt="Climovate Organics Farm"
          width={1200}
          height={600}
          className="img-fluid rounded shadow-lg my-4"
        />
        <p className="lead">
          At Climovate Organics, we're revolutionizing sustainable agriculture through innovative organic solutions that
          empower farmers and ensure environmental stewardship.
        </p>
      </section>

      <section className="py-5">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Our Mission</h3>
            <p>
              To empower farmers with innovative organic solutions that promote sustainable agriculture, enhance crop
              yields, and protect the environment for future generations.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Our Vision</h3>
            <p>
              A world where organic farming practices are the norm, ensuring food security, environmental conservation,
              and prosperous farming communities across East Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center">
        <Link href="/about" className="btn btn-success btn-lg me-3">
          Learn More
        </Link>
        <Link href="/contact" className="btn btn-outline-success btn-lg">
          Contact Us
        </Link>
      </div>
    </div>
  )
}
