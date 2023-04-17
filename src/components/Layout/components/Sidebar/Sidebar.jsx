import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { MenuItem } from "./Menu";
import Menu from "./Menu/Menu";
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from "../../../Icons";
import config from "../../../../config";
import { SuggestedAccount } from "../../../SuggestedAccount";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);
function Sidebar() {
  const { nickname } = useParams();

  return (
    <aside
      className={cx("wrapper")}
      style={nickname && { width: 300, left: 10 }}
    >
      <Menu>
        <MenuItem
          title="For Your"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
        <SuggestedAccount label="Suggested accounts" isSuggested />
        <SuggestedAccount label="Following accounts" />
      </Menu>
    </aside>
  );
}

export default Sidebar;
