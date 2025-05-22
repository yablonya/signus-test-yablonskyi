import * as React from "react";

import { cn } from "@/utils";
import { Label } from "@/components/ui/label";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ required, className, type, label, error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <Label className="text-sm font-medium text-foreground">
            {label} {required && <span className="text-primary">*</span>}
          </Label>
        )}
        <input
          type={type}
          required={required}
          className={cn(
            "mt-1 border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm overflow-hidden text-ellipsis",
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
Input.displayName = "Input";

export { Input };
