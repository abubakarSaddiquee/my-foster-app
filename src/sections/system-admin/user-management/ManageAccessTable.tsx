import { Box, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import TableAction from '@root/components/TableAction';
import React, { Fragment } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useUserManagement } from './useUserManagement';
import { tableData } from '.';

const ManageAccessTable = ({ parentId, pathName }: any) => {

  const { handleRowClick, handleSubRowClick, collapse, Id, handleActionCheckboxChange, handleActionChange } = useUserManagement();

  const columns = [
    {
      title: 'Module/ Menu Name',
      render: (row: any) => <Box sx={styles.flex}>
        {!row?.subData ? <Checkbox onChange={(e) => handleActionCheckboxChange(e, 'moduleName', row.id)} /> :
          <Box component={'span'} sx={styles.collapseIcon}>
            {collapse && row.id === Id ? <RemoveCircleIcon /> : <AddCircleIcon />}
          </Box>}
        <p onClick={() => handleRowClick(row, parentId, pathName)}>{row.menuName}</p>
      </Box>
    },
    {
      title: 'Add',
      render: (row: any) => <>
        <Checkbox onChange={(e) => handleActionCheckboxChange(e, 'add', row.id)} />
        <TableAction type={'add'} onClicked={() => handleActionChange('add')} />
      </>
    },
    {
      title: 'Edit',
      render: (row: any) => <>
        <Checkbox onChange={(e) => handleActionCheckboxChange(e, 'edit', row.id)} />
        <TableAction type={'edit'} onClicked={() => handleActionChange('edit')} />
      </>
    },
    {
      title: 'Edit Own',
      render: (row: any) => <>
        <Checkbox onChange={(e) => handleActionCheckboxChange(e, 'editOwn', row.id)} />
        <TableAction type={'edit'} onClicked={() => handleActionChange('editOwn')} />
      </>
    },
    {
      title: 'View',
      render: (row: any) => <>
        <Checkbox onChange={(e) => handleActionCheckboxChange(e, 'view', row.id)} />
        <TableAction type={'view'} onClicked={() => handleActionChange('view')} />
      </>
    },
    {
      title: 'Delete',
      render: (row: any) => <>
        <Checkbox onChange={(e) => handleActionCheckboxChange(e, 'delete', row.id)} />
        <TableAction type={'delete'} onClicked={() => handleActionChange('delete')} />
      </>
    },
    {
      title: 'Delete Own',
      render: (row: any) => <>
        <Checkbox onChange={(e) => handleActionCheckboxChange(e, 'deleteOwn', row.id)} />
        <TableAction type={'delete'} onClicked={() => handleActionChange('deleteOwn')} />
      </>
    },
  ];

  return (
    <TableContainer sx={{ overflowX: 'auto' }}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            {columns.map((col, i) => (
              <TableCell key={i} sx={styles.tableCell}>
                <Box display={'flex'} alignItems={'center'}>
                  {i !== 0 && <Checkbox />}
                  <span>{col.title}</span>
                </Box>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, i) => (
            <Fragment key={i}>
              <TableRow>
                {columns.map((col, j) => (
                  <TableCell key={j} sx={styles.tableCell}>
                    {col.render(row)}
                  </TableCell>
                ))}
              </TableRow>
              {row.subData && <>
                {collapse && Id === row.id && row.subData.map((subRow, k) => (
                  <TableRow key={k} onClick={() => handleSubRowClick(row, subRow)}>
                    {columns.map((col, l) => (
                      <TableCell key={l} sx={{ pl: l === 0 ? '60px !important' : '', ...styles.tableCell }}>
                        {col.render(subRow)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ManageAccessTable;

const styles = {
  flex: { display: 'flex', alignItems: 'center', '& > p': { cursor: 'pointer', width: '100%', fontWeight: 600, fontSize: '16px', textTransform: 'capitalize' } },
  collapseIcon: { cursor: 'pointer', marginRight: '10px', marginLeft: '15px', '& .MuiSvgIcon-root': { marginTop: '5px' } },
  tableCell: { minWidth: 150 }
}
