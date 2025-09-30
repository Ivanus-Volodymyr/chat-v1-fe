"use client";
import ChatMessagesList from "../../../components/Chat/ChatMessageList";
import ChatInput from "../../../components/Chat/ChatInput";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getChatMessages } from "@/store/chatSlice";
import { useParams } from "next/navigation";

export default function ChatDetailsPage() {
    const params = useParams();
    const sessionId = params?.sessionId;

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    useEffect(() => {
        if (sessionId) {
            dispatch(getChatMessages(String(sessionId)));
        }
    }, [dispatch, sessionId]);

    return (
        <div className="flex flex-col h-screen items-center justify-between bg-gradient-to-br from-pink-100/50 to-purple-100/50 animate-fadeIn">
            <ChatMessagesList />
            <ChatInput />
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
        </div>
    );
}
