import { useState } from "react";
import NavBar from "./NavBar";
import React from "react";

function Page_Home() {
  // let offset = window.pageYOffset;
  // console.log(offset);

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
      <NavBar></NavBar>
      <main>
        <div
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1614273658284-5e45cf4a04b1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            backgroundPositionY: `${scrollYPosition * 0.6}px`, // Adjust the speed of parallax by changing the multiplier
          }}
        >
          <h1 className="text-center parallax-div-1" id="parallax">
            DIV 1
          </h1>
        </div>
        <div>
          <h1 className="text-center parallax-div-2">DIV 2</h1>
        </div>
        <div>
          <h1 className="text-center parallax-div-3">DIV 3</h1>
        </div>
        <div>
          <h1 className="text-center parallax-div-4">DIV 4</h1>
        </div>
      </main>
    </>
  );
}
export default Page_Home;
