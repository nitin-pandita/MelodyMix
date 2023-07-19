import { useState, useRef, useEffect } from "react";
import Player from "./components/Player";
import Songs from "./styles/Songs";
import "./styles/app.scss";
import chillHop from "./utils";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const durationTime = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(durationTime);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: durationTime,
      animationPercentage: animation,
    });
  };

  useEffect(() => {
    // Add a "loadeddata" event listener to the audio element
    audioRef.current.addEventListener("loadeddata", () => {
      if (isPlaying) {
        audioRef.current.play(); // Play the audio when it's fully loaded
      }
    });
  }, [currentSong, isPlaying]);

  const songEndHandler = () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  };

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        currentSong={currentSong}
      />
      <Songs currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        setPlaying={setPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSong={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSongs={setCurrentSong}
        isPlaying={isPlaying}
        setSong={setSongs}
        libraryStatus={libraryStatus}
        currentSong={currentSong} // Fix typo here (currenSong -> currentSong)
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        onLoadedMetadata={timeUpdateHandler}
        src={currentSong.audio}
        onEnded={songEndHandler}
      />
    </div>
  );
}

export default App;
