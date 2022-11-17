import Link from "next/link";
import {
  BsFillBarChartFill,
  BsFillGearFill,
  BsInstagram,
  BsShieldFillCheck,
} from "react-icons/bs";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { theme } from "../styles/Theme";

export const services = [
  {
    title: "Υπηρεσία 1",
    description:
      "Παράγραφος τεσσάρων σειρών, σύντομη περιληπτική περιγραφή της υπηρεσίας. *παραδειγμα τίτλου & περιγραφής.",
    icon: <BsFillGearFill />,
    button: null,
    show: true,
  },
  {
    title: "Υπηρεσία 2",
    description:
      "Παράγραφος τεσσάρων σειρών, σύντομη περιληπτική περιγραφή της υπηρεσίας. *παραδειγμα τίτλου & περιγραφής.",
    icon: <BsShieldFillCheck />,
    button: null,
    show: true,
  },
  {
    title: "Υπηρεσία 3",
    description:
      "Παράγραφος τεσσάρων σειρών, σύντομη περιληπτική περιγραφή της υπηρεσίας. *παραδειγμα τίτλου & περιγραφής. ",
    icon: <BsFillBarChartFill />,
    button: null,
    show: true,
  },
  {
    title: "Μιλήστε με έναν ειδικό",
    description:
      "Η ομάδα των ειδικών μας παρέχει συνεχή υποστήριξη καθ' όλη τη διάρκεια των έργων σας. ",
    icon: null,
    button: <Link href="/">Μήνυμα</Link>,
    phone: <Link href="callto:6949939998">Τηλέφωνο</Link>,
    show: false,
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

export const projects = [
  {
    name: "K & Palloliitto",
    image: "/pro1.jpg",
  },
  {
    name: "Fortum",
    image: "/pro2.jpg",
  },
  {
    name: "Raellia Group",
    image: "/pro3.jpeg",
  },
  {
    name: "Suunto",
    image: "/pro4.jpg",
  },
  {
    name: "Kiroileva Hiili",
    image: "/pro5.jpg",
  },
];

export const routes = [
  {
    name: "Αρχική",
    slug: "",
  },
  {
    name: "Δουλειές",
    slug: "projects",
  },
  {
    name: "Εταιρία",
    slug: "about-us",
  },
  {
    name: "Νέα",
    slug: "news",
  },
];

export const links = [
  {
    name: "Δουλειές",
    link: "projects",
  },
  {
    name: "Εταιρία",
    link: "about-us",
  },
  {
    name: "Επικοινωνία",
    link: "contact",
  },
];

export const socials = [
  {
    name: "Facebook",
    icon: <ImFacebook2 />,
    link: "",
  },
  {
    name: "Instagram",
    icon: <BsInstagram />,
    link: "",
  },
  {
    name: "Linkedin",
    icon: <ImLinkedin />,
    link: "https://www.linkedin.com/in/geon-hellas-ike-728aa7207/",
  },
];

export const companyLogos = [
  {
    alt: "Google",
    image: "/google-logo.png",
  },
  {
    alt: "Amazon",
    image: "/amazon-logo.png",
  },
  {
    alt: "Deloitte",
    image: "/deloitte-logo.png",
  },
  {
    alt: "Logitech",
    image: "/logitech-logo.png",
  },
  {
    alt: "Samsung",
    image: "/samsung-logo.png",
  },
  {
    alt: "Tesla",
    image: "/tesla-logo.png",
  },
  {
    alt: "Verizon",
    image: "/verizon-logo.png",
  },
];
