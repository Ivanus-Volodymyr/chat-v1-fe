import React from "react";

export const Loader = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="w-12 h-12 border-4 border-pink-500 border-t-purple-500 border-dashed rounded-full animate-spin-smooth"></div>
            <style jsx>{`
        @keyframes spin-smooth {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-smooth {
          animation: spin-smooth 1.2s linear infinite;
        }
      `}</style>
        </div>
    );
};
