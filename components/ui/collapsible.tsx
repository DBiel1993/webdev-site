import React, { useState } from "react";

interface CollapsibleProps {
  children: React.ReactNode;
}

export function Collapsible({ children }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
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

interface TriggerProps {
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
}: TriggerProps) {
  return (
    <button onClick={isOpen ? onClose : onOpen}>
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
