import { h as useContent, v as useContentHelpers, a as __nuxt_component_0, o as __nuxt_component_0$1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, unref, mergeProps, withCtx, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { upperFirst } from "scule";
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
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "@vueuse/integrations/useFuse";
import "@vueuse/integrations/useFocusTrap";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsPrevNext",
  __ssrInlineRender: true,
  setup(__props) {
    const { prev, next, navigation } = useContent();
    const { navDirFromPath } = useContentHelpers();
    const directory = (link) => {
      var _a;
      const nav = navDirFromPath(link._path, navigation.value || []);
      if (nav && nav[0]) {
        return ((_a = nav[0]) == null ? void 0 : _a._path) ?? "";
      } else {
        const dirs = link.split("/");
        const directory2 = dirs.length > 1 ? dirs[dirs.length - 2] : "";
        return directory2.split("-").map(upperFirst).join(" ");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      if (unref(prev) || unref(next)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "docs-prev-next" }, _attrs))} data-v-30e1aea1>`);
        if (unref(prev) && unref(prev)._path) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(prev)._path,
            class: "prev"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "heroicons-outline:arrow-sm-left",
                  class: "icon"
                }, null, _parent2, _scopeId));
                _push2(`<div class="wrapper" data-v-30e1aea1${_scopeId}>`);
                if (directory(unref(prev)._path)) {
                  _push2(`<span class="directory" data-v-30e1aea1${_scopeId}>${ssrInterpolate(directory(unref(prev)._path))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="title" data-v-30e1aea1${_scopeId}>${ssrInterpolate(unref(prev).title)}</span></div>`);
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "heroicons-outline:arrow-sm-left",
                    class: "icon"
                  }),
                  createVNode("div", { class: "wrapper" }, [
                    directory(unref(prev)._path) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "directory"
                    }, toDisplayString(directory(unref(prev)._path)), 1)) : createCommentVNode("", true),
                    createVNode("span", { class: "title" }, toDisplayString(unref(prev).title), 1)
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<span data-v-30e1aea1></span>`);
        }
        if (unref(next) && unref(next)._path) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(next)._path,
            class: "next"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="wrapper" data-v-30e1aea1${_scopeId}>`);
                if (directory(unref(next)._path)) {
                  _push2(`<span class="directory" data-v-30e1aea1${_scopeId}>${ssrInterpolate(directory(unref(next)._path))}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="title" data-v-30e1aea1${_scopeId}>${ssrInterpolate(unref(next).title)}</span></div>`);
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "heroicons-outline:arrow-sm-right",
                  class: "icon"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode("div", { class: "wrapper" }, [
                    directory(unref(next)._path) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "directory"
                    }, toDisplayString(directory(unref(next)._path)), 1)) : createCommentVNode("", true),
                    createVNode("span", { class: "title" }, toDisplayString(unref(next).title), 1)
                  ]),
                  createVNode(_component_Icon, {
                    name: "heroicons-outline:arrow-sm-right",
                    class: "icon"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
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
const DocsPrevNext_vue_vue_type_style_index_0_scoped_30e1aea1_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsPrevNext.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-30e1aea1"]]);
export {
  __nuxt_component_5 as default
};
//# sourceMappingURL=DocsPrevNext-f4da19df.js.map
