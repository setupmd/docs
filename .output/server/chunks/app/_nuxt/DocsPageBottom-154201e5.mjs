import { _ as _export_sfc, h as useContent, p as useDocus, o as __nuxt_component_0$4 } from '../server.mjs';
import _sfc_main$1 from './EditOnLink-ed7c39ad.mjs';
import __nuxt_component_2 from './ProseA-d15a6354.mjs';
import { useSSRContext, defineComponent, unref, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsPageBottom",
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useContent();
    const { config } = useDocus();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_Icon = __nuxt_component_0$4;
      const _component_EditOnLink = _sfc_main$1;
      const _component_ProseA = __nuxt_component_2;
      if (unref(page)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "docs-page-bottom" }, _attrs))} data-v-346454d4>`);
        if ((_b = (_a = unref(config)) == null ? void 0 : _a.github) == null ? void 0 : _b.edit) {
          _push(`<div class="edit-link" data-v-346454d4>`);
          _push(ssrRenderComponent(_component_Icon, { name: "uil:edit" }, null, _parent));
          _push(ssrRenderComponent(_component_EditOnLink, { page: unref(page) }, {
            default: withCtx(({ url }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_ProseA, { to: url }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span data-v-346454d4${_scopeId2}> Edit this page on GitHub </span>`);
                    } else {
                      return [
                        createVNode("span", null, " Edit this page on GitHub ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_ProseA, { to: url }, {
                    default: withCtx(() => [
                      createVNode("span", null, " Edit this page on GitHub ")
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_c = unref(page)) == null ? void 0 : _c.mtime) {
          _push(`<span data-v-346454d4>Updated on <b data-v-346454d4>${ssrInterpolate(new Intl.DateTimeFormat("en-US").format(Date.parse(unref(page).mtime)))}</b></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsPageBottom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-346454d4"]]);

export { __nuxt_component_4 as default };
//# sourceMappingURL=DocsPageBottom-154201e5.mjs.map
