import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import AreaOfficeSetupForm from "@root/sections/system-admin/area-office-setup/area-office-setup-form/areaOfficeSetupForm";

const PAGE_TITLE = "System Administration";

ChildLivingHouseholdLayout.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "System Admin",
          href: "//system-admin",
        }, 
        {
          name: "Locat Office Setup",
          href: "/reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function ChildLivingHouseholdLayout() {
    const router = useRouter();
    const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <AreaOfficeSetupForm action={action} id={id} />
    </Page>
  );
}