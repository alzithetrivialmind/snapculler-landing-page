import { useTheme } from "@/components/theme-provider"

interface ThemeLogoProps {
    className?: string
    alt?: string
}

export function ThemeLogo({ className = "h-8 w-auto", alt = "SnapCuller Logo" }: ThemeLogoProps) {
    const { theme } = useTheme()

    // Determine the effective theme (handle "system" case)
    const isDark =
        theme === "dark" ||
        (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

    return (
        <img
            src={isDark ? "/logo-dark.png" : "/logo-light.png"}
            alt={alt}
            className={className}
        />
    )
}
