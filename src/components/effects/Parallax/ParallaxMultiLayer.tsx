import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import bg1 from "/image/parallax/bg-1.png";
import bg2 from "/image/parallax/bg-2.png";
import bg3 from "/image/parallax/bg-3.png";
import bg4 from "/image/parallax/bg-4.png";
import bg5 from "/image/parallax/bg-5.png";
import "/src/index.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ParallaxMultiLayer({ children }: Props) {
  return (
    <>
      <div className="row mb-5">
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
                            fontSize: "500%",
                          }}
                        >
                          NEXROF
                        </h1>
                      </div>
                    ),
                    // translateY: [15, 25],
                    translateY: [10, 70],
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
                    image: bg3,
                    translateY: [-5, 30],

                    shouldAlwaysCompleteAnimation: true,
                    expanded: false,
                  },

                  {
                    image: bg4,
                    translateY: [10, 25],

                    shouldAlwaysCompleteAnimation: true,
                    expanded: false,
                  },
                  {
                    image: bg5,
                    translateY: [-5, 35],

                    shouldAlwaysCompleteAnimation: true,
                    expanded: false,
                  },
                  {
                    image: bg2,
                    translateY: [15, 35],

                    shouldAlwaysCompleteAnimation: true,
                    expanded: false,
                  },
                ]}
              />
            </header>
          </ParallaxProvider>
        </div>
        <div className="col-md ">
          <h1 className=" container text-justify " style={{ marginTop: "30%" }}>
            {children}
          </h1>
        </div>
      </div>
    </>
  );
}

export default ParallaxMultiLayer;
