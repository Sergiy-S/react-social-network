import React, { useState, useEffect, ChangeEvent } from "react";
import s from "./ProfileInfo.module.css";

type PropsType = {
  status: string;
  updateStatus: (status: string) => void;
};

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      <div>
        {!editMode && (
          <div>
            <b>Status:</b> <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
          </div>
        )}
      </div>
      <div>
        {editMode && <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status} />}
      </div>
    </>
  );
};

export default ProfileStatusWithHooks;