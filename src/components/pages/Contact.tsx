function Contact() {
  return (
    <div>
      <form action="https://nexrof.selfmade.technology/nexrof" method="get">
        <h1 className="h3 mb-3 fw-normal">Contcact</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
          ></input>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingPassword"
            placeholder="Message"
            name="body"
          ></input>
          <label htmlFor="floatingPassword">Message</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
      </form>
    </div>
  );
}

export default Contact;
