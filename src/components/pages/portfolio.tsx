import { useEffect, useState } from "react";
import Footer from "../templates/Footer";
import NavBar from "../templates/NavBar";
import arunfinal from "/images/projects/arunfinal.svg";

function Portfolio() {
  return (
    <>
      <NavBar></NavBar>
      <main style={{ paddingTop: "15%" }}>
        <div className="container md mt-3">
          {/* <h1 className="fw-light text-center border-bottom border-success">
            PORTFOLIO WEBSITES!
          </h1> */}
          <br></br>
          <div className="row">
            <div className="col card-body">
              <div
                className=" card img-fluid bg-secondary bg-opacity-25"
                style={{ width: "200px" }}
              >
                <img
                  src={arunfinal}
                  width={345}
                  height={245}
                  className="border-success border-top border-end "
                />
              </div>

              <p
                className=" fs-6 p-3 badge bg-dark text-light bg-opacity-50 text-wrap"
                style={{ width: "21.5rem" }}
              >
                Arun Raj P,originally from Madurai an <br></br> enterprising
                QHSE Executive, <br></br> and more .... <br></br> click below to
                know more about him
              </p>
              <br></br>

              <a
                href="https://arunraj.selfmade.one/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success bg-success text-white
                     "
              >
                Checkout his Portfolio!
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Portfolio;
