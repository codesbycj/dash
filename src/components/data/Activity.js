import { CreditCard, MessageCircle, Server, ShoppingCart, User } from "lucide-react";

const activities = [
    {
        id: 1,
        type: "user",
        icon: User,
        title: "New user registered",
        description: "John Smith created an account",
        time: "2 minutes ago",
        color: "text-blue-500",
        bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
        id: 2,
        type: "order",
        icon: ShoppingCart,
        title: "New order received",
        description: "Order #584 for $2,399",
        time: "5 minutes ago",
        color: "text-emerald-500",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/30"
    },
    {
        id: 3,
        type: "payment",
        icon: CreditCard,
        title: "Payment processed",
        description: "Payment of $1,199 received",
        time: "15 minutes ago",
        color: "text-purple-500",
        bgColor: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
        id: 4,
        type: "support",
        icon: MessageCircle,
        title: "New support ticket",
        description: "Sarah Johnson submitted a ticket",
        time: "30 minutes ago",
        color: "text-amber-500",
        bgColor: "bg-amber-100 dark:bg-amber-900/30"
    },
    {
        id: 5,
        type: "system",
        icon: Server,
        title: "System update",
        description: "Version 2.3.1 deployed",
        time: "1 hour ago",
        color: "text-gray-500",
        bgColor: "bg-gray-100 dark:bg-gray-900/30"
    }
];

export default activities