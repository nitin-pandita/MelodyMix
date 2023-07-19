import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSong,
}) => {
  const handleClick = async () => {
    await setCurrentSong(song); // Use song instead of selectedSong

    const newSongs = songs.map((item) => {
      // Use item instead of song
      if (item.id === id) {
        return {
          ...item,
          active: true,
        };
      } else {
        return {
          ...item,
          active: false,
        };
      }
    });

    setSong(newSongs);

    // check if the song is playing
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div
      onClick={handleClick}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
