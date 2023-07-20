import { useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { tableActionIcons } from ".";
import UkFlag from "../../../../assets/svg/safeguarding/uk-flag.svg";

export const useAgencySafeguardingOfficer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);
  
  const handleOpenModal = () => setOpenModal(!openModal);
  const handleEditModal = () => setEditModal(!editModal);
  const handleShareModal = () => setShareModal(!shareModal);
  const handleEmailModal = () => setEmailModal(!emailModal);
  const handleDeleteModal = () => setDeleteModal(!deleteModal);
  const handlePhoneModal = () => setPhoneModal(!phoneModal);

  const handleTableAction = (type: string, id: string) => {
    switch (type) {
      case "edit":
        handleEditModal();
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

      default:
        break;
    }
  };

  const columns = [
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
  };
};
