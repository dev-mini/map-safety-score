import { Button } from './ui/button';
import { useNavigate } from 'react-router';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative md:h-2/3">
      <img
        src="/src/assets/images/bg-map.png"
        alt="Map background"
        className="flex absolute top-0 left-0 w-full h-84 md:h-150 2xl:h-full object-right object-cover rounded-xl md:object-top brightness-50 md:brightness-90 -z-10 mask-[linear-gradient(to_bottom,black,transparent)]"
      />
      <div className="flex flex-col items-center justify-center w-full md:max-w-lg h-84 md:h-full">
        <h1 className="text-5xl xl:text-7xl font-bold bg-linear-to-r from-primary via-purple-300 to-foreground bg-clip-text text-transparent text-center my-10">
          Map Safety Score
        </h1>
        <Button
          className="my-4 w-32 xl:text-lg"
          onClick={() => navigate('map-overview')}
        >
          View Map
        </Button>
      </div>
    </section>
  );
};

export default Hero;
