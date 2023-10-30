import { o as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { u as unwrap, f as flatUnwrap, _ as __nuxt_component_0$1 } from "./MDCSlot-b6f8d3a7.js";
import { defineComponent, useSlots, computed, h, useSSRContext } from "vue";
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
import "vue/server-renderer";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "@vueuse/integrations/useFuse";
import "@vueuse/integrations/useFocusTrap";
const useUnwrap = () => ({
  unwrap,
  flatUnwrap
});
const iconTypeMap = {
  primary: "heroicons-outline:check",
  info: "heroicons-outline:information-circle",
  success: "heroicons-outline:check-circle",
  warning: "heroicons-outline:exclamation",
  danger: "heroicons-outline:exclamation-circle"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    /**
     * Used to override the default <code>type</code> icon, check out the
     *  <a href="https://github.com/nuxt/content/tree/dev/packages/theme-docs/src/components/global/icons">icons available</a>
     */
    icon: {
      type: String,
      default: null
    },
    /**
     * Type of list
     */
    type: {
      type: String,
      default: "primary",
      validator: (value) => ["primary", "info", "success", "warning", "danger"].includes(value)
    }
  },
  setup(props) {
    const slots = useSlots();
    const { flatUnwrap: flatUnwrap2, unwrap: unwrap2 } = useUnwrap();
    const iconName = computed(() => props.icon || iconTypeMap[props.type]);
    return () => {
      const items = flatUnwrap2((slots.default && slots.default()) ?? [], ["ul"]).map((li) => unwrap2(li, ["li"]));
      return h(
        "ul",
        items.map(
          (item) => h("li", [
            h("span", { class: `list-icon ${props.type}` }, h(__nuxt_component_0, { name: iconName.value, class: "icon" })),
            h("span", h(__nuxt_component_0$1, { use: () => item }))
          ])
        )
      );
    };
  }
});
const List_vue_vue_type_style_index_0_scoped_e3286cf5_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const List = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e3286cf5"]]);
export {
  List as default
};
//# sourceMappingURL=List-a30d7012.js.map
