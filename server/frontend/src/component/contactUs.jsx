import React from "react";

const ContactUs = () => (
  <div
    className="min-vh-100 d-flex align-items-center justify-content-center text-white"
    style={{ backgroundColor: "#03454A", padding: "50px" }}
  >
    <div className="container text-center bg-white text-dark rounded shadow p-5">
      <h1 className="display-4 fw-bold mb-4">Contact Super Cars Co.</h1>

      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="/showroom.jpg"
            alt="Dealership"
            className="img-fluid rounded showroom"
          />
        </div>
        <div className="col-md-6">
          <img
            src="/contactus.webp"
            alt="Customer Support"
            className="img-fluid rounded contactSupport"
          />
        </div>
      </div>

      <div className="mt-4">
        <h5 className="mb-2 text-primary">Contact Customer Service</h5>
        <p>support@supercarsco.com</p>

        <h5 className="mb-2 text-primary">Contact our Sales Team</h5>
        <p>sales@supercarsco.com</p>

        <h5 className="mb-2 text-primary">Contact our Public Relations Team</h5>
        <p>pr@supercarsco.com</p>

        <h5 className="mb-2 text-primary">Contact Super Cars Co. Office</h5>
        <p>+44 1234 567 890</p>

        <h5 className="mb-2 text-primary">Become a Super Cars Co. Dealer</h5>
        <p>dealer@supercarsco.com</p>

        <h5 className="mb-2 text-primary">Visit our Career Page</h5>
        <p>careers.supercarsco.com</p>
      </div>
    </div>
  </div>
);

export default ContactUs;
