
function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <p className="text-primary fw-semibold">
                LEGAL ASSOCIATES
              </p>

              <h1 className="display-4 fw-bold">
                Trusted Legal Advice for You and Your Family
              </h1>

              <p className="text-secondary mt-3">
                We help individuals and businesses understand their
                legal rights and find practical solutions to their
                legal concerns.
              </p>

              <a href="#contact" className="btn btn-primary mt-3">
                Contact Our Office
              </a>
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=900&q=80"
                alt="Law books and scales of justice"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-md-4">
              <h2 className="fw-bold">About Our Firm</h2>
            </div>

            <div className="col-md-8">
              <p className="text-secondary">
                We believe that legal advice should be clear,
                practical and easy to understand. We take time to
                understand our clients' concerns and explain their
                available legal options.
              </p>

              <p className="text-secondary mb-0">
                Our approach is based on professional responsibility,
                clear communication and careful attention to each matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Why Choose Us?</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="fw-bold">Clear Communication</h5>
                  <p className="text-secondary mb-0">
                    We explain legal procedures in simple language.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="fw-bold">Professional Guidance</h5>
                  <p className="text-secondary mb-0">
                    We help clients understand their legal options.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="fw-bold">Personal Attention</h5>
                  <p className="text-secondary mb-0">
                    Every legal concern deserves careful consideration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Need Legal Assistance?</h2>

          <p className="text-secondary mt-3">
            Contact our office to discuss your legal concerns.
          </p>

          <a
            href="mailto:contact@example.com"
            className="btn btn-primary"
          >
            Contact Us
          </a>
        </div>
      </section>

     
     
    </>
  )
}

export default Home
