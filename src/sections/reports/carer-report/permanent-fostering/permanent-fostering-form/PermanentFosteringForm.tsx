import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { PermanentFosteringFormValues } from ".";
import { usePermanentFosteringForm } from "./usePermanentFosteringForm";

const PermanentFosteringForm = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods } = usePermanentFosteringForm();
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods}>
        <Grid container columnSpacing={4}>
          {PermanentFosteringFormValues?.map((form: any, i: any) => (
            <Grid item xs={12} md={form?.gridLength} key={i}>
               <Typography sx={(theme) => styles.title(theme, disabled)}>
                {form.title}
              </Typography>
              {form.component && (
                <form.component
                  disabled={disabled}
                  size="small"
                  {...form.componentProps}
                >
                  {form?.heading}
                  {form.componentProps?.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              )}
              {form?.hr && (
                <Box sx={{ my: 2 }}>
                  <hr></hr>
                </Box>
              )}
              {form?.uploadPhoto && (
                <>
                  <RHFUploadFile
                    name={"updateMeetingRecord"}
                    {...methods}
                    required
                  />
                </>
              )}
            </Grid>
          ))}
        </Grid>
      </FormProvider>
    </Card>
  );
};

export default PermanentFosteringForm;

const styles = {
  title: (theme: any, disabled: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: disabled ? "#898989" : "black",
  }),
};
