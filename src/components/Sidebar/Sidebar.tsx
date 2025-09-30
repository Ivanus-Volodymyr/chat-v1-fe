"use client";
import { useSelector } from "react-redux";
import ChatList from "./ChatList";
import {useActions} from "@/hooks/useActions";
import {RootState} from "@/store/store";

export default function Sidebar() {
    const isSidebarActive = useSelector((state: RootState) => state.sidebar.isSidebarActive);
    const { toggleSidebar } = useActions();
    const setSidebarStatus = () => {
        toggleSidebar();
    };

    return (
        <aside
            className={`${
                isSidebarActive ? "w-80" : "w-0"
            } sm:w-64 h-full bg-gradient-to-b from-pink-600 to-purple-600 text-white overflow-x-hidden transition-all duration-300 ease-in-out sm:p-4 sm:sticky sm:top-0 z-50 ${
                isSidebarActive ? "absolute p-4 shadow-2xl" : "relative p-0"
            }`}
        >
            <div className="flex flex-row items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white animate-fadeIn">
                    Chat History
                </h2>
                <button
                    className="sm:hidden px-4 py-2 bg-white text-pink-600 rounded-lg hover:bg-gray-100 hover:text-pink-700 font-semibold transition-all duration-200"
                    onClick={setSidebarStatus}
                >
                    Close
                </button>
            </div>
            <ChatList />
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
        </aside>
    );
}
