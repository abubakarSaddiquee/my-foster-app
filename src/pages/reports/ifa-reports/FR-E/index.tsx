import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import FRESection from '../../../../sections/reports/ifa-reports/FRE/FRE';

const PAGE_TITLE = "Reports";

FRE.getLayout = function getLayout(page: any) {
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
        },
        {
          name: "IFA Reports"
        },
        {
          name: "FR-E CHILD’S SOCIAL WORKER REPORT"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRE() {
  return (
    <Page title={PAGE_TITLE}>
      <FRESection />
    </Page>
  );
}
