import { Box, Button, Checkbox, Grid, Modal, Stack } from "@mui/material";

// RHF
import { useForm, useFormContext, useWatch } from "react-hook-form";

// Yub
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// @mui icons
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { type } from "os";
import {
  FormProvider,
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";

const ANON_FUNC = () => {};

const FIELDS_OBJ: any = {
  textField: RHFTextField,
  datePicker: RHFDatePicker,
  selectField: RHFSelect,
  checkbox: RHFCheckbox,
  upload: RHFUploadFile,
};

// ----------------------------------------------------------------------
// Modal
function TableFormModal(props: any) {
  const {
    onAccept = ANON_FUNC,
    onCancel = ANON_FUNC,
    onAdd = ANON_FUNC,
    onUpdate = ANON_FUNC,
    columns = [],
    defaultValues = {},
    type: actionType = "Add",
    disabled = actionType === "View",
  } = props;

  const schema: any = {};

  for (const column of columns) {
    if (column.validation) {
      schema[column.key] = column.validation(Yup);
    }
  }

  const formSchema = Yup.object().shape(schema);

  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: any) => {
    if (actionType.toLowerCase() === "add") onAdd(data);
    else if (actionType.toLowerCase() === "update") onUpdate(data);
  };

  const onAcceptHandler = (data: any) => {
    handleSubmit(onSubmit)();
    onAccept();
  };

  return (
    <Modal
      open
      onClose={onCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
    >
      <Box sx={styles.root}>
        <FormProvider methods={methods}>
          <Grid container spacing={2}>
            {columns.map(({ inputType, key, label, ...other }: any) => {
              const Component = FIELDS_OBJ[inputType];
              return (
                <Grid key={key} item xs={12} md={6} >
                  <Component name={key} label={label} disabled={disabled} sx={{width:"100%"}}/>
                </Grid>
              );
            })}
          </Grid>
          <Box sx={styles.actionBtnBox}>
            {!disabled && (
              <Button
                onClick={onAcceptHandler}
                disabled={!isValid}
                sx={styles.btnSuccess}
              >
                {actionType}
              </Button>
            )}

            <Button onClick={onCancel} sx={styles.btnError}>
              Cancel
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </Modal>
  );
}

// Form Table

export default function EmailMarketingTable(props: any) {
  const { disabled, tableKey, columns: tableColumns } = props;
  const { setValue, getValues } = useFormContext();
  const tableData = useWatch({ name: tableKey }) ?? [];
  const [actionData, setActionData] = useState<any>(null);
  const [viewModal, setViewModal] = useState(false);

  /* Set up formatters for updating the display data */
  const formatters: any = {};
  for (const column of tableColumns) {
    if (column.format) formatters[column.key] = column.format;
  }

  /* COLUMNS */
  let columns = tableColumns.map(({ key, label }: any) => {
    return {
      accessorFn: (row: any) => {
        if (formatters[key]) return formatters[key](row[key]);

        return row[key];
      },
      id: label,
      cell: (info: any) => info.getValue(),
      header: () => <span>{label}</span>,
    };
  });
  columns.push({
    id: "actions",
    cell: (info: any) => (
      <Box
        sx={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <>
          <TableAction
            type="edit"
            onClicked={(id: number) => onViewHandler(info.row.index, "Update")}
          />
          <TableAction
            type="delete"
            onClicked={(id: number) => onDeleted(info.row.index)}
          />
        </>
      </Box>
    ),

    header: () => <span>actions</span>,
    isSortable: false,
  });
  columns.unshift({
    id: "srNo",
    header: ({ table, row }: any) => {
      console.log(table.getSelectedRowModel().flatRows);
      return (
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
          <Box>Sr.No</Box>
        </Box>
      );
    },
    cell: ({ row, table }: any) => (
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          marginLeft: "0.8rem",
        }}
      >
        <Checkbox
          disabled={row?.original?.Assigned}
          checked={row?.original?.Assigned ? false : row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
        <Box>{parseInt(row.id) + 1}</Box>
      </Box>
    ),
  });

  /* CANCEL HANDLER */
  function onCancelHandler() {
    setActionData(null);
    setViewModal(false);
  }

  /* ADD HANDLER */
  function onAddHandler() {
    const defaultValues: any = {};

    tableColumns.forEach((column: any) => {
      defaultValues[column.key] = column.defaultValue ?? "";
    });

    setActionData({
      type: "Add",
      defaultValues,
    });
  }

  function onAdded(data: any) {
    setValue(tableKey, [...getValues()[tableKey], data]);
    setActionData(null);
  }

  /* DELETE HANDLER */
  function onDeleted(index: number) {
    const tableRowData = getValues()[tableKey];
    const leftArr = tableRowData.slice(0, index);
    const rightArr = tableRowData.slice(index + 1);
    setValue(tableKey, [...leftArr, ...rightArr]);
  }

  /* UPDATE and VIEW HANDLER */

  function onViewHandler(index: any, actionType: string = "View") {
    const tableRowData = getValues()[tableKey][index];

    setActionData({
      type: actionType,
      index,
      defaultValues: tableRowData,
    });
  }

  function onUpdated(data: any) {
    const tableRowData = getValues()[tableKey];
    const { index } = actionData;
    tableRowData[index] = data;

    setValue(tableKey, tableRowData);
    setActionData(null);
  }

  return (
    <div>
      {viewModal && (
        <TableFormModal
          disabled={disabled}
          columns={tableColumns}
          onCancel={onCancelHandler}
          {...actionData}
        />
      )}

      {actionData && (
        <TableFormModal
          columns={tableColumns}
          onAdd={onAdded}
          onUpdate={onUpdated}
          onCancel={onCancelHandler}
          {...actionData}
        />
      )}
      <CustomTable
        data={tableData}
        columns={columns}
        isPagination={false}
        isSuccess={true}
      />

      <Button variant="text" startIcon={<AddIcon />} onClick={onAddHandler}>
        Add
      </Button>
    </div>
  );
}

//-----------------------------------------------------------------------//
// styles
const styles = {
  root: (theme: any) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(95vw, 40rem)",
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
  actionBtnBox: (theme: any) => ({
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    mt: 2,
  }),
  btnError: (theme: any) => ({
    bgcolor: theme.palette.error.darker,
    color: theme.palette.primary.contrastText,
    "&:hover": { bgcolor: theme.palette.error.darker },
  }),
  btnSuccess: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minWidth: "100px",
    "&:hover": { bgcolor: theme.palette.primary.main },
    "&:disabled": {
      backgroundColor: theme.palette.grey[400],
    },
  }),
};
