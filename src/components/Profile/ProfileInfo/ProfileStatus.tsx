import React, { ChangeEvent } from "react";

type PropsType = {
  status: string;
  updateStatus: (newStatus: string) => void;
};

type StateType = {
  editMode: boolean;
  status: string;
};

class ProfileStatus extends React.Component<PropsType, StateType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevPros: PropsType, prevState: StateType) {
    if (prevPros.status !== this.props.status) {
      this.setState({
        status: this.props.status,
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
