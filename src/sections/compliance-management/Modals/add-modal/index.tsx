import { Grid } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

import * as Yup from 'yup';

export const initialValues = {
    categoryName: '',
    subCategoryName: '',
}
export const formSchema = Yup.object().shape({
    categoryName: Yup.string().required('Field is required'),
    subCategoryName: Yup.string().required('Field is required'),

})


export const complianceMangementModalData = [
    {
        id: 1,
        componentProps: {
            name: "categoryName",
            label: 'Category Name',
            fullWidth: true,
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 12,
    },
    {
        id: 2,
        componentProps: {
            name: "subCategoryName",
            label: 'Sub Category Name',
            fullWidth: true,
            sx: { mb: 1 },
        },
        component: RHFTextField,
        md: 10,
    },
    
   
]
