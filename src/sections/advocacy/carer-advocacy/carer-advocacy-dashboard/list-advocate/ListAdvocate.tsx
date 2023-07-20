import React from "react";
import { tableData } from ".";
import { useListAdvocate } from "./useListAdvocate";
import ShareModal from "@root/components/modal/shareModal";
import DeleteModel from "@root/components/modal/DeleteModel";
import AddTabModal from "@root/components/modal/add-tab-modal/AddTabModal";
import SendEmailModal from "@root/components/modal/SendEmailModal/SendEmailModal";
import PhoneModal from "@root/sections/safeguarding/child-protection/agency-safeguarding-officer-contact/phone-modal/PhoneModal";
import CommonContactDirectory from "@root/sections/safeguarding/child-protection/agency-safeguarding-officer-contact/CommonContactDirectory";
import ContactInfoModal from "@root/sections/safeguarding/child-protection/agency-safeguarding-officer-contact/contact-info-modal/ContactInfoModal";

const ListAdvocate = () => {
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
  } = useListAdvocate();
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
        defaultValue={5}
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

export default ListAdvocate;
