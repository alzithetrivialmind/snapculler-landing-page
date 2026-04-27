import { useState } from "react"
import { SEO } from "@/components/seo"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { motion } from "framer-motion"
import { 
    LayoutDashboard, 
    Focus, 
    Layers, 
    Tag, 
    PlayCircle, 
    Keyboard, 
    Camera, 
    Terminal, 
    ShieldCheck, 
    HelpCircle,
    CheckCircle2,
    Info,
    AlertCircle,
    ArrowRight,
    Search
} from "lucide-react"

const docSections = [
    { id: "philosophy", title: "Philosophy", icon: LayoutDashboard },
    { id: "getting-started", title: "Getting Started", icon: PlayCircle },
    { id: "interface", title: "User Interface", icon: Layers },
    { id: "grid-view", title: "Grid View (Library)", icon: Camera },
    { id: "single-view", title: "Review (Single View)", icon: Focus },
    { id: "compare-mode", title: "Compare Mode", icon: Search },
    { id: "metadata", title: "Metadata & IPTC", icon: Tag },
    { id: "automation", title: "Power User Tools", icon: Terminal },
    { id: "shortcuts", title: "Shortcuts & Gamepad", icon: Keyboard },
    { id: "license", title: "License & Support", icon: ShieldCheck },
    { id: "faq", title: "Troubleshooting", icon: HelpCircle },
]

