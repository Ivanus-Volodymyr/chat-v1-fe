import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import {useActions} from "./useActions";

const SOCKET_URL = process.env.NEXT_PUBLIC_API_URL;

export const useSocket = (sessionId: string) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const {addMessage, clearPersonaMessage, setMessageGenerating, setPersonaMessage } = useActions();

    useEffect(() => {
        let accumulatedMessage = "";
        if (!sessionId) return;

        const socketInstance = io(SOCKET_URL);
        setSocket(socketInstance);
        socketInstance.on('connect', () => {
        })

        socketInstance.on("persona-response-start", () => {
            accumulatedMessage = "";
            setMessageGenerating(true);
            clearPersonaMessage();
        });

        socketInstance.on("chatResponse", (data) => {
            if (data) {
                accumulatedMessage += data;
                setPersonaMessage(data);
            }
        });

        socketInstance.on("persona-response-end", () => {
            setMessageGenerating(false);
            addMessage({ sender: "system", content: accumulatedMessage });
            accumulatedMessage = "";
            clearPersonaMessage();
        });


        socketInstance.on("persona-response-error", (error: { message: string; error?: string }) => {
            setMessageGenerating(false);
            clearPersonaMessage();
            addMessage({ sender: "system", content: `❌ Error: ${error.message}` });
            console.error("Persona response error:", error.error || error.message);
        });



        return () => {
            socketInstance.disconnect();
        };
    }, [sessionId]);

    const sendMessage = (message: string) => {
        if (socket) {
            socket.emit("sendMessage", { sessionId, message });
        }
    };

    return { sendMessage };
};
