// import "../styles/navbar.css";
import style from "../styles/navbar.module.css";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navSec  ">
      <div
        id={style.nav_menu}
        className="container-fluid fixed-top pe-lg-1 ps-lg-5 pt-lg-2 pb-lg-2"
      >
        <a className="navbar-brand" href="#">
          <span className={style.span} >A</span>rjun{" "}
          <span>
            <img
              className="ms-lg-2"
              src="https://camo.githubusercontent.com/beb64ff21c883e318e4f5db5231c2ba4175705bea1c9249e82a41ab375db4f75/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f51737347456d706b79454f684243623765312f67697068792e6769663f6369643d656366303565343761306e336769316266716e74716d6f62386739616964316f796a327772336473336d67373030626c267269643d67697068792e676966"
              width="35"
            />
          </span>
        </a>
        <button
          className={`navbar-toggler ${style.hamburger}`}
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
          <div className="navbar-nav align-items-center ">
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
                <button className={`project-deployed-link ${style.button}`}>
                  <span className={style.buttonContent}>Resume </span>
                </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
