import { defineComponent, h, useSSRContext } from "vue";
import __nuxt_component_0 from "./TabsHeader-6f158920.js";
import { _ as _export_sfc } from "../server.mjs";
import "vue/server-renderer";
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
const isTag = (slot, tag) => {
  return slot.type && slot.type.tag && slot.type.tag === tag;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  data() {
    return {
      activeTabIndex: 0,
      /**
       * A simple number that increases on every changes
       */
      counter: 0
    };
  },
  render() {
    var _a, _b;
    const slots = ((_b = (_a = this.$slots) == null ? void 0 : _a.default) == null ? void 0 : _b.call(_a)) || [];
    const tabs = slots.map((slot, index) => {
      var _a2, _b2, _c;
      return {
        label: ((_a2 = slot == null ? void 0 : slot.props) == null ? void 0 : _a2.filename) || ((_b2 = slot == null ? void 0 : slot.props) == null ? void 0 : _b2.label) || `${index}`,
        active: ((_c = slot == null ? void 0 : slot.props) == null ? void 0 : _c.active) || false,
        component: slot
      };
    });
    return h(
      "div",
      {
        class: {
          "code-group": true,
          "first-tab": this.activeTabIndex === 0
        }
      },
      [
        h(__nuxt_component_0, {
          ref: "tabs-header",
          activeTabIndex: this.activeTabIndex,
          tabs,
          "onUpdate:activeTabIndex": ($event) => this.activeTabIndex = $event
        }),
        h(
          "div",
          {
            class: "code-group-content",
            text: this.activeTabIndex
          },
          // Map slots to content children
          slots.map(
            (slot, index) => {
              var _a2, _b2;
              return h(
                "div",
                {
                  // Current slot is displayed, others are hidden
                  style: {
                    display: index === this.activeTabIndex ? "block" : "none"
                  },
                  class: {
                    "": !isTag(slot, "code") && !isTag(slot, "pre")
                  }
                },
                // Display direct children if not a ```code``` block
                [
                  isTag(slot, "code") || isTag(slot, "pre") ? slot : h(
                    "div",
                    {
                      class: {
                        "preview-canvas": true
                      }
                    },
                    [((_b2 = (_a2 = slot.children) == null ? void 0 : _a2.default) == null ? void 0 : _b2.call(_a2)) || slot.children]
                  )
                ]
              );
            }
          )
        )
      ]
    );
  }
});
const CodeGroup_vue_vue_type_style_index_0_scoped_a562a098_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CodeGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a562a098"]]);
export {
  CodeGroup as default
};
//# sourceMappingURL=CodeGroup-d64eabf7.js.map
