import classNames from "classnames/bind";
import styles from "./VideoInfo.module.scss";
import Image from "../../components/Images/Image";
import { MoreIcon } from "../../components/Icons/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function Comments() {
  const [isViewMore, setIsViewMore] = useState(false);
  return (
    <div className={cx("main-contents")}>
      <div className={cx("ct-container")}>
        <div style={{ display: "flex" }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: 14,
            }}
            src={"../../../public/images/thanhmeo.jpeg"}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className={cx("ct-name")}>Thanh Mèo</span>
            <span className={cx("ct-comment")}> Xing wa !</span>
            <span style={{ display: "flex" }}>
              <span className={cx("ct-text-reply")} style={{ marginRight: 25 }}>
                11h ago
              </span>
              <span className={cx("ct-text-reply")}>Reply</span>
            </span>

            {isViewMore ? (
              <div>
                <div style={{ display: "flex", marginTop: 15 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginRight: 14,
                    }}
                    src={"../../../public/images/thanhmeo.jpeg"}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className={cx("ct-name")}>Thanh Mèo</span>
                    <span className={cx("ct-comment")}> Xing wa !</span>
                    <span style={{ display: "flex" }}>
                      <span
                        className={cx("ct-text-reply")}
                        style={{ marginRight: 25 }}
                      >
                        11h ago
                      </span>
                      <span className={cx("ct-text-reply")}>Reply</span>
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", marginTop: 15 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginRight: 14,
                    }}
                    src={"../../../public/images/thanhmeo.jpeg"}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className={cx("ct-name")}>Thanh Mèo</span>
                    <span className={cx("ct-comment")}> Xing wa !</span>
                    <span style={{ display: "flex" }}>
                      <span
                        className={cx("ct-text-reply")}
                        style={{ marginRight: 25 }}
                      >
                        11h ago
                      </span>
                      <span className={cx("ct-text-reply")}>Reply</span>
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", marginTop: 15 }}>
                  <Image
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginRight: 14,
                    }}
                    src={"../../../public/images/thanhmeo.jpeg"}
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className={cx("ct-name")}>Thanh Mèo</span>
                    <span className={cx("ct-comment")}> Xing wa !</span>
                    <span style={{ display: "flex" }}>
                      <span
                        className={cx("ct-text-reply")}
                        style={{ marginRight: 25 }}
                      >
                        11h ago
                      </span>
                      <span className={cx("ct-text-reply")}>Reply</span>
                    </span>
                  </div>
                </div>
                <span
                  className={cx("view-more-reply")}
                  onClick={() => setIsViewMore(false)}
                >
                  View less replies
                </span>
              </div>
            ) : (
              <span
                className={cx("view-more-reply")}
                onClick={() => setIsViewMore(true)}
              >
                View more replies (4)
              </span>
            )}
          </div>
        </div>

        <div className={cx("ct-action")}>
          <div className={cx("bg-more-icon")}>
            <MoreIcon className={cx("more-icon")} />
          </div>
          <FontAwesomeIcon
            style={{
              marginBottom: 5,
              marginTop: -5,
            }}
            icon={faHeart}
          />
          <p className={cx("ct-text-reply")}>583</p>
        </div>
      </div>

      <div className={cx("ct-container")}>
        <div style={{ display: "flex" }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: 14,
            }}
            src={
              "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/33fd8341eec3c69dc34972b27738b860~c5_100x100.jpeg?x-expires=1681963200&x-signature=9f4jmxAE2ckaWdaK0DKIdI02IBM%3D"
            }
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className={cx("ct-name")}>Thanh Mèo</span>
            <span className={cx("ct-comment")}> Xing wa !</span>
            <span style={{ display: "flex" }}>
              <span className={cx("ct-text-reply")} style={{ marginRight: 25 }}>
                11h ago
              </span>
              <span className={cx("ct-text-reply")}>Reply</span>
            </span>
            <span className={cx("view-more-reply")}>View more replies (4)</span>
          </div>
        </div>

        <div className={cx("ct-action")}>
          <div className={cx("bg-more-icon")}>
            <MoreIcon className={cx("more-icon")} />
          </div>
          <FontAwesomeIcon
            style={{ marginBottom: 5, marginTop: -5 }}
            icon={faHeart}
          />
          <p className={cx("ct-text-reply")}>583</p>
        </div>
      </div>

      <div className={cx("ct-container")}>
        <div style={{ display: "flex" }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: 14,
            }}
            src={
              "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/33fd8341eec3c69dc34972b27738b860~c5_100x100.jpeg?x-expires=1681963200&x-signature=9f4jmxAE2ckaWdaK0DKIdI02IBM%3D"
            }
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className={cx("ct-name")}>Thanh Mèo</span>
            <span className={cx("ct-comment")}> Xing wa !</span>
            <span style={{ display: "flex" }}>
              <span className={cx("ct-text-reply")} style={{ marginRight: 25 }}>
                11h ago
              </span>
              <span className={cx("ct-text-reply")}>Reply</span>
            </span>
            <span className={cx("view-more-reply")}>View more replies (4)</span>
          </div>
        </div>

        <div className={cx("ct-action")}>
          <div className={cx("bg-more-icon")}>
            <MoreIcon className={cx("more-icon")} />
          </div>
          <FontAwesomeIcon
            style={{ marginBottom: 5, marginTop: -5 }}
            icon={faHeart}
          />
          <p className={cx("ct-text-reply")}>583</p>
        </div>
      </div>

      <div className={cx("ct-container")}>
        <div style={{ display: "flex" }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: 14,
            }}
            src={
              "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/33fd8341eec3c69dc34972b27738b860~c5_100x100.jpeg?x-expires=1681963200&x-signature=9f4jmxAE2ckaWdaK0DKIdI02IBM%3D"
            }
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className={cx("ct-name")}>Thanh Mèo</span>
            <span className={cx("ct-comment")}> Xing wa !</span>
            <span style={{ display: "flex" }}>
              <span className={cx("ct-text-reply")} style={{ marginRight: 25 }}>
                11h ago
              </span>
              <span className={cx("ct-text-reply")}>Reply</span>
            </span>
            <span className={cx("view-more-reply")}>View more replies (4)</span>
          </div>
        </div>

        <div className={cx("ct-action")}>
          <div className={cx("bg-more-icon")}>
            <MoreIcon className={cx("more-icon")} />
          </div>
          <FontAwesomeIcon
            style={{ marginBottom: 5, marginTop: -5 }}
            icon={faHeart}
          />
          <p className={cx("ct-text-reply")}>583</p>
        </div>
      </div>

      <div className={cx("ct-container")}>
        <div style={{ display: "flex" }}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: 14,
            }}
            src={
              "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/33fd8341eec3c69dc34972b27738b860~c5_100x100.jpeg?x-expires=1681963200&x-signature=9f4jmxAE2ckaWdaK0DKIdI02IBM%3D"
            }
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className={cx("ct-name")}>Thanh Mèo</span>
            <span className={cx("ct-comment")}> Xing wa !</span>
            <span style={{ display: "flex" }}>
              <span className={cx("ct-text-reply")} style={{ marginRight: 25 }}>
                11h ago
              </span>
              <span className={cx("ct-text-reply")}>Reply</span>
            </span>
            <span className={cx("view-more-reply")}>View more replies (4)</span>
          </div>
        </div>

        <div className={cx("ct-action")}>
          <div className={cx("bg-more-icon")}>
            <MoreIcon className={cx("more-icon")} />
          </div>
          <FontAwesomeIcon
            style={{ marginBottom: 5, marginTop: -5 }}
            icon={faHeart}
          />
          <p className={cx("ct-text-reply")}>583</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
