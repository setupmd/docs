import __nuxt_component_0 from "./TabsHeader-6f158920.js";
import __nuxt_component_1 from "./ComponentPlaygroundProps-0ceb6590.js";
import _sfc_main$1 from "./ComponentPlaygroundSlots-0dbd767a.js";
import _sfc_main$2 from "./ComponentPlaygroundTokens-548a0a2d.js";
import { defineComponent, ref, mergeProps, unref, isRef, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { B as useVModel, _ as _export_sfc } from "../server.mjs";
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
import "./ProseH4-148db78a.js";
import "./ProseCodeInline-3a7a9d5f.js";
import "./Badge-30890d1c.js";
import "./MDCSlot-b6f8d3a7.js";
import "./ssrSlot-5d5c6395.js";
import "./ProseP-9ba527ea.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComponentPlaygroundData",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      required: false,
      default: () => ({})
    },
    componentData: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const formData = useVModel(props, "modelValue", emits);
    const activeTabIndex = ref(0);
    const tabs = [
      {
        label: "Props"
      },
      {
        label: "Slots"
      },
      {
        label: "Design Tokens"
      }
    ];
    const updateTab = (i) => activeTabIndex.value = i;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TabsHeader = __nuxt_component_0;
      const _component_ComponentPlaygroundProps = __nuxt_component_1;
      const _component_ComponentPlaygroundSlots = _sfc_main$1;
      const _component_ComponentPlaygroundTokens = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "component-playground-data" }, _attrs))} data-v-ff75821c>`);
      _push(ssrRenderComponent(_component_TabsHeader, {
        "active-tab-index": unref(activeTabIndex),
        tabs,
        "onUpdate:activeTabIndex": updateTab
      }, null, _parent));
      if (unref(activeTabIndex) === 0) {
        _push(ssrRenderComponent(_component_ComponentPlaygroundProps, {
          modelValue: unref(formData),
          "onUpdate:modelValue": ($event) => isRef(formData) ? formData.value = $event : null,
          "component-data": __props.componentData
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTabIndex) === 1) {
        _push(ssrRenderComponent(_component_ComponentPlaygroundSlots, { "component-data": __props.componentData }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(activeTabIndex) === 2) {
        _push(ssrRenderComponent(_component_ComponentPlaygroundTokens, { "component-data": __props.componentData }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const ComponentPlaygroundData_vue_vue_type_style_index_0_scoped_ff75821c_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ComponentPlaygroundData = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ff75821c"]]);
export {
  ComponentPlaygroundData as default
};
//# sourceMappingURL=ComponentPlaygroundData-c8c06afe.js.map
