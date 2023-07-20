import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Card } from "@mui/material";
import Page from "@root/components/Page";
import ContinuityPlan from "@root/sections/system-admin/business-continuity-plan/ContinuityPlan";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Business Continuity Plan / Disaster recovery - BCP / DR",
    href: "",
  },
];

const PAGE_TITLE = "System Administration";
BusinessContinuity.getLayout = function getLayout(page: any) {
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
export default function BusinessContinuity() {
  return (
    <Page title={PAGE_TITLE}>
      <ContinuityPlan />
    </Page>
  );
}
