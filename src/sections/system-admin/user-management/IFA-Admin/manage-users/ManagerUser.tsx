import TableHeader from '@root/components/TableHeader'
import React from 'react'
import { SELECT_FILTERS, tableData } from '.'
import CustomTable from '@root/components/Table/CustomTable'
import TableAction from '@root/components/TableAction'
import Switch from '@mui/material/Switch';
import { Box, Button } from '@mui/material'
import AddModal from './addModal'
import { useManagerUser } from './useManagerUser'

const ManagerUser = ({ title }: any) => {

  const { openModal, handleOpenModal, modalTitle } = useManagerUser();

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
      accessorFn: (row: any) => row.resetPassword,
      id: "resetPassword",
      cell: (info: any) => <Button variant='contained' sx={styles.resetPassword}>{info.getValue()}</Button>,
      header: () => <span>Reset Password</span>,
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
        <TableAction
          type={'edit'}
          onClicked={() => handleOpenModal('Edit', info.row.original.id)}
        />
      ),
      header: () => <span>actions</span>,
    },
  ];

  return (
    <Box sx={styles.IFAAdmin}>
      <TableHeader
        title={title}
        showSelectFilters
        selectFilters={SELECT_FILTERS}
        showAddBtn
        onAdd={() => handleOpenModal('Add New')}
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isSuccess={true}
      />
      {openModal && <AddModal
        modalTitle={modalTitle}
        open={openModal}
        onClose={handleOpenModal}
      />}
    </Box>
  )
}

export default ManagerUser

const styles = {
  IFAAdmin: {
    '& .MuiStack-root .MuiButtonBase-root': { marginLeft: '10px' }
  },
  resetPassword: {
    background: '#F6830F',
    color: '#fff',
    borderRadius: '4px',
    padding: '5px',
    fontSize: '16px',
    fontWeight: 600,
    '&:hover': { background: '#F6830F', color: '#fff' }
  },
}