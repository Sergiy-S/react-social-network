import React from "react";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/img/user.svg";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = e => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

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
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
