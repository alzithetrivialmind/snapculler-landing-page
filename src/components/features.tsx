import { Zap, Image, Keyboard, Eye, HardDrive, Undo2, Layers, Briefcase, FastForward } from "lucide-react"
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt'

const featureGroups = [
    {
        title: "The Speed Engine",
        features: [
            {
                icon: Zap,
                title: "Instant Previews",
                description: "Zero-latency viewing even for 50MB RAW files. PhotoCuller extracts camera-embedded previews so you never wait for a loading bar again—keeping your laptop cool and responsive.",
            },
            {
                icon: HardDrive,
                title: "Zero Import",
                description: "Direct access to your SD card or SSD. No building catalogs, no smart previews, and no bloating your hard drive with duplicate data.",
            },
            {
                icon: Image,
                title: "Native RAW Support",
                description: "Seamless support for ARW, CR2, NEF, DNG, and HEIC. Transition through your professional portfolio without any friction.",
            }
        ]
    },
    {
        title: "The Workflow Master",
        features: [
            {
                icon: Keyboard,
                title: "Muscle Memory Workflow",
                description: "Designed for speed. One key to favorite, one key to reject. Your hands never leave the keyboard.",
            },
            {
                icon: Briefcase,
                title: "1-Click Identity Switch (Pro)",
                description: "Save your tactical key setups. Instantly switch keys 1-9 from a Wedding workflow to a Photojournalism workflow without reconfiguring.",
            },
            {
                icon: FastForward,
                title: "Smart Auto-Advance (Pro)",
                description: "Accelerate your flow. The moment you rate or reject a photo, PhotoCuller instantly jumps to the next frame so you don't break your rhythm.",
            }
        ]
    },
    {
        title: "The Safety & Precision",
        features: [
            {
                icon: Undo2,
                title: "Safety Net (Ctrl+Z)",
                description: "The ultimate mistake-proof feature. Instantly undo any move or rating with total peace of mind. Your files are always protected.",
            },
            {
                icon: Eye,
                title: "Focus Peaking (Pro)",
                description: "Instantly verify sharpness. Smart highlights show you exactly where the focus landed, saving you from guessing on small screens.",
            },
            {
                icon: Layers,
                title: "Zoom Sync (Pro)",
                description: "Perfect A/B testing. Compare two similar shots side-by-side with locked zoom and pan to pick the absolute best frame.",
            }
        ]
    }
]

export function Features() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <section id="features" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black text-center mb-16 tracking-tighter"
                >
                    Designed for <span className="text-indigo-500 dark:text-indigo-400">Pro Workflows</span>
                </motion.h2>

                <div className="space-y-20">
                    {featureGroups.map((group, groupIndex) => (
                        <div key={groupIndex}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <h3 className="text-2xl md:text-3xl font-bold">{group.title}</h3>
                                <div className="h-px flex-1 bg-gradient-to-r from-neutral-200 to-transparent dark:from-neutral-800" />
                            </motion.div>

                            <motion.div
                                variants={container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {group.features.map((feature, index) => (
                                    <motion.div key={index} variants={item}>
                                        <Tilt
                                            tiltMaxAngleX={5}
                                            tiltMaxAngleY={5}
                                            scale={1.02}
                                            transitionSpeed={2000}
                                            className="h-full group p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300 hover:border-indigo-500/30"
                                        >
                                            <div className="mb-6 inline-flex p-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                                                <feature.icon className="h-6 w-6" />
                                            </div>
                                            <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                                            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-sm">{feature.description}</p>
                                        </Tilt>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
