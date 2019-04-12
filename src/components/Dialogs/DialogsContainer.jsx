import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

let mapDispatchTooProps = dispatch => {
  return {
    updateNewMessageBody: body => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchTooProps
)(Dialogs);

export default DialogsContainer;
