import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
  __name: "CodeBlock",
  __ssrInlineRender: true,
  props: {
    /**
     * Label to display for the tab
     */
    label: {
      type: String,
      required: true
    },
    /**
     * Select which tab should be active
     * TODO: seems like it's not used 
     */
    active: {
      type: Boolean,
      default: false
    },
    /**
     * Preview block are bordered and have small padding.
     * TODO: seems like it's not used
     */
    preview: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["code-block", {
          active: __props.active,
          "rounded-lg p-4": __props.preview
        }]
      }, _attrs))} data-v-22d00392>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/CodeBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CodeBlock = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-22d00392"]]);

export { CodeBlock as default };
//# sourceMappingURL=CodeBlock-dbd44ab0.mjs.map
