import { useEffect, useState } from "react";
import Parallax2L from "../effects/Parallax/Parallax2L";
import Parallax2R from "../effects/Parallax/Parallax2R";

function AboutTest() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <>
      <div>
        <Parallax2L image="image/sagar.jpg">
          <div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="text-start display-6"
            >
              Hey !<br></br> This is SANJAY SAGAR <br></br> Co-Founder and
              Developer at Nexrof
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
        <div style={{ height: `${matches ? "40vh" : "5vh"}` }}></div>

        <Parallax2R image="image/dharshan.jpg">
          <div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="text-start display-6"
            >
              Hey !<br></br> This is DHARSHAN KUMAR <br></br> Co-Founder and
              Developer at Nexrof
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
        <div style={{ height: `${matches ? "40vh" : "5vh"}` }}></div>

        <Parallax2L image="image/ealil.jpg">
          <div>
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="text-start display-6"
            >
              Hey !<br></br> This is EALIL ADAVAN <br></br> Co-Founder and
              Developer at Nexrof
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
        <div style={{ height: `${matches ? "40vh" : "5vh"}` }}></div>

        <Parallax2R image="image/devasri.jpg">
          <div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="text-start display-6"
            >
              Hey !<br></br> This is DEVASRI<br></br> Co-Founder and Developer
              at Nexrof
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
        <div style={{ height: `${matches ? "40vh" : "5vh"}` }}></div>
      </div>
    </>
  );
}
export default AboutTest;
