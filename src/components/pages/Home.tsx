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
              // data-aos="fade-up"
              // data-aos-offset="200"
              // data-aos-delay="50"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
              // data-aos-mirror="true"
              // data-aos-once="True"
              // data-aos-anchor-placement="top-center"
              className="display-3"
            >
              {" "}
              NEXUS REVOLUTION OF THE FUTURE
            </span>
          </ParallaxMultiLayer>{" "}
          <AboutTest></AboutTest>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;
