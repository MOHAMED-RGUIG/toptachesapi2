import {
  HomeIcon,
  PencilSquareIcon,
  ShoppingCartIcon,
  ListBulletIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications , AddTask, CreateAccount, PageOnHold,} from "@/pages/dashboard";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard", // Task list
        path: "/home",
        element: <Home />,
      },
      {
        icon: <PencilSquareIcon {...icon} />,
        name: "Ajouter tâche", // Add task
        path: "/ajouter-tache",
        element: <AddTask />, // Assuming you have a component for this
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Création compte", // Create account
        path: "/creation-compte",
        element: <CreateAccount />, // Assuming you have a profile component
      },
      {
        icon: <ShoppingCartIcon {...icon} />,
        name: "Ajouter commande", // Add order
        path: "/ajouter-commande",
        element: <PageOnHold />, // Assuming you have a component for this
      },
      {
        icon: <ListBulletIcon {...icon} />,
        name: "Liste commandes", // List orders
        path: "/liste-commandes",
        element: <PageOnHold />, // Assuming you have a component for this
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Liste tâches", // Task list
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <BellIcon  {...icon} />,
        name: "Notification", // Task list
        path: "/notification",
        element: <Notifications />,
      },
      {
        icon: <CogIcon {...icon} />,
        name: "Paramètres", // Settings
        path: "/parametres",
        element: <Profile />, // Assuming you have a settings component
      },
    ],
  },
];

export default routes;
