import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import { Pause, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";

const VideoPlayer = ({ width = "100%", height = "100%", url }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const playedRef = useRef(null);
  const playedContainerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  function handlePlayAndPause() {
    setPlaying(!playing);
  }

  function handleProgress() {}

  function handleRewind() {}

  function handleForward() {}

  function handleToggleMute() {}

  function handleSeekChange() {}

  function handleQuality() {}

  function handleSeekMouseUp() {}

  return (
    <div
      ref={playedContainerRef}
      className={`relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ease-in-out ${
        isFullScreen ? "w-screen h-screen" : ""
      }`}
      style={{ width, height }}
    >
      <ReactPlayer
        ref={playedRef}
        className="absolute top-0 left-0"
        playing={playing}
        vloume={volume}
        muted={muted}
        onProgress={handleProgress}
      />
      {showControls && (
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4 transition-opacity duration-300 ${
            showControls ? " opacity-100" : "opacity-0"
          }`}
        >
          <Slider
            value={[played * 100]}
            max={100}
            step={0.1}
            onValueChange={(value) => handleSeekChange([value[0] / 100])}
            onValueCommit={handleSeekMouseUp}
            className="w-full mb-4"
          />
          <div className=" flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePlayAndPause}
                className="text-white hover:text-primary hover:bg-gray-700"
              >
                {playing ? (
                  <Pause className="h-6 w-6" />
                ) : (
                  <Play className="h-6 w-6" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleRewind}
                className="text-white hover:text-primary hover:bg-gray-700"
              >
                <RotateCcw className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleForward}
                className="text-white hover:text-primary hover:bg-gray-700"
              >
                <RotateCw className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleToggleMute}
                className="text-white hover:text-primary hover:bg-gray-700"
              >
                {muted ? (
                  <VolumeX className="h-6 w-6" />
                ) : (
                  <Volume2 className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;