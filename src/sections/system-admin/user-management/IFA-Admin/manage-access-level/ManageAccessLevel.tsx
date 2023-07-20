import { Box, Switch } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable'
import TableHeader from '@root/components/TableHeader'
import React from 'react'
import { SELECT_FILTERS, tableData } from '.'
import TableAction from '@root/components/TableAction'
import { useRouter } from 'next/router'

const ManageAccessLevel = ({ title, pathName }: any) => {

  const router = useRouter();

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
      accessorFn: (row: any) => row.defaultAccess,
      id: "defaultAccess",
      cell: (info: any) => <Switch size="medium" />,
      header: () => <span>Enable/Disable</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <TableAction
          type={'edit'}
          onClicked={() => router.push({
            pathname: `/system-admin/user-management/${pathName}/manage-access-level/`,
            query: { pathName, id: info.row.original.id }
          })}
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
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isSuccess={true}
      />
    </Box>
  )
}

export default ManageAccessLevel