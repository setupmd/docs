import __nuxt_component_1 from './ButtonLink-8e56d417.mjs';
import __nuxt_component_2 from './Terminal-4e6973c9.mjs';
import __nuxt_component_3 from './VideoPlayer-1ec85efa.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot as ssrRenderSlot$1 } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/vue/server-renderer/index.mjs';
import { s as ssrRenderSlot } from './ssrSlot-5d5c6395.mjs';
import { _ as _export_sfc } from '../server.mjs';
import './MDCSlot-b6f8d3a7.mjs';
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
import './NuxtImg-4d4c6866.mjs';

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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/landing/BlockHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlockHero = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-537c80a6"]]);

export { BlockHero as default };
//# sourceMappingURL=BlockHero-8f28d75e.mjs.map
