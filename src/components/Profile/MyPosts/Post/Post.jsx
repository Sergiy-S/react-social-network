import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <img
        src="https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/birth_month_flowers-primary-1920x1280px_pixabay.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  );
};

export default Post;
