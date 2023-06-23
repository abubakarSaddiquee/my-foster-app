import * as Yup from 'yup';
import { fData } from "@root/utils/formatNumber";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const meetingRecordingInitialValues = {
  meetingAgenda: '',
  uploadDate: null,
  meetingAttendess: "",
  meetingChair: "",
  meetingNotes: "",
  meetingActions: "",
  report: "",
  attachFile: null,
}

const MAX_FILE_SIZE = 1 * 1000 * 1000 * 1000; // 1 GB

export const meetingRecordingSchema = Yup.object().shape({
  meetingAgenda: Yup.string().required('Field is required'),
  uploadDate: Yup.date().required('Field is required'),
  meetingAttendess: Yup.string().required('Field is required'),
  meetingChair: Yup.string().required('Field is required'),
  meetingNotes: Yup.string().required('Field is required'),
  meetingActions: Yup.string().required('Field is required'),
  report: Yup.string().required('Field is required'),
  attachFile: Yup.mixed()
    .required("Field is required")
    .test("fileSize", `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`, (value: any) => value && value.size <= MAX_FILE_SIZE),
})
export const meetingRecordingData = [
  {
    gridLength: 12,
    title: 'Meeting Agenda',
    otherOptions: {
      size: 'small',
      name: 'meetingAgenda',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Upload Date',
    otherOptions: {
      name: 'uploadDate',
      size: 'small',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    title: 'Meeting Attendess',
    otherOptions: {
      size: 'small',
      name: 'meetingAttendess',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Meeting Chair',
    otherOptions: {
      size: 'small',
      name: 'meetingChair',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Meeting Notes',
    otherOptions: {
      size: 'small',
      name: 'meetingNotes',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Meeting Actions',
    otherOptions: {
      size: 'small',
      name: 'meetingActions',
      fullWidth: true,
    },
    component: RHFTextField
  },
]