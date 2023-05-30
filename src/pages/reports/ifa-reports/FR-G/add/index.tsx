import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { AddOtherProfessionals } from "@root/sections/reports/ifa-reports/FR-F1/add";
import { AddAdultHouseHoldMember } from "@root/sections/reports/ifa-reports/FR-F2/add";
import AddBirthParent from "@root/sections/reports/ifa-reports/FR-F3/add/AddBirthParent";
import AddChildArrangement from "@root/sections/reports/ifa-reports/FR-F4/add/AddChildArrangement";
import AddReviewingOfficerReport from "@root/sections/reports/ifa-reports/FR-G/add/AddReviewingOfficerReport";

const PAGE_TITLE = "Reports";

FRD1.getLayout = function getLayout(page: any) {
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
          name: "FR-D1 FOSTERED CHILD’S COMMENTS"
        }
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRD1() {
  return (
    <Page title={PAGE_TITLE}>
      <AddReviewingOfficerReport />
    </Page>
  );
}
