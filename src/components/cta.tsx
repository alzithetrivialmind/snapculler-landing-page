import { Download } from "lucide-react"
import { useState, useEffect } from "react"
import { detectOS, type OS } from "../utils/os"

const serif = { fontFamily: "'Instrument Serif', serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

export function CTA() {
    const [stats, setStats] = useState<{ latest_version: string } | null>(null)
    const [os, setOS] = useState<OS>("win")

    useEffect(() => {
        setOS(detectOS())
        fetch('https://snap-culler-proxy.vercel.app/api/stats')
            .then(res => res.json())
            .then(data => {
                if (data && data.latest_version) {
                    setStats(data)
                }
            })
            .catch(err => console.error("Failed to fetch stats", err))
    }, [])

    const version = stats?.latest_version || "1.2.2"
    const fileName = os === 'mac' 
        ? `SnapCuller-${version}.dmg` 
        : `SnapCuller-Setup-${version}.exe`
    const downloadUrl = `https://snap-culler-proxy.vercel.app/${fileName}`

    return (
        <section className="mx-auto max-w-6xl px-6 py-32 md:py-48 border-t border-foreground/15">
            <div className="flex flex-col items-center text-center">
                <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-10" style={mono}>
                    Ready to start?
                </div>
                
                <h2 className="text-6xl md:text-9xl mb-12 tracking-tight leading-[0.9]" style={serif}>
                    Save 5+ Hours <br />
                    <span className="italic text-foreground/50">Every Week</span>
                </h2>
                
                <p className="text-sm text-foreground/60 max-w-xl mx-auto mb-16 leading-relaxed">
                    Stop fighting your software. Start culling at the speed of muscle memory. Join pro shooters who value their time.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a
                        href={downloadUrl}
                        className="inline-flex h-12 items-center justify-center bg-foreground text-background px-8 text-[11px] uppercase tracking-widest hover:bg-foreground/90 transition-colors gap-3 w-full sm:w-auto"
                        style={mono}
                    >
                        <Download className="h-4 w-4" />
                        Download Free Forever
                    </a>
                    <a
                        href="https://alzi.gumroad.com/l/snapculler"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center border border-foreground text-foreground bg-transparent hover:bg-foreground/5 px-8 text-[11px] uppercase tracking-widest transition-colors w-full sm:w-auto"
                        style={mono}
                    >
                        Upgrade to Pro
                    </a>
                </div>
            </div>
        </section>
    )
}
