import { Menu, X } from "lucide-react"
import { ThemeLogo } from "@/components/theme-logo"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = ["Features", "Pricing"]

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md border-b border-foreground/5 transition-all duration-300">
            <div className="w-full flex items-center justify-between h-16 px-6 lg:px-12">
                {/* Logo Section */}
                <a href="/" className="flex items-center space-x-2 shrink-0">
                    <ThemeLogo className="h-8 w-auto" />
                    <span className="tracking-[0.18em] text-foreground font-bold font-brand uppercase text-[13px]">SnapCuller</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-12">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`/#${item.toLowerCase().replace(/['']/g, '').replace(/\s+/g, '-')}`}
                            className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a href="/releases" className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground transition-colors">
                        Releases
                    </a>
                </nav>

                {/* Actions */}
                <div className="flex items-center space-x-6 shrink-0">
                    <a
                        href="/#pricing"
                        className="hidden lg:inline-flex items-center justify-center text-[11px] font-mono uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground border-b border-transparent hover:border-foreground/20 transition-all"
                    >
                        Download
                    </a>
                    
                    {/* Tablet & Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-foreground/10 px-6 py-8"
                    >
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((item) => (
                                <a
                                    key={item}
                                    href={`/#${item.toLowerCase().replace(/['']/g, '').replace(/\s+/g, '-')}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground"
                                >
                                    {item}
                                </a>
                            ))}
                            <a href="/releases" onClick={() => setMobileOpen(false)} className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground">
                                Releases
                            </a>
                            <a
                                href="/#pricing"
                                onClick={() => setMobileOpen(false)}
                                className="text-[11px] font-mono uppercase tracking-[0.2em] text-foreground"
                            >
                                Download Pro
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
