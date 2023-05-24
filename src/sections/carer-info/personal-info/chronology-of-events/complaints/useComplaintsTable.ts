import { useTableParams } from "@root/hooks/useTableParams";
import {
  useComplaintsListQuery,
  useDeleteComplaintListMutation,
} from "@root/services/carer-info/personal-info/chronology-of-events/complaints-api/ComplaintsApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { useRef } from "react";

export const useComplaintsTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  //API for getting Complaint Details
  const { data, isError, isLoading, isFetching, isSuccess }: any =
    useComplaintsListQuery({ search: search });
  //API for Deleting Complaint
  const [deleteList] = useDeleteComplaintListMutation();
  //API For Deleting Document List
  const listDeleteHandler = (id: any) => {
    deleteList(id)
      .unwrap()
      .then((res: any) => {
        enqueueSnackbar("Information Deleted Successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        const errMsg = error?.data?.message;
        enqueueSnackbar(errMsg ?? "Error occured", { variant: "error" });
      });
  };

  const complaints = data?.data?.complaints;
  const meta = data?.meta;

  return {
    router,
    tableHeaderRefTwo,
    isLoading,
    headerChangeHandler,
    complaints,
    isFetching,
    isError,
    isSuccess,
    meta,
    listDeleteHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
  };
};
