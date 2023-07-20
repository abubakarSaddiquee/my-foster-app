import React, { Fragment } from "react";
import Image from "next/image";
import MoveModal from "./move-modal/MoveModal";
import NewGroupForm from "./new-group-form/NewGroupForm";
import ShareModal from "@root/components/modal/shareModal";
import DeleteModel from "@root/components/modal/DeleteModel";
import { SearchPeopleData, checkedIcon, icon, tableData } from ".";
import { useManageContactDirectory } from "./useManageContactDirectory";
import AddTabModal from "@root/components/modal/add-tab-modal/AddTabModal";
import SendEmailModal from "@root/components/modal/SendEmailModal/SendEmailModal";
import { Autocomplete, Checkbox, TextField, Grid, Typography, Card, Box } from "@mui/material";
import PhoneModal from "@root/sections/safeguarding/child-protection/agency-safeguarding-officer-contact/phone-modal/PhoneModal";
import CommonContactDirectory from "@root/sections/safeguarding/child-protection/agency-safeguarding-officer-contact/CommonContactDirectory";
import ContactInfoModal from "@root/sections/safeguarding/child-protection/agency-safeguarding-officer-contact/contact-info-modal/ContactInfoModal";

// =========================================================================

const ManageConatctDirectory = () => {
  const {
    widgetsArray,
    columns,
    openModal,
    handleOpenModal,
    shareModal,
    handleShareModal,
    emailModal,
    handleEmailModal,
    deleteModal,
    handleDeleteModal,
    phoneModal,
    handlePhoneModal,
    handleOpenChange,
    newContact,
    handleContactModal,
    newGroup,
    moveTo,
    handleMoveModal,
    handleGroupModal,
    disableModal,
  } = useManageContactDirectory();

  return (
    <>
      <Box sx={style.search}>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={SearchPeopleData}
          disableCloseOnSelect
          getOptionLabel={(option) => option.title}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
              {option.title}
            </li>
          )}
          style={{ width: 500, backgroundColor: "#ffff" }}
          renderInput={(params) => <TextField {...params} label="Search People" />}
        />
      </Box>
      <Grid container spacing={1} my={2}>
        {widgetsArray.map((obj) => (
          <Grid item xl={2} md={4} sm={6} xs={12} key={obj.id}>
            <Card sx={style.card}>
              <Box display={"flex"} justifyContent={"space-around"} gap={4} alignItems={"center"} height={"100px"}>
                {obj.subArray?.map((sub: any) => (
                  <Fragment key={sub.title}>
                    <Box
                      onClick={() => handleOpenChange(obj.id, sub)}
                      sx={{ cursor: "pointer", textAlign: "center", pointerEvents: sub.disable ? "none" : "", opacity: sub.disable ? 0.5 : 1 }}
                    >
                      <Image src={sub.icon} alt="icon" style={{ margin: "0 auto" }} />
                      <Typography style={style.title}>{sub.title}</Typography>
                    </Box>
                  </Fragment>
                ))}
              </Box>
              <Typography sx={style.actions(obj.action)}>{obj.action}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CommonContactDirectory
        disableBoxShadow={true}
        data={[
          {
            name: "Foster Carers",
            tableData: tableData,
            tableColumns: columns,
          },
          {
            name: "Employees",
            tableData: tableData,
            tableColumns: columns,
          },
          {
            name: "Agency Key Roles",
            tableData: tableData,
            tableColumns: columns,
          },
          {
            name: "Third Parties",
            tableData: tableData,
            tableColumns: columns,
          },
          {
            name: "Agency Safeguarding Roles",
            tableData: tableData,
            tableColumns: columns,
          },
          {
            name: "La Safeguarding Role",
            tableData: tableData,
            tableColumns: columns,
          },
          {
            name: "EDT",
            tableData: tableData,
            tableColumns: columns,
          },
        ]}
        handleAddTab={handleOpenModal}
        tableProps={{
          isSuccess: true,
        }}
      />
      {openModal && <AddTabModal open={openModal} onClose={handleOpenModal} onSubmit={(value: string) => {}} />}
      {newContact && <ContactInfoModal open={newContact} onClose={handleContactModal} disabled={disableModal} />}
      {shareModal && <ShareModal open={shareModal} data={[{ email: "Adadsa@gmail.com" }]} handleClose={handleShareModal} />}
      {emailModal && <SendEmailModal open={emailModal} handleClose={handleEmailModal} />}
      {deleteModal && <DeleteModel open={deleteModal} handleClose={handleDeleteModal} />}
      {phoneModal && <PhoneModal open={phoneModal} handleClose={handlePhoneModal} />}
      {newGroup && <NewGroupForm open={newGroup} onClose={handleGroupModal} />}
      {moveTo && <MoveModal open={moveTo} onClose={handleMoveModal} />}
    </>
  );
};
export default ManageConatctDirectory;

// =================================================================

const style = {
  search: {
    display: "flex",
    justifyContent: "end",
  },
  card: {
    p: 1,
    height: "100%",
    borderRadiud: "10px",
    boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.20)",
  },
  title: {
    marginTop: "5px",
    fontSize: "12px",
    fontWeight: 500,
  },
  actions: (action: string) => ({
    fontSize: "14px",
    fontWeight: 600,
    textAlign: "center",
    color: action === "Actions" ? "#0E918C" : "#CACACA",
  }),
};
