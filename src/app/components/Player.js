"use client";

import React from "react";
import ReactPlayer from "react-player/youtube";

const Player = () => {
  return (
    <div className="flex py-5  justify-center">
      <ReactPlayer url="https://www.youtube.com/watch?v=FLaoULJuHTw&t=8s" />
    </div>
  );
};

export default Player;
