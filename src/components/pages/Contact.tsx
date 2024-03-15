import "/src/contact.css";
import NavBar from "../templates/NavBar";
import headphones from "/image/headphones.svg";
import mail from "/image/mail.svg";
function Contact() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <div className="  mt-5 pb-3 mb-5 pt-5 bg-light rounded container box-shadow mt-8">
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
                    <input
                      className="bg-light"
                      type="text"
                      placeholder="Name *"
                      name="name"
                    ></input>
                  </div>

                  <div className="">
                    <input
                      className="bg-light"
                      type="email"
                      placeholder="Email *"
                      name="email"
                    ></input>
                  </div>
                  <div className="">
                    <input
                      className="bg-light"
                      type="text"
                      placeholder="Message *"
                      name="message"
                    ></input>
                  </div>
                  <div className="">
                    <input
                      className="bg-light"
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                    ></input>
                  </div>

                  <button
                    className="btn btn-primary w-100 py-2 rounded-pill clr-green"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md"></div>
            <div className="col-md-4 bg-dark banner-contact d-none d-md-block">
              <h4 className=" ms-5 mt-4 ">Contact info</h4>
              <div className="container ">
                <div className="row ">
                  <div className="col-md pt-4">
                    <img
                      src={headphones}
                      width={50}
                      height={50}
                      className="rounded mx-auto d-block"
                    />
                    <div className="col pt-3">
                      <p className="text-center">+91 7010157368</p>
                      <p className="text-center">+91 7904826830</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container ">
                <div className="row ">
                  <div className="col-md pt-4">
                    <img
                      src={mail}
                      width={50}
                      height={50}
                      className="rounded mx-auto d-block"
                    />
                    <div className="col pt-3">
                      <p className="text-center">nexrof6@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
