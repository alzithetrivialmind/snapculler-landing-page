import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function VideoDemo() {
    return (
        <section id="demo" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter">
                        See <span className="text-indigo-500 dark:text-indigo-400">PhotoCuller</span> in Action
                    </h2>
                    <p className="text-xl text-neutral-500 dark:text-neutral-400 mb-16 max-w-2xl mx-auto">
                        Experience the speed and simplicity of our native desktop application.
                        From import to export, cull your photos effortlessly.
                    </p>

                    {/* Video Frame (MacBook Style) */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
                        className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-2xl overflow-hidden p-[2px]"
                    >
                        {/* Top Bar (Mockup Controls) */}
                        <div className="h-8 bg-neutral-200 dark:bg-neutral-800 flex items-center px-4 gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                        </div>

                        {/* Video / Placeholder Content */}
                        <div className="aspect-video relative group cursor-pointer bg-neutral-900">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950">
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/20">
                                        <Play className="w-8 h-8 text-white fill-current translate-x-0.5" />
                                    </div>
                                    <span className="text-sm font-medium text-neutral-500 uppercase tracking-widest group-hover:text-neutral-300 transition-colors">
                                        Watch Demo Video
                                    </span>
                                </div>
                            </div>

                            {/* Real Video Tag (Uncomment and add source) */}
                            {/* 
                        <video 
                            className="w-full h-full object-cover"
                            controls
                            poster="/demo-poster.png"
                        >
                            <source src="/demo-video.mp4" type="video/mp4" />
                        </video> 
                        */}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
