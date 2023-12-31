import { useTableParams } from "@root/hooks/useTableParams";
import {
  useDeleteRecordingsListMutation,
  useRecordingListQuery,
} from "@root/services/foster-child/child-day-log/diary-recordings/DiaryRecordingsApi";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";
import React, { useRef } from "react";

export const useDiaryRecordingsTable = () => {
  const [search, setSearch] = React.useState("");
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const { fosterChildId } = router.query;
  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  //GET API For Car Insurance List
  const {
    data: recordingList,
    isError: recordingsListError,
    isLoading: recordingsListIsloading,
    isFetching: recordingsListIsfetching,
    isSuccess: recordingsListIsSuccess,
  }: any = useRecordingListQuery({
    params: {
      fosterChildId: fosterChildId,
      search: search,
    },
  });

  //Getting API data and Meta
  const recordingListData = recordingList?.data?.child_diary_recordings;
  const meta = recordingList?.data?.meta;

  const [deleteList] = useDeleteRecordingsListMutation();
  //DELETE API For Allegation List
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

  return {
    router,
    tableHeaderRefTwo,
    recordingsListIsloading,
    recordingListData,
    recordingsListIsfetching,
    recordingsListError,
    recordingsListIsSuccess,
    meta,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
  };
};
