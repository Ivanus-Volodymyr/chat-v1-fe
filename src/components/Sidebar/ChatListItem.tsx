import { useRouter } from "next/navigation";
import {useActions} from "@/hooks/useActions";

export default function ChatListItem({ title }: { title: string }) {
    const router = useRouter();
    const { setInitialMessage } = useActions();

    const handleOnClick = () => {
        router.push(`/chat/${title}`);
        setInitialMessage(null);
    };

    return (
        <div
            className="cursor-pointer p-3 rounded-lg bg-pink-500/10 text-white hover:bg-pink-500/30 transition-all duration-200 text-sm font-medium animate-slideIn"
            onClick={handleOnClick}
        >
            {title}
            <style jsx>{`
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
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
