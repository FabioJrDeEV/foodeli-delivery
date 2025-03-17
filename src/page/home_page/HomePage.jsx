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
import Card01 from "../../assets/img/card01.png";
import Card02 from "../../assets/img/card02.png";
import Card03 from "../../assets/img/card03.png";
import Img1 from "../../assets/img/hamburger.png";
import Img2 from "../../assets/img/cupcake.png";
import Img3 from "../../assets/img/ramen.png";
import MenuH from "../../assets/img/menuH.png";
import Seta from "../../assets/img/seta.svg";
import Comida from "../../assets/img/comida.png";
import Chefe from "../../assets/img/chefe.png";
import Starss from "../../assets/img/starss.png";
import "./HomePage.css";
import { useState } from "react";

const HomePage = () => {
  const [isActived, setIsActived] = useState("why");
  const [isMenuActived, setIsMenuActived] = useState("cupcake");

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
                <a
                  className={`nav-link ${
                    isActived === "why" ? "isActive" : ""
                  }`}
                  onClick={() => setIsActived("why")}
                  aria-current="page"
                  href="#"
                >
                  Why Foodeli?
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    isActived === "service" ? "isActive" : ""
                  }`}
                  onClick={() => setIsActived("service")}
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    isActived === "menu" ? "isActive" : ""
                  }`}
                  onClick={() => setIsActived("menu")}
                  href="#"
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    isActived === "contact" ? "isActive" : ""
                  }`}
                  onClick={() => setIsActived("contact")}
                  href="#"
                >
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

      <section className="w-100 mb">
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
          <div className="w-100 d-flex mt-5 mt-md-5 mt-lg-0">
            <div className="d-flex position-relative">
              <img src={Pessoa} alt="Pessoa 01" className="position-absolute" />
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
            <div className="w-100 d-flex flex-column position-relative">
              <div className="mb-2">
                <p className="fw-medium m-2 me-4 position-absolute position-text">
                  Our Happy Customer
                </p>
              </div>
              <div className="mt-4">
                <img
                  src={Stars}
                  alt="Stars"
                  className="position-absolute position-text"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-100 mb">
        <div className="container">
          <div className="w-100 mt-5">
            <h2 className="text-center fs-6 text-danger mb-3 text-uppercase">
              What we server
            </h2>
          </div>
          <div className="w-100 d-flex justify-content-center ">
            <h1
              className="text-center"
              style={{ fontWeight: "700", maxWidth: "532px", fontSize: "45px" }}
            >
              Your Favourite Food Delivery Partner
            </h1>
          </div>
          <div className="row mt-4 align-items-start justify-content-center">
            <div className="col-12 col-md-12 col-lg-4 d-flex justify-content-center">
              <div className="card border-0" style={{ width: "15rem" }}>
                <img
                  src={Card01}
                  alt="Card 01"
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5
                    className="card-title text-center"
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    Easy To Order
                  </h5>
                  <p className="card-text text-center">
                    You only need a few steps in ordering food
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 d-flex justify-content-center">
              <div className="card border-0" style={{ width: "15rem" }}>
                <img
                  src={Card02}
                  alt="Card 02"
                  style={{ height: "230px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5
                    className="card-title text-center"
                    style={{ fontWeight: "700" }}
                  >
                    Fastest Delivery
                  </h5>
                  <p className="card-text text-center">
                    Delivery that is always ontime even faster
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 d-flex justify-content-center">
              <div className="card border-0" style={{ width: "15rem" }}>
                <img
                  src={Card03}
                  alt="Card 03"
                  style={{ height: "230px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5
                    className="card-title text-center"
                    style={{ fontWeight: "700" }}
                  >
                    Best Quality
                  </h5>
                  <p className="card-text text-center">
                    Not only fast for us quality is also number one
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-100 mb">
        <div className="container">
          <div className="d-flex flex-column mb-4">
            <h2
              className="text-uppercase text-danger pb-2"
              style={{ fontSize: "18px" }}
            >
              Our Menu
            </h2>
            <h1 style={{ fontSize: "45px", fontWeight: "700", width: "532px" }}>
              Menu That Always Makes You Fall In Love
            </h1>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 justify-content-start mb-4">
              <ul className="width p-3 border-end border-3 border-black">
                <li className="text-decoration-none align-items-center d-flex p-2">
                  <img src={Img1} alt="" />
                  <p className="mt-4 ms-4">Burger</p>
                </li>
                <li
                  className={`text-decoration-none align-items-center d-flex p-2 w-100 ${
                    isMenuActived === "cupcake" ? "active" : ""
                  }`}
                  onClick={() => setIsMenuActived("cupcake")}
                >
                  <img src={Img2} alt="" />
                  <p className="mt-4 ms-4">Cupcake</p>
                </li>

                <li className="text-decoration-none align-items-center d-flex p-2">
                  <img src={Img3} alt="" width="41px" />
                  <p className="mt-4 ms-4">Ramen</p>
                </li>
                <li className="text-decoration-none align-items-center d-flex p-2">
                  <img src={Img2} alt="" />
                  <p className="mt-4 ms-4">Ice Cream</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-4 mb-lg-0">
              <div
                className="card position-relative border-0"
                style={{ width: "15rem" }}
              >
                <img
                  src={MenuH}
                  className="card-img rounded-5"
                  alt="Italian Pizza"
                  width="300px"
                  height="360px"
                  style={{ objectFit: "cover" }}
                />
                <div className="card-img-overlay position-absolute top-50 mt-5 p-1 ms-3">
                  <h5
                    className="card-title text-light"
                    style={{ fontSize: "24px", fontWeight: "500" }}
                  >
                    Italian Pizza
                  </h5>
                  <p
                    className="card-text text-light"
                    style={{ fontSize: "24px", fontWeight: "700" }}
                  >
                    <span className="text-warning" style={{ fontSize: "18px" }}>
                      $
                    </span>{" "}
                    7.49
                  </p>
                  <a
                    href="#"
                    className="text-decoration-none text-light"
                    style={{ fontSize: "14px" }}
                  >
                    Order Now{" "}
                    <img src={Seta} alt="" width="17px" className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4 ">
              <div
                className="card position-relative border-0 p-0"
                style={{ width: "15rem" }}
              >
                <img
                  src={Comida}
                  className="card-img rounded-5"
                  alt="Italian Pizza"
                  width="300px"
                  height="360px"
                  style={{ objectFit: "cover" }}
                />
                <div className="card-img-overlay position-absolute top-50 mt-5 p-1 ms-3">
                  <h5
                    className="card-title text-light"
                    style={{ fontSize: "24px", fontWeight: "500" }}
                  >
                    Sausage Pizza
                  </h5>
                  <p
                    className="card-text text-light"
                    style={{ fontSize: "24px", fontWeight: "700" }}
                  >
                    <span className="text-warning" style={{ fontSize: "18px" }}>
                      $
                    </span>{" "}
                    6.59
                  </p>
                  <a
                    href="#"
                    className="text-decoration-none text-light"
                    style={{ fontSize: "14px" }}
                  >
                    Order Now{" "}
                    <img src={Seta} alt="" width="17px" className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-100 mb">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
              <img src={Chefe} alt="Cozinheiro" width="500px" />
            </div>
            <div className="col-12 col-md-12 col-lg-6 mt-5">
              <div className="d-flex flex-column">
                <h3 className="text-danger fs-6 mt-3 mt-md-3 mt-lg-5">
                  WHAT THEY SAY
                </h3>
                <h1
                  className="fw-bold fs-3"
                  style={{ maxWidth: "350px", lineHeight: "50px" }}
                >
                  What Our Customers Say About Us
                </h1>
                <p
                  className="fs-5"
                  style={{ maxWidth: "500px", lineHeight: "30px" }}
                >
                  “Fudo is the best. Besides the many and delicious meals, the
                  service is also very good, especially in the very fast
                  delivey. I highly recommend Fudo to you”.
                </p>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <div>
                    <img src={Pessoa} alt="Pessoa 01" />
                  </div>
                  <div className="d-flex flex-column">
                    <p className="m-0 fw-medium fs-6">Theresa Jordan</p>
                    <p className="text-muted">Food Enthusiast</p>
                  </div>
                </div>
                <div className="mt-3 d-flex align-items-center">
                  <img src={Starss} width="150px" alt="Stars" />
                  <div>
                    <p className="mt-3 ms-3 fw-medium">4,8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
