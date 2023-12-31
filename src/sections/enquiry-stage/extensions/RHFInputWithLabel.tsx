import { Typography } from "@mui/material";
import React from "react";

export const RHFInputWithLabel = (props: any) => {
  const { Component, text, typographyProps, ...other } = props;
  return (
    <>
      <Typography
        variant={typographyProps?.variant || "body2"}
        {...typographyProps}
      >
        {text || "Label"}
      </Typography>
      <Component {...other} />
    </>
  );
};
