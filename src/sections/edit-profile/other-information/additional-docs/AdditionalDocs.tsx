import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Button, Grid, Modal, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import ButtonWithIcon from "../../locals/ButtonWithIcon";
import AdditionalDocForm from "./additionalDocForm/AdditionalDocForm";
const AdditionalDocs = () => {
  const theme: any = useTheme();
  const [flags, setFlags] = useState({ addRefModel: false });
  const addRefModelOpen = () => {
    setFlags((pre) => ({ ...pre, addRefModel: true }));
  };

  const addRefModelClose = () => {
    setFlags((pre) => ({ ...pre, addRefModel: false }));
  };

  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item>
          <Typography
            sx={{ fontWeight: 600, color: theme.palette.primary.main }}
          >
            Additional Documents From The Candidate
          </Typography>
        </Grid>
        <Grid item>
          <InfoIcon sx={{ color: theme.palette.primary.main }} />
        </Grid>
      </Grid>
      <Grid item container>
        <ButtonWithIcon text="Add Documents" onClick={addRefModelOpen} />
      </Grid>
      <Grid item sx={{ mt: 2 }}>
        <Button variant="contained">continue</Button>
      </Grid>
      <Modal open={flags.addRefModel} onClose={addRefModelClose}>
        <Grid
          container
          sx={{
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          sm={5}
          xs={10}
        >
          <AdditionalDocForm addRefModelClose={addRefModelClose} />
        </Grid>
      </Modal>
    </Grid>
  );
};

export default AdditionalDocs;
