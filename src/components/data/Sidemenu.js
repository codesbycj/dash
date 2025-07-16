import {
  BarChart3,
  CreditCard,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react";

const menuItem = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    // active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "report", label: "Report" },
      { id: "insight", label: "Insight" },
    ],
  },
  {
    id: "users",
    icon: User,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: "new", label: "New User" },
      { id: "overview", label: "Overview" },
      { id: "overview", label: "Overview" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-Commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "inventory",
    icon: Package,
    label: "Inventory",
    count: 847,
  },
  {
    id: "transaction",
    icon: CreditCard,
    label: "Transactions",
    count: 847,
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

export default menuItem;
