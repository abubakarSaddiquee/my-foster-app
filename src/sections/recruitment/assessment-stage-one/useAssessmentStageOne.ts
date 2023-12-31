import { useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { ASSESSMENTSTAGEONEDATA } from ".";
import { useGetStageOneStatusQuery } from "@root/services/recruitment/assessment-stage-one/assessmentStageOneApi";

export const useAssessmentStageOne = () => {
  const id = "4f7512fb-2916-451b-8240-97f529ded73d";

  const theme: any = useTheme();
  const [assessmentStageOneData, setAssessmentStageOneData] = React.useState(
    ASSESSMENTSTAGEONEDATA
  );
  
  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetStageOneStatusQuery(id);

  useEffect(() => {
    setAssessmentStageOneData(
      ASSESSMENTSTAGEONEDATA?.map((item: any) => ({
        ...item,
        status: data?.data?.[item?.textForApi],
      }))
    );
  }, [data]);

  const [openIdForInfo, setOpenIdForInfo] = React.useState<any>();
  const [formDialogId, setFormDialogId] = React.useState<any>();
  return {
    theme,
    openIdForInfo,
    formDialogId,
    setFormDialogId,
    setOpenIdForInfo,
    assessmentStageOneData,
    setAssessmentStageOneData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
  };
};
