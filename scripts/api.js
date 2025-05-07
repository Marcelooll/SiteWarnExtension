const VIRUSTOTAL_API_KEY = '';  //Insert your api key here

export async function analyzeURL(url) {
    const response = await fetch('https://www.virustotal.com/api/v3/urls', {
        method: 'POST',
        headers: {
            'x-apikey': VIRUSTOTAL_API_KEY,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `url=${encodeURIComponent(url)}`
    });

    if (!response.ok) throw new Error("Failed to scan URL.");

    const data = await response.json();
    const analysisId = data.data.id;

    const report = await fetch(`https://www.virustotal.com/api/v3/analyses/${analysisId}`, {
        method: 'GET',
        headers: { 'x-apikey': VIRUSTOTAL_API_KEY }
    });

    if (!report.ok) throw new Error("Failed to fetch analysis report.");

    return await report.json();
}
