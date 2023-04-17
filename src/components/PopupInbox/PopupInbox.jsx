import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./PopupInbox.module.scss";
import classNames from "classnames/bind";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import Image from "../Images/Image";
import Button from "../Button/Button";
import { useState } from "react";
import { MentionsAndTagIcon } from "../Icons";
import Loading from "../Loading/Loading";

const cx = classNames.bind(styles);

const btn = [
  "All activity",
  "Likes",
  "Comments",
  "Mentions and tags",
  "Followers",
];

const noti_comment = [
  {
    id: 1,
    type: "comment",
    avatar:
      "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/59ca64765bf927078770062798ba507e~c5_100x100.jpeg?x-expires=1681732800&x-signature=OYkSZFH2E848bd0bClpWpfWlJsE%3D",
    nickname: "khongduocbeo",
    action: "replied to your comment: ko",
    date: "2 - 28",
    commented: "khongduocbeo : cko mk lw",
    image:
      "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/oQhVtBI9Dv59lczWBQtcfNAPCgE7yHTKDufj0C?x-expires=1681725600&x-signature=kqctF7gdyvqbxzoGPgFNVe2GfrM%3D",
  },
  {
    id: 2,
    type: "comment",
    avatar:
      "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/59ca64765bf927078770062798ba507e~c5_100x100.jpeg?x-expires=1681732800&x-signature=OYkSZFH2E848bd0bClpWpfWlJsE%3D",
    nickname: "khongduocbeo",
    action: "replied to your comment: ckao b tu",
    date: "2 - 28",
    commented: "khongduocbeo : ckao b",
    image:
      "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/oQhVtBI9Dv59lczWBQtcfNAPCgE7yHTKDufj0C?x-expires=1681725600&x-signature=kqctF7gdyvqbxzoGPgFNVe2GfrM%3D",
  },
  {
    id: 3,
    type: "comment",
    avatar:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ba344ed4d8ac73f03b9390eb952ba2fa~c5_100x100.jpeg?x-expires=1681790400&x-signature=vdY2A1Juy6pHFBq07x%2BVfWmlmWw%3D",
    nickname: "maydei.3010",
    action: "replied to your comment: Hônggg ạ 🫣",
    date: "2022-10-5",
    commented: "maydei.3010: 1m73🥰",
    image:
      "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/a7856d2ee34e420cbca99c15491c3c26_1664897413?x-expires=1681725600&x-signature=V4Ng6KuueNlM7sAQCTTuL0sM4w0%3D",
  },
  {
    id: 4,
    type: "comment",
    avatar:
      "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8dbe12245b3b5715a83a7ca0ca05a8fc~c5_100x100.jpeg?x-expires=1681790400&x-signature=MN4cdVNFFkYMXUPFV0n3nouiSpw%3D",
    nickname: "chudangchan",
    action: "replied to your comment: Hâhhaa hên thuii",
    date: "2021-6-22",
    commented: "chudangchan: Lên xu thế lunnn",
    image:
      "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/c1fd5d4689ec4f60ab32604d57564d01?x-expires=1681725600&x-signature=Xxzd5jnDNn1jJR2dGZi1n6C%2BYIo%3D",
  },
  {
    id: 5,
    type: "like",
    avatar:
      "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ba344ed4d8ac73f03b9390eb952ba2fa~c5_100x100.jpeg?x-expires=1681790400&x-signature=vdY2A1Juy6pHFBq07x%2BVfWmlmWw%3D",
    nickname: "maydei.3010",
    action: " liked your comment.",
    date: "2022-10-25",
    commented: "hienho102 : Dep qua",
    image:
      "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/7e70cf7206a944639c9fbb0edd94bb94_1667365986?x-expires=1681725600&x-signature=Prv8BvY9%2BRqbQBQTCWRnSu%2FO3Uc%3D",
  },
  {
    id: 6,
    type: "like",
    avatar:
      "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fa10cfffa75eea380d2557770bddad88~c5_100x100.jpeg?x-expires=1681790400&x-signature=v1eyliUa%2BaivpBa0J%2BW7FxkCRzg%3D",
    nickname: "jessejp92",
    action: " liked your comment.",
    date: "2021-8-7",
    commented: "hienho102 : Idol 1 thời của emmm",
    image:
      "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/f76e86cb4d974268a2672376a7dc4051?x-expires=1681725600&x-signature=MM40nf6Y9dlnoKI%2BCZ3%2B9%2FLIb94%3D",
  },
  {
    id: 7,
    type: "follow",
    avatar:
      "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8cf6f09dda54783f53bdcccad0fd9e8c~c5_100x100.jpeg?x-expires=1681790400&x-signature=HeyJLc7cord8XVItM6RJLztJ7GI%3D",
    nickname: "hien_ho_102",
    action: "",
    date: "",
    commented: "Flolows you. 3-2",
    image:
      "https://p16-sign-va.tiktokcdn.com/obj/tos-useast2a-p-0037-aiso/f76e86cb4d974268a2672376a7dc4051?x-expires=1681642800&x-signature=tBv5RkRZRiTcj%2FWse1c1Qg1i9Mc%3D",
    button: (
      <Button className={cx("btn-fl-back")} primary>
        Follow back
      </Button>
    ),
  },
];

