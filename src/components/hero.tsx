import { Apple, Monitor, Zap, Users, Shield } from "lucide-react"
import { useState, useEffect } from "react"
import { detectOS, type OS } from "../utils/os"

const serif = { fontFamily: "'Instrument Serif', serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

export function Hero() {
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
    const versionLabel = stats?.latest_version ? `v${stats.latest_version}` : "v1.2.2"
    
    // Dynamic Download Logic
    const version = stats?.latest_version || "1.2.2"
    const platformName = os === 'mac' ? 'macOS' : 'Windows'
    const fileName = os === 'mac' 
        ? `SnapCuller-${version}.dmg` 
        : `SnapCuller-Setup-${version}.exe`
    const downloadUrl = `https://snap-culler-proxy.vercel.app/${fileName}`

    return (
        <section className="pt-24 pb-32 md:pt-40 md:pb-48 mx-auto max-w-6xl px-6">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground/60" style={mono}>
                <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--gradient-brand)" }}
                />
                {versionLabel} Released
            </div>
            <h1
                className="mt-8 text-[14vw] leading-[0.95] tracking-tight md:text-[8.5rem]"
                style={serif}
            >
                Cull photos at
                <br />
                <em
                    className="italic bg-clip-text text-transparent not-italic"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                    muscle memory
                </em>{" "}
                <br />
                speed.
            </h1>
            <p className="mt-10 max-w-md text-base leading-relaxed text-foreground/70">
                The professional engine to sort thousands of shots instantly. No import lag, rapid viewing, and a workflow that keeps your hands on the keyboard.
            </p>

            <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-10">
                <a
                    href={downloadUrl}
                    className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em]"
                    style={mono}
                >
                    <span className="border-b border-foreground/40 pb-1 transition-colors group-hover:border-foreground">
                        Download for {platformName}
                    </span>
                    <span
                        className="bg-clip-text text-transparent transition-transform group-hover:translate-x-1"
                        style={{ backgroundImage: "var(--gradient-brand)" }}
                    >
                        →
                    </span>
                </a>
                <a
                    href="#features"
                    className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-foreground/60 hover:text-foreground"
                    style={mono}
                >
                    <span className="border-b border-transparent pb-1 transition-colors group-hover:border-foreground/40">
                        Explore Features
                    </span>
                </a>
            </div>

            {/* Trust Section styled minimally */}
            <div className="mt-24 flex flex-wrap items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-foreground/40" style={mono}>
                <div className="flex items-center gap-2">
                    <Users className="h-3 w-3" />
                    <span>{displayedDownloads.toLocaleString()}+ photogs</span>
                </div>
                <div className="flex items-center gap-2">
                    <Shield className="h-3 w-3" />
                    <span>Local Privacy</span>
                </div>
                <div className="flex items-center gap-2">
                    <Zap className="h-3 w-3" />
                    <span>Fast Engine</span>
                </div>
            </div>
        </section>
    )
}
