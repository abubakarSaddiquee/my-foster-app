import { Box, Grid, Button, Modal, Backdrop, Typography } from "@mui/material";
import React from "react";
import { FormProvider } from "@root/components/hook-form";
import { UploadDocFormData } from "./index";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import CloseIcon from "@mui/icons-material/Close";
import { useUploadDocumentsTable } from "./useUploadDocumentsTable";
import { LoadingButton } from "@mui/lab";
import useAuth from "@root/hooks/useAuth";

function UploadDocumentsModal(props: any) {
  const { open, setOpen, uploadDocumentsHandler } = props;
  const {
    user: { firstName, lastName },
  }: any = useAuth();
  const { theme, action, handleSubmit, methods, isSubmitting } =
    useUploadDocumentsTable();
  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={Styles.root}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.grey[600] }}
            >
              Person Uploaded: {`${firstName} ${lastName}` ?? "-"}
            </Typography>
            <CloseIcon
              onClick={() => setOpen(false)}
              sx={{ cursor: "pointer", color: theme.palette.grey[600] }}
            />
          </Box>
          <FormProvider
            methods={methods}
            onSubmit={handleSubmit(uploadDocumentsHandler)}
          >
            <Grid container rowSpacing={4} columnSpacing={2}>
              {UploadDocFormData.map((form: any) => (
                <Grid item xs={12} md={form?.gridLength} key={form.id}>
                  <form.component
                    {...form.componentProps}
                    size="small"
                    disabled={action === "view" ? true : false}
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
              ))}
              <Grid xs={12} item>
                <RHFUploadFile
                  disabled={action === "view" ? true : false}
                  name={"file"}
                  {...methods}
                />
              </Grid>
            </Grid>
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              {action === "add" || action === "edit" ? (
                <LoadingButton
                  type="submit"
                  loading={isSubmitting}
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    "&:hover": { bgcolor: theme.palette.orange.main },
                  }}
                  variant="contained"
                >
                  Upload
                </LoadingButton>
              ) : null}
              <Button
                sx={{
                  bgcolor: theme.palette.orange.main,
                  "&:hover": { bgcolor: theme.palette.orange.main },
                }}
                variant="contained"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Box>
          </FormProvider>
        </Box>
      </Modal>
    </>
  );
}

export default UploadDocumentsModal;

// styles
const Styles = {
  root: (theme: any) => ({
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "95%", sm: "35%" },
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
};
