import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

import bg1 from "/image/bg-1.png";
import bg2 from "/image/bg-2.png";
import bg3 from "/image/bg-3.png";
import bg4 from "/image/bg-4.png";
import bg5 from "/image/bg-5.png";
import "/src/index.css";
console.log("bg1:", bg1);
function ParallaxTest() {
  return (
    <main className="parallax">
      <ParallaxProvider>
        <header>
          <ParallaxBanner
            className="banner"
            layers={[
              {
                image: bg1,
                translateY: [0, 50],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg2,
                translateY: [0, 45]},
              // {
              //   image: bg2,
              //   translateY: [5, 45],

              //   shouldAlwaysCompleteAnimation: true,
              //   expanded: false,
              // },
              {
                children: (
                  <div
                    style={{
                      color: "white",
                      position: "absolute",
                      top: "10%",
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
                translateY: [10, 45],
                shouldAlwaysCompleteAnimation: true,
                expanded: false, //Set the amount to 0 to prevent any parallax effect on the text
              },
              {
                image: bg3,
                translateY: [0, 30],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },

              {
                image: bg4,
                translateY: [5, 0],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg5,
                translateY: [0, -20],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
            ]}
          />
        </header>
      </ParallaxProvider>
    </main>
  );
}

export default ParallaxTest;
