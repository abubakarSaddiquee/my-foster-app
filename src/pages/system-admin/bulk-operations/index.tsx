import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import { Card } from "@mui/material";
import Page from "@root/components/Page";
// import BulkOperations from "@root/sections/system-admin/bulk-operations/BulkOperations";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Bulk Operations",
    href: "",
  },
];

const PAGE_TITLE = "Bulk Operations";
BulkOperation.getLayout = function getLayout(page: any) {
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
export default function BulkOperation() {
  return (
    <Page title={PAGE_TITLE}>
      {/* <BulkOperations /> */}
    </Page>
  );
}
