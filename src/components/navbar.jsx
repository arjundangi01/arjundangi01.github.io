import "../styles/navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navSec">
      <div id="nav-menu" className="container-fluid fixed-top  ">
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
            <a
              className="nav-link home active me-5 "
              aria-current="page"
              href="#home"
            >
              HOME
            </a>
            <a
              className="nav-link about active me-5 "
              aria-current="page"
              href="#about"
            >
              ABOUT
            </a>
            <a
              className="nav-link skills active me-5 "
              aria-current="page"
              href="#skills"
            >
              SKILLS
            </a>
            <a
              className="nav-link projects active me-5"
              aria-current="page"
              href="#projects"
            >
              PROJECTS
            </a>
            <a
              className="nav-link active me-5"
              aria-current="page"
              href="#github"
            >
              GITHUB
            </a>
            <a
              className="nav-link contact active me-5"
              aria-current="page"
              href="#contact"
            >
              CONTACT
            </a>
            <a
              className="nav-link resume active me-5"
              aria-current="page"
              target="_blank"
              href="https://drive.google.com/u/0/uc?id=1ac9QC_NaLOMpNl9UpMvkjwPP7uW9c5ps&export=download"
            >
              <button id="resume-button-1 >RESUME</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
