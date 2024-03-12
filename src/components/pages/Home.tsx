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
          <div>
            <p className="content">
              We at Nexrof are proficient developers <br></br> who create
              Innovative <span className="text-success">Web and APP </span>
              Solutions to give life to your ideas .<br></br>Crafting Code and
              making dreams a reality is our main
            </p>
          </div>
          <AboutTest></AboutTest>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;
