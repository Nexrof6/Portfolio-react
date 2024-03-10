import { ReactNode } from "react";

interface Props {
  image: string;
  children: ReactNode;
}
const Parallax2L = ({ image, children }: Props) => {
  return (
    <div className="row">
      <div
        className="col"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "fixed",
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
