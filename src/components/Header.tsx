import { Button } from './ui/button';

const Header = () => {
  return (
    <div className="flex items-center justify-between border-b border-foreground px-4 py-1">
      <div className="flex gap-2 items-center ml-auto">
        <Button
          size={'sm'}
          className="bg-foreground text-background hover:text-foreground"
        >
          Sign Up
        </Button>
        <Button
          size={'sm'}
          className="bg-foreground text-background hover:text-foreground"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Header;
