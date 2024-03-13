import www from "/image/www.png";
import appdev from "/image/appdev.png";
import frontend from "/image/frontend.png";
import backend from "/image/backend.jpeg";
import quality from "/image/quality.jpeg";
import encryption from "/image/encryption.jpeg";
import lowcode from "/image/lowcode.jpeg";
import cloud from "/image/cloud.png";
function ServiceTest() {
  return (
    <>
      {" "}
      <main>
        <div className="container text-center">
          <p className="content p5 fs-1">Our Services</p>
          <br></br>
          <p className="content p5">
            Achieve your business goals with web development solutions
          </p>
          <p className="content p6">
            Our battle-tested developers specialize in a wide range of web
            development services.Here are some of the solutions that we can
            deliver for you.
          </p>{" "}
          <br></br>
          <br></br>
          {/* this is for web development content */}
          <img
            src={www}
            width={50}
            height={50}
            className="rounded float-start"
          />
          <br></br>
          <br></br>
          <br></br>
          <p className="content p5 text-start fw-bolder">Website Development</p>
          <p className="content p6 text-start">
            A well-designed website is a powerful marketing and communication{" "}
            <br></br>
            tool that helps build trust and generate leads.
          </p>
          {/* this is for app development content */}
          <img
            src={appdev}
            width={50}
            height={50}
            className="rounded float-end"
          />
          <br></br>
          <br></br>
          <br></br>
          <p className="content p5 text-end fw-bolder">
            Mobile App Development
          </p>
          <p className="content p6 text-end">
            Web applications can reach a global audience.<br></br>They're
            interactive and engaging, so can easily hold users' attention.
          </p>{" "}
          <br></br>
          <br></br>
          <p className="content p5 fs-1">What we Use?</p>
          <br></br>
          <p className="content p5 fs-1">What You can expect from us!</p>
          <br></br>
          <br></br>
          <div className="container">
            <div className="row">
              <div className="col">
                {/* this is for frontend development content */}
                <img
                  src={frontend}
                  width={50}
                  height={50}
                  className="rounded float-start"
                />{" "}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p className="content p5 text-start fw-bolder">
                  FrontEnd Development
                </p>
                <p className="content p3 text-start">
                  A well-designed website is a powerful marketing and
                  communication tool that helps build trust and generate leads.
                </p>
              </div>
              <div className="col">
                {/* this is for backend development content */}
                <img
                  src={backend}
                  width={50}
                  height={50}
                  className="rounded float-centre"
                />
                <br></br>
                <br></br>
                <br></br>
                <p className="content p5 text-centre fw-bolder">
                  BackEnd Development
                </p>
                <p className="content p3 ">
                  A well-designed website is a powerful marketing and
                  communication tool that helps build trust and generate leads.
                </p>
              </div>
              <div className="col">
                {/* this is for quality content */}
                <img
                  src={quality}
                  width={50}
                  height={50}
                  className="rounded float-end"
                />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p className="content p5 text-end fw-bolder">
                  Quality Assurance
                </p>
                <p className="content p3 text-end">
                  We understand your expectations .Quality is also our top
                  priority .you will always receive top-notch results that
                  satisfies your requirements and objectives .
                </p>
              </div>
              <div className="row">
                <div className="col">
                  {/* this is for encryption development content */}
                  <img
                    src={encryption}
                    width={50}
                    height={50}
                    className="rounded float-start"
                  />{" "}
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <p className="content p5 text-start fw-bolder">Encryption</p>
                  <p className="content p3 text-start">
                    With the security of your online presence as our priority,
                    you can safeguard your valuable data and build trust with
                    your customers.Trust is the foundation of every partnership
                    .
                  </p>
                </div>
                <div className="col">
                  {/* this is for lowcode development content */}
                  <img
                    src={lowcode}
                    width={50}
                    height={50}
                    className="rounded float-centre"
                  />
                  <br></br>
                  <br></br>
                  <br></br>
                  <p className="content p5 text-centre fw-bolder">
                    LOwcode Development
                  </p>
                  <p className="content p3 ">
                    We also specialize in building no-code and low-code web
                    solutions that allow clients to save time and money. We use
                    platforms like Webflow or Mendix.
                  </p>
                </div>
                <div className="col">
                  {/* this is for cloud content */}
                  <img
                    src={cloud}
                    width={50}
                    height={50}
                    className="rounded float-end"
                  />
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <p className="content p5 text-end fw-bolder">
                    Cloud Development
                  </p>
                  <p className="content p3 text-end">
                    Furthermore, we use cloud services like Google Cloud, Amazon
                    Web Services, and Microsoft Azure for fast and secure
                    application deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default ServiceTest;
