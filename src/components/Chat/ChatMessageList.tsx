"use client";
import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function ChatMessagesList() {
    const { messages, personaMessage, messageGenerating } = useSelector((state: RootState) => state.chat);

    return (
        <div className="flex-grow overflow-y-auto h-full mb-24 p-4 bg-gradient-to-br from-pink-100/50 to-purple-100/50 max-w-2xl w-full mx-auto rounded-lg shadow-sm">
            {messages.length > 0 ? (
                messages.map((message, index) => (
                    <ChatMessage key={index} content={message.content} sender={message.sender} />
                ))
            ) : (
                <div className="text-center text-gray-600 text-sm italic animate-fadeIn">
                    No messages yet! Start a flirty chat! 😘
                </div>
            )}
            {messageGenerating && (
                <ChatMessage content={personaMessage} sender={"system"} />
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
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
        </div>
    );
}
