import React from "react";
import styles from "./users.module.css";

let Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "https://image.flaticon.com/icons/svg/145/145867.svg",
        followed: false,
        fullName: "Dmitriy",
        status: "The BOSS",
        location: { city: "Minsk", country: "Belarus" }
      },
      {
        id: 2,
        photoUrl: "https://image.flaticon.com/icons/svg/145/145867.svg",
        followed: true,
        fullName: "John",
        status: "The BOSS",
        location: { city: "London", country: "England" }
      },
      {
        id: 3,
        photoUrl: "https://image.flaticon.com/icons/svg/145/145867.svg",
        followed: false,
        fullName: "Andrew",
        status: "The BOSS",
        location: { city: "Kiyv", country: "Ukraine" }
      }
    ]);
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photoUrl}
                className={styles.userPhoto}
                alt={u.fullName}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
