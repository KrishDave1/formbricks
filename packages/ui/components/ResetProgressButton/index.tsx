import { Repeat2 } from "lucide-react";
import { Button } from "../Button";

interface ResetProgressButtonProps {
  onClick: () => void;
}

export const ResetProgressButton = ({ onClick }: ResetProgressButtonProps) => {
  return (
    <Button
      type="button"
      variant="minimal"
      className="mr-2 bg-white px-2 py-0 font-sans text-sm text-slate-500"
      onClick={onClick}>
      Restart
      <Repeat2 className="ml-2 h-4 w-4" />
    </Button>
  );
};
