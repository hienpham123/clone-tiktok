import { useEffect, useRef, useState } from "react";
import { useElementOnScreen } from "../../hook";
import { useNavigate } from "react-router-dom";

function Video({
  src,
  avt,
  onClick,
  isTab,
  setIsPlaying,
  valueSound,
  ...props
}) {
  const volumn = localStorage.getItem("valueSound");
  const navigate = useNavigate();
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);

  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handleViewFullVideo = () => {
    navigate("/@nickname/video", {
      state: { video: src, avt: avt },
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };
  const isVisible = useElementOnScreen(options, videoRef);

  useEffect(() => {
    if (isVisible) {
      if (!playing) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisible]);

  useEffect(() => {
    if (playing) {
      setIsPlaying && setIsPlaying(true);
    } else {
      setIsPlaying && setIsPlaying(false);
    }
  }, [playing]);

  useEffect(() => {
    var vid = document.getElementById("video_music");
    valueSound ? (vid.volume = valueSound) : (vid.volume = volumn);
    if (valueSound) {
      localStorage.setItem("valueSound", valueSound);
    }
  }, [valueSound]);

  return (
    <video
      id="video_music"
      ref={!isTab ? videoRef : null}
      loop
      src={src}
      onClick={handleVideo}
      onDoubleClick={handleViewFullVideo}
      {...props}
    ></video>
  );
}

export default Video;
