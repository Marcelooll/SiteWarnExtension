import { analyzeURL } from "../scripts/api.js";

document.getElementById("scanBtn").addEventListener("click", async () => {
    document.getElementById("result").textContent = "Analyzing...";
    chrome.tabs.query({ active: true, currentWindow: true }, async tabs => {
        const url = tabs[0].url;
        try {
            const data = await analyzeURL(url);
            const threats = Object.entries(data.data.attributes.results)
                .filter(([, result]) => result.category === "malicious");
            document.getElementById("result").textContent =
                threats.length > 0
                    ? `⚠️ ${threats.length} malicious indicators found.`
                    : "✅ No malicious indicators found.";
        } catch (error) {
            document.getElementById("result").textContent = "Error analyzing site.";
        }
    });
});
