
import { PlusCircle } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuickActionButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const QuickActionButton = ({ 
  children, 
  className, 
  ...props 
}: QuickActionButtonProps) => {
  return (
    <Button
      className={cn(
        "bg-outgage-purple hover:bg-outgage-purple-dark text-white gap-2",
        className
      )}
      {...props}
    >
      <PlusCircle className="h-4 w-4" />
      {children}
    </Button>
  );
};

export default QuickActionButton;
