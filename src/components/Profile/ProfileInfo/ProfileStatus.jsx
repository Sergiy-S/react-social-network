import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = e => {
    this.setState({
      status: e.currentTarget.value
    });
  };

  componentDidUpdate(prevPros, prevState) {
    if (prevPros.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <>
        <div>
          {!this.state.editMode && (
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status || "-----"}
            </span>
          )}
        </div>
        <div>
          {this.state.editMode && (
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              value={this.state.status}
              onBlur={this.deactivateEditMode}
            />
          )}
        </div>
      </>
    );
  }
}

export default ProfileStatus;
