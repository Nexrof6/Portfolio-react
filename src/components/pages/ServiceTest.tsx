import www from "/image/www.png";
import appdev from "/image/appdev.png";
import frontend from "/image/frontend.png";
import backend from "/image/backend.jpeg";
import quality from "/image/quality.jpeg";
import encryption from "/image/encryption.jpeg";
import lowcode from "/image/lowcode.jpeg";
import cloud from "/image/cloud.png";
import api from "/image/api.png";
function ServiceTest() {
  return (
    <>
      {" "}
      <main>
        <div id="service">
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
            <div className="container glass ">
              <div className="row ">
                <div className="col pt-4  ">
                  <img
                    src={www}
                    width={50}
                    height={50}
                    className="rounded float-start "
                  />
                  <br></br>
                  <br></br>
                  <br></br>
                  <p className="content p5 text-start fw-bolder">
                    Website Development
                  </p>
                  <p className="content p6 text-start">
                    A well-designed website is a powerful marketing and<br></br>
                    communication tool that helps build trust<br></br> and
                    generate leads.
                  </p>
                </div>
                {/* this is for app development content */}

                <div className=" col pt-4  ">
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
                    Web applications can reach a global audience.<br></br>
                    They're interactive and engaging, <br></br>so can easily
                    hold users' attention.
                  </p>{" "}
                </div>
              </div>
              {/* this is for api development content */}
              <div className="row">
                <div className="col"></div>

                <div className="container p-4 col">
                  <img
                    src={api}
                    width={50}
                    height={50}
                    className="rounded rounded mx-auto d-block "
                  />
                  <br></br>
                  <br></br>

                  <p className="content p5 text-centre fw-bolder  ">
                    API Development
                  </p>
                  <p className="content p6 text-centre">
                    A well-designed website is a powerful marketing and
                    communication tool that helps build trust and generate
                    leads.
                  </p>
                </div>
                <div className="col"></div>
              </div>

              <br></br>
              <br></br>
            </div>
            <br></br>
            <br></br>
            <p className="content p5 fs-1">What we Use?</p>
            <p className="content p5 fs-1">What You can expect from us!</p>
            <br></br>
            <br></br>
            <div className="container">
              <div className="row">
                {/* this is for frontend development content */}
                <div className=" glass col pt-4 ">
                  <img
                    src={frontend}
                    width={50}
                    height={50}
                    className="rounded float-centre"
                  />{" "}
                  <br></br>
                  <br></br>
                  <p className="content p5 text-centre fw-bolder">
                    FrontEnd Development
                  </p>
                  <p className="content p3 text-centre">
                    A well-designed website is a powerful marketing and
                    communication tool that helps build trust and generate
                    leads.
                  </p>
                </div>
                {/* this is for backend development content */}
                <div className="glass col pt-4 ">
                  <img
                    src={backend}
                    width={50}
                    height={50}
                    className="rounded float-centre"
                  />
                  <br></br>
                  <br></br>

                  <p className="content p5 text-centre fw-bolder">
                    BackEnd Development
                  </p>
                  <p className="content p3 text-centre">
                    A well-designed website is a powerful marketing and
                    communication tool that helps build trust and generate
                    leads.
                  </p>
                </div>
                {/* this is for quality content */}
                <div className="glass col pt-4 ">
                  <img
                    src={quality}
                    width={50}
                    height={50}
                    className="rounded float-centre"
                  />
                  <br></br>
                  <br></br>

                  <p className="content p5 text-centre fw-bolder">
                    Quality Assurance
                  </p>
                  <p className="content p3 text-centre">
                    We understand your expectations.Quality is also our top
                    priority .you will always receive top-notch results that
                    satisfies your requirements and objectives .
                  </p>
                </div>
                <div className="container">
                  <div className="row">
                    {/* this is for encryption development content */}
                    <div className="glass col pt-4 ">
                      <img
                        src={encryption}
                        width={50}
                        height={50}
                        className="rounded float-centre"
                      />{" "}
                      <br></br>
                      <br></br>
                      <p className="content p5 text-centre fw-bolder">
                        Encryption
                      </p>
                      <p className="content p3 text-centre">
                        With the security of your online presence as our
                        priority, you can safeguard your valuable data and build
                        trust with your customers.Trust is the foundation of
                        every partnership .
                      </p>
                    </div>
                    {/* this is for lowcode development content */}
                    <div className="glass col pt-4 ">
                      <img
                        src={lowcode}
                        width={50}
                        height={50}
                        className="rounded float-centre"
                      />
                      <br></br>
                      <br></br>

                      <p className="content p5 text-centre fw-bolder">
                        Lowcode Development
                      </p>
                      <p className="content p3 text-centre">
                        We also specialize in building no-code and low-code web
                        solutions that allow clients to save time and money. We
                        use platforms like Webflow or Mendix.
                      </p>
                    </div>
                    {/* this is for cloud content */}
                    <div className="glass col pt-4 ">
                      <img
                        src={cloud}
                        width={50}
                        height={50}
                        className="rounded float-centre"
                      />
                      <br></br>
                      <br></br>

                      <p className="content p5 text-centre fw-bolder">
                        Cloud Development
                      </p>
                      <p className="content p3 text-centre">
                        Furthermore, we use cloud services like Google Cloud,
                        Amazon Web Services, and Microsoft Azure for fast and
                        secure application deployment.
                      </p>
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
export default ServiceTest;
