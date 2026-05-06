import { motion } from "framer-motion"
import { Rocket, Sparkles, ArrowLeft } from "lucide-react"
import Layout from "@/components/layout"
import { SEO } from "@/components/seo"

const serif = { fontFamily: "'Instrument Serif', serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

const releases = [
    {
        version: "1.2.2",
        date: "2026-04-28",
        latest: true,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Burst Stacking Overhaul",
                        description: "A premium Peek overlay, manual stack controls, and smart keyboard navigation for a non-destructive burst exploration workflow.",
                    },
                    {
                        label: "Global Selective RAW Keeping",
                        description: "A game-changer for storage management. We've promoted this feature to a global setting—SnapCuller now intelligently skips RAW companion files for non-keepers during both manual Export and quick Bucket actions.",
                    },
                    {
                        label: "Grid & Filmstrip Polish",
                        description: "Static filenames are now always visible, with a redesigned grid engine to prevent label clipping and standardized filmstrip ratios.",
                    },
                    {
                        label: "Export Preferences",
                        description: "Total control over bucket formats (RAW only, JPG only, or both) and simplified Selective RAW logic for keeper safety.",
                    },
                ],
            },
            {
                title: "Improvements & Fixes",
                icon: Sparkles,
                items: [
                    {
                        label: "Thumbnail Stability",
                        description: "Resolved black thumbnail issues with automatic retry logic and cancelled request handling.",
                    },
                    {
                        label: "Settings UI Reliability",
                        description: "Resolved technical issues in the Settings Modal to ensure stable configuration of global storage and gamepad preferences.",
                    },
                    {
                        label: "UI & Code Sanitization",
                        description: "Fixed flattened thumbnails, settings modal glitches, and achieved zero-error TypeScript status across core hooks.",
                    },
                    {
                        label: "Selective RAW Safety",
                        description: "Improved logic to ensure RAW companions are strictly preserved for all starred photos during culling.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.2.1",
        date: "2026-04-27",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Comprehensive Documentation",
                        description: "A complete rewrite of the user guide and landing page documentation, featuring 9 chapters of detailed workflow recipes and professional troubleshooting.",
                    },
                    {
                        label: "IPTC Template Workflow",
                        description: "Refined naming conventions in the sidebar to better distinguish template creation from per-image editing.",
                    },
                ],
            },
            {
                title: "Improvements & Fixes",
                icon: Sparkles,
                items: [
                    {
                        label: "Stable Image Pairing",
                        description: "Fixed sorting inconsistencies when toggling RAW+JPG pairing; gallery results now strictly maintain their original folder index.",
                    },
                    {
                        label: "Adaptive UI Logic",
                        description: "Intelligently hides redundant tools like the sidebar filter in grid view or the IPTC button during multi-select for a cleaner workspace.",
                    },
                    {
                        label: "Premium UI Refinements",
                        description: "Standardized all sidebar UI elements and micro-alignments for a more cohesive and professional user experience.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.2.0",
        date: "2026-04-26",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Maximum Photos per Stack",
                        description: "Set strict limits on stack sizes—perfect for real estate photographers working with consistent HDR brackets.",
                    },
                ],
            },
            {
                title: "Improvements & Fixes",
                icon: Sparkles,
                items: [
                    {
                        label: "Smart Stacking Workflow",
                        description: "Moving or copying a stack now automatically includes all associated RAW and JPG files within that group.",
                    },
                    {
                        label: "Unified UI Feedback",
                        description: "Refined stack badges and header counts to provide clearer feedback when culling complex file groups.",
                    },
                    {
                        label: "Selection Logic",
                        description: "Clicking a selected image now toggles its selection state for more intuitive bulk management.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.9",
        date: "2026-04-22",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Professional Gamepad Support",
                        description: "Cull with maximum comfort using Xbox, PlayStation, or generic controllers. Navigate and rate with tactile precision.",
                    },
                    {
                        label: "Pick/Reject Flag System",
                        description: "Dedicated workflow for flagging photos with clear UI indicators, hotkeys, and grid filtering.",
                    },
                ],
            },
            {
                title: "Improvements",
                icon: Sparkles,
                items: [
                    {
                        label: "Pair-Aware Renaming",
                        description: "Batch renaming now natively links RAW+JPG pairs to maintain perfect synchronization.",
                    },
                    {
                        label: "Visual Precision",
                        description: "Fixed overlay rotation issues to ensure Exposure and Focus Peaking analytical tools align with image orientation.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.8",
        date: "2026-04-08",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Comprehensive Branding Refresh",
                        description: "Transitioned to our new official visual identity, featuring the signature aperture-inspired logotype.",
                    },
                    {
                        label: "Quad-Theme System",
                        description: "Four professionally curated themes: Snap Black, Snap Indigo, Classic Dark, and a high-contrast Light theme.",
                    },
                ],
            },
            {
                title: "UI Improvements",
                icon: Sparkles,
                items: [
                    {
                        label: "Redesigned Splash Screen",
                        description: "A modern, theme-aware startup experience for a more professional first impression.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.6",
        date: "2026-04-03",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Native macOS Support",
                        description: "SnapCuller is now officially available for Mac, running natively on Intel and Apple Silicon (M1/M2/M3/M4).",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.5",
        date: "2026-04-03",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Advanced Metadata Grouping",
                        description: "Instantly group your gallery by Camera model, Lens model, or ISO—perfect for gear-heavy event shoots.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.4",
        date: "2026-04-03",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Professional IPTC Expansion",
                        description: "Added support for 10 high-end Adobe-standard metadata fields.",
                    },
                    {
                        label: "Unified IPTC Editor",
                        description: "Single and Batch editors now feature a unified design with Live Previews of your metadata changes.",
                    },
                    {
                        label: "Image Rotation",
                        description: "Rotate images instantly in Single and Compare views to fix orientation issues.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.3",
        date: "2026-03-31",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "AI Face Detection (Pro)",
                        description: "Dramatically improved face detection accuracy on high-resolution photos using multi-pass grid tiling.",
                    },
                    {
                        label: "Batch IPTC Metadata Editor",
                        description: "Apply metadata to thousands of images at once with support for dynamic macros like {date} or {lens}.",
                    },
                ],
            },
            {
                title: "Improved Features",
                icon: Sparkles,
                items: [
                    {
                        label: "RAW Preview Overhaul",
                        description: "Faster, pixel-perfect previews for ARW, CR2, NEF, and DNG formats.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.1.0",
        date: "2026-03-27",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "IPTC Metadata Templates",
                        description: "Create and manage professional metadata presets for fast tagging.",
                    },
                    {
                        label: "Live Code Replacements",
                        description: "Real-time text expansion macros—type a code and see it instantly expand into full text.",
                    },
                ],
            },
        ],
    },
    {
        version: "1.0.8",
        date: "2026-03-15",
        latest: false,
        sections: [
            {
                title: "What's New",
                icon: Rocket,
                items: [
                    {
                        label: "Initial Stable Release",
                        description: "First stable release featuring RAW support, Compare View, and high-speed culling.",
                    },
                ],
            },
        ],
    },
]

