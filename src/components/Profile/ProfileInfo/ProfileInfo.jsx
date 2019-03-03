import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://images.pexels.com/photos/459059/pexels-photo-459059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div className={s.descriptionBlock}>text</div>
    </div>
  );
};

export default ProfileInfo;
