import { Button, Dialog, DialogContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useManagerUser } from './useManagerUser'
import { FormProvider } from '@root/components/hook-form';
import { formData } from '.';
import { LoadingButton } from '@mui/lab';

const AddModal = ({ open, onClose, modalTitle }: any) => {
  const { methods, handleSubmit, onSubmit } = useManagerUser();
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={'md'}>
      <DialogContent>
        <Typography fontSize={'16px'} fontWeight={600} marginBottom={'20px'}>{modalTitle} User</Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {formData.map((item, i) => (
              <Grid item key={i} md={item.gridLength}>
                <item.component fullWidth size='small' {...item.otherOptions}>
                  {item.otherOptions.select ?
                    item.otherOptions.options.map((option, i) =>
                      <option key={option.value} value={option.value}>{option.label}</option>)
                    : null
                  }
                </item.component>
              </Grid>
            ))}
            <Grid item xs={12} display={'flex'} gap={'10px'}>
              <LoadingButton type='submit' variant='contained'>Submit</LoadingButton>
              <Button variant='contained' sx={styles.btn} onClick={onClose}>Cancel</Button>
            </Grid>
          </Grid>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}

export default AddModal

const styles = {
  btn: { backgroundColor: '#F6830F', color: '#fff', '&:hover': { backgroundColor: '#F6830F', color: '#fff' } }
}