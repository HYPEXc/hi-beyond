import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group cursor-pointer font-display",
  {
    variants: {
      variant: {
        default: "glass bg-gradient-to-br from-primary/25 via-accent/15 to-primary/20 text-foreground border border-primary/40 hover:border-primary/60 hover:scale-[1.02] shadow-glow-primary backdrop-blur-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/25 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-800 hover:before:translate-x-[100%] after:absolute after:inset-0 after:border after:border-white/10 after:rounded-2xl",
        destructive:
          "glass bg-gradient-to-br from-destructive/25 to-destructive/15 text-foreground border border-destructive/40 hover:border-destructive/60 hover:scale-[1.02] backdrop-blur-xl",
        outline:
          "glass border border-accent/30 bg-background/10 hover:bg-accent/15 hover:text-foreground hover:border-accent/50 backdrop-blur-xl hover:shadow-glow-accent",
        secondary:
          "glass bg-gradient-to-br from-secondary/25 to-accent/15 text-foreground border border-secondary/40 hover:border-secondary/60 hover:scale-[1.02] backdrop-blur-xl shadow-glow-secondary",
        ghost: "hover:bg-accent/15 hover:text-foreground transition-all duration-400 rounded-2xl",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        hero: "glass bg-gradient-primary text-foreground font-semibold hover:scale-[1.03] border border-primary/50 hover:border-primary/70 backdrop-blur-xl shadow-glow-primary before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-800 hover:before:translate-x-[100%] after:absolute after:inset-0 after:border after:border-white/20 after:rounded-2xl",
        glass: "glass bg-gradient-to-br from-muted/25 to-card/20 text-foreground hover:scale-[1.02] border border-accent/35 hover:border-accent/55 backdrop-blur-xl",
        glow: "glass bg-gradient-neural text-foreground hover:scale-[1.02] border border-neural/50 hover:border-neural/70 backdrop-blur-xl shadow-glow-neural animate-neural-pulse",
        neural: "glass bg-gradient-to-br from-neural/30 via-primary/20 to-accent/15 text-foreground hover:scale-[1.02] border border-neural/45 hover:border-neural/65 backdrop-blur-xl shadow-glow-neural",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
