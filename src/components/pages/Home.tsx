import ParallaxMultiLayer from "../effects/Parallax/ParallaxMultiLayer";
import NavBar from "../templates/NavBar";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <div className="container">
          <ParallaxMultiLayer>
            {" "}
            NEXUS REVOLUTION OF THE FUTURE
          </ParallaxMultiLayer>
        </div>
      </main>
    </>
  );
}

export default Home;
