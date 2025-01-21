export default function Privacy() {
  return (
    <div className="container">
      <h1 className="display-4 text-center mb-5">Privacy Policy</h1>
      <p className="lead mb-5">We value your privacy and are committed to protecting your personal information.</p>

      <section className="mb-5">
        <h2 className="h3 mb-4">What Data We Collect</h2>
        <ul className="list-group">
          <li className="list-group-item">
            Name, email, phone number, and physical address for communication purposes.
          </li>
          <li className="list-group-item">Farming activity data (optional) for tailoring our recommendations.</li>
          <li className="list-group-item">Payment details for transactions.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">How We Use Your Data</h2>
        <ul className="list-group">
          <li className="list-group-item">To process and fulfill your orders.</li>
          <li className="list-group-item">To provide tailored farming advice.</li>
          <li className="list-group-item">For marketing and promotional purposes (with your consent).</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Data Protection Practices</h2>
        <ul className="list-group">
          <li className="list-group-item">Encryption of sensitive data to ensure security.</li>
          <li className="list-group-item">Restricted access to customer data within our team.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h3 mb-4">Your Rights</h2>
        <ul className="list-group">
          <li className="list-group-item">Access: View the data we hold about you.</li>
          <li className="list-group-item">Rectification: Correct any inaccurate information.</li>
          <li className="list-group-item">Deletion: Request the removal of your personal data.</li>
        </ul>
      </section>

      <p className="mt-5">For any inquiries regarding your data, contact us at privacy@climovateorganics.com.</p>
    </div>
  )
}
