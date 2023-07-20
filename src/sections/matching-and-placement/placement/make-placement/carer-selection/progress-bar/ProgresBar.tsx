import * as React from 'react';
import { styled } from '@mui/material/styles';
import{ Box ,Typography,Grid} from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 16,
    borderRadius: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#EBEBEB",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: theme.palette.primary,
    },
  }));



export default function CarerProgresBar() {
  return (
    <Grid container>
    <Grid xs={12} lg={6}></Grid>
    <Grid xs={12} lg={6}  mb={2} >
     
              <BorderLinearProgress
                variant="determinate"
                value={50}
                placeholder={"50"}
              />
              <Typography component={"span"} sx={styles.progressCount}>
                50%
              </Typography>
    </Grid>
    </Grid>
  );
}

const styles: any = {

    progress: (theme: any) => ({
      color: theme.palette.mode === "light" ? "#10131C" : theme.palette.primary,
      fontWeight: 500,
      fontSize: "18px",
      mb: "7px",
    }),
    progressCount: {
      position: "absolute",
      top: "0px",
      left: "30%",
      fontSize: "12px",
      fontWeight: 600,
      color: "#fff",
    },

  };
  