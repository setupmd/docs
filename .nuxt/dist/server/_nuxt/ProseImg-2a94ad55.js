import { g as useRuntimeConfig, _ as _export_sfc } from "../server.mjs";
import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { withBase } from "ufo";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ohash";
import "cookie-es";
import "nanoid";
import "scule";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "@vueuse/integrations/useFuse";
import "@vueuse/integrations/useFocusTrap";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const refinedSrc = computed(() => {
      var _a;
      if (((_a = props.src) == null ? void 0 : _a.startsWith("/")) && !props.src.startsWith("//")) {
        return withBase(props.src, useRuntimeConfig().app.baseURL);
      }
      return props.src;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
        src: unref(refinedSrc),
        alt: __props.alt,
        width: __props.width,
        height: __props.height
      }, _attrs))} data-v-2ef15301>`);
    };
  }
});
const ProseImg_vue_vue_type_style_index_0_scoped_2ef15301_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/typography/components/global/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseImg = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2ef15301"]]);
export {
  ProseImg as default
};
//# sourceMappingURL=ProseImg-2a94ad55.js.map
