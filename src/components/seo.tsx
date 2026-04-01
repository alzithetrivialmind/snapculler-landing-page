import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = "SnapCuller — Best Photo Culling & RAW Sorting Software";
const DEFAULT_DESCRIPTION = "The fastest photo culling software for photographers. Sort thousands of shots instantly with native RAW support and zero import time.";

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    // Update Document Title
    const formattedTitle = title 
      ? `${title} | SnapCuller` 
      : DEFAULT_TITLE;
    
    document.title = formattedTitle;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || DEFAULT_DESCRIPTION);
    }

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + window.location.pathname);

    // Update Open Graph tags for better social sharing consistency
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", formattedTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", description || DEFAULT_DESCRIPTION);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.href);

  }, [title, description]);

  return null;
}
