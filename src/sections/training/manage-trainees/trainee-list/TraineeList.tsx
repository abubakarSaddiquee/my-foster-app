import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PrintIcon from "@mui/icons-material/Print";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CustomAccordian from "@root/components/CustomAccordian";
import TaineeListTable from "./tainee-list-table/TaineeListTable";
import TraineeListModal from "./trainee-list-modal/TraineeListModal";
import { sortingData } from ".";
import { useTraineeList } from "./useTraineeList";

const TraineeLists = () => {
  const {
    items,
    addRow,
    anchorEl,
    editRowId,
    setEditRowId,
    modalType,
    setModalType,
    handleChange,
    handleClick,
    handleClose,
    addRowHandler,
  } = useTraineeList();

  return (
    <Card sx={{ p: 2 }}>
      <Box>
        <Grid spacing={2} container>
          <Grid item xl={3} lg={4} md={5} sm={5} xs={12}>
            <FormControl sx={{ width: "100%" }}>
              <TextField
                size="medium"
                name="{searchKey}"
                placeholder="Search"
                value={items}
                onChange={handleChange}
                sx={styles.searchStyles}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xl={9} lg={8} md={7} sm={7} xs={12}>
            <Stack
              direction={{
                xl: "row",
                lg: "row",
                md: "row",
                xs: "column",
                sm: "row",
              }}
              justifyContent="end"
              spacing={1}
            >
              <Button variant="contained">
                <PrintIcon sx={{ fontSize: "25px" }} />
              </Button>

              <Button
                variant="contained"
                onClick={handleClick}
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                size="large"
              >
                <Stack direction="row" justifyContent="center" spacing={0.5}>
                  <SwapVertIcon />
                  <Box>Sort By</Box>
                  <ArrowDropDownIcon />
                </Stack>
              </Button>
              <Menu
                id="dropdown-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
              </Menu>

              <Button
                size="large"
                variant="contained"
                onClick={() => {
                  setModalType({
                    ...modalType,
                    type: "Add",
                    value: null,
                  });
                }}
              >
                Add Group
              </Button>
            </Stack>
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <CustomAccordian
              data={addRow}
              showBtn
              handleTitleEdit={(item: any) => {
                setEditRowId(item);
                setModalType({
                  ...modalType,
                  type: "Edit",
                });
              }}
            />
          </Grid>
        </Grid>

        <TraineeListModal
          open={modalType.type}
          editRowId={editRowId}
          addRowHandler={addRowHandler}
          handleClose={() => {
            setModalType({ type: "", value: null });
          }}
        />
      </Box>
    </Card>
  );
};

export default TraineeLists;

const styles = {
  searchStyles: (theme: any) => ({
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.common.white
        : theme.palette.grey[800],
    border: "unset",
    boxShadow: "unset",
    borderRadius: "4px",
    width: "100%",
  }),
};
