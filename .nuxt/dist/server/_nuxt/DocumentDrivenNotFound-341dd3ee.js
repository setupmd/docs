import __nuxt_component_1 from "./ButtonLink-8e56d417.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./MDCSlot-b6f8d3a7.js";
import "./ssrSlot-5d5c6395.js";
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
const DocumentDrivenNotFound_vue_vue_type_style_index_0_scoped_b556344b_transformed_true_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ButtonLink = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "document-driven-not-found not-prose" }, _attrs))} data-v-b556344b><main data-v-b556344b><p data-v-b556344b> 404 </p><div class="content" data-v-b556344b><div class="text-section" data-v-b556344b><h1 data-v-b556344b> Not Found </h1><p data-v-b556344b> This is not the page you&#39;re looking for. </p></div><div class="button-section" data-v-b556344b>`);
  _push(ssrRenderComponent(_component_ButtonLink, {
    href: "/",
    size: "large",
    variant: "primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Go back home `);
      } else {
        return [
          createTextVNode(" Go back home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/DocumentDrivenNotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b556344b"]]);
export {
  __nuxt_component_3 as default
};
//# sourceMappingURL=DocumentDrivenNotFound-341dd3ee.js.map
