import React from 'react';
import styled from 'styled-components';

const Song = ({ currentSong }) => {
  return (
    <Container>
      <div className="song-container">
        <img src={currentSong.cover} alt={currentSong.name} />
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
      </div>
    </Container>
  );
};

export default Song;

const Container = styled.div`
:root{
  $primary-color           : #03a9f4;
  $primary-light-color     : #67daff;
  $primary-dark-color      : #007ac1;
  $primary-text-color      : #455a64;
  $secondary-text-color    : #718792;
}
.song-container {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 25%;
    border-radius: 50%;
    overflow: hidden;
    margin: 1rem;
  }

  h2 {
    padding: 3rem 1rem 1rem 1rem;
    color: $primary-text-color;
  }

  h3 {
    font-size: 1rem;
    color: $primary-text-color;
  }
}

@media screen and (max-width: 768px) {
  .song-container {
    img {
      width: 50%;
    }
  }
}

`