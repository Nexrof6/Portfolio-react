import insta from "/image/insta.png";
import linkedin from "/image/linkedin.png";
import github from "/image/github.png";
import facebook from "/image/facebook.png";
import x from "/image/x.png";

function Footer() {
  return (
    <>
      {" "}
      <footer className="bg-body-tertiary text-center">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <h3>Contact us on :</h3>

            {/* the below code is for Facebook img */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ffffff" }}
              href="https://www.facebook.com/share/SDUv9vhgHKJBaGd1/?mibextid=qi2Omg"
              role="button"
            >
              <img src={facebook} width={40} height={40} />
              {/* //img content rendering */}
            </a>

            {/* the below code is for X img */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ffffff" }}
              href="https://x.com/Nexrof6?t=k7pykzN59FZgzFpCDnenUQ&s=09"
              role="button"
            >
              <img src={x} width={40} height={40} />
              {/* //img content rendering */}
            </a>

            {/* the below code is for insta img */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ffffff" }}
              href="https://www.instagram.com/nexrof?igsh=cXU0andnaDY0Zndz"
              role="button"
            >
              <img src={insta} width={40} height={40} />
              {/* //img content rendering */}
            </a>

            {/* the below code is for linkedin img */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ffffff" }}
              href="https://www.linkedin.com/in/nexrof-undefined-990b892b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              role="button"
            >
              <img src={linkedin} width={40} height={40} />
              {/* //img content rendering */}
            </a>

            {/* the below code is for github img */}
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ffffff" }}
              href="https://github.com/Nexrof6"
              role="button"
            >
              <img src={github} width={40} height={40} />
              {/* //img content rendering */}
            </a>
          </section>
        </div>
        <h4>Nexrof</h4>
        <h5>nexrof6@gmail.com</h5>
        <div
          className="text-center p-3"
          //   style="background-color: rgba(0, 0, 0, 0.05);"
          style={{ backgroundColor: "#rgba(0, 0, 0, 0.05)" }}
        >
          {" "}
          Developed by Nexrof Team © 2024 Copyright:
          <a className="text-body" href="https://nexrof.com/">
            Nexrof.com
          </a>
        </div>
      </footer>{" "}
    </>
  );
}
export default Footer;
