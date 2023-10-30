globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, appendHeader, lazyEventHandler, getQuery as getQuery$1, getCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/ofetch/dist/node.mjs';
import destr, { destr as destr$1 } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/hookable/dist/index.mjs';
import { snakeCase, pascalCase, kebabCase, camelCase } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/klona/dist/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash, isRelative } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47memory from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/drivers/memory.mjs';
import unstorage_47drivers_47lru_45cache from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/pathe/dist/index.mjs';
import { getHighlighter, loadWasm } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/shikiji/dist/index.mjs';
import { unified } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unified/index.js';
import { toString } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/mdast-util-to-string/index.js';
import { postprocess, preprocess } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark/index.js';
import { stringifyPosition } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unist-util-stringify-position/index.js';
import { markdownLineEnding, markdownSpace } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark-util-character/index.js';
import { push, splice } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark-util-chunked/index.js';
import { resolveAll } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark-util-resolve-all/index.js';
import { normalizeUri } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark-util-sanitize-uri/index.js';
import slugify from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/slugify/slugify.js';
import remarkParse from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-parse/index.js';
import remark2rehype from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-rehype/index.js';
import remarkMDC, { parseFrontMatter } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-mdc/dist/index.mjs';
import { toString as toString$1 } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/hast-util-to-string/index.js';
import Slugger from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/github-slugger/index.js';
import { detab } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/detab/index.js';
import remarkEmoji from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-emoji/index.js';
import remarkGFM from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-gfm/index.js';
import rehypeExternalLinks from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/rehype-external-links/index.js';
import rehypeSortAttributeValues from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/rehype-raw/index.js';
import { visit } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unist-util-visit/index.js';

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  docus: {
    title: "setup.md",
    description: "Your open source Minecraft administration wiki.",
    image: "",
    socials: {
      github: "setupmd/docs",
      discord: {
        label: "Discord",
        icon: "simple-icons:discord",
        href: "https://link.setup.md/discord"
      }
    },
    github: {
      dir: ".starters/default/content",
      branch: "v3-nuxt",
      repo: "docs",
      owner: "setupmd",
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
});

