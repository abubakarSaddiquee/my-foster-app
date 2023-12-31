import { Box, Grid, Button, Modal, Backdrop, Typography } from "@mui/material";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import { useForm } from "react-hook-form";
import { UploadDocFormData, defaultValues, formSchema } from "./index";
import CloseIcon from "@mui/icons-material/Close";
import { useUploadDocumentsTable } from "./useUploadDocumentsTable";
import { useLazySingleAllegetionDocumentQuery } from "@root/services/carer-info/personal-info/chronology-of-events/allegation-api/uploadDocumentsApi";
import { enqueueSnackbar } from "notistack";
import SkeletonFormdata from "@root/components/skeleton/SkeletonFormdata";
import TableAction from "@root/components/TableAction";

function ViewDocumentsModal(props: any) {
  const [isLoading, setIsLoading] = React.useState(true);
  //API For Getting Single Document Details
  const [getSingleAllegetionDocument]: any =
    useLazySingleAllegetionDocumentQuery();
  const [open, setOpen] = React.useState(false);
  const { id } = props;
  const { theme } = useUploadDocumentsTable();
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: async () => {
      const { data, isError } = await getSingleAllegetionDocument(id, true);
      setIsLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return defaultValues;
      }
      const responseData = { ...data.data };
      return responseData;
    },
  });
  const { handleSubmit, getValues } = methods;
  const onSubmit = (data: any) => {};
  if (isLoading) return <SkeletonFormdata />;
  return (
    <>
      <TableAction
        size="small"
        type="view"
        onClicked={() => {
          setOpen(true);
        }}
      />
      {open && (
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
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: theme.palette.grey[600] }}
                >
                  Person Uploaded: {getValues("uploadBy")}
                </Typography>
                <CloseIcon
                  onClick={() => setOpen(false)}
                  sx={{ cursor: "pointer", color: theme.palette.grey[600] }}
                />
              </Box>
              <Grid container rowSpacing={4} columnSpacing={2}>
                {UploadDocFormData.map((form: any) => (
                  <Grid item xs={12} md={form?.gridLength} key={form.id}>
                    <form.component
                      {...form.componentProps}
                      size="small"
                      disabled={true}
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
                  <RHFTextField
                    label="Choose File"
                    size="small"
                    name="documentName"
                    disabled={true}
                    InputLabelProps={{
                      shrink: true,
                      disabled: true,
                    }}
                    {...methods}
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
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
      )}
    </>
  );
}

export default ViewDocumentsModal;

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
