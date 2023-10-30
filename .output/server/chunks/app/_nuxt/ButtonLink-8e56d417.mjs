import { _ as _export_sfc, n as computedStyle, k as usePinceauRuntime, a as __nuxt_component_0$6, o as __nuxt_component_0$4 } from '../server.mjs';
import { f as flatUnwrap } from './MDCSlot-b6f8d3a7.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, renderSlot as renderSlot$1 } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { s as ssrRenderSlot } from './ssrSlot-5d5c6395.mjs';
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

const renderSlot = (slots, name, props, ...rest) => {
  if (slots[name]) {
    return renderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props == null ? void 0 : props.unwrap) }, name, props, ...rest);
  }
  return renderSlot$1(slots, name, props, ...rest);
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ButtonLink",
  __ssrInlineRender: true,
  props: {
    blank: {
      type: Boolean,
      required: false,
      default: false
    },
    color: computedStyle("primary"),
    href: {
      type: String,
      required: true,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    ...{ "size": { "required": false, "type": [String, Object], "default": "medium" }, "transparent": { "required": false, "type": [Boolean, Object], "default": false } }
  },
  setup(__props) {
    const _YM9_buttonPrimary = computed(() => ((props = __$pProps) => `{color.${props.color}.600}`)());
    const _A23_buttonSecondary = computed(() => ((props = __$pProps) => `{color.${props.color}.500}`)());
    const __$pProps = __props;
    const __$pVariants = { "size": { "small": { "padding": "{space.2} {space.4}", "fontSize": "{text.sm.fontSize}", "lineHeight": "{text.sm.lineHeight}" }, "medium": { "padding": "{space.rem.625} {space.5}", "fontSize": "{text.base.fontSize}", "lineHeight": "{text.base.lineHeight}" }, "large": { "padding": "{space.3} {space.6}", "fontSize": "{text.lg.fontSize}", "lineHeight": "{text.lg.lineHeight}" }, "giant": { "padding": "{space.4} {space.8}", "fontSize": "{text.lg.fontSize}", "lineHeight": "{text.lg.lineHeight}" } }, "transparent": { "true": { "backgroundColor": "transparent" } } };
    const { $pinceau } = usePinceauRuntime(__$pProps, __$pVariants, { _YM9_buttonPrimary, _A23_buttonSecondary });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$6;
      const _component_Icon = __nuxt_component_0$4;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: ["button-link", [unref($pinceau)]],
        to: __props.href,
        target: __props.blank ? "_blank" : void 0
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.icon) {
              _push2(ssrRenderComponent(_component_Icon, { name: __props.icon }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", { unwrap: "p ul li" }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              __props.icon ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: __props.icon
              }, null, 8, ["name"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default", { unwrap: "p ul li" }, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/ButtonLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d103c1ea"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=ButtonLink-8e56d417.mjs.map
