import React from "react";
import { Button, Grid, Menu, MenuItem, Stack } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AccordianList from "@root/components/AccordianList";
import { carerNameData, statutoryMedicalListAccordionData } from ".";
import { useStatutoryMedicalList } from "./useStatutoryMedicalList";

const StatutoryMedicalList = () => {
  const {
    open,
    handleCarerName,
    carerType,
    setCarerType,
    carerNameMenuItemClick,
  } = useStatutoryMedicalList();
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="end"
        gap={2}
      >
        {/* Carer Type Dropdown */}
        {/* Carer Name Dropdown */}
        <Button variant="contained" sx={{ px: 0 }}>
          <LocalPrintshopIcon />
        </Button>
        <Button variant="contained" sx={{ px: 0 }}>
          <OpenInNewIcon />
        </Button>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleCarerName}
          startIcon={<SwapVertIcon />}
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
          sx={{ px: 1 }}
        >
          Carer Name
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={carerType}
          open={open}
          onClose={() => setCarerType(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {carerNameData.map((item: any) => (
            <MenuItem
              key={item.value}
              onClick={() => carerNameMenuItemClick(item)}
              sx={{
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              {item.value}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
      {/* Global Accordian Component */}
      <Grid container>
        {statutoryMedicalListAccordionData.map((item: any) => (
          <Grid item xs={12} key={item.id}>
            <AccordianList title={item.title} component={item.component} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default StatutoryMedicalList;
