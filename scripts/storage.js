export async function isTrustedSite(domain) {
    return new Promise(resolve => {
        chrome.storage.local.get(['trustedSites'], result => {
            const list = result.trustedSites || [];
            resolve(list.includes(domain));
        });
    });
}

export async function addTrustedSite(domain) {
    return new Promise(resolve => {
        chrome.storage.local.get(['trustedSites'], result => {
            const list = result.trustedSites || [];
            if (!list.includes(domain)) list.push(domain);
            chrome.storage.local.set({ trustedSites: list }, resolve);
        });
    });
}
