import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../header/header.css";
import NavMenus from "./navmaneus/NavMenus";
import { fb, insta, linkdin, yt } from "../../assets/imagePath";
function Header() {
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [scroll, setScroll] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
    const handleScroll = () => {
      const currentScrollpos = window.pageYOffset;

      if (prevScrollpos > currentScrollpos) {
        document.getElementById("mainTop").style.top = "0px";
      } else if (prevScrollpos > 500) {
        document.getElementById("mainTop").style.top = "-180px";
      }
      setPrevScrollpos(currentScrollpos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);
  return (
    <>
      <section
        id="mainTop"
        className={scroll ? "header" : "header topClass"}
        ref={scrollRef}
      >
        <section className="topBarSection">
          <div className="container-fluid">
            <div className="topRow">
              <div className="topLeftBox box">
                <ul>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M18 9C18 4.03725 13.9627 -1.76474e-07 9 -3.93402e-07C4.03725 -6.10331e-07 -1.76474e-07 4.03725 -3.93402e-07 9C-6.10331e-07 13.9627 4.03725 18 9 18C13.9627 18 18 13.9628 18 9ZM4.5 6.64275C4.5 6.1005 4.69575 5.556 5.10975 5.14275L5.55975 4.75125C5.89425 4.41675 6.43725 4.41675 6.77175 4.75125L7.52175 5.72775C7.85625 6.06225 7.85625 6.60525 7.52175 6.93975L6.8835 7.7415C7.47675 9.29475 8.5755 10.4407 10.2585 11.1165L11.0602 10.4782C11.3947 10.1437 11.9377 10.1437 12.2722 10.4782L13.2487 11.2282C13.5832 11.5627 13.5832 12.1057 13.2487 12.4403L12.8572 12.8902C12.444 13.3042 11.8995 13.5 11.3572 13.5C8.35725 13.5 4.5 9.42825 4.5 6.64275Z"
                          fill="#CAF75A"
                        />
                      </svg>
                    </span>
                    <Link className="" to="tel:02269587007">
                      02269587007
                    </Link>
                  </li>
                  <li>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                      >
                        <path
                          d="M0 12.0706C0 9.30885 0 6.54712 0 3.78539C0.0805114 3.73765 0.132001 3.80131 0.187236 3.83829C2.5567 5.4209 4.93039 6.99742 7.29845 8.58191C7.77403 8.90021 8.27629 9.13753 8.85579 9.16374C9.26349 9.182 9.65996 9.11319 10.0349 8.94561C10.2544 8.84778 10.4604 8.72374 10.6598 8.5908C13.0255 7.01334 15.3927 5.43728 17.7574 3.85795C17.7916 3.83501 17.8239 3.80973 17.8609 3.79195C17.947 3.75075 17.9957 3.76995 17.992 3.87433C17.9901 3.92114 17.9915 3.96795 17.9915 4.01476C17.9915 6.60657 17.9751 9.19885 17.9999 11.7907C18.0093 12.7839 17.2402 13.4875 16.3059 13.5235C16.2652 13.5249 16.224 13.5245 16.1833 13.5245C11.3736 13.5245 6.56449 13.5259 1.75487 13.5226C1.06631 13.5221 0.525665 13.2375 0.163363 12.636C0.0571069 12.4591 0.0379153 12.2634 0 12.0706Z"
                          fill="#CAF75A"
                        />
                        <path
                          d="M0 1.39818C0.0397876 1.27882 0.0706815 1.15524 0.121235 1.04056C0.405366 0.39928 0.901072 0.0552346 1.59993 0.00327663C1.64674 0 1.69355 0.00046809 1.74036 0.00046809C6.57291 0 11.4055 -0.00046809 16.238 0.000936179C17.2496 0.00140427 18.0018 0.739581 17.9709 1.7118C17.9526 2.28662 17.668 2.71258 17.1925 3.02807C15.7423 3.99 14.2955 4.958 12.8477 5.9232C11.9096 6.54857 10.972 7.17347 10.0335 7.79837C9.29392 8.2908 8.67932 8.28893 7.93786 7.79463C5.63439 6.25883 3.33514 4.71647 1.02371 3.19331C0.526133 2.86518 0.121703 2.49679 0 1.88968C0 1.72585 0 1.56201 0 1.39818Z"
                          fill="#CAF75A"
                        />
                      </svg>
                    </span>
                    <Link to="mailto:isplt10@ccssports.in">
                      isplt10@ccssports.in
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topRightBox box">
                <ul>
                  <li className="sbTitle">Follow Us</li>
                  <li>
                    <ul className="d-flex">
                      <li>
                        <Link
                          to="https://www.facebook.com/profile.php?id=61553035197650&amp;is_tour_completed=true"
                          target="_blank"
                        >
                          <span>
                            <img src={fb} alt="facebook" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.linkedin.com/company/indian-stree-premier-league/"
                          target="_blank"
                        >
                          <span>
                            <img src={linkdin} alt="linkedin" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://youtube.com/@indianstreetpremierleague_t10?si=WT5kwHmRjQ_MQpO5"
                          target="_blank"
                        >
                          <span>
                            <img src={yt} alt="youtube" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="https://instagram.com/ispl_t10?igshid=OGQ5ZDc2ODk2ZA=="
                          target="_blank"
                        >
                          <span>
                            <img src={insta} alt="instagram" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <header id="header">
          <NavMenus />
        </header>
      </section>
    </>
  );
}

export default Header;
