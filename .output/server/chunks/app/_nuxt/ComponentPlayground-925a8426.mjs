import { useSSRContext, defineComponent, computed, mergeProps, unref, resolveComponent, ref, h } from 'vue';
import { _ as _export_sfc, k as usePinceauRuntime, z as useAsyncData } from '../server.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
import ComponentPlaygroundData from './ComponentPlaygroundData-c8c06afe.mjs';
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
import './TabsHeader-6f158920.mjs';
import './ComponentPlaygroundProps-0ceb6590.mjs';
import './ProseH4-148db78a.mjs';
import './ProseCodeInline-3a7a9d5f.mjs';
import './Badge-30890d1c.mjs';
import './ssrSlot-5d5c6395.mjs';
import './MDCSlot-b6f8d3a7.mjs';
import './ProseP-9ba527ea.mjs';
import './ComponentPlaygroundSlots-0dbd767a.mjs';
import './ComponentPlaygroundTokens-548a0a2d.mjs';

async function useComponentMeta(componentName) {
  const _componentName = unref(componentName);
  {
    const { data } = await useAsyncData(
      `nuxt-component-meta${_componentName ? `-${_componentName}` : ""}`,
      () => {
        return $fetch(`/api/component-meta${_componentName ? `/${_componentName}` : ""}`);
      }
    );
    return computed(() => data.value);
  }
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Ellipsis",
  __ssrInlineRender: true,
  props: {
    width: {
      type: String,
      default: "10rem"
    },
    height: {
      type: String,
      default: "10rem"
    },
    zIndex: {
      type: String,
      default: "10"
    },
    top: {
      type: String,
      default: "0"
    },
    left: {
      type: String,
      default: "auto"
    },
    right: {
      type: String,
      default: "auto"
    },
    blur: {
      type: String,
      default: "50px"
    },
    colors: {
      type: Array,
      default: () => ["rgba(0, 71, 225, 0.22)", "rgba(26, 214, 255, 0.22)", "rgba(0, 220, 130, 0.22)"]
    }
  },
  setup(__props) {
    const _cCN_top = computed(() => ((props = __$pProps) => props.top)());
    const _eih_insetInlineStart = computed(() => ((props = __$pProps) => props.left)());
    const _IfB_insetInlineEnd = computed(() => ((props = __$pProps) => props.right)());
    const _SsE_zIndex = computed(() => ((props = __$pProps) => props.zIndex)());
    const _wj8_maxWidth = computed(() => ((props = __$pProps) => props.width)());
    const _t33_height = computed(() => ((props = __$pProps) => props.height)());
    const _Jfd_filter = computed(() => ((props = __$pProps) => `blur(${props.blur})`)());
    const _yUj_background = computed(() => ((props = __$pProps) => {
      var _a, _b, _c;
      return `linear-gradient(97.62deg, ${(_a = props == null ? void 0 : props.colors) == null ? void 0 : _a[0]} 2.27%, ${(_b = props == null ? void 0 : props.colors) == null ? void 0 : _b[1]} 50.88%, ${(_c = props == null ? void 0 : props.colors) == null ? void 0 : _c[2]} 98.48%)`;
    })());
    const __$pProps = __props;
    const { $pinceau } = usePinceauRuntime(__$pProps, void 0, { _cCN_top, _eih_insetInlineStart, _IfB_insetInlineEnd, _SsE_zIndex, _wj8_maxWidth, _t33_height, _Jfd_filter, _yUj_background });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["ellipsis", [unref($pinceau)]]
      }, _attrs))} data-v-5fd4c706><div class="ellipsis-item" data-v-5fd4c706></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Ellipsis.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Ellipsis = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5fd4c706"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    component: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  async setup(props) {
    const as = computed(() => resolveComponent(props.component));
    const formProps = ref({
      ...props.props
    });
    const componentData = await useComponentMeta(props.component);
    return {
      as,
      formProps,
      componentData
    };
  },
  render(ctx) {
    const componentSlots = Object.entries(this.$slots).reduce(
      (acc, [key, slot]) => {
        if (key.startsWith("component-")) {
          const slotKey = key.replace("component-", "");
          acc[slotKey] = slot;
        }
        return acc;
      },
      {}
    );
    return h(
      "div",
      {
        class: "component-playground"
      },
      [
        h(
          "div",
          {
            class: "component-playground-wrapper"
          },
          [
            h(
              Ellipsis,
              {
                class: "component-playground-ellipsis",
                blur: "5vw",
                height: "100%",
                width: "100%"
              }
            ),
            h(
              ctx.as,
              {
                ...ctx.formProps,
                class: "component-playground-component"
              },
              {
                ...componentSlots
              }
            )
          ]
        ),
        h(
          ComponentPlaygroundData,
          {
            modelValue: ctx.formProps,
            componentData: ctx.componentData,
            "onUpdate:modelValue": (val) => ctx.formProps = val
          }
        )
      ]
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/meta/ComponentPlayground.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ComponentPlayground = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ca9b996"]]);

export { ComponentPlayground as default };
//# sourceMappingURL=ComponentPlayground-925a8426.mjs.map
