import React, { useState } from "react";
import styles from "./Explore.module.scss";
import classNames from "classnames/bind";
import { NextIcon } from "./IconBtn";

const cx = classNames.bind(styles);

const styleTextBtn = {
  fontSize: 16,
  lineHeight: 24,
  fontWeight: 700,
  marginLeft: 6,
  color: "rgb(22, 24, 35)",
  cursor: "pointer",
};

export default function Buttons({ buttons, setTabDance }) {
  const [mlContainerBtns, setMlContainerBtns] = useState(0);
  const [indexBtn, setIndexBtn] = useState(0);
  return (
    <div className={cx("container-all-btns")}>
      <div>
        <div
          className={cx("container-btns")}
          style={{ marginLeft: mlContainerBtns }}
        >
          {buttons.map((btn, index) => {
            return (
              <div
                className={cx("btn")}
                key={btn.id}
                onClick={() => {
                  setIndexBtn(index), setTabDance(index === 0 ? true : false);
                }}
                style={{
                  border:
                    indexBtn === index ? "1px solid rgba(22, 24, 35, 0.5)" : "",
                }}
              >
                <span style={{ marginTop: 6 }}>{btn.icon}</span>
                <span style={styleTextBtn}>{btn.title}</span>
              </div>
            );
          })}
        </div>
        {mlContainerBtns === -70 ? (
          <div>
            <div
              className={cx("btn-next-left")}
              onClick={() => setMlContainerBtns(0)}
            >
              <div className={cx("btn-next-left2")}>
                <NextIcon />
              </div>
            </div>
            <div className={cx("shadow-left")}></div>
          </div>
        ) : null}
      </div>
      {mlContainerBtns === 0 ? (
        <div style={{ marginTop: -52 }}>
          <div
            className={cx("btn-next-right")}
            onClick={() => setMlContainerBtns(-70)}
          >
            <div className={cx("btn-next-right2")}>{<NextIcon />}</div>
          </div>
          <div className={cx("shadow-right")}></div>
        </div>
      ) : null}
    </div>
  );
}
