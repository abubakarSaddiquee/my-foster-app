import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { userManagementData } from '.'
import { useRouter } from 'next/router'
import Image from 'next/image'

const UserManagement = () => {
  const router = useRouter();

  return (
    <Grid container spacing={2}>
      {userManagementData.map(({ icon, title, href, disabled, addNew }: any) => (
        <Grid item key={title} xl={3} lg={4} md={6} xs={12}>
          <Card sx={styles.card(disabled)} onClick={() => !addNew ? router.push(href) : console.log('some action')}>
            <Image src={icon} alt='icon' />
            <Typography sx={styles.title(disabled)}>{title}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default UserManagement

const styles = {
  card: (disabled: boolean) => ({
    p: 1.5,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    borderRadius: '10px',
    pointerEvents: disabled ? 'none' : 'initial',
    backgroundColor: disabled ? '#E9E9E9' : '',
    boxShadow: disabled ? '' : '0px 0px 7px 3px #0E918C33',

  }),
  title: (disabled: boolean) => ({ color: disabled ? '#B9B9B9' : '#0E918C', fontWeight: 600, fontSize: '20px' })
}