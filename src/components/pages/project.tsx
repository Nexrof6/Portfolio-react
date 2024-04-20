import { useEffect, useState } from "react";
import Footer from "../templates/Footer";
import NavBar from "../templates/NavBar";
import arunprojects from "/images/projects/arunprojects.svg";

function Project() {
  return (
    <>
      <NavBar></NavBar>

      <main style={{ paddingTop: "8%" }}>
        <h1 className="text-center p5">Know about our Latest Works</h1>
        <br></br>

        <div className="container md mt-3">
          <div className="row">
            <div className="col">
              <div
                className="card img-fluid bg-secondary bg-opacity-25"
                style={{ width: "500px" }}
              >
                <img
                  src={arunprojects}
                  width={500}
                  height={400}
                  className="rounded float-start "
                />
                <a href="/projects/portfolios" className="btn btn-primary">
                  See Profile
                </a>
                <div className="card-img-overlay">
                  <p className="card-text p-2 fw-bolder p5">
                    CHECK OUT FOR MORE LATEST <br></br>PORTFOLIO PAGES BY US
                    CLICKING ON <br></br> VIEW MORE
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <p>this is sample text</p>
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
