import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PopupInbox.module.scss";
import classNames from "classnames/bind";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import Image from "../Images/Image";
import Button from "../Button/Button";
import { useState } from "react";

const btn = [
  "All activity",
  "Likes",
  "Comments",
  "Mentions and tags",
  "Followers",
];

const cx = classNames.bind(styles);
function PopupInbox() {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("modal_content")}>
        <div className={cx("top")}>
          <h2 className={cx("text-title")}>Notifications</h2>
          <div className={cx("container-btn")}>
            {btn.map((item, index) => {
              return (
                <div
                  className={cx("btn-title")}
                  style={{
                    marginRight: item === "All activity" && 10,
                    background: index === indexActive && "rgb(22, 24, 35)",
                    color: index === indexActive && "rgb(255, 255, 255)",
                  }}
                  key={index}
                  onClick={() => setIndexActive(index)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        {indexActive === 0 && (
          <div className={cx("bottom")}>
            <div className={cx("title-bottom")}>This month</div>

            <div style={{ display: "flex", marginTop: 8 }}>
              <div className={cx("bg-icon")}>
                <FontAwesomeIcon style={{ color: "white" }} icon={faMessage} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                }}
              >
                <span style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                  System Notifications
                </span>
                <span className={cx("text-noti")}>
                  Account Updated : Tài khoản của bạn đã được đăng nhập từ thiết
                  bị iphone 11 pro max
                </span>
              </div>
            </div>

            <div className={cx("title-bottom")}>Previous</div>

            {/* dong1 */}
            <div
              style={{
                display: "flex",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Image
                className={cx("avatar")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8cf6f09dda54783f53bdcccad0fd9e8c~c5_100x100.jpeg?x-expires=1681650000&x-signature=9YuX3V74PTGsXqAx24egDJmaGtI%3D"
                }
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: -60,
                }}
              >
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                >
                  hien_ho_102
                </span>
                <span className={cx("text-noti")}>Flolows you. 3-2</span>
              </div>
              <Button className={cx("btn-fl-back")} primary>
                Follow back
              </Button>
            </div>

            {/* dong2 */}
            <div
              style={{
                display: "flex",
                marginTop: 18,
                justifyContent: "space-between",
              }}
            >
              <Image
                className={cx("avatar")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/59ca64765bf927078770062798ba507e~c5_100x100.jpeg?x-expires=1681732800&x-signature=OYkSZFH2E848bd0bClpWpfWlJsE%3D"
                }
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                >
                  khongduocbeo
                </span>
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      marginRight: 5,
                    }}
                  >
                    replied to your comment: ko
                  </span>
                  <span className={cx("text-noti")}>2 - 28</span>
                </div>
                <span className={cx("text-noti")}>
                  khongduocbeo : cko mk lw
                </span>
              </div>

              <Image
                className={cx("image")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/oQhVtBI9Dv59lczWBQtcfNAPCgE7yHTKDufj0C?x-expires=1681588800&x-signature=BI%2Bu250F93XwXnrHpkePUtXYCP4%3D"
                }
              />
            </div>

            {/* dong 3 */}
            <div
              style={{
                display: "flex",
                marginTop: 18,
                justifyContent: "space-between",
              }}
            >
              <Image
                className={cx("avatar")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/59ca64765bf927078770062798ba507e~c5_100x100.jpeg?x-expires=1681732800&x-signature=OYkSZFH2E848bd0bClpWpfWlJsE%3D"
                }
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                >
                  khongduocbeo
                </span>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    marginRight: 5,
                  }}
                >
                  replied to your comment: ckao b tu
                </span>
                <span className={cx("text-noti")}>2 - 28</span>
                <span className={cx("text-noti")}>khongduocbeo : ckao b</span>
              </div>

              <Image
                className={cx("image")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/oQhVtBI9Dv59lczWBQtcfNAPCgE7yHTKDufj0C?x-expires=1681588800&x-signature=BI%2Bu250F93XwXnrHpkePUtXYCP4%3D"
                }
              />
            </div>

            {/* /////////////////////////// */}

            <div
              style={{
                display: "flex",
                marginTop: 18,
                justifyContent: "space-between",
              }}
            >
              <Image
                className={cx("avatar")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/59ca64765bf927078770062798ba507e~c5_100x100.jpeg?x-expires=1681732800&x-signature=OYkSZFH2E848bd0bClpWpfWlJsE%3D"
                }
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                >
                  khongduocbeo
                </span>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    marginRight: 5,
                  }}
                >
                  replied to your comment: ckao b tu
                </span>
                <span className={cx("text-noti")}>2 - 28</span>
                <span className={cx("text-noti")}>khongduocbeo : ckao b</span>
              </div>

              <Image
                className={cx("image")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/oQhVtBI9Dv59lczWBQtcfNAPCgE7yHTKDufj0C?x-expires=1681588800&x-signature=BI%2Bu250F93XwXnrHpkePUtXYCP4%3D"
                }
              />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 18,
                justifyContent: "space-between",
              }}
            >
              <Image
                className={cx("avatar")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/59ca64765bf927078770062798ba507e~c5_100x100.jpeg?x-expires=1681732800&x-signature=OYkSZFH2E848bd0bClpWpfWlJsE%3D"
                }
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                >
                  khongduocbeo
                </span>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    marginRight: 5,
                  }}
                >
                  replied to your comment: ckao b tu
                </span>
                <span className={cx("text-noti")}>2 - 28</span>
                <span className={cx("text-noti")}>khongduocbeo : ckao b</span>
              </div>

              <Image
                className={cx("image")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/oQhVtBI9Dv59lczWBQtcfNAPCgE7yHTKDufj0C?x-expires=1681588800&x-signature=BI%2Bu250F93XwXnrHpkePUtXYCP4%3D"
                }
              />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 18,
                justifyContent: "space-between",
              }}
            >
              <Image
                className={cx("avatar")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/59ca64765bf927078770062798ba507e~c5_100x100.jpeg?x-expires=1681732800&x-signature=OYkSZFH2E848bd0bClpWpfWlJsE%3D"
                }
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                >
                  khongduocbeo
                </span>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    marginRight: 5,
                  }}
                >
                  replied to your comment: ckao b tu
                </span>
                <span className={cx("text-noti")}>2 - 28</span>
                <span className={cx("text-noti")}>khongduocbeo : ckao b</span>
              </div>

              <Image
                className={cx("image")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/oQhVtBI9Dv59lczWBQtcfNAPCgE7yHTKDufj0C?x-expires=1681588800&x-signature=BI%2Bu250F93XwXnrHpkePUtXYCP4%3D"
                }
              />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 18,
                justifyContent: "space-between",
              }}
            >
              <Image
                className={cx("avatar")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/59ca64765bf927078770062798ba507e~c5_100x100.jpeg?x-expires=1681732800&x-signature=OYkSZFH2E848bd0bClpWpfWlJsE%3D"
                }
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                >
                  khongduocbeo
                </span>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    marginRight: 5,
                  }}
                >
                  replied to your comment: ckao b tu
                </span>
                <span className={cx("text-noti")}>2 - 28</span>
                <span className={cx("text-noti")}>khongduocbeo : ckao b</span>
              </div>

              <Image
                className={cx("image")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/oQhVtBI9Dv59lczWBQtcfNAPCgE7yHTKDufj0C?x-expires=1681588800&x-signature=BI%2Bu250F93XwXnrHpkePUtXYCP4%3D"
                }
              />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 18,
                justifyContent: "space-between",
              }}
            >
              <Image
                className={cx("avatar")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/59ca64765bf927078770062798ba507e~c5_100x100.jpeg?x-expires=1681732800&x-signature=OYkSZFH2E848bd0bClpWpfWlJsE%3D"
                }
              />

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                  }}
                >
                  khongduocbeo
                </span>
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    marginRight: 5,
                  }}
                >
                  replied to your comment: ckao b tu
                </span>
                <span className={cx("text-noti")}>2 - 28</span>
                <span className={cx("text-noti")}>khongduocbeo : ckao b</span>
              </div>

              <Image
                className={cx("image")}
                src={
                  "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/oQhVtBI9Dv59lczWBQtcfNAPCgE7yHTKDufj0C?x-expires=1681588800&x-signature=BI%2Bu250F93XwXnrHpkePUtXYCP4%3D"
                }
              />
            </div>

            {/* ////////////////////////////// */}
          </div>
        )}
      </div>
    </div>
  );
}

export default PopupInbox;
