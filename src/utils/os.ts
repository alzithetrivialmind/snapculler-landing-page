export type OS = "win" | "mac" | "other"

export function detectOS(): OS {
    if (typeof window === "undefined") return "win" // Default for SSR
    
    const userAgent = window.navigator.userAgent.toLowerCase()
    
    if (userAgent.indexOf("win") !== -1) return "win"
    if (userAgent.indexOf("mac") !== -1) return "mac"
    
    return "other"
}
