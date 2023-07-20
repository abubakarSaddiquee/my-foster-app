import { Card, Checkbox, Switch } from '@mui/material'
import CustomTable from '@root/components/Table/CustomTable'
import TableHeader from '@root/components/TableHeader'
import React from 'react'
import { useCarerInfoForm } from './useCarerInfoForm'
import { tableData } from '.'
import TableAction from '@root/components/TableAction'

const CarerInfoForm = ({ parentId, id }: any) => {

  const { } = useCarerInfoForm();

  const columns = [
    {
      accessorFn: (row: any) => row.formName,
      id: "formName",
      cell: ({ row, getValue }: any) =>
        <>
          <Checkbox
            disabled={row?.original?.Assigned}
            checked={row?.original?.Assigned ? false : row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
          {getValue()}
        </>,
      header: () => <span>Form Name</span>,
    },
    {
      cell: (info: any) => <Switch />,
      id: 'add',
      header: () => <span><TableAction type={"add"} /> Add</span>,
    },
    {
      cell: (info: any) => <Switch />,
      id: 'edit',
      header: () => <span><TableAction type={"edit"} /> Edit</span>,
    },
    {
      cell: (info: any) => <Switch />,
      id: 'view',
      header: () => <span><TableAction type={"view"} /> View</span>,
    },
    {
      cell: (info: any) => <Switch />,
      id: 'delete',
      header: () => <span><TableAction type={"delete"} /> Delete</span>,
    },
  ];


  return (
    <Card sx={styles.card}>
      <TableHeader title={'Carer Info Forms'} />
      <CustomTable
        isSuccess={true}
        data={tableData}
        columns={columns}
        tableContainerSX={{
          '& .MuiTableHead-root .MuiBox-root': { justifyContent: "flex-start" },
          '& .MuiTableBody-root .MuiTableCell-root': { textAlign: 'start' }
        }}
      />
    </Card>
  )
}

export default CarerInfoForm

const styles = {
  card: { p: 1, '& .MuiStack-root': { justifyContent: 'flex-start' } }
}