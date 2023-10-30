import { p as useDocus, u as useHead, t as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, unref, withCtx, createVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
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
  __name: "page",
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useDocus();
    useHead({
      link: {
        rel: "search",
        type: "application/opensearchdescription+xml",
        href: "opensearch.xml"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_Container = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-layout" }, _attrs))} data-v-393382c9>`);
      _push(ssrRenderComponent(_component_Container, {
        fluid: (_b = (_a = unref(config)) == null ? void 0 : _a.main) == null ? void 0 : _b.fluid,
        padded: (_d = (_c = unref(config)) == null ? void 0 : _c.main) == null ? void 0 : _d.padded
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article data-v-393382c9${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", null, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const page_vue_vue_type_style_index_0_scoped_393382c9_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/layouts/page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-393382c9"]]);
export {
  page as default
};
//# sourceMappingURL=page-d529b072.js.map
