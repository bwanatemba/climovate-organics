export default function Terms() {
  return (
    <div className="container">
      <h1 className="display-4 text-center mb-5">Terms of Service</h1>

      <section className="mb-5">
        <h2 className="h3 mb-4">User Rights and Responsibilities</h2>
        <ul className="list-group">
          <li className="list-group-item">
            Customers must provide accurate information when registering or purchasing services.
          </li>
          <li className="list-group-item">
            Farmers are responsible for the safe use of products according to provided guidelines.
          </li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Business Practices</h2>
        <ul className="list-group">
          <li className="list-group-item">
            We ensure all products meet quality standards and are delivered as promised.
          </li>
          <li className="list-group-item">Refunds and replacements are processed for damaged or defective products.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Dispute Resolution</h2>
        <p className="lead">
          In the event of disputes, we recommend resolving them through mutual discussion. If unresolved, disputes will
          be referred to Kenyan consumer protection authorities.
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Consent Mechanisms</h2>
        <p className="lead mb-3">
          We use WhatsApp to keep our customers updated with farming tips, product updates, and promotions.
        </p>
        <h3 className="h4 mb-3">Opt-In Process</h3>
        <p>Customers can opt-in by selecting the WhatsApp communication option during registration or checkout.</p>
        <h3 className="h4 mb-3">Opt-Out Process</h3>
        <p>To stop receiving WhatsApp messages, reply "STOP" to our WhatsApp number or contact us directly.</p>
      </section>

      <section>
        <h2 className="h3 mb-4">Compliance Statements</h2>
        <ul className="list-group">
          <li className="list-group-item">
            We comply with Kenya's Data Protection Act, 2019, and adhere to GDPR regulations for customers within the
            European Union.
          </li>
          <li className="list-group-item">
            All WhatsApp communications are conducted in accordance with WhatsApp's Business Policy.
          </li>
          <li className="list-group-item">
            We strictly follow Kenya's agricultural input regulations and global organic farming standards.
          </li>
        </ul>
      </section>
    </div>
  )
}
