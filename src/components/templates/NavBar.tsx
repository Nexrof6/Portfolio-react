function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiaryc p-3 fixed-top glass">
      <div className="container-fluid">
        <a className="navbar-brand " href="#">
          <div className="row">
            <div className="col">
              <img
                width="40"
                height="40"
                src="/images/Nexrof.svg"
                alt="Nexrof"
              />
            </div>
            <div className="col">
              <h3 className="h3 text-light ">Nexrof</h3>
            </div>
          </div>
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 32 32"
            >
              <path d="M 4 7 L 4 9 L 28 9 L 28 7 L 4 7 z M 4 15 L 4 17 L 28 17 L 28 15 L 4 15 z M 4 23 L 4 25 L 28 25 L 28 23 L 4 23 z"></path>
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav justify-content-end ms-auto">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="/#">
                <p className="h6 text-light ">Home</p>
              </a>
            </li>
            {/* <li className="nav-item ">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li> */}
            <li className="nav-item ">
              <a className="nav-link" href="/#About">
                <p className="h6 text-light ">About</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/#service">
                <p className="h6 text-light ">Services</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/blogs">
                <p className="h6 text-light ">Blogs</p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="contact">
                <p className="h6 text-light ">Contact</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
