import images from "../../../../assets/images";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../Button";
import Menu from "../../../Poper/Menu/Menu";
import {
  InboxBlackIcon,
  InboxIcon,
  MessageIcon,
  UploadIcon,
} from "../../../Icons";
import Image from "../../../Images";
import Search from "../Search/Search";
import config from "../../../../config";
import SwitchButton from "../../../SwitchButton/SwitchButton";
import PopupInbox from "../../../PopupInbox/PopupInbox";
import { useState } from "react";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and Help",
    // to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const { t, i18n, ready } = useTranslation();
  const { nickname } = useParams();
  const navigate = useNavigate();
  const [click, setClick] = useState(true);

  const handleMenuChange = (item) => {
    switch (item.type) {
      case "language":
        // TODO:
        changeLanguage(item.code);
        break;

      case "myProfile":
        navigate("/@hien_ho_102");
        break;
      default:
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  //mock currentUser
  const currentUser = true;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View Profile",
      type: "myProfile",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faMoon} />,
      iconRight: <SwitchButton />,
      title: "Dark Mode",
    },
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      {/* <PopupInbox /> */}
      <div className={cx("inner")}>
        <Link
          to={config.routes.home}
          className={cx("logo-link")}
          style={nickname && { marginLeft: -80, marginRight: 80 }}
        >
          <Image src={images.logo} alt="logo" />
        </Link>
        <Search />
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx("actions-btn")}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx("actions-btn")}>
                  <MessageIcon />
                </button>
              </Tippy>
              {click ? (
                <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                  <button
                    className={cx("actions-btn")}
                    onClick={() => {
                      setTimeout(() => {
                        setClick(false);
                      }, 300);
                    }}
                  >
                    <InboxIcon />
                    <span className={cx("badge")}>23</span>
                  </button>
                </Tippy>
              ) : (
                <HeadlessTippy
                  visible
                  interactive
                  delay={[0, 50]}
                  offset={[180, 0]}
                  content="Inbox"
                  placement="bottom"
                  render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                      <PopupInbox />
                    </div>
                  )}
                >
                  <button
                    className={cx("actions-btn")}
                    onClick={() => setClick(true)}
                  >
                    <InboxBlackIcon />
                    <span className={cx("badge")}>23</span>
                  </button>
                </HeadlessTippy>
              )}
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8cf6f09dda54783f53bdcccad0fd9e8c~c5_100x100.jpeg?x-expires=1681452000&x-signature=nK6eFprJGfqN9HNkOkOFILpmyT4%3D"
                alt=""
                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4b4722d941112ab256d01a243bd56445~c5_100x100.jpeg?x-expires=1681380000&x-signature=bQMWUyRbovN6%2Bzx29dodLPdQ3eY%3D"
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
