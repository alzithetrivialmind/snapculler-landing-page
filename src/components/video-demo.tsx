import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useState, useRef } from "react"

const serif = { fontFamily: "'Instrument Serif', serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

const screenshots = [
    {
        src: "/assets/screenshots/Single View.png",
        label: "SnapCuller interface showing instant RAW photo preview for wedding photography",
    },
    {
        src: "/assets/screenshots/Grid View.png",
        label: "Grid View. High-speed thumbnail overview with professional ratings and color labels.",
    },
    {
        src: "/assets/screenshots/Compare View or Side by Side view zoom sync.png",
        label: "Compare View. Side-by-side A/B comparison for selecting the sharpest frame.",
    },
]

export function VideoDemo() {
    const [current, setCurrent] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const prev = () => setCurrent((c) => (c - 1 + screenshots.length) % screenshots.length)
    const next = () => setCurrent((c) => (c + 1) % screenshots.length)

    const handlePlayVideo = () => {
        setIsPlaying(true)
        setTimeout(() => videoRef.current?.play(), 100)
    }

    return (
        <section id="demo" className="mx-auto max-w-6xl px-6 py-24 md:py-32 border-t border-foreground/15">
            <div
                className="flex items-center justify-between pt-6 text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-16"
                style={mono}
            >
                <span>Interface</span>
                <span>See it in action</span>
            </div>

            <h2 className="text-4xl md:text-6xl mb-12 tracking-tight" style={serif}>
                Experience the speed.
            </h2>

            {/* Video / Screenshot Frame */}
            <div className="relative border border-foreground/15 overflow-hidden">
                    {/* Top Bar (Window Controls) */}
                    <div className="h-8 border-b border-foreground/15 bg-background flex items-center px-4 gap-2">
                        <div className="w-2.5 h-2.5 rounded-full border border-foreground/20" />
                        <div className="w-2.5 h-2.5 rounded-full border border-foreground/20" />
                        <div className="w-2.5 h-2.5 rounded-full border border-foreground/20" />
                        <span className="text-[10px] uppercase tracking-widest text-foreground/40 ml-3" style={mono}>SnapCuller</span>
                    </div>

                    {/* Content Area. No height cap, let image fill naturally */}
                    <div className="relative overflow-hidden">
                        {isPlaying ? (
                            /* ===== VIDEO PLAYER ===== */
                            <video
                                ref={videoRef}
                                className="w-full h-auto max-h-[85vh] block"
                                controls
                                poster="/assets/screenshots/Single View.png"
                                onEnded={() => setIsPlaying(false)}
                            >
                                <source src="/demo-video.mp4" type="video/mp4" />
                                <source src="/demo-video.webm" type="video/webm" />
                            </video>
                        ) : (
                            /* ===== SCREENSHOT CAROUSEL AND PLAY BUTTON ===== */
                            <div className="w-full">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={current}
                                        src={screenshots[current].src}
                                        alt={screenshots[current].label}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-full h-auto block"
                                    />
                                </AnimatePresence>

                                {/* Play Video Overlay Button */}
                                <button
                                    onClick={handlePlayVideo}
                                    className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 hover:opacity-100 transition-opacity duration-300 group"
                                    aria-label="Play demo video"
                                >
                                    <div className="w-16 h-16 border border-foreground/20 bg-background/80 flex items-center justify-center transition-transform hover:scale-105">
                                        <Play className="w-6 h-6 text-foreground fill-foreground/20 translate-x-0.5" />
                                    </div>
                                </button>

                                {/* Navigation Arrows */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); prev() }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-foreground/15 bg-background/80 text-foreground flex items-center justify-center hover:bg-background transition-colors"
                                    aria-label="Previous screenshot"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); next() }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 border border-foreground/15 bg-background/80 text-foreground flex items-center justify-center hover:bg-background transition-colors"
                                    aria-label="Next screenshot"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Caption + Dots */}
                    {!isPlaying && (
                        <div className="bg-background border-t border-foreground/15 py-4 px-6 flex flex-col items-center gap-4">
                            <p className="text-[11px] uppercase tracking-[0.1em] text-foreground/50" style={mono}>
                                {screenshots[current].label}
                            </p>
                            <div className="flex gap-2">
                                {screenshots.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        className={`h-1.5 transition-all ${i === current
                                                ? "bg-foreground w-6"
                                                : "bg-foreground/20 hover:bg-foreground/40 w-1.5"
                                            }`}
                                        aria-label={`Go to screenshot ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
        </section>
    )
}
