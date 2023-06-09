import { useLocation, useNavigate, useParams } from "react-router-dom";
import Image from "../../components/Images/Image";
import Button from "../../components/Button/Button";
import Video from "../../components/Video/Video";
import styles from "./VideoInfo.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faHeart,
  faMusic,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CloseIcon,
  EmbedIcon,
  FacebookIcon,
  FriendIcon,
  MuteIcon,
  SoundIcon,
  TagIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "../../components/Icons/Icons";
import Comments from "./Comments";
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import BtnShareMore from "../Profile/Information/BtnShareMore";
import { LIST_VIDEO_HOME } from "../../mockdatahome";

const img = "../../../public/images/thanhmeo.jpeg";
const cx = classNames.bind(styles);
function VideoInfo() {
  const navigate = useNavigate();
  const { nickname, id: ID } = useParams();
  const location = useLocation();
  const data = location.state?.data;

  const [allVideos, _] = useState(LIST_VIDEO_HOME);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [valueSound, setValueSound] = useState(null);
  const [isLike, setIslike] = useState(false);
  const [currentId, setCurrentId] = useState(+data?.id);
  const [nextVideo, setNextVideo] = useState({});
  const [isClickChangeVideo, setIsClickChangeVideo] = useState(false);

  const handleBackExplore = () => {
    return location.pathname.split("/")[3] === "4923490183012830000"
      ? true
      : false;
  };
  const handleMute = () => {
    if (!isMute) {
      document.getElementById(
        `video_music ${nextVideo?.video || data?.src || location.state.src}`
      ).muted = true;
      setIsMute(true);
    } else {
      document.getElementById(
        `video_music ${nextVideo?.video || data?.src || location.state.src}`
      ).muted = false;
      setIsMute(false);
    }
  };

  const handleBackOrNextVideo = (type) => {
    if (type === "back") {
      setCurrentId((prev) => prev - 1);
    } else {
      setCurrentId((prev) => prev + 1);
    }
    nickname && ID && setIsClickChangeVideo(true);
  };

  useEffect(() => {
    const videoNext = allVideos.find((e) => e.id === currentId);
    setNextVideo(videoNext);
  }, [currentId]);

  useEffect(() => {
    if (valueSound === "0") {
      setIsMute(true);
    } else if (
      valueSound !== "0" &&
      document.getElementById(
        `video_music ${nextVideo?.video || data?.src || location.state.src}`
      )?.muted === false
    ) {
      setIsMute(false);
    }
  }, [valueSound]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container-video")}>
        <div className={cx("div-bg-video")}></div>
        <div className={cx("wr-video")}>
          <div className={cx("wr-video-2")}>
            <div
              className={cx("btn-x")}
              onClick={() => {
                navigate(handleBackExplore() ? "/explore" : "/foryou");
              }}
            >
              <CloseIcon />
            </div>
            <div
              className={cx("btn-x")}
              style={{
                marginLeft: 62,
                backgroundColor: "rgb(22, 24, 35)",
              }}
            >
              <FontAwesomeIcon
                style={{
                  width: 32,
                  height: 32,
                  color: "white",
                }}
                icon={faTiktok}
              />
            </div>
            {!isPlaying && (
              <div
                className={cx("btn-play")}
                onClick={() => {
                  navigate("/");
                }}
              >
                <FontAwesomeIcon
                  style={{
                    width: 68,
                    height: 68,
                    color: "white",
                  }}
                  icon={faPlay}
                />
              </div>
            )}

            {currentId > 1 && (
              <div
                className={cx("btn-up")}
                onClick={() => handleBackOrNextVideo("back")}
              >
                <ArrowUpIcon />
              </div>
            )}
            {currentId < allVideos.length && (
              <div
                className={cx("btn-down")}
                onClick={() => handleBackOrNextVideo("next")}
              >
                <ArrowDownIcon />
              </div>
            )}
            <HeadlessTippy
              interactive
              delay={[0, 50]}
              offset={[0, -70]}
              placement="top"
              render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                  <div className={cx("wr-range")}>
                    <input
                      className={cx("input-range")}
                      type="range"
                      min="0"
                      max="1"
                      step="any"
                      value={valueSound}
                      onChange={(event) =>
                        setValueSound(event.currentTarget.value)
                      }
                    />
                  </div>
                </div>
              )}
            >
              <div className={cx("btn-sound")}>
                <div className={cx("change-sound")}></div>
                <button className={cx("wr-btn-sound")} onClick={handleMute}>
                  {!isMute ? <SoundIcon /> : <MuteIcon />}
                </button>
              </div>
            </HeadlessTippy>
            {/* <Image
              className={cx("img-video")}
              mode="2"
              src={img}
              alt="Bắt beat hơi vụng.  DC? #thanhmeo18 "
              loading="lazy"
              class="tiktok-j6dmhd-ImgPoster e1yey0rl1"
            ></Image> */}
            <div className={cx("div-basic-player-wrapper")}>
              <div className={cx("div-top-video")}>
                <Video
                  className={cx("video")}
                  src={nextVideo?.video || data?.src || location.state.src}
                  setIsPlaying={setIsPlaying}
                  valueSound={valueSound}
                  isClickChangeVideo={isClickChangeVideo}
                  setIsClickChangeVideo={setIsClickChangeVideo}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("right-content")}>
        <div className={cx("top-right-content")}>
          <div className={cx("info-top")}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                objecFit: "cover",
              }}
              src={`../../${nextVideo?.avatar || data?.avt}`}
            />
            <div
              style={{
                position: "absolute",
                left: 88,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                {nextVideo?.nick_name || data?.nickname}
              </span>
              <span>{nextVideo?.full_name || data?.fullname} .1d ago</span>
            </div>
            <Button primary>Follow</Button>
          </div>
          <div className={cx("info-mid")}>
            <span style={{ display: "flex", flexWrap: "wrap" }}>
              {nextVideo?.content || data?.content}
              <h4>{nextVideo?.hag_tag || data?.hag_tag}</h4>
            </span>
            <span style={{ display: "flex", marginTop: 10 }}>
              <FontAwesomeIcon
                style={{ width: 13, height: 16, marginTop: 3, marginRight: 10 }}
                icon={faMusic}
              />
              <h4>{nextVideo?.music || data?.music}</h4>
            </span>

            <div className={cx("icons-and-link")}>
              <div className={cx("icons")}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    className={cx("bg-icon")}
                    onClick={() => setIslike(!isLike)}
                  >
                    <FontAwesomeIcon
                      style={{
                        width: 17,
                        height: 18,
                        color: isLike && "rgb(254, 44, 85)",
                      }}
                      icon={faHeart}
                    />
                  </div>
                  <p
                    style={{
                      color: "rgba(22, 24, 35, .75)",
                      fontSize: 12,
                      lineHeight: 17,
                      textAlign: "center",
                    }}
                  >
                    {nextVideo?.likes || data?.likes}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className={cx("bg-icon")} style={{ marginLeft: -90 }}>
                    <FontAwesomeIcon
                      style={{ width: 17, height: 18 }}
                      icon={faCommentDots}
                    />
                  </div>
                  <p
                    style={{
                      color: "rgba(22, 24, 35, .75)",
                      fontSize: 12,
                      lineHeight: 17,
                      textAlign: "center",
                    }}
                  >
                    {nextVideo?.comments || data?.comments}
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <Tippy delay={[0, 50]} content="Embed" placement="top">
                    <div>
                      <EmbedIcon className={cx("icon")} />
                    </div>
                  </Tippy>
                  <Tippy
                    delay={[0, 50]}
                    content="Send to friends"
                    placement="top"
                  >
                    <div>
                      <FriendIcon className={cx("icon")} />
                    </div>
                  </Tippy>
                  <Tippy
                    delay={[0, 50]}
                    content="Share to Facebook"
                    placement="top"
                  >
                    <div>
                      <FacebookIcon className={cx("icon")} />
                    </div>
                  </Tippy>
                  <Tippy
                    delay={[0, 50]}
                    content="Share to WhatsApps"
                    placement="top"
                  >
                    <div>
                      <WhatsAppIcon className={cx("icon")} />
                    </div>
                  </Tippy>
                  <Tippy
                    delay={[0, 50]}
                    content="Share to Twitter"
                    placement="top"
                  >
                    <div>
                      <TwitterIcon className={cx("icon")} />
                    </div>
                  </Tippy>
                  <div className={cx("icon-share")}>
                    <BtnShareMore isViewFull />
                  </div>
                </div>
              </div>
              <div className={cx("copy-link")}>
                <p className={cx("text-link")}>
                  https://www.tiktok.com/@thanhmeo.18/video/7222996279561932058?is_from_webapp=1&sender_device=pc&web_id=7220648179770050050
                </p>
                <button className={cx("btn-copy-link")}>
                  Sao chép liên kết
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("bottom-right-content")}>
          <Comments />
        </div>

        <div className={cx("input-right")}>
          <div className={cx("input")}>
            <input
              style={{ background: "none" }}
              placeholder="Add comment..."
            />
            <div style={{ display: "flex", marginRight: -10 }}>
              <TagIcon className={cx("icon-input")} />
              <FontAwesomeIcon
                className={cx("icon-input")}
                style={{ height: 20 }}
                icon={faFaceLaugh}
              />
            </div>
          </div>
          <div className={cx("btn-post")}>
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoInfo;
