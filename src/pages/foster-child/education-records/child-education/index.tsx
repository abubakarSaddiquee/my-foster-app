import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import ChildEducationInfoList from "@root/sections/foster-child/education-records/child-education/ChildEducationInfoList";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: !!query?.fosterChildId
      ? `/foster-child?fosterChildId=${query?.fosterChildId}`
      : "/foster-child",
  },
  {
    name: "Education Info List",
    href: "",
  },
];

const PAGE_TITLE = "Child Education Info";

////-----------------------------------------
ChildEducationList.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function ChildEducationList() {
  const { query } = useRouter();

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(query)}
      />

      <ChildEducationInfoList />
    </Page>
  );
}
