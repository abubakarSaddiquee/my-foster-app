import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import AddReviewingOfficerReport from "@root/sections/reports/ifa-reports/FR-G/add/AddReviewingOfficerReport";

const PAGE_TITLE = "Reports";

FRG.getLayout = function getLayout(page: any) {
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
          name: "Reports",
          href: "/reports",
        },
        {
          name: "Child Reports",
          href: "/reports/ifa-reports/FR-G",
        },
        {
          name:"FR-G: REVIEWING OFFICER REPORT",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRG() {
  return (
    <Page title={PAGE_TITLE}>
      <AddReviewingOfficerReport />
    </Page>
  );
}
