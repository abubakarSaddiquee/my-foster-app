import React from 'react'
import { Box, Switch } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable'
import TableHeader from '@root/components/TableHeader'
import { SELECT_FILTERS, tableData } from '.'
import AccessRevokeModal from './AccessRevokeModal'
import AccessIcon from '../../../../../assets/svg/AccessIcon.svg';
import { useGenerateLogin } from './useGenerateLogin'
import Image from 'next/image'

const GenerateLogin = ({ title }: any) => {

  const { openModal, handleOpenModal } = useGenerateLogin();

  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No.</span>,
    },
    {
      accessorFn: (row: any) => row.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.userType,
      id: "userType",
      cell: (info: any) => info.getValue(),
      header: () => <span>User Type</span>,
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
      accessorFn: (row: any) => row.phoneNo,
      id: "phoneNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Phone No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.accessRevokeTime,
      id: "accessRevokeTime",
      cell: (info: any) => info.getValue(),
      header: () => <span>Access Revoke Time</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.enableDisable,
      id: "enableDisable",
      cell: (info: any) => <Switch size="medium" />,
      header: () => <span>Enable/Disable</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Image
          src={AccessIcon}
          alt='icon'
          style={{ margin: '0 auto', cursor: 'pointer' }}
          onClick={handleOpenModal}
        />
      ),
      header: () => <span>actions</span>,
    },
  ];

  return (
    <Box>
      <TableHeader
        title={title}
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        showGenerateLoginBtn
        onGenerateLogin={() => { }}
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isSuccess={true}
      />
      {openModal && <AccessRevokeModal open={openModal} onClose={handleOpenModal} />}
    </Box>
  )
}

export default GenerateLogin