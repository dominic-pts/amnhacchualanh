import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import imgLogo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Nav = ({ isLibOpen, setIsLibOpen }) => {
  //handlers
  const handleLibClick = () => {
    setIsLibOpen((isLibOpen) => !isLibOpen);
  };

  return (
    <Container>
      <nav className='nav_music'>
        <Link to="/" className='logo_header'>
          <img src={imgLogo} alt="logo-white.png" />
        </Link>
        <button onClick={handleLibClick}>
          <FontAwesomeIcon
            icon={isLibOpen ? faChevronLeft : faBars}
            size="2x"
          />
        </button>
      </nav>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
:root{
  $primary-color           : #03a9f4;
  $primary-light-color     : #67daff;
  $primary-dark-color      : #007ac1;
  $primary-text-color      : #455a64;
  $secondary-text-color    : #718792;
}
.nav_music {
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .logo_header {
    img {
      width: 150px;
    }
  }
  button {
    background: transparent;
    width: 50px;
    border-radius: 10%;
    cursor: pointer;
    border: none;
    padding: 0.5rem;
    transition: all 0.3s ease;
    &:hover {
      color: white;
      background: $primary-color;
    }
  }
}

// @media screen and (max-width: 768px) {
//   nav {
//     button {
//       z-index: 6;
//     }
//   }
// }

`;