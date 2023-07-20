import React from 'react'
import { Card } from '@mui/material'
import TableHeader from '@root/components/TableHeader'
import ManageAccessTable from '../../../ManageAccessTable'

const AccessLevelManagement = ({ id, title, pathName }: any) => {
  return (
    <Card sx={styles.card}>
      <TableHeader
        title={title}
      />
      <ManageAccessTable parentId={id} pathName={pathName} />
    </Card>
  )
}

export default AccessLevelManagement

const styles = {
  card: { p: 1.5, '& .MuiStack-root': { justifyContent: 'flex-start' } }
}