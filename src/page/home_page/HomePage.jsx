import Logo from "../../assets/img/logo.png";
import Search from "../../assets/img/search.png";
import Bolsa from "../../assets/img/bolsa.png";
import Login from "../../assets/img/login.png";
import Button from "../../assets/img/button.png";
import Font from "../../assets/img/font.png";
import Prato from "../../assets/img/prato.png";
import Circle from "../../assets/img/play_circle.png";
import Pessoa from "../../assets/img/pessoa1.png";
import Pessoa2 from "../../assets/img/pessoa2.png";
import Pessoa3 from "../../assets/img/pessoa3.png";
import Stars from "../../assets/img/stars.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="w-100 min-vh-100">
      <nav className="navbar navbar-expand-lg p-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" width="152px" height="45px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Why Foodeli?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="d-none d-lg-flex gap-lg-4 align-items-center">
            <div>
              <button className="border-0 bg-transparent p-1">
                <img src={Search} alt="Search" width="22px" height="22px" />
              </button>
            </div>
            <div>
              <button className="border-0 bg-transparent p-1">
                <img src={Bolsa} alt="Carrinho" width="25px" height="24px" />
              </button>
            </div>
            <div>
              <button className="border-0 bg-transparent p-1">
                <img
                  src={Login}
                  alt="Login Button"
                  width="120px"
                  height="49px"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="w-100 min-vh-100">
        <div className="container mt-5 mt-md-5 mt-lg-5">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <button className="border-0 bg-transparent">
                <img
                  src={Button}
                  alt="Button"
                  width="204px"
                  height="52px"
                  className="mb-5"
                />
              </button>
              <img
                src={Font}
                alt="Fonte texto"
                className="mt-4 img-fluid order-1 order-md-2"
              />
              <p
                className="mt-4 mb-0"
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "30px",
                  maxWidth: "450px",
                }}
              >
                Our job is to filling your tummy with delicious food and with
                fast and free delivery
              </p>
              <div className="w-100 d-flex align-items-center mt-3 mt-md-2 gap-2 d-none d-md-flex d-lg-flex">
                <div>
                  <button type="button" className="btn btn-color mt-2">
                    Get Start
                  </button>
                </div>
                <div className="w-100 d-flex align-items-center ">
                  <div className="ms-3 p-0">
                    <button className="btn border-0 bg-transparent">
                      <img src={Circle} alt="Play circle" width="49px" />
                    </button>
                  </div>
                  <button className="btn border-0 bg-transparent p-0">
                    <p className="mt-3 fw-medium" style={{ maxWidth: "150px" }}>
                      Watch Video
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-3 mt-md-5 mt-lg-0 order-2 order-md-1">
              <img
                src={Prato}
                alt="Prato imagem"
                width="100%"
                height="auto"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="w-100 d-flex mt-5 mt-mb-5 mt-lg-0">
            <div className="d-flex position-relative">
              <img src={Pessoa} alt="Pessoa 01" />
              <img
                src={Pessoa2}
                alt="Pessoa 02"
                className="position-absolute position"
              />
              <img
                src={Pessoa3}
                alt="Pessoa 03"
                className="position-absolute position3"
              />
            </div>
            <div className="w-100 d-flex flex-column space2 ">
              <div>
                <p className="fw-medium m-2">Our Happy Customer</p>
              </div>
              <div>
                <img src={Stars} alt="Stars" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-100 min-vh-100">
        <div className="container"></div>
      </section>
    </div>
  );
};

export default HomePage;
