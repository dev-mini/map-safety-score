import { Spinner } from './ui/spinner';

const LoadingScreen = () => {
  return (
    <div className="fixed flex items-center justify-center w-full h-dvh backdrop-blur-sm bg-background/30 text-foreground">
      <Spinner />
      Loading...
    </div>
  );
};

export default LoadingScreen;
