import React from "react";
import { forwardRef } from "react";

function Input({ id, label, error, ...rest }, ref) {
  return (
    <>
      {label ? <label htmlFor={id}>{label}</label> : null}
      {error?.message ? (
        <span className="text-xs font-normal text-red-500 mb-1">
          {error.message}
        </span>
      ) : null}
      <input id={id} ref={ref} {...rest} />
    </>
  );
}

export default Input = forwardRef(Input);
