import { r as useAppConfig, a as __nuxt_component_0, o as __nuxt_component_0$1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, computed, mergeProps, withCtx, renderSlot, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import "hookable";
import "destr";
import "devalue";
import "defu";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
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
  __name: "ProseH1",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const { prose } = useAppConfig();
    const hasIcon = computed(() => {
      var _a, _b;
      return ((_a = prose == null ? void 0 : prose.h1) == null ? void 0 : _a.icon) && ((_b = prose == null ? void 0 : prose.headings) == null ? void 0 : _b.icon);
    });
    const icon = computed(() => {
      var _a, _b;
      return ((_a = prose == null ? void 0 : prose.h1) == null ? void 0 : _a.icon) || ((_b = prose == null ? void 0 : prose.headings) == null ? void 0 : _b.icon);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<h1${ssrRenderAttrs(mergeProps({ id: _ctx.id }, _attrs))} data-v-2001208a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: `#${_ctx.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (hasIcon.value) {
              _push2(ssrRenderComponent(_component_Icon, { name: icon.value }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true),
              hasIcon.value ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: icon.value
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</h1>`);
    };
  }
});
const ProseH1_vue_vue_type_style_index_0_scoped_2001208a_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/typography/components/global/ProseH1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseH1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2001208a"]]);
export {
  ProseH1 as default
};
//# sourceMappingURL=ProseH1-b6c1c742.js.map
