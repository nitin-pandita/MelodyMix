import React from "react";

const Songs = ({ currentSong }) => {
  return (
    <div
      style={{
        background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
      }}
      className="song-container"
    >
      <img alt="" src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Songs;
