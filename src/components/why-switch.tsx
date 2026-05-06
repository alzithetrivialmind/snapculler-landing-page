import { DollarSign, Zap, Sparkles } from "lucide-react"

const serif = { fontFamily: "'Instrument Serif', serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

const competitors = [
    {
        name: "Photo Mechanic",
        price: "$139",
        painPoint: "Powerful but expensive, with a dated interface from the 2000s.",
    },
    {
        name: "Adobe Lightroom",
        price: "$10/mo",
        painPoint: "Bloated with editing tools you don't need just to cull photos.",
    },
    {
        name: "FastRawViewer",
        price: "$20",
        painPoint: "Technical but no culling buckets, no XMP export, no modern UI.",
    },
]

const advantages = [
    {
        icon: DollarSign,
        title: "Pay Once, Own Forever",
        description: "No subscriptions. No annual renewals. One purchase, lifetime access. While others charge $10/month or $139 upfront, SnapCuller Pro is just $29 — forever.",
        highlight: "$29 one-time",
    },
    {
        icon: Zap,
        title: "Built for Flow",
        description: "SnapCuller does one thing: fast selection. No editing tools, no cloud sync, and no tedious catalog imports. Just instant previews that let you find your best work in seconds.",
        highlight: "Zero Import",
    },
    {
        icon: Sparkles,
        title: "Keyboard Mastery",
        description: "A refined workflow built for speed. Use custom keyboard shortcuts to rate and move files instantly. It's designed to become muscle memory, so you can cull without thinking.",
        highlight: "Muscle Memory",
    },
]

export function WhySwitch() {
    return (
        <section id="why-switch" className="mx-auto max-w-6xl px-6 py-24 md:py-32 border-t border-foreground/15">
            <div
                className="flex items-center justify-between pt-6 text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-24"
                style={mono}
            >
                <span>Comparison</span>
                <span>Why Switch to SnapCuller?</span>
            </div>

            {/* Competitor Pain Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 mb-24">
                {competitors.map((comp, i) => (
                    <div key={i} className="flex flex-col border-t border-foreground/15 pt-6">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-xl" style={serif}>{comp.name}</span>
                            <span className="text-[10px] uppercase tracking-widest px-2 py-1 bg-foreground/5 text-foreground/50" style={mono}>
                                {comp.price}
                            </span>
                        </div>
                        <p className="text-sm text-foreground/60 leading-relaxed">
                            {comp.painPoint}
                        </p>
                    </div>
                ))}
            </div>

            <div className="h-px w-full bg-foreground/15 mb-24" />

            {/* SnapCuller Advantages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                {advantages.map((adv, i) => (
                    <div key={i} className="relative flex flex-col items-start group">
                        <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-6" style={mono}>
                            — {adv.highlight}
                        </div>
                        <div className="mb-6 text-foreground/40 transition-colors group-hover:text-foreground">
                            <adv.icon className="h-6 w-6" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl md:text-3xl mb-4" style={serif}>{adv.title}</h3>
                        <p className="text-foreground/70 leading-relaxed text-sm">
                            {adv.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
