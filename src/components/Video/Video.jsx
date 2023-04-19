import { useEffect, useRef, useState } from "react";
import { useElementOnScreen } from "../../hook";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Video.scss";
import { MuteIcon, SoundIcon } from "../Icons";

function Video({
  data,
  src,
  onClick,
  isTab,
  setIsPlaying,
  valueSound,
  ...props
}) {
  let vid = document.getElementById("video_music");
  const { nickname } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
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

  const handleMuted = () => {
    vid.volume = "0";
    setIsMute(true);
  };

  const handleSound = () => {
    vid.volume = "0.5";
    setIsMute(false);
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
      vid.volume = valueSound;
    }
  }, [valueSound]);

  return (
    <div className="wrapper">
      {!nickname && (
        <div className="bg-btn" onClick={handleVideo}>
          {!playing ? (
            <FontAwesomeIcon className="btn-play" icon={faPlay} />
          ) : (
            <FontAwesomeIcon className="btn-play" icon={faPause} />
          )}
        </div>
      )}
      {!nickname && isMute ? (
        <div onClick={handleSound}>
          <MuteIcon className="btn-mute" />
        </div>
      ) : (
        !nickname && (
          <div onClick={handleMuted}>
            <SoundIcon className="btn-mute" />
          </div>
        )
      )}
      <video
        className="video"
        id="video_music"
        ref={!isTab ? videoRef : null}
        loop
        src={src}
        onClick={nickname ? handleVideo : handleViewFullVideo}
        // onDoubleClick={handleViewFullVideo}
        {...props}
      ></video>
    </div>
  );
}

export default Video;