const appConfig1 = defineAppConfig({
  docus: {
    title: "Docus",
    description: "The best place to start your documentation.",
    url: "https://docus.dev",
    image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {},
    layout: "default",
    header: {
      title: "",
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev"
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
    github: {
      dir: void 0,
      branch: void 0,
      repo: void 0,
      owner: void 0,
      edit: false
    }
  }
});

const appConfig2 = defineAppConfig({
  prose: {
    copyButton: {
      iconCopy: "ph:copy",
      iconCopied: "ph:check"
    },
    headings: {
      icon: "ph:link"
    }
  }
});

const appConfig3 = defineAppConfig({});

const inlineAppConfig = {
  "nuxt": {
    "buildId": "5fa87f2e-a1c2-4b3c-baf6-edbda8e44a66"
  }
};

const appConfig = defuFn(appConfig0, appConfig1, appConfig2, appConfig3, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/api/search": {
        "prerender": true,
        "cache": true
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "studio": {
      "apiURL": "https://api.nuxt.studio"
    },
    "mdc": {
      "components": {
        "prose": true,
        "map": {
          "p": "prose-p",
          "a": "prose-a",
          "blockquote": "prose-blockquote",
          "code-inline": "prose-code-inline",
          "code": "ProseCodeInline",
          "em": "prose-em",
          "h1": "prose-h1",
          "h2": "prose-h2",
          "h3": "prose-h3",
          "h4": "prose-h4",
          "h5": "prose-h5",
          "h6": "prose-h6",
          "hr": "prose-hr",
          "img": "prose-img",
          "ul": "prose-ul",
          "ol": "prose-ol",
          "li": "prose-li",
          "strong": "prose-strong",
          "table": "prose-table",
          "thead": "prose-thead",
          "tbody": "prose-tbody",
          "td": "prose-td",
          "th": "prose-th",
          "tr": "prose-tr"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": true,
          "h3": true,
          "h4": true,
          "h5": false,
          "h6": false
        }
      }
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": 1698695069955,
      "experimental": {
        "stripQueryParameters": false,
        "advanceQuery": false,
        "clientDB": false
      },
      "respectPathCase": false,
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": [
          "icon",
          "titleTemplate",
          "header",
          "main",
          "aside",
          "footer",
          "layout"
        ]
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": {
        "theme": {
          "dark": "github-dark",
          "default": "github-light"
        },
        "preload": [
          "json",
          "js",
          "ts",
          "html",
          "css",
          "vue",
          "diff",
          "shell",
          "markdown",
          "yaml",
          "bash",
          "ini"
        ]
      },
      "wsUrl": "",
      "documentDriven": {
        "page": true,
        "navigation": true,
        "surround": true,
        "globals": {},
        "layoutFallbacks": [
          "theme"
        ],
        "injectPage": true
      },
      "host": "",
      "trailingSlash": false,
      "search": "",
      "contentHead": true,
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      }
    }
  },
  "pinceau": {
    "studio": true,
    "outputDir": "/Users/danielsmith/Documents/GitHub/docs/.nuxt/pinceau/"
  },
  "studio": {
    "publicToken": ""
  },
  "mdc": {
    "highlight": {
      "theme": {
        "dark": "github-dark",
        "default": "github-light"
      },
      "preload": [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini"
      ],
      "wrapperStyle": ""
    }
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "4q9TnkKRqO",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": {
      "theme": {
        "dark": "github-dark",
        "default": "github-light"
      },
      "preload": [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "diff",
        "shell",
        "markdown",
        "yaml",
        "bash",
        "ini"
      ]
    },
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 4,
        "exclude": [
          1
        ]
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": [
        "icon",
        "titleTemplate",
        "header",
        "main",
        "aside",
        "footer",
        "layout"
      ]
    },
    "contentHead": true,
    "documentDriven": true,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "stripQueryParameters": false,
      "advanceQuery": false,
      "search": ""
    }
  },
  "appConfigSchema": {
    "properties": {
      "id": "#appConfig",
      "properties": {
        "nuxtIcon": {
          "title": "Nuxt Icon",
          "description": "Configure the defaults of Nuxt Icon",
          "id": "#appConfig/nuxtIcon",
          "properties": {
            "size": {
              "title": "Icon Size",
              "description": "Set the default icon size. Set to false to disable the sizing of icon in style.",
              "tags": [
                "@studioIcon material-symbols:format-size-rounded"
              ],
              "tsType": "string | false",
              "id": "#appConfig/nuxtIcon/size",
              "default": "1em",
              "type": "string"
            },
            "class": {
              "title": "CSS Class",
              "description": "Set the default CSS class",
              "tags": [
                "@studioIcon material-symbols:css"
              ],
              "id": "#appConfig/nuxtIcon/class",
              "default": "",
              "type": "string"
            },
            "aliases": {
              "title": "Icon aliases",
              "description": "Define Icon aliases to update them easily without code changes.",
              "tags": [
                "@studioIcon material-symbols:star-rounded",
                "@studioInputObjectValueType icon"
              ],
              "tsType": "{ [alias: string]: string }",
              "id": "#appConfig/nuxtIcon/aliases",
              "default": {},
              "type": "object"
            }
          },
          "type": "object",
          "default": {
            "size": "1em",
            "class": "",
            "aliases": {}
          }
        },
        "prose": {
          "title": "Prose configuration from Nuxt Typography",
          "description": "",
          "tags": [
            "@studioIcon material-symbols:short-text-rounded",
            "@studioInput icon"
          ],
          "id": "#appConfig/prose",
          "properties": {
            "copyButton": {
              "title": "Copy button (used in code blocks)",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:content-copy"
              ],
              "id": "#appConfig/prose/copyButton",
              "properties": {
                "iconCopy": {
                  "title": "Icon displayed to copy",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/prose/copyButton/iconCopy",
                  "default": "ph:copy",
                  "type": "string"
                },
                "iconCopied": {
                  "title": "Icon displayed when copied",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/prose/copyButton/iconCopied",
                  "default": "ph:check",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "iconCopy": "ph:copy",
                "iconCopied": "ph:check"
              }
            },
            "headings": {
              "title": "Default configuration for all headings (h1, h2, h3, h4, h5 and h6)",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:title"
              ],
              "id": "#appConfig/prose/headings",
              "properties": {
                "icon": {
                  "title": "Default icon for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/headings/icon",
                  "default": "ph:link",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": "ph:link"
              }
            },
            "h1": {
              "title": "First heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h1"
              ],
              "id": "#appConfig/prose/h1",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h1/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h2": {
              "title": "Second heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h2"
              ],
              "id": "#appConfig/prose/h2",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h2/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h3": {
              "title": "Third heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h3"
              ],
              "id": "#appConfig/prose/h3",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h3/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h4": {
              "title": "Fourth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h4"
              ],
              "id": "#appConfig/prose/h4",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h4/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h5": {
              "title": "Fifth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h5"
              ],
              "id": "#appConfig/prose/h5",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h5/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            },
            "h6": {
              "title": "Sixth heading configuration",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:format-h6"
              ],
              "id": "#appConfig/prose/h6",
              "properties": {
                "icon": {
                  "title": "Icon displayed for anchor link on hover",
                  "description": "",
                  "tags": [],
                  "tsType": "string|false",
                  "id": "#appConfig/prose/h6/icon",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "icon": ""
              }
            }
          },
          "type": "object",
          "default": {
            "copyButton": {
              "iconCopy": "ph:copy",
              "iconCopied": "ph:check"
            },
            "headings": {
              "icon": "ph:link"
            },
            "h1": {
              "icon": ""
            },
            "h2": {
              "icon": ""
            },
            "h3": {
              "icon": ""
            },
            "h4": {
              "icon": ""
            },
            "h5": {
              "icon": ""
            },
            "h6": {
              "icon": ""
            }
          }
        },
        "docus": {
          "title": "Docus theme configuration.",
          "description": "",
          "tags": [
            "@studioIcon material-symbols:docs"
          ],
          "id": "#appConfig/docus",
          "properties": {
            "title": {
              "title": "Website title, used as header default title and meta title.",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:title"
              ],
              "id": "#appConfig/docus/title",
              "default": "Docus",
              "type": "string"
            },
            "titleTemplate": {
              "title": "The website title template, to overwrite the default one.",
              "description": "",
              "tags": [],
              "id": "#appConfig/docus/titleTemplate",
              "default": "%s · Docus",
              "type": "string"
            },
            "description": {
              "title": "Website description, used for meta description.",
              "description": "",
              "tags": [
                "@studioIcon material-symbols:description"
              ],
              "id": "#appConfig/docus/description",
              "default": "The best place to start your documentation.",
              "type": "string"
            },
            "image": {
              "title": "Cover image.",
              "description": "",
              "tags": [
                "@example '/cover.jpg'",
                "@studioIcon dashicons:cover-image",
                "@studioInput file"
              ],
              "id": "#appConfig/docus/image",
              "default": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
              "type": "string"
            },
            "socials": {
              "title": "Social links",
              "description": "Will be used in AppSocialIcons component.",
              "tags": [
                "@studioIcon material-symbols:share-outline"
              ],
              "id": "#appConfig/docus/socials",
              "properties": {
                "twitter": {
                  "title": "Twitter social handle",
                  "description": "",
                  "tags": [
                    "@example 'nuxt_js'",
                    "@studioIcon simple-icons:twitter"
                  ],
                  "id": "#appConfig/docus/socials/twitter",
                  "default": "",
                  "type": "string"
                },
                "github": {
                  "title": "GitHub org or repository",
                  "description": "",
                  "tags": [
                    "@example 'nuxt/framework'",
                    "@studioIcon simple-icons:github"
                  ],
                  "id": "#appConfig/docus/socials/github",
                  "default": "",
                  "type": "string"
                },
                "facebook": {
                  "title": "Facebook page url",
                  "description": "",
                  "tags": [
                    "@example https://www.facebook.com/groups/nuxtjs",
                    "@studioIcon simple-icons:facebook"
                  ],
                  "id": "#appConfig/docus/socials/facebook",
                  "default": "",
                  "type": "string"
                },
                "instagram": {
                  "title": "Instagram page url",
                  "description": "",
                  "tags": [
                    "@example https://www.instagram.com/wearenuxt",
                    "@studioIcon simple-icons:instagram"
                  ],
                  "id": "#appConfig/docus/socials/instagram",
                  "default": "",
                  "type": "string"
                },
                "tiktok": {
                  "title": "Instagram page url",
                  "description": "",
                  "tags": [
                    "@example https://www.youtube.com/@NuxtLabs",
                    "@studioIcon simple-icons:youtube"
                  ],
                  "id": "#appConfig/docus/socials/tiktok",
                  "default": "",
                  "type": "string"
                },
                "youtube": {
                  "title": "TikTok page url",
                  "description": "",
                  "tags": [
                    "@example https://www.tiktok.com/@tiktok",
                    "@studioIcon simple-icons:tiktok"
                  ],
                  "id": "#appConfig/docus/socials/youtube",
                  "default": "",
                  "type": "string"
                },
                "medium": {
                  "title": "Medium page url",
                  "description": "",
                  "tags": [
                    "@example https://medium.com/nuxt",
                    "@studioIcon simple-icons:medium"
                  ],
                  "id": "#appConfig/docus/socials/medium",
                  "default": "",
                  "type": "string"
                }
              },
              "type": "object",
              "default": {
                "twitter": "",
                "github": "",
                "facebook": "",
                "instagram": "",
                "tiktok": "",
                "youtube": "",
                "medium": ""
              }
            },
            "layout": {
              "title": "Theme layout configuration.",
              "description": "",
              "tags": [
                "@studioIcon tabler:arrow-autofit-width"
              ],
              "tsType": "'default'|'page'",
              "id": "#appConfig/docus/layout",
              "default": "default",
              "type": "string"
            },
            "aside": {
              "title": "Aside navigation configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-page-24-regular"
              ],
              "id": "#appConfig/docus/aside",
              "properties": {
                "level": {
                  "title": "Aside navigation level",
                  "description": "Use 0 to disable all nesting. Use 1 and more to display nested navigation in header and aside navigation.",
                  "tags": [],
                  "id": "#appConfig/docus/aside/level",
                  "default": 0,
                  "type": "number"
                },
                "collapsed": {
                  "title": "Specify if default collapsibles state globally for aside navigation.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/aside/collapsed",
                  "default": false,
                  "type": "boolean"
                },
                "exclude": {
                  "title": "Paths to be excluded from aside navigation.",
                  "description": "",
                  "tags": [],
                  "tsType": "string[]",
                  "id": "#appConfig/docus/aside/exclude",
                  "default": [],
                  "type": "array",
                  "items": {
                    "type": "any"
                  }
                }
              },
              "type": "object",
              "default": {
                "level": 0,
                "collapsed": false,
                "exclude": []
              }
            },
            "header": {
              "title": "Header configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-header-24-regular"
              ],
              "id": "#appConfig/docus/header",
              "properties": {
                "title": {
                  "title": "Website title",
                  "description": "Title to be displayed in header or as aria-label if logo is defined.\nDefault to docus.title",
                  "tags": [
                    "@studioIcon material-symbols:title"
                  ],
                  "id": "#appConfig/docus/header/title",
                  "default": "",
                  "type": "string"
                },
                "logo": {
                  "title": "Logo configuration",
                  "description": "Boolean to disable or use the `Logo.vue` component.\nString to be used as a name of a component.\nObject that sets the light and dark logos.",
                  "tags": [
                    "@example 'MyLogo'",
                    "@studioInput boolean"
                  ],
                  "tsType": "boolean|string|{dark: string, light: string}",
                  "id": "#appConfig/docus/header/logo",
                  "default": false,
                  "type": "boolean"
                },
                "showLinkIcon": {
                  "title": "Header links",
                  "description": "Toggle links icons in the header.",
                  "tags": [],
                  "id": "#appConfig/docus/header/showLinkIcon",
                  "default": false,
                  "type": "boolean"
                },
                "exclude": {
                  "title": "Paths to be excluded from header links.",
                  "description": "",
                  "tags": [],
                  "tsType": "string[]",
                  "id": "#appConfig/docus/header/exclude",
                  "default": [],
                  "type": "array",
                  "items": {
                    "type": "any"
                  }
                },
                "fluid": {
                  "title": "Makes the content of the header fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/header/fluid",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "title": "",
                "logo": false,
                "showLinkIcon": false,
                "exclude": [],
                "fluid": false
              }
            },
            "main": {
              "title": "Main content configuration.",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-header-footer-24-filled"
              ],
              "id": "#appConfig/docus/main",
              "properties": {
                "fluid": {
                  "title": "Makes the content of the main container fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/main/fluid",
                  "default": false,
                  "type": "boolean"
                },
                "padded": {
                  "title": "Makes the content of the main container padded.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/main/padded",
                  "default": true,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "fluid": false,
                "padded": true
              }
            },
            "footer": {
              "title": "Footer configuration",
              "description": "",
              "tags": [
                "@studioIcon fluent:document-footer-24-regular"
              ],
              "id": "#appConfig/docus/footer",
              "properties": {
                "credits": {
                  "title": "Website credits configuration.",
                  "description": "",
                  "tags": [
                    "@studioIcon material-symbols:copyright"
                  ],
                  "tsType": "false|{icon: string, text: string, href: string}",
                  "id": "#appConfig/docus/footer/credits",
                  "properties": {
                    "icon": {
                      "title": "Icon to show on credits",
                      "description": "",
                      "tags": [
                        "@formtype Icon"
                      ],
                      "id": "#appConfig/docus/footer/credits/icon",
                      "default": "IconDocus",
                      "type": "string"
                    },
                    "text": {
                      "type": "string",
                      "id": "#appConfig/docus/footer/credits/text",
                      "default": "Powered by Docus"
                    },
                    "href": {
                      "type": "string",
                      "id": "#appConfig/docus/footer/credits/href",
                      "default": "https://docus.dev"
                    }
                  },
                  "type": "object",
                  "default": {
                    "icon": "IconDocus",
                    "text": "Powered by Docus",
                    "href": "https://docus.dev"
                  }
                },
                "textLinks": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "text",
                      "href"
                    ],
                    "properties": {
                      "href": {
                        "type": "string",
                        "description": "URL when clicking the link"
                      },
                      "text": {
                        "type": "string",
                        "description": "Text of the link"
                      },
                      "target": {
                        "type": "string",
                        "description": "Target attribute of the link"
                      },
                      "rel": {
                        "type": "string",
                        "description": "Rel attribute of the link"
                      }
                    }
                  },
                  "title": "Text links",
                  "description": "Will be added into center section of the footer.",
                  "tags": [
                    "@studioIcon material-symbols:add-link"
                  ],
                  "id": "#appConfig/docus/footer/textLinks"
                },
                "iconLinks": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "required": [
                      "icon",
                      "href"
                    ],
                    "properties": {
                      "icon": {
                        "type": "string",
                        "description": "Icon name"
                      },
                      "href": {
                        "type": "string",
                        "description": "Link when clicking on the icon"
                      },
                      "label": {
                        "type": "string",
                        "description": "Label of the icon"
                      },
                      "rel": {
                        "type": "string",
                        "description": "Rel attribute of the link"
                      }
                    }
                  },
                  "title": "Icon links",
                  "description": "Icons to be added to Social Icons in footer.",
                  "tags": [
                    "@studioIcon material-symbols:add-link"
                  ],
                  "id": "#appConfig/docus/footer/iconLinks"
                },
                "fluid": {
                  "title": "Makes the content of the footer fluid.",
                  "description": "",
                  "tags": [],
                  "id": "#appConfig/docus/footer/fluid",
                  "default": true,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "credits": {
                  "icon": "IconDocus",
                  "text": "Powered by Docus",
                  "href": "https://docus.dev"
                },
                "fluid": true
              }
            },
            "github": {
              "title": "GitHub integration",
              "description": "Configure the Edit on Github integration.",
              "tags": [
                "@studioIcon simple-icons:github"
              ],
              "id": "#appConfig/docus/github",
              "properties": {
                "baseUrl": {
                  "title": "Base URL",
                  "description": "You can use this to link to GitHub Enterprise.",
                  "tags": [],
                  "id": "#appConfig/docus/github/baseUrl",
                  "default": "https://github.com",
                  "type": "string"
                },
                "dir": {
                  "title": "Directory",
                  "description": "Your GitHub repository root directory.",
                  "tags": [],
                  "id": "#appConfig/docus/github/dir",
                  "default": "",
                  "type": "string"
                },
                "branch": {
                  "title": "Branch",
                  "description": "Your GitHub repository branch.",
                  "tags": [],
                  "id": "#appConfig/docus/github/branch",
                  "default": "",
                  "type": "string"
                },
                "repo": {
                  "title": "Repository",
                  "description": "Your GitHub repository name.",
                  "tags": [],
                  "id": "#appConfig/docus/github/repo",
                  "default": "",
                  "type": "string"
                },
                "owner": {
                  "title": "Owner",
                  "description": "Your GitHub repository owner.",
                  "tags": [],
                  "id": "#appConfig/docus/github/owner",
                  "default": "",
                  "type": "string"
                },
                "edit": {
                  "title": "EditOnGithub",
                  "description": "Display EditOnGithub button.",
                  "tags": [],
                  "id": "#appConfig/docus/github/edit",
                  "default": false,
                  "type": "boolean"
                }
              },
              "type": "object",
              "default": {
                "baseUrl": "https://github.com",
                "dir": "",
                "branch": "",
                "repo": "",
                "owner": "",
                "edit": false
              }
            }
          },
          "type": "object",
          "default": {
            "title": "Docus",
            "titleTemplate": "%s · Docus",
            "description": "The best place to start your documentation.",
            "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
            "socials": {
              "twitter": "",
              "github": "",
              "facebook": "",
              "instagram": "",
              "tiktok": "",
              "youtube": "",
              "medium": ""
            },
            "layout": "default",
            "aside": {
              "level": 0,
              "collapsed": false,
              "exclude": []
            },
            "header": {
              "title": "",
              "logo": false,
              "showLinkIcon": false,
              "exclude": [],
              "fluid": false
            },
            "main": {
              "fluid": false,
              "padded": true
            },
            "footer": {
              "credits": {
                "icon": "IconDocus",
                "text": "Powered by Docus",
                "href": "https://docus.dev"
              },
              "fluid": true
            },
            "github": {
              "baseUrl": "https://github.com",
              "dir": "",
              "branch": "",
              "repo": "",
              "owner": "",
              "edit": false
            }
          }
        }
      },
      "type": "object",
      "default": {
        "nuxtIcon": {
          "size": "1em",
          "class": "",
          "aliases": {}
        },
        "prose": {
          "copyButton": {
            "iconCopy": "ph:copy",
            "iconCopied": "ph:check"
          },
          "headings": {
            "icon": "ph:link"
          },
          "h1": {
            "icon": ""
          },
          "h2": {
            "icon": ""
          },
          "h3": {
            "icon": ""
          },
          "h4": {
            "icon": ""
          },
          "h5": {
            "icon": ""
          },
          "h6": {
            "icon": ""
          }
        },
        "docus": {
          "title": "Docus",
          "titleTemplate": "%s · Docus",
          "description": "The best place to start your documentation.",
          "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
          "socials": {
            "twitter": "",
            "github": "",
            "facebook": "",
            "instagram": "",
            "tiktok": "",
            "youtube": "",
            "medium": ""
          },
          "layout": "default",
          "aside": {
            "level": 0,
            "collapsed": false,
            "exclude": []
          },
          "header": {
            "title": "",
            "logo": false,
            "showLinkIcon": false,
            "exclude": [],
            "fluid": false
          },
          "main": {
            "fluid": false,
            "padded": true
          },
          "footer": {
            "credits": {
              "icon": "IconDocus",
              "text": "Powered by Docus",
              "href": "https://docus.dev"
            },
            "fluid": true
          },
          "github": {
            "baseUrl": "https://github.com",
            "dir": "",
            "branch": "",
            "repo": "",
            "owner": "",
            "edit": false
          }
        }
      }
    },
    "default": {
      "nuxtIcon": {
        "size": "1em",
        "class": "",
        "aliases": {}
      },
      "prose": {
        "copyButton": {
          "iconCopy": "ph:copy",
          "iconCopied": "ph:check"
        },
        "headings": {
          "icon": "ph:link"
        },
        "h1": {
          "icon": ""
        },
        "h2": {
          "icon": ""
        },
        "h3": {
          "icon": ""
        },
        "h4": {
          "icon": ""
        },
        "h5": {
          "icon": ""
        },
        "h6": {
          "icon": ""
        }
      },
      "docus": {
        "title": "Docus",
        "titleTemplate": "%s · Docus",
        "description": "The best place to start your documentation.",
        "image": "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
        "socials": {
          "twitter": "",
          "github": "",
          "facebook": "",
          "instagram": "",
          "tiktok": "",
          "youtube": "",
          "medium": ""
        },
        "layout": "default",
        "aside": {
          "level": 0,
          "collapsed": false,
          "exclude": []
        },
        "header": {
          "title": "",
          "logo": false,
          "showLinkIcon": false,
          "exclude": [],
          "fluid": false
        },
        "main": {
          "fluid": false,
          "padded": true
        },
        "footer": {
          "credits": {
            "icon": "IconDocus",
            "text": "Powered by Docus",
            "href": "https://docus.dev"
          },
          "fluid": true
        },
        "github": {
          "baseUrl": "https://github.com",
          "dir": "",
          "branch": "",
          "repo": "",
          "owner": "",
          "edit": false
        }
      }
    }
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/danielsmith/Documents/GitHub/docs/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', unstorage_47drivers_47memory({"driver":"memory"}));
storage.mount('internal:nuxt:prerender:island', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('internal:nuxt:prerender:payload', unstorage_47drivers_47lru_45cache({"driver":"lruCache","max":1000}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Users/danielsmith/Documents/GitHub/docs/.data/kv"}));
storage.mount('pinceau', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/danielsmith/Documents/GitHub/docs/.nuxt/pinceau/theme","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"/Users/danielsmith/Documents/GitHub/docs/content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"/Users/danielsmith/Documents/GitHub/docs/.nuxt/content-cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/danielsmith/Documents/GitHub/docs","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/danielsmith/Documents/GitHub/docs/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/danielsmith/Documents/GitHub/docs/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/danielsmith/Documents/GitHub/docs/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const nitro = (async function(nitro) {
  nitro.hooks.hook("render:html", async (htmlContext, { event }) => {
    const theme = await useStorage().getItem("pinceau:index.css");
    const pinceauContent = event?.pinceauContent || { theme: void 0, runtime: void 0 };
    if (!theme?.runtime) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-runtime-hydratable">${pinceauContent.runtime}</style>`);
    }
    if (!theme?.theme) {
      htmlContext.head.splice(2, 0, `<style id="pinceau-theme">${theme}</style>`);
    }
  });
});

const script = "\"use strict\";(()=>{const a=window,e=document.documentElement,m=[\"dark\",\"light\"],c=window.localStorage.getItem(\"nuxt-color-mode\")||\"system\";let n=c===\"system\"?f():c;const l=e.getAttribute(\"data-color-mode-forced\");l&&(n=l),i(n),a[\"__NUXT_COLOR_MODE__\"]={preference:c,value:n,getColorScheme:f,addColorScheme:i,removeColorScheme:d};function i(o){const t=\"\"+o+\"\",s=\"theme\";e.classList?e.classList.add(t):e.className+=\" \"+t,s&&e.setAttribute(\"data-\"+s,o)}function d(o){const t=\"\"+o+\"\",s=\"theme\";e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp(t,\"g\"),\"\"),s&&e.removeAttribute(\"data-\"+s)}function r(o){return a.matchMedia(\"(prefers-color-scheme\"+o+\")\")}function f(){if(a.matchMedia&&r(\"\").media!==\"not all\"){for(const o of m)if(r(\":\"+o).matches)return o}return\"light\"}})();\n";

const _joDWOXBtEw = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const plugins = [
  nitro,
_joDWOXBtEw
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/cover.png": {
    "type": "image/png",
    "etag": "\"35909-5J+erS2uZP14tVeg7C5PFt8OTKM\"",
    "mtime": "2023-10-30T19:44:50.767Z",
    "size": 219401,
    "path": "../../.output/public/cover.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3c2e-p4uyv3Eo1x9Jh1+8ZiNT2QPMMWQ\"",
    "mtime": "2023-10-30T19:44:50.764Z",
    "size": 15406,
    "path": "../../.output/public/favicon.ico"
  },
  "/_nuxt/Alert.408d0512.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a16-R59lklaJnzmroyg2hva4I+vlHzs\"",
    "mtime": "2023-10-30T19:44:50.741Z",
    "size": 6678,
    "path": "../../.output/public/_nuxt/Alert.408d0512.css"
  },
  "/_nuxt/Alert.5d2c733c.js": {
    "type": "application/javascript",
    "etag": "\"204-kjGIXRlR2LtpV3JDVFBl1ET/HQ4\"",
    "mtime": "2023-10-30T19:44:50.741Z",
    "size": 516,
    "path": "../../.output/public/_nuxt/Alert.5d2c733c.js"
  },
  "/_nuxt/Badge.78c87494.js": {
    "type": "application/javascript",
    "etag": "\"1d7-ppl2tqoyC4/kgw683tq9swpxzQo\"",
    "mtime": "2023-10-30T19:44:50.741Z",
    "size": 471,
    "path": "../../.output/public/_nuxt/Badge.78c87494.js"
  },
  "/_nuxt/Badge.bd8fb886.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a36-a6J7AnJzVfGOw54A9tXH5czhvIg\"",
    "mtime": "2023-10-30T19:44:50.741Z",
    "size": 6710,
    "path": "../../.output/public/_nuxt/Badge.bd8fb886.css"
  },
  "/_nuxt/BlockHero.5e04f7f2.js": {
    "type": "application/javascript",
    "etag": "\"702-ZqBEoBPi6d7yqrr1+pxhd40XRhQ\"",
    "mtime": "2023-10-30T19:44:50.741Z",
    "size": 1794,
    "path": "../../.output/public/_nuxt/BlockHero.5e04f7f2.js"
  },
  "/_nuxt/BlockHero.c90d4fc3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a56-oAZNs58Q+AGc24cxyvAxlzGOHoc\"",
    "mtime": "2023-10-30T19:44:50.741Z",
    "size": 2646,
    "path": "../../.output/public/_nuxt/BlockHero.c90d4fc3.css"
  },
  "/_nuxt/ButtonLink.23e0d758.js": {
    "type": "application/javascript",
    "etag": "\"5d0-DoLlQ3OACkBS4rQGXKyLN10v9ps\"",
    "mtime": "2023-10-30T19:44:50.741Z",
    "size": 1488,
    "path": "../../.output/public/_nuxt/ButtonLink.23e0d758.js"
  },
  "/_nuxt/ButtonLink.c4905621.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"274-niZNJjh3/buawHpbAvaxH7YmXP8\"",
    "mtime": "2023-10-30T19:44:50.741Z",
    "size": 628,
    "path": "../../.output/public/_nuxt/ButtonLink.c4905621.css"
  },
  "/_nuxt/Callout.c1f75b95.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ccd-zBJ2tQ4Ss6c+NryFI1+RjgDgZN8\"",
    "mtime": "2023-10-30T19:44:50.741Z",
    "size": 7373,
    "path": "../../.output/public/_nuxt/Callout.c1f75b95.css"
  },
  "/_nuxt/Callout.fd7477fb.js": {
    "type": "application/javascript",
    "etag": "\"3b5-2xTVtWIHR096v1pGOBrN7cPc+Oo\"",
    "mtime": "2023-10-30T19:44:50.742Z",
    "size": 949,
    "path": "../../.output/public/_nuxt/Callout.fd7477fb.js"
  },
  "/_nuxt/Card.a46436ac.js": {
    "type": "application/javascript",
    "etag": "\"2b3-cRdlH7sLXzlNXmwt5d5pYshm3e4\"",
    "mtime": "2023-10-30T19:44:50.741Z",
    "size": 691,
    "path": "../../.output/public/_nuxt/Card.a46436ac.js"
  },
  "/_nuxt/Card.aa172920.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"37b-wiUD7yZ8vS+E8/Rw1YFR1wzqC2I\"",
    "mtime": "2023-10-30T19:44:50.742Z",
    "size": 891,
    "path": "../../.output/public/_nuxt/Card.aa172920.css"
  },
  "/_nuxt/CardGrid.4bc87347.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"407-A5SJ14G2F9CJb/OScJau04xONpM\"",
    "mtime": "2023-10-30T19:44:50.742Z",
    "size": 1031,
    "path": "../../.output/public/_nuxt/CardGrid.4bc87347.css"
  },
  "/_nuxt/CardGrid.7053b1eb.js": {
    "type": "application/javascript",
    "etag": "\"22d-xFFvKydqwXtMeeGst+EpiYWxkWM\"",
    "mtime": "2023-10-30T19:44:50.742Z",
    "size": 557,
    "path": "../../.output/public/_nuxt/CardGrid.7053b1eb.js"
  },
  "/_nuxt/CodeBlock.8933957c.js": {
    "type": "application/javascript",
    "etag": "\"1af-IDea2yOp/G7mHm8odyrVUOShea4\"",
    "mtime": "2023-10-30T19:44:50.742Z",
    "size": 431,
    "path": "../../.output/public/_nuxt/CodeBlock.8933957c.js"
  },
  "/_nuxt/CodeBlock.e43dab4c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d-nweqRivy9aabD6QXnxHC31KLDvo\"",
    "mtime": "2023-10-30T19:44:50.742Z",
    "size": 93,
    "path": "../../.output/public/_nuxt/CodeBlock.e43dab4c.css"
  },
  "/_nuxt/CodeGroup.84e49b07.js": {
    "type": "application/javascript",
    "etag": "\"46c-uhqR1NZqjxbAylLHWWJNrqMrsbo\"",
    "mtime": "2023-10-30T19:44:50.742Z",
    "size": 1132,
    "path": "../../.output/public/_nuxt/CodeGroup.84e49b07.js"
  },
  "/_nuxt/CodeGroup.eba43c0e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1ed-lSbdMvUlAHS6neI3BBPmxpz+QaI\"",
    "mtime": "2023-10-30T19:44:50.742Z",
    "size": 493,
    "path": "../../.output/public/_nuxt/CodeGroup.eba43c0e.css"
  },
  "/_nuxt/ComponentPlayground.02ad673c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4d7-EvOZuENL1OTaDrOAytx97Wqy+fY\"",
    "mtime": "2023-10-30T19:44:50.743Z",
    "size": 1239,
    "path": "../../.output/public/_nuxt/ComponentPlayground.02ad673c.css"
  },
  "/_nuxt/ComponentPlayground.eab48243.js": {
    "type": "application/javascript",
    "etag": "\"ab5-leTJOEPzF1owqDjWq1aIGe4cj8g\"",
    "mtime": "2023-10-30T19:44:50.742Z",
    "size": 2741,
    "path": "../../.output/public/_nuxt/ComponentPlayground.eab48243.js"
  },
  "/_nuxt/ComponentPlaygroundData.2ba66f99.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e8-eRIBDachbuHQgcxmMyQhlHa6tXo\"",
    "mtime": "2023-10-30T19:44:50.742Z",
    "size": 232,
    "path": "../../.output/public/_nuxt/ComponentPlaygroundData.2ba66f99.css"
  },
  "/_nuxt/ComponentPlaygroundData.701e7c5c.js": {
    "type": "application/javascript",
    "etag": "\"5bf-8BW430/u4t3o/+Rm+mY++Elhnak\"",
    "mtime": "2023-10-30T19:44:50.743Z",
    "size": 1471,
    "path": "../../.output/public/_nuxt/ComponentPlaygroundData.701e7c5c.js"
  },
  "/_nuxt/ComponentPlaygroundProps.54f42c7a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"339-BJnAxWNkwK91+x6XqFg1Bh8QVR8\"",
    "mtime": "2023-10-30T19:44:50.743Z",
    "size": 825,
    "path": "../../.output/public/_nuxt/ComponentPlaygroundProps.54f42c7a.css"
  },
  "/_nuxt/ComponentPlaygroundProps.9f12d381.js": {
    "type": "application/javascript",
    "etag": "\"57e-AU7QERh2gyssB77aCPmxzrDZOtc\"",
    "mtime": "2023-10-30T19:44:50.743Z",
    "size": 1406,
    "path": "../../.output/public/_nuxt/ComponentPlaygroundProps.9f12d381.js"
  },
  "/_nuxt/ComponentPlaygroundSlots.a71310cd.js": {
    "type": "application/javascript",
    "etag": "\"71-SEHNwhoCRDTLdIjlQ2kZ0guQOdA\"",
    "mtime": "2023-10-30T19:44:50.743Z",
    "size": 113,
    "path": "../../.output/public/_nuxt/ComponentPlaygroundSlots.a71310cd.js"
  },
  "/_nuxt/ComponentPlaygroundSlots.vue.181ed5b3.js": {
    "type": "application/javascript",
    "etag": "\"145-HYiQeF1nFV5rEvPlDn4LV5zHdBQ\"",
    "mtime": "2023-10-30T19:44:50.743Z",
    "size": 325,
    "path": "../../.output/public/_nuxt/ComponentPlaygroundSlots.vue.181ed5b3.js"
  },
  "/_nuxt/ComponentPlaygroundTokens.000c6991.js": {
    "type": "application/javascript",
    "etag": "\"72-Ky/Ywr2s2sXHL3BgXt4AnXTHcv0\"",
    "mtime": "2023-10-30T19:44:50.743Z",
    "size": 114,
    "path": "../../.output/public/_nuxt/ComponentPlaygroundTokens.000c6991.js"
  },
  "/_nuxt/ComponentPlaygroundTokens.vue.4efbe41a.js": {
    "type": "application/javascript",
    "etag": "\"118-0koXpmEpr5KD5xKWjn47tOh6pGs\"",
    "mtime": "2023-10-30T19:44:50.743Z",
    "size": 280,
    "path": "../../.output/public/_nuxt/ComponentPlaygroundTokens.vue.4efbe41a.js"
  },
  "/_nuxt/ContentDoc.5f6b7391.js": {
    "type": "application/javascript",
    "etag": "\"5bc-5+aqHA+luwBgAgbl4OnCkgEdi6A\"",
    "mtime": "2023-10-30T19:44:50.743Z",
    "size": 1468,
    "path": "../../.output/public/_nuxt/ContentDoc.5f6b7391.js"
  },
  "/_nuxt/ContentList.6e5b3a19.js": {
    "type": "application/javascript",
    "etag": "\"347-mhdCpviyTr+GcO5ManyUNc/PY5Y\"",
    "mtime": "2023-10-30T19:44:50.743Z",
    "size": 839,
    "path": "../../.output/public/_nuxt/ContentList.6e5b3a19.js"
  },
  "/_nuxt/ContentNavigation.5611a04e.js": {
    "type": "application/javascript",
    "etag": "\"337-dSsWGnWBoUmf7LmA5eFonQWe3oY\"",
    "mtime": "2023-10-30T19:44:50.744Z",
    "size": 823,
    "path": "../../.output/public/_nuxt/ContentNavigation.5611a04e.js"
  },
  "/_nuxt/ContentQuery.3e783c0e.js": {
    "type": "application/javascript",
    "etag": "\"97d-BlRFvrdptGUvoNTQcwr7hgDHLSA\"",
    "mtime": "2023-10-30T19:44:50.744Z",
    "size": 2429,
    "path": "../../.output/public/_nuxt/ContentQuery.3e783c0e.js"
  },
  "/_nuxt/ContentRenderer.3ec87499.js": {
    "type": "application/javascript",
    "etag": "\"4ba-zBtg1g1pnlC4+hvyaKSNPExLRkc\"",
    "mtime": "2023-10-30T19:44:50.744Z",
    "size": 1210,
    "path": "../../.output/public/_nuxt/ContentRenderer.3ec87499.js"
  },
  "/_nuxt/ContentRendererMarkdown.805a6967.js": {
    "type": "application/javascript",
    "etag": "\"70-fu3xrZnhTwVfVqUXeXZ2z9yd/OA\"",
    "mtime": "2023-10-30T19:44:50.744Z",
    "size": 112,
    "path": "../../.output/public/_nuxt/ContentRendererMarkdown.805a6967.js"
  },
  "/_nuxt/ContentRendererMarkdown.vue.41c2c305.js": {
    "type": "application/javascript",
    "etag": "\"5b75-kkB0UVh+iAQYc40sZJjsbwxUemY\"",
    "mtime": "2023-10-30T19:44:50.744Z",
    "size": 23413,
    "path": "../../.output/public/_nuxt/ContentRendererMarkdown.vue.41c2c305.js"
  },
  "/_nuxt/ContentSlot.e99bc746.js": {
    "type": "application/javascript",
    "etag": "\"105-PGG5x9vsZpF/HbJROtH4UE2+V/0\"",
    "mtime": "2023-10-30T19:44:50.745Z",
    "size": 261,
    "path": "../../.output/public/_nuxt/ContentSlot.e99bc746.js"
  },
  "/_nuxt/CopyButton.f7d2fa81.js": {
    "type": "application/javascript",
    "etag": "\"2b4-tjKVn1v1fjUeJhzGhEyG4v9wvBA\"",
    "mtime": "2023-10-30T19:44:50.744Z",
    "size": 692,
    "path": "../../.output/public/_nuxt/CopyButton.f7d2fa81.js"
  },
  "/_nuxt/DocsAside.42681b3c.js": {
    "type": "application/javascript",
    "etag": "\"279-vtv/6TLFrMBRzt52sympcvV4zUc\"",
    "mtime": "2023-10-30T19:44:50.745Z",
    "size": 633,
    "path": "../../.output/public/_nuxt/DocsAside.42681b3c.js"
  },
  "/_nuxt/DocsAside.7397caed.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"184-bGDal9LcY/4Y5dkldAsGQXyScVo\"",
    "mtime": "2023-10-30T19:44:50.746Z",
    "size": 388,
    "path": "../../.output/public/_nuxt/DocsAside.7397caed.css"
  },
  "/_nuxt/DocsPageBottom.0b5ac2bf.js": {
    "type": "application/javascript",
    "etag": "\"3da-HNqy3GeEu3OrdSH0FbURas0jXvg\"",
    "mtime": "2023-10-30T19:44:50.745Z",
    "size": 986,
    "path": "../../.output/public/_nuxt/DocsPageBottom.0b5ac2bf.js"
  },
  "/_nuxt/DocsPageBottom.9f7ccbf0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"18d-FUqlf+XbbYvS5sEf8esd1/GlSGw\"",
    "mtime": "2023-10-30T19:44:50.745Z",
    "size": 397,
    "path": "../../.output/public/_nuxt/DocsPageBottom.9f7ccbf0.css"
  },
  "/_nuxt/DocsPageLayout.2ba2acb9.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"130b-QHZ/klrLYHWsYJmNehGTFbaayrs\"",
    "mtime": "2023-10-30T19:44:50.745Z",
    "size": 4875,
    "path": "../../.output/public/_nuxt/DocsPageLayout.2ba2acb9.css"
  },
  "/_nuxt/DocsPageLayout.6115c235.js": {
    "type": "application/javascript",
    "etag": "\"c2a-QWJ34yjr+ntlVIs4VdNeEJQHmqA\"",
    "mtime": "2023-10-30T19:44:50.745Z",
    "size": 3114,
    "path": "../../.output/public/_nuxt/DocsPageLayout.6115c235.js"
  },
  "/_nuxt/DocsPrevNext.0d80e373.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7d4-NvxMiJJWVDEz24cDcNI6MdD3pYo\"",
    "mtime": "2023-10-30T19:44:50.745Z",
    "size": 2004,
    "path": "../../.output/public/_nuxt/DocsPrevNext.0d80e373.css"
  },
  "/_nuxt/DocsPrevNext.2f099473.js": {
    "type": "application/javascript",
    "etag": "\"50f-zP+SGgjYlNlCkN3Pwk8qtYELylU\"",
    "mtime": "2023-10-30T19:44:50.746Z",
    "size": 1295,
    "path": "../../.output/public/_nuxt/DocsPrevNext.2f099473.js"
  },
  "/_nuxt/DocsToc.855ff635.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"152-xWK8LaACil1MZkjZVWd3uY1zBsE\"",
    "mtime": "2023-10-30T19:44:50.746Z",
    "size": 338,
    "path": "../../.output/public/_nuxt/DocsToc.855ff635.css"
  },
  "/_nuxt/DocsToc.c4eb6326.js": {
    "type": "application/javascript",
    "etag": "\"2a1-DwK8p2j65TR42+mFSAH72MPFK2U\"",
    "mtime": "2023-10-30T19:44:50.747Z",
    "size": 673,
    "path": "../../.output/public/_nuxt/DocsToc.c4eb6326.js"
  },
  "/_nuxt/DocsTocLinks.310b9647.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2c8-lonyXVkMo/xEHiqv4gR/KbGs6xc\"",
    "mtime": "2023-10-30T19:44:50.746Z",
    "size": 712,
    "path": "../../.output/public/_nuxt/DocsTocLinks.310b9647.css"
  },
  "/_nuxt/DocsTocLinks.d6043a0c.js": {
    "type": "application/javascript",
    "etag": "\"64c-mjiHxCqvii748xYDSn6129gS7eQ\"",
    "mtime": "2023-10-30T19:44:50.746Z",
    "size": 1612,
    "path": "../../.output/public/_nuxt/DocsTocLinks.d6043a0c.js"
  },
  "/_nuxt/DocumentDrivenEmpty.cecc2449.js": {
    "type": "application/javascript",
    "etag": "\"120-Q2V+pKs1UTxynGmzlfeHDHPkQPI\"",
    "mtime": "2023-10-30T19:44:50.746Z",
    "size": 288,
    "path": "../../.output/public/_nuxt/DocumentDrivenEmpty.cecc2449.js"
  },
  "/_nuxt/DocumentDrivenNotFound.2e5af98f.js": {
    "type": "application/javascript",
    "etag": "\"2fa-GV2kpLDYK00/bKvh7xR0fphT+D0\"",
    "mtime": "2023-10-30T19:44:50.749Z",
    "size": 762,
    "path": "../../.output/public/_nuxt/DocumentDrivenNotFound.2e5af98f.js"
  },
  "/_nuxt/DocumentDrivenNotFound.7238633c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8a6-be2wI1aypSJ5mpoHOqs3uPaNlW8\"",
    "mtime": "2023-10-30T19:44:50.746Z",
    "size": 2214,
    "path": "../../.output/public/_nuxt/DocumentDrivenNotFound.7238633c.css"
  },
  "/_nuxt/EditOnLink.81158194.js": {
    "type": "application/javascript",
    "etag": "\"63-xOnAXXcWBLsJJv360Arl3QZoFxg\"",
    "mtime": "2023-10-30T19:44:50.747Z",
    "size": 99,
    "path": "../../.output/public/_nuxt/EditOnLink.81158194.js"
  },
  "/_nuxt/EditOnLink.vue.c0346b4a.js": {
    "type": "application/javascript",
    "etag": "\"989-kf3OX6gImdB4ZoT5vThmuCRr31A\"",
    "mtime": "2023-10-30T19:44:50.747Z",
    "size": 2441,
    "path": "../../.output/public/_nuxt/EditOnLink.vue.c0346b4a.js"
  },
  "/_nuxt/Ellipsis.7a0b54f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1aa-ZBsQ4t+AsCchpHMJOH2gFqrcYyA\"",
    "mtime": "2023-10-30T19:44:50.747Z",
    "size": 426,
    "path": "../../.output/public/_nuxt/Ellipsis.7a0b54f8.css"
  },
  "/_nuxt/Ellipsis.9de49135.js": {
    "type": "application/javascript",
    "etag": "\"546-dHSpj/kj7/dTxpSoHrbiZc7Nzbw\"",
    "mtime": "2023-10-30T19:44:50.747Z",
    "size": 1350,
    "path": "../../.output/public/_nuxt/Ellipsis.9de49135.js"
  },
  "/_nuxt/IconCSS.a9a03952.js": {
    "type": "application/javascript",
    "etag": "\"349-S4AHmOcZIXl6tmrXUwkq6pWLBqY\"",
    "mtime": "2023-10-30T19:44:50.747Z",
    "size": 841,
    "path": "../../.output/public/_nuxt/IconCSS.a9a03952.js"
  },
  "/_nuxt/IconCSS.b5e1ed11.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"102-FXpb9ho34tM+U1G7Spx9dmdE8Jw\"",
    "mtime": "2023-10-30T19:44:50.747Z",
    "size": 258,
    "path": "../../.output/public/_nuxt/IconCSS.b5e1ed11.css"
  },
  "/_nuxt/IconCodeSandBox.8985aed1.js": {
    "type": "application/javascript",
    "etag": "\"1ae-Vzz5En9r5slJqO2tAlWlPgCF6GE\"",
    "mtime": "2023-10-30T19:44:50.748Z",
    "size": 430,
    "path": "../../.output/public/_nuxt/IconCodeSandBox.8985aed1.js"
  },
  "/_nuxt/IconDocus.277086a0.js": {
    "type": "application/javascript",
    "etag": "\"31a-nur1yjSpccbwThiCGGf1IMkT5KE\"",
    "mtime": "2023-10-30T19:44:50.748Z",
    "size": 794,
    "path": "../../.output/public/_nuxt/IconDocus.277086a0.js"
  },
  "/_nuxt/IconNuxt.003ced8d.js": {
    "type": "application/javascript",
    "etag": "\"497-4AhXX9zpCzejka2sJIupFDcSliA\"",
    "mtime": "2023-10-30T19:44:50.749Z",
    "size": 1175,
    "path": "../../.output/public/_nuxt/IconNuxt.003ced8d.js"
  },
  "/_nuxt/IconNuxtContent.003ced8d.js": {
    "type": "application/javascript",
    "etag": "\"497-4AhXX9zpCzejka2sJIupFDcSliA\"",
    "mtime": "2023-10-30T19:44:50.748Z",
    "size": 1175,
    "path": "../../.output/public/_nuxt/IconNuxtContent.003ced8d.js"
  },
  "/_nuxt/IconNuxtLabs.83def0da.js": {
    "type": "application/javascript",
    "etag": "\"497-KvVNWkjHHM6pfOZpUcPVP76F1qk\"",
    "mtime": "2023-10-30T19:44:50.748Z",
    "size": 1175,
    "path": "../../.output/public/_nuxt/IconNuxtLabs.83def0da.js"
  },
  "/_nuxt/IconNuxtStudio.34390cd8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"66-AA2ErH34Xmax3511FiYX4lQ+vjs\"",
    "mtime": "2023-10-30T19:44:50.749Z",
    "size": 102,
    "path": "../../.output/public/_nuxt/IconNuxtStudio.34390cd8.css"
  },
  "/_nuxt/IconNuxtStudio.6ad88ab7.js": {
    "type": "application/javascript",
    "etag": "\"4f4-CSTXSrPF3JlxlsIxWFAXep/lQ4U\"",
    "mtime": "2023-10-30T19:44:50.749Z",
    "size": 1268,
    "path": "../../.output/public/_nuxt/IconNuxtStudio.6ad88ab7.js"
  },
  "/_nuxt/IconStackBlitz.99329b01.js": {
    "type": "application/javascript",
    "etag": "\"165-Mi9rj0jX+QDQBcVwyRPHwchCN5Y\"",
    "mtime": "2023-10-30T19:44:50.749Z",
    "size": 357,
    "path": "../../.output/public/_nuxt/IconStackBlitz.99329b01.js"
  },
  "/_nuxt/IconVueTelescope.2beda973.js": {
    "type": "application/javascript",
    "etag": "\"2cf-icI/HhmmNj5zkn46JNhLAdYOFMg\"",
    "mtime": "2023-10-30T19:44:50.749Z",
    "size": 719,
    "path": "../../.output/public/_nuxt/IconVueTelescope.2beda973.js"
  },
  "/_nuxt/List.8aa226e2.js": {
    "type": "application/javascript",
    "etag": "\"3a1-+EU5ITZu3UAQygUxcHO7isCsrL8\"",
    "mtime": "2023-10-30T19:44:50.749Z",
    "size": 929,
    "path": "../../.output/public/_nuxt/List.8aa226e2.js"
  },
  "/_nuxt/List.e98a0c25.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d8-iurlxPCM2AgLJD8300ZruJEdfgg\"",
    "mtime": "2023-10-30T19:44:50.749Z",
    "size": 728,
    "path": "../../.output/public/_nuxt/List.e98a0c25.css"
  },
  "/_nuxt/MDCSlot.44237027.js": {
    "type": "application/javascript",
    "etag": "\"303-a1IspaqLejNNdaX9NVScUiN8MvM\"",
    "mtime": "2023-10-30T19:44:50.750Z",
    "size": 771,
    "path": "../../.output/public/_nuxt/MDCSlot.44237027.js"
  },
  "/_nuxt/Markdown.3d3acc29.js": {
    "type": "application/javascript",
    "etag": "\"184-oBI2o70vbENM/sjZ2fU0A1EzkBw\"",
    "mtime": "2023-10-30T19:44:50.750Z",
    "size": 388,
    "path": "../../.output/public/_nuxt/Markdown.3d3acc29.js"
  },
  "/_nuxt/NuxtImg.c84b30c3.js": {
    "type": "application/javascript",
    "etag": "\"60-HIbvjULeNiI2C6iBdCmeyJTQbJw\"",
    "mtime": "2023-10-30T19:44:50.750Z",
    "size": 96,
    "path": "../../.output/public/_nuxt/NuxtImg.c84b30c3.js"
  },
  "/_nuxt/NuxtImg.vue.aab88a57.js": {
    "type": "application/javascript",
    "etag": "\"26b-Fxj9jSdbCNk4Tqr0kl0iXXGuIfg\"",
    "mtime": "2023-10-30T19:44:50.750Z",
    "size": 619,
    "path": "../../.output/public/_nuxt/NuxtImg.vue.aab88a57.js"
  },
  "/_nuxt/PreviewLayout.05ed95ae.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4e-6E2gPJaG4gG9DuSxb51gBBQNOWI\"",
    "mtime": "2023-10-30T19:44:50.750Z",
    "size": 78,
    "path": "../../.output/public/_nuxt/PreviewLayout.05ed95ae.css"
  },
  "/_nuxt/PreviewLayout.68a4ab5f.js": {
    "type": "application/javascript",
    "etag": "\"100-zvD6gp27X97f2fQgSgkHjgf7gik\"",
    "mtime": "2023-10-30T19:44:50.750Z",
    "size": 256,
    "path": "../../.output/public/_nuxt/PreviewLayout.68a4ab5f.js"
  },
  "/_nuxt/Props.3df956ed.js": {
    "type": "application/javascript",
    "etag": "\"c24-AOFWmKdJGyaq0r1cab6zglELrY4\"",
    "mtime": "2023-10-30T19:44:50.750Z",
    "size": 3108,
    "path": "../../.output/public/_nuxt/Props.3df956ed.js"
  },
  "/_nuxt/ProseA.94134036.js": {
    "type": "application/javascript",
    "etag": "\"1a5-rzM3FhfmmWwwCQGmhZ29xEvv2gM\"",
    "mtime": "2023-10-30T19:44:50.750Z",
    "size": 421,
    "path": "../../.output/public/_nuxt/ProseA.94134036.js"
  },
  "/_nuxt/ProseA.e2976377.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"47f-Bd1cJI2QymcfBXsls3kQ5ZE7caw\"",
    "mtime": "2023-10-30T19:44:50.750Z",
    "size": 1151,
    "path": "../../.output/public/_nuxt/ProseA.e2976377.css"
  },
  "/_nuxt/ProseBlockquote.6dfb0ac0.js": {
    "type": "application/javascript",
    "etag": "\"ef-EY3zB7EzR3aSKaxq4LUvy7vaPUU\"",
    "mtime": "2023-10-30T19:44:50.750Z",
    "size": 239,
    "path": "../../.output/public/_nuxt/ProseBlockquote.6dfb0ac0.js"
  },
  "/_nuxt/ProseBlockquote.87ef1443.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"221-f5jPEONAHBPcQuXiCGnWhNfhL5Q\"",
    "mtime": "2023-10-30T19:44:50.751Z",
    "size": 545,
    "path": "../../.output/public/_nuxt/ProseBlockquote.87ef1443.css"
  },
  "/_nuxt/ProseCode.60d59d51.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c40-mWMkemR7NJlr50rRrIVl5hy6rgE\"",
    "mtime": "2023-10-30T19:44:50.751Z",
    "size": 3136,
    "path": "../../.output/public/_nuxt/ProseCode.60d59d51.css"
  },
  "/_nuxt/ProseCode.e6337228.js": {
    "type": "application/javascript",
    "etag": "\"6f2-qCvw+x4B15gpRlz1E3o1X0vXnFs\"",
    "mtime": "2023-10-30T19:44:50.751Z",
    "size": 1778,
    "path": "../../.output/public/_nuxt/ProseCode.e6337228.js"
  },
  "/_nuxt/ProseCodeInline.21ce328c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2d1-1/Z1/IkqkivW4P3OS3+WKgWaimM\"",
    "mtime": "2023-10-30T19:44:50.751Z",
    "size": 721,
    "path": "../../.output/public/_nuxt/ProseCodeInline.21ce328c.css"
  },
  "/_nuxt/ProseCodeInline.ce59fb31.js": {
    "type": "application/javascript",
    "etag": "\"e9-LVtkj81heSpdKnrf1g08ztQ4lU4\"",
    "mtime": "2023-10-30T19:44:50.751Z",
    "size": 233,
    "path": "../../.output/public/_nuxt/ProseCodeInline.ce59fb31.js"
  },
  "/_nuxt/ProseEm.26a085fc.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4f-/WrDUH4MFh0hLZFKn/kRGt7Vtc0\"",
    "mtime": "2023-10-30T19:44:50.751Z",
    "size": 79,
    "path": "../../.output/public/_nuxt/ProseEm.26a085fc.css"
  },
  "/_nuxt/ProseEm.3f888023.js": {
    "type": "application/javascript",
    "etag": "\"e7-kgiawt15ceQqbxH677HAQ/YncRc\"",
    "mtime": "2023-10-30T19:44:50.751Z",
    "size": 231,
    "path": "../../.output/public/_nuxt/ProseEm.3f888023.js"
  },
  "/_nuxt/ProseH1.4070ea3e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1de-vu6gnRlIdut3DU0SqNyHMrmUwYw\"",
    "mtime": "2023-10-30T19:44:50.751Z",
    "size": 478,
    "path": "../../.output/public/_nuxt/ProseH1.4070ea3e.css"
  },
  "/_nuxt/ProseH1.465cebbd.js": {
    "type": "application/javascript",
    "etag": "\"2e9-JrIW3c9BgldDVeA4zTRKez5MFcY\"",
    "mtime": "2023-10-30T19:44:50.751Z",
    "size": 745,
    "path": "../../.output/public/_nuxt/ProseH1.465cebbd.js"
  },
  "/_nuxt/ProseH2.18d47a86.js": {
    "type": "application/javascript",
    "etag": "\"2e9-+gmkqv07tubmP/KHHoJd8Ge3fBU\"",
    "mtime": "2023-10-30T19:44:50.751Z",
    "size": 745,
    "path": "../../.output/public/_nuxt/ProseH2.18d47a86.js"
  },
  "/_nuxt/ProseH2.df45a763.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1de-ElsOcmrQZVguAC6jKV+/2pHVtUM\"",
    "mtime": "2023-10-30T19:44:50.751Z",
    "size": 478,
    "path": "../../.output/public/_nuxt/ProseH2.df45a763.css"
  },
  "/_nuxt/ProseH3.88c2d983.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1de-6zpggFoH+7HgaBWt68BQSjErioQ\"",
    "mtime": "2023-10-30T19:44:50.752Z",
    "size": 478,
    "path": "../../.output/public/_nuxt/ProseH3.88c2d983.css"
  },
  "/_nuxt/ProseH3.b6b2e5d1.js": {
    "type": "application/javascript",
    "etag": "\"2e9-WNQPqJ9EpH9JNcyPPlEMeM7gJdM\"",
    "mtime": "2023-10-30T19:44:50.752Z",
    "size": 745,
    "path": "../../.output/public/_nuxt/ProseH3.b6b2e5d1.js"
  },
  "/_nuxt/ProseH4.407e72c2.js": {
    "type": "application/javascript",
    "etag": "\"2e9-AFV950nSCoQY8ykzSbuQ0ZSnp0U\"",
    "mtime": "2023-10-30T19:44:50.752Z",
    "size": 745,
    "path": "../../.output/public/_nuxt/ProseH4.407e72c2.js"
  },
  "/_nuxt/ProseH4.5b64d6f8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1de-2YWYy7IuQm2F5twjlJ2RzxwOLvI\"",
    "mtime": "2023-10-30T19:44:50.752Z",
    "size": 478,
    "path": "../../.output/public/_nuxt/ProseH4.5b64d6f8.css"
  },
  "/_nuxt/ProseH5.79b89231.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b0-b9y8zeK5cD39J66TYPtZhKhVD5c\"",
    "mtime": "2023-10-30T19:44:50.752Z",
    "size": 432,
    "path": "../../.output/public/_nuxt/ProseH5.79b89231.css"
  },
  "/_nuxt/ProseH5.b8fecace.js": {
    "type": "application/javascript",
    "etag": "\"2e9-Bj8yOwupkPu8DUIYDpeef6+i2/c\"",
    "mtime": "2023-10-30T19:44:50.752Z",
    "size": 745,
    "path": "../../.output/public/_nuxt/ProseH5.b8fecace.js"
  },
  "/_nuxt/ProseH6.3b25caf1.js": {
    "type": "application/javascript",
    "etag": "\"2e9-nLU9Ovn+1PWcHes76KrW6Vri65w\"",
    "mtime": "2023-10-30T19:44:50.752Z",
    "size": 745,
    "path": "../../.output/public/_nuxt/ProseH6.3b25caf1.js"
  },
  "/_nuxt/ProseH6.56de6cba.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b0-hmpgY0vqdZTxgvOWwnEyKm4wK4s\"",
    "mtime": "2023-10-30T19:44:50.752Z",
    "size": 432,
    "path": "../../.output/public/_nuxt/ProseH6.56de6cba.css"
  },
  "/_nuxt/ProseHr.c7c78bbe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"80-INEPhPPD9t2+R6o6gFRIQ5CI4Ik\"",
    "mtime": "2023-10-30T19:44:50.752Z",
    "size": 128,
    "path": "../../.output/public/_nuxt/ProseHr.c7c78bbe.css"
  },
  "/_nuxt/ProseHr.e1825b32.js": {
    "type": "application/javascript",
    "etag": "\"b6-+bLBq5zGCGARwZShLOcYtrsFYis\"",
    "mtime": "2023-10-30T19:44:50.752Z",
    "size": 182,
    "path": "../../.output/public/_nuxt/ProseHr.e1825b32.js"
  },
  "/_nuxt/ProseImg.018721e2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"35-/P+VAtl+aDWpPVCPQAbTsFW52HM\"",
    "mtime": "2023-10-30T19:44:50.753Z",
    "size": 53,
    "path": "../../.output/public/_nuxt/ProseImg.018721e2.css"
  },
  "/_nuxt/ProseImg.f7a1a5e6.js": {
    "type": "application/javascript",
    "etag": "\"26c-nGcDScorxr2KY5Rxt+Nziv4CyN8\"",
    "mtime": "2023-10-30T19:44:50.753Z",
    "size": 620,
    "path": "../../.output/public/_nuxt/ProseImg.f7a1a5e6.js"
  },
  "/_nuxt/ProseLi.68e30a8e.js": {
    "type": "application/javascript",
    "etag": "\"e7-FEwLF3uZmtQyZ0o0d3nq0ZoLKj8\"",
    "mtime": "2023-10-30T19:44:50.753Z",
    "size": 231,
    "path": "../../.output/public/_nuxt/ProseLi.68e30a8e.js"
  },
  "/_nuxt/ProseLi.ac05b421.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"91-eiqKu/ywnE10Nr/KZRFEXPPAFjo\"",
    "mtime": "2023-10-30T19:44:50.753Z",
    "size": 145,
    "path": "../../.output/public/_nuxt/ProseLi.ac05b421.css"
  },
  "/_nuxt/ProseOl.5ddab164.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"142-1u4BYpDgf3hVmCBTLW2gtv6NsmM\"",
    "mtime": "2023-10-30T19:44:50.753Z",
    "size": 322,
    "path": "../../.output/public/_nuxt/ProseOl.5ddab164.css"
  },
  "/_nuxt/ProseOl.9d7ce068.js": {
    "type": "application/javascript",
    "etag": "\"e7-6Gdoc4zdb8WebA/X1VBdu/JZagc\"",
    "mtime": "2023-10-30T19:44:50.753Z",
    "size": 231,
    "path": "../../.output/public/_nuxt/ProseOl.9d7ce068.js"
  },
  "/_nuxt/ProseP.945916cd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f0-wFnUHeg48g/JyGSDwWH/o0sfb10\"",
    "mtime": "2023-10-30T19:44:50.753Z",
    "size": 240,
    "path": "../../.output/public/_nuxt/ProseP.945916cd.css"
  },
  "/_nuxt/ProseP.b61fc7b8.js": {
    "type": "application/javascript",
    "etag": "\"e6-SFDcAXuDPDh/8y7uG9vBPToTtzE\"",
    "mtime": "2023-10-30T19:44:50.753Z",
    "size": 230,
    "path": "../../.output/public/_nuxt/ProseP.b61fc7b8.js"
  },
  "/_nuxt/ProsePre.64f579a8.js": {
    "type": "application/javascript",
    "etag": "\"2dd-L0acQGUgZzOv6N6BirFoZaTlVvE\"",
    "mtime": "2023-10-30T19:44:50.753Z",
    "size": 733,
    "path": "../../.output/public/_nuxt/ProsePre.64f579a8.js"
  },
  "/_nuxt/ProsePre.e63e49c6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-GbvrqT5j9gSWlpa8e36U/Kv6Zx0\"",
    "mtime": "2023-10-30T19:44:50.754Z",
    "size": 46,
    "path": "../../.output/public/_nuxt/ProsePre.e63e49c6.css"
  },
  "/_nuxt/ProseScript.745d8058.js": {
    "type": "application/javascript",
    "etag": "\"1eb-hDjtrOJaYF1vBCLemPPmJjmXw18\"",
    "mtime": "2023-10-30T19:44:50.754Z",
    "size": 491,
    "path": "../../.output/public/_nuxt/ProseScript.745d8058.js"
  },
  "/_nuxt/ProseStrong.263d77e1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6c-MD65Ps8jSjh1cMdTmfC4f+7oAlU\"",
    "mtime": "2023-10-30T19:44:50.754Z",
    "size": 108,
    "path": "../../.output/public/_nuxt/ProseStrong.263d77e1.css"
  },
  "/_nuxt/ProseStrong.f0970c03.js": {
    "type": "application/javascript",
    "etag": "\"eb-szG6ftAeOvRE48VXM1vFh7lxwqw\"",
    "mtime": "2023-10-30T19:44:50.754Z",
    "size": 235,
    "path": "../../.output/public/_nuxt/ProseStrong.f0970c03.js"
  },
  "/_nuxt/ProseTable.c65fbffe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"164-lnhXgUriM9WndiBRXv31OET1Xko\"",
    "mtime": "2023-10-30T19:44:50.754Z",
    "size": 356,
    "path": "../../.output/public/_nuxt/ProseTable.c65fbffe.css"
  },
  "/_nuxt/ProseTable.dec9e2a1.js": {
    "type": "application/javascript",
    "etag": "\"118-VzT9cbV+PP6/RkDjS+xyU9i7J/k\"",
    "mtime": "2023-10-30T19:44:50.754Z",
    "size": 280,
    "path": "../../.output/public/_nuxt/ProseTable.dec9e2a1.js"
  },
  "/_nuxt/ProseTbody.5fd2a0b2.js": {
    "type": "application/javascript",
    "etag": "\"bd-HgZ7qxNDIMq40MyYuk9Zk3TI5+o\"",
    "mtime": "2023-10-30T19:44:50.754Z",
    "size": 189,
    "path": "../../.output/public/_nuxt/ProseTbody.5fd2a0b2.js"
  },
  "/_nuxt/ProseTd.41ebe51f.js": {
    "type": "application/javascript",
    "etag": "\"e7-74FY3U6HbMcoLMt+rh4kVTmvCMM\"",
    "mtime": "2023-10-30T19:44:50.754Z",
    "size": 231,
    "path": "../../.output/public/_nuxt/ProseTd.41ebe51f.js"
  },
  "/_nuxt/ProseTd.b09a068a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e0-XXoqcFCrHkCkGoKhK4j5l4oGakA\"",
    "mtime": "2023-10-30T19:44:50.754Z",
    "size": 224,
    "path": "../../.output/public/_nuxt/ProseTd.b09a068a.css"
  },
  "/_nuxt/ProseTh.c2582e0d.js": {
    "type": "application/javascript",
    "etag": "\"e7-nXnAHbxezBZ2EUmPqpe+h3UHw6k\"",
    "mtime": "2023-10-30T19:44:50.754Z",
    "size": 231,
    "path": "../../.output/public/_nuxt/ProseTh.c2582e0d.js"
  },
  "/_nuxt/ProseTh.cb34fc46.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"133-ME+9Ja9P6EJtI8kWP/PvK9eCkQY\"",
    "mtime": "2023-10-30T19:44:50.755Z",
    "size": 307,
    "path": "../../.output/public/_nuxt/ProseTh.cb34fc46.css"
  },
  "/_nuxt/ProseThead.332c0b8a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"172-PHOMt/h1NbLuYickVBw+mixlAp4\"",
    "mtime": "2023-10-30T19:44:50.755Z",
    "size": 370,
    "path": "../../.output/public/_nuxt/ProseThead.332c0b8a.css"
  },
  "/_nuxt/ProseThead.beac4890.js": {
    "type": "application/javascript",
    "etag": "\"ea-Zog22p4gg+jd4hJvb/Hr4i6AJhQ\"",
    "mtime": "2023-10-30T19:44:50.755Z",
    "size": 234,
    "path": "../../.output/public/_nuxt/ProseThead.beac4890.js"
  },
  "/_nuxt/ProseTr.65bec588.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a4-8+Ah6srlM/sVnhpyI2/xpaSKd9I\"",
    "mtime": "2023-10-30T19:44:50.755Z",
    "size": 164,
    "path": "../../.output/public/_nuxt/ProseTr.65bec588.css"
  },
  "/_nuxt/ProseTr.8742a66a.js": {
    "type": "application/javascript",
    "etag": "\"e7-KPftYSbVcY2HiBcSOJUBGTirFTg\"",
    "mtime": "2023-10-30T19:44:50.755Z",
    "size": 231,
    "path": "../../.output/public/_nuxt/ProseTr.8742a66a.js"
  },
  "/_nuxt/ProseUl.c9c63ec7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"142-qYXC3xqSFri7diIu/qKq34JetiM\"",
    "mtime": "2023-10-30T19:44:50.755Z",
    "size": 322,
    "path": "../../.output/public/_nuxt/ProseUl.c9c63ec7.css"
  },
  "/_nuxt/ProseUl.cb49d7b7.js": {
    "type": "application/javascript",
    "etag": "\"e7-E9UnYH2anYwyUv6sSS2ywLaeN/I\"",
    "mtime": "2023-10-30T19:44:50.755Z",
    "size": 231,
    "path": "../../.output/public/_nuxt/ProseUl.cb49d7b7.js"
  },
  "/_nuxt/Sandbox.786aacf2.js": {
    "type": "application/javascript",
    "etag": "\"5a1-7/pV+9Nj4xglMtb/mz3E+hqkKgY\"",
    "mtime": "2023-10-30T19:44:50.755Z",
    "size": 1441,
    "path": "../../.output/public/_nuxt/Sandbox.786aacf2.js"
  },
  "/_nuxt/Sandbox.cca703cd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1b3-mHxEbUrTDVS69EfFsv//OsC6XxA\"",
    "mtime": "2023-10-30T19:44:50.756Z",
    "size": 435,
    "path": "../../.output/public/_nuxt/Sandbox.cca703cd.css"
  },
  "/_nuxt/SourceLink.18b01e12.js": {
    "type": "application/javascript",
    "etag": "\"ed-Fs8bRBkIdsXteyEW2xDH617L1Yc\"",
    "mtime": "2023-10-30T19:44:50.755Z",
    "size": 237,
    "path": "../../.output/public/_nuxt/SourceLink.18b01e12.js"
  },
  "/_nuxt/TabsHeader.56d3bbc7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6a6-LCAge+xW5+p5e4FXAJ85Zxp0wtc\"",
    "mtime": "2023-10-30T19:44:50.756Z",
    "size": 1702,
    "path": "../../.output/public/_nuxt/TabsHeader.56d3bbc7.css"
  },
  "/_nuxt/TabsHeader.9f8ec2e7.js": {
    "type": "application/javascript",
    "etag": "\"495-p5V6PMb3RAbf8TdySR+9GuaFXBg\"",
    "mtime": "2023-10-30T19:44:50.756Z",
    "size": 1173,
    "path": "../../.output/public/_nuxt/TabsHeader.9f8ec2e7.js"
  },
  "/_nuxt/Terminal.54103379.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"ab4-JZghaj6tvQjkvgVb1UihmL/tRqQ\"",
    "mtime": "2023-10-30T19:44:50.756Z",
    "size": 2740,
    "path": "../../.output/public/_nuxt/Terminal.54103379.css"
  },
  "/_nuxt/Terminal.ab57a6bc.js": {
    "type": "application/javascript",
    "etag": "\"4bc-pkrIzLEu7DRICGBUeq2Khp8W69w\"",
    "mtime": "2023-10-30T19:44:50.756Z",
    "size": 1212,
    "path": "../../.output/public/_nuxt/Terminal.ab57a6bc.js"
  },
  "/_nuxt/TokensPlayground.1993f1fc.js": {
    "type": "application/javascript",
    "etag": "\"ff-TA57lZ8cGrnlm1ViOrKLh9YlrSA\"",
    "mtime": "2023-10-30T19:44:50.756Z",
    "size": 255,
    "path": "../../.output/public/_nuxt/TokensPlayground.1993f1fc.js"
  },
  "/_nuxt/VideoPlayer.0721ce38.js": {
    "type": "application/javascript",
    "etag": "\"756-xFUBmEIl0MeTxwcVAqdcTzuN5eA\"",
    "mtime": "2023-10-30T19:44:50.756Z",
    "size": 1878,
    "path": "../../.output/public/_nuxt/VideoPlayer.0721ce38.js"
  },
  "/_nuxt/VideoPlayer.afedae8c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5d8-IrkmvEwgcTRtoeLS0SMvnBUVGkg\"",
    "mtime": "2023-10-30T19:44:50.756Z",
    "size": 1496,
    "path": "../../.output/public/_nuxt/VideoPlayer.afedae8c.css"
  },
  "/_nuxt/VoltaBoard.a5d6b336.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4ce-T4Y7eyTZZLXoes5nCIc24C8K79M\"",
    "mtime": "2023-10-30T19:44:50.756Z",
    "size": 1230,
    "path": "../../.output/public/_nuxt/VoltaBoard.a5d6b336.css"
  },
  "/_nuxt/VoltaBoard.bc1497b6.js": {
    "type": "application/javascript",
    "etag": "\"131-w4ZlkD8IR2b6GjWUIFQef9J++9g\"",
    "mtime": "2023-10-30T19:44:50.756Z",
    "size": 305,
    "path": "../../.output/public/_nuxt/VoltaBoard.bc1497b6.js"
  },
  "/_nuxt/client-db.59c41193.js": {
    "type": "application/javascript",
    "etag": "\"541a-7v0H7qVsdJcaVYxU8k29a1ZyaQM\"",
    "mtime": "2023-10-30T19:44:50.757Z",
    "size": 21530,
    "path": "../../.output/public/_nuxt/client-db.59c41193.js"
  },
  "/_nuxt/debug.ebdbc3d9.js": {
    "type": "application/javascript",
    "etag": "\"253-6YuGsK54J70SNYMnl4B291jNObg\"",
    "mtime": "2023-10-30T19:44:50.757Z",
    "size": 595,
    "path": "../../.output/public/_nuxt/debug.ebdbc3d9.js"
  },
  "/_nuxt/default.7ccbd342.js": {
    "type": "application/javascript",
    "etag": "\"26c-jwwSrjZBekrJWN+MLC4bqKCRkls\"",
    "mtime": "2023-10-30T19:44:50.757Z",
    "size": 620,
    "path": "../../.output/public/_nuxt/default.7ccbd342.js"
  },
  "/_nuxt/document-driven.a6ed99f5.js": {
    "type": "application/javascript",
    "etag": "\"824-p9nTA3zu4ghUlGQgfC1Xw6AW6/M\"",
    "mtime": "2023-10-30T19:44:50.757Z",
    "size": 2084,
    "path": "../../.output/public/_nuxt/document-driven.a6ed99f5.js"
  },
  "/_nuxt/entry.19040e7f.js": {
    "type": "application/javascript",
    "etag": "\"4a5ee-XaMbi/K8jD3AIGcvuSUq/ZYpfAY\"",
    "mtime": "2023-10-30T19:44:50.759Z",
    "size": 304622,
    "path": "../../.output/public/_nuxt/entry.19040e7f.js"
  },
  "/_nuxt/entry.2685c6ae.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"527b-3O8SSFVgZB0f4Qk+6grqUCIrNWw\"",
    "mtime": "2023-10-30T19:44:50.757Z",
    "size": 21115,
    "path": "../../.output/public/_nuxt/entry.2685c6ae.css"
  },
  "/_nuxt/error-404.2036e8fd.js": {
    "type": "application/javascript",
    "etag": "\"8a8-0c6mLv4+vy/5Oxid/DY+HXBBusM\"",
    "mtime": "2023-10-30T19:44:50.757Z",
    "size": 2216,
    "path": "../../.output/public/_nuxt/error-404.2036e8fd.js"
  },
  "/_nuxt/error-404.e7689c2d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1084-B7tCUY0qvChA1tgE+nVVVj/y5Bk\"",
    "mtime": "2023-10-30T19:44:50.757Z",
    "size": 4228,
    "path": "../../.output/public/_nuxt/error-404.e7689c2d.css"
  },
  "/_nuxt/error-500.92b46a75.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"902-B2xICseQMVn+pdQNn0+jwyHYeuw\"",
    "mtime": "2023-10-30T19:44:50.757Z",
    "size": 2306,
    "path": "../../.output/public/_nuxt/error-500.92b46a75.css"
  },
  "/_nuxt/error-500.c9d7c89a.js": {
    "type": "application/javascript",
    "etag": "\"751-AQq27/jeCPOEBIqNwQF/xNrJtKc\"",
    "mtime": "2023-10-30T19:44:50.757Z",
    "size": 1873,
    "path": "../../.output/public/_nuxt/error-500.c9d7c89a.js"
  },
  "/_nuxt/index.17e44084.js": {
    "type": "application/javascript",
    "etag": "\"9c51-4nL//o57Wqaj7p9inIELRO+Whzo\"",
    "mtime": "2023-10-30T19:44:50.758Z",
    "size": 40017,
    "path": "../../.output/public/_nuxt/index.17e44084.js"
  },
  "/_nuxt/node.676c5e99.js": {
    "type": "application/javascript",
    "etag": "\"45b-FEl3F7H0mhNmm4JJrL7ya1xLrTo\"",
    "mtime": "2023-10-30T19:44:50.758Z",
    "size": 1115,
    "path": "../../.output/public/_nuxt/node.676c5e99.js"
  },
  "/_nuxt/page.41b64923.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"54-fxc3j0OW0UcGEyVDJPYE48ECyOw\"",
    "mtime": "2023-10-30T19:44:50.758Z",
    "size": 84,
    "path": "../../.output/public/_nuxt/page.41b64923.css"
  },
  "/_nuxt/page.5c669c5e.js": {
    "type": "application/javascript",
    "etag": "\"28b-eWsoIs7K6irjdPRKzhb0CsCQzc0\"",
    "mtime": "2023-10-30T19:44:50.758Z",
    "size": 651,
    "path": "../../.output/public/_nuxt/page.5c669c5e.js"
  },
  "/_nuxt/slot.51812f31.js": {
    "type": "application/javascript",
    "etag": "\"c5-1iD95fvW7toZVMc11mlCzkrXtj8\"",
    "mtime": "2023-10-30T19:44:50.758Z",
    "size": 197,
    "path": "../../.output/public/_nuxt/slot.51812f31.js"
  },
  "/_nuxt/useStudio.37ff8fdd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"db7-vzuep7jc+yUIofzYgwMkmi2uEfA\"",
    "mtime": "2023-10-30T19:44:50.758Z",
    "size": 3511,
    "path": "../../.output/public/_nuxt/useStudio.37ff8fdd.css"
  },
  "/_nuxt/useStudio.c0a5304d.js": {
    "type": "application/javascript",
    "etag": "\"2843-v89HiD2rtoTj0aoAd/pzsSCBi2Q\"",
    "mtime": "2023-10-30T19:44:50.759Z",
    "size": 10307,
    "path": "../../.output/public/_nuxt/useStudio.c0a5304d.js"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-WyGfEQUFH61UkjrUzUz6pCWqF68\"",
    "mtime": "2023-10-30T19:44:50.697Z",
    "size": 71,
    "path": "../../.output/public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/5fa87f2e-a1c2-4b3c-baf6-edbda8e44a66.json": {
    "type": "application/json",
    "etag": "\"c0-Q0V1HTAdTewAFpAy8GcpKPcnWIg\"",
    "mtime": "2023-10-30T19:44:50.688Z",
    "size": 192,
    "path": "../../.output/public/_nuxt/builds/meta/5fa87f2e-a1c2-4b3c-baf6-edbda8e44a66.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta":{"maxAge":31536000},"/_nuxt/builds":{"maxAge":1},"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var version = "1.0.2";

const components = {
  "AppDocSearch": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue",
    "pascalName": "AppDocSearch",
    "kebabName": "app-doc-search",
    "chunkName": "components/app-doc-search",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppFooter": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "pascalName": "AppFooter",
    "kebabName": "app-footer",
    "chunkName": "components/app-footer",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/AppFooter.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "pascalName": "AppHeader",
    "kebabName": "app-header",
    "chunkName": "components/app-header",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/AppHeader.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderDialog": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "pascalName": "AppHeaderDialog",
    "kebabName": "app-header-dialog",
    "chunkName": "components/app-header-dialog",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderLogo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "pascalName": "AppHeaderLogo",
    "kebabName": "app-header-logo",
    "chunkName": "components/app-header-logo",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppHeaderNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "pascalName": "AppHeaderNavigation",
    "kebabName": "app-header-navigation",
    "chunkName": "components/app-header-navigation",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "pascalName": "AppLayout",
    "kebabName": "app-layout",
    "chunkName": "components/app-layout",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/AppLayout.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppLoadingBar": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "pascalName": "AppLoadingBar",
    "kebabName": "app-loading-bar",
    "chunkName": "components/app-loading-bar",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppSearch": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "pascalName": "AppSearch",
    "kebabName": "app-search",
    "chunkName": "components/app-search",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/AppSearch.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "AppSocialIcons": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "pascalName": "AppSocialIcons",
    "kebabName": "app-social-icons",
    "chunkName": "components/app-social-icons",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocumentDrivenNotFound": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "pascalName": "DocumentDrivenNotFound",
    "kebabName": "document-driven-not-found",
    "chunkName": "components/document-driven-not-found",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Ellipsis": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "pascalName": "Ellipsis",
    "kebabName": "ellipsis",
    "chunkName": "components/ellipsis",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/Ellipsis.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Logo": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "pascalName": "Logo",
    "kebabName": "logo",
    "chunkName": "components/logo",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/Logo.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ThemeSelect": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "pascalName": "ThemeSelect",
    "kebabName": "theme-select",
    "chunkName": "components/theme-select",
    "shortPath": "node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAside": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "pascalName": "DocsAside",
    "kebabName": "docs-aside",
    "chunkName": "components/docs-aside",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/docs/DocsAside.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsAsideTree": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "pascalName": "DocsAsideTree",
    "kebabName": "docs-aside-tree",
    "chunkName": "components/docs-aside-tree",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsPageBottom": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "pascalName": "DocsPageBottom",
    "kebabName": "docs-page-bottom",
    "chunkName": "components/docs-page-bottom",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsPageLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "pascalName": "DocsPageLayout",
    "kebabName": "docs-page-layout",
    "chunkName": "components/docs-page-layout",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/docs/DocsPageLayout.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsPrevNext": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "pascalName": "DocsPrevNext",
    "kebabName": "docs-prev-next",
    "chunkName": "components/docs-prev-next",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsToc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "pascalName": "DocsToc",
    "kebabName": "docs-toc",
    "chunkName": "components/docs-toc",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocsTocLinks": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "pascalName": "DocsTocLinks",
    "kebabName": "docs-toc-links",
    "chunkName": "components/docs-toc-links",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "EditOnLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "pascalName": "EditOnLink",
    "kebabName": "edit-on-link",
    "chunkName": "components/edit-on-link",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "SourceLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "pascalName": "SourceLink",
    "kebabName": "source-link",
    "chunkName": "components/source-link",
    "shortPath": "node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/docus/components/docs/SourceLink.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseA": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "pascalName": "ProseA",
    "kebabName": "prose-a",
    "chunkName": "components/prose-a",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseA.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseBlockquote": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "pascalName": "ProseBlockquote",
    "kebabName": "prose-blockquote",
    "chunkName": "components/prose-blockquote",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseBlockquote.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseCode": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "pascalName": "ProseCode",
    "kebabName": "prose-code",
    "chunkName": "components/prose-code",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseCodeInline": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "pascalName": "ProseCodeInline",
    "kebabName": "prose-code-inline",
    "chunkName": "components/prose-code-inline",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseCodeInline.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseEm": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "pascalName": "ProseEm",
    "kebabName": "prose-em",
    "chunkName": "components/prose-em",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseEm.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseH1": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "pascalName": "ProseH1",
    "kebabName": "prose-h1",
    "chunkName": "components/prose-h1",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseH1.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseH2": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "pascalName": "ProseH2",
    "kebabName": "prose-h2",
    "chunkName": "components/prose-h2",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseH2.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseH3": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "pascalName": "ProseH3",
    "kebabName": "prose-h3",
    "chunkName": "components/prose-h3",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseH3.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseH4": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "pascalName": "ProseH4",
    "kebabName": "prose-h4",
    "chunkName": "components/prose-h4",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseH4.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseH5": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "pascalName": "ProseH5",
    "kebabName": "prose-h5",
    "chunkName": "components/prose-h5",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseH5.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseH6": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "pascalName": "ProseH6",
    "kebabName": "prose-h6",
    "chunkName": "components/prose-h6",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseH6.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseHr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "pascalName": "ProseHr",
    "kebabName": "prose-hr",
    "chunkName": "components/prose-hr",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseHr.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "pascalName": "ProseImg",
    "kebabName": "prose-img",
    "chunkName": "components/prose-img",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseImg.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseLi": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "pascalName": "ProseLi",
    "kebabName": "prose-li",
    "chunkName": "components/prose-li",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseLi.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseOl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "pascalName": "ProseOl",
    "kebabName": "prose-ol",
    "chunkName": "components/prose-ol",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseOl.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseP": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "pascalName": "ProseP",
    "kebabName": "prose-p",
    "chunkName": "components/prose-p",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseP.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseStrong": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "pascalName": "ProseStrong",
    "kebabName": "prose-strong",
    "chunkName": "components/prose-strong",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseStrong.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseTable": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "pascalName": "ProseTable",
    "kebabName": "prose-table",
    "chunkName": "components/prose-table",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseTable.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseTbody": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "pascalName": "ProseTbody",
    "kebabName": "prose-tbody",
    "chunkName": "components/prose-tbody",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseTbody.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseTd": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "pascalName": "ProseTd",
    "kebabName": "prose-td",
    "chunkName": "components/prose-td",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseTd.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseTh": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "pascalName": "ProseTh",
    "kebabName": "prose-th",
    "chunkName": "components/prose-th",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseTh.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseThead": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "pascalName": "ProseThead",
    "kebabName": "prose-thead",
    "chunkName": "components/prose-thead",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseThead.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseTr": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "pascalName": "ProseTr",
    "kebabName": "prose-tr",
    "chunkName": "components/prose-tr",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseTr.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseUl": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "pascalName": "ProseUl",
    "kebabName": "prose-ul",
    "chunkName": "components/prose-ul",
    "shortPath": "node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/typography/components/global/ProseUl.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Alert": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "pascalName": "Alert",
    "kebabName": "alert",
    "chunkName": "components/alert",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/Alert.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Badge": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "pascalName": "Badge",
    "kebabName": "badge",
    "chunkName": "components/badge",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/Badge.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ButtonLink": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "pascalName": "ButtonLink",
    "kebabName": "button-link",
    "chunkName": "components/button-link",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Callout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "pascalName": "Callout",
    "kebabName": "callout",
    "chunkName": "components/callout",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/Callout.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "CodeBlock": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "pascalName": "CodeBlock",
    "kebabName": "code-block",
    "chunkName": "components/code-block",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "CodeGroup": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "pascalName": "CodeGroup",
    "kebabName": "code-group",
    "chunkName": "components/code-group",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Container": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "pascalName": "Container",
    "kebabName": "container",
    "chunkName": "components/container",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/Container.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "CopyButton": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "pascalName": "CopyButton",
    "kebabName": "copy-button",
    "chunkName": "components/copy-button",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "List": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "pascalName": "List",
    "kebabName": "list",
    "chunkName": "components/list",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/List.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "NuxtImg": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "pascalName": "NuxtImg",
    "kebabName": "nuxt-img",
    "chunkName": "components/nuxt-img",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/NuxtImg.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Props": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "pascalName": "Props",
    "kebabName": "props",
    "chunkName": "components/props",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/Props.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Sandbox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "pascalName": "Sandbox",
    "kebabName": "sandbox",
    "chunkName": "components/sandbox",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "TabsHeader": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "pascalName": "TabsHeader",
    "kebabName": "tabs-header",
    "chunkName": "components/tabs-header",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Terminal": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "pascalName": "Terminal",
    "kebabName": "terminal",
    "chunkName": "components/terminal",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/Terminal.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "VideoPlayer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "pascalName": "VideoPlayer",
    "kebabName": "video-player",
    "chunkName": "components/video-player",
    "shortPath": "node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/globals/VideoPlayer.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconCodeSandBox": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "pascalName": "IconCodeSandBox",
    "kebabName": "icon-code-sand-box",
    "chunkName": "components/icon-code-sand-box",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/icons/IconCodeSandBox.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconDocus": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "pascalName": "IconDocus",
    "kebabName": "icon-docus",
    "chunkName": "components/icon-docus",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/icons/IconDocus.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxt": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "pascalName": "IconNuxt",
    "kebabName": "icon-nuxt",
    "chunkName": "components/icon-nuxt",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxt.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtContent": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "pascalName": "IconNuxtContent",
    "kebabName": "icon-nuxt-content",
    "chunkName": "components/icon-nuxt-content",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxtContent.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtLabs": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "pascalName": "IconNuxtLabs",
    "kebabName": "icon-nuxt-labs",
    "chunkName": "components/icon-nuxt-labs",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxtLabs.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconNuxtStudio": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "pascalName": "IconNuxtStudio",
    "kebabName": "icon-nuxt-studio",
    "chunkName": "components/icon-nuxt-studio",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/icons/IconNuxtStudio.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconStackBlitz": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "pascalName": "IconStackBlitz",
    "kebabName": "icon-stack-blitz",
    "chunkName": "components/icon-stack-blitz",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/icons/IconStackBlitz.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "IconVueTelescope": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "pascalName": "IconVueTelescope",
    "kebabName": "icon-vue-telescope",
    "chunkName": "components/icon-vue-telescope",
    "shortPath": "node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/icons/IconVueTelescope.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "BlockHero": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "pascalName": "BlockHero",
    "kebabName": "block-hero",
    "chunkName": "components/block-hero",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Card": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "pascalName": "Card",
    "kebabName": "card",
    "chunkName": "components/card",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/landing/Card.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "CardGrid": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "pascalName": "CardGrid",
    "kebabName": "card-grid",
    "chunkName": "components/card-grid",
    "shortPath": "node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "VoltaBoard": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "pascalName": "VoltaBoard",
    "kebabName": "volta-board",
    "chunkName": "components/volta-board",
    "shortPath": "node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ComponentPlayground": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "pascalName": "ComponentPlayground",
    "kebabName": "component-playground",
    "chunkName": "components/component-playground",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ComponentPlaygroundData": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "pascalName": "ComponentPlaygroundData",
    "kebabName": "component-playground-data",
    "chunkName": "components/component-playground-data",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ComponentPlaygroundProps": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "pascalName": "ComponentPlaygroundProps",
    "kebabName": "component-playground-props",
    "chunkName": "components/component-playground-props",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ComponentPlaygroundSlots": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "pascalName": "ComponentPlaygroundSlots",
    "kebabName": "component-playground-slots",
    "chunkName": "components/component-playground-slots",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundSlots.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ComponentPlaygroundTokens": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "pascalName": "ComponentPlaygroundTokens",
    "kebabName": "component-playground-tokens",
    "chunkName": "components/component-playground-tokens",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundTokens.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "PreviewLayout": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
    "pascalName": "PreviewLayout",
    "kebabName": "preview-layout",
    "chunkName": "components/preview-layout",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/meta/PreviewLayout.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "TokensPlayground": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "pascalName": "TokensPlayground",
    "kebabName": "tokens-playground",
    "chunkName": "components/tokens-playground",
    "shortPath": "node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt-themes/elements/components/meta/TokensPlayground.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentDoc": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "pascalName": "ContentDoc",
    "kebabName": "content-doc",
    "chunkName": "components/content-doc",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentList": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "pascalName": "ContentList",
    "kebabName": "content-list",
    "chunkName": "components/content-list",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt/content/dist/runtime/components/ContentList.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentNavigation": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "pascalName": "ContentNavigation",
    "kebabName": "content-navigation",
    "chunkName": "components/content-navigation",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentQuery": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "pascalName": "ContentQuery",
    "kebabName": "content-query",
    "chunkName": "components/content-query",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentRenderer": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "pascalName": "ContentRenderer",
    "kebabName": "content-renderer",
    "chunkName": "components/content-renderer",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentRendererMarkdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "pascalName": "ContentRendererMarkdown",
    "kebabName": "content-renderer-markdown",
    "chunkName": "components/content-renderer-markdown",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ContentSlot": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "pascalName": "ContentSlot",
    "kebabName": "content-slot",
    "chunkName": "components/content-slot",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "DocumentDrivenEmpty": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "pascalName": "DocumentDrivenEmpty",
    "kebabName": "document-driven-empty",
    "chunkName": "components/document-driven-empty",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "Markdown": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "pascalName": "Markdown",
    "kebabName": "markdown",
    "chunkName": "components/markdown",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt/content/dist/runtime/components/Markdown.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProsePre": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "pascalName": "ProsePre",
    "kebabName": "prose-pre",
    "chunkName": "components/prose-pre",
    "shortPath": "node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxt/content/dist/runtime/components/Prose/ProsePre.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  },
  "ProseScript": {
    "mode": "all",
    "global": true,
    "prefetch": false,
    "preload": false,
    "filePath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "pascalName": "ProseScript",
    "kebabName": "prose-script",
    "chunkName": "components/prose-script",
    "shortPath": "node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "export": "default",
    "priority": 0,
    "fullPath": "/Users/danielsmith/Documents/GitHub/docs/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue",
    "meta": {
      "props": [],
      "slots": [],
      "events": [],
      "exposed": []
    }
  }
};

const _pSxclr = eventHandler(async () => {
  const componentsIgnoredPrefix = ["Content", "DocumentDriven", "Markdown", "Prose"];
  const filteredComponents = Object.values(components).filter((c) => c.global && !componentsIgnoredPrefix.some((prefix) => c.pascalName.startsWith(prefix))).map(({ pascalName, filePath, meta }) => {
    return {
      name: pascalName,
      path: filePath,
      meta: {
        props: meta.props,
        slots: meta.slots,
        events: meta.events
      }
    };
  });
  const appConfig = useAppConfig();
  const runtimeConfig = useRuntimeConfig();
  const { app, appConfigSchema, studio, content: { sources, ignores, locales, defaultLocale, highlight, navigation, documentDriven, experimental } } = runtimeConfig;
  const safeSources = {};
  Object.keys(sources).forEach((name) => {
    const { driver, prefix, base, repo, branch, dir } = sources[name] || {};
    safeSources[name] = {
      driver,
      prefix,
      base,
      repo,
      branch,
      dir
    };
  });
  const hasPinceau = runtimeConfig?.pinceau?.studio;
  let tokensConfig;
  let tokensConfigSchema;
  if (hasPinceau) {
    tokensConfig = await $fetch.native(joinURL(app.baseURL, "/__pinceau_tokens_config.json")).then((r) => r.json());
    tokensConfigSchema = await $fetch.native(joinURL(app.baseURL, "/__pinceau_tokens_schema.json")).then((r) => r.json());
  }
  return {
    // Studio version
    version,
    tokens: studio?.publicToken,
    // app.config
    appConfigSchema: appConfigSchema || {},
    appConfig,
    // tokens.config
    tokensConfigSchema,
    tokensConfig,
    // @nuxt/content
    content: { sources: safeSources, ignores, locales, defaultLocale, highlight, navigation, documentDriven, experimental },
    // nuxt-component-meta
    components: filteredComponents
  };
});

const _WiXObi = defineEventHandler((event) => {
  appendHeader(event, "Access-Control-Allow-Origin", "*");
  const componentName = (event.context.params["component?"] || "").replace(/\.json$/, "");
  if (componentName) {
    const meta = components[pascalCase(componentName)];
    if (!meta) {
      throw createError({
        statusMessage: "Components not found!",
        statusCode: 404,
        data: {
          description: "Please make sure you are looking for correct component"
        }
      });
    }
    return meta;
  }
  return components;
});

const useShikiHighlighter = createSingleton((opts) => {
  const { theme, preload, wrapperStyle } = opts || {};
  let promise;
  const getShikiHighlighter = () => {
    if (!promise) {
      promise = getHighlighter({
        themes: [
          theme?.default || theme || "dark-plus"
        ],
        langs: [
          ...preload || [],
          "diff",
          "json",
          "js",
          "ts",
          "css",
          "shell",
          "html",
          "md",
          "yaml",
          "vue",
          "mdc"
        ]
      }).then((highlighter) => {
        const themes = Object.values(typeof theme === "string" ? { default: theme } : theme || {});
        if (themes.length) {
          return Promise.all(themes.map((theme2) => highlighter.loadTheme(theme2))).then(() => highlighter);
        }
        return highlighter;
      });
    }
    return promise;
  };
  const getHighlightedAST = async (code, lang, theme2, opts2) => {
    try {
      const highlighter = await getShikiHighlighter();
      const { highlights = [] } = opts2 || {};
      const themesObject = typeof theme2 === "string" ? { default: theme2 } : theme2 || {};
      const themeNames = Object.values(themesObject);
      if (themeNames.length) {
        await Promise.all(themeNames.map((theme3) => highlighter.loadTheme(theme3)));
      }
      if (lang && !highlighter.getLoadedLanguages().includes(lang)) {
        await highlighter.loadLanguage(lang);
      }
      const root = highlighter.codeToHast(code.trimEnd(), {
        lang,
        themes: themesObject,
        defaultColor: false,
        transforms: {
          line(node, line) {
            node.properties ||= {};
            if (highlights.includes(line)) {
              node.properties.class = (node.properties.class || "") + " highlight";
            }
            node.properties.line = line;
            if (node.children.length === 0) {
              node.children.push({
                type: "element",
                tagName: "span",
                properties: {
                  emptyLinePlaceholder: true
                },
                children: [{ type: "text", value: "" }]
              });
            }
            const last = node.children.at(-1);
            if (last?.type === "element" && last.tagName === "span") {
              const text = last.children.at(-1);
              if (text?.type === "text")
                text.value += "\n";
            }
          }
        }
      });
      const preEl = root.children[0];
      const codeEl = preEl.children[0];
      preEl.properties.style = wrapperStyle ? typeof wrapperStyle === "string" ? wrapperStyle : preEl.properties.style : "";
      const styles = [];
      Object.keys(themesObject).forEach((color) => {
        const colorScheme = color !== "default" ? `.${color}` : "";
        styles.push(
          wrapperStyle ? `${colorScheme} .shiki,` : "",
          `html .${color} .shiki span {`,
          `color: var(--shiki-${color});`,
          `background: var(--shiki-${color}-bg);`,
          `font-style: var(--shiki-${color}-font-style);`,
          `font-weight: var(--shiki-${color}-font-weight);`,
          `text-decoration: var(--shiki-${color}-text-decoration);`,
          "}"
        );
        styles.unshift(
          `html${colorScheme} .shiki span {`,
          `color: var(--shiki-${color});`,
          `background: var(--shiki-${color}-bg);`,
          `font-style: var(--shiki-${color}-font-style);`,
          `font-weight: var(--shiki-${color}-font-weight);`,
          `text-decoration: var(--shiki-${color}-text-decoration);`,
          "}"
        );
      });
      return {
        tree: codeEl.children,
        className: preEl.properties.class,
        inlineStyle: preEl.properties.style,
        style: styles.join("")
      };
    } catch (error) {
      console.warn("[@nuxtjs/mdc] Failed to highlight code block", error.message);
      return {
        tree: [{ type: "text", value: code }],
        className: "",
        inlineStyle: "",
        style: ""
      };
    }
  };
  return {
    getHighlightedAST
  };
});
function createSingleton(fn) {
  let instance;
  return (...args) => {
    if (!instance) {
      instance = fn(...args);
    }
    return instance;
  };
}

const highlighter = /*#__PURE__*/Object.freeze({
  __proto__: null,
  useShikiHighlighter: useShikiHighlighter
});

const _ofOH7y = lazyEventHandler(async () => {
  const { highlight } = useRuntimeConfig().mdc;
  try {
    const wasm = await import('file:///Users/danielsmith/Documents/GitHub/docs/node_modules/shikiji/dist/onig.wasm').then((r) => r.default);
    await loadWasm(async (obj) => WebAssembly.instantiate(wasm, obj));
  } catch {
    await loadWasm({ data: await import('file:///Users/danielsmith/Documents/GitHub/docs/node_modules/shikiji/dist/wasm.mjs').then((r) => r.getWasmInlined()).then((r) => r.data) });
  }
  const shiki = useShikiHighlighter(highlight);
  return eventHandler(async (event) => {
    const { code, lang, theme: themeString, highlights: highlightsString } = getQuery$1(event);
    const theme = JSON.parse(themeString);
    const highlights = highlightsString ? JSON.parse(highlightsString) : void 0;
    return await shiki.getHighlightedAST(code, lang, theme, { highlights });
  });
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    if (opts.legacy) {
      if (result?.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result?.dirConfig) {
        result.result = {
          _path: result.dirConfig?._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return result?._path || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result?.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).find().then(resolveResult);
    };
    return query;
  }
  return query;
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler()(
    postprocess(
      parse(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};
const validateProps = (props) => {
  if (!props) {
    return {};
  }
  return Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
};

function compileHast() {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName?.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(node.properties?.id || slugs.slug(toString$1(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.properties),
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "text") {
      if (node.value !== "\n" || parent?.properties?.emptyLinePlaceholder) {
        return {
          type: "text",
          value: node.value
        };
      }
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => node.type === "comment" && node.value?.trim() === "more");
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    return {
      body,
      excerpt
    };
  };
}

function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/{([^}]*)}/);
  const filenameMatches = lang.match(/\[((\\]|[^\]])*)\]/);
  const meta = lang.replace(languageMatches?.[0] ?? "", "").replace(highlightTokensMatches?.[0] ?? "", "").replace(filenameMatches?.[0] ?? "", "").trim();
  return {
    language: languageMatches?.[0] || void 0,
    highlights: parseHighlightedLines(highlightTokensMatches?.[1] || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: filenameMatches?.[1].replace(/\\]/g, "]") || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}

const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      // @ts-ignore
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language,
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};

function html(state, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || state.options?.allowDangerousHtml) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}

