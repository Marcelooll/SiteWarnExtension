import { analyzeURL } from "./scripts/api.js";
import { isTrustedSite, addTrustedSite } from "./scripts/storage.js";

(async () => {
    const currentURL = window.location.href;
    const hostname = new URL(currentURL).hostname;

    const trusted = await isTrustedSite(hostname);
    if (trusted) return;

    try {
        const analysis = await analyzeURL(currentURL);
        const maliciousCount = Object.values(analysis.data.attributes.results)
            .filter(result => result.category === "malicious").length;

        if (maliciousCount > 0) {
            const shouldProceed = confirm("⚠️ Potential threat detected on this website.\n\nDo you want to see the security report?");
            if (shouldProceed) {
                const reportWindow = window.open();
                reportWindow.document.write(`<pre>${JSON.stringify(analysis.data.attributes.results, null, 2)}</pre>`);
            }

            const remember = confirm("Remember this site as safe?");
            if (remember) {
                await addTrustedSite(hostname);
            }
        }
    } catch (err) {
        console.error("Error during URL analysis", err);
    }
})();
