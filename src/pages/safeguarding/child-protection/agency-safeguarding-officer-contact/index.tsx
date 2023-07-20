import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import AgencyContactDirectory from "@root/sections/safeguarding/child-protection/agency-safeguarding-officer-contact/AgencyContactDirectory";

// ==========================================================================================================

const PAGE_TITLE = "Agency Safeguarding Officer / Contact";

AgencySafeguarding.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Safeguarding Panel",
          href: "/safeguarding",
        },
        {
          name: "Contact Directory",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function AgencySafeguarding() {
  return (
    <Page title={PAGE_TITLE}>
      <AgencyContactDirectory />
    </Page>
  );
}
