import NavBar from "../templates/NavBar";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <div className="container-flex pt-5">
          <h3 className="slide-in-text-left ">NEXROF</h3>
          {/* <h1 className="slide-in-text-right mt-5">Right to Left Animation</h1>
          <h1 className="slide-in-text-top">Top to Bottom Animation</h1>
          <h1 className="slide-in-text-bottom">Bottom to Top Animation</h1> */}
        </div>
        <div className="container-flex pt-5">
          <h3 className="slide-in-text-left ">THE FUTURE REVOLUTION</h3>
        </div>
      </main>
    </>
  );
}

export default Home;
