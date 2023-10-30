import { ref, watch, defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { w as useRouter, _ as _export_sfc } from "../server.mjs";
import "hookable";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "unctx";
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
const useScrollspy = () => {
  const observer = ref();
  const visibleHeadings = ref([]);
  const activeHeadings = ref([]);
  const updateHeadings = (headings) => headings.forEach((heading) => {
    observer.value.observe(heading);
  });
  watch(visibleHeadings, (val, oldVal) => {
    if (val.length === 0) {
      activeHeadings.value = oldVal;
    } else {
      activeHeadings.value = val;
    }
  }, { deep: true });
  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DocsTocLinks",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  emits: ["move"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    useRouter();
    const { activeHeadings, updateHeadings } = useScrollspy();
    function childMove(id) {
      emit("move", id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DocsTocLinks = __nuxt_component_0;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "docs-toc-links" }, _attrs))} data-v-a97df893><!--[-->`);
      ssrRenderList(__props.links, (link) => {
        _push(`<li class="${ssrRenderClass([`depth-${link.depth}`])}" data-v-a97df893><a${ssrRenderAttr("href", `#${link.id}`)} class="${ssrRenderClass([unref(activeHeadings).includes(link.id) && "active"])}" data-v-a97df893>${ssrInterpolate(link.text)}</a>`);
        if (link.children) {
          _push(ssrRenderComponent(_component_DocsTocLinks, {
            links: link.children,
            onMove: ($event) => childMove($event)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const DocsTocLinks_vue_vue_type_style_index_0_scoped_a97df893_transformed_true_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsTocLinks.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a97df893"]]);
export {
  __nuxt_component_0 as default
};
//# sourceMappingURL=DocsTocLinks-9dbdb54e.js.map
