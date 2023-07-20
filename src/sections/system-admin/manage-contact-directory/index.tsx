import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EditIcon from "../../../assets/svg/safeguarding/edit.svg";
import ShareIcon from "../../../assets/svg/safeguarding/share.svg";
import EmailIcon from "../../../assets/svg/safeguarding/Email.svg";
import PhoneIcon from "../../../assets/svg/safeguarding/Phone.svg";
import DeleteIcon from "../../../assets/svg/safeguarding/delete.svg";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Move from "../../../assets/svg/manage-contact-directory/move.svg";
import Card from "../../../assets/svg/manage-contact-directory/card.svg";
import Email from "../../../assets/svg/manage-contact-directory/mail.svg";
import Phone from "../../../assets/svg/manage-contact-directory/call.svg";
import Delete from "../../../assets/svg/manage-contact-directory/delete.svg";
import Meeting from "../../../assets/svg/manage-contact-directory/meeting.svg";
import WhatsApp from "../../../assets/svg/manage-contact-directory/whats-app.svg";
import NewGroup from "../../../assets/svg/manage-contact-directory/new-group.svg";
import Categorize from "../../../assets/svg/manage-contact-directory/categorize.svg";
import NewContact from "../../../assets/svg/manage-contact-directory/new-contact.svg";
import BusinessCard from "../../../assets/svg/manage-contact-directory/business-card.svg";
import ShareConatcts from "../../../assets/svg/manage-contact-directory/share-contacts.svg";
import CardAction from "../../../assets/svg/manage-contact-directory/card-action.svg";
import ViewIcon from "../../../assets/svg/manage-contact-directory/view.svg";

// ========================================================================================

export const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
export const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const systemAdminWidgets = [
  {
    id: "1",
    subArray: [
      { icon: NewContact, title: "New Contact", disable: false },
      { icon: NewGroup, title: "New Group", disable: false },
      { icon: Email, title: "Email", disable: true },
    ],
    action: "Actions",
  },
  {
    id: "2",
    subArray: [
      { icon: Meeting, title: "Meeting", disable: true },
      { icon: BusinessCard, title: "Business Card", disable: true },
      { icon: Card, title: "Card", disable: true },
    ],
    action: "Share",
  },
  {
    id: "3",
    subArray: [
      { icon: Phone, title: "Phone", disable: false },
      { icon: Move, title: "Move", disable: true },
      { icon: Delete, title: "Delete", disable: true },
    ],
    action: "Actions",
  },
  {
    id: "4",
    subArray: [
      { icon: WhatsApp, title: "Whatsapp", disable: false },
      { icon: ShareConatcts, title: "Share Conatcts", disable: false },
    ],
    action: "Actions",
  },
  {
    id: "5",
    subArray: [{ icon: Categorize, title: "Categorize", disable: true }],
    action: "",
  },
];
// ==========================================================================================

export const SearchPeopleData = [{ title: "By Role" }, { title: "By Postcode" }, { title: "By People" }, { title: "By Category" }];

// ============================================================================================

export const tableActionIcons = [
  { type: "share", id: "share", img: ShareIcon },
  { type: "view", id: "view", img: ViewIcon },
  { type: "delete", id: "delete", img: DeleteIcon },
  { type: "email", id: "email", img: EmailIcon },
  { type: "edit", id: "edit", img: EditIcon },
  { type: "phone", id: "phone", img: PhoneIcon },
  { type: "whatsapp", id: "whatsapp", img: WhatsApp },
  { type: "cardAction", id: "cardAction", img: CardAction },
];

// ==================================================================================================

