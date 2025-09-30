"use client";
import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import {useActions} from "@/hooks/useActions";
import {useSocket} from "@/hooks/useSocket";

export default function ChatInput() {
    const { addMessage } = useActions();
    const [message, setMessage] = useState("");
    const params = useParams();
    const sessionId = params?.sessionId;

    const { sendMessage } = useSocket(sessionId as string);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const MAX_HEIGHT = 150;

    const handleSendMessage = () => {
        if (message.trim()) {
            sendMessage(message);
            setMessage("");
            addMessage({ sender: "user", content: message });
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            if (e.shiftKey) {
                e.preventDefault();
                setMessage((prev) => prev + "\n");
            } else {
                e.preventDefault();
                handleSendMessage();
            }
        }
    };

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${Math.min(textarea.scrollHeight, MAX_HEIGHT)}px`;
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [message]);

    return (
        <div className="sticky bottom-0 border-t border-pink-200/50 p-4 bg-white/90 backdrop-blur-md w-full mt-6 shadow-sm animate-fadeIn">
            <div className="flex items-center gap-3 max-w-2xl mx-auto">
        <textarea
            ref={textareaRef}
            placeholder="Type a flirty message..."
            className="flex-grow border border-purple-200 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200 resize-none bg-white/50 shadow-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            style={{
                overflowY: message.length > 0 ? "auto" : "hidden",
                maxHeight: `${MAX_HEIGHT}px`,
            }}
        />
                <button
                    className={`px-5 py-2 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 focus:ring-2 focus:ring-pink-400 transition-all duration-200 ${
                        message.trim() ? "hover:scale-105" : "opacity-50 cursor-not-allowed"
                    }`}
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                >
                    Send
                </button>
            </div>
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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
