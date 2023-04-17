import { useEffect, useRef, useState } from "react";
import { useElementOnScreen } from "../../hook";

function Video({ src, onClick, isTab, ...props }) {
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

  return (
    <video
      ref={!isTab ? videoRef : null}
      loop
      src={src}
      onClick={handleVideo}
      {...props}
    ></video>
  );
}

export default Video;
