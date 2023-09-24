import React from "react";
import { TextField } from "@mui/material";

const Form = () => {
  return (
    <>
      <div>
        <TextField
          required
          id="filled-required"
          label="Email Address"
          defaultValue=""
          variant="filled"
          sx={{
            width: "396px",
            height: "56px",
            border: "1px solid grey",
            borderRadius: "3px",
            marginTop: "30px",
          }}
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Password"
          defaultValue=""
          variant="filled"
          sx={{
            width: "396px",
            height: "56px",
            border: "1px solid grey",
            borderRadius: "3px",
            marginTop: "20px",
          }}
        />
      </div>
    </>
  );
};

export default Form;
