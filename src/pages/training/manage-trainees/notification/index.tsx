import React, { useState } from "react";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import CustomHorizaontalTab from "@root/components/customTabs";
import TrainingClockEngineTable from "@root/sections/training/manage-trainees/notifications/training-clock-engine-tab/TrainingClockEngineTable";
import NotificationTable from "@root/sections/training/manage-trainees/notifications/notification-settings-tab/NotificationTable";


const PAGE_TILE = "Notification Setting";

Notifications.getLayout = function getLayout(page: any) {

  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "training",
          href: "/training",
        },
        {
          name: "training Dashboard",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Notifications() {
  const [currentTab, setCurrentTab] = useState(1);
   const tabsArray = [
    "Training Clock Engine",
    "Notification Settings",
  ];
  return (
    <Page title={PAGE_TILE}>
      <CustomHorizaontalTab
        tabsArray={tabsArray}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}>
        <TrainingClockEngineTable />
        <NotificationTable/>
      </CustomHorizaontalTab>
    </Page>
  );
}