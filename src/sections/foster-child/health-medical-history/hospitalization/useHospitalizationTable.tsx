import React, { useState } from "react";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetHospitalisationInfoListQuery } from "@root/services/foster-child/child-background-info/child-chronology-of-events/HospitalisationInfoAPI";
const useHospitalizationTable = () => {

  const [search, setSearch] = useState("");

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const {
    data: hospitalizationdata,
    isError: hospitalizationIserror,
    isLoading: hospitalizationisLoading,
    isFetching: hospitalizationisFetching,
    isSuccess: hospitalizationisSuccess,
  } = useGetHospitalisationInfoListQuery({ params });
  return {
    hospitalizationdata,
    hospitalizationIserror,
    hospitalizationisLoading,
    hospitalizationisFetching,
    hospitalizationisSuccess,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
};

export default useHospitalizationTable;
