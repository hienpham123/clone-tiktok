import styles from "./Popup.module.scss";
import classNames from "classnames/bind";
import Button from "../../../components/Button/Button";

const cx = classNames.bind(styles);

function Popup({ handleClose }) {
  return (
    <div className={cx("modal")}>
      <div className={cx("modal_content")}>
        <div className={cx("top")}>
          <div className={cx("title")}>Message settings</div>
          <div
            onClick={handleClose}
            style={{ fontSize: 20, fontWeight: 600, cursor: "pointer" }}
          >
            X
          </div>
        </div>

        <div className={cx("main")}>
          <div style={{ marginLeft: 23 }}>
            <legend className={cx("text-1")}>
              Who can send you direct messages
            </legend>
            <p className={cx("text-2")}>
              With any option, you can receive messages from users that you've
              sent messages to. Friends are your followers that you follow back.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              marginLeft: 23,
              marginTop: 20,
              marginBottom: 30,
            }}
          >
            <span style={{ display: "flex" }}>
              <input
                type="radio"
                style={{
                  width: 24,
                  height: 24,
                  marginBottom: 20,
                  marginRight: 14,
                }}
                name={"Radio"}
              />
              <p>Friends</p>
            </span>
            <span style={{ display: "flex" }}>
              <input
                type="radio"
                style={{
                  width: 24,
                  height: 24,
                  marginBottom: 20,
                  marginRight: 14,
                }}
                name={"Radio"}
              />
              <p>No one</p>
            </span>
          </div>
        </div>

        <div className={cx("bottom")}>
          <Button
            outline
            large
            style={{ color: "#161823" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button primary large style={{ marginLeft: 20 }}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
