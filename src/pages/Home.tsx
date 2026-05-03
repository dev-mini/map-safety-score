import Hero from '@/components/Hero';
import { MapPinned, ShieldAlert, Speech } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col relative h-full w-full">
      <img
        src="/src/assets/images/bg-map.png"
        alt="Map background"
        className="flex absolute top-0 left-0 w-full h-84 object-right object-cover rounded-xl md:object-top brightness-50 md:brightness-90 drop-shadow-xs drop-shadow-primary/80 -z-10 mask-[linear-gradient(to_bottom,black,transparent)]"
      />
      <Hero />
      <section className="flex flex-col md:flex-row mt-28 gap-8">
        <article className="flex flex-col md:flex-1/3 gap-2 px-4 rounded-lg py-4 bg-card w-full">
          <MapPinned className="size-8 text-muted-foreground" />
          <h3 className="font-bold text-lg text-primary/80">1. Locate</h3>
          <p className="text-muted-foreground text-sm text-pretty">
            Pinpoint the exact area of concern on our high-precision digital
            map.
          </p>
        </article>
        <article className="flex flex-col md:flex-1/3 gap-2 px-4 rounded-lg py-4 bg-card w-full">
          <Speech className="size-8 text-muted-foreground" />
          <h3 className="font-bold text-lg text-primary/80">2. Describe</h3>
          <p className="text-muted-foreground text-sm text-pretty">
            Provide essential details through secure, structured data fields.
          </p>
        </article>
        <article className="flex flex-col md:flex-1/3 gap-2 px-4 rounded-lg py-4 bg-card w-full">
          <ShieldAlert className="size-8 text-muted-foreground" />
          <h3 className="font-bold text-lg text-primary/80">3. Alert</h3>
          <p className="text-muted-foreground text-sm text-pretty">
            Submit your report to help our community to stay informed and safe.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Home;
