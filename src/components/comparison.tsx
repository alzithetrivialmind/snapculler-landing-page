import { Check, Minus } from "lucide-react"

const serif = { fontFamily: "'Instrument Serif', serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

type FeatureValue = boolean | string

interface ComparisonFeature {
    category: string
    features: {
        name: string
        free: FeatureValue
        pro: FeatureValue
    }[]
}

const comparison: ComparisonFeature[] = [
    {
        category: "Image Viewing",
        features: [
            { name: "JPG, PNG, WebP Support", free: true, pro: true },
            { name: "RAW & HEIC Support (All Manufacturers)", free: false, pro: true },
            { name: "Instant Embedded Preview Extraction", free: false, pro: true },
            { name: "Smart Prefetching (Next/Prev)", free: true, pro: true },
            { name: "Zoom & Pan (up to 5×)", free: true, pro: true },
        ]
    },
    {
        category: "Workflow Speed",
        features: [
            { name: "Zero Import Time (Direct Access)", free: true, pro: true },
            { name: "Muscle Memory Shortcuts (1-key actions)", free: true, pro: true },
            { name: "Dynamic Workflow Presets (Project Identities)", free: "1 Fixed Profile", pro: "Unlimited" },
            { name: "Memory Management (10,000+ photos)", free: true, pro: true },
            { name: "Safety Net (Ctrl Z Undo System)", free: true, pro: true },
            { name: "Auto Advance after Action", free: false, pro: true },
        ]
    },
    {
        category: "Professional Tools",
        features: [
            { name: "Focus Peaking (Sharpness Check)", free: false, pro: true },
            { name: "Smart Face Detection (Sharpness Check)", free: false, pro: true },
            { name: "Exposure Warnings (Clipping)", free: false, pro: true },
            { name: "Compare View (Side by Side)", free: false, pro: true },
            { name: "Zoom Sync (Locked Pan/Zoom)", free: false, pro: true },
            { name: "Burst Stacking (Group similar shots)", free: false, pro: true },
        ]
    },
    {
        category: "Organization",
        features: [
            { name: "Custom Move/Copy Buckets", free: "Max 3", pro: "Unlimited" },
            { name: "Star Ratings & Color Labels", free: true, pro: true },
            { name: "Filter by Rating / Label", free: true, pro: true },
            { name: "Group By Camera/Lens/ISO", free: false, pro: true },
            { name: "Advanced EXIF Filter (Lens/ISO)", free: false, pro: true },
        ]
    },
    {
        category: "Metadata & Integration",
        features: [
            { name: "XMP Sidecar Export (Lightroom/C1)", free: false, pro: true },
            { name: "Batch Rename (Prefix + Sequential)", free: false, pro: true },
            { name: "External Editor Integration", free: false, pro: true },
            { name: "Full EXIF Data Panel", free: "Basic", pro: "Full" },
            { name: "100% Offline Performance", free: true, pro: true },
        ]
    },
]

function ValueCell({ value }: { value: FeatureValue }) {
    if (value === true) {
        return <Check className="h-4 w-4 text-foreground/80 mx-auto" />
    }
    if (value === false) {
        return <Minus className="h-4 w-4 text-foreground/20 mx-auto" />
    }
    return (
        <span className="text-[10px] uppercase tracking-widest text-foreground/70" style={mono}>{value}</span>
    )
}

export function Comparison() {
    return (
        <section id="comparison" className="mx-auto max-w-6xl px-6 py-24 md:py-32 border-t border-foreground/15">
            <div
                className="flex items-center justify-between pt-6 text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-20"
                style={mono}
            >
                <span>Breakdown</span>
                <span>Free vs Pro</span>
            </div>

            <div className="border border-foreground/15">
                {/* Table Header */}
                <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_180px_180px] border-b border-foreground/15 bg-foreground/5">
                    <div className="px-6 py-6 text-[10px] uppercase tracking-widest text-foreground/40" style={mono}>Features</div>
                    <div className="px-4 py-6 text-center text-[10px] uppercase tracking-widest text-foreground/60" style={mono}>Free</div>
                    <div className="px-4 py-6 text-center text-[10px] uppercase tracking-widest text-foreground font-bold" style={mono}>Pro</div>
                </div>

                {/* Table Body */}
                {comparison.map((group, gi) => (
                    <div key={gi}>
                        {/* Category Header */}
                        <div className="px-6 py-4 border-b border-foreground/15 bg-foreground/[0.02]">
                            <span className="text-[10px] uppercase tracking-widest text-foreground/50" style={mono}>{group.category}</span>
                        </div>

                        {/* Feature Rows */}
                        {group.features.map((feature, fi) => (
                            <div
                                key={fi}
                                className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_180px_180px] border-b border-foreground/15 last:border-b-0 hover:bg-foreground/[0.02] transition-colors"
                            >
                                <div className="px-6 py-4 text-sm text-foreground/80">{feature.name}</div>
                                <div className="px-4 py-4 flex items-center justify-center border-l border-foreground/15">
                                    <ValueCell value={feature.free} />
                                </div>
                                <div className="px-4 py-4 flex items-center justify-center border-l border-foreground/15 bg-foreground/5">
                                    <ValueCell value={feature.pro} />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            
            {/* Upgrade CTA */}
            <div className="text-center mt-16">
                <a
                    href="#pricing"
                    className="inline-flex h-12 items-center justify-center border border-foreground text-foreground bg-transparent hover:bg-foreground hover:text-background px-8 text-[11px] uppercase tracking-widest transition-colors"
                    style={mono}
                >
                    Upgrade to Pro
                </a>
            </div>
        </section>
    )
}
