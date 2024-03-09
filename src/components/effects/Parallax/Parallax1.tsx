import React, { ReactNode } from "react";
interface Props {
  image: string;
  children: ReactNode;
}
const Parallax1 = ({ image, children }: Props) => {
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
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPositionY: `${scrollYPosition * 0.6}px`, // Adjust the speed of parallax by changing the multiplier
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-center parallax">{children}</h1>
    </div>
  );
};

export default Parallax1;
