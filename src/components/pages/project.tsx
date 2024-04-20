import { useEffect, useState } from "react";
import Footer from "../templates/Footer";
import NavBar from "../templates/NavBar";
import arunprojects from "/images/projects/arunprojects.svg";

function Project() {
  return (
    <>
      <NavBar></NavBar>

      <main style={{ paddingTop: "15%" }}>
        <div className="container md mt-3">
          <div className="row">
            <div className="col">
              <div
                className="border border-3 border-success card img-fluid bg-secondary bg-opacity-25"
                style={{ width: "500px" }}
              >
                <img
                  src={arunprojects}
                  width={500}
                  height={400}
                  className="rounded float-start "
                />

                <div className="card-img-overlay">
                  <h6 className="card-text p-2 fw-bolder p5">
                    Click on view more <br></br> to see more of our portfolio
                    project
                  </h6>
                  <a
                    href="/projects/portfolios"
                    className="btn btn-success bg-success p-2 text-white
                     bg-opacity-50"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <h3 className="p5 p-2 border-bottom border-success">
                <br></br>
                PORTFOLIO WEBSITES
              </h3>
              <p className="fs-2 p-2 fw-bolder">
                Professional Portfolio websites that are elagantly built with
                React,Vannila Js and Bootstrap.Our websites are made to the
                taste of the clients
              </p>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}

export default Project;
