import "/src/contact.css";
function Contact() {
  return (
    <>
      <main>
        <div className="container mt-5 pb-5 pt-5 bg-light rounded">
          <div className="row">
            <div className="col-md-6  ps-5">
              <h1 className="h2 mb-3 text-dark">Contact Us</h1>
              <h6 className="text-dark pt-1">NEXUS REVOLUTION OF THE FUTURE</h6>
              <div className="form-signin ">
                <form
                  action="https://nexrof.selfmade.technology/nexrof"
                  method="get"
                >
                  <div className="">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                    ></input>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Message"
                      name="body"
                    ></input>
                  </div>

                  <button
                    className="btn btn-primary w-100 py-2 rounded-pill"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md"></div>
            <div className="col-md-4 bg-dark banner d-none d-md-block">
              <div className="row mt-5 ms-5">
                <p>+91 7010157368</p>
              </div>
              <div className="row ms-5">
                <p>nexrof6@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
