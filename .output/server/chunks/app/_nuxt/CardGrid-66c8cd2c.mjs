import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot as ssrRenderSlot$1, ssrInterpolate } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-5d5c6395.mjs';
import { _ as _export_sfc } from '../server.mjs';
import './MDCSlot-b6f8d3a7.mjs';
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
  __name: "CardGrid",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Features"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "card-grid" }, _attrs))} data-v-f9e22db6>`);
      ssrRenderSlot(_ctx.$slots, "root", {}, null, _push, _parent);
      _push(`<h2 class="title" data-v-f9e22db6>`);
      ssrRenderSlot(_ctx.$slots, "title", { unwrap: "p" }, () => {
        _push(`${ssrInterpolate(__props.title)}`);
      }, _push, _parent);
      _push(`</h2><div class="layout" data-v-f9e22db6>`);
      ssrRenderSlot$1(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/landing/CardGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardGrid = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9e22db6"]]);

export { CardGrid as default };
//# sourceMappingURL=CardGrid-66c8cd2c.mjs.map
