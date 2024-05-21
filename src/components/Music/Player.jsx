import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { playAudio } from '../../utilities/playAudio';
import styled from 'styled-components';

const Player = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  nextSong,
  prevSong,
  buttonStatus,
  audioRef,
  songState,
  setSongState,
}) => {
  // helpers
  const getNormalTime = (time) => {
    if (time) {
      return (
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
      );
    } else {
      return '0:00';
    }
  };

  // event handlers
  const handlePlayPauseSong = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((isPlaying) => !isPlaying);
  };

  const handleSeekBarDrag = (event) => {
    audioRef.current.currentTime = event.target.value;
    setSongState({ ...songState, currentTime: event.target.value });
  };

  useEffect(() => {
    if (isPlaying) {
      playAudio(isPlaying, audioRef);
    }
  }, [currentSong, isPlaying, audioRef]);

  // styles
  const trackAnimation = {
    transform: `translateX(${songState.seekbarPercentage}%)`,
  };

  return (
    <Container>
    <div className="player">
      <div className="time-control">
        <p>{getNormalTime(songState.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]} )`,
          }}
          className="track"
        >
          <input
            type="range"
            min={0}
            max={songState.duration}
            value={songState.currentTime}
            onChange={handleSeekBarDrag}
          />
          <div style={trackAnimation} className="animate-track"></div>
        </div>
        <p>{getNormalTime(songState.duration)}</p>
      </div>
      <div className="play-control">
        <button disabled={!buttonStatus.previous}>
          <FontAwesomeIcon
            className="skip-back"
            size="4x"
            icon={faAngleLeft}
            onClick={prevSong}
          />
        </button>
        <button>
          <FontAwesomeIcon
            className="play"
            size="5x"
            icon={isPlaying ? faPause : faPlay}
            onClick={handlePlayPauseSong}
          />
        </button>
        <button disabled={!buttonStatus.next}>
          <FontAwesomeIcon
            className="skip-forward"
            size="4x"
            icon={faAngleRight}
            onClick={nextSong}
          />
        </button>
      </div>
    </div>
    </Container>
  );
};

export default Player;

const Container = styled.div`
:root{
  $primary-color           : #03a9f4;
  $primary-light-color     : #67daff;
  $primary-dark-color      : #007ac1;
  $primary-text-color      : #455a64;
  $secondary-text-color    : #718792;
}
.player {
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  button {
    border: 0px;
    background: transparent;

    &:disabled {
      color: grey;
    }
  }
}

.time-control {
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    background: transparent;
    cursor: pointer;
    -webkit-appearance: none;
  }

  p {
    padding: 1rem;
  }
}

.play-control {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
    color: $primary-text-color;

    &:hover {
      color: $primary-light-color;
    }
  }
}

// seekbar customization
input[type='range']:focus {
  outline: none;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
}

input[type='range']::-moz-range-thumb {
  -webkit-appearance: none;
  background: transparent;
  border: none;
}

.track {
  background: lightblue;
  width: 100%;
  height: 1rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
}

.animate-track {
  background: rgb(204, 204, 204);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  pointer-events: none;
}

@media screen and (max-width: 768px) {
  .time-control {
    width: 90%;
  }

  .play-control {
    width: 60%;
  }
}

`;
