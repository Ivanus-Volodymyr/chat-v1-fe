"use client";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { createChat } from "@/store/chatSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

export const NewChatButton = () => {
    const router = useRouter();
    const dispatch = useDispatch<ThunkDispatch<never, never, never>>();
    const { loading } = useSelector((state: RootState) => state.chat);

    const handleCreateChat = async () => {
        const resultAction = await dispatch(createChat());

        if (createChat.fulfilled.match(resultAction)) {
            const newChatSession = resultAction.payload;
            router.push(`/chat/${newChatSession.id}`);
        }
    };

    return (
        <button
            className={`block px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold transition-all duration-200 hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 animate-fadeIn ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
        }`}
    onClick={handleCreateChat}
    disabled={loading}
        >
        {loading ? (
                    <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin-smooth"></span>
                Loading...
                </span>
) : (
        "New Chat"
    )}
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
        @keyframes spin-smooth {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-spin-smooth {
          animation: spin-smooth 1s linear infinite;
        }
      `}</style>
    </button>
);
};
