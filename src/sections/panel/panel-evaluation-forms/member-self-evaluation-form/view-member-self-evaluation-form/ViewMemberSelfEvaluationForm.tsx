// @mui
import { Grid, Box, Button, Typography, Card } from "@mui/material";
// components
import { FormProvider } from "@root/components/hook-form";
//
import { MemberSelfEvaluationFormData } from ".";
import { useViewMemberSelfEvaluationForm } from "./useViewMemberSelfEvaluationForm";

const ViewMemberSelfEvaluationForm = (props: any) => {
  const {
    methods,
    theme,
    router
  } = useViewMemberSelfEvaluationForm();

  return (
    <Card sx={{ p: 2 }}>
      <FormProvider methods={methods}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Self-Evaluation Form: Panel and Central List Member
            </Typography>
          </Grid>
          {MemberSelfEvaluationFormData.map((form: any, i: any) => {
            return (
              <Grid item xs={12} md={form?.gridLength} key={i}>
                <form.component disabled={props.disabled} size="small" {...form.otherOptions}>
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
          <Grid item xs={12}>
            <Box sx={{ display: "flex" }}>

              <Button
                sx={{
                  backgroundColor: "#F6830F",
                  "&:hover": {
                    backgroundColor: "#F6830F",
                  },
                }}
                onClick={() => router.push("/panel/panel-evaluation-forms/member-evaluation-form")}
                type="button"
                variant="contained"
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FormProvider>
    </Card>
  );
}
export default ViewMemberSelfEvaluationForm
