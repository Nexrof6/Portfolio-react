import NavBar from "./NavBar";

function Page_Home() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <div>
          <h1 className="text-center parallax-div">DIV 1</h1>
        </div>
        <div>
          <h1 className="text-center parallax-div">DIV 2</h1>
        </div>
        <div>
          <h1 className="text-center parallax-div">DIV 3</h1>
        </div>
        <div>
          <h1 className="text-center parallax-div">DIV 4</h1>
        </div>
      </main>
    </>
  );
}
export default Page_Home;
