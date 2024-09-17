"use client";

import React, { createContext, useContext, ReactNode, useState } from "react";

// Tooltip context to manage visibility state globally
const TooltipContext = createContext<any>(null);

interface TooltipProviderProps {
  children: ReactNode;
}

export function TooltipProvider({ children }: TooltipProviderProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TooltipContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </TooltipContext.Provider>
  );
}

interface TooltipTriggerProps {
  children: ReactNode;
}

export function TooltipTrigger({ children }: TooltipTriggerProps) {
  const { setIsVisible } = useContext(TooltipContext);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
    </div>
  );
}

interface TooltipContentProps {
  children: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  className?: string;
}

export function TooltipContent({
  children,
  position = "top",
  className,
}: TooltipContentProps) {
  const { isVisible } = useContext(TooltipContext);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
  };

  if (!isVisible) return null;

  return (
    <div
      className={`absolute z-10 p-2 text-sm text-white bg-black rounded shadow-lg ${positionClasses[position]} ${className}`}
    >
      {children}
    </div>
  );
}

interface TooltipProps {
  children: ReactNode;
  className?: string;
}

export function Tooltip({ children, className }: TooltipProps) {
  return <div className={`relative inline-block ${className}`}>{children}</div>;
}
