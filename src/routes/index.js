import { HeaderOnly } from "../components/Layout";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Upload from "../pages/Upload";
import config from "../config";
import Live from "../pages/Live/Live";
import Message from "../pages/Message/Message";
import VideoInfo from "../pages/VideoInfo/VideoInfo";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.live, component: Live },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.message, component: Message, layout: HeaderOnly },
  { path: config.routes.video, component: VideoInfo, layout: null },
  { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
