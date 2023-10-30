import "./MDCSlot-b6f8d3a7.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { s as ssrRenderSlot } from "./ssrSlot-5d5c6395.js";
import { _ as _export_sfc } from "../server.mjs";
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
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    /**
     * @values info, success, warning, danger
     */
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["info", "success", "warning", "danger", "primary"].includes(value);
      }
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["alert", [__props.type]]
      }, _attrs))} data-v-03ea57c1><div class="alert-content" data-v-03ea57c1>`);
      ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p" }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const Alert_vue_vue_type_style_index_0_scoped_03ea57c1_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Alert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03ea57c1"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=Alert-e89bb36c.js.map
