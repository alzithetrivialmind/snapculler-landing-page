# SnapCuller Comprehensive User Guide

SnapCuller is a high-performance, non-destructive image culling and metadata management tool designed specifically for professional photographers who need to move from shoot to delivery at lightning speed.

---

## 1. Getting Started

### Launching and Onboarding
When you first open SnapCuller, you are greeted with a clean, dark workspace. To begin your session, you need to load a project source.

### Opening a Project
There are two primary ways to bring your photos into SnapCuller:
*   **Drag and Drop**: Grab any folder from your file explorer (Windows/macOS) and drop it anywhere onto the SnapCuller window. The app will immediately begin indexing images and generating high-quality previews.
*   **Open Folder Button**: Click the **Change Folder** button in the sidebar to use the system file picker.

**Pro Tip**: SnapCuller handles thousands of images per folder with zero lag. It supports RAW, HEIC, and JPEG formats natively.

---

## 2. User Interface Overview

SnapCuller’s interface is divided into four main zones:

1.  **Sidebar (Left)**: Your command center for folder management, batch tools, IPTC templates, and workflow presets.
2.  **Viewport (Center)**: Where you view and compare your photos in Grid, Single, or Compare modes.
3.  **Filmstrip (Bottom)**: A quick-access reel of all images in the current folder for rapid navigation.
4.  **Metadata Panel (Sidebar Bottom)**: Detailed EXIF information and single-image IPTC editor.

---

## 3. Sidebar & Navigation

### Source & Statistics
At the top of the sidebar, you’ll see the current path and a progress bar showing your culling completion percentage.

### Batch Rename
Standardize your filenames before you start your edit:
*   **Path**: Sidebar -> **Batch Rename**
*   **Function**: Rename selected images using dynamic patterns like `Project_{Date}_{Index}`.
*   **Safety**: Preview the new names before applying changes to disk.

### Code Replacements
One of SnapCuller's most powerful features for rapid metadata entry.
*   **What it is**: A dictionary that maps short "codes" to full text strings.
*   **How to setup**:
    1.  Create a `.tsv` (Tab-Separated Values) or `.txt` file in Excel/Notion.
    2.  Format: `code [TAB] full text [TAB] secondary text`.
    3.  Import the file via **Sidebar -> Code Replacements**.
*   **Expansion**: While typing in any IPTC field, use the `=` delimiter. Typing `=h1=` might expand to "Stadium Home Team - Goal Area".

---

## 4. Culling & Review (Single View)

Single View is designed for critical evaluation of individual shots.

### Exposure Analytical Tool
SnapCuller includes professional exposure overlays to detect clipping:
*   **Exposure Mode**: Highlights blown-out highlights in red.
*   **Shadow Mode**: Highlights crushed shadows in blue.
*   **Both Mode**: Shows both highlights and shadows simultaneously.
*   **Hotkey**: Press `E` to cycle through modes.

### Focus Peaking
Verify sharpness without zooming:
*   **Function**: High-contrast edges are highlighted, showing exactly where the focal plane lies.
*   **Benefit**: Quickly identify if a subject's eyes are sharp in a shallow depth-of-field portrait.

### AI Faces
Don't waste time zooming in on every head in a group shot:
*   **Function**: SnapCuller uses local AI to detect all faces in the current image.
*   **Usage**: Click the **Faces** icon to see a dedicated strip showing 100% crops of every face detected. Check for blinks or missed focus in seconds.

### Rotation
Quickly fix orientation using the rotate buttons or `R` / `Shift+R`. Rotation is saved to the XMP sidecar for your raw processor to read.

---

## 5. Grid View (Library Management)

The Grid View is your bird's-eye view of the entire shoot.

### Sorting & Grouping
Organize your gallery to find specific sequences:
*   **Grouping**: Group by **Date**, **Camera**, **Lens**, or **ISO**. This is perfect for separating "Ceremony" from "Reception" based on time.
*   **Sorting**: Sort by capture time, filename, or rating.

### Image Pairing (RAW + JPG)
If you shoot in RAW+JPG mode, SnapCuller treats them as a single entity:
*   **Sync**: Ratings, flags, and labels applied to one file are automatically mirrored to the other.
*   **Cleanup**: Only the JPG or RAW (your choice) is shown in the grid to reduce clutter, but both are moved/copied during bucket actions.

### Stacks (Burst Management)
Tame high-speed bursts (e.g., 20 frames of a goal):
*   **Auto-Stacking**: Groups photos taken within a specific time window (e.g., 1 second).
*   **Usage**: Cull the whole stack as one, or expand to pick the "hero" frame.

---

## 6. Metadata & IPTC

SnapCuller is a fully-featured metadata editor that strictly follows IPTC/Adobe standards.

### IPTC Templates
Create reusable "profiles" for common metadata:
*   **Path**: Sidebar -> **IPTC Metadata Template**
*   **Use Case**: Create a template with your Copyright, Creator Name, and Website. Apply it to all images in a new shoot with one click.

### Batch IPTC Editor
Apply metadata to hundreds of photos at once:
*   **Usage**: Select multiple photos in **Grid View** and click **Edit IPTC** in the top bar.
*   **Power**: Use **Code Replacements** within the batch editor for maximum speed.

### XMP Sidecars (Non-Destructive)
SnapCuller protects your original files:
*   **No Overwriting**: We never touch the bits of your original RAW or JPG.
*   **Portability**: All ratings, labels, and metadata are saved into industry-standard `.xmp` sidecar files.
*   **Compatibility**: Your work in SnapCuller is instantly visible in Adobe Lightroom, Capture One, Photo Mechanic, and more.

---

## 7. Power User Automation

### Workflow Presets
A Preset is a "snapshot" of your entire culling environment:
*   **Saved State**: Presets store your current **Buckets**, **Keyboard Shortcuts**, and **Settings** (Exposure modes, Stacking thresholds, etc.).
*   **Scenario**: Switch from a "Fast Culling" preset (High exposure highlight, 2-star threshold) to a "Detail Review" preset with one click.

### Buckets (Automated Routing)
Buckets are the fastest way to move your selections:
*   **Setup**: Create a bucket, assign a destination folder (e.g., "Picks"), and a hotkey (e.g., `1`).
*   **Action**: Press `1` while viewing a photo. SnapCuller instantly moves/copies the file (and its XMP/Pair) to the "Picks" folder.

---

## 8. Settings & Personalization

### Keyboard & Gamepad
SnapCuller is built for speed.
*   **Shortcuts**: Every action can be remapped in **Settings -> Shortcuts**.
*   **Gamepad Support**: Cull with an Xbox or PlayStation controller. Lean back and rate photos using the triggers and buttons for a more comfortable experience.

### External Editors
Need a quick fix?
*   **Path**: Settings -> **Editor**
*   **Setup**: Link SnapCuller to Photoshop, Affinity, or Luminar.
*   **Action**: Click the **Edit** button in the top bar to open the current file directly in your preferred software.

### License Management
*   **Activation**: Enter your Gumroad license key in **Settings -> License**.
*   **Device Switching**: You can deactivate your license on one machine to move it to another at any time.

---

## 9. Troubleshooting & FAQ

*   **Previews not loading?** Ensure you have enough disk space for the internal cache.
*   **Shortcuts not expanding?** Check that your Code Replacement file is enabled and the delimiter (`=`) is correct.
*   **RAW files look different?** SnapCuller uses a high-performance engine; final colors should be dialed in within your raw developer (Lightroom/C1) using the XMP data we provide.

---

*SnapCuller — The standard in high-speed professional culling.*
