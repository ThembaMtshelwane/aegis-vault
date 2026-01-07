import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground transition-all duration-300",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        mystic:
          "border-primary/20 shadow-mystic hover:shadow-glow hover:border-primary/40 hover:-translate-y-1",
        elevated: "shadow-deep border-border/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
