import { useState, useRef } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import { Grid, Box, Button, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
import { fTimestamp } from "@root/utils/formatTime";
// components
import { FormProvider } from "@root/components/hook-form";
//
import { FormSchema, defaultValues, formData } from ".";
import { useEmployersViewForm } from "./useEmployersViewForm";

export default function EmployersViewForm(props: any) {
  const { changeView } = props;

  let { methods, handleSubmit, onSubmit, isSubmitting, isDirty } =
    useEmployersViewForm(props);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            sx={{ color: "#343A40", fontWeight: "600", fontSize: "16px" }}
          >
            Please give details of your Employer(s){" "}
          </Typography>
        </Grid>
        {formData.map((form: any, i: any) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={i}>
              <form.component
                size="small"
                disabled={props.disabled}
                {...form.otherOptions}
              >
                {form.otherOptions.select
                  ? form.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {" "}
                        {option.label}{" "}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
      </Grid>
      <Box sx={{ display: "flex", mb: "1rem", mt: "2rem" }}>
        <LoadingButton
          sx={{ marginRight: "1rem" }}
          type="submit"
          variant="contained"
          loading={isSubmitting}
          disabled={!isDirty}
        >
          Submit
        </LoadingButton>

        <LoadingButton
          onClick={() => {
            changeView(null);
          }}
          type="button"
          sx={{ marginRight: "1rem", backgroundColor: "#F6830F" }}
          variant="contained"
        >
          back
        </LoadingButton>
      </Box>
    </FormProvider>
  );
}
