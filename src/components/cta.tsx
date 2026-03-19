import { motion } from "framer-motion"
import { Download, Sparkles } from "lucide-react"

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden bg-indigo-600 dark:bg-indigo-500 rounded-3xl mx-4 my-24 lg:mx-8 shadow-2xl shadow-indigo-500/20">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[50%] -left-[10%] w-[70%] h-[150%] bg-white/10 rotate-12 blur-3xl rounded-full" />
                <div className="absolute top-[20%] right-[10%] w-[40%] h-[100%] bg-indigo-400/30 rotate-45 blur-3xl rounded-full" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Ready to save 5 hours of work this week?
                    </h2>
                    <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
                        Stop fighting your software. Start culling at the speed of thought. Join photographers who have already switched to a faster workflow.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <a
                            href="#pricing"
                            className="inline-flex h-14 items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-indigo-600 shadow-xl shadow-indigo-900/20 transition-all hover:scale-105 hover:bg-neutral-50 gap-2 w-full sm:w-auto"
                        >
                            <Download className="h-5 w-5" />
                            Download Free Version
                        </a>
                        <a
                            href="#pricing"
                            className="inline-flex h-14 items-center justify-center rounded-full border-2 border-indigo-400/30 bg-indigo-500/20 px-8 py-3 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-indigo-500/40 hover:scale-105 gap-2 w-full sm:w-auto"
                        >
                            <Sparkles className="h-5 w-5 text-indigo-100" />
                            Get Pro for $29
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
