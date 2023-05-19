import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UserProfile from "../../../../../assets/img/userProfile.png";
import UserPhone from "../../../../../assets/svg/safeguarding/userPhone.svg";
import PickAnApp from "../../../../../assets/svg/safeguarding/pickAnApp.svg";

const PhoneModal = (props: any) => {
  const { setIsPhoneModal } = props;

  const handleClose = () => {
    setIsPhoneModal(false);
  };

  return (
    <Box sx={useStyles.modalWrapper}>
      <Box sx={useStyles.header}>
        <Box sx={useStyles.imgWrap}>
          <Image src={UserProfile} alt="User Profile" width={120} height={120} />
        </Box>
        <CloseIcon sx={useStyles.closeIcon} onClick={handleClose} />
      </Box>
      <Box sx={{ paddingTop: "90px", paddingX: "12px" }}>
        <Typography sx={useStyles.heading}>Make a Call from</Typography>
      </Box>
      <Box sx={useStyles.callWrapper}>
        <Image src={UserPhone} alt="User Phone" width={18} height={30} />
        <Typography sx={useStyles.title}>Redmi Note 10</Typography>
      </Box>
      <Box sx={useStyles.callWrapper}>
        <Image src={PickAnApp} alt="Pick An App" width={18} height={30} />
        <Typography sx={useStyles.title}>Pick an app</Typography>
      </Box>
    </Box>
  );
};

export default PhoneModal;

//---------------------------------------------------------------------------

const useStyles = {
  modalWrapper: {
    position: "absolute",
    width: 100,
    minWidth: 260,
    right: -200,
    top: 10,
    animation: "$slideIn 0.5s ease-out forwards",
    border: "1px solid #6E7191",
    background: "#FFFAFC",
    borderRadius: "8px 8px 0px 0px",
    height: "100%",
    maxHeight: "330px",
  },
  "@keyframes slideIn": {
    from: {
      transform: "translateX(100%)",
    },
    to: {
      transform: "translateX(0)",
    },
  },
  header: {
    width: "100%",
    padding: "40px 0",
    backgroundColor: "#4E4B66",
    positon: "relative",
    display: "flex",
    justifyContent: "center",
  },
  imgWrap: {
    position: "absolute",
    top: 30,
  },
  closeIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    color: "#fff",
    cursor: "pointer",
  },
  heading: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "24px",
  },
  callWrapper: {
    display: "flex",
    alignItems: "center",
    paddingInline: "30px",
    marginTop: "15px",
    gap: "12px",
  },
  title: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "22px",
  },
};