import Image from "next/image"

export default function About() {
  return (
    <div className="container">
      <h1 className="display-4 text-center mb-5">About Climovate Organics</h1>
      <Image
        src="/c_o_2.jpg"
        alt="About Climovate Organics"
        width={1200}
        height={600}
        className="img-fluid rounded shadow-lg mb-5"
      />
      <section className="mb-5">
        <h2 className="h3 mb-4">Our Products and Services</h2>
        <ul className="list-group">
          <li className="list-group-item">
            Organic Fertilizers: Eco-friendly solutions to improve soil health and crop yield.
          </li>
          <li className="list-group-item">Natural Pesticides: Chemical-free protection against pests and diseases.</li>
          <li className="list-group-item">
            Training & Consultancy: Workshops and resources for adopting organic farming practices.
          </li>
          <li className="list-group-item">
            Sustainability Tools: Data-driven dashboards and climate-specific farming advice.
          </li>
        </ul>
      </section>
      <section className="mb-5">
        <h2 className="h3 mb-4">Who We Serve</h2>
        <p className="lead">
          Our services are tailored for small to medium-scale farmers, agricultural cooperatives, and agribusinesses in
          Kenya and across East Africa.
        </p>
      </section>
      <section>
        <h2 className="h3 mb-4">Certifications & Licenses</h2>
        <ul className="list-group">
          <li className="list-group-item">Certified by the Kenya Organic Agriculture Network (KOAN).</li>
          <li className="list-group-item">
            Licensed by the Kenya Plant Health Inspectorate Service (KEPHIS) for organic input distribution.
          </li>
        </ul>
      </section>
    </div>
  )
}