function PopupInbox() {
  const [indexActive, setIndexActive] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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
                  onClick={() => {
                    setIndexActive(index);
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 1000);
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>

        {isLoading ? (
          <div style={{ marginLeft: "38%" }}>
            <Loading />
          </div>
        ) : (
          <div>
            {indexActive === 0 && (
              <div className={cx("bottom")}>
                <div className={cx("title-bottom")}>This month</div>

                <div className={cx("bg-noti")}>
                  <div className={cx("bg-icon")}>
                    <FontAwesomeIcon
                      style={{ color: "white" }}
                      icon={faMessage}
                    />
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
                      Account Updated : Tài khoản của bạn đã được đăng nhập từ
                      thiết bị iphone 11 pro max
                    </span>
                  </div>
                </div>

                <div className={cx("title-bottom")}>Previous</div>

                {noti_comment.map((item, index) => {
                  return (
                    item.type === "follow" && (
                      <div key={index} className={cx("bg-content-btn")}>
                        <Image className={cx("avatar")} src={item.avatar} />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: -73,
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.4rem",
                              fontWeight: 700,
                            }}
                          >
                            {item.nickname}
                          </span>
                          <span className={cx("text-noti")}>
                            {item.commented}
                          </span>
                        </div>
                        {item.button}
                      </div>
                    )
                  );
                })}

                {noti_comment.map((item, index) => {
                  return (
                    item.type !== "follow" && (
                      <div key={index} className={cx("bg-contents")}>
                        <Image className={cx("avatar")} src={item.avatar} />

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: -10,
                            width: 215,
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.4rem",
                              fontWeight: 700,
                            }}
                          >
                            {item.nickname}
                          </span>
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                display: "flex",
                                fontSize: "1.4rem",
                                fontWeight: 500,
                                marginRight: 5,
                              }}
                            >
                              {item.action}
                              <span className={cx("text-noti")}>
                                {item.date}
                              </span>
                            </span>
                            <span className={cx("text-noti")}>
                              {item.commented}
                            </span>
                          </div>
                        </div>

                        <Image className={cx("image")} src={item.image} />
                      </div>
                    )
                  );
                })}
              </div>
            )}

            {indexActive === 1 && (
              <div className={cx("bottom")}>
                <div className={cx("title-bottom")}>Previous</div>
                {noti_comment.map((item, index) => {
                  return (
                    item.type === "like" && (
                      <>
                        <div key={index} className={cx("bg-contents")}>
                          <Image className={cx("avatar")} src={item.avatar} />

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              marginLeft: -10,
                              width: 215,
                            }}
                          >
                            <span
                              style={{
                                fontSize: "1.4rem",
                                fontWeight: 700,
                              }}
                            >
                              {item.nickname}
                            </span>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  fontSize: "1.4rem",
                                  fontWeight: 500,
                                  marginRight: 5,
                                }}
                              >
                                {item.action}
                                <span className={cx("text-noti")}>
                                  {item.date}
                                </span>
                              </span>
                              <span className={cx("text-noti")}>
                                {item.commented}
                              </span>
                            </div>
                          </div>

                          <Image className={cx("image")} src={item.image} />
                        </div>
                      </>
                    )
                  );
                })}
              </div>
            )}

            {indexActive === 2 && (
              <div className={cx("bottom")}>
                <div className={cx("title-bottom")}>Previous</div>
                {noti_comment.map((item, index) => {
                  return (
                    item.type === "comment" && (
                      <div key={index} className={cx("bg-contents")}>
                        <Image className={cx("avatar")} src={item.avatar} />

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: -10,
                            width: 215,
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.4rem",
                              fontWeight: 700,
                            }}
                          >
                            {item.nickname}
                          </span>
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                display: "flex",
                                fontSize: "1.4rem",
                                fontWeight: 500,
                                marginRight: 5,
                              }}
                            >
                              {item.action}
                              <span className={cx("text-noti")}>
                                {item.date}
                              </span>
                            </span>
                            <span className={cx("text-noti")}>
                              {item.commented}
                            </span>
                          </div>
                        </div>

                        <Image className={cx("image")} src={item.image} />
                      </div>
                    )
                  );
                })}
              </div>
            )}

            {indexActive === 3 && (
              <div className={cx("bg-mention")}>
                <MentionsAndTagIcon />
                <div className={cx("text-mention-1")}>Mentions of You</div>
                <div className={cx("text-mention-2")}>
                  When someone mentions you, you'll see it here
                </div>
              </div>
            )}

            {indexActive === 4 && (
              <div>
                <div className={cx("title-bottom")}>Previous</div>
                {noti_comment.map((item, index) => {
                  return (
                    item.type === "follow" && (
                      <div key={index} className={cx("bg-content-btn")}>
                        <Image className={cx("avatar")} src={item.avatar} />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: -73,
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.4rem",
                              fontWeight: 700,
                            }}
                          >
                            {item.nickname}
                          </span>
                          <span className={cx("text-noti")}>
                            {item.commented}
                          </span>
                        </div>
                        {item.button}
                      </div>
                    )
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PopupInbox;
