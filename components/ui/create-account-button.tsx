import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function CreateAccountButton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div>
      <div className="relative mb-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Not a member yet?
          </span>
        </div>
      </div>
      <Button
        className="ml-auto w-full rounded-none border-2 bg-secondary py-6 text-xl uppercase"
        type="submit"
      >
        Create A Profile
      </Button>
    </div>
  );
}

export { CreateAccountButton };
