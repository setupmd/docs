import __nuxt_component_0 from "./DocsPageLayout-f4e17515.js";
import { withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./DocsAside-fd029efe.js";
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
import "./Alert-e89bb36c.js";
import "./MDCSlot-b6f8d3a7.js";
import "./ssrSlot-5d5c6395.js";
import "./ProseCodeInline-3a7a9d5f.js";
import "./DocsPageBottom-154201e5.js";
import "./EditOnLink-ed7c39ad.js";
import "./ProseA-d15a6354.js";
import "./DocsPrevNext-f4da19df.js";
import "./DocsToc-132da242.js";
import "./DocsTocLinks-9dbdb54e.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_DocsPageLayout = __nuxt_component_0;
  _push(ssrRenderComponent(_component_DocsPageLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-dedac01e.js.map
