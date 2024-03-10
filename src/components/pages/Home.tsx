import NavBar from "../templates/NavBar";

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <main className="md-5">
        <div>
          <h1 className="slide-in-text-left">Left to Right Animation</h1>
          <h1 className="slide-in-text-right">Right to Left Animation</h1>
          <h1 className="slide-in-text-top">Top to Bottom Animation</h1>
          <h1 className="slide-in-text-bottom">Bottom to Top Animation</h1>
        </div>
      </main>
    </>
  );
}

export default Home;
