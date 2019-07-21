import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormControls";
import { required } from "../../utils/validators/validators";

const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          name={"login"}
          validate={[required]}
          placeholder={"Login"}
        />
      </div>
      <div>
        <Field
          component={Input}
          name={"password"}
          validate={[required]}
          placeholder={"Password"}
        />
      </div>
      <div>
        <Field component={Input} name={"remember_me"} type={"checkbox"} />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

let LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

const Login = props => {
  const onSubmit = form_Data => {
    console.log(form_Data);
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
