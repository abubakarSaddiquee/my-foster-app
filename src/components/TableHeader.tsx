import { forwardRef, useImperativeHandle, useState } from "react";
// @mui
import {
  Box,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
  alpha,
} from "@mui/material";

// @mui icons
import SearchIcon from "@mui/icons-material/Search";
import TableAction from "./TableAction";

import NotificationSetting from '../assets/svg/deregistration/notificationSetting.svg';
import Image from "next/image";

// ----------------------------------------------------------------------
// Variables
let timer: any;

const getDefaultParams = ({ searchKey, selectFilters }: any) => {
  const defaultParams: any = { [searchKey]: "" };
  selectFilters.forEach(({ key }: any) => {
    defaultParams[key] = "";
  });
  return defaultParams;
};

// ----------------------------------------------------------------------

const TableHeader = forwardRef(function TableHeader(
  {
    title = "Table Title",
    searchLabel = "Search",
    searchKey = "search",
    showSelectFilters = false,
    hideSearch = false,
    selectFilters = [],
    selectSize = "small",
    searchSize = "small",
    showAddBtn = false,
    showDeleteBtn = false,
    // share btn
    showShareBtn = false,
    // print btn
    showPrintBtn = false,
    showDiagramBtn = false,
    notificationSettingBtn = false,
    debounceTimeout = 500,
    disabled = false,
    onDelete = () => { },
    onAdd = () => { },
    onShare = () => { },
    onPrint = () => { },
    onChanged = () => { },
    onDiagramBtn = () => { },
  }: any,
  ref
) {
  const [params, setParams] = useState<any>(
    getDefaultParams({ searchKey, selectFilters })
  );

  // Add the functions to the ref
  useImperativeHandle(ref, () => {
    return {
      onCleared() {
        onClear();
      },
    };
  });

  function changeHandler({ target: { name, value } }: any) {
    if (disabled) return;

    setParams((oldParams: any) => {
      const updatedParams = { ...oldParams, [name]: value };

      // Pass filled values to the callback
      let filteredParams: any = {};
      for (let param in updatedParams) {
        const paramValue = updatedParams[param];
        if (paramValue.trim() !== "") filteredParams[param] = paramValue;
      }

      // Use debounce if search is updated
      if (name === searchKey) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          onChanged(filteredParams);
        }, debounceTimeout);
      } else {
        onChanged(filteredParams);
      }

      return updatedParams;
    });
  }

  function onClear() {
    const defaultParams = getDefaultParams({ searchKey, selectFilters });
    setParams(defaultParams);
    onChanged({});
  }

  return (
    <Stack sx={styles.rootBoxStyles}>
      {/* Title and Searchbar */}
      <Stack
        sx={(theme) =>
          styles.headerStackStyles({ theme, showAddBtn, showSelectFilters })
        }
      >
        <Typography component="p" variant="body1" fontWeight="600">
          {title}
        </Typography>
        {!hideSearch && (
          <TextField
            disabled={disabled}
            size={searchSize}
            name={searchKey}
            placeholder={searchLabel}
            value={params[searchKey]}
            onChange={changeHandler}
            sx={styles.searchStyles}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      </Stack>

      {/* Select Fields */}
      {showSelectFilters && (
        <Stack sx={styles.selectStackStyles}>
          {selectFilters.map(({ key, label, options = [] }: any) => (
            <TextField
              disabled={disabled}
              select
              size={selectSize}
              key={key}
              name={key}
              label={label}
              value={params[key]}
              onChange={changeHandler}
              sx={styles.selectFieldStyles}
            >
              {options.map(({ label, value }: any) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
          ))}
        </Stack>
      )}

      {/* Delete Button */}
      {showDeleteBtn && (
        <TableAction disabled={disabled} onClicked={onDelete} type="delete" />
      )}
      {/* Add Button */}
      {showAddBtn && (
        <TableAction disabled={disabled} onClicked={onAdd} type="add" />
      )}

      {/* Share Button */}
      {showShareBtn && (
        <TableAction
          disabled={disabled}
          onClicked={onShare}
          type="headerShare"
        />
      )}

      {/* Print Button */}
      {showPrintBtn && (
        <TableAction disabled={disabled} onClicked={onPrint} type="print" />
      )}

      {/* Diagram Button */}
      {showDiagramBtn && (
        <TableAction disabled={disabled} onClicked={onAdd} type="diagram" />
      )}

      {/* NotificationSetting Button */}
      {notificationSettingBtn && (
        <Box onClick={onAdd} sx={{ cursor: "pointer", padding: "8px" }} >
          <Image src={NotificationSetting} alt="NotificationSetting" height={25} width={25} />
        </Box>

      )}
    </Stack>
  );
});

TableHeader.displayName = "TableHeader";

export default TableHeader;

// ----------------------------------------------------------------------
// Styles

const styles = {
  rootBoxStyles: (theme: any) => ({
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    mb: 2,
    backgroundColor: alpha(theme.palette.primary.main, 0.8),
    padding: theme.spacing(1, 1.8),
    alignItems: "center",
    // gap changing
    gap: theme.spacing(0.5),
    borderRadius: `8px 8px 0 0`,
  }),
  headerStackStyles: ({ theme, showAddBtn, showSelectFilters }: any) => ({
    color: theme.palette.common.white,
    flexDirection: { xs: "column", sm: "row" },
    flexWrap: "wrap",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "space-between",
    gap: theme.spacing(2),
    ...(!showAddBtn && !showSelectFilters && { width: "100%" }),
    ...((showAddBtn || showSelectFilters) && {
      marginRight: { xs: 0, sm: "auto" },
    }),
  }),
  searchStyles: (theme: any) => ({
    width: { xs: "100%", sm: "auto" },
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.common.white
        : theme.palette.grey[800],
    border: "unset",
    boxShadow: "unset",
    borderRadius: "4px",
  }),
  selectStackStyles: (theme: any) => ({
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    width: { xs: "100%", sm: "auto" },
  }),
  selectFieldStyles: (theme: any) => ({
    width: { xs: "100%", sm: "min(100vw, 200px)" },
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.common.white
        : theme.palette.grey[800],
    borderRadius: "4px",
  }),
  addBtnStyles: (theme: any) => ({
    width: "1.6rem",
    height: "1.6rem",
    "&, &:hover": {
      backgroundColor: theme.palette.common.white,
    },
  }),
  addBtnIconStyles: (theme: any) => ({
    color: theme.palette.orange.main,
  }),
  deleteBtnStyles: (theme: any) => ({
    width: "1.6rem",
    height: "1.6rem",
    "&, &:hover": {
      backgroundColor: theme.palette.error.main,
    },
  }),
  deleteBtnIconStyles: (theme: any) => ({
    color: theme.palette.common.white,
  }),
};
