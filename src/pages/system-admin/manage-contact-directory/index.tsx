import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import ManageContactDirectory from "@root/sections/system-admin/manage-contact-directory/ManageContactDirectory";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Manage Contact Diectory",
    href: "",
  },
];

const PAGE_TITLE = "Manage Contact Diectory";
ContactDiectory.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function ContactDiectory() {
  return (
    <Page title={PAGE_TITLE}>
      <ManageContactDirectory />
    </Page>
  );
}
