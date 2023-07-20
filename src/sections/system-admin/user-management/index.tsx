import IFAAdminIcon from '../../../assets/svg/user-management/IFAAdmin.svg';
import FosterCarerIcon from '../../../assets/svg/user-management/fosterCarer.svg';
import FosterChildIcon from '../../../assets/svg/user-management/fosterChild.svg';
import SchoolTeacherIcon from '../../../assets/svg/user-management/schoolTeacher.svg';
import SocialWorkerIcon from '../../../assets/svg/user-management/socialWorker.svg';
import LocalAuthorityIcon from '../../../assets/svg/user-management/localAuhority.svg';
import TrainingIcon from '../../../assets/svg/user-management/training.svg';
import AddNewIcon from '../../../assets/svg/user-management/AddNew.svg';

export const tableData = [
  {
    id: '1',
    menuName: 'foster carer'
  },
  {
    id: '2',
    menuName: 'foster carer recruitment'
  },
  {
    id: '3',
    menuName: 'Reports',
    subData: [
      {
        id: '1',
        menuName: 'IFA Reports'
      },
      {
        id: '2',
        menuName: 'Child Reports'
      },
      {
        id: '3',
        menuName: 'Carer Reports'
      },
    ]
  },
];

export const userManagementData = [
  {
    title: 'IFA Admin',
    icon: IFAAdminIcon,
    href: '/system-admin/user-management/IFA-Admin',
  },
  {
    title: 'Foster Carer',
    icon: FosterCarerIcon,
    href: '/system-admin/user-management/foster-carer',
  },
  {
    title: 'Foster Child',
    icon: FosterChildIcon,
    href: '',
    disabled: true,
  },
  {
    title: 'School Teacher',
    icon: SchoolTeacherIcon,
    href: '',
    disabled: true,
  },
  {
    title: 'Social Worker',
    icon: SocialWorkerIcon,
    href: '',
    disabled: true,
  },
  {
    title: 'Local Authority',
    icon: LocalAuthorityIcon,
    href: '',
    disabled: true,
  },
  {
    title: 'Training Instructor',
    icon: TrainingIcon,
    href: '',
    disabled: true,
  },
  {
    title: 'Add New',
    icon: AddNewIcon,
    addNew: true,
    disabled: true,
  },
]