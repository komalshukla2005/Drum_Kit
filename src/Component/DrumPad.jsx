import React, { useState, useRef } from "react";

function DrumPad({ image, sound, altText }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(sound)); 
  const [clicked, setClicked] = useState(false);

  const toggleSound = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);

    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <div>
      <img
        src={image}
        alt={altText}
        onClick={toggleSound}
        className={clicked ? "img-clicked" : ""}
      />
    </div>
  );
}

export default DrumPad;
