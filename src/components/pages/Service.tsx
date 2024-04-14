import www from "/images/service/www.svg";
import appdev from "/images/service/app.svg";
import api from "/images/service/api.svg";

import frontend from "/images/service/frontend.svg";
import backend from "/images/service/backend.svg";
import quality from "/images/service/quality.svg";
import encryption from "/images/service/encryption.svg";
import lowcode from "/images/service/lowcode.svg";
import cloud from "/images/service/cloud.svg";

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
              The right web development solutions can take your business to new
              heights.
            </p>
            <p className="content p6">
              Feel free to explore our services and create powerful websites and
              applications that fulfill specific business needs.
            </p>{" "}
            <br></br>
            <br></br>
            {/* this is for web development content */}
            <div className="container glass ">
              <div className="row ">
                <div className="col-md pt-4  ">
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
                    Experience the Web Design Revolution here at Nexrof.
                    <br></br>We provide quality UI/ UX <br></br>to make
                    exceptional Websites.
                  </p>
                </div>
                {/* this is for app development content */}

                <div className=" col-md pt-4  ">
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
                    We bridge the Gap Between Ideas and Reality <br></br>by
                    bringing ideas to life by our application.<br></br>Your
                    vision is in right hands when they are in our hands.
                  </p>{" "}
                </div>
              </div>
              {/* this is for api development content */}
              <div className="row">
                <div className="col"></div>

                <div className="container p-4 col-md">
                  <img
                    src={api}
                    width={50}
                    height={50}
                    className="rounded rounded mx-auto d-block "
                  />
                  <br></br>

                  <p className="content p5 text-centre fw-bolder  ">
                    API Development
                  </p>
                  <p className="content p6 text-centre">
                    We build APIs that allow different software components to
                    communicate. Our APIs are powerful, resilient, and secure
                  </p>
                </div>
                <div className="col"></div>
              </div>

              <br></br>
              <br></br>
            </div>
            <br></br>
            <br></br>
            <p className="content p5 fs-1">What You can expect from us!</p>
            <br></br>
            <br></br>
            <div className="container">
              <div className="row">
                {/* this is for frontend development content */}
                <div className=" glass col-md pt-4 ">
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
                  <p className="content p3 text-centre p8">
                    We focus on enhancing user experiences through intuitive
                    designs and seamless interactions and specialize in creating
                    responsive and visually appealing user interfaces
                  </p>
                </div>
                {/* this is for backend development content */}
                <div className="glass col-md pt-4 ">
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
                  <p className="content p3 text-centre p8">
                    We at Nexrof are good at optimizing server performance,
                    managing databases and server side logics and build
                    efficient back end systems
                  </p>
                </div>
                {/* this is for quality content */}
                <div className="glass col-md pt-4 ">
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
                  <p className="content p3 text-centre p8">
                    We understand your expectations.Quality is also our top
                    priority .you will always receive top-notch results that
                    satisfies your requirements and objectives.
                  </p>
                </div>
                <div className="container">
                  <div className="row">
                    {/* this is for encryption development content */}
                    <div className="glass col-md pt-4 ">
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
                      <p className="content p3 text-centre p8">
                        With the security of your online presence as our
                        priority, you can safeguard your valuable data and build
                        trust with your customers.Trust is the foundation of
                        every partnership
                      </p>
                    </div>
                    {/* this is for lowcode development content */}
                    <div className="glass col-md pt-4 ">
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
                      <p className="content p3 text-centre p8">
                        Empower Your Business with Low-Code Solutions.We provide
                        Low code as a user-friendly solution for tailored
                        application . low code helps in collaboration between
                        technical and non-technical clients.
                      </p>
                    </div>
                    {/* this is for cloud content */}
                    <div className="glass col-md pt-4 ">
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
                      <p className="content p3 text-centre p8">
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
