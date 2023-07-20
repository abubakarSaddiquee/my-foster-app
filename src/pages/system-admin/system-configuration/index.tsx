import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Card } from "@mui/material";
import Page from "@root/components/Page";
// import Configuration from "@root/sections/system-admin/system-configuration/Configuration";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "System Configuration",
    href: "",
  },
];

const PAGE_TITLE = "System Administration";
SystemConfiguration.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
export default function SystemConfiguration() {
  return (
    <Page title={PAGE_TITLE}>
      {/* <Configuration /> */}
    </Page>
  );
}
