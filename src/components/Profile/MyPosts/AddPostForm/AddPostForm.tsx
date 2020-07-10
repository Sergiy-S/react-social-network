import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { required } from "../../../../utils/validators/validators";
import { createField, GetStringKeys, Input } from "../../../common/FormsControls/FormControls";

type PropsType = {};

export type AddPostFormValuesType = {
  newPostText: string;
};

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>;

let AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>{createField<AddPostFormValuesTypeKeys>("Your post", "newPostText", [required], Input)}</div>
        <div>
          <button>Add post</button>
        </div>
      </div>
    </form>
  );
};

export default reduxForm<AddPostFormValuesType, PropsType>({ form: "profileAddPost" })(AddPostForm);
