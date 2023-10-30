import { defineComponent, computed, useSlots, useSSRContext } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/vue/index.mjs';
import { joinURL } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/ufo/dist/index.mjs';
import { r as useAppConfig } from '../server.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/hookable/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unctx/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/destr/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/defu/dist/defu.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/klona/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unhead/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/h3/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/ohash/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/nanoid/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/scule/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@vueuse/integrations/useFuse.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@vueuse/integrations/useFocusTrap.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/pathe/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/shikiji/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unified/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark-util-character/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/slugify/slugify.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-parse/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-rehype/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/hast-util-to-string/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/github-slugger/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/detab/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-emoji/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-gfm/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/rehype-external-links/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/rehype-raw/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unist-util-visit/index.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    /**
     * GitHub base URL.
     */
    baseUrl: {
      type: String,
      default: () => {
        var _a, _b, _c;
        return ((_c = (_b = (_a = useAppConfig()) == null ? void 0 : _a.docus) == null ? void 0 : _b.github) == null ? void 0 : _c.baseUrl) || "https://github.com";
      },
      required: false
    },
    /**
     * Repository owner.
     */
    owner: {
      type: String,
      default: () => {
        var _a, _b, _c;
        return (_c = (_b = (_a = useAppConfig()) == null ? void 0 : _a.docus) == null ? void 0 : _b.github) == null ? void 0 : _c.owner;
      },
      required: false
    },
    /**
     * Repository name.
     */
    repo: {
      type: String,
      default: () => {
        var _a, _b, _c;
        return (_c = (_b = (_a = useAppConfig()) == null ? void 0 : _a.docus) == null ? void 0 : _b.github) == null ? void 0 : _c.repo;
      },
      required: false
    },
    /**
     * The branch to use for the edit link.
     */
    branch: {
      type: String,
      default: () => {
        var _a, _b, _c;
        return (_c = (_b = (_a = useAppConfig()) == null ? void 0 : _a.docus) == null ? void 0 : _b.github) == null ? void 0 : _c.branch;
      },
      required: false
    },
    /**
     * A base directory to append to the source path.
     *
     * Won't be used if `page` is set.
     */
    dir: {
      type: String,
      default: () => {
        var _a, _b, _c;
        return (_c = (_b = (_a = useAppConfig()) == null ? void 0 : _a.docus) == null ? void 0 : _b.github) == null ? void 0 : _c.dir;
      },
      required: false
    },
    /**
     * Source file path.
     *
     * Won't be used if `page` is set.
     */
    source: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * Use page from @nuxt/content.
     */
    page: {
      type: Object,
      required: false,
      default: void 0
    },
    /**
     * Content directory (to be used with `page`)
     */
    contentDir: {
      type: String,
      required: false,
      default: () => {
        var _a, _b, _c;
        return ((_c = (_b = (_a = useAppConfig()) == null ? void 0 : _a.docus) == null ? void 0 : _b.github) == null ? void 0 : _c.dir) || "content";
      }
    },
    /**
     * Send to an edit page or not.
     */
    edit: {
      type: Boolean,
      required: false,
      default: () => {
        var _a, _b, _c;
        return (_c = (_b = (_a = useAppConfig()) == null ? void 0 : _a.docus) == null ? void 0 : _b.github) == null ? void 0 : _c.edit;
      }
    }
  },
  setup(props) {
    if (!props.owner || !props.repo || !props.branch) {
      throw new Error("If you want to use `GithubLink` component, you must specify: `owner`, `repo` and `branch`.");
    }
    const source = computed(() => {
      var _a, _b;
      let { baseUrl, repo, owner, branch, contentDir } = props;
      let prefix = "";
      if ((_b = (_a = useAppConfig()) == null ? void 0 : _a.public) == null ? void 0 : _b.content) {
        let source2;
        const { sources } = useAppConfig().public.content;
        for (const key in sources || []) {
          if (props.page._id.startsWith(key)) {
            source2 = sources[key];
            break;
          }
        }
        if ((source2 == null ? void 0 : source2.driver) === "github") {
          repo = source2.repo || props.repo || "";
          owner = source2.owner || props.owner || "";
          branch = source2.branch || props.branch || "main";
          contentDir = source2.dir || props.contentDir || "";
          prefix = source2.prefix || "";
        }
      }
      return { baseUrl, repo, owner, branch, contentDir, prefix };
    });
    const base = computed(() => joinURL(`${source.value.baseUrl}/${source.value.owner}/${source.value.repo}`));
    const path = computed(() => {
      var _a;
      const dirParts = [];
      if ((_a = props == null ? void 0 : props.page) == null ? void 0 : _a._path) {
        if (source.value.contentDir) {
          dirParts.push(source.value.contentDir);
        }
        dirParts.push(props.page._file.substring(source.value.prefix.length));
        return dirParts;
      }
      if (props.dir) {
        dirParts.push(props.dir);
      }
      if (props.source) {
        dirParts.push(props.source);
      }
      return dirParts;
    });
    const url = computed(() => {
      var _a;
      const parts = [base.value];
      if (props.edit) {
        parts.push("edit");
      } else {
        parts.push("tree");
      }
      parts.push(((_a = source == null ? void 0 : source.value) == null ? void 0 : _a.branch) || "", ...path.value);
      return parts.filter(Boolean).join("/");
    });
    return {
      url
    };
  },
  render(ctx) {
    var _a;
    const { url } = ctx;
    const slots = useSlots();
    return (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots, { url });
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/EditOnLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=EditOnLink-ed7c39ad.mjs.map
