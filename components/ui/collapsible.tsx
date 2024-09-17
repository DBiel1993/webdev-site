"use client";

import React, { useState } from "react";

// Collapsible component to manage open/close state
export function Collapsible({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            isOpen,
            onOpen: () => setIsOpen(true),
            onClose: () => setIsOpen(false),
          });
        }
        return child;
      })}
    </div>
  );
}

// CollapsibleTrigger component with props for handling open/close state
export function CollapsibleTrigger({
  onOpen,
  onClose,
  isOpen,
  children,
  className,
}: {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button onClick={isOpen ? onClose : onOpen} className={className}>
      {children}
      <ChevronRightIcon
        className={`h-5 w-5 transition-all ${isOpen ? "rotate-90" : ""}`}
      />
    </button>
  );
}

// CollapsibleContent component
export function CollapsibleContent({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  return isOpen ? <div>{children}</div> : null;
}

// ChevronRightIcon component
function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
