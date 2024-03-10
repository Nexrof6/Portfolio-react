import { ReactNode } from "react";

interface Props {
  image: string;
  children: ReactNode;
}
const Parallax2L = ({ image, children }: Props) => {
  return (
    <div className="row  ">
      <div
        className="col rounded"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "fixed",
          backgroundRepeat:"no-repeat",
          backgroundPosition: "left",
          backgroundSize: "50% 30%",
        }}
      >
        {" "}
      </div>
      <div className="col">
        <h1 className="text-center parallax-static">{children}</h1>
      </div>
    </div>
  );
};

export default Parallax2L;
