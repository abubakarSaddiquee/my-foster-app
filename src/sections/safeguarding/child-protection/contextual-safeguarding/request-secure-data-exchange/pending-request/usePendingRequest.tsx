import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import { TableData } from ".";

export const usePendingRequest = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme = useTheme();
  const [cancelDelete, setCancelDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = () => {
    alert("deleted successfully");
    setCancelDelete(!cancelDelete);
  };

  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.secureData,
      id: "secureData",
      cell: (info: any) => info.getValue(),
      header: () => <span>Secure Data Change Request Reference</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.requestType,
      id: "requestType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Request Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.requestStatus,
      id: "requestStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Request Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.ifaaprovalDetail,
      id: "ifaaprovalDetail",
      cell: (info: any) => info.getValue(),
      header: () => (
        <div>
          IFA Aproval Detail<p> Approver/Role/Date</p>
        </div>
      ),
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.laApproval,
      id: "laApproval",
      cell: (info: any) => info.getValue(),
      header: () => <span>LA Approval Detail</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/safeguarding/child-protection/contextual-safeguarding/view-contextual-safeguarging",
                query: { action: "view", id: "" },
              })
            }
          />
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/safeguarding/child-protection/contextual-safeguarding/edit-contextual-safeguarging",
                query: { action: "edit", id: "" },
              })
            }
          />
          <TableAction
            size="small"
            type="delete"
            onClicked={() => setCancelDelete(!cancelDelete)}
          />

          <DeleteModel
            open={cancelDelete}
            onDeleteClick={handleDelete}
            handleClose={() => setCancelDelete(!cancelDelete)}
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return {
    tableHeaderRefTwo,
    router,
    TableData,
    columns,
    theme,
    openModal,
    setOpenModal
  };
};
