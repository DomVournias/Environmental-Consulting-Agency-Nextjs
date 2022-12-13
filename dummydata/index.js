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
    title: "Μελέτες",
    servicesList: [
      "Περιβαλλοντική Εκτίμηση και Ανάλυση Κινδύνων",
      "Σχέδια Διαχείρισης",
      "Μελέτες εκτίμησης περιβαλλοντικών επιπτώσεων",
      "περιβαλλοντική παρακολούθηση και αξιολόγηση παραμέτρων",
      "Τεχνοοικονομικές εκτιμήσεις",
      "Αξιολογήσεις ιδιοκτησίας για πιθανές ανησυχίες μόλυνσης και λύσεις αποκατάστασης",
    ],

    icon: <BsFillGearFill />,
  },
  {
    title: "Συμβουλευτική",
    servicesList: [
      "Περιβαλλοντική ρύθμιση και νομοθετική συμμόρφωση",
      "Συμβουλευτική και υποστήριξη σε έργα για δραστηριότητες και εγκαταστάσεις διαχείρισης απορριμμάτων",
      "Περιβαλλοντικοί Έλεγχοι",
      "Σχεδιασμός, υλοποίηση, επίβλεψη και υποστήριξη στην πιστοποίηση Συστημάτων Διαχείρισης",
      "Λύσεις βιωσιμότητας και ενέργειας",
    ],
    icon: <BsShieldFillCheck />,
  },
  {
    title: "Σχεδιασμός",
    servicesList: [
      "Εκτιμήσεις ιδιοκτησίας",
      "Τεχνική Υποστήριξη στο σχεδιασμό της εγκατάστασης/έργου",
      "Προτάσεις ανάπτυξης και εύρεσης οικονομικών βιώσιμων λύσεων για τη διαχείριση των απορριμμάτων",
      "Τεχνική υποστήριξη βιομηχανιών για την ολοκληρωμένη διαχείριση των παραγόμενων απορριμμάτων σύμφωνα με το εκάστοτε νομικό πλαίσιο",
    ],
    icon: <BsFillBarChartFill />,
  },
];

// title: "Μιλήστε με έναν ειδικό",
// servicesList: [
//   "Η ομάδα των ειδικών μας παρέχει συνεχή υποστήριξη καθ' όλη τη διάρκεια των έργων σας.",
// ],
// icon: null,
// button: <Link href="/">Μήνυμα</Link>,
// phone: <Link href="callto:6949939998">Τηλέφωνο</Link>,
// show: false,

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
    label: "Έργα",
    path: "/projects",
  },
  {
    label: "Υπηρεσίες",
    path: "/services",
  },
  {
    label: "Εταιρία",
    path: "/about-us",
  },
];

export const links = [
  {
    label: "Υπηρεσίες",
    path: "/services",
  },
  {
    label: "Έργα",
    path: "/projects",
  },

  {
    label: "Εταιρία",
    path: "/contact",
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
