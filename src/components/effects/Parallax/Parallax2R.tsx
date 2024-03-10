import { ReactNode } from "react";

interface Props {
  image: string;
  children: ReactNode;
}
const Parallax2R = ({ image, children }: Props) => {
  return (
    <div className="row">
      
      <div
        className="col-md order-md-2 rounded"
        style={{
          backgroundImage: `url(${image})`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "54% 78%",
        }}
        
      >
        <span className="parallax-static"></span>
      </div>
      <div className="col">
        <h1 className="text-center parallax-static">{children}</h1>
      </div>
      
    </div>
  );
};

export default Parallax2R;
