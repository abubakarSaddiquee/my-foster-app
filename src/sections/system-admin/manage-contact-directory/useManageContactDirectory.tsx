import { useState } from "react";
import Image from "next/image";
import { Box, Checkbox } from "@mui/material";
import { systemAdminWidgets, tableActionIcons } from ".";
import UkFlag from "../../../assets/svg/safeguarding/uk-flag.svg";

// =======================================================

export const useManageContactDirectory = () => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [widgetsArray, setWidgetsArray] = useState<any[]>(systemAdminWidgets);
  const [openModal, setOpenModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);
  const [disableModal, setDisableModal] = useState(false);

  const [newContact, setNewContact] = useState(false);
  const [newGroup, setNewGroup] = useState(false);
  const [moveTo, setMoveTo] = useState(false);

  const handleContactModal = () => setNewContact(!newContact);
  const handleGroupModal = () => setNewGroup(!newGroup);
  const handleMoveModal = () => setMoveTo(!moveTo);

  const handleOpenModal = () => setOpenModal(!openModal);
  const handleShareModal = () => setShareModal(!shareModal);
  const handleEmailModal = () => setEmailModal(!emailModal);
  const handleDeleteModal = () => setDeleteModal(!deleteModal);
  const handlePhoneModal = () => setPhoneModal(!phoneModal);

  const handleTableAction = (type: string, id: string) => {
    switch (type) {
      case "edit":
        handleContactModal();
        setDisableModal(false);
        break;
      case "share":
        handleShareModal();
        break;
      case "email":
        handleEmailModal();
        break;
      case "delete":
        handleDeleteModal();
        break;
      case "phone":
        handlePhoneModal();
        break;
      case "view":
        handleContactModal();
        setDisableModal(true);
        break;

      default:
        break;
    }
  };

  const updatedWidgets = (event: any, data: any) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, data.id]);
      if (selectedRows.length >= 1) {
        const newData = systemAdminWidgets.map((widgets) => {
          return {
            id: widgets?.id,
            subArray: [...widgets?.subArray].map((sub) => {
              if (widgets?.id === "3") {
                return {
                  icon: sub?.icon,
                  title: sub?.title,
                  disabled: false,
                };
              }
              return { ...sub };
            }),
            action: widgets?.action,
          };
        });
        setWidgetsArray(newData);
      }
    } else {
      setSelectedRows(selectedRows.filter((id) => id !== data?.id));
      if (selectedRows.length <= 2) {
        setWidgetsArray(systemAdminWidgets);
      }
    }
  };

  const handleOpenChange = (id: string, item: any) => {
    switch (item.title) {
      case "New Contact":
        handleContactModal();
        break;
      case "New Group":
        handleGroupModal();
        break;
      case "Move":
        handleMoveModal();
        break;
      case "Delete":
        handleDeleteModal();
        break;
      default:
        break;
    }
  };

  const columns = [
    {
      id: "select",
      // header: ({ table, row }: any) => {
      //   console.log(table.getSelectedRowModel().flatRows);
      //   return (
      //     <Box>
      //       <Checkbox checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />
      //     </Box>
      //   );
      // },
      cell: ({ row, table }: any) => (
        <Box>
          <Checkbox
            disabled={row?.original?.Assigned}
            checked={selectedRows.includes(row?.original?.id) ? true : false}
            onChange={(e: any) => {
              // row.getToggleSelectedHandler();
              updatedWidgets(e, row?.original);
            }}
            // onClick={() => updatedWidgets(row?.original)}
          />
        </Box>
      ),
    },
    {
      accessorFn: (row: any) => row.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.role,
      id: "role",
      cell: (info: any) => info.getValue(),
      header: () => <span>Role</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.safeguardingRole,
      id: "safeguardingRole",
      cell: (info: any) => info.getValue(),
      header: () => <span>Department</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.branch,
      id: "branch",
      cell: (info: any) => info.getValue(),
      header: () => <span>Branch</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.businessPhone,
      id: "businessPhone",
      cell: (info: any) => info.getValue(),
      header: () => <span>Business Phone</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.email,
      id: "email",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.mobile,
      id: "mobile",
      cell: (info: any) => info.getValue(),
      header: () => <span>Mobile</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.company,
      id: "company",
      cell: (info: any) => info.getValue(),
      header: () => <span>Company</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.address,
      id: "address",
      cell: (info: any) => info.getValue(),
      header: () => <span>Address</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.postCode,
      id: "postCode",
      cell: (info: any) => info.getValue(),
      header: () => <span>Postcode</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.country,
      id: "country",
      cell: (info: any) => <Image src={UkFlag} alt="img" />,
      header: () => <span>Country</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.colorCode,
      id: "colorCode",
      cell: (info: any) => <Box sx={{ backgroundColor: info.getValue() ? info.getValue() : "#b0d6e3", height: "1.5rem", width: "1.5rem" }} />,
      header: () => <span>Color Code</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (data: any) => {
        return (
          <Box sx={{ width: "120px", display: "flex", gap: "5px", flexWrap: "wrap", justifyContent: "center", mb: "2px" }}>
            {tableActionIcons.map(({ id, type, img }: any) => (
              <Image
                key={id}
                style={{ cursor: "pointer" }}
                id={id}
                src={img}
                onClick={() => handleTableAction(type, data.row.original.id)}
                alt={`UserProfile${id}`}
                width={23}
                height={23}
              />
            ))}
          </Box>
        );
      },
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return {
    widgetsArray,
    columns,
    openModal,
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
    handleOpenModal,
    disableModal,
  };
};
