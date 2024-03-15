import "/src/contact.css";
import NavBar from "../templates/NavBar";
import headphones from "/image/headphones.svg";
import mail from "/image/mail.svg";
function Contact() {
  return (
    <>
      <NavBar></NavBar>
      <main style={{ paddingTop: "5%" }}>
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
                      required
                    ></input>
                  </div>

                  <div className="">
                    <input
                      className="bg-light"
                      type="email"
                      placeholder="Email *"
                      name="email"
                      required
                    ></input>
                  </div>
                  <div className="">
                    <input
                      className="bg-light"
                      type="text"
                      placeholder="Message *"
                      name="message"
                      required
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
              <h4 className="container ms-5 mt-4 ">Contact info</h4>
              <div className="container ">
                <div className="row ">
                  <div className="col-md pt-4">
                    <img
                      className="rounded mx-auto d-block"
                      width="32"
                      height="32"
                      src="/images/contact/headphone.svg"
                      alt=""
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
                      className="rounded mx-auto d-block"
                      width="40"
                      height="40"
                      src="images/contact/email.svg"
                      alt="mail"
                    />

                    <div className="col pt-3">
                      <p className="text-center">nexrof6@gmail.com</p>
                    </div>
                    <div className="row">
                      <div className="col">
                        {/* the below code is for Facebook img */}
                        <a
                          data-mdb-ripple-init
                          className="btn text-white btn-floating m-1 rounded mx-auto d-block"
                          style={{ backgroundColor: "#ffffff" }}
                          href="https://www.facebook.com/share/SDUv9vhgHKJBaGd1/?mibextid=qi2Omg"
                          // next two lines is for redireting the pade into new tab
                          target="_blank"
                          rel="noopener noreferrer"
                          role="button"
                        >
                          <img
                            width="20"
                            height="20"
                            src="/images/social_media/facebook.svg"
                            alt=""
                          />
                          {/* //img content rendering */}
                        </a>
                      </div>
                      <div className="col">
                        {/* the below code is for X img */}
                        <a
                          data-mdb-ripple-init
                          className="btn text-white btn-floating m-1 rounded mx-auto d-block"
                          style={{ backgroundColor: "#ffffff" }}
                          href="https://x.com/Nexrof6?t=k7pykzN59FZgzFpCDnenUQ&s=09"
                          target="_blank"
                          rel="noopener noreferrer"
                          role="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0 0 50 50"
                            style={{ fill: "#1A1A1A;" }}
                          >
                            <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                          </svg>
                          {/* //img content rendering */}
                        </a>
                      </div>
                      <div className="col">
                        {/* the below code is for insta img */}

                        <a
                          data-mdb-ripple-init
                          className="btn text-white btn-floating m-1 rounded mx-auto d-block"
                          style={{ backgroundColor: "#ffffff" }}
                          href="https://www.instagram.com/nexrof?igsh=cXU0andnaDY0Zndz"
                          target="_blank"
                          rel="noopener noreferrer"
                          role="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0 0 50 50"
                            style={{ fill: "#1A1A1A;" }}
                          >
                            <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                          </svg>
                          {/* //img content rendering */}
                        </a>
                      </div>
                      <div className="col">
                        {/* the below code is for linkedin img */}
                        <a
                          data-mdb-ripple-init
                          className="btn text-white btn-floating m-1 rounded mx-auto d-block"
                          style={{ backgroundColor: "#ffffff" }}
                          href="https://www.linkedin.com/in/nexrof-undefined-990b892b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                          target="_blank"
                          rel="noopener noreferrer"
                          role="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0 0 50 50"
                            style={{ fill: "#1A1A1A;" }}
                          >
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                          </svg>
                          {/* //img content rendering */}
                        </a>
                      </div>
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
