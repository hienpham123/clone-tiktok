import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SuggestedAccount.module.scss";
import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import Wrapper from "../Poper/Wrapper";
import Image from "../Images/Image";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem({ data, isSuggested }) {
  const renderPreview = (props) => {
    return (
      <div tabIndex={-1} {...props}>
        <Wrapper>
          <AccountPreview data={data} />
        </Wrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-20, 0]}
        placement="bottom"
        render={(props) => (isSuggested ? renderPreview(props) : null)}
      >
        <div className={cx("account-item")}>
          <Image className={cx("avatar")} src={data.avatar} alt="" />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>{data.nickname}</strong>
              {data.tick && (
                <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
              )}
            </p>
            <p className={cx("name")}>{data.full_name}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
  isSuggested: PropTypes.bool,
};

export default AccountItem;
