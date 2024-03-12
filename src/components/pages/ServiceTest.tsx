import www from "/image/www.png";
import appdev from "/image/appdev.png";
function ServiceTest() {
  return (
    <>
      {" "}
      <main>
        <div className="container text-center">
          <p className="content p5 fs-1">Our Services</p>
          <br></br>
          <br></br>
          <p className="content p5">
            Achieve your business goals with web development solutions
          </p>
          <p className="content p5">
            Our battle-tested developers specialize in a wide range of web
            development services. Here are some of the solutions that we can
            deliver for you.
          </p>{" "}
          <br></br>
          <br></br>
          <img
            src={www}
            width={80}
            height={80}
            className="rounded float-start"
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p className="content p3 text-start fw-bolder">Website Development</p>
          <p className="content p3 text-start">
            A well-designed website is a powerful marketing and communication
            <br></br>
            tool that helps build trust and generate leads.
          </p>
          <img
            src={appdev}
            width={80}
            height={80}
            className="rounded float-end"
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p className="content p3 text-end fw-bolder">
            Mobile App Development
          </p>
          <p className="content p3 text-end">
            Web applications can reach a global audience.<br></br> They're
            interactive and engaging, so can easily hold users' attention.
          </p>
        </div>
      </main>
    </>
  );
}
export default ServiceTest;
