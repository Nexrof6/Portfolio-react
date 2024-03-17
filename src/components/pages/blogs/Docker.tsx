import NavBar from "../../templates/NavBar";

function Docker() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Docker</h1>
              <p className="lead fw-light">
                need To past some image related to docker
              </p>
              {/* <p>
                <a href="#" className="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p> */}
            </div>
          </div>
        </section>
        <div className="container">
          <h1>This Blog is about docker</h1>
        </div>
      </main>
    </>
  );
}

export default Docker;
