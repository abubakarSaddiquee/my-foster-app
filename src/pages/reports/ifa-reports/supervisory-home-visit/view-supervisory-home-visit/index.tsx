import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import TabsSection from "@root/sections/reports/ifa-reports/supervisory-home-visit/tabs";

const PAGE_TITLE = "Reports";

AddSupervisoryHomeVisitLayout.getLayout = function getLayout(page: any) {
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
          name: "Supervisory Home Visit",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function AddSupervisoryHomeVisitLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <TabsSection />
    </Page>
  );
}
