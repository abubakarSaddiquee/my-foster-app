import { useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { defaultValues, formSchema, formatters } from "./index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useLazySingleReferenceOneListQuery,
  usePatchReferenceOneListMutation,
  usePostReferenceOneListMutation,
} from "@root/services/carer-info/background-checks/statutory-check-list/reference-1/reference1Api";
export const useReferenceOneForm = (action: any, id: any) => {
  const router = useRouter();
  const theme: any = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFetching, setIsFetching] = useState(false);

  //API For Getting Single Details
  const [getReferenceOneList] = useLazySingleReferenceOneListQuery();
  //API For Reference One Form
  const [postReferenceOneList] = usePostReferenceOneListMutation();
  //API For Patch Reference One List
  const [editReferenceOneList] = usePatchReferenceOneListMutation();

  //GET DEFAULT VALUE HANDLER
  const getDefaultValue = async () => {
    if (action === "view" || action === "edit") {
      const { data, isError } = await getReferenceOneList(id, true);
      setIsLoading(false);
      if (isError) {
        enqueueSnackbar("Error occured", { variant: "error" });
        return defaultValues;
      }
      const responseData = { ...data.data };
      for (const key in responseData) {
        const value = responseData[key];
        if (formatters[key]) responseData[key] = formatters[key](value);
      }
      return responseData;
    } else {
      setIsLoading(false);
      return defaultValues;
    }
  };
  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: getDefaultValue,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  //Onsubmit Function
  const onSubmit = async (data: any) => {
    if (action === "add") {
      setIsFetching(true);
      postReferenceOneList(data)
        .unwrap()
        .then((res: any) => {
          setIsFetching(false);
          enqueueSnackbar("Information Added Successfully", {
            variant: "success",
          });
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list/reference-1",
            query: { action: "edit", id: `${res?.data.id}` },
          });
        })
        .catch((error: any) => {
          setIsFetching(false);
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push(
            "/carer-info/background-checks/statutory-checks-list/reference-1"
          );
        });
    } else if (action === "edit") {
      setIsFetching(true);
      const formData = {
        id,
        ...data,
      };
      editReferenceOneList(formData)
        .unwrap()
        .then((res: any) => {
          enqueueSnackbar("Information Edited Successfully", {
            variant: "success",
          });
          router.push(
            "/carer-info/background-checks/statutory-checks-list/reference-1"
          );
          setIsFetching(false);
        })
        .catch((error: any) => {
          const errMsg = error?.data?.message;
          enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
          router.push(
            "/carer-info/background-checks/statutory-checks-list/reference-1"
          );
          setIsFetching(false);
        });
    } else {
      return null;
    }
  };
  return {
    router,
    onSubmit,
    isLoading,
    getDefaultValue,
    theme,
    handleSubmit,
    methods,
    isFetching,
    isSubmitting,
  };
};
