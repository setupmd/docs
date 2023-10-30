import "./MDCSlot-b6f8d3a7.js";
import __nuxt_component_1 from "./ButtonLink-8e56d417.js";
import __nuxt_component_2 from "./Terminal-4e6973c9.js";
import __nuxt_component_3 from "./VideoPlayer-1ec85efa.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot as ssrRenderSlot$1 } from "vue/server-renderer";
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
import "./NuxtImg-4d4c6866.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BlockHero",
  __ssrInlineRender: true,
  props: {
    cta: {
      type: Array,
      required: false,
      default: () => []
    },
    secondary: {
      type: Array,
      required: false,
      default: () => []
    },
    video: {
      type: String,
      required: false,
      default: ""
    },
    snippet: {
      type: [Array, String],
      required: false,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ButtonLink = __nuxt_component_1;
      const _component_Terminal = __nuxt_component_2;
      const _component_VideoPlayer = __nuxt_component_3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "block-hero" }, _attrs))} data-v-537c80a6><div class="layout" data-v-537c80a6><div class="content" data-v-537c80a6>`);
      if (_ctx.$slots.announce) {
        _push(`<p class="announce" data-v-537c80a6>`);
        ssrRenderSlot(_ctx.$slots, "announce", { unwrap: "p" }, null, _push, _parent);
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="title" data-v-537c80a6>`);
      ssrRenderSlot(_ctx.$slots, "title", { unwrap: "p" }, () => {
        _push(` Hero Title `);
      }, _push, _parent);
      _push(`</h1><p class="description" data-v-537c80a6>`);
      ssrRenderSlot(_ctx.$slots, "description", { unwrap: "p" }, () => {
        _push(` Hero default description. `);
      }, _push, _parent);
      _push(`</p>`);
      if (_ctx.$slots.extra) {
        _push(`<div class="extra" data-v-537c80a6>`);
        ssrRenderSlot(_ctx.$slots, "extra", { unwrap: "p" }, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="actions" data-v-537c80a6>`);
      if (_ctx.$slots.actions) {
        ssrRenderSlot(_ctx.$slots, "actions", { unwrap: "p" }, null, _push, _parent);
      } else {
        _push(`<!--[-->`);
        if (__props.cta) {
          _push(ssrRenderComponent(_component_ButtonLink, {
            class: "cta",
            bold: "",
            size: "medium",
            href: __props.cta[1]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(__props.cta[0])}`);
              } else {
                return [
                  createTextVNode(toDisplayString(__props.cta[0]), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.secondary) {
          _push(`<a${ssrRenderAttr("href", __props.secondary[1])} class="secondary" data-v-537c80a6>${ssrInterpolate(__props.secondary[0])}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      }
      _push(`</div></div><div class="support" data-v-537c80a6>`);
      ssrRenderSlot$1(_ctx.$slots, "support", {}, () => {
        if (__props.snippet) {
          _push(ssrRenderComponent(_component_Terminal, { content: __props.snippet }, null, _parent));
        } else if (__props.video) {
          _push(ssrRenderComponent(_component_VideoPlayer, { src: __props.video }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div></div></section>`);
    };
  }
});
const BlockHero_vue_vue_type_style_index_0_scoped_537c80a6_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlockHero = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-537c80a6"]]);
export {
  BlockHero as default
};
//# sourceMappingURL=BlockHero-8f28d75e.js.map
