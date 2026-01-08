import { Sparkles, Crown, Scroll } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20  relative overflow-hidden mystic-pattern"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-linear-to-r from-transparent to-primary/50" />
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-primary/80 uppercase tracking-[0.3em] text-sm font-display">
              Our Legacy
            </span>
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <div className="h-px w-12 bg-linear-to-l from-transparent to-primary/50" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
            Relics of the <span className="text-gradient-gold">Divine</span>
          </h2>

          {/* Main description */}
          <p className="text-muted-foreground max-w-xl mx-auto">
            Within these hallowed halls lie the treasured belongings of old gods
            and legends—artifacts whispered about in ancient tomes and sung of
            by bards across forgotten realms. Each item in our collection
            carries the weight of millennia, imbued with the essence of titans
            who shaped the very fabric of existence.
          </p>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Crown className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                Divine Origins
              </h3>
              <p className="text-muted-foreground text-sm font-body">
                Weapons wielded by celestial beings, armor blessed by forgotten
                pantheons, and jewels that once adorned the thrones of elder
                gods.
              </p>
            </div>

            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Scroll className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                Legendary Tales
              </h3>
              <p className="text-muted-foreground text-sm font-body">
                Every artifact comes with its story—tales of heroism, tragedy,
                and triumph that echo through the ages and await their next
                chapter.
              </p>
            </div>

            <div className="p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                Eternal Power
              </h3>
              <p className="text-muted-foreground text-sm font-body">
                These relics hold power that transcends mortal
                understanding—magic forged in the primordial fires of creation
                itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
