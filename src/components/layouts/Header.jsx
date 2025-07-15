import { Bell, Filter, Menu, Plus, Search, Settings, Sun } from "lucide-react";
import Head from '/jonathan.jpg'
import React from "react";

export const Header = () => {
  return (
    <div
      className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl 
    border-b border-slate-200/50 dark:border-r-slate-700/50
    px-6 py-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-lg text-slate-600 dark:text-slate-200 hover:bg-slate-100
           dark:hover:bg-slate-800 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden md:block ">
            <h1 className="text-2xl font-black text-slate-800 dark:text-white">
              Dashboard
            </h1>
            <p className="text-slate-600">
              Welcome back, Emmanuel! here's what's happening today{" "}
            </p>
          </div>
        </div>

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search
              className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400
            "
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Anything"
              className="w-full pl-10 pr-4
            py-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800
            text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 
            focus:ring-blue-500 focus:border-transparent transition-all"
            />

            <Filter
              className="absolute top-1/2 transform -translate-y-1/2 right-4 
            text-slate-400 w-4 h-4 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer "
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            className="hidden lg:flex items-center space-x-2 py-2 px-4
            bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl
            hover:shadow-lg transition-all"
          >
            <Plus className="w-4 h-4" />

            <p className="text-sm font-bold">New</p>
          </button>

          <button className="p-2.5 rounded-xl dark:text-slate-200
           hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <Sun className="w-5 h-5 text-slate-800" />
          </button>

          <button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300
          hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute bg-red-600 w-5 h-5 rounded-full -top-1 text-white text-xs">3</span>
          </button>

          <button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300
          hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <Settings className="w-5 h-5 text-slate-500 " />
          </button>

          <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700
          ">
            <img src={Head} alt=""  className="w-8 h-8 ring-2 ring-blue-500 rounded-full"/>
            <div className="hidden md:block">
              <p className="font-medium text-sm text-slate-500 dark:text-slate-400">Emmanuel Okeke</p>
              <p className="text-slate-500 text-xs dark:text-slate-400">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
