import React from "react";
import DrumPad from "./Component/DrumPad"; 
import "./Component/DrumKit.css";
const drumPads = [
  { image: "/Image/kick.png", sound: "/Sound/Kick.mp3", altText: "Kick Drum" },
  { image: "/Image/snare.png", sound: "/Sound/snare.mp3", altText: "Snare Drum" },
  { image: "/Image/tom1.png", sound: "/Sound/Tom1.mp3", altText: "Tom 1" },
  { image: "/Image/tom2.png", sound: "/Sound/Tom2.mp3", altText: "Tom 2" },
  { image: "/Image/tom3.png", sound: "/Sound/Tom3.mp3", altText: "Tom 3" },
  { image: "/Image/tom4.png", sound: "/Sound/Tom4.mp3", altText: "Tom 4" },
  { image: "/Image/crash.png", sound: "/Sound/crash.mp3", altText: "Crash Cymbal" }
];

function App() {
  return (
    <div>
      <h1>🎵 React Drum Kit Project 🥁</h1>
      <div className="all-kits">
        {drumPads.map((pad, index) => (
          <DrumPad 
            key={index}  
            image={pad.image} 
            sound={pad.sound} 
            altText={pad.altText} 
          />
        ))}
      </div>
      <h2>Made with love, powered by music 🥁❤️ </h2>
    </div>
  );
}

export default App;