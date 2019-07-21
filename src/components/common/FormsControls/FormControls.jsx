import React from "react";
import styles from "./FormControls.module.css";

const FormControl = ({ input, meta, child, element, ...props }) => {
  const has_error = meta.touched && meta.error;

  return (
    <div className={`${styles.form_control} ${has_error ? styles.error : ""}`}>
      <div>{props.children}</div>
      {has_error && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = props => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = props => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
