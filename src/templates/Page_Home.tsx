// import { useState } from "react";
import NavBar from "./NavBar";
import React from "react";
import Parallax1 from "./Parallax/Parallax1";
import Parallax2 from "./Parallax/Parallax2";
import Parallax2L from "./Parallax/Parallax2L";
import Parallax2R from "./Parallax/Parallax2R";
import Parallax1L from "./Parallax/Parallax1L";
import Parallax1R from "./Parallax/Parallax1R";

function Page_Home() {
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
        <Parallax1 image="https://images.unsplash.com/photo-1614273658284-5e45cf4a04b1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          DIV 1
        </Parallax1>

        <div>
          <h1 className="text-center parallax">DIV 2</h1>
        </div>
        <Parallax1L image="https://images.unsplash.com/photo-1614273658284-5e45cf4a04b1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          DIV 3
        </Parallax1L>
        <div>
          <h1 className="text-center parallax">DIV 4</h1>
        </div>
        <Parallax1R image="https://images.unsplash.com/photo-1614273658284-5e45cf4a04b1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          DIV 5
        </Parallax1R>
        <div>
          <h1 className="text-center parallax">DIV 6</h1>
        </div>
        <Parallax2 image="https://images.unsplash.com/photo-1614273658284-5e45cf4a04b1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          DIV 7
        </Parallax2>
        <div>
          <h1 className="text-center parallax">DIV 8</h1>
        </div>
        <Parallax2L image="https://images.unsplash.com/photo-1614273658284-5e45cf4a04b1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          DIV 9
        </Parallax2L>
        <div>
          <h1 className="text-center parallax">DIV 10</h1>
        </div>
        <Parallax2R image="https://images.unsplash.com/photo-1614273658284-5e45cf4a04b1?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          DIV 11
        </Parallax2R>
        <div>
          <h1 className="text-center parallax">DIV 12</h1>
        </div>
      </main>
    </>
  );
}
export default Page_Home;
