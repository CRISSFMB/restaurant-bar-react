export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid ">
        <a href="https://newbedev.com/" className="navbar-brand">
          Restaurant & Bar Geradaus
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="https://newbedev.com/"
                className="nav-link active"
                aria-current="page"
              >
                GALERIA
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link"></a>
            </li>
            <li className="nav-item">
              <a href="https://newbedev.com/" className="nav-link">
                GUTSCHEINE
              </a>
            </li>
            <li className="nav-item">
              <a href="https://newbedev.com/" className="nav-link">
                EVENTS
              </a>
            </li>
            <li className="nav-item">
              <a href="https://newbedev.com/" className="nav-link">
                ÜBER UNS
              </a>
            </li>
            <li className="nav-item">
              <a href="https://newbedev.com/" className="nav-link">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
