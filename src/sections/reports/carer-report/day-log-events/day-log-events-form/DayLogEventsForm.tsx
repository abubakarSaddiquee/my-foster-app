import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider, RHFEditor } from "@root/components/hook-form";
import { DaylogEventsFormData } from ".";
import { useDaylogEventsForm } from "./useDayLogEventsForm";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const DayLogEventsForm = ({ action }: any) => {
  const disabled = action === "view" ? true : false;
  const { methods } = useDaylogEventsForm();
  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods}>
        <Grid container columnSpacing={4}>
          {DaylogEventsFormData?.map((form: any, i: any) => (
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
              {form.requireEditior && (
                <RHFEditor
                
                  readOnly={disabled}
                  size="small"
                  name={"dayLog"}
                  {...form.componentProps}
                  {...methods}
                />
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

export default DayLogEventsForm;

const styles = {
  title: (theme: any, disabled: any) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: disabled ? "#898989" : "black",
  }),
};
