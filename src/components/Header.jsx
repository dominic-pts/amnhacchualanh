import React, { useEffect, useState } from "react";
import imgLogo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(!!window.scrollY);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <Container>
      <header className={`${isScrolled ? "scrolled" : ""} header`}>
        <div className="containers">
          <Link to="/">
            <img src={imgLogo} alt="logo-white.png" />
          </Link>
          <nav className="header__navbar">
            <Link to="/" rel="item" className="header__navbar--current">
              Trang chủ
            </Link>
            <Link to="/cafe-location" rel="item" className="header__navbar--current">
              Địa điểm cafe chữa lành
            </Link>
            <Link to="/booking" rel="item" className="header__navbar--current">
              Đặt vé & Giá vé
            </Link>
          </nav>
        </div>
      </header>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 15px 50px 10px;
    transition: all 0.3s linear;
    background-color: transparent;
    -webkit-box-align: center;
    -webkit-transition: all 0.3s linear;
    z-index: var(--z-index-100);

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a img {
        width: 150px;
      }

      .header__navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        font-size: var(--font-size-small);
        margin: 0;
        .header__navbar--current {
          text-decoration: none;
          margin-bottom: 6px;
          font-family: "Oswald", sans-serif;
          color: var(--white-color);
          font-weight: 300;
          line-height: 31px;
          padding: 0 20px;
        }
      }
    }
  }

  // add class
  .scrolled {
    background: #fff;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.24);
    transition: 0.3s ease;
    a {
      color: #494949 !important;
    }
  }

  //reponse

  @media (max-width: 430px) {
    :root {
      --font-size-medium: 1.3rem;
      --font-size-small: 1.1rem;
    }

    .container {
      max-width: 355px;
    }
  }
`;
