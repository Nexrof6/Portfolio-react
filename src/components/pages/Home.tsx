import ParallaxMultiLayer from "../effects/Parallax/ParallaxMultiLayer";
import Footer from "../templates/Footer";
import NavBar from "../templates/NavBar";
import AboutTest from "./AboutTest";

function Home() {
  return (
    <>
      <main>
        <NavBar></NavBar>
        <div className="container">
          <ParallaxMultiLayer>
            <span
              className="display-3"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-once="true"
            >
              {" "}
              NEXUS REVOLUTION OF THE FUTURE
            </span>
          </ParallaxMultiLayer>
          <div className="row">
            <div className="col-md">
              <div className="row">
                {" "}
                <h1 style={{ color: "green" }}>
                  What do we do?
                </h1> <br></br> <br></br>
                <p className="content p2">
                  We at Nexrof are proficient developers who create Innovative
                  Web and APP Solutions to give life to your ideas.Crafting Code
                  and making dreams a reality is our main motto
                </p>
              </div>
              <div className="row">
                <p className="content p3" style={{ color: "green" }}>
                  Why choose us ?<p />
                </p>
                <br></br> <br></br>
                <p className="content p4">
                  Encryption and Quality are our top most priorities.Also Our
                  partnership does not end once the project is over.We make
                  updates,fix bugs and upgrade it whenever you want us to.Your
                  project is in excellent hands when it is with us.
                </p>
              </div>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <img
                src="/image/img-1.png"
                className="img-thumbnail"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "none",
                }}
                alt=""
              />
            </div>
          </div>

          <AboutTest></AboutTest>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;
