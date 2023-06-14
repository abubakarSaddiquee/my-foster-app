import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ChildAdditionalForm from "@root/sections/reports/child-reports/child-additional/child-additional-form/ChildAdditionalForm";

const PAGE_TITLE = "Child Additional Reports";

ChildAdditionalFormLayout.getLayout = function getLayout(page: any) {
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
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function ChildAdditionalFormLayout() {
  return (
    <Page title={PAGE_TITLE}>
     <ChildAdditionalForm />
    </Page>
  );
}
