import { useState, useEffect, useRef } from "react";
import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css"; // optional
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper as PopperWrapper } from "../../../Poper";
import AccountItem from "../../../AccountItem/AccountItem";
import { SearchIcon } from "../../../Icons/Icons";
import { LIST_ACCOUNT } from "../../../../mockdata";
import { useDebounce } from "../../../../hook";
// import * as searchService from "../../../../apiServices/searchService";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);
function Search() {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);
  const inputRef = useRef();

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (event) => {
    const searchValue = event.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  //API die

  //   useEffect(() => {
  //     if (!debouncedValue.trim()) {
  //       setSearchResult([]);
  //       return;
  //     }

  //     const fetchAPI = async () => {
  //       setLoading(true);

  //       const result = await searchService.search(debouncedValue);
  //       setSearchResult(result);

  //       setLoading(false);
  //     };
  //     fetchAPI();
  //   }, [debouncedValue]);

  //mock
  useEffect(() => {
    if (debouncedValue) {
      setLoading(true);
      const results = LIST_ACCOUNT.filter((item) => {
        return item.full_name
          .toLowerCase()
          .includes(debouncedValue.toLowerCase());
      }).slice(0, 6);
      setSearchResult(results);
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
  }, [debouncedValue]);

  return (
    <HeadlessTippy
      interactive
      visible={searchValue && showResult && searchResult.length > 0}
      content="Tìm kiếm"
      render={(attrs) => (
        <div className={cx("search-results")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder={t("Search accounts and videos")}
          spellCheck={false}
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button
            className={cx("clear")}
            onClick={() => {
              setSearchValue("");
              inputRef.current.focus();
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {searchValue && loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}

        <button className={cx("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
