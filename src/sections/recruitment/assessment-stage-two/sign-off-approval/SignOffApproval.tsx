// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useWatch } from "react-hook-form";
// @mui
import { Box, Button, Card, Grid, Typography, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// utils
// components
import { FormSchema, defaultValues, formData1, formData2 } from ".";
import { fTimestamp } from "@root/utils/formatTime";
import { FormProvider } from "@root/components/hook-form";
import { useRouter } from "next/router";
import download from "@root/assets/img/download.png";

//mui icons

// ----------------------------------------------------------------------

export default function SignOffApproval({
  disabled: globallyDisabled,
  data,
}: any) {
  const theme: any = useTheme();
  let router: any = useRouter();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: globallyDisabled ? data : defaultValues,
  });

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const onSubmit = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(
      JSON.stringify(
        {
          ...data,
          startDate: data.startDate && fTimestamp(data.startDate),
          endDate: data.endDate && fTimestamp(data.endDate),
        },
        null,
        2
      )
    );
    reset();
  };
  return (
    <Card sx={{ p: 4 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          {formData1.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i}>
                <form.component
                  disabled={globallyDisabled}
                  size="small"
                  {...form.otherOptions}
                >
                  {form.otherOptions?.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ color: "#898989" }}>
              In making this decision, I have taken into account the following
              material:
            </Typography>
          </Grid>

          {formData2.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i}>
                <form.component
                  disabled={globallyDisabled}
                  size="small"
                  getSign={download}
                  {...form.otherOptions}
                >
                  {form.otherOptions?.select
                    ? form.options.map((option: any) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))
                    : null}
                </form.component>
              </Grid>
            );
          })}
          {globallyDisabled ? (
            ""
          ) : (
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <LoadingButton
                  sx={{ marginRight: "1rem" }}
                  type="submit"
                  variant="contained"
                  loading={isSubmitting}
                  disabled={!isDirty}
                >
                  Submit
                </LoadingButton>
                <Button
                  sx={{
                    backgroundColor: "#F6830F",
                    "&:hover": {
                      backgroundColor: "#F6830F",
                    },
                  }}
                  onClick={() => {
                    router.back();
                  }}
                  type="button"
                  variant="contained"
                >
                  Back
                </Button>
              </Box>
            </Grid>
          )}
        </Grid>
      </FormProvider>
    </Card>
  );
}
