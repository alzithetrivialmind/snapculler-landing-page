import { FolderOpen, Keyboard, Download } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
    {
        icon: FolderOpen,
        step: "01",
        title: "Point & Shoot",
        description: "Simply drag & drop any folder. PhotoCuller instantly accesses all your photos with zero import time—including professional RAW formats.",
    },
    {
        icon: Keyboard,
        step: "02",
        title: "Keyboard Mastery",
        description: "Master the one-key workflow. Assign favorite and reject actions to specific keys and let your muscle memory handle the rest at lightning speed.",
    },
    {
        icon: Download,
        step: "03",
        title: "One-Click Handoff",
        description: "Your ratings and labels are exported as XMP sidecars. Everything is ready to be opened in Lightroom or Capture One for the final edit.",
    },
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
                        How It <span className="text-indigo-500 dark:text-indigo-400">Works</span>
                    </h2>
                    <p className="text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
                        Three simple steps to go from thousands of photos to only your best shots.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
                    {/* Connecting Line (desktop only) */}
                    <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-indigo-500/20 via-indigo-500/50 to-indigo-500/20" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            {/* Step Number Circle */}
                            <div className="relative mb-6">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                                    <step.icon className="h-8 w-8 text-white" />
                                </div>
                                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-black flex items-center justify-center">
                                    {step.step}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
