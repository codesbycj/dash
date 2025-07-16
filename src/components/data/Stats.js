import { DollarSign, Eye, ShoppingCart, Users } from "lucide-react";

const stats = [
    {
        title: "Total Revenue",
        value: "$114,563",
        change: "+12.5%",
        trend: "up",
        icon: DollarSign,
        color: "from-emerald-500 to-teal-600",
        bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
        textColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
        title: "Active Users",
        value: "5,000",
        change: "+5.5%",
        trend: "up",
        icon: Users,
        color: "from-blue-500 to-teal-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        textColor: "text-blue-600 dark:text-blue-400"
    },
    {
        title: "Total Orders",
        value: "2,900",
        change: "+15.2%",
        trend: "up",
        icon: ShoppingCart,
        color: "from-purple-500 to-pink-600",
        bgColor: "bg-purple-50 dark:bg-pruple-900/20",
        textColor: "text-purple-600 dark:text-purple-400"
    },
    {
        title: "Page Views",
        value: "14,563",
        change: "-.5%",
        trend: "down",
        icon: Eye,
        color: "from-orange-500 to-red-600",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
        textColor: "text-orange-600 dark:text-orange-400"
    }
]

export default stats