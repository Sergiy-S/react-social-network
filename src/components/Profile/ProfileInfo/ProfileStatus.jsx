import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  };

  activateEditMode = () => {
    debugger;
    this.setState({
      editMode: true
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
  };

  render() {
    return (
      <>
        <div>
          {!this.state.editMode && (
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          )}
        </div>
        <div>
          {this.state.editMode && (
            <input
              autoFocus={true}
              value={this.props.status}
              onBlur={this.deactivateEditMode}
            />
          )}
        </div>
      </>
    );
  }
}

export default ProfileStatus;
