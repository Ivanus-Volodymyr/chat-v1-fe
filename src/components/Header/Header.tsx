"use client";
import { NewChatButton } from "@/components/Chat/NewChatButton";
import {useActions} from "@/hooks/useActions";

export default function Header() {
    const { toggleSidebar } = useActions();
    const setSidebarStatus = () => {
        toggleSidebar();
    };

    return (
        <header className="flex justify-between sm:justify-end items-center p-4 bg-white/90 backdrop-blur-md border-b border-pink-200/50 shadow-sm">
            <button
                className="sm:hidden px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 focus:ring-2 focus:ring-pink-400 transition-all duration-200 font-semibold animate-fadeIn"
                onClick={setSidebarStatus}
            >
                Menu
            </button>
            <div className="flex items-center gap-4">
                <NewChatButton />
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold shadow-md hover:scale-105 transition-all duration-200 animate-fadeIn">
                    <span className="text-base">U</span>
                </div>
            </div>
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
        </header>
    );
}
