"use client";

import { useState } from "react";
import ReactPlayer from "react-player";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        controls={false}
        playing={isPlaying}
      />
      <button onClick={() => setIsPlaying(!isPlaying)}>Play / pause</button>
    </div>
  );
};
