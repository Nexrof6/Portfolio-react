// import { useState } from "react";

import React from "react";

// import Parallax1 from "../effects/Parallax/Parallax1";
// import Parallax1L from "../effects/Parallax/Parallax1L";
// import Parallax1R from "../effects/Parallax/Parallax1R";
// import Parallax2 from "../effects/Parallax/Parallax2";
import Parallax2L from "../effects/Parallax/Parallax2L";
import Parallax2R from "../effects/Parallax/Parallax2R";

function AboutTest() {
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
      

      <main>
        
        <Parallax2L image="image/sagar.jpg">
        <h1 className="slide-in-text-right">Right to Left Animation</h1>
        </Parallax2L>
        
        <div>
          <h1 className="text-center parallax h-75  p-5">“We don't just sell websites, we create websites that SELL.”</h1>
        </div>
        <Parallax2R image="image/dharshan.jpg">
        <h1 className="slide-in-text-left">Left to Right Animation</h1>
        </Parallax2R>
       
        <div>
          <h1 className="text-center parallax h-75  p-5">“The true ENTREPRENEUR is a risk taker, not an excuse maker.”</h1>
        </div>
      </main>
    </>
  );
}
export default AboutTest;