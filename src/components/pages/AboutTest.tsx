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
          <div className="glass p-5">
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
              <a
                href="https://www.instagram.com/sanjaysagar._?igsh=MXZldzJ0cGx2a3hzaQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                  alt="instagram-new"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/sanjay-sagar-5263b82a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/94/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://github.com/sanjaysagar12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/188/github.png"
                  alt="github"
                />
              </a>
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
          <div className="glass p-5">
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
              <a
                href="https://www.instagram.com/_.jd__21.__?igsh=MXBqNHNmeHcwbGFqOA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                  alt="instagram-new"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/j-dharshan-kumar-02988a276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/94/linkedin.png"
                  alt="linkedin"
                />
              </a>

              <a
                href="https://github.com/dharshan-kumarj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/188/github.png"
                  alt="github"
                />
              </a>

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
          <div className="glass p-5">
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
              <a
                href="https://www.instagram.com/_.mr_17.__?igsh=MTZqaGQwdjBoajFvaQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                  alt="instagram-new"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/ealil-adavan-51722429b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/94/linkedin.png"
                  alt="linkedin"
                />
              </a>

              <a
                href="https://github.com/ealil-17"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/188/github.png"
                  alt="github"
                />
              </a>

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
          <div className="glass p-5">
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
              <a
                href="https://www.instagram.com/_devasriii._?igsh=djVvaDNteDVzNWk3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                  alt="instagram-new"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/devasri-s-p-392b852a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/94/linkedin.png"
                  alt="linkedin"
                />
              </a>

              <a
                href="https://github.com/Devasri06"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/3d-fluency/188/github.png"
                  alt="github"
                />
              </a>

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
