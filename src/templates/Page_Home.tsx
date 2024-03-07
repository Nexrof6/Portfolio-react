import NavBar from "./NavBar";

function Page_Home() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <div>
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
