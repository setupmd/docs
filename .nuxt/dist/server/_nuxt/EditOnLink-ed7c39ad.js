import { defineComponent, computed, useSlots, useSSRContext } from "vue";
import "hookable";
import { joinURL } from "ufo";
import "destr";
import "devalue";
import "defu";
import { r as useAppConfig } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ohash";
import "cookie-es";
import "nanoid";
import "scule";
import "vue/server-renderer";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "@vueuse/integrations/useFuse";
import "@vueuse/integrations/useFocusTrap";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=EditOnLink-ed7c39ad.js.map
