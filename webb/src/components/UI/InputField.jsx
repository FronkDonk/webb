import React from "react";

const InputField = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor="name">{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        required={props.required}
        ref={ref}
      />
    </>
  );
});

export default InputField
