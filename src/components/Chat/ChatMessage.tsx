import Image from "next/image";

export default function ChatMessage({ content, sender }: { content: string; sender: string }) {
    return (
        <div
            className={`flex ${
                sender === "user" ? "justify-end" : "justify-start"
            } items-start space-x-2 mb-4 animate-slideIn${
                sender === "user" ? "Right" : "Left"
            }`}
        >
            {sender === "system" && (
                <div className="rounded-full bg-gradient-to-br from-pink-400 to-purple-400 p-2 shadow-md">
                    <Image
                        src="/print.png"
                        alt="Flirty Persona"
                        width={32}
                        height={32}
                        priority
                        className="rounded-full"
                    />
                </div>
            )}
            <div
                className={`p-3 rounded-lg max-w-xs shadow-sm text-gray-800 transition-all duration-200 ${
                    sender === "user" ? "bg-pink-500 text-white" : "bg-purple-100"
                }`}
            >
                {content}
            </div>
            <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.3s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
