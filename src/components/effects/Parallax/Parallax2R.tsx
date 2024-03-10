import { ReactNode } from "react";

interface Props {
  image: string;
  children: ReactNode;
}
const Parallax2R = ({ image, children }: Props) => {
  return (
    <div className="row  img-fluid">
      <div className="col">
        <h1 className="text-center parallax-static">{children}</h1>
      </div>{" "}
      <div
        className="col  img-fluid"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "fixed",
          // backgroundRepeat:"no-repeat",
        }}
      >
        {" "}
      </div>  
    </div>
  );
};

export default Parallax2R;
