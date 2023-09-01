import "../styles/navbar.css";
export default function Navbar() {
  return (
    <nav id="nav-menu" className="navbar navbar-expand-lg navSec">
      <div className="container-fluid fixed-top  " id="navContainer">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler hamburger"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <a className="nav-link home active me-5 " aria-current="page" href="#">
              HOME
            </a>
            <a className="nav-link about active me-5 " aria-current="page" href="#">
              ABOUT
            </a>
            <a className="nav-link skills active me-5 " aria-current="page" href="#">
              SKILLS
            </a>
            <a className="nav-link projects active me-5" aria-current="page" href="#">
              PROJECTS
            </a>
            <a className="nav-link active me-5" aria-current="page" href="#">
              GITHUB
            </a>
            <a className="nav-link contact active me-5" aria-current="page" href="#">
              CONTACT
            </a>
            <a className="nav-link resume active me-5" aria-current="page" href="#">
              <button>RESUME</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
