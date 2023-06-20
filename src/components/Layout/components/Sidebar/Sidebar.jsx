import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { MenuItem } from "./Menu";
import Menu from "./Menu/Menu";
import {
  ExploreIcon,
  ExploreIconActive,
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
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);
function Sidebar() {
  const { nickname } = useParams();
  const location = useLocation();

  const isFullScreen = nickname || location.pathname === config.routes.explore;
  return (
    <aside
      className={cx("wrapper")}
      style={isFullScreen ? { width: 300, left: 10 } : {}}
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
          title="Explore"
          to={config.routes.explore}
          icon={<ExploreIcon />}
          activeIcon={<ExploreIconActive />}
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
