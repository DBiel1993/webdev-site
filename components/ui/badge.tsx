import React, { ReactNode } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utility for merging class names

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "warning" | "error"; // You can add more variants as needed
}

export const Badge = ({
  children,
  className,
  variant = "primary",
}: BadgeProps) => {
  const variantClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    error: "bg-red-500 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
