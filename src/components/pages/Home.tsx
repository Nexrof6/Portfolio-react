import ParallaxMultiLayer from "../effects/Parallax/ParallaxMultiLayer";
import NavBar from "../templates/NavBar";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <div className="container">
          <ParallaxMultiLayer>
            <span    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">NEXUS REVOLUTION OF THE FUTURE</span>
          </ParallaxMultiLayer>{" "}
          <div>Test Message</div>
        </div>
      </main>
    </>
  );
}

export default Home;
