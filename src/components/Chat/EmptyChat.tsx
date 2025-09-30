import Image from "next/image";
import { NewChatButton } from "@/components/Chat/NewChatButton";

export const EmptyChat = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center mb-24 text-gray-800 bg-gradient-to-br from-pink-100/30 to-purple-100/30 rounded-lg p-6">
            <div className="rounded-full bg-gradient-to-br from-pink-400 to-purple-400 p-2 shadow-md animate-fadeIn">
                <Image
                    src="/print.png"
                    alt="Flirty Persona"
                    width={48}
                    height={48}
                    priority
                    className="rounded-full"
                />
            </div>
            <h3 className="font-bold text-2xl mt-4 text-pink-600 animate-slideIn">
                Chat with Flirty Friend!
            </h3>
            <p className="text-gray-600 max-w-md text-center mt-3 mb-6 text-sm animate-slideIn">
                Welcome to your flirty chat adventure! Send a playful message and let’s spark some fun with a dash of charm! 😘
            </p>
            <div className="animate-slideIn">
                <NewChatButton />
            </div>
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideIn {
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
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
        </div>
    );
};
