import React from "react";
import { tableData } from ".";
import PhoneModal from "./phone-modal/PhoneModal";
import ShareModal from "@root/components/modal/shareModal";
import DeleteModel from "@root/components/modal/DeleteModel";
import CommonContactDirectory from "./CommonContactDirectory";
import ContactInfoModal from "./contact-info-modal/ContactInfoModal";
import AddTabModal from "@root/components/modal/add-tab-modal/AddTabModal";
import { useAgencySafeguardingOfficer } from "./useAgencySafeguardingOfficer";
import SendEmailModal from "@root/components/modal/SendEmailModal/SendEmailModal";

const AgencyContactDirectory = () => {
  const {
    columns,
    openModal,
    handleOpenModal,
    editModal,
    handleEditModal,
    shareModal,
    handleShareModal,
    emailModal,
    handleEmailModal,
    deleteModal,
    handleDeleteModal,
    phoneModal,
    handlePhoneModal,
  } = useAgencySafeguardingOfficer();
  return (
    <>
      <CommonContactDirectory
        tableHeaderProps={{ title: "Contact Directory", showAddBtn: true, onAdd: handleEditModal }}
        disableBoxShadow={true}
        data={[
          {
            name: "Foster Carers",
            tableData: tableData,
            tableColumns: columns,
          },
          {
            name: "Agency Key Roles",
            tableData: tableData,
            tableColumns: columns,
          },
          {
            name: "Safeguarding Role",
            tableData: tableData,
            tableColumns: columns,
          },
          {
            name: "Le Safeguarding Role",
            tableData: tableData,
            tableColumns: columns,
          },
          {
            name: "EDT",
            tableData: tableData,
            tableColumns: columns,
          },
          {
            name: "Child Advocate",
            tableData: tableData,
            tableColumns: columns,
          },
          
        ]}
        defaultValue={2}
        handleAddTab={handleOpenModal}
        tableProps={{
          isSuccess: true,
        }}
      />
      {openModal && <AddTabModal open={openModal} onClose={handleOpenModal} onSubmit={(value: string) => {}} />}
      {editModal && <ContactInfoModal open={editModal} onClose={handleEditModal} />}
      {shareModal && <ShareModal open={shareModal} data={[{ email: "Adadsa@gmail.com" }]} handleClose={handleShareModal} />}
      {emailModal && <SendEmailModal open={emailModal} handleClose={handleEmailModal} />}
      {deleteModal && <DeleteModel open={deleteModal} handleClose={handleDeleteModal} />}
      {phoneModal && <PhoneModal open={phoneModal} handleClose={handlePhoneModal} />}
    </>
  );
};

export default AgencyContactDirectory;
