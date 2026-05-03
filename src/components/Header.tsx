import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react';

const Header = () => {
  const {
    user,
    isAuthenticated,
    loginWithRedirect: login,
    logout: auth0Logout,
    isLoading,
  } = useAuth0();

  const signUp = () =>
    login({ authorizationParams: { screen_hint: 'signup' } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  return (
    <div className="flex items-center justify-between border-b border-foreground px-4 py-3">
      {isAuthenticated && user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="ml-auto">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full focus-visible:ring-transparent focus-visible:border-none focus-visible:border-0 focus-visible:ring-0 focus-visible:border-transparent"
            >
              <Avatar className="size-8 xl:size-12">
                <AvatarImage
                  decoding="async"
                  src="https://github.com/shadcn.png"
                  alt={user?.name}
                />
                <AvatarFallback>
                  {user?.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-32 bg-background z-50">
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer hover:bg-foreground/20 text-sm xl:text-lg rounded-md">
                <UserIcon className="size-3.5" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-foreground/20 text-sm xl:text-lg rounded-md">
                <CreditCardIcon className="size-3.5" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-foreground/20 text-sm xl:text-lg rounded-md">
                <SettingsIcon className="size-3.5" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              onClick={logout}
              className="xl:text-lg"
            >
              <LogOutIcon className="size-3.5" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-3 items-center ml-auto">
          <Button
            size={'sm'}
            className="bg-foreground text-background hover:text-foreground rounded-lg text-sm xl:text-base"
            onClick={signUp}
            disabled={isLoading}
          >
            Sign Up
          </Button>
          <Button
            size={'sm'}
            className="bg-foreground text-background hover:text-foreground rounded-lg text-sm xl:text-base"
            onClick={() => login()}
            disabled={isLoading}
          >
            Sign In
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
