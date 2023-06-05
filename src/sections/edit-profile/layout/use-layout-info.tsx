import { useEffect, useState } from "react";
import { localFormNames, tabs } from "./static-data";
import { enqueueSnackbar } from "notistack";
import { useGetProfileStatusQuery } from "@root/services/update-profile/about-the-candidate/aboutTheCandidateApi";
export const useLayoutInfo = () => {
  const { data, isSuccess, isError, error } = useGetProfileStatusQuery({});
  const [expanded, setExpanded] = useState<string | false>(false);
  const [diffInfoHandler, setDiffInfoHandler] = useState({
    activeFormName: "Personal Info",
  });

  const [tabsItems, settabsItems] = useState([
    { name: "Personal Info", status: "Done" },
    { name: "Address Details", status: "Done" },
    { name: "Photo for ID Badge", status: "Done" },
    { name: "ID Upload (Passport/DL)", status: "Done" },
    { name: "Add Reference", status: "Done" },
    { name: "Training Certificates", status: "Done" },
    { name: "Additional Training Details", status: "Done" },
    { name: "Work Experience", status: "Done" },
    { name: "Specialities", status: "Done" },
    { name: "DBS", status: "Done" },
    { name: "Right to work", status: "Done" },
    { name: "Next Of kin", status: "Done" },
    { name: "Contact Preference", status: "Done" },
    { name: "Employment Status", status: "Done" },
    { name: "Opportunity Declaration", status: "Done" },
    { name: "Additional Docs", status: "Done" },
    { name: "Bank Details", status: "Done" },
    { name: "Immunisation", status: "Done" },
    { name: "Medical Questionnaire", status: "Done" },
    { name: "Add Declaration", status: "Done" },
  ]);
  useEffect(() => {
    if (!isSuccess) return;
    // const localIndexOfForm = localFormNames.indexOf(data?.activeFormName);
    // const formName = localFormNames[localIndexOfForm - 1];
    isSuccess && settabsItems(data?.forms);
    setExpanded("BACKGROUND CHECKS");
  }, [isSuccess, data]);
  const itemClickHand = (itemName: string) => {
    const formStatus = tabsItems.find(({ name }) => name === itemName)?.status;
    // for handling click on last pending form
    const indexOfClickItem = tabsItems.findIndex(
      ({ name }) => itemName === name
    );
    const indexOfFirstPending = tabsItems.findIndex(
      ({ status }) => status === "Pending"
    );
    // for handling click on last pending form

    if (formStatus === "Pending" && indexOfClickItem !== indexOfFirstPending) {
      enqueueSnackbar("Please Fill The Previous Form First", {
        variant: "info",
      });
      return;
    }
    setDiffInfoHandler((pre) => ({ ...pre, activeFormName: itemName }));
  };

  const activateNextForm = () => {
    if (
      localFormNames.indexOf(diffInfoHandler.activeFormName) ===
      localFormNames.length - 2
    )
      return;
    const indexOfCurrentForm = tabsItems.findIndex(
      ({ name }) => name === diffInfoHandler.activeFormName
    );
    let updatedTabs = [...tabsItems];
    // update status of current form
    const updateCurrentForm = { ...updatedTabs[indexOfCurrentForm] };
    updateCurrentForm.status = "Done";
    // update status of next from
    const updateNexttForm = { ...updatedTabs[indexOfCurrentForm + 1] };
    updateNexttForm.status === "Done" ? "Done" : "Pending";
    updatedTabs[indexOfCurrentForm] = updateCurrentForm;
    updatedTabs[indexOfCurrentForm + 1] = updateNexttForm;
    // updatedTabs[indexOfCurrentForm].status = "Done";
    // updatedTabs[indexOfCurrentForm + 1].status === "Done" ? "Done" : "Pending";
    settabsItems(updatedTabs);
    // tabsItems[
    //   localFormNames.indexOf(diffInfoHandler.activeFormName) - 1
    // ].status = "Done1";
    // tabsItems[localFormNames.indexOf(diffInfoHandler.activeFormName)].status =
    //   "inprogress";
    // console.log(localFormNames.indexOf(diffInfoHandler.activeFormName));
    setDiffInfoHandler((pre) => ({
      ...pre,
      activeFormName:
        localFormNames[
          localFormNames.indexOf(diffInfoHandler.activeFormName) + 2
        ],
    }));
  };

  return {
    tabs,
    expanded,
    setExpanded,
    itemClickHand,
    tabsItems,
    diffInfoHandler,
    activateNextForm,
  };
};
