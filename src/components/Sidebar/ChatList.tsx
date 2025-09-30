"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { fetchChats } from "@/store/chatSlice";
import ChatListItem from "@/components/Sidebar/ChatListItem";
import { IChat } from "@/types/chat.interface";
import { ThunkDispatch } from "@reduxjs/toolkit";

export default function ChatList() {
    const dispatch = useDispatch<ThunkDispatch<never, never, never>>();
    const { chats, error } = useSelector((state: RootState) => state.chat);

    useEffect(() => {
        dispatch(fetchChats());
    }, [dispatch]);

    return (
        <div className="space-y-3 p-2">
            <div className="flex flex-col gap-2">
                {chats.length > 0 ? (
                    chats.map((chat: IChat, index) => (
                        <div key={index} className="animate-slideIn">
                            <ChatListItem title={chat.id} />
                        </div>
                    ))
                ) : (
                    <p className="text-gray-200 text-sm italic text-center animate-fadeIn">
                        No chats yet! Start a flirty conversation! 😘
                    </p>
                )}
                {error && (
                    <p className="bg-red-100/20 text-red-200 px-3 py-2 rounded-lg text-sm animate-fadeIn">
                        {error}
                    </p>
                )}
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
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
