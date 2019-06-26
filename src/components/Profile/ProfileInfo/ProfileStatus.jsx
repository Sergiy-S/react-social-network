import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  };

  activateEditMode() {
    this.setState({
      editMode: true
    });
  }
  deactivateEditMode() {
    this.setState({
      editMode: false
    });
  }

  render() {
    return (
      <>
        <div>
          {!this.state.editMode && (
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status}
            </span>
          )}
        </div>
        <div>
          {this.state.editMode && (
            <input
              autoFocus={true}
              value={this.props.status}
              onBlur={this.deactivateEditMode.bind(this)}
            />
          )}
        </div>
      </>
    );
  }
}

export default ProfileStatus;
