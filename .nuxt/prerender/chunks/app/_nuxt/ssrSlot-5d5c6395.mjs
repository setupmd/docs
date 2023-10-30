import { f as flatUnwrap } from './MDCSlot-b6f8d3a7.mjs';
import { ssrRenderSlot as ssrRenderSlot$1 } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/vue/server-renderer/index.mjs';

const ssrRenderSlot = (slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId) => {
  if (slots[name]) {
    return ssrRenderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props == null ? void 0 : props.unwrap) }, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
  }
  return ssrRenderSlot$1(slots, name, props, fallbackRenderFn, push, parentComponent, slotScopeId);
};

export { ssrRenderSlot as s };
//# sourceMappingURL=ssrSlot-5d5c6395.mjs.map