function link$1(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}

function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function inlineCode(state, node) {
  const language = node.attributes?.language || node.attributes?.lang;
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}

function containerComponent(state, node) {
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...node.data?.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}

const handlers$1 = {
  emphasis,
  code,
  link: link$1,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};

const defaults$1 = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-emoji": {
        instance: remarkEmoji
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      // @ts-ignore
      handlers: handlers$1,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};

const defaults = {
  theme: {
    default: "github-light",
    dark: "github-dark"
  },
  async highlighter(code, lang, theme, highlights) {
    if (process.browser && window.sessionStorage.getItem("mdc-shiki-highlighter") === "browser") {
      return Promise.resolve().then(function () { return highlighter; }).then(({ useShikiHighlighter }) => {
        return useShikiHighlighter().getHighlightedAST(code, lang, theme, { highlights });
      });
    }
    try {
      return await $fetch("/api/_mdc/highlight", {
        params: {
          code,
          lang,
          theme: JSON.stringify(theme),
          highlights: JSON.stringify(highlights)
        }
      });
    } catch (e) {
      if (process.browser && e?.response?.status === 404) {
        window.sessionStorage.setItem("mdc-shiki-highlighter", "browser");
        return this.highlighter?.(code, lang, theme, highlights);
      }
    }
    return Promise.resolve({ tree: [{ type: "text", value: code }], className: "", style: "" });
  }
};
function rehypeShiki(opts = {}) {
  const options = { ...defaults, ...opts };
  return async (tree) => {
    const tasks = [];
    const styles = [];
    visit(
      tree,
      (node) => ["pre", "code"].includes(node.tagName) && !!node.properties?.language,
      (node) => {
        const _node = node;
        const task = options.highlighter(
          toString$1(node),
          _node.properties.language,
          options.theme,
          _node.properties.highlights ?? []
        ).then(({ tree: tree2, className, style, inlineStyle }) => {
          _node.properties.className = ((_node.properties.className || "") + " " + className).trim();
          _node.properties.style = ((_node.properties.style || "") + " " + inlineStyle).trim();
          if (_node.children[0]?.tagName === "code") {
            _node.children[0].children = tree2;
          } else {
            _node.children = tree2[0].children || tree2[0];
          }
          if (style)
            styles.push(style);
        });
        tasks.push(task);
      }
    );
    if (tasks.length) {
      await Promise.all(tasks);
      tree.children.push({
        type: "element",
        tagName: "style",
        children: [{ type: "text", value: cleanCSS(styles.join("")) }],
        properties: {}
      });
    }
  };
}
const cleanCSS = (css) => {
  const styles = css.split("}").filter((s) => Boolean(s.trim())).map((s) => s.trim() + "}");
  return Array.from(new Set(styles)).join("");
};

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}