export function ReleasesPage() {
    return (
        <Layout>
            <SEO
                title="Releases & Version History"
                description="Stay updated with the latest SnapCuller features, performance improvements, and bug fixes. View our version history and changelog."
                keywords="SnapCuller releases, photo culling updates, software version history, changelog"
            />
            <main className="pb-24 pt-32">
                <div className="mx-auto max-w-5xl px-6">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-24"
                    >
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors mb-12"
                            style={mono}
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </a>

                        <h1 className="text-5xl md:text-7xl tracking-tight mb-6" style={serif}>
                            Release Notes
                        </h1>
                        <p className="text-foreground/60 max-w-xl">
                            Track every update, improvement, and fix we ship to SnapCuller.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="space-y-16 md:space-y-24">
                        {releases.map((release, releaseIndex) => (
                            <motion.div
                                key={release.version}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: releaseIndex * 0.1 }}
                                className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 border-t border-foreground/15 pt-8 md:pt-12"
                            >
                                {/* Version & Date */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg font-medium" style={mono}>v{release.version}</span>
                                        {release.latest && (
                                            <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-foreground/20 text-foreground/80" style={mono}>
                                                Latest
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/40" style={mono}>
                                        {new Date(release.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </div>
                                </div>

                                {/* Release Content */}
                                <div className="space-y-16">
                                    {release.sections.map((section, sectionIndex) => (
                                        <div key={sectionIndex}>
                                            <h3 className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-8 flex items-center gap-2" style={mono}>
                                                <section.icon className="h-3 w-3" />
                                                {section.title}
                                            </h3>

                                            <ul className="space-y-10">
                                                {section.items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="group">
                                                        <h4 className="text-2xl md:text-3xl mb-3" style={serif}>
                                                            {item.label}
                                                        </h4>
                                                        <p className="text-foreground/70 leading-relaxed max-w-2xl">
                                                            {item.description}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    )
}
