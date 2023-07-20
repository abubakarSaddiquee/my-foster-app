import React from "react";
import Image from "next/image";
import Link from "next/link";
import { systemAdminData, moreSystemAdminFeature } from ".";
import {
  Avatar,
  Box,
  Card,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

const dashboard = () => {
  return (
    <>
      <Card sx={{ p: 2 }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 2, md: 2 }}
          minHeight={"100px"}
          alignItems={"center"}
        >
          {systemAdminData.map((item: any, i: any) => {
            return (
              <Grid key={i} item xs={12} md={4} sm={6} lg={3} xl={2.4}>
                <Link href={`${item.link}`} style={{ textDecoration: "none" }}>
                  <Box
                    sx={(theme) => styles.marketingCard(theme, item.bgColor)}
                  >
                    <Box sx={(theme) => styles.marketingCardContent(theme)}>
                      <Typography sx={(theme) => styles.cardText(theme)}>
                        {item.title}
                      </Typography>

                      <Image
                        src={item.image}
                        width={52}
                        height={52}
                        alt="image"
                      />
                    </Box>
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Card>

      <Divider
        sx={{ mt: 4, mb: 4, color: "#898989", fontWeight: "500" }}
        textAlign="center"
      >
        More System Admin Features
      </Divider>

      <Card sx={{ p: 2 }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 2, md: 2 }}
          minHeight={"100px"}
          alignItems={"center"}
        >
          {moreSystemAdminFeature.map((item: any, i: any) => {
            return (
              <Grid key={i} item xs={12} md={4} sm={6} lg={3} xl={2.4}>
                <Box sx={styles.moreFeatureCard}>
                  <Box sx={(theme) => styles.marketingCardContent(theme)}>
                    <Typography sx={(theme) => styles.cardText(theme)}>
                      {item.title}
                    </Typography>
                    <Image
                      src={item.image}
                      width={52}
                      height={52}
                      alt="image"
                    />
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </>
  );
};

export default dashboard;

//style
const styles = {
  marketingCard: (theme: any, background: any) => ({
    background: background,
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.20)",
    borderRadius: "10px",
    padding: "15px",
    with: "248px",
    height: "130px",
  }),
  moreFeatureCard: () => ({
    background: "#E9E9E9",
    borderRadius: "10px",
    padding: "15px",
    with: "248px",
    height: "130px",
  }),
  marketingCardContent: (theme: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),
  cardText: (theme: any) => ({
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      fontSize: "18px",
      fontWeight: "600",
      marginTop: "25px",
      alignItems: "center",
      width: "188px",
      color:
        theme.palette.mode === "light"
          ? theme.palette.common.white
          : theme.palette.grey[800],
    },
  }),
};
