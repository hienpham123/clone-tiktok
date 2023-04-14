import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CopyLinkIcon,
  EmailIcon,
  EmbedIcon,
  FacebookIcon,
  LikeEdinIcon,
  LineIcon,
  MessageIcon,
  PinterestIcon,
  RedditIcon,
  ReportIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "../../../components/Icons";
import { faBan, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const LIST_ACTION_BTN_SHARE_MORE = [
  {
    title: "Send message",
    icon: <MessageIcon height={"1.6rem"} width={"1.6rem"} />,
    // to: "/",
  },
  {
    title: "Report",
    icon: <ReportIcon />,
    // to: "/",
    separate: true,
  },
  {
    title: "Block",
    icon: <FontAwesomeIcon icon={faBan} />,
    // to: "/",
    separate: true,
  },
];

export const LIST_ACTION_BTN_SHARE_COLLAPSE = [
  {
    title: "Embed",
    icon: <EmbedIcon />,
    // to: "/",
  },
  {
    title: "Share to Facebook",
    icon: <FacebookIcon />,
    // to: "/",
  },
  {
    title: "Share to WhatsApp",
    icon: <WhatsAppIcon />,
    // to: "/",
  },
  {
    title: "Share to Twitter",
    icon: <TwitterIcon />,
    // to: "/",
  },
  {
    title: "Copy Link",
    icon: <CopyLinkIcon />,
    // to: "/",
  },
  {
    title: "",
    icon: <FontAwesomeIcon icon={faChevronDown} />,
    center: true,
    onClick: true,
  },
];

export const LIST_ACTION_BTN_SHARE_ALL = [
  {
    title: "Embed",
    icon: <EmbedIcon />,
    // to: "/",
  },
  {
    title: "Share to Facebook",
    icon: <FacebookIcon />,
    // to: "/",
  },
  {
    title: "Share to WhatsApp",
    icon: <WhatsAppIcon />,
    // to: "/",
  },
  {
    title: "Share to Twitter",
    icon: <TwitterIcon />,
    // to: "/",
  },
  {
    title: "Copy Link",
    icon: <CopyLinkIcon />,
    // to: "/",
  },
  {
    title: "Share to Likedin",
    icon: <LikeEdinIcon />,
    // to: "/",
  },
  {
    title: "Share to Reddit",
    icon: <RedditIcon />,
    // to: "/",
  },
  {
    title: "Share to Telegram",
    icon: <TelegramIcon />,
    // to: "/",
  },
  {
    title: "Share to Email",
    icon: <EmailIcon />,
    // to: "/",
  },
  {
    title: "Share to Line",
    icon: <LineIcon />,
    // to: "/",
  },
  {
    title: "Share to Pinterest",
    icon: <PinterestIcon />,
    // to: "/",
  },
];
