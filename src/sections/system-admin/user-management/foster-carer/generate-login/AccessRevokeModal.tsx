import React from 'react'
import { Button, Dialog, DialogContent, Grid, Typography } from '@mui/material'
import { FormProvider, RHFTextField } from "@root/components/hook-form";

import { LoadingButton } from '@mui/lab';
import { useGenerateLogin } from './useGenerateLogin';

const AccessRevokeModal = ({ open, onClose }: any) => {

  const { methods, handleSubmit, onSubmit } = useGenerateLogin();


  return (
    <Dialog open={open} onClose={onClose} maxWidth={'md'} fullWidth>
      <DialogContent>
        <Typography fontSize={'16px'} fontWeight={600} marginBottom={'20px'}>Access Revoke Date & Time</Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item lg={6}>
              <Typography fontWeight={600} fontSize={16}>Date</Typography>
              <RHFTextField name='date' type='date' size='small' fullWidth />
            </Grid>
            <Grid item lg={6}>
              <Typography fontWeight={600} fontSize={16}>Time</Typography>
              <RHFTextField name={'time'} type='time' size='small' fullWidth />
            </Grid>
            <Grid item xs={12} display={'flex'} gap={'10px'}>
              <LoadingButton type='submit' variant='contained'>Submit</LoadingButton>
              <Button variant='contained' onClick={onClose} sx={styles.btn}>Cancel</Button>
            </Grid>
          </Grid>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

export default AccessRevokeModal

const styles = {
  btn: { backgroundColor: '#F6830F', color: '#fff', '&:hover': { backgroundColor: '#F6830F', color: '#fff', } }
}