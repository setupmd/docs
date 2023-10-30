import { useSSRContext, defineComponent, h } from 'vue';
import __nuxt_component_0 from './TabsHeader-6f158920.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shikiji';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'nanoid';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import '@vueuse/integrations/useFuse';
import '@vueuse/integrations/useFocusTrap';

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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/CodeGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CodeGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a562a098"]]);

export { CodeGroup as default };
//# sourceMappingURL=CodeGroup-d64eabf7.mjs.map
