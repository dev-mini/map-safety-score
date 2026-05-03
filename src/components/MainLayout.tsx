import { Outlet } from 'react-router';
import Header from './Header';
import LoadingScreen from './LoadingScreen';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'sonner';

const MainLayout = () => {
  const { isLoading, error } = useAuth0();

  if (error)
    toast.error(error?.message ?? 'Ocurrió un error al iniciar sesión');

  return (
    <div className="flex flex-col w-full h-dvh bg-background text-foreground">
      {isLoading && <LoadingScreen />}
      <Header />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
