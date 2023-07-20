import { useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'

export const useArchiveSettings = () => {
    const tableHeaderRefTwo = useRef<any>();
    const [IsDeleteModal, setIsDeleteModal] = useState(false)
    const router = useRouter()
    const theme: any = useTheme();

  return{
    tableHeaderRefTwo,IsDeleteModal,setIsDeleteModal,router,theme
  }
}