let moduleOptions;
const parseMarkdown = async (md, opts = {}) => {
  if (!moduleOptions) {
    moduleOptions = await import(
      '../build/mdc-imports.mjs'
      /* @vite-ignore */
    ).catch(() => ({}));
  }
  const options = defu$1(opts, {
    remark: { plugins: moduleOptions?.remarkPlugins },
    rehype: { plugins: moduleOptions?.rehypePlugins },
    highlight: moduleOptions?.highlight
  }, defaults$1);
  const { content, data: frontmatter } = await parseFrontMatter(md);
  const processor = unified();
  processor.use(remarkParse);
  await useProcessorPlugins(processor, options.remark?.plugins);
  processor.use(remark2rehype, options.rehype?.options);
  if (options.highlight) {
    processor.use(rehypeShiki, options.highlight);
  }
  await useProcessorPlugins(processor, options.rehype?.plugins);
  processor.use(compileHast);
  const processedFile = await processor.process({ value: content, data: frontmatter });
  const result = processedFile.result;
  const data = Object.assign(
    contentHeading(result.body),
    frontmatter,
    processedFile?.data || {}
  );
  let toc;
  if (data.toc !== false) {
    const tocOption = defu$1(data.toc || {}, options.toc);
    toc = generateToc(result.body, tocOption);
  }
  return {
    data,
    body: result.body,
    excerpt: result.excerpt,
    toc
  };
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (id) => {
  const [_source, ...parts] = id.split(":");
  const [, filename, _extension] = parts[parts.length - 1]?.match(/(.*)\.([^.]+)$/) || [];
  if (filename) {
    parts[parts.length - 1] = filename;
  }
  const _path = (parts || []).join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en", respectPathCase = false } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"), { respectPathCase });
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: content._draft ?? isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true, respectPathCase = false } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: !respectPathCase })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parseMarkdown(content, {
      highlight: options.highlight,
      remark: {
        plugins: config.remarkPlugins
      },
      rehype: {
        options: {
          handlers: {
            link
          }
        },
        plugins: config.rehypePlugins
      },
      toc: config.toc
    });
    return {
      ...parsed.data,
      excerpt: parsed.excerpt,
      body: {
        ...parsed.body,
        toc: parsed.toc
      },
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        options: plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function normalizeLink(link2) {
  const match = link2.match(/#.+$/);
  const hash = match ? match[0] : "";
  if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash;
  } else {
    return link2;
  }
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: (_id, content) => {
    const { data } = parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file:///Users/danielsmith/Documents/GitHub/docs/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr$1(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores) {
  const rxAll = ["/\\.", "/-", ...ignores.filter((p) => p)].map((p) => new RegExp(p));
  return function isIgnored(key) {
    const path = "/" + key.replace(/:/g, "/");
    return rxAll.some((rx) => rx.test(path));
  };
}

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or math every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const matchingPipelines = [
    // Conditions
    (state, params) => {
      const filtered = state.result.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery)));
      return {
        ...state,
        result: filtered,
        total: filtered.length
      };
    },
    // Sort data
    (state, params) => ensureArray(params.sort).forEach((options) => sortList(state.result, options)),
    function fetchSurround(state, params, db) {
      if (params.surround) {
        let _surround = surround(state.result?.length === 1 ? db : state.result, params.surround);
        _surround = apply(withoutKeys(params.without))(_surround);
        _surround = apply(withKeys(params.only))(_surround);
        state.surround = _surround;
      }
      return state;
    }
  ];
  const transformingPiples = [
    // Skip first items
    (state, params) => {
      if (params.skip) {
        return {
          ...state,
          result: state.result.slice(params.skip),
          skip: params.skip
        };
      }
    },
    // Pick first items
    (state, params) => {
      if (params.limit) {
        return {
          ...state,
          result: state.result.slice(0, params.limit),
          limit: params.limit
        };
      }
    },
    function fetchDirConfig(state, params, db) {
      if (params.dirConfig) {
        const path = state.result[0]?._path || params.where?.find((w) => w._path)?._path;
        if (typeof path === "string") {
          const dirConfig = db.find((item) => item._path === joinURL(path, "_dir"));
          if (dirConfig) {
            state.dirConfig = { _path: dirConfig._path, ...withoutKeys(["_"])(dirConfig) };
          }
        }
      }
      return state;
    },
    // Remove unwanted fields
    (state, params) => ({
      ...state,
      result: apply(withoutKeys(params.without))(state.result)
    }),
    // Select only wanted fields
    (state, params) => ({
      ...state,
      result: apply(withKeys(params.only))(state.result)
    })
  ];
  return async (query) => {
    const db = await getContentsList();
    const params = query.params();
    const result1 = {
      result: db,
      limit: 0,
      skip: 0,
      total: db.length
    };
    const matchedData = matchingPipelines.reduce(($data, pipe) => pipe($data, params, db) || $data, result1);
    if (params.count) {
      return {
        result: matchedData.result.length
      };
    }
    const result = transformingPiples.reduce(($data, pipe) => pipe($data, params, db) || $data, matchedData);
    if (params.first) {
      return {
        ...omit(["skip", "limit", "total"])(result),
        result: result.result[0]
      };
    }
    return result;
  };
}

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && !params.surround && !params.dirConfig && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const isIgnored = makeIgnored(contentConfig.ignores);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
function* chunksFromArray(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const keyChunks = [...chunksFromArray(keys, 10)];
  const contents = [];
  for (const chunk of keyChunks) {
    const result = await Promise.all(chunk.map((key) => getContent(event, key)));
    contents.push(...result);
  }
  return contents;
};
const pendingPromises = {};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  const meta = await sourceStorage.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash$1 = hash({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  if (!pendingPromises[id + hash$1]) {
    pendingPromises[id + hash$1] = new Promise(async (resolve) => {
      const body = await sourceStorage.getItem(id);
      if (body === null) {
        return resolve({ _id: contentId, body: null });
      }
      const parsed = await parseContent(contentId, body);
      await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
      });
      resolve(parsed);
      delete pendingPromises[id + hash$1];
    });
  }
  return pendingPromises[id + hash$1];
};
const parseContent = async (id, content, opts = {}) => {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: {
        ...contentConfig.markdown,
        highlight: contentConfig.highlight
      },
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales,
        respectPathCase: contentConfig.respectPathCase
      }
    }
  );
  const file = { _id: id, body: typeof content === "string" ? content.replace(/\r\n|\r/g, "\n") : content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
};
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, query, ...pathParts) {
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  const queryBuilder = advanceQuery ? createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: false }) : createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: true });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (contentConfig.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: contentConfig.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery$1(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid].where && !Array.isArray(memory[qid].where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _JWozqU = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  if (query.first) {
    let contentQuery = serverQueryContent(event, query);
    if (!advanceQuery) {
      contentQuery = contentQuery.withDirConfig();
    }
    const content = await contentQuery.findOne();
    const _result = advanceQuery ? content?.result : content;
    const missing = !_result && !content?.dirConfig?.navigation?.redirect && !content?._dir?.navigation?.redirect;
    if (missing) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  if (query.count) {
    return serverQueryContent(event, query).count();
  }
  return serverQueryContent(event, query).find();
});

const _IfNHL5 = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents,
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _PEJvDY = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = (dirConfigs?.result || dirConfigs).reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents?.result || contents, configs);
});

const _lazy_MlMhBJ = () => import('../search.mjs');
const _lazy_HNCDZv = () => import('../opensearch.xml.mjs');
const _lazy_OJoGF8 = () => import('../renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/search', handler: _lazy_MlMhBJ, lazy: true, middleware: false, method: undefined },
  { route: '/opensearch.xml', handler: _lazy_HNCDZv, lazy: true, middleware: false, method: undefined },
  { route: '/__studio.json', handler: _pSxclr, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta', handler: _WiXObi, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta.json', handler: _WiXObi, lazy: false, middleware: false, method: "get" },
  { route: '/api/component-meta/:component?', handler: _WiXObi, lazy: false, middleware: false, method: "get" },
  { route: '/api/_mdc/highlight', handler: _ofOH7y, lazy: false, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _JWozqU, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _JWozqU, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _JWozqU, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1698695069955.json', handler: _IfNHL5, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _PEJvDY, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _PEJvDY, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _PEJvDY, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_OJoGF8, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { useNitroApp as a, useRuntimeConfig as b, useStorage as c, getRouteRules as g, localFetch as l, serverQueryContent as s, useAppConfig as u };
//# sourceMappingURL=nitro-prerenderer.mjs.map
