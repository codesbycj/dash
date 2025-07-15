import { ChevronDown, Zap } from "lucide-react";
import Head from "/jonathan.jpg";
import menuItem from "../data/Sidemenu";
import React, { useState } from "react";

export const Sidebar = ({ collapsed, onToggle, currentPage, onPageChange }) => {
  const [expanded, setExpanded] = useState(new Set(["analytics"]));

  const toggle = (itemid) => {
    const newExpanded = new Set(expanded);

    if (newExpanded.has(itemid)) {
      newExpanded.delete(itemid);
    } else {
      newExpanded.add(itemid);
    }

    setExpanded(newExpanded);
  };
  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-72"
      } transition duration-300 ease-in-out bg-white/80 
    dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 
    dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      <div className="p-6 border-b border-slate-300/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div
            className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center
           justify-center shadow-lg"
          >
            <Zap className="w-6 h-6 text-white" />
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Okeke
              </h1>
              <p className="text-xs text-slate-500/50 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItem.map((item) => {
          return (
            <div key={item.id}>
              <button
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200
                  ${
                    currentPage === item.id || item.active
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-slate-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/50"
                  }`}
                onClick={() => {
                  if (item.submenu) {
                    toggle(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  {!collapsed && (
                    <>
                      <span className="font-medium ml-2">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.count && (
                        <span
                          className="px-2 py-1 text-xs bg-slate-300 dark:bg-slate-700 text-slate-600 
                          dark:text-slate-300 rounded-full"
                        >
                          {item.count}
                        </span>
                      )}
                    </>
                  )}
                </div>

                {!collapsed && item.submenu &&(
                  <ChevronDown className="w-4 h-4 transition-transform" />
                )}
              </button>

              {!collapsed && item.submenu &&  expanded.has(item.id) && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.submenu.map((menu) => {
                    return (
                      <button
                        key={menu.id}
                        className="
                    flex flex-col flex-1 p-2 font-medium text-sm"
                      >
                        {menu.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {!collapsed && (
        <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
            <img
              src={Head}
              alt=""
              className="w-10 h-10 rounded-full ring-2 ring-blue-500"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                Emmanuel Okeke
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                Administrator
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
