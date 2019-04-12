import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchTooProps = dispatch => {
  return {
    updateNewPostText: text => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchTooProps
)(MyPosts);

export default MyPostsContainer;
