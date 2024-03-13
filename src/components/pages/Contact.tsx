import "/src/contact.css";
function Contact() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            className="img-thumbnail mx-auto d-block"
            src="/image/contact.png"
            alt=""
            style={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          />
        </div>
        <div className="col">
          <div className="form-signin ">
            <form
              action="https://nexrof.selfmade.technology/nexrof"
              method="get"
            >
              <h1 className="h3 mb-3 fw-normal">Contcact Us</h1>

              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  name="email"
                ></input>
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Message"
                  name="body"
                ></input>
                <label htmlFor="floatingPassword">Message</label>
              </div>

              <button className="btn btn-primary w-100 py-2" type="submit">
                Send
              </button>
              <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
