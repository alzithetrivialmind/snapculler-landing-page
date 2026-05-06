import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const serif = { fontFamily: "'Instrument Serif', serif" };
const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

const faqs = [
    {
        question: "Is SnapCuller free?",
        answer: "Yes! SnapCuller has a generous free tier for standard photos. You can view, Pan/Zoom, and sort JPG/PNG files instantly. The Pro version unlocks professional RAW support, unlimited workflow presets, advanced EXIF filtering, and seamless Lightroom integration."
    },
    {
        question: "What camera formats are supported?",
        answer: "SnapCuller Pro supports professional RAW formats from all major manufacturers, including Sony (ARW), Canon (CR2/CR3), Nikon (NEF), Fujifilm (RAF), and more. It also handles iPhone HEIC files perfectly."
    },
    {
        question: "Does it work offline?",
        answer: "Absolutely. SnapCuller is a desktop-native app that runs 100% on your machine. Your photos never leave your device, and you don't need an internet connection to cull your shoots with lightning speed."
    },
    {
        question: "How does it sync with Lightroom?",
        answer: "SnapCuller uses industry-standard sidecar files. When you rate or label a photo, it creates a small metadata file that Adobe Lightroom and Capture One read automatically. Your sorting work is preserved perfectly."
    },
    {
        question: "Do you offer refunds?",
        answer: "We offer a fully featured Free Version so you can test SnapCuller thoroughly before purchasing. Because of this opportunity to 'try before you buy', we do not provide refunds for Pro licenses. We recommend exploring the free edition to ensure it meets your needs."
    },
    {
        question: "What platforms are supported?",
        answer: "SnapCuller is currently optimized for Windows 10 and 11. We are working hard to bring this same speed to macOS and other platforms very soon."
    },
    {
        question: "How is this different from existing tools?",
        answer: "Most tools are bloated with editing features that slow down the initial selection process. SnapCuller is built with one goal: Speed. It's about muscle memory, zero import lag, and getting your best shots found in record time."
    },
]

function FaqItem({ question, answer, isOpen, onClick }: {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
}) {
    return (
        <div className="border-b border-foreground/15 last:border-b-0">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-8 text-left group"
            >
                <span className="text-2xl md:text-3xl pr-4 text-foreground/80 group-hover:text-foreground transition-colors" style={serif}>
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className={`h-5 w-5 transition-colors ${isOpen ? 'text-foreground' : 'text-foreground/30'}`} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-foreground/60 leading-relaxed text-sm">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="mx-auto max-w-6xl px-6 py-24 md:py-32 border-t border-foreground/15">
            <div className="flex flex-col md:flex-row gap-16 md:gap-24">
                <div className="md:w-1/3">
                    <div
                        className="text-[11px] uppercase tracking-[0.2em] text-foreground/60 mb-6"
                        style={mono}
                    >
                        Support
                    </div>
                    <h2 className="text-4xl md:text-6xl tracking-tight mb-8" style={serif}>
                        Common<br />Questions
                    </h2>
                    <p className="text-sm text-foreground/50 leading-relaxed">
                        Everything you need to know about SnapCuller. Can't find the answer you're looking for? Reach out to support.
                    </p>
                </div>

                <div className="md:w-2/3 border-t border-foreground/15">
                    {faqs.map((faq, i) => (
                        <FaqItem
                            key={i}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
