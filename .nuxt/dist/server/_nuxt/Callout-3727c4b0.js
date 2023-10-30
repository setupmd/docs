import "./MDCSlot-b6f8d3a7.js";
import { o as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { s as ssrRenderSlot } from "./ssrSlot-5d5c6395.js";
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
  __name: "Callout",
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
    },
    modelValue: {
      required: false,
      default: () => ref(false)
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const isOpen = ref(props.modelValue);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["callout", [__props.type]]
      }, _attrs))} data-v-e294706d><span class="preview" data-v-e294706d><span class="summary" data-v-e294706d>`);
      ssrRenderSlot(_ctx.$slots, "summary", {}, null, _push, _parent);
      _push(`</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons-outline:chevron-right",
        class: ["icon", [unref(isOpen) && "rotate"]]
      }, null, _parent));
      _push(`</span><div style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}" class="content" data-v-e294706d>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const Callout_vue_vue_type_style_index_0_scoped_e294706d_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Callout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Callout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e294706d"]]);
export {
  Callout as default
};
//# sourceMappingURL=Callout-3727c4b0.js.map
