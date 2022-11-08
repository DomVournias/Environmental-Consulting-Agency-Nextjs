import Link from "next/link";
import {
  BsFillBarChartFill,
  BsFillGearFill,
  BsShieldFillCheck,
} from "react-icons/bs";

export const services = [
  {
    title: "Υπηρεσία 1",
    description:
      "Παράγραφος τεσσάρων σειρών, σύντομη περιληπτική περιγραφή της υπηρεσίας. *παραδειγμα τίτλου & περιγραφής.",
    icon: <BsFillGearFill />,
    button: null,
  },
  {
    title: "Υπηρεσία 2",
    description:
      "Παράγραφος τεσσάρων σειρών, σύντομη περιληπτική περιγραφή της υπηρεσίας. *παραδειγμα τίτλου & περιγραφής.",
    icon: <BsShieldFillCheck />,
    button: null,
  },
  {
    title: "Υπηρεσία 3",
    description:
      "Παράγραφος τεσσάρων σειρών, σύντομη περιληπτική περιγραφή της υπηρεσίας. *παραδειγμα τίτλου & περιγραφής. ",
    icon: <BsFillBarChartFill />,
    button: null,
  },
  {
    title: "Μιλήστε με έναν ειδικό",
    description:
      "Η ομάδα των ειδικών μας παρέχει συνεχή υποστήριξη καθ' όλη τη διάρκεια των έργων σας. ",
    icon: null,
    button: <Link href="/">Μήνυμα</Link>,
    phone: <Link href="callto:6949939998">Τηλέφωνο</Link>,
  },
];

export const statistics = [
  {
    number: "200",
    title: "Works",
  },
  {
    number: "23",
    title: "Samples",
  },
  {
    number: "422",
    title: "Clients",
  },
  {
    number: "100",
    title: "Projects",
  },
];
