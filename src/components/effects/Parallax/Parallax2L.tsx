import { ReactNode, useEffect, useState } from "react";

interface Props {
  image: string;
  children: ReactNode;
}
const Parallax2L = ({ image, children }: Props) => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div className="row  ">
      <div
        className="col-md img-founders"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `${matches ? "left" : "center"}`,
          backgroundSize: "500px 500px",
        }}
      >
        <span className="parallax-static"></span>{" "}
      </div>
      <div className="col">
        <h1 className="text-center parallax-static">{children}</h1>
      </div>
    </div>
  );
};

export default Parallax2L;
