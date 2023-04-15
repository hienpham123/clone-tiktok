import { useEffect, useState } from "react";
import styles from "./Information.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button";
import Image from "../../../components/Images";
import BtnShareMore from "./BtnShareMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { LinkIcon } from "../../../components/Icons";
import { useParams } from "react-router-dom";
import { LIST_ACCOUNT } from "../../../mockdata";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Information() {
  const { nickname } = useParams();
  const isMyProfile = nickname === "@hien_ho_102";
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = LIST_ACCOUNT.filter(
      (item) => item.nickname === nickname.substring(1)
    );
    setData(data[0]);
  }, [nickname]);

  return (
    <div className={cx("wrapper")}>
      <div>
        <div className={cx("top-content")}>
          <Image className={cx("avatar")} src={data.avatar} alt="" />
          <div className={cx("info")}>
            <p className={cx("nick-name")}>
              <strong>{data.nickname}</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>{data.full_name}</p>
            {!isMyProfile ? (
              <Button className={cx("btn-follow")} primary>
                Follow
              </Button>
            ) : (
              <Button
                className={cx("btn-edit-profile")}
                outline
                leftIcon={<FontAwesomeIcon icon={faPenToSquare} />}
              >
                Edit profile
              </Button>
            )}
          </div>
        </div>
        <div className={cx("detail")}>
          <p className={cx("text-detail")}>
            <strong>{data.following}</strong> Following
          </p>
          <p className={cx("text-detail")}>
            <strong>{data.followers}</strong> Followers
          </p>
          <p className={cx("text-detail")}>
            <strong>{data.likes}</strong> Likes
          </p>
        </div>
        <div className={cx("container-info")}>
          <p className={cx("text-info")}>{data.information_1}</p>
          <p className={cx("text-info")}>{data.information_2}</p>
          <p className={cx("text-info")}>{data.information_3}</p>
          <p>{data.information_4}</p>
          <span style={{ display: "flex" }}>
            {data.link && <LinkIcon className={cx("icon")} />}
            <p className={cx("text-link")}>{data.link}</p>
          </span>
        </div>
      </div>
      <BtnShareMore />
    </div>
  );
}

export default Information;
