import React from "react";
import { Field } from "redux-form";
import styles from "./FormControls.module.css";

const FormControl = ({
  input,
  meta: { touched, error },
  children,
  element,
  ...props
}) => {
  const has_error = touched && error;

  return (
    <div className={`${styles.form_control} ${has_error ? styles.error : ""}`}>
      <div>{children}</div>
      {has_error && <span>{error}</span>}
    </div>
  );
};

export const Textarea = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder,
  name,
  validators,
  component,
  props = {},
  text = ""
) => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      validate={validators}
      component={component}
      {...props}
    />
    {text}
  </div>
);
