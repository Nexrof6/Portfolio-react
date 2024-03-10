import { ReactNode } from "react";

interface Props {
  image: string;
  children: ReactNode;
}
const Parallax2 = ({ image, children }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-center parallax-static">{children}</h1>
    </div>
  );
};

export default Parallax2;
