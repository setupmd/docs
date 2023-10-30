import __nuxt_component_0 from './TabsHeader-6f158920.mjs';
import { _ as _export_sfc, A as useColorMode } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shikiji';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'nanoid';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vueuse/integrations/useFuse';
import '@vueuse/integrations/useFocusTrap';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Sandbox",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    repo: {
      type: String,
      default: ""
    },
    branch: {
      type: String,
      default: ""
    },
    dir: {
      type: String,
      default: ""
    },
    file: {
      type: String,
      default: "app.vue"
    }
  },
  setup(__props) {
    const props = __props;
    const colorMode = useColorMode();
    const providers = {
      CodeSandBox: () => `https://codesandbox.io/embed/github/${props.repo}/tree/${props.branch}/${props.dir}?hidenavigation=1&theme=${colorMode.value}`,
      StackBlitz: () => `https://stackblitz.com/github/${props.repo}/tree/${props.branch}/${props.dir}?embed=1&file=${props.file}&theme=${colorMode.value}`
    };
    const providersTabs = Object.keys(providers).map((p) => ({ label: p }));
    const activeTabIndex = ref(-1);
    const tabs = ref();
    const url = ref("");
    const provider = ref("");
    const changeProvider = (value) => {
      provider.value = value;
      url.value = props.src || providers[provider.value]();
      localStorage.setItem("docus_sandbox", value);
    };
    const updateTab = (i) => {
      activeTabIndex.value = i;
      changeProvider(providersTabs[i].label);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabsHeader = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sandbox" }, _attrs))} data-v-fecef2a9>`);
      if (!__props.src) {
        _push(ssrRenderComponent(_component_TabsHeader, {
          ref_key: "tabs",
          ref: tabs,
          "active-tab-index": unref(activeTabIndex),
          tabs: unref(providersTabs),
          "onUpdate:activeTabIndex": updateTab
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(url)) {
        _push(`<iframe${ssrRenderAttr("src", unref(url))} title="Sandbox editor" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin" data-v-fecef2a9></iframe>`);
      } else {
        _push(`<span data-v-fecef2a9>Loading Sandbox...</span>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Sandbox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sandbox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fecef2a9"]]);

export { Sandbox as default };
//# sourceMappingURL=Sandbox-987e5cc0.mjs.map
