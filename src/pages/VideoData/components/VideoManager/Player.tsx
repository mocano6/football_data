import React from "react";
interface PlayerProps {
  video: { id: string; title: string; url: string }; // Zdefiniuj typ video
}

const Player: React.FC<PlayerProps> = ({ video }) => {
  return <div id="youtube-player">{/* Logic to embed YouTube player */}</div>;
};

export default Player;
