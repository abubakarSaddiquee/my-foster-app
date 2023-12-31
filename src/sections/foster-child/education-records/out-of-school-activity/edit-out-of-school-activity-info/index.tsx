import {
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const EditOutSchoolActivityInfoData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "activityType",
      label: "Activity Type",
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "From Date",
      name: "fromDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "To Date",
      name: "toDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      label: "Comments",
      name: "comments",
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
