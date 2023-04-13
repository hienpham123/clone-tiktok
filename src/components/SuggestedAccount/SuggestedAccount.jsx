import styles from "./SuggestedAccount.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import AccountItem from "./AccountItem";
import { LIST_ACCOUNT } from "../../mockdata";

const cx = classNames.bind(styles);

function SuggestedAccount({ label, isSuggested }) {
  const [suggestedAccountList, setSuggestedAccountList] = useState([]);

  const handleSeeAll = () => {
    setSuggestedAccountList(LIST_ACCOUNT);
  };

  const handleSeeLess = () => {
    setSuggestedAccountList(suggestedAccountList.slice(0, 4));
  };

  //mock account random
  useEffect(() => {
    // Sắp xếp mảng ngẫu nhiên
    const randomSortedArray = LIST_ACCOUNT.sort(() => Math.random() - 0.5)
      .reverse()
      .slice(0, 4);
    setSuggestedAccountList(randomSortedArray);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      {suggestedAccountList.map((item) => {
        return (
          <AccountItem key={item.id} data={item} isSuggested={isSuggested} />
        );
      })}
      {suggestedAccountList.length <= 4 ? (
        <p className={cx("more-btn")} onClick={handleSeeAll}>
          See all
        </p>
      ) : (
        <p className={cx("more-btn")} onClick={handleSeeLess}>
          See less
        </p>
      )}
    </div>
  );
}

SuggestedAccount.propTypes = {
  label: PropTypes.string.isRequired,
  isSuggested: PropTypes.bool,
};

export default SuggestedAccount;
