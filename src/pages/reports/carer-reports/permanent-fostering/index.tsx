import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import PermanentFostering from "@root/sections/reports/carer-report/permanent-fostering/PermanentFostering";

const PAGE_TITLE = "Reports";

PermanentFosteringLayout.getLayout = function getLayout(page: any) {
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
          name: "Carer Reports",
          href: "/reports",
        },
        {
          name: "Permanent Fostering Reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function PermanentFosteringLayout() {
  return (
    <Page title={PAGE_TITLE}>
      <PermanentFostering/>
    </Page>
  );
}
