import { defineComponent, getCurrentInstance, useSlots, computed, useSSRContext } from "vue";
import _sfc_main$1 from "./ContentSlot-8ddc8cc2.js";
import "./MDCSlot-b6f8d3a7.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "Markdown",
  extends: _sfc_main$1,
  setup(props) {
    const { parent } = getCurrentInstance();
    const { between, default: fallbackSlot } = useSlots();
    const tags = computed(() => {
      if (typeof props.unwrap === "string") {
        return props.unwrap.split(" ");
      }
      return ["*"];
    });
    return {
      fallbackSlot,
      tags,
      between,
      parent
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Markdown.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Markdown-5e6ffda7.js.map
