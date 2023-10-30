import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { x as useClipboard, _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Terminal",
  __ssrInlineRender: true,
  props: {
    content: {
      type: [Array, String],
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    useClipboard();
    const state = ref("init");
    const lines = computed(() => {
      if (typeof props.content === "string") {
        return [props.content];
      }
      return props.content;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "terminal" }, _attrs))} data-v-63eb7158>`);
      if (unref(state) === "copied") {
        _push(`<div class="copied" data-v-63eb7158><div class="scrim" data-v-63eb7158></div><div class="content" data-v-63eb7158> Copied! </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="header" data-v-63eb7158><div class="controls" data-v-63eb7158><div data-v-63eb7158></div><div data-v-63eb7158></div><div data-v-63eb7158></div></div><div class="title" data-v-63eb7158> Bash </div></div><div class="window" data-v-63eb7158><!--[-->`);
      ssrRenderList(unref(lines), (line) => {
        _push(`<span class="line" data-v-63eb7158><span class="sign" data-v-63eb7158>$</span><span class="content" data-v-63eb7158>${ssrInterpolate(line)}</span></span>`);
      });
      _push(`<!--]--></div>`);
      if (unref(state) !== "copied") {
        _push(`<div class="prompt" data-v-63eb7158> Click to copy </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const Terminal_vue_vue_type_style_index_0_scoped_63eb7158_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Terminal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-63eb7158"]]);
export {
  __nuxt_component_2 as default
};
//# sourceMappingURL=Terminal-4e6973c9.js.map
