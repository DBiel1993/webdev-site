"use client";

import React, { useState } from "react";

interface CollapsibleProps {
  children: React.ReactNode;
}

export function Collapsible({ children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {React.Children.map(children, (child) => {
        // Ensure child is a valid React element and has props type for isOpen, onOpen, onClose
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<TriggerProps>, {
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

// Extend TriggerProps with HTMLAttributes to allow passing className and other standard props
interface TriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

export function CollapsibleTrigger({
  onOpen,
  onClose,
  isOpen,
  children,
  className, // Destructure className to pass it to the button
  ...props // Spread the remaining props to the button
}: TriggerProps) {
  return (
    <button
      onClick={isOpen ? onClose : onOpen}
      className={className} // Pass className to the button element
      {...props} // Pass any additional props to the button
    >
      {children}
      <span>{isOpen ? "-" : "+"}</span>
    </button>
  );
}

interface ContentProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export function CollapsibleContent({ isOpen, children }: ContentProps) {
  return isOpen ? <div>{children}</div> : null;
}
