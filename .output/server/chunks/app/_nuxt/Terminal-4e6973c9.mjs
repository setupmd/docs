import { useSSRContext, defineComponent, ref, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, x as useClipboard } from '../server.mjs';
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
  __name: "Terminal",
  __ssrInlineRender: true,
  props: {
    content: {
      type: [Array, String],
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    useClipboard();
    const state = ref("init");
    const lines = computed(() => {
      if (typeof props.content === "string") {
        return [props.content];
      }
      return props.content;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "terminal" }, _attrs))} data-v-63eb7158>`);
      if (unref(state) === "copied") {
        _push(`<div class="copied" data-v-63eb7158><div class="scrim" data-v-63eb7158></div><div class="content" data-v-63eb7158> Copied! </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="header" data-v-63eb7158><div class="controls" data-v-63eb7158><div data-v-63eb7158></div><div data-v-63eb7158></div><div data-v-63eb7158></div></div><div class="title" data-v-63eb7158> Bash </div></div><div class="window" data-v-63eb7158><!--[-->`);
      ssrRenderList(unref(lines), (line) => {
        _push(`<span class="line" data-v-63eb7158><span class="sign" data-v-63eb7158>$</span><span class="content" data-v-63eb7158>${ssrInterpolate(line)}</span></span>`);
      });
      _push(`<!--]--></div>`);
      if (unref(state) !== "copied") {
        _push(`<div class="prompt" data-v-63eb7158> Click to copy </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Terminal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63eb7158"]]);

export { __nuxt_component_2 as default };
//# sourceMappingURL=Terminal-4e6973c9.mjs.map
