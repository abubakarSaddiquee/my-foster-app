import Layout from "@root/layouts";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import { HealthForm } from "@root/sections/carer-info/personal-info/form-f/health";
import {
  usePutHealthApplication1Mutation,
  usePutHealthApplication2Mutation,
} from "@root/services/carer-info/personal-info/form-f/healthApplicationApi";
import { enqueueSnackbar } from "notistack";
import useAuth from "@root/hooks/useAuth";
import { useFormFQuery } from "@root/services/carer-info/personal-info/form-f/form-f-all";

// Constants
const PAGE_TITLE = "Health";

Health.getLayout = function getLayout(page: any) {
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
          name: "Health",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function Health() {
  //---------------getting Form Data-----------------//
  const { user }: any = useAuth();
  const [skip, setSkip] = useState(true);
  const { data: healthApplication1 } = useFormFQuery("healthApplication1", {
    skip,
  });
  const { data: healthApplication2 } = useFormFQuery("healthApplication2", {
    skip,
  });
  //---------------=================-----------------//
  //-----------------------------------APIs------------------------------------
  const [
    putHealthApplication1Data,
    { isLoading: isLoading1, isError: isError1, isSuccess: isSuccess1 },
  ] = usePutHealthApplication1Mutation();
  const [
    putHealthApplication2Data,
    { isLoading: isLoading2, isError: isError2, isSuccess: isSuccess2 },
  ] = usePutHealthApplication2Mutation();
  //--------------------recieve functions----------------------------------//
  const receiveDataHandlerApplicant1 = async (formData: any) => {
    try {
      const res: any = await putHealthApplication1Data({
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

  const receiveDataHandlerApplicant2 = async (formData: any) => {
    try {
      const res: any = await putHealthApplication2Data({
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
      <HorizaontalTabs tabsDataArray={["Applicant 1", "Applicant 2"]}>
        <HealthForm
          formData={receiveDataHandlerApplicant1}
          isLoading={isLoading1}
          isError={isError1}
          isSuccess={isSuccess1}
        />
        <HealthForm
          formData={receiveDataHandlerApplicant2}
          isLoading={isLoading2}
          isError={isError2}
          isSuccess={isSuccess2}
        />
      </HorizaontalTabs>
    </Page>
  );
}
