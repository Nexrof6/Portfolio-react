import ParallaxMultiLayer from "../effects/Parallax/ParallaxMultiLayer";
import NavBar from "../templates/NavBar";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <div className="container">
          <ParallaxMultiLayer>
            <span data-aos="fade-right">NEXUS REVOLUTION OF THE FUTURE</span>
          </ParallaxMultiLayer>{" "}
          <div>Test Message</div>
        </div>
      </main>
    </>
  );
}

export default Home;
