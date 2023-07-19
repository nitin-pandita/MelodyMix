import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSongs,
  audioRef,
  isPlaying,
  setSong,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""} `}>
      <h2 className="heading">Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSongs} // Corrected prop name
            id={song.id} // Use song.id instead of songs.id
            key={song.id} // Use song.id instead of songs.id
            song={song}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSong={setSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
