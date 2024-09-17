import React, { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a `cn` utility for merging class names

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "block w-full rounded-md border border-input bg-white p-2 text-sm text-foreground shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
