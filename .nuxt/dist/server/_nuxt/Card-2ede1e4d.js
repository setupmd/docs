import { o as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import "./MDCSlot-b6f8d3a7.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { s as ssrRenderSlot$1 } from "./ssrSlot-5d5c6395.js";
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
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-34524c46>`);
      if (__props.icon) {
        _push(ssrRenderComponent(_component_Icon, { name: __props.icon }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<div data-v-34524c46><h3 class="title" data-v-34524c46>`);
      ssrRenderSlot$1(_ctx.$slots, "title", { unwrap: "p" }, () => {
        _push(` Card title `);
      }, _push, _parent);
      _push(`</h3><p class="description" data-v-34524c46>`);
      ssrRenderSlot$1(_ctx.$slots, "description", { unwrap: "p" }, () => {
        _push(` Card description `);
      }, _push, _parent);
      _push(`</p></div></div>`);
    };
  }
});
const Card_vue_vue_type_style_index_0_scoped_34524c46_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/landing/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-34524c46"]]);
export {
  Card as default
};
//# sourceMappingURL=Card-2ede1e4d.js.map
