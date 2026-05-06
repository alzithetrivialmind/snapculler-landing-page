import { Camera, Zap, Shield, Star } from "lucide-react"

const serif = { fontFamily: "'Instrument Serif', serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

const stats = [
    { icon: Camera, value: "15+", label: "RAW Formats Supported" },
    { icon: Zap, value: "<50ms", label: "Image Load Time" },
    { icon: Shield, value: "100%", label: "Offline & Private" },
    { icon: Star, value: "5-Star", label: "Rating System" },
]

const testimonials = [
    {
        quote: "SnapCuller saved me hours on my wedding shoots. The keyboard-first workflow is exactly what I needed.",
        name: "Sarah Chen",
        role: "Wedding Photographer",
    },
    {
        quote: "Finally, a culling tool that handles my Sony ARW files natively. The XMP export to Lightroom is seamless.",
        name: "Marcus Webb",
        role: "Portrait Photographer",
    },
    {
        quote: "I switched from Photo Mechanic. SnapCuller is faster, cleaner, and the price is unbeatable.",
        name: "Lisa Morales",
        role: "Event Photographer",
    },
]

export function Testimonials() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-24 md:py-32 border-t border-foreground/15">
            <div
                className="flex items-center justify-between pt-6 text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-20"
                style={mono}
            >
                <span>Validation</span>
                <span>Loved by Photographers</span>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-32 border-b border-foreground/15 pb-20">
                {stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                        <stat.icon className="h-5 w-5 text-foreground/40 mb-6" strokeWidth={1.5} />
                        <div className="text-4xl md:text-5xl tracking-tight mb-2" style={serif}>
                            {stat.value}
                        </div>
                        <div className="text-[11px] uppercase tracking-widest text-foreground/50" style={mono}>
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {testimonials.map((t, i) => (
                    <div key={i} className="flex flex-col">
                        <div className="flex gap-1 mb-8 opacity-40">
                            {Array.from({ length: 5 }).map((_, si) => (
                                <Star key={si} className="h-3 w-3 fill-foreground text-foreground" />
                            ))}
                        </div>
                        <p className="text-foreground/80 leading-relaxed mb-10 italic flex-1" style={serif}>
                            <span className="text-2xl leading-normal">"{t.quote}"</span>
                        </p>
                        <div className="pt-6 border-t border-foreground/15">
                            <div className="font-bold text-sm text-foreground">{t.name}</div>
                            <div className="text-[10px] uppercase tracking-widest text-foreground/40 mt-1" style={mono}>
                                {t.role}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
