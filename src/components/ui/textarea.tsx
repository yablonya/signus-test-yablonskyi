import * as React from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/utils";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ required, className, label, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <Label className="text-sm font-medium text-foreground">
            {label} {required && <span className="text-primary">*</span>}
          </Label>
        )}
        <textarea
          required={required}
          className={cn(
            "mt-1 flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
