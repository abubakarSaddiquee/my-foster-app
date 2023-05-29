import {
  useGetAllInitialHomeVisitDataQuery,
  useLazyGetAllInitialHomeVisitDataQuery,
} from "@root/services/carer-info/personal-info/initial-home-visit/initialHomeVisit";
import { usePostInitialHomeInterestDataMutation } from "@root/services/carer-info/personal-info/initial-home-visit/interest/interest";
import { enqueueSnackbar } from "notistack";
import { defaultValueInterestForm, interestFormFieldsInfoFunction, interestFormValues } from ".";
import { useRouter } from "next/router";
import useAuth from "@root/hooks/useAuth";

export const useInterestForm = () => {
  const { query } = useRouter();
  const { user }: any = useAuth();
  const interestFormFieldsInfo = interestFormFieldsInfoFunction(
    user?.defaultRole === "FOSTER_CARER"
  );
  const [
    postInitialHomeInterestDataTrigger,
    postInitialHomeInterestDataStatus,
  ] = usePostInitialHomeInterestDataMutation();
  const [getAllInitialHomeVisitDataTrigger, getAllInitialHomeVisitDataStatus] =
    useLazyGetAllInitialHomeVisitDataQuery();
  const params = {
    value: "interest",
    fosterCarerId:
      query?.fosterCarerId || "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
  };

  const dataParameter = { params };

  const setInterestDefaultValue = async () => {
    const { data, isError } = await getAllInitialHomeVisitDataTrigger(
      dataParameter
    );
    console.log(getAllInitialHomeVisitDataStatus);
    if (isError) {
      return interestFormValues;
    }
    console.log(data);
    return defaultValueInterestForm(
      !!Object.keys(data)?.length ? data : undefined
    );
  };
  const submitInterestForm = async (data: any) => {
    const putParams = {
      fosterCarerId:
        query?.fosterCarerId || "1dde6136-d2d7-11ed-9cf8-02752d2cfcf8",
    };
    const putDataParameter = { params: putParams, body: data };
    console.log({ data });
    try {
      const res: any = await postInitialHomeInterestDataTrigger(
        putDataParameter
      ).unwrap();
    } catch (error: any) {
      const errMsg = error?.data?.message;
      enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
    }
  };
  return {
    submitInterestForm,
    setInterestDefaultValue,
    getAllInitialHomeVisitDataStatus,
    postInitialHomeInterestDataStatus,
    interestFormFieldsInfo
  };
};
