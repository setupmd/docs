import { useSSRContext, defineComponent, ref, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
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
  __name: "TabsHeader",
  __ssrInlineRender: true,
  props: {
    tabs: {
      type: Array,
      required: true
    },
    activeTabIndex: {
      type: Number,
      required: true
    }
  },
  emits: ["update:activeTabIndex"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const tabsRef = ref();
    const highlightUnderline = ref();
    const updateHighlightUnderlinePosition = (activeTab) => {
      if (!activeTab) {
        return;
      }
      highlightUnderline.value.style.insetInlineStart = `${activeTab.offsetLeft}px`;
      highlightUnderline.value.style.width = `${activeTab.clientWidth}px`;
    };
    watch(
      tabsRef,
      (newVal) => {
        if (!newVal) {
          return;
        }
        setTimeout(() => {
          updateHighlightUnderlinePosition(tabsRef.value.children[props.activeTabIndex]);
        }, 50);
      },
      {
        immediate: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs-header" }, _attrs))} data-v-9b59cc28>`);
      if (__props.tabs) {
        _push(`<div class="tabs" data-v-9b59cc28><!--[-->`);
        ssrRenderList(__props.tabs, ({ label }, i) => {
          _push(`<button class="${ssrRenderClass([__props.activeTabIndex === i ? "active" : "not-active"])}" data-v-9b59cc28>${ssrInterpolate(label)}</button>`);
        });
        _push(`<!--]--><span class="highlight-underline" data-v-9b59cc28><span class="tab" data-v-9b59cc28></span></span></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/TabsHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9b59cc28"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=TabsHeader-6f158920.mjs.map
