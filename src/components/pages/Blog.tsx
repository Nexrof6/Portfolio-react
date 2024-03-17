import NavBar from "../templates/NavBar";

function Blog() {
  return (
    <>
      <NavBar></NavBar>
      <main className="pt-5">
        <div className="container">
          <h1 className="  mt-5">This is Blog Page</h1>
          <a href="/blogs/docker">Docker</a>
        </div>
      </main>
    </>
  );
}

export default Blog;
