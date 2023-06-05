// import { usePolicyVerticalAddNew } from "@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalAddNew/usePolicyVerticalAddNew";
// import { usePolicyVerticalAddNew } from "@root/components/PolicyVerticalTabs/PolicyVerticalForm/PolicyVerticalAddNew/usePolicyVerticalAddNew";
import { usePolicyVerticalAddNew } from "@root/components/policy-vertical-tabs/policy-vertical-form/policy-vertical-add-form/usePolicyVerticalAddForm";
import { useRouter } from "next/router";
import { useState } from "react";


export const useHandbookPoliciesTabs = () => {
    const { currentTab, setCurrentTab, handleNextTab, handlePreviousTab, reset } = usePolicyVerticalAddNew();
    const [isUploadDocumentOpenModal, setIsUploadDocumentOpenModal] = useState(false);
    const [isDeleteOpenModal, setIsDeleteOpenModal] = useState(false);
    const [count, setCount] = useState(0);
    const route = useRouter();

    const handleSubmit = (data: any) => {
        handleNextTab();
        reset();
    };

    const handleUploadedSubmit = () => {
        if (count === 1) {
            route.push("/policies-and-guidelines/handbooks/");
        } else {
            setIsUploadDocumentOpenModal(true);
        }
    };

    const handleAction = (action: any, id: any) => {
        switch (action) {
            case "delete":
                setIsDeleteOpenModal(true);
                break;
            default:
                break;
        }
        console.log(id);
    };
    return {
        currentTab,
        setCurrentTab,
        handlePreviousTab,
        isUploadDocumentOpenModal,
        isDeleteOpenModal,
        setCount,
        handleSubmit,
        handleUploadedSubmit,
        handleAction,
        setIsUploadDocumentOpenModal,
        setIsDeleteOpenModal,
        count,
        route
    };
}
