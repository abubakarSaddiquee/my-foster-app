import React from "react";
import Link from "next/link";
import { Button, Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { BForm, defaultValues } from ".";
import { FormProvider } from "@root/components/hook-form";
import { useAddTrainingSessionDetails } from "./useAddTrainingSessionDetails";

export default function AddTrainingSessionDetails({
  disabled,
  onSubmitHandler,
  initialValueProps = defaultValues,
  message,
}: any) {

  const { methods, onSubmit, handleSubmit, isSubmitting } = useAddTrainingSessionDetails({
    disabled,
    onSubmitHandler,
    initialValueProps,
    message,
  });

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container columnSpacing={4}>
        {BForm?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id}>
            <item.component
              {...item.componentProps}
              disabled={disabled}
              size={"small"}
            >
              {item?.heading}
            </item.component>
          </Grid>
        ))}
        {!disabled && (
          <Grid item xs={12} sx={{mt:4}}>
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ mr: 2 }}
              loading={isSubmitting}
            >
              Save & Next
            </LoadingButton>
          </Grid>
        )}
      </Grid>
    </FormProvider>
  );
}