import { GitBookAPI } from "@gitbook/api";
import gitbookPluginHidePublishedWith from "gitbook-plugin-hide-published-with";
import { GITBOOK_DEFAULT_ENDPOINT } from "@gitbook/api";
import { GitBookAPIError } from "@gitbook/api";
import { get } from "gitbook/lib/constants/defaultPlugins";
import { generate } from "gitbook/lib/output";

let gitbook = new GitBookAPI({
    endpoint: GITBOOK_DEFAULT_ENDPOINT,
    token: process.env.GITBOOK_TOKEN,
});

gitbook.use(gitbookPluginHidePublishedWith);

gitbook.on("error", (err) => {
    if (err instanceof GitBookAPIError) {
        console.error("GitBook API Error:", err.message);
    } else {
        console.error("Unexpected Error:", err);
    }
});

// Example configuration for GitBook plugins
const plugins = [
    "theme-default",
    "search",
    "sharing",
    "fontsettings",
    "highlight",
    "advanced-emoji",
    "edit-link",
    "footer",
    "language-picker",
    "summary",
    "sitemap",
    "ga",
    "lunr",
    "prism",
    "mermaid",
    "mathjax",
    "katex",
    "include-codeblock",
    "anchors",
    "back-to-top-button",
    "expandable-chapters",
    "page-toc",
    "splitter",
    "alerts",
    "copy-code-button",
    "github-buttons",
    "github-issue-feedback",
    "github",
    "versions-select",
    "ai-assistant",
    "better-ui"
];

gitbook.updateConfig({
    plugins: plugins,
    pluginsConfig: {
        "theme-default": {
            "showLevel": true
        },
        "fontsettings": {
            "theme": "white",
            "family": "sans",
            "size": 2
        },
        "edit-link": {
            "base": "https://github.com/Julieisbaka/Julieisbaka.github.io/edit/main/docs/",
            "label": "Edit this page"
        },
        "footer": {
            "copyright": "© 2025 Casper Schorr",
            "markdown": true
        },
        "language-picker": {
            "languages": [
                {
                    "label": "English",
                    "lang": "en"
                },
                {
                    "label": "Spanish",
                    "lang": "es"
                }
            ]
        },
        "sitemap": {
            "hostname": "https://yourwebsite.com"
        },
        "ga": {
            "token": "UA-XXXXXXXX-X"
        },
        "lunr": {
            "languages": ["en"]
        },
        "prism": {
            "css": true
        },
        "pwa": {
            "cacheId": "mathwiki",
            "runtimeCaching": [
                {
                    "urlPattern": "/*",
                    "handler": "networkFirst"
                }
            ]
        },
        "ai-assistant": {
            "enabled": true,
            "apiKey": "your-ai-api-key"
        },
        "better-ui": {
            "theme": "modern",
            "layout": "responsive"
        }
    }
}).then(() => {
    console.log("GitBook configuration updated successfully.");
}).catch((err) => {
    console.error("Failed to update GitBook configuration:", err);
});

async function configureGitBook() {
    try {
        const book = await gitbook.getBook("your-book-id");
        console.log("Book fetched successfully:", book);

        // Add Quality of Life (QoL) plugins and features
        await gitbook.addPlugin("theme-default");
        await gitbook.addPlugin("search");
        await gitbook.addPlugin("sharing");
        await gitbook.addPlugin("fontsettings");
        await gitbook.addPlugin("highlight");

        // Configure additional settings
        await gitbook.updateConfig({
            plugins: ["theme-default", "search", "sharing", "fontsettings", "highlight"],
            pluginsConfig: {
                "theme-default": {
                    showLevel: true,
                },
                "fontsettings": {
                    theme: "white",
                    family: "sans",
                    size: 2,
                },
            },
        });

        console.log("GitBook configured successfully.");
    } catch (err) {
        console.error("Error configuring GitBook:", err);
    }
}

configureGitBook();