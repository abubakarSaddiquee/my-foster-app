import React from "react";
import { newGroupData } from ".";
import { FormProvider } from "@root/components/hook-form";
import { Grid, Button, Box, Typography, Dialog, DialogContent } from "@mui/material";
import { useNewGroupForm } from "./useNewGroupForm";

// ======================================================================================================

const NewGroupForm = (props: any) => {
  const { open, onClose } = props;
  const { methods, handleSubmit, onSubmit } = useNewGroupForm();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={"lg"}>
      <DialogContent>
        <Box sx={Styles.mainTitle}>Create Group</Box>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4} paddingY={2}>
            {newGroupData.map((form: any, i: any) => {
              return (
                <Grid item xs={12} md={form?.gridLength} key={i}>
                  <Typography>{form?.title}</Typography>
                  <form.component fullWidth disabled={props.disabled} size="small" {...form.otherOptions}>
                    {form.otherOptions.select
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
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Button
                  sx={{
                    marginRight: "1rem",
                    backgroundColor: "#0E918C",
                    "&:hover": {
                      backgroundColor: "#0E918C",
                    },
                  }}
                  type="submit"
                  variant="contained"
                >
                  Create
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#F6830F",
                    "&:hover": {
                      backgroundColor: "#F6830F",
                    },
                  }}
                  type="button"
                  variant="contained"
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </Grid>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default NewGroupForm;

//-----------------------------------------------------------------------
// styles
const Styles = {
  mainTitle: {
    fontSize: 18,
    fontWeight: 600,
  },
};
