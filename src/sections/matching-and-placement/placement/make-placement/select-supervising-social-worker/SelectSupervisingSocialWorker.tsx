import React from "react";
import { Grid } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { SelectSupervisingSocialWorkerData } from ".";
import useSelectSupervisingSocialWorker from "./useSelectSupervisingSocialWorker";
import { LoadingButton } from "@mui/lab";

const SelectSupervisingSocialWorker = ({ handleIncreamentStep }: any) => {
  const { onSubmit, methods, handleSubmit, theme } = useSelectSupervisingSocialWorker(handleIncreamentStep);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container >
        {SelectSupervisingSocialWorkerData?.map((item: any) => (
          <Grid item xs={12} md={item?.md} key={item?.id} mt={5} pl={2.5} pr={2.5}>
            <item.component
              {...item.componentProps}
              size={"small"}
            >
              {item.componentProps.select
                ? item.options.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))
                : null}
              {item?.heading}
            </item.component>

          </Grid>
        ))}
        <Grid item xs={12} ml={2.5} mb={2.5} mt={1.5}>
          <LoadingButton
            type="submit"
            sx={{
              bgcolor: theme.palette.primary.main,
              "&:hover": {},
            }}
            variant="contained"
          // loading={isfatching}
          >
            Save and Continue
          </LoadingButton>
        </Grid>
      </Grid>
    </FormProvider>
  );
};
export default SelectSupervisingSocialWorker;
