# SiteWarn Extension

A Chrome extension that helps users identify potentially dangerous websites using the VirusTotal API.

## 🎯 Purpose

This project was developed with multiple learning objectives:
- Integration with external APIs (VirusTotal)
- Chrome Extension Development
- Clean Code practices in JavaScript
- Modern JavaScript features (ES6+)
- Async/await patterns
- Promise handling
- HTML/CSS best practices
- Local storage management

## 🛠️ Features

- Real-time website security analysis
- Malicious content detection
- Trusted sites management
- Detailed security reports
- User-friendly popup interface
- Site whitelist functionality

## 🏗️ Project Structure

```
SiteWarnExtension/
├── assets/
│   ├── analyze.png
│   ├── safe.png
│   └── warning.png
├── popup/
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
├── scripts/
│   ├── api.js
│   └── storage.js
├── background.js
├── content.js
├── manifest.json
└── LICENSE
```

## 📊 Project Architecture

```mermaid
graph TD
    A[Chrome Extension] --> B[Popup Interface]
    A --> C[Background Script]
    A --> D[Content Script]
    
    B --> E[popup.js]
    E --> F[api.js]
    E --> G[storage.js]
    
    C --> F
    C --> G
    
    F --> H[VirusTotal API]
    G --> I[Chrome Storage]
    
    subgraph "User Interface"
        B --> J[Analyze Site]
        B --> K[View Reports]
        B --> L[Manage Whitelist]
    end
    
    subgraph "Core Functions"
        F --> M[URL Scanning]
        F --> N[Threat Analysis]
        G --> O[Whitelist Management]
        G --> P[Settings Storage]
    end
    
    subgraph "Security Features"
        M --> Q[Real-time Detection]
        N --> R[Security Reports]
        O --> S[Trusted Sites]
    end

    style A fill:#f9f,stroke:#333
    style H fill:#bbf,stroke:#333
    style I fill:#bfb,stroke:#333
```

This architecture represents the data flow and interaction between the different components of the extension::
- User interface through the popup
- Background and content scripts for extension functionality
- Integration with the VirusTotal API
- Local storage management
- Security and analysis features

## 🚀 Installation

1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the project folder

## 💻 How to Use

1. Get a free API key from the [VirusTotal](https://www.virustotal.com/gui/join-us) website
2. Open the scripts/api.js file and insert your API key
3. Click the SiteWarn icon in the Chrome toolbar
4. Press "Scan Current Site" to analyze the active page
5. View the security scan results
6. Optionally, add trusted websites to your whitelist

## ⚙️ Technical Details

### API Integration
- Uses VirusTotal API v3
- Implements URL scanning and analysis
- Handles asynchronous API responses

### Storage Management
- Chrome's local storage for trusted sites
- Persistent site whitelist
- Efficient domain management

### Security Features
- Real-time threat detection
- Malicious content filtering
- User confirmation dialogs
- Detailed security reports

## 🔒 Privacy

- No personal data collection
- Local storage only for trusted sites
- API key restrictions in place
- Secure communication protocols

## 🤝 Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Submitting a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

[🇧🇷 Versão em Português](README.pt-br.md)
