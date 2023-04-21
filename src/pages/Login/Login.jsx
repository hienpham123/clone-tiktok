import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CloseIcon,
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  KakaotalkIcon,
  LineIcon,
  PersonIcon,
  QRCodeIcon,
  TwitterIcon,
} from "../../components/Icons";
import "./Login.scss";
import { faApple } from "@fortawesome/free-brands-svg-icons";

const BTNs = [
  {
    id: 1,
    title: "Use QR code",
    icon: <QRCodeIcon />,
  },
  {
    id: 2,
    title: "Use phone / email / username",
    icon: <PersonIcon />,
  },
  {
    id: 3,
    title: "Continue with Facebook",
    icon: <FacebookIcon height="2rem" width="2rem" />,
  },
  {
    id: 4,
    title: "Continue with Google",
    icon: <GoogleIcon height="2rem" width="2rem" />,
  },
  {
    id: 5,
    title: "Continue with Twitter",
    icon: <TwitterIcon height="2rem" width="2rem" />,
  },
  {
    id: 6,
    title: "Continue with LINE",
    icon: <LineIcon height="2rem" width="2rem" />,
  },
  {
    id: 7,
    title: "Continue with KakaoTalk",
    icon: <KakaotalkIcon height="2rem" width="2rem" />,
  },
  {
    id: 7,
    title: "Continue with Apple",
    icon: <FontAwesomeIcon icon={faApple} style={{ marginLeft: 2 }} />,
  },
  {
    id: 8,
    title: "Continue with Instagram",
    icon: <InstagramIcon />,
  },
];

function Login({ handleClosePopup, handleLogin }) {
  return (
    <div className="modal">
      <div className="modal_content">
        <div className="bg-btn-close" onClick={handleClosePopup}>
          <CloseIcon color={"rgb(22, 24, 35)"} />
        </div>
        <div className="main">
          <h2>Log in to TikTok</h2>
          {BTNs.map((item) => {
            return (
              <div key={item.id} className="btn-sign-in" onClick={handleLogin}>
                <div className="icon">{item.icon}</div>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="bottom">
          <div className="bottom-text">Don’t have an account? </div>
          <a href="" className="bottom-link">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
