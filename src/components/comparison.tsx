import { Check, Minus } from "lucide-react"
import { motion } from "framer-motion"

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
            { name: "Safety Net (Ctrl+Z Undo System)", free: true, pro: true },
            { name: "Auto-Advance after Action", free: false, pro: true },
        ]
    },
    {
        category: "Professional Tools",
        features: [
            { name: "Focus Peaking (Sharpness Check)", free: false, pro: true },
            { name: "Compare View (Side-by-Side)", free: false, pro: true },
            { name: "Zoom Sync (Locked Pan/Zoom)", free: false, pro: true },
            { name: "Burst Stacking (Group similar shots)", free: false, pro: true },
        ]
    },
    {
        category: "Organization",
        features: [
            { name: "Custom Move/Copy Buckets", free: "Max 3", pro: "Unlimited" },
            { name: "Star Ratings & Color Labels", free: false, pro: true },
            { name: "Filter by Rating / Label", free: false, pro: true },
            { name: "Advanced EXIF Filter (Lens/ISO)", free: false, pro: true },
        ]
    },
    {
        category: "Metadata & Integration",
        features: [
            { name: "XMP Sidecar Export (Lightroom/C1)", free: false, pro: true },
            { name: "Batch Rename (Prefix + Sequential)", free: false, pro: true },
            { name: "Full EXIF Data Panel", free: "Basic", pro: "Full" },
            { name: "100% Offline Performance", free: true, pro: true },
        ]
    },
]

function ValueCell({ value }: { value: FeatureValue }) {
    if (value === true) {
        return (
            <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-500/20">
                <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            </div>
        )
    }
    if (value === false) {
        return (
            <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800">
                <Minus className="h-3.5 w-3.5 text-neutral-400 dark:text-neutral-600" />
            </div>
        )
    }
    return (
        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">{value}</span>
    )
}

export function Comparison() {
    return (
        <section id="comparison" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
                        Free vs <span className="text-indigo-500 dark:text-indigo-400">Pro</span>
                    </h2>
                    <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
                        A detailed breakdown of every feature across both plans.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 overflow-hidden"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] sticky top-0 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 z-10">
                        <div className="px-6 py-4 text-sm font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Feature</div>
                        <div className="px-4 py-4 text-center text-sm font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Free</div>
                        <div className="px-4 py-4 text-center text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Pro</div>
                    </div>

                    {/* Table Body */}
                    {comparison.map((group, gi) => (
                        <div key={gi}>
                            {/* Category Header */}
                            <div className="px-6 py-3 bg-neutral-100/50 dark:bg-neutral-800/30 border-b border-neutral-200 dark:border-neutral-800">
                                <span className="text-sm font-bold text-neutral-900 dark:text-white">{group.category}</span>
                            </div>

                            {/* Feature Rows */}
                            {group.features.map((feature, fi) => (
                                <div
                                    key={fi}
                                    className={`grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] border-b border-neutral-100 dark:border-neutral-800/50 last:border-b-0 hover:bg-neutral-50 dark:hover:bg-neutral-800/20 transition-colors ${feature.pro === true && feature.free === false ? "" : ""
                                        }`}
                                >
                                    <div className="px-6 py-3.5 text-sm text-neutral-700 dark:text-neutral-300">{feature.name}</div>
                                    <div className="px-4 py-3.5 flex items-center justify-center">
                                        <ValueCell value={feature.free} />
                                    </div>
                                    <div className="px-4 py-3.5 flex items-center justify-center">
                                        <ValueCell value={feature.pro} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                    {/* Bottom CTA */}
                    <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] bg-neutral-50 dark:bg-neutral-800/50 border-t border-neutral-200 dark:border-neutral-700">
                        <div className="px-6 py-5">
                            <span className="text-sm font-bold text-neutral-900 dark:text-white">Price</span>
                        </div>
                        <div className="px-4 py-5 flex items-center justify-center">
                            <span className="text-lg font-black text-neutral-900 dark:text-white">$0</span>
                        </div>
                        <div className="px-4 py-5 flex items-center justify-center">
                            <span className="text-lg font-black text-indigo-600 dark:text-indigo-400">$29</span>
                        </div>
                    </div>
                </motion.div>

                {/* Upgrade CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <a
                        href="#pricing"
                        className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition-all hover:scale-105 shadow-lg shadow-indigo-500/25"
                    >
                        Upgrade to Pro
                    </a>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-3">One-time payment. No subscription.</p>
                </motion.div>
            </div>
        </section>
    )
}
