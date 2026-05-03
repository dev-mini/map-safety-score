import { Outlet } from 'react-router';
import Header from './Header';
import LoadingScreen from './LoadingScreen';
import { useAuth0 } from '@auth0/auth0-react';
import { toast } from 'sonner';
import { useEffect } from 'react';

const MainLayout = () => {
  const { isLoading, error } = useAuth0();

  useEffect(() => {
    if (error)
      toast.error(error?.message ?? 'Ocurrió un error al iniciar sesión');
  }, [error]);

  if (isLoading) return <LoadingScreen />;

  return (
    <main className="flex flex-col w-full h-dvh text-foreground">
      <Header />
      <div className="p-4 2xl:self-center h-full w-full 2xl:max-w-7xl">
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
