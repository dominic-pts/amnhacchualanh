import React from "react";
import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Library = ({
  songs,
  currentSong,
  setCurrentSong,
  setIsPlaying,
  isLibOpen,
  setIsLibOpen,
}) => {
  const renderSongItems = () => {
    return songs.map((song) => (
      <LibrarySong
        key={song.id}
        song={song}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
      />
    ));
  };

  return (
    <Container>
      <div className={`library ${isLibOpen ? "active-library" : ""}`}>
        <div className="heading-nav">
          <Link to="/" rel="item" className="link__item">
            Trang chủ
          </Link>
          <Link to="/cafe-location" rel="item" className="link__item">
            Địa điểm 
          </Link>
          <Link to="/booking" rel="item" className="link__item booking__item">
            Đặt vé 
          </Link>
        </div>
        <div className="heading-container">
          <h2>Thư viện</h2>
          <button onClick={() => setIsLibOpen(false)}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </div>
        <div className="library-songs">{renderSongItems()}</div>
      </div>
    </Container>
  );
};

export default Library;

const Container = styled.div`
  :root {
    $primary-color: #03a9f4;
    $primary-light-color: #67daff;
    $primary-dark-color: #007ac1;
    $primary-text-color: #455a64;
    $secondary-text-color: #718792;
  }
  .heading-nav {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    .link__item {
      text-decoration: none;
      font-size: var(--font-size-small);
      color: #494949;
      padding: 20px 10px;
    }
  }
  .library {
    position: fixed;
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    opacity: 0;
    background-color: white;
    box-shadow: 2px 2px 50px rgb(204, 204, 204);
    overflow: scroll;

    .heading-container {
      margin-top: 0.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h2 {
      padding-left: 0.5rem;
    }

    button {
      background: transparent;
      width: 50px;
      height: 40px;
      border-radius: 10%;
      margin: 0.4rem;
      cursor: pointer;
      border: none;
      padding: 0.1rem;
      transition: all 0.3s ease;
      &:hover {
        color: white;
        background: $primary-color;
      }
    }
  }

  .active-library {
    transform: translateX(0%);
    opacity: 1;
  }

  .library-songs {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.4rem 0.4rem;
    width: 100%;
  }

  .library-song {
    display: flex;
    flex-direction: row;
    margin: 0.1rem 0rem;
    cursor: pointer;
    border-radius: 10px;
    background: rgb(238, 240, 242);
    overflow: clip;
    transition: background 0.5s ease;
    img {
      width: 30%;
      height: 30%;
    }

    &:hover {
      background-color: $primary-light-color;
    }
  }

  .active {
    background: #03a9f4;
    h3,
    h4 {
      color: white;
      font-weight: bold;
    }
  }
  .song-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h3 {
      padding-left: 1rem;
      padding-top: 0rem;
      padding-bottom: 0.4rem;
      font-size: 1rem;
    }

    h4 {
      padding-left: 1rem;
      padding-top: 0;
      padding-bottom: 0;
      font-size: 0.7rem;
    }
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
  }

  // for chrome scrollbar
  *::-webkit-scrollbar {
    width: 5px;
    height: 100%;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }

  @media screen and (max-width: 768px) {
    .library {
      width: 100vw;
    }
    .library-song {
      img {
        width: 20%;
        height: 20%;
      }
    }
  }
`;
