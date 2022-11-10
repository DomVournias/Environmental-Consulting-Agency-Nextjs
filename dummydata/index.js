import Link from "next/link";
import {
  BsFillBarChartFill,
  BsFillGearFill,
  BsShieldFillCheck,
} from "react-icons/bs";
import { theme } from "../styles/Theme";

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
    title:
      "Η ομάδα των ειδικών μας παρέχει συνεχή υποστήριξη καθ' όλη τη διάρκεια των έργων σας.",
    color: theme.green,
  },
  {
    number: "23",
    title:
      "Η ομάδα των ειδικών μας παρέχει συνεχή υποστήριξη καθ' όλη τη διάρκεια των έργων σας.",
    color: theme.blue,
  },
  {
    number: "422",
    title:
      "Η ομάδα των ειδικών μας παρέχει συνεχή υποστήριξη καθ' όλη τη διάρκεια των έργων σας.",
    color: theme.orange,
  },
  {
    number: "100",
    title:
      "Η ομάδα των ειδικών μας παρέχει συνεχή υποστήριξη καθ' όλη τη διάρκεια των έργων σας.",
    color: theme.brown,
  },
];
