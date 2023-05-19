import React, { Fragment, useState } from "react";
import NextLink from "next/link";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import TrainingTabs from "@root/sections/training/dashboard/vertical-tabs/TrainingTabs";
import { TABSDATAARRY } from "@root/sections/training/dashboard/vertical-tabs/TabsData";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import PieChart from "@root/sections/training/dashboard/charts/PieChart";
import BarChart from "@root/sections/training/dashboard/charts/BarChart";
import UpcommingCalander from "@root/sections/training/dashboard/calendar/UpcommingCalander";
import TrainingTasks from "@root/sections/training/dashboard/tasks/TrainingTasks";
import TrainingNotifications from "@root/sections/training/dashboard/notification/TrainingNotifications";
import CourseProfile from "@root/sections/training/dashboard/course-profile";

const PAGE_TILE = "Dashboard";

Training.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/dashboard",
        },
        {
          name: "Training",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Training() {
  const [selectedChart, setSelectedChart] = React.useState("pie");
  const [selectedChart1, setSelectedChart1] = React.useState("pie");
  const [value, setValue] = useState(0);
  const theme = useTheme();

  return (
    <Page title={PAGE_TILE}>
      <TrainingTabs tabsDataArray={TABSDATAARRY}>
        {TABSDATAARRY?.map((item) => (
          <Fragment key={item?.index}>
            <Grid
              container
              spacing={2}
              minHeight={"140px"}
              alignItems={"center"}
            >
              {item?.innerDataArray?.map((innerItem) => (
                <Grid key={innerItem.id} item xl={3} lg={4} md={6} xs={12}>
                  <NextLink
                    href={innerItem?.link}
                    style={styles?.nextLinkContainer}
                  >
                    <Card
                      sx={styles.tabsItems(item?.background)}
                      key={innerItem?.id}
                    >
                      <Typography
                        style={{ color: theme.palette.primary.main }}
                        sx={styles.innerTitle(theme.palette.mode)}
                      >
                        {innerItem?.title}
                      </Typography>
                    </Card>
                  </NextLink>
                </Grid>
              ))}
            </Grid>
          </Fragment>
        ))}
      </TrainingTabs>

      <Box sx={{ mt: 1 }}>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <Card sx={styles.cardStyles}>
              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  padding: "16px",
                  paddingBottom: "0",
                  color: theme.palette.primary.main,
                }}
              >
                Training Profile
              </Typography>
              <HorizaontalTabs
                tabsDataArray={["Foster Carer", "Social Worker", "Employee"]}
              >
                {[1, 2, 3].map((item: any, index: any) => {
                  return selectedChart === "pie" ? (
                    <PieChart
                      key={index}
                      selectedChart={selectedChart}
                      setSelectedChart={setSelectedChart}
                    />
                  ) : (
                    <BarChart
                      key={index}
                      selectedChart={selectedChart}
                      setSelectedChart={setSelectedChart}
                    />
                  );
                })}
              </HorizaontalTabs>
            </Card>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Card sx={styles.cardStyles}>
              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  padding: "16px",
                  paddingBottom: "0",
                  color: theme.palette.primary.main,
                }}
              >
                Course Profile
              </Typography>
              <HorizaontalTabs
                tabsDataArray={["Foster Carer", "Social Worker", "Employee"]}
              >
                {[1, 2, 3].map((index: any) => (
                  <CourseProfile key={index} />
                ))}
              </HorizaontalTabs>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xl={3} lg={12} xs={12}>
            <UpcommingCalander />
          </Grid>
          <Grid item xl={4.5} lg={6} md={12}>
            <TrainingTasks />
          </Grid>
          <Grid item xl={4.5} lg={6} md={12}>
            <TrainingNotifications />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}

//-----------Styles------------
const styles = {
  container: { display: "flex", justifyContent: "space-between" },
  nextLinkContainer: { textDecoration: "none", cursor: "pointer" },
  cardStyles: {
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
  },
  tabRoot: (theme: any) => ({
    borderBottom: 1,
    borderColor: theme.palette.primary.lighter,
  }),
  tabIndicator: (theme: any) => ({
    sx: { background: theme.palette.primary.main },
  }),
  tabsItems: (background: string) => ({
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "5px",
    padding: "30px 0",
    textAlign: "center",
    borderLeft: `10px solid ${background}`,
  }),
  innerTitle: (mode: string) => ({
    color: mode === "light" ? "#343A40" : mode,
    fontSize: "16px",
    fontWeight: mode === "light" ? "500" : "400",
  }),
  profileCardHeading: {},
};
