import { _ as _export_sfc, n as computedStyle, k as usePinceauRuntime, a as __nuxt_component_0$6, o as __nuxt_component_0$4 } from '../server.mjs';
import { f as flatUnwrap } from './MDCSlot-b6f8d3a7.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, renderSlot as renderSlot$1 } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/vue/index.mjs';
import { ssrRenderComponent } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/vue/server-renderer/index.mjs';
import { s as ssrRenderSlot } from './ssrSlot-5d5c6395.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/hookable/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unctx/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/destr/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/defu/dist/defu.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/klona/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unhead/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/h3/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/ufo/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/ohash/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/nanoid/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/scule/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@vueuse/integrations/useFuse.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@vueuse/integrations/useFocusTrap.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/pathe/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/shikiji/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unified/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark-util-character/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/slugify/slugify.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-parse/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-rehype/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/hast-util-to-string/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/github-slugger/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/detab/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-emoji/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/remark-gfm/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/rehype-external-links/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/rehype-raw/index.js';
import 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unist-util-visit/index.js';

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
