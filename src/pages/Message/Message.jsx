import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Message.module.scss";
import classNames from "classnames/bind";
import {
  faArrowLeft,
  faGear,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Image from "../../components/Images/Image";
import { faFaceLaugh } from "@fortawesome/free-regular-svg-icons";
import Video from "../../components/Video/Video";
import { useNavigate } from "react-router-dom";
import MoreBtn from "./BtnMore/MoreIcon";
import Popup from "./Popup/Popup";
import { useState } from "react";

const cx = classNames.bind(styles);

const me =
  "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a44506aeeace3738adce0032bce0ef45~c5_720x720.jpeg?x-expires=1681804800&x-signature=NjjzcCQnBi1tEopwd1NNwkY9P3Q%3D";
const you =
  "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/59ca64765bf927078770062798ba507e~c5_100x100.jpeg?x-expires=1681732800&x-signature=OYkSZFH2E848bd0bClpWpfWlJsE%3D";
function Message() {
  const navigate = useNavigate();
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };
  const handleClose = () => {
    setIsOpenPopup(false);
  };

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("btn-back")} onClick={handleBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className={cx("left-box")}>
        <div className={cx("top-left-box")}>
          <div className={cx("title-left-box")}>Messages</div>
          <div>
            <FontAwesomeIcon
              onClick={handleOpenPopup}
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
              icon={faGear}
            />
          </div>
        </div>
        <div className={cx("bottom-left-box")}>
          <Image
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              objectFit: "cover",
            }}
            src={you}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className={cx("text-title")}>đỗ hanutest thì đổi tên</span>
            <span className={cx("text-content")}>
              You shared a video 4/12/2023
            </span>
          </div>
          <MoreBtn />
        </div>
      </div>
      <div className={cx("right-box")}>
        <div className={cx("top-right-box")}>
          <div style={{ display: "flex " }}>
            <Image
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                objectFit: "cover",
              }}
              src={you}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 13,
              }}
            >
              <span className={cx("text-title")} style={{ fontSize: 18 }}>
                đỗ hanutest thì đổi tên
              </span>
              <span style={{ fontSize: 16, color: "rgba(22, 24, 35, 1)" }}>
                @ khongduocbeo
              </span>
            </div>
          </div>
        </div>

        <div className={cx("main-right-box")}>
          <span className={cx("date-main-right")}>April 12, 2023 13:25</span>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              paddingRight: 20,
            }}
          >
            <Image
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: 10,
              }}
              src={me}
            />
            <div
              className={cx("box-chat")}
              style={{ background: "rgba(22, 24, 35, 0.06)" }}
            >
              Chao` nka
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              paddingRight: 70,
              marginTop: 5,
            }}
          >
            <Image
              style={{
                width: 17,
                height: 17,
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: 10,
              }}
              src={me}
            />
            <FontAwesomeIcon
              style={{ color: "rgb(254, 44, 85)" }}
              icon={faHeart}
            />
          </div>

          <div style={{ display: "flex" }}>
            <Image
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: 10,
              }}
              src={you}
            />
            <div className={cx("box-chat")}> ? </div>
          </div>

          <div style={{ display: "flex", marginTop: 15 }}>
            <Image
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: 10,
              }}
              src={you}
            />
            <div className={cx("box-chat")}> chào cục cứt </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginTop: 15,
              paddingRight: 20,
            }}
          >
            <Image
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: 10,
              }}
              src={me}
            />
            <div
              className={cx("box-chat")}
              style={{ background: "rgba(22, 24, 35, 0.06)" }}
            >
              á à
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginTop: 15,
              paddingRight: 20,
            }}
          >
            <Image
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: 10,
              }}
              src={me}
            />
            <div
              className={cx("box-chat")}
              style={{ background: "rgba(22, 24, 35, 0.06)" }}
            >
              cứt đâu
            </div>
          </div>

          <div style={{ display: "flex", marginTop: 15 }}>
            <Image
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: 10,
              }}
              src={you}
            />
            <div style={{ marginLeft: 10 }}>
              <Video
                style={{ width: 180, height: 320, borderRadius: 10 }}
                src="../../../public/videos/phuongnhi.mp4"
              />
            </div>
          </div>

          <span className={cx("date-main-right")}>April 12, 2023 18:36</span>

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              paddingRight: 20,
              marginTop: 15,
            }}
          >
            <Image
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: 10,
              }}
              src={me}
            />
            <div
              className={cx("box-chat")}
              style={{ background: "rgba(22, 24, 35, 0.06)" }}
            >
              Chơi ik
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              paddingRight: 20,
              marginTop: 15,
            }}
          >
            <Image
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: 10,
              }}
              src={me}
            />
            <div
              className={cx("box-chat")}
              style={{ background: "rgba(22, 24, 35, 0.06)" }}
            >
              Nta 2k5 đã z ui
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              paddingRight: 20,
              marginTop: 15,
            }}
          >
            <Image
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: 10,
              }}
              src={me}
            />
            <div
              className={cx("box-chat")}
              style={{ background: "rgba(22, 24, 35, 0.06)" }}
            >
              Mk thì 2k1…
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              paddingRight: 20,
              marginTop: 15,
            }}
          >
            <Image
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                objectFit: "cover",
                marginLeft: 10,
              }}
              src={me}
            />
            <div
              className={cx("box-chat")}
              style={{ background: "rgba(22, 24, 35, 0.06)" }}
            >
              Haizzz
            </div>
          </div>
        </div>

        <div className={cx("input-right")}>
          <div className={cx("input")}>
            <input
              style={{ background: "none" }}
              placeholder="Send a message..."
            />
            <FontAwesomeIcon icon={faFaceLaugh} />
          </div>
        </div>
      </div>

      {isOpenPopup && <Popup handleClose={handleClose} />}
    </div>
  );
}

export default Message;
