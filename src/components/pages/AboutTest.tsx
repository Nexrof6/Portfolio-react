// import { useState } from "react";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

// import Parallax1 from "../effects/Parallax/Parallax1";
// import Parallax1L from "../effects/Parallax/Parallax1L";
// import Parallax1R from "../effects/Parallax/Parallax1R";
// import Parallax2 from "../effects/Parallax/Parallax2";
import Parallax2L from "../effects/Parallax/Parallax2L";
import Parallax2R from "../effects/Parallax/Parallax2R";

function AboutTest() {
  const [scrollYPosition, setScrollYPosition] = React.useState(0);

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollYPosition(newScrollYPosition);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Now the vertical position is available with `scrollYPosition`
  console.log(scrollYPosition);

  return (
    <>
      <div>
        <Parallax2L image="image/sagar.jpg">
          <div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              NEXUS REVOLUTION OF THE FUTURE
            </div>
            <div>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                alt="instagram-new"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/linkedin.png"
                alt="linkedin"
              />

              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/188/github.png"
                alt="github"
              />

              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/telegram.png"
                alt="telegram"
              />
            </div>
          </div>
        </Parallax2L>
        <div>
          <h1 className="text-center parallax h-75  p-5">
            “The true ENTREPRENEUR is a risk taker, not an excuse maker.”
          </h1>
        </div>

        <Parallax2R image="image/dharshan.jpg">
          <div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              NEXUS REVOLUTION OF THE FUTURE
            </div>
            <div>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                alt="instagram-new"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/linkedin.png"
                alt="linkedin"
              />

              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/188/github.png"
                alt="github"
              />

              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/telegram.png"
                alt="telegram"
              />
            </div>
          </div>
        </Parallax2R>
        <div>
          <h1 className="text-center parallax h-75  p-5">
            “The true ENTREPRENEUR is a risk taker, not an excuse maker.”
          </h1>
        </div>

        <Parallax2L image="image/ealil.jpg">
          <div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              NEXUS REVOLUTION OF THE FUTURE
            </div>
            <div>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                alt="instagram-new"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/linkedin.png"
                alt="linkedin"
              />

              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/188/github.png"
                alt="github"
              />

              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/telegram.png"
                alt="telegram"
              />
            </div>
          </div>
        </Parallax2L>
        <div>
          <h1 className="text-center parallax h-75  p-5">
            “The true ENTREPRENEUR is a risk taker, not an excuse maker.”
          </h1>
        </div>

        <Parallax2R image="image/devasri.jpg">
          <div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              NEXUS REVOLUTION OF THE FUTURE
            </div>
            <div>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                alt="instagram-new"
              />
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/linkedin.png"
                alt="linkedin"
              />

              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/188/github.png"
                alt="github"
              />

              <img
                width="50"
                height="50"
                src="https://img.icons8.com/3d-fluency/94/telegram.png"
                alt="telegram"
              />
            </div>
          </div>
        </Parallax2R>
        <div>
          <h1 className="text-center parallax h-75  p-5">
            “The true ENTREPRENEUR is a risk taker, not an excuse maker.”
          </h1>
        </div>
      </div>
    </>
  );
}
export default AboutTest;
