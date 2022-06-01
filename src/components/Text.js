import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Text() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          // error
          // id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
          // rows={5}
          // multiline={true}
        />
      </div>
    </Box>
  );
}
