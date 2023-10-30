import __nuxt_component_0 from "./DocsTocLinks-9dbdb54e.js";
import { h as useContent, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "ohash";
import "cookie-es";
import "nanoid";
import "scule";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "@vueuse/integrations/useFuse";
import "@vueuse/integrations/useFocusTrap";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsToc",
  __ssrInlineRender: true,
  emits: ["move"],
  setup(__props, { emit: __emit }) {
    const { toc } = useContent();
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_DocsTocLinks = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "docs-toc" }, _attrs))} data-v-ebd2b6b2>`);
      if ((_b = (_a = unref(toc)) == null ? void 0 : _a.links) == null ? void 0 : _b.length) {
        _push(`<!--[--><div class="docs-toc-title" data-v-ebd2b6b2><span data-v-ebd2b6b2>Table of Contents</span></div>`);
        _push(ssrRenderComponent(_component_DocsTocLinks, {
          links: unref(toc).links,
          onMove: ($event) => emit("move")
        }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const DocsToc_vue_vue_type_style_index_0_scoped_ebd2b6b2_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsToc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ebd2b6b2"]]);
export {
  __nuxt_component_7 as default
};
//# sourceMappingURL=DocsToc-132da242.js.map
