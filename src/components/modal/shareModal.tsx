import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, TextField, Tooltip, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormProvider, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import { useTheme } from "@emotion/react";

const defaultValues = {
  email: "",
};
const FormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid Email"),
});
const ShareModal = (props: any) => {
  const { open, setOpen, handleClose, onSubmit, data = [], handleAccess } = props;
  const theme: any = useTheme();

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="sm"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle sx={styles.title(theme)}>Share with:</DialogTitle>
      <DialogContent sx={styles.dialogContent}>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Typography sx={styles.heading}>Email:</Typography>
          <RHFTextField fullWidth name="email" size="small" />
          <Button type="submit" sx={styles.buttonShare(theme)}>
            Share
          </Button>
        </FormProvider>
        <Box sx={{ marginTop: "40px" }}>
          <Typography sx={styles.sharedHeading(theme)}>Shared With:</Typography>
          {data?.map((item: any, i: number) => (
            <Box sx={styles.sharedWrap} key={i}>
              <Typography sx={styles.sharedEmail(theme)}>{item.email}</Typography>
              <Tooltip title="Revoke Access !!!" placement="left-start" onClick={handleAccess}>
                <Typography sx={styles.hoverText}></Typography>
              </Tooltip>
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
export default ShareModal;

////////////////////////////
const styles = {
  title: (theme: any) => ({ color: theme.palette.primary.main, fontSize: "16px !important", fontWeight: "600" }),
  heading: { fontSize: "16px !important", fontWeight: "600" },
  dialogContent: { marginTop: "10px" },
  buttonShare: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    padding: "8px 17px",
    marginTop: "40px",
    color: theme.palette.primary.contrastText,
    "&:hover": { bgcolor: theme.palette.primary.main },
  }),
  sharedWrap: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  sharedHeading: (theme: any) => ({ color: theme.palette.primary.main, fontSize: "16px !important", fontWeight: "600" }),
  sharedEmail: (theme: any) => ({ color: theme.palette.grey[500], fontSize: "16px !important", letterSpacing: "0.005em" }),
  hoverText: { width: "15px", height: "4px", backgroundColor: "#130F26 !important", borderRadius: "5px", cursor: "pointer" },
};
