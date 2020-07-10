import React from "react";
import preloader from "../../../assets/img/preloader.svg";

type PropsType = {};

let Preloader: React.FC<PropsType> = (props) => {
  return <img src={preloader} />;
};

export default Preloader;
