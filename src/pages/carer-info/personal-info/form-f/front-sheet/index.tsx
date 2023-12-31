import Layout from "@root/layouts";
import { FrontSheetForm } from "@root/sections/carer-info/personal-info/form-f/front-sheet";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useFrontSheetMutation } from "@root/services/carer-info/personal-info/form-f/frontSheetApi";
import { enqueueSnackbar } from "notistack";
import useAuth from "@root/hooks/useAuth";
import { useFormFQuery } from "@root/services/carer-info/personal-info/form-f/form-f-all";

// Constants
const PAGE_TITLE = "Form F";

FrontSheet.getLayout = function getLayout(page: any) {
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
          name: "Front Sheet",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function FrontSheet() {
  const { user }: any = useAuth();
  const [skip, setSkip] = useState(true);
  const { data } = useFormFQuery("frontSheet", { skip });

  console.log(user.defaultRole);
  console.log("data ata h data jata h", data);

  const [postFrontSheetData, { isLoading, isError, isSuccess }] =
    useFrontSheetMutation();
  const submitDataHandler = async (formData: any) => {
    try {
      const res: any = await postFrontSheetData({
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
      <FrontSheetForm
        formData={submitDataHandler}
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
      />
    </Page>
  );
}
