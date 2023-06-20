import React, { useState } from "react";
import Buttons from "./Buttons";
import {
  AutosIcon,
  ComedyIcon,
  EntertainmentIcon,
  FashionIcon,
  InformativeIcon,
  LifeStyleIcon,
  PetsIcon,
  RelationShipsIcon,
  SocietyIcon,
  SportsIcon,
  VoiceIcon,
} from "./IconBtn";
import styles from "./Explore.module.scss";
import classNames from "classnames/bind";
import VideosExplore from "./Videos";
import { LIST_VIDEO_HOME } from "../../mockdatahome";

const cx = classNames.bind(styles);

const BUTTONS = [
  { id: 0, icon: <VoiceIcon />, title: "Dance and Music" },
  { id: 1, icon: <SportsIcon />, title: "Sports" },
  { id: 2, icon: <EntertainmentIcon />, title: "Entertainment" },
  { id: 3, icon: <ComedyIcon />, title: "Comedy and Drama" },
  { id: 4, icon: <AutosIcon />, title: "Autos" },
  { id: 5, icon: <FashionIcon />, title: "Fashion" },
  { id: 6, icon: <LifeStyleIcon />, title: "Lifestyle" },
  { id: 7, icon: <PetsIcon />, title: "Pets and Nature" },
  { id: 8, icon: <RelationShipsIcon />, title: "Relationships" },
  { id: 9, icon: <SocietyIcon />, title: "Society" },
  { id: 10, icon: <InformativeIcon />, title: "Informative" },
];

export default function Explore() {
  const [tabDance, setTabDance] = useState(true);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-btn")}>
        <Buttons buttons={BUTTONS} setTabDance={setTabDance} />
      </div>
      <div className={cx("wrapper-video")}>
        {tabDance ? <VideosExplore data={LIST_VIDEO_HOME} /> : null}
      </div>
    </div>
  );
}
