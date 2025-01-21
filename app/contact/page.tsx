export default function Contact() {
  return (
    <div className="container">
      <h1 className="display-4 text-center mb-5">Contact Us</h1>
      <p className="lead text-center mb-5">
        Let us know how we can help you transform your farming practices into sustainable, organic success!
      </p>
      <div className="row">
        <div className="col-md-6 mb-5">
          <h2 className="h3 mb-4">Our Contact Information</h2>
          <ul className="list-unstyled">
            <li className="mb-3">
              <strong>Phone:</strong> +254-700-123-456
            </li>
            <li className="mb-3">
              <strong>Email:</strong> info@climovateorganics.com
            </li>
            <li className="mb-3">
              <strong>Address:</strong> Climovate Organics Headquarters, Westlands Business Park, Nairobi, Kenya
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="h3 mb-4">Send Us a Message</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" name="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
