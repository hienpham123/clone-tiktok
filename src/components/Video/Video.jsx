import { useEffect, useRef, useState } from "react";
import { useElementOnScreen } from "../../hook";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function Video({
  data,
  src,
  onClick,
  isTab,
  setIsPlaying,
  valueSound,
  ...props
}) {
  const navigate = useNavigate();
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const id = uuidV4();

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
    navigate(`/@${data.nickname}/video/${id}`, {
      state: { data: data, src: src },
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
    if (valueSound) {
      var vid = document.getElementById("video_music");
      vid.volume = valueSound;
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
