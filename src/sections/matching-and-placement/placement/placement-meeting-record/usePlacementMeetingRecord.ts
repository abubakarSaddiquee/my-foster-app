import { useRouter } from "next/router";
import { useState } from "react";

export const usePlacementMeetingRecord = () => {
  const [actionType, setActionType] = useState("");
  const [IsDeleteModal, setIsDeleteModal] = useState(false);
  const route = useRouter();
  console.log("actionType", actionType);

  const handleAdd = () => {
    setActionType("add");
    route.push({ pathname: "/placement/meeting-record/form", query: { action: actionType } });
  };

  return {
    actionType,
    setActionType,
    route,
    handleAdd,IsDeleteModal, setIsDeleteModal
  };
};
