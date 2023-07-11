import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import PersonaFocusedContent from "@root/sections/marketing/persona-focused-content/PersonaFocusedContent";

const PAGE_TITLE = "Editorial";

MarketingPersonaFocusedContentLayout.getLayout = function getLayout(page: any) {
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
          name: "Merketing",
          href: "/marketing",
        },
        {
          name: "persona-Focused Content Marketing",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function MarketingPersonaFocusedContentLayout() {
  return <Page title={PAGE_TITLE}>
    <PersonaFocusedContent/>
  </Page>;
}
