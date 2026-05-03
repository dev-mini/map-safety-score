import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="flex flex-col max-w-lg items-center justify-center h-84">
      <h1 className="text-5xl xl:text-7xl font-bold bg-linear-to-r from-primary via-purple-300 to-foreground bg-clip-text text-transparent text-center my-10 ">
        Map Safety Score
      </h1>
      <Button className="my-4 w-32 xl:text-lg">View Map</Button>
    </section>
  );
};

export default Hero;
