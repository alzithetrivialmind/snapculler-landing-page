import { Check, X, Users, Apple, Monitor } from "lucide-react"
import { useState, useEffect } from "react"
import { detectOS, type OS } from "../utils/os"

const serif = { fontFamily: "'Instrument Serif', serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

export function Pricing() {
    const [stats, setStats] = useState<{ total_downloads: number, latest_version: string } | null>(null)
    const [os, setOS] = useState<OS>("win")

    useEffect(() => {
        setOS(detectOS())
        
        fetch('https://snap-culler-proxy.vercel.app/api/stats')
            .then(res => res.json())
            .then(data => {
                if (data && data.total_downloads !== undefined) {
                    setStats(data)
                }
            })
            .catch(err => console.error("Failed to fetch stats", err))
    }, [])

    const displayedDownloads = stats ? stats.total_downloads + 500 : 500
    const version = stats?.latest_version || "1.2.2"
    const platformName = os === 'mac' ? 'macOS' : 'Windows'
    const fileName = os === 'mac' 
        ? `SnapCuller-${version}.dmg` 
        : `SnapCuller-Setup-${version}.exe`
    const downloadUrl = `https://snap-culler-proxy.vercel.app/${fileName}`
    const PlatformIcon = os === 'mac' ? Apple : Monitor

    return (
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div
                className="flex items-center justify-between border-t border-foreground/15 pt-6 text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-16"
                style={mono}
            >
                <span>Pricing</span>
                <span>Single Payment</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Free Plan */}
                <div className="flex flex-col border border-foreground/15 p-10">
                    <h3 className="text-3xl mb-4" style={serif}>Free</h3>
                    <div className="text-5xl mb-6 tracking-tight flex items-baseline gap-2" style={serif}>
                        $0
                        <span className="text-[11px] uppercase tracking-widest text-foreground/40" style={mono}>/ forever</span>
                    </div>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-10">
                        The fastest way to clean up your gallery.
                    </p>

                    <ul className="space-y-4 mb-12 flex-1 text-sm text-foreground/80">
                        {[
                            "Blazing Fast JPG/PNG Viewer",
                            "Standard Zoom & Pan",
                            "Flag (Pick) & Reject",
                            "Star Ratings & Color Labels",
                            "Manual Move/Copy"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="h-4 w-4 mt-0.5 opacity-50" />
                                <span>{item}</span>
                            </li>
                        ))}
                        <li className="flex items-start gap-3 opacity-40">
                            <X className="h-4 w-4 mt-0.5" />
                            <span>No RAW Support</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="h-4 w-4 mt-0.5 opacity-50" />
                            <span>Max 3 Buckets</span>
                        </li>
                    </ul>

                    <div className="mt-auto space-y-4">
                        <a 
                            href={downloadUrl} 
                            className="group flex items-center justify-center border border-foreground/15 bg-transparent h-12 text-[11px] uppercase tracking-widest hover:bg-foreground/5 transition-colors w-full gap-3"
                            style={mono}
                        >
                            <PlatformIcon className="h-3 w-3" />
                            Download
                        </a>
                        <div className="text-center text-[10px] uppercase tracking-[0.2em] text-foreground/40" style={mono}>
                            {displayedDownloads.toLocaleString()}+ Downloaded
                        </div>
                    </div>
                </div>

                {/* Pro Plan */}
                <div className="flex flex-col border border-foreground/15 p-10 bg-foreground/5 relative overflow-hidden group">
                    <div className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.2em] bg-foreground text-background px-3 py-1" style={mono}>
                        Best Value
                    </div>
                    
                    <h3 className="text-3xl mb-4" style={serif}>Pro</h3>
                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="text-5xl tracking-tight" style={serif}>$29</span>
                        <span className="text-xl text-foreground/30 line-through" style={serif}>$39</span>
                    </div>
                    
                    <p className="text-foreground/80 text-sm leading-relaxed mb-2 font-medium">
                        The ultimate workflow for pros.
                    </p>
                    <p className="text-foreground/50 text-[11px] uppercase tracking-widest mb-10" style={mono}>
                        Single payment. Lifetime access.
                    </p>

                    <ul className="space-y-4 mb-12 flex-1 text-sm text-foreground/90">
                        {[
                            "Native RAW + HEIC Support",
                            "Advanced EXIF Filtering & Grouping",
                            "Smart Face Detection",
                            "Unlimited Workflow Presets",
                            "Zoom Sync & Focus Peaking",
                            "XMP Sidecar Export (Lightroom)",
                            "Batch Rename & Auto-Advance",
                            "Unlimited Custom Buckets"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="h-4 w-4 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto space-y-4">
                        <a 
                            href="https://alzi.gumroad.com/l/snapculler" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group flex items-center justify-center bg-foreground text-background h-12 text-[11px] uppercase tracking-widest hover:bg-foreground/90 transition-colors w-full"
                            style={mono}
                        >
                            Buy SnapCuller Pro
                        </a>
                        <div className="text-center text-[10px] uppercase tracking-[0.2em] text-foreground/50" style={mono}>
                            14 Day Money Back Guarantee
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
