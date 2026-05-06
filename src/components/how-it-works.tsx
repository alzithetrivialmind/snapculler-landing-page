import { FolderOpen, Keyboard, Download } from "lucide-react"

const serif = { fontFamily: "'Instrument Serif', serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

const steps = [
    {
        icon: FolderOpen,
        step: "01",
        title: "Point & Shoot",
        description: "Simply drag & drop any folder. SnapCuller instantly accesses all your photos with zero import time. Includes professional RAW formats.",
        image: "/assets/point-and-shoot.mp4",
        isVideo: true
    },
    {
        icon: Keyboard,
        step: "02",
        title: "Keyboard Mastery",
        description: "Master the one-key workflow. Assign favorite and reject actions to specific keys and let your muscle memory handle the rest at lightning speed.",
        image: "/assets/screenshots/Single View.png"
    },
    {
        icon: Download,
        step: "03",
        title: "One-Click Handoff",
        description: "Your ratings and labels are exported as XMP sidecars. Everything is ready to be opened in Lightroom or Capture One for the final edit.",
        image: "/assets/screenshots/Complete Filter.png"
    },
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24 md:py-32 border-t border-foreground/15">
            <div
                className="flex items-center justify-between pt-6 text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-16"
                style={mono}
            >
                <span>Process</span>
                <span>The Speed of Thought</span>
            </div>

            <div className="space-y-32">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col lg:flex-row gap-12 lg:gap-24 group">
                        {/* Content */}
                        <div className="flex-1 lg:max-w-md pt-4">
                            <div className="text-foreground/30 mb-8" style={serif}>
                                <span className="text-6xl md:text-8xl leading-none">{step.step}</span>
                            </div>
                            
                            <div className="flex items-center gap-4 mb-8 text-foreground/60">
                                <step.icon className="h-6 w-6" strokeWidth={1.5} />
                            </div>

                            <h3 className="text-4xl md:text-5xl mb-6" style={serif}>
                                {step.title}
                            </h3>
                            <p className="text-foreground/70 leading-relaxed text-base">
                                {step.description}
                            </p>
                        </div>

                        {/* Image/Video Frame */}
                        <div className="flex-[2] w-full">
                            <div className="border border-foreground/15 overflow-hidden">
                                    {step.isVideo ? (
                                        <video 
                                            src={step.image} 
                                            autoPlay 
                                            loop 
                                            muted 
                                            playsInline
                                            className="w-full h-auto block"
                                        />
                                    ) : (
                                        <img 
                                            src={step.image} 
                                            alt={step.title}
                                            className="w-full h-auto block"
                                        />
                                    )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
