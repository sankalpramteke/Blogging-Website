import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${bgColor} ${textColor} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}