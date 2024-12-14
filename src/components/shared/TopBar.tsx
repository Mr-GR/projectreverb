import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
            <h1 className="h3-bold md:h2-bold">ReVerb</h1>
        </Link>

        <ul className="max-md:hidden navbar-links ">
          <Link to="/">
            Home
          </Link>

          <Link to="/information">
            Info
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Topbar;