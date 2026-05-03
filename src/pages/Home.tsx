import Hero from '@/components/Hero';
import { MapPinned, ShieldAlert, Speech } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col w-full md:h-full">
      <Hero />
      <section className="flex flex-col md:flex-row my-8 md:mt-20 gap-8">
        <article className="flex flex-col md:flex-1/3 gap-2 px-4 rounded-lg py-4 bg-card w-full">
          <MapPinned className="size-8 text-muted-foreground" />
          <h3 className="font-bold text-base xl:text-xl text-primary">
            1. Locate
          </h3>
          <p className="text-muted-foreground text-sm xl:text-lg text-pretty">
            Pinpoint the exact area of concern on our high-precision digital
            map.
          </p>
        </article>
        <article className="flex flex-col md:flex-1/3 gap-2 px-4 rounded-lg py-4 bg-card w-full">
          <Speech className="size-8 text-muted-foreground" />
          <h3 className="font-bold text-base xl:text-xl text-primary">
            2. Describe
          </h3>
          <p className="text-muted-foreground text-sm xl:text-lg text-pretty">
            Provide essential details through secure, structured data fields.
          </p>
        </article>
        <article className="flex flex-col md:flex-1/3 gap-2 px-4 rounded-lg py-4 bg-card w-full">
          <ShieldAlert className="size-8 text-muted-foreground" />
          <h3 className="font-bold text-base xl:text-xl text-primary">
            3. Alert
          </h3>
          <p className="text-muted-foreground text-sm xl:text-lg text-pretty">
            Submit your report to help our community to stay informed and safe.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Home;
