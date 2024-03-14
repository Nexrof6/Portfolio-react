import "/src/contact.css";
function Contact() {
  return (
    <>
      <main>
        <div className="  mt-5 pb-3 mb-5 pt-5 bg-light rounded container box-shadow">
          <div className="row ">
            <div className="col-md-6  container p-4 ">
              <h1 className="h2 mb-3 text-dark">Contact Us</h1>
              <h6 className="text-dark pt-1">NEXUS REVOLUTION OF THE FUTURE</h6>
              <div className="form-signin ">
                <form
                  action="https://nexrof.selfmade.technology/nexrof"
                  method="get"
                >
                  <div className="">
                    <input type="text" placeholder="Name *" name="name"></input>
                  </div>

                  <div className="">
                    <input
                      type="email"
                      placeholder="Email *"
                      name="email"
                    ></input>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Message *"
                      name="body"
                    ></input>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
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
              <h4 className="ms-5 mt-4 ">Contact info</h4>
              <div className="row mt-4 ms-5">
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
