import images from "../../../../assets/images";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../Button";
import Menu from "../../../Poper/Menu";
import { InboxIcon, MessageIcon, UploadIcon } from "../../../Icons";
import Image from "../../../Images";
import Search from "../Search";

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
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const handleMenuChange = (item) => {
    switch (item.type) {
      case "language":
        // TODO:
        break;
      default:
    }
  };

  //mock currentUser
  const currentUser = true;

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View Profile",
      to: "/",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={"/"} className={cx("logo-link")}>
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
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx("actions-btn")}>
                  <InboxIcon />
                  <span className={cx("badge")}>23</span>
                </button>
              </Tippy>
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
                src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/280502370_1661059197603112_5055712193208809162_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3DCmgb_NmZsAX_suDms&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBNqiOpUiSTaQzFA2YkfK4Io_SnQXHds1Llzm1dmn_3Hw&oe=643A0D58"
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
