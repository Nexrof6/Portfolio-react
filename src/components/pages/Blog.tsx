import Footer from "../templates/Footer";
import NavBar from "../templates/NavBar";

function Blog() {
  return (
    <>
      <NavBar />
      <main>
        <section className="py-5 text-center container">
          <div className="row py-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">NEXROF Blog! 🚀</h1>
              <p className="lead fw-light">
                Explore the latest in technology, coding, and software
                development. From tutorials to deep dives, I share insights,
                tips, and tricks to level up your tech skills. Let’s geek out
                together!"
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 ">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
              <div className="col d-flex justify-content-center zoom">
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
                      Docker is an open-source containerization platform that
                      allows you to package your application and all its
                      dependencies into a standardized unit called a container.
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

              <div className="col d-flex justify-content-center zoom">
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
                      Artificial General Intelligence (AGI) Unlike narrow AI,
                      which is designed for specific tasks, AGI aims to emulate
                      human-like intelligence and adaptability.
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
