import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

export const TableSection = () => {
  const recentOrders = [
    {
      id: "f3847",
      customer: "John Smith",
      product: 'MacBook Pro 16"',
      amount: "$2,399",
      status: "completed",
      date: "2024-01-15",
    },
    {
      id: "f3848",
      customer: "Sarah Johnson",
      product: "iPhone 15 Pro",
      amount: "$1,199",
      status: "pending",
      date: "2024-01-15",
    },
    {
      id: "f3849",
      customer: "Michael Brown",
      product: "iPad Air",
      amount: "$599",
      status: "completed",
      date: "2024-01-14",
    },
    {
      id: "f3850",
      customer: "Emily Davis",
      product: "AirPods Pro",
      amount: "$249",
      status: "cancelled",
      date: "2024-01-13",
    },
    {
      id: "f3851",
      customer: "David Wilson",
      product: "Apple Watch Series 9",
      amount: "$399",
      status: "pending",
      date: "2024-01-12",
    },
  ];

  const topProducts = [
    {
      name: 'MacBook Pro 16"',
      sales: 1247,
      revenue: "$2,987,530",
      trend: "up",
      change: "+12%",
    },
    {
      name: "iPhone 15 Pro",
      sales: 2156,
      revenue: "$2,587,044",
      trend: "up",
      change: "+8%",
    },
    {
      name: "iPad Air",
      sales: 1893,
      revenue: "$1,133,607",
      trend: "down",
      change: "-5%",
    },
    {
      name: "Apple Watch Series 9",
      sales: 1562,
      revenue: "$623,238",
      trend: "up",
      change: "+15%",
    },
    {
      name: "AirPods Pro",
      sales: 2431,
      revenue: "$605,319",
      trend: "steady",
      change: "0%",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-state-100 text-state-700 dark:bg-state-800 dark:text-state-400";
    }
  };

  return (
    <div className="space-y-6">
      <div
        className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border
    border-slate-200/50 dark:border-slate-700/50 overflow-scroll"
      >
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest Customers Offer
              </p>
            </div>

            <button className="text-blue-500 hover:text-blue-700 transition-colors text-sm font-medium">
              View All
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Order ID
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Product
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Amount
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Status
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => {
                return (
                  <tr
                    className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50
                        dark:hover:bg-slate-800/50 transition forced-colors:"
                    key={index}
                  >
                    <td className="p-4">
                      <span className="text-sm font-medium text-blue-500">
                        {order.id}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm dark:text-white text-slate-800 ">
                        {order.customer}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm dark:text-white text-slate-800 ">
                        {order.product}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm dark:text-white text-slate-800 ">
                        {order.amount}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`text-slate-400 dark:text-white ${getStatusColor(
                          order.status
                        )} font-medium text-xs px-3
                        py-1 rounded-full`}
                      >
                        {order.date}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="text-sm dark:text-white text-slate-800 ">
                        <MoreHorizontal className="w-4 h-4 " />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
          <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-slate-800 dark:text-white">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  Top Products
                </h3>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Best Perfoming Products
              </p>
            </div>

            <button className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium">
              View All
            </button>
          </div>
          <div className="p-6 space-y-4">
            {topProducts.map((product) => {
              return (
                <div
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50
              dark:hover:bg-slate-500/80 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                      {product.name}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {product.sales}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">
                      {product.revenue}
                    </p>

                    <div className="flex items-center space-x-1">
                      {product.trend === "up" ? (
                        <TrendingUp className="w-3 h-3 text-emerald-300" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-500" />
                      )}
                      <span
                        className={
                          product.trend === "up"
                            ? "text-emerald-300 text-xs font-medium"
                            : "text-red-500 text-xs font-medium"
                        }
                      >
                        {product.change}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
