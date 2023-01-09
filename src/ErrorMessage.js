import React from "react";

const ErrorMessage = ({error}) => (
  <div>
    <p> ERROR: {error.message}</p>
  </div>
  
);

export default ErrorMessage;