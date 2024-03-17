import Footer from "../templates/Footer";
import NavBar from "../templates/NavBar";

function Blog() {
  return (
    <>
      <NavBar />
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">NEXROF</h1>
              <p className="lead fw-light">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 ">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
              <div className="col d-flex justify-content-center">
                <div
                  className="card shadow-sm bg-dark"
                  style={{ width: "16rem" }}
                >
                  <a href="blog/docker">
                    <img
                      className="card-img-top"
                      src="/images/blog/docker.svg"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <p className="card-text ">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="/blog/docker">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary rounded-pill"
                          >
                            Read more
                          </button>
                        </a>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col d-flex justify-content-center">
                <div
                  className="card shadow-sm bg-dark"
                  style={{ width: "16rem" }}
                >
                  <a href="blog/agi">
                    <img
                      className="card-img-top"
                      // className="img-thumbnail"
                      src="/images/blog/agi.svg"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="/blog/agi">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary rounded-pill"
                          >
                            Read more
                          </button>
                        </a>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