export const tableData = [
  {
    id: "1",
    name: "Alberto Delrio",
    role: "Foster Carer",
    safeguardingRole: "Fostering",
    branch: "England",
    businessPhone: "0215648545",
    email: "Albertodel@fosterapp.com",
    mobile: "441369987261",
    company: "-",
    address: "Dunedin Road, London",
    postCode: "E10 5PE",
    country: "",
    colorCode: "#b0d6e3",
  },
  {
    id: "2",
    name: "Aob Delrio",
    role: "Foster Carer",
    safeguardingRole: "Fostering",
    branch: "England",
    businessPhone: "0215648545",
    email: "Albertodel@fosterapp.com",
    mobile: "441369987261",
    company: "-",
    address: "Dunedin Road, London",
    postCode: "E10 5PE",
    country: "",
    colorCode: "",
  },
  {
    id: "3",
    name: "Alberto Delrio",
    role: "Foster Carer",
    safeguardingRole: "Fostering",
    branch: "England",
    businessPhone: "0215648545",
    email: "Albertodel@fosterapp.com",
    mobile: "441369987261",
    company: "-",
    address: "Dunedin Road, London",
    postCode: "E10 5PE",
    country: "",
    colorCode: "",
  },
  {
    id: "4",
    name: "Alberto Delrio",
    role: "Foster Carer",
    safeguardingRole: "Fostering",
    branch: "England",
    businessPhone: "0215648545",
    email: "Albertodel@fosterapp.com",
    mobile: "441369987261",
    company: "-",
    address: "Dunedin Road, London",
    postCode: "E10 5PE",
    country: "",
    colorCode: "",
  },
  {
    id: "5",
    name: "Alberto Delrio",
    role: "Foster Carer",
    safeguardingRole: "Fostering",
    branch: "England",
    businessPhone: "0215648545",
    email: "Albertodel@fosterapp.com",
    mobile: "441369987261",
    company: "-",
    address: "Dunedin Road, London",
    postCode: "E10 5PE",
    country: "",
    colorCode: "",
  },
  {
    id: "6",
    name: "Alberto Delrio",
    role: "Foster Carer",
    safeguardingRole: "Fostering",
    branch: "England",
    businessPhone: "0215648545",
    email: "Albertodel@fosterapp.com",
    mobile: "441369987261",
    company: "-",
    address: "Dunedin Road, London",
    postCode: "E10 5PE",
    country: "",
    colorCode: "",
  },
  {
    id: "7",
    name: "Aeth Cooper",
    role: "Foster Carer",
    safeguardingRole: "Fostering",
    branch: "Manchester",
    businessPhone: "0215648545",
    email: "Albertodel@fosterapp.com",
    mobile: "441369987261",
    company: "-",
    address: "Dunedin Road, London",
    postCode: "E10 5PE",
    country: "",
    colorCode: "",
  },
  {
    id: "8",
    name: "Beth Cooper",
    role: "Foster Carer",
    safeguardingRole: "Fostering",
    branch: "Manchester",
    businessPhone: "0215648545",
    email: "Albertodel@fosterapp.com",
    mobile: "441369987261",
    company: "-",
    address: "Dunedin Road, London",
    postCode: "E10 5PE",
    country: "",
    colorCode: "",
  },
  {
    id: "9",
    name: "Beth Cooper",
    role: "Foster Carer",
    safeguardingRole: "Fostering",
    branch: "Manchester",
    businessPhone: "0215648545",
    email: "Albertodel@fosterapp.com",
    mobile: "441369987261",
    company: "-",
    address: "Dunedin Road, London",
    postCode: "E10 5PE",
    country: "",
    colorCode: "",
  },
  {
    id: "10",
    name: "Beth Cooper",
    role: "Foster Carer",
    safeguardingRole: "Fostering",
    branch: "Manchester",
    businessPhone: "0215648545",
    email: "Albertodel@fosterapp.com",
    mobile: "441369987261",
    company: "-",
    address: "Dunedin Road, London",
    postCode: "E10 5PE",
    country: "",
    colorCode: "",
  },
  {
    id: "11",
    name: "Beth Cooper",
    role: "Foster Carer",
    safeguardingRole: "Fostering",
    branch: "Manchester",
    businessPhone: "0215648545",
    email: "Albertodel@fosterapp.com",
    mobile: "441369987261",
    company: "-",
    address: "Dunedin Road, London",
    postCode: "E10 5PE",
    country: "",
    colorCode: "",
  },
  {
    id: "12",
    name: "Beth Cooper",
    role: "Foster Carer",
    safeguardingRole: "Fostering",
    branch: "Manchester",
    businessPhone: "0215648545",
    email: "Albertodel@fosterapp.com",
    mobile: "441369987261",
    company: "-",
    address: "Dunedin Road, London",
    postCode: "E10 5PE",
    country: "",
    colorCode: "",
  },
];
