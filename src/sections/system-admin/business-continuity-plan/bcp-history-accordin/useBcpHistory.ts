import { useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'

export const useBcpHistory = () => {
    const tableHeaderRefTwo = useRef<any>();
    const [IsDeleteModal, setIsDeleteModal] = useState(false)
    const router = useRouter()
    const theme: any = useTheme();

  return{
    tableHeaderRefTwo,router,theme
  }
}
