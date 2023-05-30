export const FREFilterData = [
  {
    gridlength: 6,
    title: "Name of Child (DOB)",
    otherOptions: {
      name: 'personName',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'all', label: 'all' }
    ],
  },
  {
    gridlength: 6,
    title: 'Supervising Social Worker',
    otherOptions: {
      name: 'supervisingSocialWorker',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'all', label: 'all' }
    ],
  },
  {
    gridlength: 6,
    title: 'Foster Carer(s)',
    otherOptions: {
      name: 'fosterCarer',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'today', label: 'today' }
    ],
  },
  {
    gridlength: 6,
    title: 'Local Authority',
    otherOptions: {
      name: 'localAuthority',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'All', label: 'all' }
    ],
  },
  {
    gridlength: 6,
    title: 'Select Search Date',
    otherOptions: {
      name: 'searchDate',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'created Date', label: 'created Date' }
    ],
  },
  {
    gridlength: 6,
    title: 'Date Type',
    otherOptions: {
      name: 'dateType',
      fullWidth: true,
      size: 'small',
    },
    options: [
      { value: 'today', label: 'today' }
    ],
  },

];

export const tableSubHeader = [
  {
    id: '1',
    subData: [
      { label: "Name of child (DOB)", value: 'timmy toppee (10/10/2023)' },
      { label: 'region', value: 'region 11' },
    ]
  },
  {
    id: '2',
    subData: [
      { label: 'Supervising social worker', value: 'aida bugg' },
      { label: 'branch', value: 'branch 12' },
    ]
  },
  {
    id: '3',
    subData: [
      { label: 'foster carer(s)', value: 'teri dactyl, peg legge' },
      { label: 'date from', value: '03/11/2023' },
      { label: 'date to', value: '03/11/2023' },
    ]
  },
];

export const tableMockData = [
  {
    id: '1',
    srNo: '1',
    personName: 'timmy toppee (10/10/2023)',
    socialWorker: 'Anne Teak',
    fosterCarer: 'Teri Dactyl',
    signedDate: "03/10/21",
    createdDate: '03/10/21',
    createdBy: 'john doe',
    modifiedDate: '03/10/21',
    modifiedBy: 'joh doe'
  }
]