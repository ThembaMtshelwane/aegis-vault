import { Sparkles } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-background bg-mystic-pattern flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Ambience - Pulsing Ember Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent animate-glow" />

      {/* Central Totem */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 mb-8 relative">
          {/* Outer Rotating Magical Ring */}
          <div className="absolute inset-0 border-2 border-primary/20 border-t-primary rounded-full animate-spin shadow-glow" />

          {/* Inner Pulsing Relic */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-primary animate-float" />
          </div>
        </div>

        {/* Textual Feedback in Gold Gradient */}
        <h2 className="font-display text-2xl text-gradient-gold tracking-[0.2em] mb-2 animate-shimmer">
          SUMMONING
        </h2>
        <p className="font-body text-muted-foreground italic tracking-widest text-sm uppercase">
          Consulting the ancient scrolls...
        </p>
      </div>

      {/* Subtle Progress Bar */}
      <div className="absolute bottom-20 w-64 h-px bg-border overflow-hidden">
        <div
          className="h-full bg-gradient-gold w-1/2 animate-[shimmer_2s_infinite_linear]"
          style={{ backgroundSize: "200% 100%" }}
        />
      </div>
    </div>
  );
};

export default Loading;
