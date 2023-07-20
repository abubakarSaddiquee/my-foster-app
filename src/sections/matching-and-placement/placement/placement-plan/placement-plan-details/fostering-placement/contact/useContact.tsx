import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { initailValue, validationSchema } from ".";
import TableAction from "@root/components/TableAction";
import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import CourtOrderModal from "./modal/court-order/CourtOrderModal";
import { useState } from "react";
import ContactWithModal from "./modal/contact-with/ContactWithModal";

export const useContact = () => {

  const router = useRouter();
  const { query } = router;
  const disabled = query.action === 'view' ? true : false;

  const [courtOrderModal, setCourtOrderModal] = useState(false);
  const [contactWithModal, setContactWithModal] = useState(false);

  const [disabledModal, setDisabledModal] = useState(false);

  const handleBack = () => router.push({ pathname: '/placement/placement-plan/placement-plan-details', query });

  const handleCourtOrderModal = () => {
    setCourtOrderModal(!courtOrderModal);
  };
  const handleContactWithModal = () => setContactWithModal(!contactWithModal);

  const handleTableAction = (action: string, id: string) => {
    setDisabledModal(true);
    switch (action) {
      case 'court order':
        handleCourtOrderModal();
        break;
      case 'contact with':
        handleContactWithModal();
        break;
      default:
        break;
    }
  };

  const handleTableAdd = (type: string) => {
    setDisabledModal(false);
    switch (type) {
      case 'court order':
        handleCourtOrderModal();
        break;
      case 'contact with':
        handleContactWithModal();
        break;
      default:
        break;
    }
  }

  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initailValue,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const {
    reset,
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = methods;

  const courtOrderTableData = [
    {
      id: '1',
      person: 'Gloria Bell',
      frequency: 'Weekly',
      venue: 'location',
      arrangementForSupervision: 'Arrangement For Supervision'
    }
  ];

  const detailsOfChildPersonContactData = [
    {
      id: '1',
      name: 'Gloria Bell',
      relationship: 'Uncle',
      reason: 'this is statement'
    }
  ];

  const courtOrderTableColumns = [
    {
      accessorFn: (row: any) => row.person,
      id: "person",
      cell: (info: any) => info.getValue(),
      header: () => <span>Person</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.frequency,
      id: "frequency",
      cell: (info: any) => info.getValue(),
      header: () => <span>Frequency</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.venue,
      id: "venue",
      cell: (info: any) => info.getValue(),
      header: () => <span>Venue</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.arrangementForSupervision,
      id: "arrangementForSupervision",
      cell: (info: any) => info.getValue(),
      header: () => <span>Arrangement For Supervision</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <TableAction
          type={'view'}
          onClicked={() => handleTableAction('court order', info.row.original.id)}
        />
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  const detailsOfChildPersonContactColumns = [
    {
      accessorFn: (row: any) => row.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relationship,
      id: "relationship",
      cell: (info: any) => info.getValue(),
      header: () => <span>Relationship</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.reason,
      id: "reason",
      cell: (info: any) => info.getValue(),
      header: () => <span>Reason</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <TableAction
          type={'view'}
          onClicked={() => handleTableAction('contact with', info.row.original.id)}
        />
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  const formData = [
    {
      gridLength: 12,
      otherOptions: {
        name: 'contactArrangements',
        label: 'Reasons for proposed contact arrangements',
        multiline: true,
        fullWidth:true,
        minRows: 3
      },
      component: RHFTextField
    },
    {
      gridLength: 12,
      otherOptions: {
        name: 'courtOrders',
        label: 'Are there any court orders relating to contact? For what reason? ',
        multiline: true,
        fullWidth:true,
        minRows: 3
      },
      component: RHFTextField
    },
    {
      gridLength: 12,
      requireTable: true,
      tableTitle: "Court orders related to contact's List",
      type: 'court order',
      tableData: courtOrderTableData,
      tableCoulmns: courtOrderTableColumns,
      modal: <CourtOrderModal open={courtOrderModal} onClose={handleCourtOrderModal} disabled={disabledModal} />
    },
    {
      gridLength: 12,
      otherOptions: {
        name: 'contactOutsideFormalArrangements',
        label: 'What agreements are there about contact outside formal arrangements between the child and others (including the use of social media and mobile phones)?',
        multiline: true,
        fullWidth:true,
        minRows: 3
      },
      component: RHFTextField
    },
    {
      gridLength: 12,
      otherOptions: {
        name: 'delegatedAuthority',
        label: 'Has delegated authority regarding contact arrangements been agreed (refer to Section B Contact)?',
        multiline: true,
        fullWidth:true,
        minRows: 3
      },
      component: RHFTextField
    },
    {
      gridLength: 12,
      otherOptions: {
        name: 'anythingPreventsContact',
        label: 'If anything prevents contact taking place, what action should the foster carer or social worker take',
        multiline: true,
        fullWidth:true,
        minRows: 3
      },
      component: RHFTextField
    },
    {
      title: 'Note: Any action identified that will be required in implementing the contact plans should be reflected in the Care Plan'
    },
    {
      gridLength: 12,
      requireTable: true,
      type: 'contact with',
      tableTitle: "Details of any person whom the child/young person should not have contact with:",
      tableData: detailsOfChildPersonContactData,
      tableCoulmns: detailsOfChildPersonContactColumns,
      modal: <ContactWithModal open={contactWithModal} onClose={handleContactWithModal} disabled={disabledModal} />
    },
    {
      gridLength: 12,
      otherOptions: {
        name: 'arrangementsForChildYoungPerson',
        label: "Arrangements for child/young person's social worker to visit, frequency, where will the child be seen",
        multiline: true,
        fullWidth:true,
        minRows: 3
      },
      component: RHFTextField
    },
    {
      gridLength: 6,
      otherOptions: {
        name: 'dateOfNextVisit1',
        label: 'Date of next visit'
      },
      component: RHFDatePicker
    },
    {
      gridLength: 12,
      otherOptions: {
        name: 'visitingArrangements',
        label: "Visiting arrangements for supervising social worker, frequency (including unannounced visits)",
        multiline: true,
        fullWidth:true,
        minRows: 3
      },
      component: RHFTextField
    },
    {
      gridLength: 6,
      otherOptions: {
        name: 'dateOfNextVisit2',
        label: 'Date of next visit'
      },
      component: RHFDatePicker
    },
    {
      gridLength: 12,
      otherOptions: {
        name: 'arrangementsForIROtoLAC',
        label: "Arrangements for contact by IRO prior to LAC review meeting",
        multiline: true,
        fullWidth:true,
        minRows: 3
      },
      component: RHFTextField
    },
    {
      gridLength: 12,
      otherOptions: {
        name: 'arrangementsForOtherPeople',
        label: "Arrangements for any other people to visit as required, e.g. guardians",
        multiline: true,
        fullWidth:true,
        minRows: 3
      },
      component: RHFTextField
    },
    {
      gridLength: 12,
      otherOptions: {
        name: 'childYoungPersonFacilitated',
        label: "Does the child/young person know how they can contact their social worker? How will this be facilitated?",
        multiline: true,
        fullWidth:true,
        minRows: 3
      },
      component: RHFTextField
    },
  ];

  return {
    methods,
    onSubmit,
    handleSubmit,
    disabled,
    handleBack,
    formData,
    handleTableAdd
  }
}