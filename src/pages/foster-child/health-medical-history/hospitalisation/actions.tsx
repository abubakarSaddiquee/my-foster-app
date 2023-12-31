import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Box } from "@mui/material";
import { useRouter, Router } from "next/router";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import HospitalizationFrom from "@root/sections/foster-child/health-medical-history/hospitalization/hospitalizationFrom";
import HospitalizationUploadTable from "@root/sections/foster-child/health-medical-history/hospitalization/hospitalizationUploadTable";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

Hospitalisation.getLayout = function GetLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Hospitalisation() {
  const Router: any = useRouter();
  const { action, fosterChildId, hospitalizationId } = Router.query;
  // Constants

  const PAGE_TITLE = "Hospitalization";
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: PAGE_TITLE,
      href: "",
    },
    {
      name: "Hospitalization Info list",
      href: {
        pathname: "/foster-child/health-medical-history/hospital-info-list",
        query: { fosterChildId: fosterChildId },
      },
    },
    {
      name: "Hospitalization Info",
      href: "",
    },
  ];
  return (
    <Box>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={["Hospitalization Info", "Uploaded Documents"]}
      >
        <HospitalizationFrom
          action={action}
          fosterChildId={fosterChildId}
          hospitalizationId={hospitalizationId}
        />
        <HospitalizationUploadTable
          action={action}
          fosterChildId={fosterChildId}
          hospitalizationId={hospitalizationId}
        />
      </HorizaontalTabs>
    </Box>
  );
}
