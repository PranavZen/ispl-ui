import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { dashboard, login, logo, logout } from "../../../assets/imagePath";

function NavMenus() {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  useEffect(() => {
    const token = localStorage.getItem("apiToken");
    if (token) {
      setIsLoggedIn(true);
      // window.location.reload();
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const closeOffcanvas = () => {
    setOffcanvasOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("apiToken");
    setIsLoggedIn(false);
    setOffcanvasOpen(false);
  };
  return (
    <div className="container-fluid">
      <div className="row myDis">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand " to="/">
            <img src={logo} alt="ISPL" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOffcanvasOpen(!offcanvasOpen)}
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M4 7h22M4 15h22M4 23h22"
                />
              </svg>
            </span>
          </button>
          <div
            className={`offcanvas offcanvas-start ${
              offcanvasOpen ? "show" : ""
            }`}
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-black"
                onClick={closeOffcanvas}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#fff"
                >
                  <path d="M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z" />
                </svg>
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className={isActive("/")}
                    aria-current="page"
                    to="/"
                    onClick={closeOffcanvas}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={isActive("/team-list")}
                    to="/team-list"
                    onClick={closeOffcanvas}
                  >
                    Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={isActive("/matches")}
                    to="/matches"
                    onClick={closeOffcanvas}
                  >
                    Match Center
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Videos
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                      >
                        <path
                          d="M11.7508 0.25273C11.6711 0.172649 11.5763 0.109086 11.4719 0.0657092C11.3674 0.0223323 11.2554 0 11.1423 0C11.0291 0 10.9171 0.0223323 10.8127 0.0657092C10.7082 0.109086 10.6134 0.172649 10.5338 0.25273L6.6085 4.16589C6.52883 4.24597 6.43404 4.30953 6.3296 4.35291C6.22516 4.39629 6.11314 4.41862 6 4.41862C5.88686 4.41862 5.77484 4.39629 5.6704 4.35291C5.56596 4.30953 5.47117 4.24597 5.3915 4.16589L1.46623 0.25273C1.38655 0.172649 1.29176 0.109086 1.18732 0.0657092C1.08289 0.0223323 0.970865 0 0.857725 0C0.744585 0 0.632564 0.0223323 0.528125 0.0657092C0.423686 0.109086 0.328896 0.172649 0.249222 0.25273C0.0895969 0.412813 0 0.629363 0 0.855083C0 1.0808 0.0895969 1.29735 0.249222 1.45744L4.18306 5.37914C4.66515 5.85914 5.31865 6.12876 6 6.12876C6.68135 6.12876 7.33485 5.85914 7.81694 5.37914L11.7508 1.45744C11.9104 1.29735 12 1.0808 12 0.855083C12 0.629363 11.9104 0.412813 11.7508 0.25273Z"
                          fill="#BBBBBB"
                        />
                      </svg>
                    </span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/video/All"
                        onClick={closeOffcanvas}
                      >
                        All
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/video/latest"
                        onClick={closeOffcanvas}
                      >
                        Latest
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/video/highlights"
                        onClick={closeOffcanvas}
                      >
                        Highlights
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/video/auction"
                        onClick={closeOffcanvas}
                      >
                        Auction
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/video/magic-moments"
                        onClick={closeOffcanvas}
                      >
                        Magic Moments
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/video/interviews"
                        onClick={closeOffcanvas}
                      >
                        Interviews
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    News
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                      >
                        <path
                          d="M11.7508 0.25273C11.6711 0.172649 11.5763 0.109086 11.4719 0.0657092C11.3674 0.0223323 11.2554 0 11.1423 0C11.0291 0 10.9171 0.0223323 10.8127 0.0657092C10.7082 0.109086 10.6134 0.172649 10.5338 0.25273L6.6085 4.16589C6.52883 4.24597 6.43404 4.30953 6.3296 4.35291C6.22516 4.39629 6.11314 4.41862 6 4.41862C5.88686 4.41862 5.77484 4.39629 5.6704 4.35291C5.56596 4.30953 5.47117 4.24597 5.3915 4.16589L1.46623 0.25273C1.38655 0.172649 1.29176 0.109086 1.18732 0.0657092C1.08289 0.0223323 0.970865 0 0.857725 0C0.744585 0 0.632564 0.0223323 0.528125 0.0657092C0.423686 0.109086 0.328896 0.172649 0.249222 0.25273C0.0895969 0.412813 0 0.629363 0 0.855083C0 1.0808 0.0895969 1.29735 0.249222 1.45744L4.18306 5.37914C4.66515 5.85914 5.31865 6.12876 6 6.12876C6.68135 6.12876 7.33485 5.85914 7.81694 5.37914L11.7508 1.45744C11.9104 1.29735 12 1.0808 12 0.855083C12 0.629363 11.9104 0.412813 11.7508 0.25273Z"
                          fill="#BBBBBB"
                        />
                      </svg>
                    </span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/news/all-news"
                        onClick={closeOffcanvas}
                      >
                        All News
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/news/announcement"
                        onClick={closeOffcanvas}
                      >
                        Announcement
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                      >
                        <path
                          d="M11.7508 0.25273C11.6711 0.172649 11.5763 0.109086 11.4719 0.0657092C11.3674 0.0223323 11.2554 0 11.1423 0C11.0291 0 10.9171 0.0223323 10.8127 0.0657092C10.7082 0.109086 10.6134 0.172649 10.5338 0.25273L6.6085 4.16589C6.52883 4.24597 6.43404 4.30953 6.3296 4.35291C6.22516 4.39629 6.11314 4.41862 6 4.41862C5.88686 4.41862 5.77484 4.39629 5.6704 4.35291C5.56596 4.30953 5.47117 4.24597 5.3915 4.16589L1.46623 0.25273C1.38655 0.172649 1.29176 0.109086 1.18732 0.0657092C1.08289 0.0223323 0.970865 0 0.857725 0C0.744585 0 0.632564 0.0223323 0.528125 0.0657092C0.423686 0.109086 0.328896 0.172649 0.249222 0.25273C0.0895969 0.412813 0 0.629363 0 0.855083C0 1.0808 0.0895969 1.29735 0.249222 1.45744L4.18306 5.37914C4.66515 5.85914 5.31865 6.12876 6 6.12876C6.68135 6.12876 7.33485 5.85914 7.81694 5.37914L11.7508 1.45744C11.9104 1.29735 12 1.0808 12 0.855083C12 0.629363 11.9104 0.412813 11.7508 0.25273Z"
                          fill="#BBBBBB"
                        />
                      </svg>
                    </span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/contact-us"
                        onClick={closeOffcanvas}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/about"
                        onClick={closeOffcanvas}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/ispl-page"
                        onClick={closeOffcanvas}
                      >
                        ISPL
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="headerBtnsWrap deskMob">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/dashboard-golden-page"
                      className="regBtn registraionButton"
                      onClick={closeOffcanvas}
                    >
                      <span>
                        <img src={dashboard} alt="Dashboard" />
                      </span>
                      Dashboard
                    </Link>
                    <Link
                      to=""
                      className="regBtn loginButton"
                      onClick={handleLogout}
                    >
                      <span>
                        <img src={logout} alt="logout" />
                      </span>
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/registration"
                      className="regBtn registraionButton"
                      onClick={closeOffcanvas}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="18"
                          viewBox="0 0 13 18"
                          fill="none"
                        >
                          <path
                            d="M6.49997 8.66667C7.38223 8.66667 8.24467 8.41252 8.97825 7.93637C9.71182 7.46022 10.2836 6.78344 10.6212 5.99163C10.9588 5.19982 11.0472 4.32853 10.875 3.48794C10.7029 2.64736 10.2781 1.87523 9.65422 1.26921C9.03037 0.663178 8.23553 0.250468 7.37022 0.0832657C6.50492 -0.0839369 5.608 0.00187757 4.7929 0.329857C3.9778 0.657837 3.28112 1.21325 2.79096 1.92586C2.3008 2.63848 2.03918 3.47628 2.03918 4.33333C2.04037 5.48225 2.51072 6.58379 3.34702 7.3962C4.18333 8.20861 5.31726 8.66552 6.49997 8.66667ZM6.49997 1.44445C7.08814 1.44445 7.66311 1.61388 8.15215 1.93131C8.6412 2.24875 9.02237 2.69993 9.24745 3.2278C9.47254 3.75568 9.53143 4.33654 9.41668 4.89693C9.30193 5.45732 9.0187 5.97207 8.6028 6.37609C8.1869 6.78011 7.65701 7.05525 7.08014 7.16671C6.50327 7.27818 5.90532 7.22097 5.36192 7.00232C4.81852 6.78367 4.35407 6.41339 4.0273 5.93831C3.70053 5.46324 3.52611 4.9047 3.52611 4.33333C3.52611 3.56715 3.83943 2.83235 4.39713 2.29058C4.95484 1.74881 5.71125 1.44445 6.49997 1.44445Z"
                            fill="white"
                          />
                          <path
                            d="M6.5 10.196C4.77668 10.1979 3.12449 10.8753 1.90592 12.0795C0.687345 13.2838 0.00191162 14.9165 0 16.6196C0 16.8089 0.076091 16.9904 0.211534 17.1243C0.346977 17.2581 0.530677 17.3333 0.722222 17.3333C0.913767 17.3333 1.09747 17.2581 1.23291 17.1243C1.36835 16.9904 1.44444 16.8089 1.44444 16.6196C1.44444 15.2945 1.97708 14.0238 2.92518 13.0868C3.87328 12.1499 5.15918 11.6235 6.5 11.6235C7.84082 11.6235 9.12672 12.1499 10.0748 13.0868C11.0229 14.0238 11.5556 15.2945 11.5556 16.6196C11.5556 16.8089 11.6316 16.9904 11.7671 17.1243C11.9025 17.2581 12.0862 17.3333 12.2778 17.3333C12.4693 17.3333 12.653 17.2581 12.7885 17.1243C12.9239 16.9904 13 16.8089 13 16.6196C12.9981 14.9165 12.3127 13.2838 11.0941 12.0795C9.87551 10.8753 8.22332 10.1979 6.5 10.196Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="regBtn loginButton"
                      onClick={closeOffcanvas}
                    >
                      <span>
                        <img src={login} alt="login" />
                      </span>
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div className="headerBtnsWrap mobDisp">
          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard-golden-page"
                className="regBtn registraionButton"
                onClick={closeOffcanvas}
              >
                <span>
                  <img src={dashboard} alt="Dashboard" />
                </span>
                Dashboard
              </Link>
              <Link to="" className="regBtn loginButton" onClick={handleLogout}>
                <span>
                  <span>
                    <img src={logout} alt="logout" />
                  </span>
                </span>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/registration"
                className="regBtn registraionButton"
                onClick={closeOffcanvas}
              >
                <span>
                  <img src={dashboard} alt="Dashboard" />
                </span>
                Register
              </Link>
              <Link
                to="/login"
                className="regBtn loginButton"
                onClick={closeOffcanvas}
              >
                <span>
                  <img src={login} alt="login" />
                </span>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavMenus;
