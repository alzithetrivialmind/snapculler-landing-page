import { Zap, Image, Keyboard, Eye, Lock, HardDrive, Undo2, Save, Layers } from "lucide-react"

const serif = { fontFamily: "'Instrument Serif', serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

const features = [
    {
        icon: Zap,
        title: "Blazing Fast",
        description: "Built for speed with Electron and native image processing. Cull thousands of photos in minutes, not hours.",
    },
    {
        icon: Image,
        title: "RAW Support",
        description: "Native support for RAW formats from all major camera manufacturers (Canon, Sony, Nikon, Fujifilm, etc).",
    },
    {
        icon: Keyboard,
        title: "Keyboard Driven",
        description: "Keep your hands on the keyboard. Rate, flag, and navigate without touching the mouse.",
    },
    {
        icon: Undo2,
        title: "Smart Undo",
        description: "Made a mistake? Just hit Ctrl Z to undo moves, ratings, or flags instantly.",
    },
    {
        icon: Eye,
        title: "Instant Preview",
        description: "Zero latency full screen previews with smart prefetching for the next image.",
    },
    {
        icon: Save,
        title: "Auto Save",
        description: "Never lose progress. PhotoCuller remembers your last folder and selection on restart.",
    },
    {
        icon: Lock,
        title: "Local Privacy",
        description: "Your photos never leave your device. PhotoCuller works 100% offline securely.",
    },
    {
        icon: HardDrive,
        title: "Efficient Storage",
        description: "Review images directly from your SD card or SSD without importing them first.",
    },
    {
        icon: Layers,
        title: "XMP Sidecars",
        description: "Ratings and labels sync with Lightroom and Capture One via standard XMP files.",
    }
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div
          className="flex items-center justify-between border-t border-foreground/15 pt-6 text-[11px] uppercase tracking-[0.2em] text-foreground/60"
          style={mono}
        >
          <span>Selected features</span>
          <span>Core Engine</span>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const num = (i + 1).toString().padStart(2, '0');
            return (
              <div
                key={num}
                className="group flex flex-col items-start"
              >
                <div className="mb-6 text-foreground/40 transition-colors group-hover:text-foreground">
                    <feature.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl md:text-3xl mb-4" style={serif}>
                  {feature.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {feature.description}
                </p>
                
                <div className="mt-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-foreground/30" style={mono}>
                  <span className="w-6 border-t border-foreground/20"></span>
                  <span>{num}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>
  )
}
