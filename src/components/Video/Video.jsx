import { useEffect, useRef, useState } from "react";
import { useElementOnScreen } from "../../hook";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Video.scss";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { MuteIcon, SoundIcon } from "../Icons";

function Video({
  data,
  src,
  onClick,
  isTab,
  setIsPlaying,
  valueSound,
  isClickChangeVideo,
  setIsClickChangeVideo,
  isHomePage,
  ...props
}) {
  let vid = document.getElementById(`video_music ${src}`);
  const navigate = useNavigate();
  const { nickname, id: ID } = useParams();
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [isVolume, setIsVolume] = useState(null);
  const [isMute, setIsMute] = useState(false);
  const id = uuidV4();

  if (nickname && ID && isClickChangeVideo && !isHomePage) {
    videoRef.current?.play();
    setIsPlaying && setIsPlaying(true);
  } else if (nickname && ID && !isClickChangeVideo && isHomePage) {
    videoRef.current?.pause();
    setIsPlaying && setIsPlaying(false);
  }

  const handleVideo = () => {
    if (playing) {
      nickname && ID && setIsClickChangeVideo(false);
      videoRef.current?.pause();
      setPlaying(false);
    } else {
      nickname && ID && setIsClickChangeVideo(true);
      videoRef.current?.play();
      setPlaying(true);
    }
  };

  const handleMuteSound = (type) => {
    if (type === "mute") {
      document.getElementById(`video_music ${src}`).muted = true;
      setIsMute(true);
    } else {
      document.getElementById(`video_music ${src}`).muted = false;
      setIsMute(false);
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
      vid.volume = valueSound;
    } else if (isVolume) {
      vid.volume = isVolume;
    }
  }, [valueSound, isVolume]);

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
      <HeadlessTippy
        interactive
        delay={[0, 50]}
        offset={[0, -100]}
        placement="top"
        render={(attrs) => (
          <div tabIndex="-1" {...attrs}>
            <div className="wr-range">
              <input
                className="input-range"
                type="range"
                min="0"
                max="1"
                step="any"
                value={isVolume}
                onChange={(event) => setIsVolume(event.currentTarget.value)}
              />
            </div>
          </div>
        )}
      >
        {!nickname && isMute ? (
          <div onClick={() => handleMuteSound("notMute")}>
            <MuteIcon className="btn-mute" />
          </div>
        ) : (
          !nickname && (
            <div onClick={() => handleMuteSound("mute")}>
              <SoundIcon className="btn-mute" />
            </div>
          )
        )}
      </HeadlessTippy>
      <video
        className="video"
        id={`video_music ${src}`}
        ref={!isTab ? videoRef : null}
        loop
        src={src}
        onClick={nickname && ID ? handleVideo : handleViewFullVideo}
        {...props}
      ></video>
    </div>
  );
}

export default Video;