export function DocsPage() {
    const [activeSection, setActiveSection] = useState("philosophy")

    const scrollToSection = (id: string) => {
        setActiveSection(id)
        const element = document.getElementById(id)
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
            <ScrollProgress />
            <Navbar />
            
            <div className="pt-24 pb-20">
                <SEO 
                    title="Comprehensive Documentation | SnapCuller" 
                    description="The definitive guide to mastering SnapCuller. Learn about high-speed culling, AI face detection, metadata management, and professional workflows." 
                />
            
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <header className="mb-16 border-b border-neutral-200 dark:border-neutral-800 pb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Official Guide</span>
                            <span className="text-neutral-400 text-xs font-medium">Last Updated: April 27, 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tightest mb-6">
                            SnapCuller <span className="text-gradient">Comprehensive Docs</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed">
                            Master the standard in high-speed professional photo culling and metadata management.
                        </p>
                    </motion.div>
                </header>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sidebar Navigation */}
                    <aside className="lg:w-72 shrink-0">
                        <div className="sticky top-28">
                            <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 mb-6">
                                <h3 className="font-black text-xs uppercase tracking-widest mb-4 text-neutral-900 dark:text-white px-2">Table of Contents</h3>
                                <nav className="flex flex-col space-y-1">
                                    {docSections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl transition-all text-left group ${
                                                activeSection === section.id 
                                                    ? "bg-primary text-white font-bold shadow-lg shadow-primary/20 scale-[1.02]" 
                                                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 hover:translate-x-1"
                                            }`}
                                        >
                                            <section.icon className={`w-4 h-4 transition-colors ${activeSection === section.id ? "text-white" : "text-neutral-400 group-hover:text-primary"}`} />
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            <div className="p-5 rounded-2xl bg-brand-gradient border border-primary/20">
                                <h4 className="font-bold text-sm mb-2 text-primary">Need Help?</h4>
                                <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                                    Can't find what you're looking for? Reach out to our support team.
                                </p>
                                <a href="mailto:support@snapculler.com" className="text-xs font-black uppercase tracking-wider text-neutral-900 dark:text-white flex items-center gap-2 hover:gap-3 transition-all">
                                    Contact Support <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="flex-1 w-full max-w-4xl prose prose-neutral dark:prose-invert prose-brand 
                        prose-headings:font-black prose-h2:text-3xl prose-h2:tracking-tightest prose-h2:mb-8
                        prose-p:text-neutral-600 dark:prose-p:text-neutral-400 prose-p:leading-relaxed
                        prose-strong:text-neutral-900 dark:prose-strong:text-white
                        prose-kbd:bg-neutral-100 dark:prose-kbd:bg-neutral-800 prose-kbd:px-1.5 prose-kbd:py-0.5 prose-kbd:rounded prose-kbd:border-b-2 prose-kbd:border-neutral-300 dark:prose-kbd:border-neutral-700
                        prose-img:rounded-2xl prose-img:border prose-img:border-neutral-200 dark:prose-img:border-neutral-800 prose-img:shadow-2xl">
                        
                        {/* Philosophy */}
                        <section id="philosophy" className="scroll-mt-28 mb-24">
                            <div className="flex items-center gap-3 text-primary mb-4">
                                <LayoutDashboard className="w-6 h-6" />
                                <span className="font-black uppercase tracking-widest text-xs">Core Values</span>
                            </div>
                            <h2>The SnapCuller Philosophy</h2>
                            <p className="text-lg leading-relaxed">
                                SnapCuller is built on one core principle: <strong>Zero Waiting.</strong>
                            </p>
                            <p>
                                Traditional culling tools force you into an "Import" database model that creates unnecessary friction and bloat. SnapCuller works directly with your filesystem. We extract embedded previews instantly, enabling you to start culling 10,000+ photos the absolute second you open a folder.
                            </p>
                            <div className="my-10 bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                                <h4 className="flex items-center gap-2 text-primary mt-0 mb-3"><Info className="w-4 h-4" /> Why Instant Previews?</h4>
                                <p className="text-sm m-0">By utilizing the high-resolution JPEG previews already embedded in your RAW files, we bypass the heavy processing required to decode RAW data during the initial cull. This means 100% speed, 100% of the time.</p>
                            </div>
                            <img src="/assets/screenshots/Viewport (Center).png" alt="SnapCuller Interface Overview" className="w-full" />
                        </section>

                        <hr className="my-16 border-neutral-200 dark:border-neutral-800" />

                        {/* Getting Started */}
                        <section id="getting-started" className="scroll-mt-28 mb-24">
                            <div className="flex items-center gap-3 text-primary mb-4">
                                <PlayCircle className="w-6 h-6" />
                                <span className="font-black uppercase tracking-widest text-xs">Chapter 1</span>
                            </div>
                            <h2>Getting Started</h2>
                            <p>Moving from your SD card to culling should take seconds, not minutes. SnapCuller simplifies the entry point of your post-production workflow.</p>
                            
                            <h3>Opening Your Photos</h3>
                            <p>There are two primary ways to bring your photos into SnapCuller:</p>
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                                    <h4 className="mt-0">Drag and Drop</h4>
                                    <p className="text-sm">Simply grab any folder from your file explorer (Windows/macOS) and drop it anywhere into SnapCuller.</p>
                                </div>
                                <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
                                    <h4 className="mt-0">Browse Manually</h4>
                                    <p className="text-sm">Use the <strong>Change Folder</strong> button in the sidebar to select your project directory via the system picker.</p>
                                </div>
                            </div>
                            <img src="/assets/screenshots/Open Folder Button.png" alt="Open Folder Button" className="w-full max-w-sm mx-auto" />
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-green-500/5 border border-green-500/20 text-green-600 dark:text-green-400 mt-8">
                                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                                <p className="text-sm m-0"><strong>Format Support:</strong> SnapCuller natively supports RAW (CR3, ARW, NEF, etc.), HEIC, and JPEG formats, leveraging your GPU for smooth rendering.</p>
                            </div>
                        </section>

                        <hr className="my-16 border-neutral-200 dark:border-neutral-800" />

                        {/* Interface Overview */}
                        <section id="interface" className="scroll-mt-28 mb-24">
                            <div className="flex items-center gap-3 text-primary mb-4">
                                <Layers className="w-6 h-6" />
                                <span className="font-black uppercase tracking-widest text-xs">Chapter 2</span>
                            </div>
                            <h2>User Interface Overview</h2>
                            <p>SnapCuller’s interface is optimized for speed, placing critical tools within a single click or keystroke. The design follows a professional dark-first aesthetic to minimize eye strain during long sessions.</p>
                            
                            <div className="space-y-8 my-10">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex-1">
                                        <h4>1. Sidebar (Left)</h4>
                                        <p className="text-sm leading-relaxed">Your command center for folder management, batch renaming, IPTC templates, and workflow presets. It's designed to be pinned or auto-hidden to maximize screen real estate.</p>
                                    </div>
                                    <img src="/assets/screenshots/Sidebar (Left).png" alt="Sidebar Navigation" className="w-full md:w-64 m-0" />
                                </div>
                                
                                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                                    <div className="flex-1 text-right md:text-left">
                                        <h4>2. Metadata & Filmstrip</h4>
                                        <p className="text-sm leading-relaxed">The bottom area houses the dynamic filmstrip for rapid jumping across the shoot and the Metadata panel for real-time EXIF readout.</p>
                                    </div>
                                    <div className="flex flex-col gap-4 w-full md:w-64">
                                        <img src="/assets/screenshots/Filmstrip (Bottom).png" alt="Filmstrip" className="w-full m-0" />
                                        <img src="/assets/screenshots/Metadata Panel (Sidebar Bottom).png" alt="Metadata Panel" className="w-full m-0" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="my-16 border-neutral-200 dark:border-neutral-800" />

                        {/* Grid View */}
                        <section id="grid-view" className="scroll-mt-28 mb-24">
                            <div className="flex items-center gap-3 text-primary mb-4">
                                <Camera className="w-6 h-6" />
                                <span className="font-black uppercase tracking-widest text-xs">Chapter 3</span>
                            </div>
                            <h2>Grid View (Library Management)</h2>
                            <p>The Grid View provides a bird's-eye view of your entire shoot. It is built using a highly optimized virtualization engine that can render 50,000+ thumbnails without skipping a frame.</p>
                            
                            <img src="/assets/screenshots/Grid View.png" alt="Grid View Library" className="w-full mb-10" />

                            <h3>Grouping & Sorting</h3>
                            <p>Tame large shoots by grouping your photos by <strong>Date</strong>, <strong>Camera</strong>, <strong>Lens</strong>, or <strong>ISO</strong>. This is invaluable for separating different segments of an event (e.g., "Ceremony" from "Reception") based on capture time or camera body.</p>
                            <img src="/assets/screenshots/Grouping.png" alt="Grouping Options" className="w-full md:w-1/2 mx-auto" />

                            <h3>Image Pairing & Burst Stacks</h3>
                            <ul>
                                <li><strong>RAW + JPG Pairing:</strong> Treat pairs as a single entity. Ratings and moves applied to the JPG are automatically mirrored to the hidden RAW companion.</li>
                                <li><strong>Burst Stacking:</strong> Automatically group photos taken in rapid succession (e.g., a burst of 20 frames). You can cull the entire stack as one or pick a "hero" frame.</li>
                            </ul>
                            <div className="grid grid-cols-2 gap-4">
                                <img src="/assets/screenshots/Auto Stacks.png" alt="Auto Stacking" className="m-0" />
                                <img src="/assets/screenshots/Stack Photos.png" alt="Stack Management" className="m-0" />
                            </div>
                        </section>

                        <hr className="my-16 border-neutral-200 dark:border-neutral-800" />

                        {/* Single View */}
                        <section id="single-view" className="scroll-mt-28 mb-24">
                            <div className="flex items-center gap-3 text-primary mb-4">
                                <Focus className="w-6 h-6" />
                                <span className="font-black uppercase tracking-widest text-xs">Chapter 4</span>
                            </div>
                            <h2>Review (Single View)</h2>
                            <p>Single View is where critical decisions happen. We provide professional analytical tools to ensure every pick is technically perfect before it hits your editor.</p>
                            
                            <h3>Exposure Analytical Tool</h3>
                            <p>Press <kbd>E</kbd> to cycle through professional exposure overlays. These tools help you detect clipping instantly without looking at a histogram.</p>
                            <div className="grid grid-cols-2 gap-4 my-8">
                                <img src="/assets/screenshots/Exposure Highlight.png" alt="Highlight Clipping" className="m-0" />
                                <img src="/assets/screenshots/Exposure Shadow.png" alt="Shadow Clipping" className="m-0" />
                            </div>

                            <h3>Focus Peaking</h3>
                            <p>Verify sharpness at a glance. High-contrast edges are highlighted in bright colors, showing you exactly where the focal plane lies without needing to zoom in 100% on every shot.</p>
                            <img src="/assets/screenshots/Focus Peaking.png" alt="Focus Peaking Tool" className="w-full" />

                            <h3>AI Face Detection</h3>
                            <p>The "Facestrip" is a SnapCuller exclusive. Our local AI detects every face in the image and displays them as crops in a dedicated panel. Click a face to instantly zoom the main view to those eyes.</p>
                            <img src="/assets/screenshots/AI Powered Face Detection.png" alt="AI Facestrip" className="w-full" />
                        </section>

                        <hr className="my-16 border-neutral-200 dark:border-neutral-800" />

                        {/* Compare Mode */}
                        <section id="compare-mode" className="scroll-mt-28 mb-24">
                            <div className="flex items-center gap-3 text-primary mb-4">
                                <Search className="w-6 h-6" />
                                <span className="font-black uppercase tracking-widest text-xs">Chapter 5</span>
                            </div>
                            <h2>Compare Mode</h2>
                            <p>When you have two or three nearly identical frames, Compare Mode allows for side-by-side evaluation with synchronized navigation.</p>
                            <ul>
                                <li><strong>Zoom Sync:</strong> Lock the panels together to zoom and pan in unison across all compared images.</li>
                                <li><strong>Multi-Select:</strong> Compare up to 4 images at once to pick the absolute winner of a sequence.</li>
                            </ul>
                            <img src="/assets/screenshots/Compare View or Side by Side view zoom sync.png" alt="Compare Mode Side-by-Side" className="w-full" />
                        </section>

                        <hr className="my-16 border-neutral-200 dark:border-neutral-800" />

                        {/* Metadata & IPTC */}
                        <section id="metadata" className="scroll-mt-28 mb-24">
                            <div className="flex items-center gap-3 text-primary mb-4">
                                <Tag className="w-6 h-6" />
                                <span className="font-black uppercase tracking-widest text-xs">Chapter 6</span>
                            </div>
                            <h2>Metadata & IPTC</h2>
                            <p>SnapCuller is a fully-featured metadata editor that strictly follows IPTC/Adobe standards. We use non-destructive <strong>.XMP sidecar files</strong>, meaning your original files are never altered.</p>
                            
                            <div className="grid md:grid-cols-2 gap-8 my-10">
                                <div>
                                    <h4>Single Image Editor</h4>
                                    <p className="text-sm">Edit titles, descriptions, and tags for individual images directly in the metadata panel.</p>
                                    <img src="/assets/screenshots/IPTC Editor Single.png" alt="Single IPTC Editor" className="m-0" />
                                </div>
                                <div>
                                    <h4>Batch IPTC Editor</h4>
                                    <p className="text-sm">Apply global metadata (copyright, shoot info) to thousands of photos in one action.</p>
                                    <img src="/assets/screenshots/IPTC Metadata Batch Editor.png" alt="Batch IPTC Editor" className="m-0" />
                                </div>
                            </div>
                            
                            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                                <h4 className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mt-0 mb-3"><AlertCircle className="w-4 h-4" /> Compatibility</h4>
                                <p className="text-sm m-0">Your work in SnapCuller is instantly visible in <strong>Adobe Lightroom, Capture One, and Photo Mechanic</strong>. Just import the folder and all ratings/metadata will appear automatically.</p>
                            </div>
                        </section>

                        <hr className="my-16 border-neutral-200 dark:border-neutral-800" />

                        {/* Power User Automation */}
                        <section id="automation" className="scroll-mt-28 mb-24">
                            <div className="flex items-center gap-3 text-primary mb-4">
                                <Terminal className="w-6 h-6" />
                                <span className="font-black uppercase tracking-widest text-xs">Chapter 7</span>
                            </div>
                            <h2>Power User Tools</h2>
                            <p>Master these automation features to cut your workflow time by up to 80%.</p>
                            
                            <h3>Code Replacements</h3>
                            <p>Stop typing repetitive text. Use short codes (e.g., <code>=h1=</code>) that instantly expand into complex strings. This is perfect for sports or event photographers handling large rosters.</p>
                            <img src="/assets/screenshots/Code Replacements.png" alt="Code Replacement Dictionary" className="w-full md:w-3/4 mx-auto" />

                            <h3>Batch Rename</h3>
                            <p>Standardize your filenames before delivery. Use dynamic variables like <code>&#123;Date&#125;</code>, <code>&#123;Project&#125;</code>, and <code>&#123;Counter&#125;</code> to create professional file structures.</p>
                            <img src="/assets/screenshots/Batch Rename New.png" alt="Batch Renaming Tool" className="w-full md:w-3/4 mx-auto" />

                            <h3>Buckets (Routing)</h3>
                            <p>Buckets are the ultimate culling shortcut. Map a key (e.g., <kbd>1</kbd>) to a "Picks" folder. Pressing that key while viewing a photo instantly moves/copies the file and its sidecars to that destination.</p>
                            <img src="/assets/screenshots/Bucket For Move or Copy Pictures.png" alt="Bucket Configuration" className="w-full md:w-2/3 mx-auto" />
                        </section>

                        <hr className="my-16 border-neutral-200 dark:border-neutral-800" />

                        {/* Shortcuts & Settings */}
                        <section id="shortcuts" className="scroll-mt-28 mb-24">
                            <div className="flex items-center gap-3 text-primary mb-4">
                                <Keyboard className="w-6 h-6" />
                                <span className="font-black uppercase tracking-widest text-xs">Chapter 8</span>
                            </div>
                            <h2>Shortcuts & Gamepad</h2>
                            <p>SnapCuller is designed to be controlled via muscle memory. Every key is remappable, and we offer native support for gaming controllers.</p>
                            
                            <div className="grid md:grid-cols-2 gap-8 my-10">
                                <div>
                                    <h4>Keyboard Remapping</h4>
                                    <img src="/assets/screenshots/Settings Keyboard.png" alt="Keyboard Shortcuts" className="m-0" />
                                </div>
                                <div>
                                    <h4>Gamepad Support</h4>
                                    <p className="text-sm">Lean back and cull with an Xbox or PS5 controller. Use triggers for zooming and face buttons for rating.</p>
                                    <img src="/assets/screenshots/Settings Gamepad.png" alt="Gamepad Configuration" className="m-0" />
                                </div>
                            </div>

                            <h3>External Editor Linking</h3>
                            <p>Need to jump into Photoshop or Affinity for a quick retouch? Link your preferred software in Settings and open the current image with a single click.</p>
                            <img src="/assets/screenshots/External Editors.png" alt="External Editor Settings" className="w-full md:w-2/3 mx-auto" />
                        </section>

                        <hr className="my-16 border-neutral-200 dark:border-neutral-800" />

                        {/* License Management */}
                        <section id="license" className="scroll-mt-28 mb-24">
                            <div className="flex items-center gap-3 text-primary mb-4">
                                <ShieldCheck className="w-6 h-6" />
                                <span className="font-black uppercase tracking-widest text-xs">Licensing</span>
                            </div>
                            <h2>License Management</h2>
                            <p>Your Pro license is flexible. You can manage your activation directly within the app.</p>
                            <ul>
                                <li><strong>Device Switching:</strong> Deactivate your license on your desktop to move it to your laptop for a travel shoot.</li>
                                <li><strong>Offline Use:</strong> Once activated, SnapCuller works entirely offline—perfect for remote locations.</li>
                            </ul>
                            <img src="/assets/screenshots/License Management.png" alt="License Manager" className="w-full md:w-1/2 mx-auto" />
                        </section>

                        <hr className="my-16 border-neutral-200 dark:border-neutral-800" />

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-28 mb-32">
                            <div className="flex items-center gap-3 text-primary mb-4">
                                <HelpCircle className="w-6 h-6" />
                                <span className="font-black uppercase tracking-widest text-xs">Support</span>
                            </div>
                            <h2>Troubleshooting & FAQ</h2>
                            <div className="space-y-6 not-prose">
                                <details className="group border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 bg-neutral-50 dark:bg-neutral-900/50 hover:border-primary/30 transition-colors cursor-pointer">
                                    <summary className="font-black text-lg flex items-center justify-between list-none">
                                        Why are my RAW files not loading?
                                        <span className="text-primary group-open:rotate-180 transition-transform">↓</span>
                                    </summary>
                                    <div className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200 dark:border-neutral-800 pt-4">
                                        Ensure the folder is not locked by another process (like a backup tool). If issues persist, check that you have at least 5GB of free space for the preview cache.
                                    </div>
                                </details>

                                <details className="group border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 bg-neutral-50 dark:bg-neutral-900/50 hover:border-primary/30 transition-colors cursor-pointer">
                                    <summary className="font-black text-lg flex items-center justify-between list-none">
                                        Can I use my Photo Mechanic code files?
                                        <span className="font-black text-primary group-open:rotate-180 transition-transform">↓</span>
                                    </summary>
                                    <div className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200 dark:border-neutral-800 pt-4">
                                        Yes! SnapCuller supports standard TSV (Tab-Separated) files. Simply import them in the Code Replacements manager.
                                    </div>
                                </details>

                                <details className="group border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 bg-neutral-50 dark:bg-neutral-900/50 hover:border-primary/30 transition-colors cursor-pointer">
                                    <summary className="font-black text-lg flex items-center justify-between list-none">
                                        Does SnapCuller modify original RAW data?
                                        <span className="font-black text-primary group-open:rotate-180 transition-transform">↓</span>
                                    </summary>
                                    <div className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-200 dark:border-neutral-800 pt-4">
                                        Never. SnapCuller is 100% non-destructive. All your hard work (ratings, labels, IPTC) is stored in .XMP sidecar files next to your images.
                                    </div>
                                </details>
                            </div>
                        </section>

                    </main>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
