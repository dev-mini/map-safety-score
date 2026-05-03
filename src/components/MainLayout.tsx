import { Outlet } from 'react-router';
import Header from './Header';

const MainLayout = () => {
  return (
    <div className="flex flex-col w-full h-dvh bg-secondary text-foreground">
      <Header />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
