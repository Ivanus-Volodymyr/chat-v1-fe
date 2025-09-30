'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const handleStartChatting = () => {
        router.push('/chat/');
    }

    return (
        <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 bg-gradient-to-br from-pink-100 to-purple-100">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-2xl">
                <div className="flex flex-col gap-4 text-center sm:text-left">
                    <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 animate-fadeIn">
                        Flirty Chat
                    </h1>
                    <p className="text-lg text-gray-700 animate-slideIn">
                        Chat with a playful, flirty AI friend who loves to tease and keep things fun!
                    </p>
                </div>

                {/* Чат-контейнер (заглушка, яку можна замінити реальним чатом) */}
                <div className="w-full bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4 max-h-[60vh] overflow-y-auto transition-all duration-300">
                    {/* Приклад повідомлення користувача */}
                    <div className="flex justify-end">
                        <div className="max-w-xs px-4 py-2 bg-pink-500 text-white rounded-lg shadow animate-slideInRight">
                            Hey, what's up? 😊
                        </div>
                    </div>
                    {/* Приклад повідомлення AI */}
                    <div className="flex justify-start">
                        <div className="max-w-xs px-4 py-2 bg-purple-100 text-gray-800 rounded-lg shadow animate-slideInLeft">
                            Oh, hey cutie! Just thinking about you... 😘 What's on your mind?
                        </div>
                    </div>
                </div>

                {/* Форма введення (заглушка) */}
                <div className="flex w-full gap-2">
                    <input
                        type="text"
                        disabled
                        placeholder="Type a flirty message..."
                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200"
                    />
                    <button className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-200 disabled:opacity-50"
                        onClick={handleStartChatting}
                    >
                        Start Chatting Now!!!
                    </button>
                </div>

                {/* Тост для помилок (заглушка) */}
                <div className="hidden data-[show=true]:block bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg animate-fadeIn max-w-2xl mx-auto">
                    Message violates content policy. Please try again!
                    <button className="float-right text-red-700 font-bold">✕</button>
                </div>
            </main>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slideIn {
          animation: fadeIn 0.5s ease-out;
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
