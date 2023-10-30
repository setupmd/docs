import { x as useClipboard, o as __nuxt_component_0$4 } from '../server.mjs';
import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "CopyButton",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    useClipboard();
    const state = ref("init");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$4;
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "copy rounded-lg bg-gray-800 px-2 py-2 font-mono text-xs font-semibold leading-none text-gray-400 focus:outline-none dark:bg-black" }, _attrs))}>`);
      if (unref(state) === "copied") {
        _push(ssrRenderComponent(_component_Icon, {
          name: "fa-check",
          class: "h-4 w-4"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: "fa-copy",
          class: "h-4 w-4"
        }, null, _parent));
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/CopyButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CopyButton-51a18d2c.mjs.map
