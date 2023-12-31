import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { EnhancedDbsChecksForm } from "@root/sections/carer-info/personal-info/form-f/enhanced-dbs-checks";
import { usePutEnhancedDbsChecksMutation } from "@root/services/carer-info/personal-info/form-f/enhancedDbsChecksApi";
import { Box } from "@mui/material";
import IsFetching from "@root/components/loaders/IsFetching";
import Error from "@root/components/Error";
import { enqueueSnackbar } from "notistack";
import useAuth from "@root/hooks/useAuth";
import { useFormFQuery } from "@root/services/carer-info/personal-info/form-f/form-f-all";

// Constants
const PAGE_TITLE = "Form F";

EnhancedDbsChecks.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Form F List",
          href: "/carer-info/personal-info/form-f",
        },
        {
          name: "Enhanced DBS Checks",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function EnhancedDbsChecks() {
  //---------------getting Form Data-----------------//
  const { user }: any = useAuth();
  const [skip, setSkip] = useState(true);
  const { data } = useFormFQuery("enhancedDBSCheck", { skip });
  //---------------=================-----------------//
  const [putDBSChecksData, { isLoading, isError, isSuccess }] =
    usePutEnhancedDbsChecksMutation();
  const recieveDataHandler = async (formData: any) => {
    try {
      const res: any = await putDBSChecksData({
        formData,
        params: "fosterCarerId=1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
      }).unwrap();
      enqueueSnackbar(res?.message ?? `Details Submitted Successfully`, {
        variant: "success",
      });
      // router.push("/carer-info/personal-info/carer-family-support-network");
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Something Went Wrong!", { variant: "error" });
    }
  };

  return (
    <Page title={PAGE_TITLE}>
      <EnhancedDbsChecksForm
        isLoading={isLoading}
        isError={isError}
        formData={recieveDataHandler}
        isSuccess={isSuccess}
      />
    </Page>
  );
}

//  if (isLoading)
//    return (
//      <Page title={PAGE_TITLE}>
//        <Box sx={{ position: "relative" }}>
//          <IsFetching isFetching />
//          <div style={{ textAlign: "center", margin: "auto" }}>
//            Loading . . .{" "}
//          </div>
//        </Box>
//      </Page>
//    );
//  else if (!isLoading && isError) return <Error />;
