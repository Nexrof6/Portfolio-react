import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import bg1 from "/image/bg-1.png";
import bg2 from "/image/bg-2.png";
import bg3 from "/image/bg-3.png";
import bg4 from "/image/bg-4.png";
// import bg5 from "/image/bg-5.png";
import "/src/index.css";
import NavBar from "../templates/NavBar";
console.log("bg1:", bg1);
function ParallaxTest() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <div className="row">
          <div className=" col-md order-md-1">
            <ParallaxProvider>
              <header>
                <ParallaxBanner
                  className="banner"
                  layers={[
                    {
                      children: (
                        <div
                          style={{
                            color: "white",
                            position: "absolute",
                            top: "20%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <h1
                            style={{
                              fontSize: "100px",
                            }}
                          >
                            Nexrof
                          </h1>
                        </div>
                      ),
                      // translateY: [15, 25],
                      translateY: [10, 50],
                      shouldAlwaysCompleteAnimation: true,
                      expanded: false, //Set the amount to 0 to prevent any parallax effect on the text
                    },
                    {
                      image: bg1,
                      translateY: [15, -100],
                      translateX: [10, 0],
                      shouldAlwaysCompleteAnimation: true,
                      expanded: false,
                    },
                    {
                      image: bg2,
                      translateY: [15, 35],

                      shouldAlwaysCompleteAnimation: true,
                      expanded: false,
                    },
                    {
                      image: bg3,
                      translateY: [-5, 20],

                      shouldAlwaysCompleteAnimation: true,
                      expanded: false,
                    },

                    {
                      image: bg4,
                      translateY: [10, 20],

                      shouldAlwaysCompleteAnimation: true,
                      expanded: false,
                    },
                    // {
                    //   image: bg5,
                    //   translateY: [0, -20],

                    //   shouldAlwaysCompleteAnimation: true,
                    //   expanded: false,
                    // },
                  ]}
                />
              </header>
            </ParallaxProvider>
          </div>
          <div className="col-md ">
            <h1
              className=" container text-justify "
              style={{ marginTop: "30%" }}
            >
              NEXUS REVOLUTION OF THE FUTURE
            </h1>
          </div>
        </div>
        <div className="parallax"></div>
      </main>
    </>
  );
}

export default ParallaxTest;
