import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VoltaBoard",
  __ssrInlineRender: true,
  props: {
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const src = computed(() => `https://volta.net/embed/${props.token}`);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<iframe${ssrRenderAttrs(mergeProps({
        src: unref(src),
        class: "w-full"
      }, _attrs))}></iframe>`);
    };
  }
});
const VoltaBoard_vue_vue_type_style_index_0_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/volta/VoltaBoard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=VoltaBoard-98820156.js.map
