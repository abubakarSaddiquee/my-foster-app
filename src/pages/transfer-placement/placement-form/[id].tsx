import React from "react";

import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import TransferPlacementForm from "@root/sections/placement-status/transfer-placement-table/transfer-placement-form/TransferPlacementForm";
import { useRouter } from "next/router";

const PAGE_TILE = "Transfer Placement";

AddPlacementForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Transfer Placement",
          href: "/transfer-placement",
        },
        {
          name: "Transfer Placement",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function AddPlacementForm() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Page title={PAGE_TILE}>
      <TransferPlacementForm id={id} />
    </Page>
  );
}
