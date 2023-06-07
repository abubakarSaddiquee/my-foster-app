import { Grid } from "@mui/material";
import { useHealthTherapyInfo } from "./useHealthTherapyInfo";
import { FormProvider } from "@root/components/hook-form";

const HealthTherapyInfo = () => {
  const { healthTherapyInfoFormData, methods, handleSubmit, onSubmitHandler } =
    useHealthTherapyInfo();
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container spacing={3}>
        {healthTherapyInfoFormData.map((form: any, index: number) => {
          return (
            <Grid item xs={12} md={form?.gridLength} key={form.id + index}>
              <form.component
                {...form.componentProps}
                size="small"
                //   disabled={globallyDisabled}
              >
                {form.componentProps.select
                  ? form.componentProps.options.map((option: any) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))
                  : null}
              </form.component>
            </Grid>
          );
        })}
      </Grid>
    </FormProvider>
  );
};

export default HealthTherapyInfo;