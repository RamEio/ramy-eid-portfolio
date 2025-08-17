// Global link behavior: external links open in new tab, internal links in same tab
// Applies site-wide wherever this script is included

document.addEventListener('DOMContentLoaded', () => {
  try {
    const isSkippableScheme = (href) => /^(mailto:|tel:|sms:|javascript:)/i.test(href);

    const normalizeRel = (rel) => {
      if (!rel) return '';
      const keep = rel
        .split(/\s+/)
        .filter(Boolean)
        .filter((token) => token !== 'noopener' && token !== 'noreferrer');
      return keep.join(' ');
    };

    document.querySelectorAll('a[href]').forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || isSkippableScheme(href)) return;

      let url;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return; // Skip malformed URLs
      }

      const isExternal = url.origin !== window.location.origin;
      if (isExternal) {
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noopener noreferrer');
      } else {
        anchor.removeAttribute('target');
        const cleaned = normalizeRel(anchor.getAttribute('rel'));
        if (cleaned) anchor.setAttribute('rel', cleaned);
        else anchor.removeAttribute('rel');
      }
    });
  } catch (err) {
    // Fail silently to avoid impacting navigation
    // console.warn('Link behavior script error:', err);
  }
});


