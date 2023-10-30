import { hasInjectionContext, getCurrentInstance, version, ref, watchEffect, watch, inject, shallowRef, toRef, onServerPrefetch, isRef, defineAsyncComponent, computed, useSSRContext, h, unref, defineComponent, resolveComponent, shallowReactive, reactive, mergeProps, createVNode, resolveDynamicComponent, withCtx, renderSlot, withAsyncContext, openBlock, createBlock, createCommentVNode, toDisplayString, Fragment, createTextVNode, readonly, nextTick, renderList, createApp, effectScope, getCurrentScope, onScopeDispose, provide, onErrorCaptured, isReadonly, isShallow, isReactive, toRaw, createElementBlock, Suspense, Transition } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/vue/index.mjs';
import { $fetch as $fetch$1 } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/ofetch/dist/node.mjs';
import { createHooks } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unctx/dist/index.mjs';
import destr from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/destr/dist/index.mjs';
import { defu } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/defu/dist/defu.mjs';
import { klona } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/klona/dist/index.mjs';
import { getActiveHead } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin, composableNames } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@unhead/shared/dist/index.mjs';
import { createMemoryHistory, createRouter, START_LOCATION, RouterView } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/vue-router/dist/vue-router.node.mjs';
import { createError as createError$1, getRequestHeader, setCookie, getCookie, deleteCookie, sanitizeStatusCode } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/h3/dist/index.mjs';
import { withoutTrailingSlash, withLeadingSlash, joinURL, hasProtocol, parseURL, parseQuery, withBase, withTrailingSlash, withQuery, isScriptProtocol } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/ufo/dist/index.mjs';
import { hash, isEqual } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/ohash/dist/index.mjs';
import { parse } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/cookie-es/dist/index.mjs';
import { nanoid } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/nanoid/index.js';
import { kebabCase } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/scule/dist/index.mjs';
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderTeleport, ssrRenderAttr, ssrRenderStyle, ssrRenderSuspense } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/vue/server-renderer/index.mjs';
import { Icon as Icon$1 } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@iconify/vue/dist/offline.mjs';
import { loadIcon } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@iconify/vue/dist/iconify.mjs';
import { useFuse } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@vueuse/integrations/useFuse.mjs';
import { useFocusTrap } from 'file:///Users/danielsmith/Documents/GitHub/docs/node_modules/@vueuse/integrations/useFocusTrap.mjs';
import { b as useRuntimeConfig$1 } from '../nitro/nitro-prerenderer.mjs';
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

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.8.0";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a2, _b;
  const parallels = [];
  const errors = [];
  for (const plugin2 of plugins2) {
    if (((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    const promise = applyPlugin(nuxtApp, plugin2);
    if (plugin2.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  var _a2;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a2 = getCurrentInstance()) == null ? void 0 : _a2.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig() {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config) {
  return config;
}
version.startsWith("3");
function resolveUnref$1(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref$1(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global$1 = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$2 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global$1[globalKey$2] = handler;
}
function injectHead() {
  if (globalKey$2 in _global$1) {
    return _global$1[globalKey$2]();
  }
  const head = inject(headSymbol);
  if (!head && "prerender" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a2;
  return (_a2 = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a2.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  const global2 = options.global || typeof name !== "string";
  const mw = typeof name !== "string" ? name : middleware;
  if (!mw) {
    console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", name);
    return;
  }
  if (global2) {
    nuxtApp._middleware.global.push(mw);
  } else {
    nuxtApp._middleware.named[name] = mw;
  }
};
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error = useError();
    if (false)
      ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const asyncDataDefaults = { "deep": true };
function useAsyncData(...args) {
  var _a2;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxt = /* @__PURE__ */ useNuxtApp();
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.getCachedData = options.getCachedData ?? getDefaultCachedData;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  options.deep = options.deep ?? asyncDataDefaults.deep;
  const hasCachedData = () => ![null, void 0].includes(options.getCachedData(key));
  if (!nuxt._asyncData[key] || !options.immediate) {
    (_a2 = nuxt.payload._errors)[key] ?? (_a2[key] = null);
    const _ref = options.deep ? ref : shallowRef;
    nuxt._asyncData[key] = {
      data: _ref(options.getCachedData(key) ?? options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxt.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function useLazyAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [key, handler, options] = args;
  return useAsyncData(key, handler, { ...options, lazy: true }, null);
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxt = /* @__PURE__ */ useNuxtApp();
  const state = toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp = /* @__PURE__ */ useNuxtApp()) {
  var _a2;
  return (_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.event;
}
const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref(cookies[name] ?? ((_a2 = opts.default) == null ? void 0 : _a2.call(opts)));
  {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName2 = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    const normalizeTrailingSlash = options.trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
    if (typeof to === "string") {
      return normalizeTrailingSlash(to, true);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    };
  };
  return /* @__PURE__ */ defineComponent({
    name: componentName2,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, { acceptRelative: true });
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a2, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a2 = router.resolve(to.value)) == null ? void 0 : _a2.href) ?? null : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0$6 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!_isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (_isPlainObject(value) && _isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function _isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});
const cfg0 = defineAppConfig({
  docus: {
    title: "setup.md",
    description: "Your open source Minecraft administration wiki.",
    image: "",
    socials: {
      github: "setupmd/docs",
      discord: {
        label: "Discord",
        icon: "simple-icons:discord",
        href: "https://link.setup.md/discord"
      }
    },
    github: {
      dir: ".starters/default/content",
      branch: "v3-nuxt",
      repo: "docs",
      owner: "setupmd",
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
});
const cfg1 = defineAppConfig({
  docus: {
    title: "Docus",
    description: "The best place to start your documentation.",
    url: "https://docus.dev",
    image: "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {},
    layout: "default",
    header: {
      title: "",
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: []
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev"
      },
      textLinks: [],
      iconLinks: [],
      fluid: false
    },
    github: {
      dir: void 0,
      branch: void 0,
      repo: void 0,
      owner: void 0,
      edit: false
    }
  }
});
const cfg2 = defineAppConfig({
  prose: {
    copyButton: {
      iconCopy: "ph:copy",
      iconCopied: "ph:check"
    },
    headings: {
      icon: "ph:link"
    }
  }
});
const cfg3 = defineAppConfig({});
const inlineConfig = {
  "nuxt": {
    "buildId": "5fa87f2e-a1c2-4b3c-baf6-edbda8e44a66"
  }
};
const __appConfig = /* @__PURE__ */ defuFn(cfg0, cfg1, cfg2, cfg3, inlineConfig);
function useAppConfig() {
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = klona(__appConfig);
  }
  return nuxtApp._appConfig;
}
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$1 = "__unctx__";
_globalThis[globalKey$1] || (_globalThis[globalKey$1] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const _routes = [
  {
    name: "slug",
    path: "/:slug(.*)*",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/document-driven-8d5c0225.mjs').then((m) => m.default || m)
  }
];
const routerOptions0 = {
  scrollBehavior(to, _form, savedPosition) {
    if (history.state.stop) {
      return;
    }
    if (history.state.smooth) {
      return {
        el: history.state.smooth,
        behavior: "smooth"
      };
    }
    if (to.hash) {
      const el = document.querySelector(to.hash);
      if (!el) {
        return;
      }
      const { marginTop } = getComputedStyle(el);
      const marginTopValue = parseInt(marginTop);
      const offset = document.querySelector(to.hash).offsetTop - marginTopValue;
      return {
        top: offset,
        behavior: "smooth"
      };
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
};
const routerOptions1 = {
  scrollBehavior(to, from, savedPosition) {
    var _a2;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a2 = useRouter().options) == null ? void 0 : _a2.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(from, to) {
  return to.path !== from.path || JSON.stringify(from.params) !== JSON.stringify(to.params);
}
const configRouterOptions = {};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions1,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a2;
  let __temp, __restore;
  if (!((_a2 = to.meta) == null ? void 0 : _a2.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a2, _b;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history2 = ((_a2 = routerOptions.history) == null ? void 0 : _a2.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        var _a3;
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return (_a3 = routerOptions.scrollBehavior) == null ? void 0 : _a3.call(routerOptions, to, START_LOCATION, startPosition || savedPosition);
      },
      history: history2,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a3, _b2, _c, _d;
      if (((_b2 = (_a3 = to.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a3, _b2;
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a3 = nuxtApp.ssrContext) == null ? void 0 : _a3.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry2 of componentMiddleware) {
              middlewareEntries.add(entry2);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      var _a3;
      delete nuxtApp._processingMiddleware;
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0 && !((_a3 = nuxtApp.ssrContext) == null ? void 0 : _a3.islandContext)) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const LazyAppDocSearch = defineAsyncComponent(() => Promise.resolve().then(function() {
  return AppDocSearch;
}).then((r) => r.default));
const LazyAppFooter = defineAsyncComponent(() => Promise.resolve().then(function() {
  return AppFooter;
}).then((r) => r.default));
const LazyAppHeader = defineAsyncComponent(() => Promise.resolve().then(function() {
  return AppHeader;
}).then((r) => r.default));
const LazyAppHeaderDialog = defineAsyncComponent(() => Promise.resolve().then(function() {
  return AppHeaderDialog;
}).then((r) => r.default));
const LazyAppHeaderLogo = defineAsyncComponent(() => Promise.resolve().then(function() {
  return AppHeaderLogo;
}).then((r) => r.default));
const LazyAppHeaderNavigation = defineAsyncComponent(() => Promise.resolve().then(function() {
  return AppHeaderNavigation;
}).then((r) => r.default));
const LazyAppLayout = defineAsyncComponent(() => Promise.resolve().then(function() {
  return AppLayout;
}).then((r) => r.default));
const LazyAppLoadingBar = defineAsyncComponent(() => Promise.resolve().then(function() {
  return AppLoadingBar;
}).then((r) => r.default));
const LazyAppSearch = defineAsyncComponent(() => Promise.resolve().then(function() {
  return AppSearch;
}).then((r) => r.default));
const LazyAppSocialIcons = defineAsyncComponent(() => Promise.resolve().then(function() {
  return AppSocialIcons;
}).then((r) => r.default));
const LazyDocumentDrivenNotFound = defineAsyncComponent(() => import('./_nuxt/DocumentDrivenNotFound-341dd3ee.mjs').then((r) => r.default));
const LazyEllipsis = defineAsyncComponent(() => import('./_nuxt/Ellipsis-184c202e.mjs').then((r) => r.default));
const LazyLogo = defineAsyncComponent(() => Promise.resolve().then(function() {
  return Logo;
}).then((r) => r.default));
const LazyThemeSelect = defineAsyncComponent(() => Promise.resolve().then(function() {
  return ThemeSelect;
}).then((r) => r.default));
const LazyDocsAside = defineAsyncComponent(() => import('./_nuxt/DocsAside-fd029efe.mjs').then((r) => r.default));
const LazyDocsAsideTree = defineAsyncComponent(() => Promise.resolve().then(function() {
  return DocsAsideTree;
}).then((r) => r.default));
const LazyDocsPageBottom = defineAsyncComponent(() => import('./_nuxt/DocsPageBottom-154201e5.mjs').then((r) => r.default));
const LazyDocsPageLayout = defineAsyncComponent(() => import('./_nuxt/DocsPageLayout-f4e17515.mjs').then((r) => r.default));
const LazyDocsPrevNext = defineAsyncComponent(() => import('./_nuxt/DocsPrevNext-f4da19df.mjs').then((r) => r.default));
const LazyDocsToc = defineAsyncComponent(() => import('./_nuxt/DocsToc-132da242.mjs').then((r) => r.default));
const LazyDocsTocLinks = defineAsyncComponent(() => import('./_nuxt/DocsTocLinks-9dbdb54e.mjs').then((r) => r.default));
const LazyEditOnLink = defineAsyncComponent(() => import('./_nuxt/EditOnLink-ed7c39ad.mjs').then((r) => r.default));
const LazySourceLink = defineAsyncComponent(() => import('./_nuxt/SourceLink-9bcaa785.mjs').then((r) => r.default));
const LazyProseA = defineAsyncComponent(() => import('./_nuxt/ProseA-d15a6354.mjs').then((r) => r.default));
const LazyProseBlockquote = defineAsyncComponent(() => import('./_nuxt/ProseBlockquote-de33a742.mjs').then((r) => r.default));
const LazyProseCode = defineAsyncComponent(() => import('./_nuxt/ProseCode-879ee0f0.mjs').then((r) => r.default));
const LazyProseCodeInline = defineAsyncComponent(() => import('./_nuxt/ProseCodeInline-3a7a9d5f.mjs').then((r) => r.default));
const LazyProseEm = defineAsyncComponent(() => import('./_nuxt/ProseEm-0af08bee.mjs').then((r) => r.default));
const LazyProseH1 = defineAsyncComponent(() => import('./_nuxt/ProseH1-b6c1c742.mjs').then((r) => r.default));
const LazyProseH2 = defineAsyncComponent(() => import('./_nuxt/ProseH2-fc88c79c.mjs').then((r) => r.default));
const LazyProseH3 = defineAsyncComponent(() => import('./_nuxt/ProseH3-4c15b496.mjs').then((r) => r.default));
const LazyProseH4 = defineAsyncComponent(() => import('./_nuxt/ProseH4-148db78a.mjs').then((r) => r.default));
const LazyProseH5 = defineAsyncComponent(() => import('./_nuxt/ProseH5-81c79c36.mjs').then((r) => r.default));
const LazyProseH6 = defineAsyncComponent(() => import('./_nuxt/ProseH6-929f786d.mjs').then((r) => r.default));
const LazyProseHr = defineAsyncComponent(() => import('./_nuxt/ProseHr-a41041ed.mjs').then((r) => r.default));
const LazyProseImg = defineAsyncComponent(() => import('./_nuxt/ProseImg-2a94ad55.mjs').then((r) => r.default));
const LazyProseLi = defineAsyncComponent(() => import('./_nuxt/ProseLi-e5eaed75.mjs').then((r) => r.default));
const LazyProseOl = defineAsyncComponent(() => import('./_nuxt/ProseOl-e464dd83.mjs').then((r) => r.default));
const LazyProseP = defineAsyncComponent(() => import('./_nuxt/ProseP-9ba527ea.mjs').then((r) => r.default));
const LazyProseStrong = defineAsyncComponent(() => import('./_nuxt/ProseStrong-3a68591e.mjs').then((r) => r.default));
const LazyProseTable = defineAsyncComponent(() => import('./_nuxt/ProseTable-c6860529.mjs').then((r) => r.default));
const LazyProseTbody = defineAsyncComponent(() => import('./_nuxt/ProseTbody-f87b59b3.mjs').then((r) => r.default));
const LazyProseTd = defineAsyncComponent(() => import('./_nuxt/ProseTd-a299de65.mjs').then((r) => r.default));
const LazyProseTh = defineAsyncComponent(() => import('./_nuxt/ProseTh-b85b9933.mjs').then((r) => r.default));
const LazyProseThead = defineAsyncComponent(() => import('./_nuxt/ProseThead-d45a270b.mjs').then((r) => r.default));
const LazyProseTr = defineAsyncComponent(() => import('./_nuxt/ProseTr-72057dbe.mjs').then((r) => r.default));
const LazyProseUl = defineAsyncComponent(() => import('./_nuxt/ProseUl-f7908751.mjs').then((r) => r.default));
const LazyAlert = defineAsyncComponent(() => import('./_nuxt/Alert-e89bb36c.mjs').then((r) => r.default));
const LazyBadge = defineAsyncComponent(() => import('./_nuxt/Badge-30890d1c.mjs').then((r) => r.default));
const LazyButtonLink = defineAsyncComponent(() => import('./_nuxt/ButtonLink-8e56d417.mjs').then((r) => r.default));
const LazyCallout = defineAsyncComponent(() => import('./_nuxt/Callout-3727c4b0.mjs').then((r) => r.default));
const LazyCodeBlock = defineAsyncComponent(() => import('./_nuxt/CodeBlock-dbd44ab0.mjs').then((r) => r.default));
const LazyCodeGroup = defineAsyncComponent(() => import('./_nuxt/CodeGroup-d64eabf7.mjs').then((r) => r.default));
const LazyContainer = defineAsyncComponent(() => Promise.resolve().then(function() {
  return Container;
}).then((r) => r.default));
const LazyCopyButton = defineAsyncComponent(() => import('./_nuxt/CopyButton-51a18d2c.mjs').then((r) => r.default));
const LazyList = defineAsyncComponent(() => import('./_nuxt/List-a30d7012.mjs').then((r) => r.default));
const LazyNuxtImg = defineAsyncComponent(() => import('./_nuxt/NuxtImg-4d4c6866.mjs').then((r) => r.default));
const LazyProps = defineAsyncComponent(() => import('./_nuxt/Props-6b1490be.mjs').then((r) => r.default));
const LazySandbox = defineAsyncComponent(() => import('./_nuxt/Sandbox-987e5cc0.mjs').then((r) => r.default));
const LazyTabsHeader = defineAsyncComponent(() => import('./_nuxt/TabsHeader-6f158920.mjs').then((r) => r.default));
const LazyTerminal = defineAsyncComponent(() => import('./_nuxt/Terminal-4e6973c9.mjs').then((r) => r.default));
const LazyVideoPlayer = defineAsyncComponent(() => import('./_nuxt/VideoPlayer-1ec85efa.mjs').then((r) => r.default));
const LazyIconCodeSandBox = defineAsyncComponent(() => import('./_nuxt/IconCodeSandBox-5aa49f50.mjs').then((r) => r.default));
const LazyIconDocus = defineAsyncComponent(() => import('./_nuxt/IconDocus-56c9fa2f.mjs').then((r) => r.default));
const LazyIconNuxt = defineAsyncComponent(() => import('./_nuxt/IconNuxt-cfd8fb8a.mjs').then((r) => r.default));
const LazyIconNuxtContent = defineAsyncComponent(() => import('./_nuxt/IconNuxtContent-c593c55e.mjs').then((r) => r.default));
const LazyIconNuxtLabs = defineAsyncComponent(() => import('./_nuxt/IconNuxtLabs-fcb4bbf4.mjs').then((r) => r.default));
const LazyIconNuxtStudio = defineAsyncComponent(() => import('./_nuxt/IconNuxtStudio-0df39500.mjs').then((r) => r.default));
const LazyIconStackBlitz = defineAsyncComponent(() => import('./_nuxt/IconStackBlitz-20a3588c.mjs').then((r) => r.default));
const LazyIconVueTelescope = defineAsyncComponent(() => import('./_nuxt/IconVueTelescope-4c5f71cc.mjs').then((r) => r.default));
const LazyBlockHero = defineAsyncComponent(() => import('./_nuxt/BlockHero-8f28d75e.mjs').then((r) => r.default));
const LazyCard = defineAsyncComponent(() => import('./_nuxt/Card-2ede1e4d.mjs').then((r) => r.default));
const LazyCardGrid = defineAsyncComponent(() => import('./_nuxt/CardGrid-66c8cd2c.mjs').then((r) => r.default));
const LazyVoltaBoard = defineAsyncComponent(() => import('./_nuxt/VoltaBoard-98820156.mjs').then((r) => r.default));
const LazyComponentPlayground = defineAsyncComponent(() => import('./_nuxt/ComponentPlayground-925a8426.mjs').then((r) => r.default));
const LazyComponentPlaygroundData = defineAsyncComponent(() => import('./_nuxt/ComponentPlaygroundData-c8c06afe.mjs').then((r) => r.default));
const LazyComponentPlaygroundProps = defineAsyncComponent(() => import('./_nuxt/ComponentPlaygroundProps-0ceb6590.mjs').then((r) => r.default));
const LazyComponentPlaygroundSlots = defineAsyncComponent(() => import('./_nuxt/ComponentPlaygroundSlots-0dbd767a.mjs').then((r) => r.default));
const LazyComponentPlaygroundTokens = defineAsyncComponent(() => import('./_nuxt/ComponentPlaygroundTokens-548a0a2d.mjs').then((r) => r.default));
const LazyPreviewLayout = defineAsyncComponent(() => import('./_nuxt/PreviewLayout-96eed112.mjs').then((r) => r.default));
const LazyTokensPlayground = defineAsyncComponent(() => import('./_nuxt/TokensPlayground-8362c368.mjs').then((r) => r.default));
const LazyContentDoc = defineAsyncComponent(() => import('./_nuxt/ContentDoc-9591479f.mjs').then((r) => r.default));
const LazyContentList = defineAsyncComponent(() => import('./_nuxt/ContentList-15663796.mjs').then((r) => r.default));
const LazyContentNavigation = defineAsyncComponent(() => import('./_nuxt/ContentNavigation-26a999a2.mjs').then((r) => r.default));
const LazyContentQuery = defineAsyncComponent(() => import('./_nuxt/ContentQuery-8d8f49ed.mjs').then((r) => r.default));
const LazyContentRenderer = defineAsyncComponent(() => import('./_nuxt/ContentRenderer-fb4f700e.mjs').then((r) => r.default));
const LazyContentRendererMarkdown = defineAsyncComponent(() => import('./_nuxt/ContentRendererMarkdown-ebb4dffb.mjs').then((r) => r.default));
const LazyContentSlot = defineAsyncComponent(() => import('./_nuxt/ContentSlot-8ddc8cc2.mjs').then((r) => r.default));
const LazyDocumentDrivenEmpty = defineAsyncComponent(() => import('./_nuxt/DocumentDrivenEmpty-e7fcdb87.mjs').then((r) => r.default));
const LazyMarkdown = defineAsyncComponent(() => import('./_nuxt/Markdown-5e6ffda7.mjs').then((r) => r.default));
const LazyProsePre = defineAsyncComponent(() => import('./_nuxt/ProsePre-5ec4d959.mjs').then((r) => r.default));
const LazyProseScript = defineAsyncComponent(() => import('./_nuxt/ProseScript-bfe5d4dd.mjs').then((r) => r.default));
const LazyIcon = defineAsyncComponent(() => Promise.resolve().then(function() {
  return Icon;
}).then((r) => r.default));
const LazyIconCSS = defineAsyncComponent(() => import('./_nuxt/IconCSS-42d1948b.mjs').then((r) => r.default));
const lazyGlobalComponents = [
  ["AppDocSearch", LazyAppDocSearch],
  ["AppFooter", LazyAppFooter],
  ["AppHeader", LazyAppHeader],
  ["AppHeaderDialog", LazyAppHeaderDialog],
  ["AppHeaderLogo", LazyAppHeaderLogo],
  ["AppHeaderNavigation", LazyAppHeaderNavigation],
  ["AppLayout", LazyAppLayout],
  ["AppLoadingBar", LazyAppLoadingBar],
  ["AppSearch", LazyAppSearch],
  ["AppSocialIcons", LazyAppSocialIcons],
  ["DocumentDrivenNotFound", LazyDocumentDrivenNotFound],
  ["Ellipsis", LazyEllipsis],
  ["Logo", LazyLogo],
  ["ThemeSelect", LazyThemeSelect],
  ["DocsAside", LazyDocsAside],
  ["DocsAsideTree", LazyDocsAsideTree],
  ["DocsPageBottom", LazyDocsPageBottom],
  ["DocsPageLayout", LazyDocsPageLayout],
  ["DocsPrevNext", LazyDocsPrevNext],
  ["DocsToc", LazyDocsToc],
  ["DocsTocLinks", LazyDocsTocLinks],
  ["EditOnLink", LazyEditOnLink],
  ["SourceLink", LazySourceLink],
  ["ProseA", LazyProseA],
  ["ProseBlockquote", LazyProseBlockquote],
  ["ProseCode", LazyProseCode],
  ["ProseCodeInline", LazyProseCodeInline],
  ["ProseEm", LazyProseEm],
  ["ProseH1", LazyProseH1],
  ["ProseH2", LazyProseH2],
  ["ProseH3", LazyProseH3],
  ["ProseH4", LazyProseH4],
  ["ProseH5", LazyProseH5],
  ["ProseH6", LazyProseH6],
  ["ProseHr", LazyProseHr],
  ["ProseImg", LazyProseImg],
  ["ProseLi", LazyProseLi],
  ["ProseOl", LazyProseOl],
  ["ProseP", LazyProseP],
  ["ProseStrong", LazyProseStrong],
  ["ProseTable", LazyProseTable],
  ["ProseTbody", LazyProseTbody],
  ["ProseTd", LazyProseTd],
  ["ProseTh", LazyProseTh],
  ["ProseThead", LazyProseThead],
  ["ProseTr", LazyProseTr],
  ["ProseUl", LazyProseUl],
  ["Alert", LazyAlert],
  ["Badge", LazyBadge],
  ["ButtonLink", LazyButtonLink],
  ["Callout", LazyCallout],
  ["CodeBlock", LazyCodeBlock],
  ["CodeGroup", LazyCodeGroup],
  ["Container", LazyContainer],
  ["CopyButton", LazyCopyButton],
  ["List", LazyList],
  ["NuxtImg", LazyNuxtImg],
  ["Props", LazyProps],
  ["Sandbox", LazySandbox],
  ["TabsHeader", LazyTabsHeader],
  ["Terminal", LazyTerminal],
  ["VideoPlayer", LazyVideoPlayer],
  ["IconCodeSandBox", LazyIconCodeSandBox],
  ["IconDocus", LazyIconDocus],
  ["IconNuxt", LazyIconNuxt],
  ["IconNuxtContent", LazyIconNuxtContent],
  ["IconNuxtLabs", LazyIconNuxtLabs],
  ["IconNuxtStudio", LazyIconNuxtStudio],
  ["IconStackBlitz", LazyIconStackBlitz],
  ["IconVueTelescope", LazyIconVueTelescope],
  ["BlockHero", LazyBlockHero],
  ["Card", LazyCard],
  ["CardGrid", LazyCardGrid],
  ["VoltaBoard", LazyVoltaBoard],
  ["ComponentPlayground", LazyComponentPlayground],
  ["ComponentPlaygroundData", LazyComponentPlaygroundData],
  ["ComponentPlaygroundProps", LazyComponentPlaygroundProps],
  ["ComponentPlaygroundSlots", LazyComponentPlaygroundSlots],
  ["ComponentPlaygroundTokens", LazyComponentPlaygroundTokens],
  ["PreviewLayout", LazyPreviewLayout],
  ["TokensPlayground", LazyTokensPlayground],
  ["ContentDoc", LazyContentDoc],
  ["ContentList", LazyContentList],
  ["ContentNavigation", LazyContentNavigation],
  ["ContentQuery", LazyContentQuery],
  ["ContentRenderer", LazyContentRenderer],
  ["ContentRendererMarkdown", LazyContentRendererMarkdown],
  ["MDCSlot", LazyContentSlot],
  ["DocumentDrivenEmpty", LazyDocumentDrivenEmpty],
  ["Markdown", LazyMarkdown],
  ["ProsePre", LazyProsePre],
  ["ProseScript", LazyProseScript],
  ["Icon", LazyIcon],
  ["IconCSS", LazyIconCSS]
];
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const useContentState = () => {
  const pages = useState("dd-pages", () => shallowRef(shallowReactive({})));
  const surrounds = useState("dd-surrounds", () => shallowRef(shallowReactive({})));
  const navigation = useState("dd-navigation");
  const globals = useState("dd-globals", () => shallowRef(shallowReactive({})));
  return {
    pages,
    surrounds,
    navigation,
    globals
  };
};
const useContent = () => {
  const { navigation, pages, surrounds, globals } = useContentState();
  const _path = computed(() => withoutTrailingSlash(useRoute().path));
  const page = computed(() => pages.value[_path.value]);
  const surround = computed(() => surrounds.value[_path.value]);
  const toc = computed(() => {
    var _a2, _b;
    return (_b = (_a2 = page == null ? void 0 : page.value) == null ? void 0 : _a2.body) == null ? void 0 : _b.toc;
  });
  const type = computed(() => {
    var _a2;
    return (_a2 = page.value) == null ? void 0 : _a2._type;
  });
  const excerpt = computed(() => {
    var _a2;
    return (_a2 = page.value) == null ? void 0 : _a2.excerpt;
  });
  const layout = computed(() => {
    var _a2;
    return (_a2 = page.value) == null ? void 0 : _a2.layout;
  });
  const next = computed(() => {
    var _a2;
    return (_a2 = surround.value) == null ? void 0 : _a2[1];
  });
  const prev = computed(() => {
    var _a2;
    return (_a2 = surround.value) == null ? void 0 : _a2[0];
  });
  return {
    // Refs
    globals,
    navigation,
    surround,
    page,
    // From page
    excerpt,
    toc,
    type,
    layout,
    // From surround
    next,
    prev
  };
};
const navBottomLink = (link) => {
  if (!link.children) {
    return link._path;
  }
  for (const child of (link == null ? void 0 : link.children) || []) {
    const result = navBottomLink(child);
    if (result) {
      return result;
    }
  }
};
const navDirFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path && !file._id) {
      return file.children;
    }
    if (file.children) {
      const result = navDirFromPath(path, file.children);
      if (result) {
        return result;
      }
    }
  }
};
const navPageFromPath = (path, tree) => {
  for (const file of tree) {
    if (file._path === path) {
      return file;
    }
    if (file.children) {
      const result = navPageFromPath(path, file.children);
      if (result) {
        return result;
      }
    }
  }
};
const navKeyFromPath = (path, key, tree) => {
  let value;
  const goDeep = (path2, tree2) => {
    for (const file of tree2) {
      if (path2 !== "/" && file._path === "/") {
        continue;
      }
      if ((path2 == null ? void 0 : path2.startsWith(file._path)) && file[key]) {
        value = file[key];
      }
      if (file._path === path2) {
        return;
      }
      if (file.children) {
        goDeep(path2, file.children);
      }
    }
  };
  goDeep(path, tree);
  return value;
};
const useContentHelpers = () => {
  return {
    navBottomLink,
    navDirFromPath,
    navPageFromPath,
    navKeyFromPath
  };
};
function jsonStringify(value) {
  return JSON.stringify(value, regExpReplacer);
}
function regExpReplacer(_key, value) {
  if (value instanceof RegExp) {
    return `--REGEX ${value.toString()}`;
  }
  return value;
}
const encodeQueryParams = (params) => {
  let encoded = jsonStringify(params);
  encoded = typeof Buffer !== "undefined" ? Buffer.from(encoded).toString("base64") : btoa(encoded);
  encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  const chunks = encoded.match(/.{1,100}/g) || [];
  return chunks.join("/");
};
const useContentPreview = () => {
  const getPreviewToken = () => {
    return useCookie("previewToken").value || false || void 0;
  };
  const setPreviewToken = (token) => {
    useCookie("previewToken").value = token;
    useRoute().query.preview = token || "";
  };
  const isEnabled = () => {
    const query = useRoute().query;
    if (Object.prototype.hasOwnProperty.call(query, "preview") && !query.preview) {
      return false;
    }
    if (query.preview || useCookie("previewToken").value) {
      return true;
    }
    return false;
  };
  return {
    isEnabled,
    getPreviewToken,
    setPreviewToken
  };
};
const withContentBase = (url) => withBase(url, (/* @__PURE__ */ useRuntimeConfig()).public.content.api.baseURL);
const addPrerenderPath = (path) => {
  const event = useRequestEvent();
  event.node.res.setHeader(
    "x-nitro-prerender",
    [
      event.node.res.getHeader("x-nitro-prerender"),
      path
    ].filter(Boolean).join(",")
  );
};
const shouldUseClientDB = () => {
  (/* @__PURE__ */ useRuntimeConfig()).public.content;
  {
    return false;
  }
};
const get$1 = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get$1(a, key), get$1(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};
const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    var _a2;
    if (opts.legacy) {
      if (result == null ? void 0 : result.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result == null ? void 0 : result.dirConfig) {
        result.result = {
          _path: (_a2 = result.dirConfig) == null ? void 0 : _a2._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return (result == null ? void 0 : result._path) || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result == null ? void 0 : result.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).find().then(resolveResult);
    };
    return query;
  }
  return query;
}
const createQueryFetch = () => async (query) => {
  const { content } = (/* @__PURE__ */ useRuntimeConfig()).public;
  const params = query.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/query/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/query/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const db = await import('./_nuxt/client-db-bb78acf6.mjs').then((m) => m.useContentDatabase());
    return db.fetch(query);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useContentPreview().getPreviewToken()
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
function queryContent(query, ...pathParts) {
  const { content } = (/* @__PURE__ */ useRuntimeConfig()).public;
  const queryBuilder = createQuery(createQueryFetch(), {
    initialParams: typeof query !== "string" ? query : {},
    legacy: true
  });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    var _a2, _b, _c;
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!((_a2 = params.sort) == null ? void 0 : _a2.length)) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (content.locales.length) {
      const queryLocale = (_c = (_b = params.where) == null ? void 0 : _b.find((w) => w._locale)) == null ? void 0 : _c._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: content.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}
const fetchContentNavigation = async (queryBuilder) => {
  const { content } = (/* @__PURE__ */ useRuntimeConfig()).public;
  if (typeof (queryBuilder == null ? void 0 : queryBuilder.params) !== "function") {
    queryBuilder = queryContent(queryBuilder);
  }
  const params = queryBuilder.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/navigation/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/navigation/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const generateNavigation = await import('./_nuxt/client-db-bb78acf6.mjs').then((m) => m.generateNavigation);
    return generateNavigation(params);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useContentPreview().getPreviewToken()
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
const layouts = {
  default: () => import('./_nuxt/default-dedac01e.mjs').then((m) => m.default || m),
  page: () => import('./_nuxt/page-d529b072.mjs').then((m) => m.default || m)
};
const documentDriven_6F9UCgkXVS = /* @__PURE__ */ defineNuxtPlugin((nuxt) => {
  var _a2, _b, _c, _d;
  const moduleOptions = (_b = (_a2 = /* @__PURE__ */ useRuntimeConfig()) == null ? void 0 : _a2.public) == null ? void 0 : _b.content.documentDriven;
  (_d = (_c = /* @__PURE__ */ useRuntimeConfig()) == null ? void 0 : _c.public) == null ? void 0 : _d.content.experimental.clientDB;
  const { navigation, pages, globals, surrounds } = useContentState();
  const findLayout = (to, page, navigation2, globals2) => {
    var _a3;
    if (page && (page == null ? void 0 : page.layout)) {
      return page.layout;
    }
    if (to.matched.length && ((_a3 = to.matched[0].meta) == null ? void 0 : _a3.layout)) {
      return to.matched[0].meta.layout;
    }
    if (navigation2 && page) {
      const { navKeyFromPath: navKeyFromPath2 } = useContentHelpers();
      const layoutFromNav = navKeyFromPath2(page._path, "layout", navigation2);
      if (layoutFromNav) {
        return layoutFromNav;
      }
    }
    if (moduleOptions.layoutFallbacks && globals2) {
      let layoutFallback;
      for (const fallback of moduleOptions.layoutFallbacks) {
        if (globals2[fallback] && globals2[fallback].layout) {
          layoutFallback = globals2[fallback].layout;
          break;
        }
      }
      if (layoutFallback) {
        return layoutFallback;
      }
    }
    return "default";
  };
  const refresh = async (to, dedup = false) => {
    nuxt.callHook("content:document-driven:start", { route: to, dedup });
    const routeConfig = to.meta.documentDriven || {};
    if (to.meta.documentDriven === false) {
      return;
    }
    const _path = withoutTrailingSlash(to.path);
    const promises = [];
    if (moduleOptions.navigation && routeConfig.navigation !== false) {
      const navigationQuery = () => {
        const { navigation: navigation2 } = useContentState();
        if (navigation2.value && !dedup) {
          return navigation2.value;
        }
        return fetchContentNavigation().then((_navigation) => {
          navigation2.value = _navigation;
          return _navigation;
        }).catch(() => null);
      };
      promises.push(navigationQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.globals) {
      const globalsQuery = () => {
        const { globals: globals2 } = useContentState();
        if (typeof moduleOptions.globals === "object" && Array.isArray(moduleOptions.globals)) {
          console.log("Globals must be a list of keys with QueryBuilderParams as a value.");
          return;
        }
        return Promise.all(
          Object.entries(moduleOptions.globals).map(
            ([key, query]) => {
              if (!dedup && globals2.value[key]) {
                return globals2.value[key];
              }
              let type = "findOne";
              if (query == null ? void 0 : query.type) {
                type = query.type;
              }
              return queryContent(query)[type]().catch(() => null);
            }
          )
        ).then(
          (values) => {
            return values.reduce(
              (acc, value, index) => {
                const key = Object.keys(moduleOptions.globals)[index];
                acc[key] = value;
                return acc;
              },
              {}
            );
          }
        );
      };
      promises.push(globalsQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.page && routeConfig.page !== false) {
      let where = { _path };
      if (typeof routeConfig.page === "string") {
        where = { _path: routeConfig.page };
      }
      if (typeof routeConfig.page === "object") {
        where = routeConfig.page;
      }
      const pageQuery = () => {
        const { pages: pages2 } = useContentState();
        if (!dedup && pages2.value[_path] && pages2.value[_path]._path === _path) {
          return pages2.value[_path];
        }
        return queryContent().where(where).findOne().catch(() => null);
      };
      promises.push(pageQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    if (moduleOptions.surround && routeConfig.surround !== false) {
      let surround = _path;
      if (["string", "object"].includes(typeof routeConfig.page)) {
        surround = routeConfig.page;
      }
      if (["string", "object"].includes(typeof routeConfig.surround)) {
        surround = routeConfig.surround;
      }
      const surroundQuery = () => {
        const { surrounds: surrounds2 } = useContentState();
        if (!dedup && surrounds2.value[_path]) {
          return surrounds2.value[_path];
        }
        return queryContent().where({
          _partial: { $not: true },
          navigation: { $not: false }
        }).without(["body"]).findSurround(surround).catch(() => null);
      };
      promises.push(surroundQuery);
    } else {
      promises.push(() => Promise.resolve(null));
    }
    return await Promise.all(promises.map((promise) => promise())).then(async ([
      _navigation,
      _globals,
      _page,
      _surround
    ]) => {
      var _a3, _b2;
      if (_navigation) {
        navigation.value = _navigation;
      }
      if (_globals) {
        globals.value = _globals;
      }
      if (_surround) {
        surrounds.value[_path] = _surround;
      }
      const redirectTo = (_page == null ? void 0 : _page.redirect) || ((_b2 = (_a3 = _page == null ? void 0 : _page._dir) == null ? void 0 : _a3.navigation) == null ? void 0 : _b2.redirect);
      if (redirectTo) {
        pages.value[_path] = _page;
        return redirectTo;
      }
      if (_page) {
        const layoutName = findLayout(to, _page, _navigation, _globals);
        const layout = layouts[layoutName];
        if (layout && typeof layout === "function") {
          await layout();
        }
        to.meta.layout = layoutName;
        _page.layout = layoutName;
      }
      pages.value[_path] = _page;
      await nuxt.callHook("content:document-driven:finish", { route: to, dedup, page: _page, navigation: _navigation, globals: _globals, surround: _surround });
    });
  };
  addRouteMiddleware(async (to, from) => {
    const redirect = await refresh(to, false);
    if (redirect) {
      if (hasProtocol(redirect)) {
        return callWithNuxt(nuxt, navigateTo, [redirect, { external: true }]);
      } else {
        return redirect;
      }
    }
  });
  nuxt.hook("app:data:refresh", async () => false);
});
const referencesRegex = new RegExp(
  "\\{([^}]+)\\}",
  "g"
);
const DARK = "@dark";
const LIGHT = "@light";
const INITIAL = "@initial";
function set(object, paths, value, splitter = ".") {
  if (typeof paths === "string") {
    paths = paths.split(splitter);
  }
  const limit = paths.length - 1;
  for (let i = 0; i < limit; ++i) {
    const key2 = paths[i];
    object = object[key2] ?? (object[key2] = {});
  }
  const key = paths[limit];
  object[key] = value;
}
function get(object, paths, splitter = ".") {
  if (typeof paths === "string") {
    paths = paths.split(splitter);
  }
  const limit = paths.length - 1;
  for (let i = 0; i < limit; ++i) {
    const key2 = paths[i];
    object = object[key2] ?? (object[key2] = {});
  }
  const key = paths[limit];
  return object[key];
}
function walkTokens(obj, cb, paths = []) {
  let result = {};
  if (obj.value) {
    result = cb(obj, result, paths);
  } else {
    for (const k in obj) {
      if (obj[k] && typeof obj[k] === "object") {
        result[k] = walkTokens(obj[k], cb, [...paths, k]);
      }
    }
  }
  return result;
}
function normalizeConfig(obj, mqKeys, removeSchemaKeys = false) {
  let result = {};
  if (obj.value) {
    result = obj;
  } else {
    for (const k in obj) {
      if (k === "$schema") {
        if (!removeSchemaKeys) {
          result[k] = obj[k];
        }
        continue;
      }
      if (k === "utils") {
        result[k] = obj[k];
        continue;
      }
      if (obj[k] && (typeof obj[k] === "string" || typeof obj[k] === "number" || typeof obj[k] === "boolean" || typeof obj[k] === "symbol" || typeof obj[k] === "bigint")) {
        result[k] = { value: obj[k] };
      } else if (obj[k] && typeof obj[k] === "object") {
        const keys = Object.keys(obj[k]);
        if (keys.includes("initial") && keys.some((key) => mqKeys.includes(key))) {
          result[k] = { value: obj[k] };
          continue;
        }
        result[k] = normalizeConfig(obj[k], mqKeys, removeSchemaKeys);
      }
    }
  }
  return result;
}
function createTokensHelper(theme2 = {}, options = {}) {
  const defaultHelperOptions = {
    key: "attributes.variable",
    onNotFound: false,
    ...options
  };
  function $tokens(path = void 0, options2) {
    if (!path) {
      return unref(theme2);
    }
    const $tokensOptions = { ...defaultHelperOptions, ...options2 };
    const { key, onNotFound } = $tokensOptions;
    const token = get(unref(theme2), path);
    if (!token && typeof onNotFound === "function") {
      onNotFound(path, $tokensOptions);
      return;
    }
    return key ? token ? token[key] ? token[key] : get(token, key) : token : token;
  }
  return $tokens.bind(this);
}
function pathToVarName(path) {
  if (Array.isArray(path)) {
    path = path.join("-");
  }
  if (path.charAt(0) === "{" && path.charAt(path.length - 1) === "}") {
    path = path.substr(1, path.length - 2);
  }
  return `--${path.split(".").join("-")}`;
}
function resolveCssProperty(property, value, style, selectors, localTokens = [], ctx, loc) {
  var _a2;
  const directive = resolveCustomDirectives(property, value, selectors, ctx, loc);
  if (directive) {
    return directive;
  }
  if ((_a2 = ctx == null ? void 0 : ctx.utils) == null ? void 0 : _a2[property]) {
    if (typeof ctx.utils[property] === "function") {
      return ctx.utils[property](value);
    }
    return value ? ctx.utils[property] : {};
  }
  value = castValues(property, value, localTokens, ctx, loc);
  return {
    [property]: value
  };
}
function castValues(property, value, localTokens, ctx, loc) {
  if (Array.isArray(value) || typeof value === "string" || typeof value === "number") {
    if (Array.isArray(value)) {
      value = value.map((v) => castValue(property, v, localTokens, ctx, loc)).join(",");
    } else {
      value = castValue(property, value, localTokens, ctx, loc);
    }
  }
  return value;
}
function castValue(property, value, localTokens, ctx, loc) {
  if (typeof value === "number") {
    return value;
  }
  if (value.match(referencesRegex)) {
    value = resolveReferences(property, value, localTokens, ctx, loc);
  }
  if (value === "{}") {
    return "";
  }
  return value;
}
function resolveReferences(_, value, localTokens, ctx, loc) {
  if (!(typeof value === "string")) {
    return value;
  }
  value = value.replace(
    referencesRegex,
    (_2, tokenPath) => {
      const varName = pathToVarName(tokenPath);
      const variable = `var(${varName})`;
      if (localTokens.includes(varName)) {
        return variable;
      }
      const token = ctx.$tokens(tokenPath, { key: void 0, loc });
      const tokenValue = typeof token === "string" ? token : (token == null ? void 0 : token.variable) || (token == null ? void 0 : token.value);
      if (!tokenValue) {
        return variable;
      }
      return tokenValue;
    }
  );
  return value;
}
function resolveCustomDirectives(property, value, selectors, ctx, loc) {
  if (property.startsWith("@")) {
    const resolveColorScheme = (scheme) => {
      scheme = ctx.options.colorSchemeMode === "class" ? `:root.${scheme}` : `@media (prefers-color-scheme: ${scheme})`;
      const isMedia = scheme.startsWith("@media");
      if (ctx == null ? void 0 : ctx.runtime) {
        return {
          "@media": {
            [scheme]: value
          }
        };
      }
      return {
        [isMedia ? scheme : `${scheme} &`]: value
      };
    };
    if (property === DARK) {
      return resolveColorScheme("dark");
    }
    if (property === LIGHT) {
      return resolveColorScheme("light");
    }
    if (property === INITIAL) {
      const token = ctx.$tokens("media.initial", { key: "value", onNotFound: false, loc });
      return {
        [`@media${token ? ` ${token}` : ""}`]: value
      };
    }
    const mediaQueries = ctx.$tokens("media", { key: void 0, loc });
    if (mediaQueries) {
      const query = property.replace("@", "");
      if (mediaQueries[query]) {
        return {
          [`@media ${mediaQueries[query].value}`]: value
        };
      }
    }
    return {
      [property]: value
    };
  }
}
function resolveThemeRule(mq, content, theme2, colorSchemeMode) {
  var _a2;
  let responsiveSelector = "";
  if (mq === "dark" || mq === "light") {
    if (colorSchemeMode === "class") {
      responsiveSelector = `:root.${mq}`;
    } else {
      responsiveSelector = `(prefers-color-scheme: ${mq})`;
    }
  } else if (mq !== "initial" && theme2) {
    const queryToken = (_a2 = theme2 == null ? void 0 : theme2.media) == null ? void 0 : _a2[mq];
    if (queryToken) {
      responsiveSelector = queryToken.value;
    }
  }
  let prefix;
  if (!responsiveSelector) {
    prefix = "@media { :root {";
  } else if (responsiveSelector.startsWith(".")) {
    prefix = `@media { :root${responsiveSelector} {`;
  } else if (responsiveSelector.startsWith(":root")) {
    prefix = `@media { ${responsiveSelector} {`;
  } else {
    prefix = `@media ${responsiveSelector} { :root {`;
  }
  return `${`${`${prefix}--pinceau-mq: ${String(mq)}; ${content}`} } }`}
`;
}
const comma = /\s*,\s*(?![^()]*\))/;
const getResolvedSelectors = (parentSelectors, nestedSelectors) => parentSelectors.reduce(
  (resolvedSelectors, parentSelector) => {
    resolvedSelectors.push(
      ...nestedSelectors.map(
        (selector) => selector.includes("&") ? selector.replace(
          /&/g,
          /[ +>|~]/.test(parentSelector) && /&.*&/.test(selector) ? `:is(${parentSelector})` : parentSelector
        ) : `${parentSelector} ${selector}`
      )
    );
    return resolvedSelectors;
  },
  []
);
const { prototype: { toString } } = Object;
const stringify = (value, replacer = void 0) => {
  const used = /* @__PURE__ */ new WeakSet();
  const write = (cssText, selectors, conditions, name, data, isAtRuleLike, isVariableLike) => {
    for (let i = 0; i < conditions.length; ++i) {
      if (!used.has(conditions[i])) {
        used.add(conditions[i]);
        cssText += `${conditions[i]}{`;
      }
    }
    if (selectors.length && !used.has(selectors)) {
      used.add(selectors);
      cssText += `${selectors}{`;
    }
    if (isAtRuleLike) {
      name = `${name} `;
    } else if (isVariableLike) {
      name = `${name}:`;
    } else {
      name = `${kebabCase(name)}:`;
    }
    cssText += `${name + String(data)};`;
    return cssText;
  };
  const parse2 = (style, selectors, conditions, prevName, prevData) => {
    let cssText = "";
    for (const name in style) {
      const isAtRuleLike = name.charCodeAt(0) === 64;
      const isVariableLike = name.charCodeAt(0) === 45 && name.charCodeAt(1) === 45;
      for (const data of isAtRuleLike && Array.isArray(style[name]) ? style[name] : [style[name]]) {
        if (replacer && (name !== prevName || data !== prevData)) {
          const next = replacer(name, data, style, selectors);
          if (next !== null) {
            cssText += typeof next === "object" && next ? parse2(next, selectors, conditions, name, data) : next == null ? "" : next;
            continue;
          }
        }
        const isObjectLike = typeof data === "object" && data && data.toString === toString;
        if (isObjectLike) {
          if (used.has(selectors)) {
            used.delete(selectors);
            cssText += "}";
          }
          const usedName = Object(name);
          let nextSelectors;
          if (isAtRuleLike) {
            nextSelectors = selectors;
            cssText += parse2(
              data,
              nextSelectors,
              conditions.concat(usedName)
            );
          } else {
            nextSelectors = selectors.length ? getResolvedSelectors(selectors, name.split(comma)) : name.split(comma);
            cssText += parse2(
              data,
              nextSelectors,
              conditions
            );
          }
          if (used.has(usedName)) {
            used.delete(usedName);
            cssText += "}";
          }
          if (used.has(nextSelectors)) {
            used.delete(nextSelectors);
            cssText += "}";
          }
        } else {
          cssText = write(cssText, selectors, conditions, name, data, isAtRuleLike, isVariableLike);
        }
      }
    }
    return cssText;
  };
  return parse2(value, [], []);
};
const HYDRATION_SELECTOR = ".phy[--]";
function usePinceauRuntimeSheet($tokens, initialUtils = {}, colorSchemeMode, appId) {
  const sheet = ref();
  const utils2 = ref(initialUtils);
  const cache = {};
  const stringify$1 = (decl, loc) => stringify(
    decl,
    (property, value, style, selectors) => resolveCssProperty(
      property,
      value,
      style,
      selectors,
      [],
      { $tokens, utils: utils2.value, options: { colorSchemeMode, runtime: true } },
      loc
    )
  );
  function resolveStylesheet() {
    const global2 = globalThis || window;
    let style;
    let hydratableSheet;
    if (global2 && global2.document) {
      const fullId = `pinceau-runtime${appId ? `-${appId}` : ""}`;
      const doc = global2.document;
      style = doc.querySelector(`style#${fullId}`);
      if (!style) {
        const styleNode = doc.createElement("style");
        styleNode.id = fullId;
        styleNode.type = "text/css";
        style = doc.head.appendChild(styleNode);
      }
      hydratableSheet = doc.querySelector(`style#pinceau-runtime-hydratable${appId ? `-${appId}` : ""}`);
    }
    sheet.value = (style == null ? void 0 : style.sheet) || getSSRStylesheet();
    return hydratableSheet ? hydrateStylesheet(hydratableSheet) : void 0;
  }
  function hydrateStylesheet(el) {
    var _a2, _b;
    const hydratableRules2 = {};
    for (const _rule of Object.entries(((_a2 = el == null ? void 0 : el.sheet) == null ? void 0 : _a2.cssRules) || ((_b = sheet.value) == null ? void 0 : _b.cssRules) || {})) {
      const [index, rule] = _rule;
      const uids = resolveUid(rule);
      if (!uids || !uids.uid) {
        continue;
      }
      if (!hydratableRules2[uids.uid]) {
        hydratableRules2[uids.uid] = {};
      }
      const newIndex = sheet.value.insertRule(rule.cssText, Number(index));
      hydratableRules2[uids.uid][uids.type] = sheet.value.cssRules.item(newIndex);
    }
    if (el) {
      el.remove();
    }
    return hydratableRules2;
  }
  function toString2() {
    if (!sheet.value) {
      return "";
    }
    return Object.entries(sheet.value.cssRules).reduce(
      (acc, [, rule]) => {
        acc += `${rule == null ? void 0 : rule.cssText} ` || "";
        return acc;
      },
      ""
    );
  }
  function pushDeclaration(uid, type, declaration, previousRule, loc) {
    if (!Object.keys(declaration).length) {
      return;
    }
    const cssText = stringify$1(
      {
        "@media": {
          // Mark inserted declaration with unique id and type of runtime style
          [HYDRATION_SELECTOR]: { "--puid": `${uid}-${type}` },
          ...declaration
        }
      },
      loc
    );
    if (!cssText) {
      return;
    }
    if (previousRule) {
      deleteRule(previousRule);
    }
    const ruleId = sheet.value.insertRule(cssText);
    return sheet.value.cssRules[ruleId];
  }
  function deleteRule(rule) {
    const ruleIndex = Object.values(sheet.value.cssRules).indexOf(rule);
    if (typeof ruleIndex === "undefined" || isNaN(ruleIndex)) {
      return;
    }
    try {
      sheet.value.deleteRule(ruleIndex);
    } catch (e) {
    }
  }
  const hydratableRules = resolveStylesheet();
  return {
    stringify: stringify$1,
    cache,
    pushDeclaration,
    deleteRule,
    sheet,
    toString: toString2,
    hydratableRules
  };
}
function getSSRStylesheet() {
  return {
    cssRules: [],
    insertRule(cssText, index = this.cssRules.length) {
      this.cssRules.splice(index, 1, { cssText });
      return index;
    },
    deleteRule(index) {
      delete this.cssRules[index];
    }
  };
}
function resolveUid(rule) {
  const uidRule = rule.cssRules && rule.cssRules.length ? Object.entries(rule == null ? void 0 : rule.cssRules).find(([_, rule2]) => rule2.selectorText === HYDRATION_SELECTOR) : void 0;
  if (!uidRule) {
    return;
  }
  const uidRegex = /--puid:(.*)?-(c|v|p)?/m;
  const [, uid, type] = uidRule[1].cssText.match(uidRegex);
  if (!uid) {
    return;
  }
  return { uid, type };
}
function usePinceauRuntimeIds(instance, classes, _) {
  var _a2, _b, _c;
  let uid;
  const el = (_a2 = instance == null ? void 0 : instance.vnode) == null ? void 0 : _a2.el;
  if (el && el.classList) {
    el.classList.forEach(
      (elClass) => {
        if (uid) {
          return;
        }
        if (elClass.startsWith("pc-")) {
          uid = elClass.split("pc-")[1];
        }
      }
    );
  } else {
    uid = nanoid(6);
  }
  const scopeId = (_c = (_b = instance == null ? void 0 : instance.vnode) == null ? void 0 : _b.type) == null ? void 0 : _c.__scopeId;
  const ids = {
    uid,
    componentId: scopeId ? `[${scopeId}]` : "",
    uniqueClassName: `pc-${uid}`
  };
  classes.value.c = ids.uniqueClassName;
  return computed(() => ids);
}
function usePinceauThemeSheet(initialTheme, tokensHelperConfig = {}, colorSchemeMode) {
  const sheet = ref();
  const theme2 = ref(initialTheme || {});
  tokensHelperConfig = Object.assign(
    {
      key: "variable"
    },
    tokensHelperConfig || {}
  );
  const $tokens = createTokensHelper(
    theme2,
    tokensHelperConfig
  );
  let cache = {};
  resolveStylesheet();
  function findThemeSheet(document2) {
    var _a2;
    for (const sheet2 of document2.styleSheets) {
      if ((_a2 = sheet2 == null ? void 0 : sheet2.ownerNode) == null ? void 0 : _a2.textContent.includes("--pinceau-mq")) {
        return sheet2.ownerNode;
      }
    }
  }
  function resolveStylesheet() {
    var _a2;
    const global2 = globalThis || window;
    if (global2 && global2.document) {
      let sheetElement = document.querySelector("#pinceau-theme");
      if (!sheetElement) {
        sheetElement = findThemeSheet(document);
      }
      sheet.value = sheetElement == null ? void 0 : sheetElement.sheet;
      if (sheet.value) {
        hydrateStylesheet((_a2 = sheet.value) == null ? void 0 : _a2.cssRules);
      }
    }
  }
  function hydrateStylesheet(cssRules) {
    cache = {};
    Object.entries(cssRules || {}).forEach(
      ([_, rule]) => {
        var _a2, _b;
        if ((rule == null ? void 0 : rule.type) !== 4 && !((_a2 = rule == null ? void 0 : rule.cssText) == null ? void 0 : _a2.includes("--pinceau-mq"))) {
          return false;
        }
        let currentTheme = "initial";
        (_b = rule.cssText.match(/--([\w-]+)\s*:\s*(.+?);/gm)) == null ? void 0 : _b.forEach((match) => {
          var _a3;
          const [variable, value] = match.replace(";", "").split(/:\s(.*)/s);
          if (variable === "--pinceau-mq") {
            currentTheme = value;
            if (!cache[value]) {
              const ruleReference = (_a3 = Object.entries((rule == null ? void 0 : rule.cssRules) || {}).find(([_2, cssRule]) => cssRule == null ? void 0 : cssRule.cssText.includes(`--pinceau-mq: ${value}`))) == null ? void 0 : _a3[1];
              if (ruleReference) {
                cache[value] = ruleReference;
              }
            }
            return;
          }
          const path = [...variable.substring(2).split("-")];
          set(theme2.value, path, getSetValue(path, value, variable, currentTheme));
        });
      }
    );
  }
  function updateTheme(value) {
    var _a2;
    const mqKeys = Array.from(/* @__PURE__ */ new Set(["dark", "light", ...Object.keys((value == null ? void 0 : value.media) || {}), ...Object.keys(((_a2 = theme2.value) == null ? void 0 : _a2.media) || {})]));
    const config = normalizeConfig(value || {}, mqKeys, true);
    walkTokens(config, (token, _, paths) => updateToken(paths, token.value));
  }
  function updateToken(path, value, mq = "initial") {
    var _a2;
    if (typeof value === "object") {
      Object.entries(value).forEach(([mq2, mqValue]) => updateToken(path, mqValue, mq2));
      return;
    }
    const varName = pathToVarName(path);
    if (!(cache == null ? void 0 : cache[mq])) {
      createMqRule(mq);
    }
    const resolvedValue = resolveReferences(void 0, value, [], { $tokens });
    set(
      theme2.value,
      path,
      getSetValue(path, resolvedValue, varName, mq)
    );
    (_a2 = cache == null ? void 0 : cache[mq]) == null ? void 0 : _a2.style.setProperty(varName, resolvedValue);
  }
  function reactiveToken(path) {
    return computed(
      {
        get() {
          return get(theme2.value, `${path}.value`);
        },
        set(v) {
          updateToken(path, v);
        }
      }
    );
  }
  function getSetValue(path, value, variable, mq = "initial") {
    const setValue = { value, variable: `var(${variable})` };
    const existingValue = get(theme2.value, path);
    if (existingValue && !variable.startsWith("--media")) {
      if (typeof (existingValue == null ? void 0 : existingValue.value) === "object") {
        setValue.value = { ...existingValue.value, [mq]: value };
      } else {
        setValue.value = { initial: existingValue.value, [mq]: value };
      }
    }
    return setValue;
  }
  function createMqRule(mq) {
    if (cache == null ? void 0 : cache[mq]) {
      return cache == null ? void 0 : cache[mq];
    }
    const mqRule = resolveThemeRule(mq, "", theme2.value, colorSchemeMode);
    const newRule = sheet.value.insertRule(mqRule, sheet.value.cssRules.length);
    cache[mq] = sheet.value.cssRules.item(newRule).cssRules[0];
    return cache[mq];
  }
  return {
    $tokens,
    updateToken,
    updateTheme,
    reactiveToken,
    resolveStylesheet,
    theme: theme2
  };
}
function usePinceauComputedStyles(ids, computedStyles, sheet, loc) {
  var _a2, _b;
  let rule = (_b = (_a2 = sheet.hydratableRules) == null ? void 0 : _a2[ids.value.uid]) == null ? void 0 : _b.c;
  watch(
    () => computedStyles,
    (newComputedStyles) => {
      newComputedStyles = computedStylesToDeclaration(ids.value, newComputedStyles);
      rule = sheet.pushDeclaration(
        ids.value.uid,
        "c",
        newComputedStyles,
        rule,
        { ...loc, type: "c" }
      );
    },
    {
      immediate: !rule,
      deep: true
    }
  );
  onScopeDispose(() => rule && sheet.deleteRule(rule));
}
function computedStylesToDeclaration(ids, computedStyles) {
  const declaration = {};
  const targetId = `.${ids.uniqueClassName}${ids.componentId}`;
  if (computedStyles && Object.keys(computedStyles).length) {
    declaration[targetId] = declaration[targetId] || {};
    for (const [varName, _value] of Object.entries(computedStyles)) {
      const value = unref(_value);
      if (varName === "css") {
        declaration[targetId] = Object.assign(declaration[targetId], value);
        continue;
      }
      if (typeof value === "object") {
        for (const [mqId, mqPropValue] of Object.entries(value)) {
          const _value2 = unref(mqPropValue);
          if (!_value2) {
            continue;
          }
          if (mqId === "initial") {
            if (!declaration[targetId]) {
              declaration[targetId] = {};
            }
            if (!declaration[targetId]) {
              declaration[targetId] = {};
            }
            declaration[targetId][`--${varName}`] = _value2;
          }
          const mediaId = `@${mqId}`;
          if (!declaration[mediaId]) {
            declaration[mediaId] = {};
          }
          if (!declaration[mediaId][targetId]) {
            declaration[mediaId][targetId] = {};
          }
          declaration[mediaId][targetId][`--${kebabCase(varName)}`] = _value2;
        }
      } else {
        const _value2 = unref(value);
        if (_value2) {
          declaration[targetId][`--${kebabCase(varName)}`] = _value2;
        }
      }
    }
  }
  return declaration;
}
const usePinceauVariants = (ids, variants, props, sheet, classes, loc) => {
  var _a2, _b;
  let rule = (_b = (_a2 = sheet.hydratableRules) == null ? void 0 : _a2[ids.value.uid]) == null ? void 0 : _b.v;
  const variantsState = computed(() => variants ? resolveVariantsState(ids.value, props, variants) : {});
  const variantsClasses = ref([]);
  watch(
    variantsState,
    ({ cacheId, variantsProps }) => {
      let variantClass;
      if (sheet.cache[cacheId]) {
        const cachedRule = sheet.cache[cacheId];
        rule = cachedRule.rule;
        variantClass = cachedRule.variantClass;
        if (cachedRule == null ? void 0 : cachedRule.classes) {
          variantsClasses.value = cachedRule.classes;
        }
        cachedRule.count++;
      } else {
        variantClass = `pv-${nanoid(6)}`;
        const { declaration, classes: classes2 } = variantsToDeclaration(variantClass, ids.value, variants, variantsProps);
        variantsClasses.value = classes2;
        rule = sheet.pushDeclaration(ids.value.uid, "v", declaration, void 0, { ...loc, type: "v" });
        sheet.cache[cacheId] = { rule, variantClass, classes: classes2, count: 1 };
      }
      classes.value.v = variantClass;
    },
    {
      immediate: true
    }
  );
  onScopeDispose(
    () => {
      var _a3;
      const state = variantsState == null ? void 0 : variantsState.value;
      const cachedRule = (_a3 = sheet.cache) == null ? void 0 : _a3[state.cacheId];
      if (cachedRule) {
        cachedRule.count--;
        if (cachedRule.count <= 0) {
          sheet.deleteRule(cachedRule.rule);
          delete sheet.cache[state.cacheId];
        }
      }
    }
  );
  return { variantsClasses };
};
function variantsToDeclaration(variantClass, ids, variants, props) {
  var _a2, _b;
  let classes = [];
  const declaration = {};
  if (props && Object.keys(props).length) {
    const targetId = `.${variantClass}`;
    for (const [propName, propValue] of Object.entries(props)) {
      if (typeof propValue === "object") {
        for (const [mqId, mqPropValue] of Object.entries(propValue)) {
          const _value = (mqPropValue == null ? void 0 : mqPropValue.toString()) || mqPropValue;
          const variantValue = variants[propName][_value];
          if (!variantValue) {
            continue;
          }
          if (!declaration[targetId]) {
            declaration[targetId] = {};
          }
          if (typeof variantValue === "string" || Array.isArray(variantValue) || (variantValue == null ? void 0 : variantValue.$class)) {
            const classAttr = typeof variantValue === "string" || Array.isArray(variantValue) ? variantValue : variantValue.$class;
            classes = [
              ...classes,
              ...typeof classAttr === "string" ? classAttr.split(" ") : classAttr
            ];
            delete variantValue.$class;
          }
          if (mqId === "initial") {
            if (!declaration[targetId]) {
              declaration[targetId] = {};
            }
            declaration[targetId] = defu(declaration[targetId], variantValue);
          }
          const mediaId = `@${mqId}`;
          if (!declaration[mediaId]) {
            declaration[mediaId] = {};
          }
          if (!declaration[mediaId][targetId]) {
            declaration[mediaId][targetId] = {};
          }
          declaration[mediaId][targetId] = defu(declaration[mediaId][targetId], variantValue);
        }
      } else {
        const _value = ((_a2 = propValue == null ? void 0 : propValue.toString) == null ? void 0 : _a2.call(propValue)) || propValue;
        const variantValue = (_b = variants == null ? void 0 : variants[propName]) == null ? void 0 : _b[_value];
        if (!variantValue) {
          continue;
        }
        if (!declaration[targetId]) {
          declaration[targetId] = {};
        }
        declaration[targetId] = defu(declaration[targetId], variantValue);
      }
    }
  }
  return { declaration, classes };
}
function resolveVariantsState(ids, props, variants) {
  if (!props || !variants) {
    return {};
  }
  let cacheId = ids.componentId;
  const variantsProps = Object.entries(props).reduce(
    (acc, [propName, propValue]) => {
      if (!variants[propName]) {
        return acc;
      }
      if (typeof propValue === "object") {
        Object.entries(propValue).forEach(([key, value]) => cacheId += `${propName}:${key}:${value}|`);
      } else {
        cacheId += `${propName}:${propValue}|`;
      }
      acc[propName] = propValue;
      return acc;
    },
    {}
  );
  return { cacheId, variantsProps };
}
function usePinceauCssProp(ids, props, sheet, loc) {
  var _a2, _b;
  let rule = (_b = (_a2 = sheet.hydratableRules) == null ? void 0 : _a2[ids.value.uid]) == null ? void 0 : _b.p;
  const css = computed(() => props == null ? void 0 : props.css);
  watch(
    css,
    (newCss) => {
      newCss = transformCssPropToDeclaration(ids.value, newCss);
      if (rule) {
        sheet.deleteRule(rule);
      }
      rule = sheet.pushDeclaration(
        ids.value.uid,
        "p",
        newCss,
        rule,
        { ...loc, type: "c" }
      );
    },
    {
      immediate: !rule
    }
  );
  onScopeDispose(() => rule && sheet.deleteRule(rule));
}
function transformCssPropToDeclaration(ids, css) {
  const declaration = {};
  if (css) {
    const targetId = `.${ids.uniqueClassName}${ids.componentId}`;
    declaration[targetId] = Object.assign(declaration[targetId] || {}, css);
  }
  return declaration;
}
const defaultRuntimeOptions = {
  theme: {},
  utils: {},
  tokensHelperConfig: {},
  multiApp: false,
  colorSchemeMode: "media",
  dev: "prerender" !== "production"
};
const plugin = {
  install(app, options) {
    options = Object.assign(defaultRuntimeOptions, options);
    const { theme: theme2, tokensHelperConfig, dev, multiApp, colorSchemeMode, utils: utils2 } = options;
    const themeSheet = usePinceauThemeSheet(theme2, tokensHelperConfig, colorSchemeMode);
    if (dev && true) {
      import('./_nuxt/debug-43adc91a.mjs').then(({ usePinceauRuntimeDebug }) => usePinceauRuntimeDebug(tokensHelperConfig));
    }
    const multiAppId = multiApp ? nanoid(6) : void 0;
    const runtimeSheet = usePinceauRuntimeSheet(themeSheet.$tokens, utils2, colorSchemeMode, multiAppId);
    function usePinceauRuntime2(props = {}, variants, computedStyles) {
      const instance = getCurrentInstance();
      let loc;
      if (dev && true) {
        const { __file: file, __name: name } = instance.vnode.type;
        loc = { file, name };
      }
      const classes = ref({
        // Variants class
        v: "",
        // Unique class
        c: ""
      });
      const ids = usePinceauRuntimeIds(instance, classes);
      if (computedStyles && Object.keys(computedStyles).length > 0) {
        usePinceauComputedStyles(ids, computedStyles, runtimeSheet, loc);
      }
      let dynamicVariantClasses;
      if (variants && Object.keys(variants).length > 0) {
        const { variantsClasses } = usePinceauVariants(ids, variants, props, runtimeSheet, classes, loc);
        dynamicVariantClasses = variantsClasses;
      }
      if ((props == null ? void 0 : props.css) && Object.keys(props == null ? void 0 : props.css).length > 0) {
        usePinceauCssProp(ids, props, runtimeSheet, loc);
      }
      return { $pinceau: computed(() => {
        var _a2;
        return [classes.value.v, classes.value.c, (_a2 = dynamicVariantClasses == null ? void 0 : dynamicVariantClasses.value) == null ? void 0 : _a2.join(" ")].join(" ");
      }) };
    }
    app.config.globalProperties.$pinceauRuntime = usePinceauRuntime2;
    app.config.globalProperties.$pinceauTheme = themeSheet;
    app.config.globalProperties.$pinceauSsr = { get: () => runtimeSheet.toString() };
    app.provide("pinceauRuntime", usePinceauRuntime2);
    app.provide("pinceauTheme", themeSheet);
  }
};
function usePinceauRuntime(props, variants, computedStyles) {
  return inject("pinceauRuntime")(props, variants, computedStyles);
}
function usePinceauTheme() {
  return inject("pinceauTheme");
}
function computedStyle(defaultValue, required = false) {
  return {
    type: [String, Object],
    default: defaultValue,
    required
  };
}
const my = (value) => {
  return {
    marginTop: value,
    marginBottom: value
  };
};
const mx = (value) => {
  return {
    marginLeft: value,
    marginRight: value
  };
};
const py = (value) => {
  return {
    paddingTop: value,
    paddingBottom: value
  };
};
const px = (value) => {
  return {
    paddingLeft: value,
    paddingRight: value
  };
};
const truncate = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
const lineClamp = (lines) => ({
  "overflow": "hidden",
  "display": "-webkit-box",
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": lines
});
const text = (size) => ({
  fontSize: `{text.${size}.fontSize}`,
  lineHeight: `{text.${size}.lineHeight}`
});
const stateColors = (value) => {
  return {
    color: `{elements.state.${value}.color.primary} !important`,
    backgroundColor: `{elements.state.${value}.backgroundColor.primary} !important`,
    borderColor: `{elements.state.${value}.borderColor.primary} !important`,
    ":deep(p code)": {
      color: `{elements.state.${value}.color.secondary} !important`,
      backgroundColor: `{elements.state.${value}.backgroundColor.secondary} !important`
    },
    ":deep(code)": {
      color: `{elements.state.${value}.color.primary} !important`,
      backgroundColor: `{elements.state.${value}.backgroundColor.secondary} !important`
    },
    ":deep(a code)": {
      borderColor: `{elements.state.${value}.borderColor.primary} !important`
    },
    ":deep(a)": {
      borderColor: "currentColor",
      code: {
        backgroundColor: `{elements.state.${value}.backgroundColor.primary} !important`
      },
      "&:hover": {
        color: `{elements.state.${value}.color.secondary} !important`,
        borderColor: "currentColor !important",
        code: {
          backgroundColor: `{elements.state.${value}.backgroundColor.secondary} !important`,
          color: `{elements.state.${value}.color.secondary} !important`,
          borderColor: `{elements.state.${value}.borderColor.secondary} !important`
        }
      }
    }
  };
};
const utils = { my, mx, py, px, truncate, lineClamp, text, stateColors };
const theme = {
  "media": {
    "xs": {
      "value": "(min-width: 475px)",
      "variable": "var(--media-xs)",
      "raw": "(min-width: 475px)"
    },
    "sm": {
      "value": "(min-width: 640px)",
      "variable": "var(--media-sm)",
      "raw": "(min-width: 640px)"
    },
    "md": {
      "value": "(min-width: 768px)",
      "variable": "var(--media-md)",
      "raw": "(min-width: 768px)"
    },
    "lg": {
      "value": "(min-width: 1024px)",
      "variable": "var(--media-lg)",
      "raw": "(min-width: 1024px)"
    },
    "xl": {
      "value": "(min-width: 1280px)",
      "variable": "var(--media-xl)",
      "raw": "(min-width: 1280px)"
    },
    "2xl": {
      "value": "(min-width: 1536px)",
      "variable": "var(--media-2xl)",
      "raw": "(min-width: 1536px)"
    },
    "rm": {
      "value": "(prefers-reduced-motion: reduce)",
      "variable": "var(--media-rm)",
      "raw": "(prefers-reduced-motion: reduce)"
    },
    "landscape": {
      "value": "only screen and (orientation: landscape)",
      "variable": "var(--media-landscape)",
      "raw": "only screen and (orientation: landscape)"
    },
    "portrait": {
      "value": "only screen and (orientation: portrait)",
      "variable": "var(--media-portrait)",
      "raw": "only screen and (orientation: portrait)"
    }
  },
  "color": {
    "white": {
      "value": "#ffffff",
      "variable": "var(--color-white)",
      "raw": "#ffffff"
    },
    "black": {
      "value": "#0B0A0A",
      "variable": "var(--color-black)",
      "raw": "#0B0A0A"
    },
    "gray": {
      "50": {
        "value": "#FBFBFB",
        "variable": "var(--color-gray-50)",
        "raw": "#FBFBFB"
      },
      "100": {
        "value": "#F6F5F4",
        "variable": "var(--color-gray-100)",
        "raw": "#F6F5F4"
      },
      "200": {
        "value": "#ECEBE8",
        "variable": "var(--color-gray-200)",
        "raw": "#ECEBE8"
      },
      "300": {
        "value": "#DBD9D3",
        "variable": "var(--color-gray-300)",
        "raw": "#DBD9D3"
      },
      "400": {
        "value": "#ADA9A4",
        "variable": "var(--color-gray-400)",
        "raw": "#ADA9A4"
      },
      "500": {
        "value": "#97948F",
        "variable": "var(--color-gray-500)",
        "raw": "#97948F"
      },
      "600": {
        "value": "#67635D",
        "variable": "var(--color-gray-600)",
        "raw": "#67635D"
      },
      "700": {
        "value": "#36332E",
        "variable": "var(--color-gray-700)",
        "raw": "#36332E"
      },
      "800": {
        "value": "#201E1B",
        "variable": "var(--color-gray-800)",
        "raw": "#201E1B"
      },
      "900": {
        "value": "#121110",
        "variable": "var(--color-gray-900)",
        "raw": "#121110"
      }
    },
    "green": {
      "50": {
        "value": "#ECFFF7",
        "variable": "var(--color-green-50)",
        "raw": "#ECFFF7"
      },
      "100": {
        "value": "#DEFFF1",
        "variable": "var(--color-green-100)",
        "raw": "#DEFFF1"
      },
      "200": {
        "value": "#C3FFE6",
        "variable": "var(--color-green-200)",
        "raw": "#C3FFE6"
      },
      "300": {
        "value": "#86FBCB",
        "variable": "var(--color-green-300)",
        "raw": "#86FBCB"
      },
      "400": {
        "value": "#3CEEA5",
        "variable": "var(--color-green-400)",
        "raw": "#3CEEA5"
      },
      "500": {
        "value": "#0DD885",
        "variable": "var(--color-green-500)",
        "raw": "#0DD885"
      },
      "600": {
        "value": "#00B467",
        "variable": "var(--color-green-600)",
        "raw": "#00B467"
      },
      "700": {
        "value": "#006037",
        "variable": "var(--color-green-700)",
        "raw": "#006037"
      },
      "800": {
        "value": "#002817",
        "variable": "var(--color-green-800)",
        "raw": "#002817"
      },
      "900": {
        "value": "#00190F",
        "variable": "var(--color-green-900)",
        "raw": "#00190F"
      }
    },
    "yellow": {
      "50": {
        "value": "#FFFCEE",
        "variable": "var(--color-yellow-50)",
        "raw": "#FFFCEE"
      },
      "100": {
        "value": "#FFF6D3",
        "variable": "var(--color-yellow-100)",
        "raw": "#FFF6D3"
      },
      "200": {
        "value": "#FFF0B1",
        "variable": "var(--color-yellow-200)",
        "raw": "#FFF0B1"
      },
      "300": {
        "value": "#FFE372",
        "variable": "var(--color-yellow-300)",
        "raw": "#FFE372"
      },
      "400": {
        "value": "#FFDC4E",
        "variable": "var(--color-yellow-400)",
        "raw": "#FFDC4E"
      },
      "500": {
        "value": "#FBCA05",
        "variable": "var(--color-yellow-500)",
        "raw": "#FBCA05"
      },
      "600": {
        "value": "#CBA408",
        "variable": "var(--color-yellow-600)",
        "raw": "#CBA408"
      },
      "700": {
        "value": "#614E02",
        "variable": "var(--color-yellow-700)",
        "raw": "#614E02"
      },
      "800": {
        "value": "#292100",
        "variable": "var(--color-yellow-800)",
        "raw": "#292100"
      },
      "900": {
        "value": "#1B1500",
        "variable": "var(--color-yellow-900)",
        "raw": "#1B1500"
      }
    },
    "orange": {
      "50": {
        "value": "#ffe9d9",
        "variable": "var(--color-orange-50)",
        "raw": "#ffe9d9"
      },
      "100": {
        "value": "#ffd3b3",
        "variable": "var(--color-orange-100)",
        "raw": "#ffd3b3"
      },
      "200": {
        "value": "#ffbd8d",
        "variable": "var(--color-orange-200)",
        "raw": "#ffbd8d"
      },
      "300": {
        "value": "#ffa666",
        "variable": "var(--color-orange-300)",
        "raw": "#ffa666"
      },
      "400": {
        "value": "#ff9040",
        "variable": "var(--color-orange-400)",
        "raw": "#ff9040"
      },
      "500": {
        "value": "#ff7a1a",
        "variable": "var(--color-orange-500)",
        "raw": "#ff7a1a"
      },
      "600": {
        "value": "#e15e00",
        "variable": "var(--color-orange-600)",
        "raw": "#e15e00"
      },
      "700": {
        "value": "#a94700",
        "variable": "var(--color-orange-700)",
        "raw": "#a94700"
      },
      "800": {
        "value": "#702f00",
        "variable": "var(--color-orange-800)",
        "raw": "#702f00"
      },
      "900": {
        "value": "#381800",
        "variable": "var(--color-orange-900)",
        "raw": "#381800"
      }
    },
    "red": {
      "50": {
        "value": "#FFF9F8",
        "variable": "var(--color-red-50)",
        "raw": "#FFF9F8"
      },
      "100": {
        "value": "#FFF3F0",
        "variable": "var(--color-red-100)",
        "raw": "#FFF3F0"
      },
      "200": {
        "value": "#FFDED7",
        "variable": "var(--color-red-200)",
        "raw": "#FFDED7"
      },
      "300": {
        "value": "#FFA692",
        "variable": "var(--color-red-300)",
        "raw": "#FFA692"
      },
      "400": {
        "value": "#FF7353",
        "variable": "var(--color-red-400)",
        "raw": "#FF7353"
      },
      "500": {
        "value": "#FF3B10",
        "variable": "var(--color-red-500)",
        "raw": "#FF3B10"
      },
      "600": {
        "value": "#BB2402",
        "variable": "var(--color-red-600)",
        "raw": "#BB2402"
      },
      "700": {
        "value": "#701704",
        "variable": "var(--color-red-700)",
        "raw": "#701704"
      },
      "800": {
        "value": "#340A01",
        "variable": "var(--color-red-800)",
        "raw": "#340A01"
      },
      "900": {
        "value": "#1C0301",
        "variable": "var(--color-red-900)",
        "raw": "#1C0301"
      }
    },
    "pear": {
      "50": {
        "value": "#f7f8dc",
        "variable": "var(--color-pear-50)",
        "raw": "#f7f8dc"
      },
      "100": {
        "value": "#eff0ba",
        "variable": "var(--color-pear-100)",
        "raw": "#eff0ba"
      },
      "200": {
        "value": "#e8e997",
        "variable": "var(--color-pear-200)",
        "raw": "#e8e997"
      },
      "300": {
        "value": "#e0e274",
        "variable": "var(--color-pear-300)",
        "raw": "#e0e274"
      },
      "400": {
        "value": "#d8da52",
        "variable": "var(--color-pear-400)",
        "raw": "#d8da52"
      },
      "500": {
        "value": "#d0d32f",
        "variable": "var(--color-pear-500)",
        "raw": "#d0d32f"
      },
      "600": {
        "value": "#a8aa24",
        "variable": "var(--color-pear-600)",
        "raw": "#a8aa24"
      },
      "700": {
        "value": "#7e801b",
        "variable": "var(--color-pear-700)",
        "raw": "#7e801b"
      },
      "800": {
        "value": "#545512",
        "variable": "var(--color-pear-800)",
        "raw": "#545512"
      },
      "900": {
        "value": "#2a2b09",
        "variable": "var(--color-pear-900)",
        "raw": "#2a2b09"
      }
    },
    "teal": {
      "50": {
        "value": "#d7faf8",
        "variable": "var(--color-teal-50)",
        "raw": "#d7faf8"
      },
      "100": {
        "value": "#aff4f0",
        "variable": "var(--color-teal-100)",
        "raw": "#aff4f0"
      },
      "200": {
        "value": "#87efe9",
        "variable": "var(--color-teal-200)",
        "raw": "#87efe9"
      },
      "300": {
        "value": "#5fe9e1",
        "variable": "var(--color-teal-300)",
        "raw": "#5fe9e1"
      },
      "400": {
        "value": "#36e4da",
        "variable": "var(--color-teal-400)",
        "raw": "#36e4da"
      },
      "500": {
        "value": "#1cd1c6",
        "variable": "var(--color-teal-500)",
        "raw": "#1cd1c6"
      },
      "600": {
        "value": "#16a79e",
        "variable": "var(--color-teal-600)",
        "raw": "#16a79e"
      },
      "700": {
        "value": "#117d77",
        "variable": "var(--color-teal-700)",
        "raw": "#117d77"
      },
      "800": {
        "value": "#0b544f",
        "variable": "var(--color-teal-800)",
        "raw": "#0b544f"
      },
      "900": {
        "value": "#062a28",
        "variable": "var(--color-teal-900)",
        "raw": "#062a28"
      }
    },
    "lightblue": {
      "50": {
        "value": "#d9f8ff",
        "variable": "var(--color-lightblue-50)",
        "raw": "#d9f8ff"
      },
      "100": {
        "value": "#b3f1ff",
        "variable": "var(--color-lightblue-100)",
        "raw": "#b3f1ff"
      },
      "200": {
        "value": "#8deaff",
        "variable": "var(--color-lightblue-200)",
        "raw": "#8deaff"
      },
      "300": {
        "value": "#66e4ff",
        "variable": "var(--color-lightblue-300)",
        "raw": "#66e4ff"
      },
      "400": {
        "value": "#40ddff",
        "variable": "var(--color-lightblue-400)",
        "raw": "#40ddff"
      },
      "500": {
        "value": "#1ad6ff",
        "variable": "var(--color-lightblue-500)",
        "raw": "#1ad6ff"
      },
      "600": {
        "value": "#00b9e1",
        "variable": "var(--color-lightblue-600)",
        "raw": "#00b9e1"
      },
      "700": {
        "value": "#008aa9",
        "variable": "var(--color-lightblue-700)",
        "raw": "#008aa9"
      },
      "800": {
        "value": "#005c70",
        "variable": "var(--color-lightblue-800)",
        "raw": "#005c70"
      },
      "900": {
        "value": "#002e38",
        "variable": "var(--color-lightblue-900)",
        "raw": "#002e38"
      }
    },
    "blue": {
      "50": {
        "value": "#F2FAFF",
        "variable": "var(--color-blue-50)",
        "raw": "#F2FAFF"
      },
      "100": {
        "value": "#DFF3FF",
        "variable": "var(--color-blue-100)",
        "raw": "#DFF3FF"
      },
      "200": {
        "value": "#C6EAFF",
        "variable": "var(--color-blue-200)",
        "raw": "#C6EAFF"
      },
      "300": {
        "value": "#A1DDFF",
        "variable": "var(--color-blue-300)",
        "raw": "#A1DDFF"
      },
      "400": {
        "value": "#64C7FF",
        "variable": "var(--color-blue-400)",
        "raw": "#64C7FF"
      },
      "500": {
        "value": "#1AADFF",
        "variable": "var(--color-blue-500)",
        "raw": "#1AADFF"
      },
      "600": {
        "value": "#0069A6",
        "variable": "var(--color-blue-600)",
        "raw": "#0069A6"
      },
      "700": {
        "value": "#014267",
        "variable": "var(--color-blue-700)",
        "raw": "#014267"
      },
      "800": {
        "value": "#002235",
        "variable": "var(--color-blue-800)",
        "raw": "#002235"
      },
      "900": {
        "value": "#00131D",
        "variable": "var(--color-blue-900)",
        "raw": "#00131D"
      }
    },
    "indigoblue": {
      "50": {
        "value": "#d9e5ff",
        "variable": "var(--color-indigoblue-50)",
        "raw": "#d9e5ff"
      },
      "100": {
        "value": "#b3cbff",
        "variable": "var(--color-indigoblue-100)",
        "raw": "#b3cbff"
      },
      "200": {
        "value": "#8db0ff",
        "variable": "var(--color-indigoblue-200)",
        "raw": "#8db0ff"
      },
      "300": {
        "value": "#6696ff",
        "variable": "var(--color-indigoblue-300)",
        "raw": "#6696ff"
      },
      "400": {
        "value": "#407cff",
        "variable": "var(--color-indigoblue-400)",
        "raw": "#407cff"
      },
      "500": {
        "value": "#1a62ff",
        "variable": "var(--color-indigoblue-500)",
        "raw": "#1a62ff"
      },
      "600": {
        "value": "#0047e1",
        "variable": "var(--color-indigoblue-600)",
        "raw": "#0047e1"
      },
      "700": {
        "value": "#0035a9",
        "variable": "var(--color-indigoblue-700)",
        "raw": "#0035a9"
      },
      "800": {
        "value": "#002370",
        "variable": "var(--color-indigoblue-800)",
        "raw": "#002370"
      },
      "900": {
        "value": "#001238",
        "variable": "var(--color-indigoblue-900)",
        "raw": "#001238"
      }
    },
    "royalblue": {
      "50": {
        "value": "#dfdbfb",
        "variable": "var(--color-royalblue-50)",
        "raw": "#dfdbfb"
      },
      "100": {
        "value": "#c0b7f7",
        "variable": "var(--color-royalblue-100)",
        "raw": "#c0b7f7"
      },
      "200": {
        "value": "#a093f3",
        "variable": "var(--color-royalblue-200)",
        "raw": "#a093f3"
      },
      "300": {
        "value": "#806ff0",
        "variable": "var(--color-royalblue-300)",
        "raw": "#806ff0"
      },
      "400": {
        "value": "#614bec",
        "variable": "var(--color-royalblue-400)",
        "raw": "#614bec"
      },
      "500": {
        "value": "#4127e8",
        "variable": "var(--color-royalblue-500)",
        "raw": "#4127e8"
      },
      "600": {
        "value": "#2c15c4",
        "variable": "var(--color-royalblue-600)",
        "raw": "#2c15c4"
      },
      "700": {
        "value": "#211093",
        "variable": "var(--color-royalblue-700)",
        "raw": "#211093"
      },
      "800": {
        "value": "#160a62",
        "variable": "var(--color-royalblue-800)",
        "raw": "#160a62"
      },
      "900": {
        "value": "#0b0531",
        "variable": "var(--color-royalblue-900)",
        "raw": "#0b0531"
      }
    },
    "purple": {
      "50": {
        "value": "#ead9ff",
        "variable": "var(--color-purple-50)",
        "raw": "#ead9ff"
      },
      "100": {
        "value": "#d5b3ff",
        "variable": "var(--color-purple-100)",
        "raw": "#d5b3ff"
      },
      "200": {
        "value": "#c08dff",
        "variable": "var(--color-purple-200)",
        "raw": "#c08dff"
      },
      "300": {
        "value": "#ab66ff",
        "variable": "var(--color-purple-300)",
        "raw": "#ab66ff"
      },
      "400": {
        "value": "#9640ff",
        "variable": "var(--color-purple-400)",
        "raw": "#9640ff"
      },
      "500": {
        "value": "#811aff",
        "variable": "var(--color-purple-500)",
        "raw": "#811aff"
      },
      "600": {
        "value": "#6500e1",
        "variable": "var(--color-purple-600)",
        "raw": "#6500e1"
      },
      "700": {
        "value": "#4c00a9",
        "variable": "var(--color-purple-700)",
        "raw": "#4c00a9"
      },
      "800": {
        "value": "#330070",
        "variable": "var(--color-purple-800)",
        "raw": "#330070"
      },
      "900": {
        "value": "#190038",
        "variable": "var(--color-purple-900)",
        "raw": "#190038"
      }
    },
    "pink": {
      "50": {
        "value": "#ffd9f2",
        "variable": "var(--color-pink-50)",
        "raw": "#ffd9f2"
      },
      "100": {
        "value": "#ffb3e5",
        "variable": "var(--color-pink-100)",
        "raw": "#ffb3e5"
      },
      "200": {
        "value": "#ff8dd8",
        "variable": "var(--color-pink-200)",
        "raw": "#ff8dd8"
      },
      "300": {
        "value": "#ff66cc",
        "variable": "var(--color-pink-300)",
        "raw": "#ff66cc"
      },
      "400": {
        "value": "#ff40bf",
        "variable": "var(--color-pink-400)",
        "raw": "#ff40bf"
      },
      "500": {
        "value": "#ff1ab2",
        "variable": "var(--color-pink-500)",
        "raw": "#ff1ab2"
      },
      "600": {
        "value": "#e10095",
        "variable": "var(--color-pink-600)",
        "raw": "#e10095"
      },
      "700": {
        "value": "#a90070",
        "variable": "var(--color-pink-700)",
        "raw": "#a90070"
      },
      "800": {
        "value": "#70004b",
        "variable": "var(--color-pink-800)",
        "raw": "#70004b"
      },
      "900": {
        "value": "#380025",
        "variable": "var(--color-pink-900)",
        "raw": "#380025"
      }
    },
    "ruby": {
      "50": {
        "value": "#ffd9e4",
        "variable": "var(--color-ruby-50)",
        "raw": "#ffd9e4"
      },
      "100": {
        "value": "#ffb3c9",
        "variable": "var(--color-ruby-100)",
        "raw": "#ffb3c9"
      },
      "200": {
        "value": "#ff8dae",
        "variable": "var(--color-ruby-200)",
        "raw": "#ff8dae"
      },
      "300": {
        "value": "#ff6694",
        "variable": "var(--color-ruby-300)",
        "raw": "#ff6694"
      },
      "400": {
        "value": "#ff4079",
        "variable": "var(--color-ruby-400)",
        "raw": "#ff4079"
      },
      "500": {
        "value": "#ff1a5e",
        "variable": "var(--color-ruby-500)",
        "raw": "#ff1a5e"
      },
      "600": {
        "value": "#e10043",
        "variable": "var(--color-ruby-600)",
        "raw": "#e10043"
      },
      "700": {
        "value": "#a90032",
        "variable": "var(--color-ruby-700)",
        "raw": "#a90032"
      },
      "800": {
        "value": "#700021",
        "variable": "var(--color-ruby-800)",
        "raw": "#700021"
      },
      "900": {
        "value": "#380011",
        "variable": "var(--color-ruby-900)",
        "raw": "#380011"
      }
    },
    "primary": {
      "50": {
        "value": "#F1FCFF",
        "variable": "var(--color-primary-50)",
        "raw": "#F1FCFF"
      },
      "100": {
        "value": "#DCF7FF",
        "variable": "var(--color-primary-100)",
        "raw": "#DCF7FF"
      },
      "200": {
        "value": "#C5F2FF",
        "variable": "var(--color-primary-200)",
        "raw": "#C5F2FF"
      },
      "300": {
        "value": "#82E3FF",
        "variable": "var(--color-primary-300)",
        "raw": "#82E3FF"
      },
      "400": {
        "value": "#55E1FF",
        "variable": "var(--color-primary-400)",
        "raw": "#55E1FF"
      },
      "500": {
        "value": "#1AD6FF",
        "variable": "var(--color-primary-500)",
        "raw": "#1AD6FF"
      },
      "600": {
        "value": "#09A0C1",
        "variable": "var(--color-primary-600)",
        "raw": "#09A0C1"
      },
      "700": {
        "value": "#024757",
        "variable": "var(--color-primary-700)",
        "raw": "#024757"
      },
      "800": {
        "value": "#00232B",
        "variable": "var(--color-primary-800)",
        "raw": "#00232B"
      },
      "900": {
        "value": "#001A1F",
        "variable": "var(--color-primary-900)",
        "raw": "#001A1F"
      }
    },
    "secondary": {
      "50": {
        "value": "var(--color-gray-50)",
        "variable": "var(--color-secondary-50)",
        "raw": "{color.gray.50}"
      },
      "100": {
        "value": "var(--color-gray-100)",
        "variable": "var(--color-secondary-100)",
        "raw": "{color.gray.100}"
      },
      "200": {
        "value": "var(--color-gray-200)",
        "variable": "var(--color-secondary-200)",
        "raw": "{color.gray.200}"
      },
      "300": {
        "value": "var(--color-gray-300)",
        "variable": "var(--color-secondary-300)",
        "raw": "{color.gray.300}"
      },
      "400": {
        "value": "var(--color-gray-400)",
        "variable": "var(--color-secondary-400)",
        "raw": "{color.gray.400}"
      },
      "500": {
        "value": "var(--color-gray-500)",
        "variable": "var(--color-secondary-500)",
        "raw": "{color.gray.500}"
      },
      "600": {
        "value": "var(--color-gray-600)",
        "variable": "var(--color-secondary-600)",
        "raw": "{color.gray.600}"
      },
      "700": {
        "value": "var(--color-gray-700)",
        "variable": "var(--color-secondary-700)",
        "raw": "{color.gray.700}"
      },
      "800": {
        "value": "var(--color-gray-800)",
        "variable": "var(--color-secondary-800)",
        "raw": "{color.gray.800}"
      },
      "900": {
        "value": "var(--color-gray-900)",
        "variable": "var(--color-secondary-900)",
        "raw": "{color.gray.900}"
      }
    },
    "shadow": {
      "value": {
        "initial": "var(--color-gray-400)",
        "dark": "var(--color-gray-800)"
      },
      "variable": "var(--color-shadow)",
      "raw": {
        "initial": "{color.gray.400}",
        "dark": "{color.gray.800}"
      }
    }
  },
  "width": {
    "screen": {
      "value": "100vw",
      "variable": "var(--width-screen)",
      "raw": "100vw"
    }
  },
  "height": {
    "screen": {
      "value": "100vh",
      "variable": "var(--height-screen)",
      "raw": "100vh"
    }
  },
  "shadow": {
    "xs": {
      "value": "0px 1px 2px 0px var(--color-shadow)",
      "variable": "var(--shadow-xs)",
      "raw": "0px 1px 2px 0px {color.shadow}"
    },
    "sm": {
      "value": "0px 1px 3px 0px var(--color-shadow), 0px 1px 2px -1px var(--color-shadow)",
      "variable": "var(--shadow-sm)",
      "raw": "0px 1px 3px 0px {color.shadow}, 0px 1px 2px -1px {color.shadow}"
    },
    "md": {
      "value": "0px 4px 6px -1px var(--color-shadow), 0px 2px 4px -2px var(--color-shadow)",
      "variable": "var(--shadow-md)",
      "raw": "0px 4px 6px -1px {color.shadow}, 0px 2px 4px -2px {color.shadow}"
    },
    "lg": {
      "value": "0px 10px 15px -3px var(--color-shadow), 0px 4px 6px -4px var(--color-shadow)",
      "variable": "var(--shadow-lg)",
      "raw": "0px 10px 15px -3px {color.shadow}, 0px 4px 6px -4px {color.shadow}"
    },
    "xl": {
      "value": "0px 20px 25px -5px var(--color-shadow), 0px 8px 10px -6px var(--color-shadow)",
      "variable": "var(--shadow-xl)",
      "raw": "0px 20px 25px -5px {color.shadow}, 0px 8px 10px -6px {color.shadow}"
    },
    "2xl": {
      "value": "0px 25px 50px -12px var(--color-shadow)",
      "variable": "var(--shadow-2xl)",
      "raw": "0px 25px 50px -12px {color.shadow}"
    },
    "none": {
      "value": "0px 0px 0px 0px transparent",
      "variable": "var(--shadow-none)",
      "raw": "0px 0px 0px 0px transparent"
    }
  },
  "radii": {
    "none": {
      "value": "0px",
      "variable": "var(--radii-none)",
      "raw": "0px"
    },
    "2xs": {
      "value": "0.125rem",
      "variable": "var(--radii-2xs)",
      "raw": "0.125rem"
    },
    "xs": {
      "value": "0.25rem",
      "variable": "var(--radii-xs)",
      "raw": "0.25rem"
    },
    "sm": {
      "value": "0.375rem",
      "variable": "var(--radii-sm)",
      "raw": "0.375rem"
    },
    "md": {
      "value": "0.5rem",
      "variable": "var(--radii-md)",
      "raw": "0.5rem"
    },
    "lg": {
      "value": "0.75rem",
      "variable": "var(--radii-lg)",
      "raw": "0.75rem"
    },
    "xl": {
      "value": "1rem",
      "variable": "var(--radii-xl)",
      "raw": "1rem"
    },
    "2xl": {
      "value": "1.5rem",
      "variable": "var(--radii-2xl)",
      "raw": "1.5rem"
    },
    "3xl": {
      "value": "1.75rem",
      "variable": "var(--radii-3xl)",
      "raw": "1.75rem"
    },
    "full": {
      "value": "9999px",
      "variable": "var(--radii-full)",
      "raw": "9999px"
    }
  },
  "size": {
    "0": {
      "value": "0px",
      "variable": "var(--size-0)",
      "raw": "0px"
    },
    "2": {
      "value": "2px",
      "variable": "var(--size-2)",
      "raw": "2px"
    },
    "4": {
      "value": "4px",
      "variable": "var(--size-4)",
      "raw": "4px"
    },
    "6": {
      "value": "6px",
      "variable": "var(--size-6)",
      "raw": "6px"
    },
    "8": {
      "value": "8px",
      "variable": "var(--size-8)",
      "raw": "8px"
    },
    "12": {
      "value": "12px",
      "variable": "var(--size-12)",
      "raw": "12px"
    },
    "16": {
      "value": "16px",
      "variable": "var(--size-16)",
      "raw": "16px"
    },
    "20": {
      "value": "20px",
      "variable": "var(--size-20)",
      "raw": "20px"
    },
    "24": {
      "value": "24px",
      "variable": "var(--size-24)",
      "raw": "24px"
    },
    "32": {
      "value": "32px",
      "variable": "var(--size-32)",
      "raw": "32px"
    },
    "40": {
      "value": "40px",
      "variable": "var(--size-40)",
      "raw": "40px"
    },
    "48": {
      "value": "48px",
      "variable": "var(--size-48)",
      "raw": "48px"
    },
    "56": {
      "value": "56px",
      "variable": "var(--size-56)",
      "raw": "56px"
    },
    "64": {
      "value": "64px",
      "variable": "var(--size-64)",
      "raw": "64px"
    },
    "80": {
      "value": "80px",
      "variable": "var(--size-80)",
      "raw": "80px"
    },
    "104": {
      "value": "104px",
      "variable": "var(--size-104)",
      "raw": "104px"
    },
    "200": {
      "value": "200px",
      "variable": "var(--size-200)",
      "raw": "200px"
    },
    "xs": {
      "value": "20rem",
      "variable": "var(--size-xs)",
      "raw": "20rem"
    },
    "sm": {
      "value": "24rem",
      "variable": "var(--size-sm)",
      "raw": "24rem"
    },
    "md": {
      "value": "28rem",
      "variable": "var(--size-md)",
      "raw": "28rem"
    },
    "lg": {
      "value": "32rem",
      "variable": "var(--size-lg)",
      "raw": "32rem"
    },
    "xl": {
      "value": "36rem",
      "variable": "var(--size-xl)",
      "raw": "36rem"
    },
    "2xl": {
      "value": "42rem",
      "variable": "var(--size-2xl)",
      "raw": "42rem"
    },
    "3xl": {
      "value": "48rem",
      "variable": "var(--size-3xl)",
      "raw": "48rem"
    },
    "4xl": {
      "value": "56rem",
      "variable": "var(--size-4xl)",
      "raw": "56rem"
    },
    "5xl": {
      "value": "64rem",
      "variable": "var(--size-5xl)",
      "raw": "64rem"
    },
    "6xl": {
      "value": "72rem",
      "variable": "var(--size-6xl)",
      "raw": "72rem"
    },
    "7xl": {
      "value": "80rem",
      "variable": "var(--size-7xl)",
      "raw": "80rem"
    },
    "full": {
      "value": "100%",
      "variable": "var(--size-full)",
      "raw": "100%"
    }
  },
  "space": {
    "0": {
      "value": "0px",
      "variable": "var(--space-0)",
      "raw": "0px"
    },
    "1": {
      "value": "0.25rem",
      "variable": "var(--space-1)",
      "raw": "0.25rem"
    },
    "2": {
      "value": "0.5rem",
      "variable": "var(--space-2)",
      "raw": "0.5rem"
    },
    "3": {
      "value": "0.75rem",
      "variable": "var(--space-3)",
      "raw": "0.75rem"
    },
    "4": {
      "value": "1rem",
      "variable": "var(--space-4)",
      "raw": "1rem"
    },
    "5": {
      "value": "1.25rem",
      "variable": "var(--space-5)",
      "raw": "1.25rem"
    },
    "6": {
      "value": "1.5rem",
      "variable": "var(--space-6)",
      "raw": "1.5rem"
    },
    "7": {
      "value": "1.75rem",
      "variable": "var(--space-7)",
      "raw": "1.75rem"
    },
    "8": {
      "value": "2rem",
      "variable": "var(--space-8)",
      "raw": "2rem"
    },
    "9": {
      "value": "2.25rem",
      "variable": "var(--space-9)",
      "raw": "2.25rem"
    },
    "10": {
      "value": "2.5rem",
      "variable": "var(--space-10)",
      "raw": "2.5rem"
    },
    "11": {
      "value": "2.75rem",
      "variable": "var(--space-11)",
      "raw": "2.75rem"
    },
    "12": {
      "value": "3rem",
      "variable": "var(--space-12)",
      "raw": "3rem"
    },
    "14": {
      "value": "3.5rem",
      "variable": "var(--space-14)",
      "raw": "3.5rem"
    },
    "16": {
      "value": "4rem",
      "variable": "var(--space-16)",
      "raw": "4rem"
    },
    "20": {
      "value": "5rem",
      "variable": "var(--space-20)",
      "raw": "5rem"
    },
    "24": {
      "value": "6rem",
      "variable": "var(--space-24)",
      "raw": "6rem"
    },
    "28": {
      "value": "7rem",
      "variable": "var(--space-28)",
      "raw": "7rem"
    },
    "32": {
      "value": "8rem",
      "variable": "var(--space-32)",
      "raw": "8rem"
    },
    "36": {
      "value": "9rem",
      "variable": "var(--space-36)",
      "raw": "9rem"
    },
    "40": {
      "value": "10rem",
      "variable": "var(--space-40)",
      "raw": "10rem"
    },
    "44": {
      "value": "11rem",
      "variable": "var(--space-44)",
      "raw": "11rem"
    },
    "48": {
      "value": "12rem",
      "variable": "var(--space-48)",
      "raw": "12rem"
    },
    "52": {
      "value": "13rem",
      "variable": "var(--space-52)",
      "raw": "13rem"
    },
    "56": {
      "value": "14rem",
      "variable": "var(--space-56)",
      "raw": "14rem"
    },
    "60": {
      "value": "15rem",
      "variable": "var(--space-60)",
      "raw": "15rem"
    },
    "64": {
      "value": "16rem",
      "variable": "var(--space-64)",
      "raw": "16rem"
    },
    "72": {
      "value": "18rem",
      "variable": "var(--space-72)",
      "raw": "18rem"
    },
    "80": {
      "value": "20rem",
      "variable": "var(--space-80)",
      "raw": "20rem"
    },
    "96": {
      "value": "24rem",
      "variable": "var(--space-96)",
      "raw": "24rem"
    },
    "128": {
      "value": "32rem",
      "variable": "var(--space-128)",
      "raw": "32rem"
    },
    "px": {
      "value": "1px",
      "variable": "var(--space-px)",
      "raw": "1px"
    },
    "rem": {
      "125": {
        "value": "0.125rem",
        "variable": "var(--space-rem-125)",
        "raw": "0.125rem"
      },
      "375": {
        "value": "0.375rem",
        "variable": "var(--space-rem-375)",
        "raw": "0.375rem"
      },
      "625": {
        "value": "0.625rem",
        "variable": "var(--space-rem-625)",
        "raw": "0.625rem"
      },
      "875": {
        "value": "0.875rem",
        "variable": "var(--space-rem-875)",
        "raw": "0.875rem"
      }
    }
  },
  "borderWidth": {
    "noBorder": {
      "value": "0",
      "variable": "var(--borderWidth-noBorder)",
      "raw": "0"
    },
    "sm": {
      "value": "1px",
      "variable": "var(--borderWidth-sm)",
      "raw": "1px"
    },
    "md": {
      "value": "2px",
      "variable": "var(--borderWidth-md)",
      "raw": "2px"
    },
    "lg": {
      "value": "3px",
      "variable": "var(--borderWidth-lg)",
      "raw": "3px"
    }
  },
  "opacity": {
    "noOpacity": {
      "value": "0",
      "variable": "var(--opacity-noOpacity)",
      "raw": "0"
    },
    "bright": {
      "value": "0.1",
      "variable": "var(--opacity-bright)",
      "raw": "0.1"
    },
    "light": {
      "value": "0.15",
      "variable": "var(--opacity-light)",
      "raw": "0.15"
    },
    "soft": {
      "value": "0.3",
      "variable": "var(--opacity-soft)",
      "raw": "0.3"
    },
    "medium": {
      "value": "0.5",
      "variable": "var(--opacity-medium)",
      "raw": "0.5"
    },
    "high": {
      "value": "0.8",
      "variable": "var(--opacity-high)",
      "raw": "0.8"
    },
    "total": {
      "value": "1",
      "variable": "var(--opacity-total)",
      "raw": "1"
    }
  },
  "font": {
    "sans": {
      "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      "variable": "var(--font-sans)",
      "raw": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
    },
    "serif": {
      "value": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif",
      "variable": "var(--font-serif)",
      "raw": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
    },
    "mono": {
      "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
      "variable": "var(--font-mono)",
      "raw": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
    }
  },
  "fontWeight": {
    "thin": {
      "value": "100",
      "variable": "var(--fontWeight-thin)",
      "raw": "100"
    },
    "extralight": {
      "value": "200",
      "variable": "var(--fontWeight-extralight)",
      "raw": "200"
    },
    "light": {
      "value": "300",
      "variable": "var(--fontWeight-light)",
      "raw": "300"
    },
    "normal": {
      "value": "400",
      "variable": "var(--fontWeight-normal)",
      "raw": "400"
    },
    "medium": {
      "value": "500",
      "variable": "var(--fontWeight-medium)",
      "raw": "500"
    },
    "semibold": {
      "value": "600",
      "variable": "var(--fontWeight-semibold)",
      "raw": "600"
    },
    "bold": {
      "value": "700",
      "variable": "var(--fontWeight-bold)",
      "raw": "700"
    },
    "extrabold": {
      "value": "800",
      "variable": "var(--fontWeight-extrabold)",
      "raw": "800"
    },
    "black": {
      "value": "900",
      "variable": "var(--fontWeight-black)",
      "raw": "900"
    }
  },
  "fontSize": {
    "xs": {
      "value": "0.75rem",
      "variable": "var(--fontSize-xs)",
      "raw": "0.75rem"
    },
    "sm": {
      "value": "0.875rem",
      "variable": "var(--fontSize-sm)",
      "raw": "0.875rem"
    },
    "base": {
      "value": "1rem",
      "variable": "var(--fontSize-base)",
      "raw": "1rem"
    },
    "lg": {
      "value": "1.125rem",
      "variable": "var(--fontSize-lg)",
      "raw": "1.125rem"
    },
    "xl": {
      "value": "1.25rem",
      "variable": "var(--fontSize-xl)",
      "raw": "1.25rem"
    },
    "2xl": {
      "value": "1.5rem",
      "variable": "var(--fontSize-2xl)",
      "raw": "1.5rem"
    },
    "3xl": {
      "value": "1.875rem",
      "variable": "var(--fontSize-3xl)",
      "raw": "1.875rem"
    },
    "4xl": {
      "value": "2.25rem",
      "variable": "var(--fontSize-4xl)",
      "raw": "2.25rem"
    },
    "5xl": {
      "value": "3rem",
      "variable": "var(--fontSize-5xl)",
      "raw": "3rem"
    },
    "6xl": {
      "value": "3.75rem",
      "variable": "var(--fontSize-6xl)",
      "raw": "3.75rem"
    },
    "7xl": {
      "value": "4.5rem",
      "variable": "var(--fontSize-7xl)",
      "raw": "4.5rem"
    },
    "8xl": {
      "value": "6rem",
      "variable": "var(--fontSize-8xl)",
      "raw": "6rem"
    },
    "9xl": {
      "value": "8rem",
      "variable": "var(--fontSize-9xl)",
      "raw": "8rem"
    }
  },
  "letterSpacing": {
    "tighter": {
      "value": "-0.05em",
      "variable": "var(--letterSpacing-tighter)",
      "raw": "-0.05em"
    },
    "tight": {
      "value": "-0.025em",
      "variable": "var(--letterSpacing-tight)",
      "raw": "-0.025em"
    },
    "normal": {
      "value": "0em",
      "variable": "var(--letterSpacing-normal)",
      "raw": "0em"
    },
    "wide": {
      "value": "0.025em",
      "variable": "var(--letterSpacing-wide)",
      "raw": "0.025em"
    },
    "wider": {
      "value": "0.05em",
      "variable": "var(--letterSpacing-wider)",
      "raw": "0.05em"
    },
    "widest": {
      "value": "0.1em",
      "variable": "var(--letterSpacing-widest)",
      "raw": "0.1em"
    }
  },
  "lead": {
    "1": {
      "value": ".025rem",
      "variable": "var(--lead-1)",
      "raw": ".025rem"
    },
    "2": {
      "value": ".5rem",
      "variable": "var(--lead-2)",
      "raw": ".5rem"
    },
    "3": {
      "value": ".75rem",
      "variable": "var(--lead-3)",
      "raw": ".75rem"
    },
    "4": {
      "value": "1rem",
      "variable": "var(--lead-4)",
      "raw": "1rem"
    },
    "5": {
      "value": "1.25rem",
      "variable": "var(--lead-5)",
      "raw": "1.25rem"
    },
    "6": {
      "value": "1.5rem",
      "variable": "var(--lead-6)",
      "raw": "1.5rem"
    },
    "7": {
      "value": "1.75rem",
      "variable": "var(--lead-7)",
      "raw": "1.75rem"
    },
    "8": {
      "value": "2rem",
      "variable": "var(--lead-8)",
      "raw": "2rem"
    },
    "9": {
      "value": "2.25rem",
      "variable": "var(--lead-9)",
      "raw": "2.25rem"
    },
    "10": {
      "value": "2.5rem",
      "variable": "var(--lead-10)",
      "raw": "2.5rem"
    },
    "none": {
      "value": "1",
      "variable": "var(--lead-none)",
      "raw": "1"
    },
    "tight": {
      "value": "1.25",
      "variable": "var(--lead-tight)",
      "raw": "1.25"
    },
    "snug": {
      "value": "1.375",
      "variable": "var(--lead-snug)",
      "raw": "1.375"
    },
    "normal": {
      "value": "1.5",
      "variable": "var(--lead-normal)",
      "raw": "1.5"
    },
    "relaxed": {
      "value": "1.625",
      "variable": "var(--lead-relaxed)",
      "raw": "1.625"
    },
    "loose": {
      "value": "2",
      "variable": "var(--lead-loose)",
      "raw": "2"
    }
  },
  "text": {
    "xs": {
      "fontSize": {
        "value": "var(--fontSize-xs)",
        "variable": "var(--text-xs-fontSize)",
        "raw": "{fontSize.xs}"
      },
      "lineHeight": {
        "value": "var(--lead-4)",
        "variable": "var(--text-xs-lineHeight)",
        "raw": "{lead.4}"
      }
    },
    "sm": {
      "fontSize": {
        "value": "var(--fontSize-sm)",
        "variable": "var(--text-sm-fontSize)",
        "raw": "{fontSize.sm}"
      },
      "lineHeight": {
        "value": "var(--lead-5)",
        "variable": "var(--text-sm-lineHeight)",
        "raw": "{lead.5}"
      }
    },
    "base": {
      "fontSize": {
        "value": "var(--fontSize-base)",
        "variable": "var(--text-base-fontSize)",
        "raw": "{fontSize.base}"
      },
      "lineHeight": {
        "value": "var(--lead-6)",
        "variable": "var(--text-base-lineHeight)",
        "raw": "{lead.6}"
      }
    },
    "lg": {
      "fontSize": {
        "value": "var(--fontSize-lg)",
        "variable": "var(--text-lg-fontSize)",
        "raw": "{fontSize.lg}"
      },
      "lineHeight": {
        "value": "var(--lead-7)",
        "variable": "var(--text-lg-lineHeight)",
        "raw": "{lead.7}"
      }
    },
    "xl": {
      "fontSize": {
        "value": "var(--fontSize-xl)",
        "variable": "var(--text-xl-fontSize)",
        "raw": "{fontSize.xl}"
      },
      "lineHeight": {
        "value": "var(--lead-7)",
        "variable": "var(--text-xl-lineHeight)",
        "raw": "{lead.7}"
      }
    },
    "2xl": {
      "fontSize": {
        "value": "var(--fontSize-2xl)",
        "variable": "var(--text-2xl-fontSize)",
        "raw": "{fontSize.2xl}"
      },
      "lineHeight": {
        "value": "var(--lead-8)",
        "variable": "var(--text-2xl-lineHeight)",
        "raw": "{lead.8}"
      }
    },
    "3xl": {
      "fontSize": {
        "value": "var(--fontSize-3xl)",
        "variable": "var(--text-3xl-fontSize)",
        "raw": "{fontSize.3xl}"
      },
      "lineHeight": {
        "value": "var(--lead-9)",
        "variable": "var(--text-3xl-lineHeight)",
        "raw": "{lead.9}"
      }
    },
    "4xl": {
      "fontSize": {
        "value": "var(--fontSize-4xl)",
        "variable": "var(--text-4xl-fontSize)",
        "raw": "{fontSize.4xl}"
      },
      "lineHeight": {
        "value": "var(--lead-10)",
        "variable": "var(--text-4xl-lineHeight)",
        "raw": "{lead.10}"
      }
    },
    "5xl": {
      "fontSize": {
        "value": "var(--fontSize-5xl)",
        "variable": "var(--text-5xl-fontSize)",
        "raw": "{fontSize.5xl}"
      },
      "lineHeight": {
        "value": "var(--lead-none)",
        "variable": "var(--text-5xl-lineHeight)",
        "raw": "{lead.none}"
      }
    },
    "6xl": {
      "fontSize": {
        "value": "var(--fontSize-6xl)",
        "variable": "var(--text-6xl-fontSize)",
        "raw": "{fontSize.6xl}"
      },
      "lineHeight": {
        "value": "var(--lead-none)",
        "variable": "var(--text-6xl-lineHeight)",
        "raw": "{lead.none}"
      }
    }
  },
  "elements": {
    "text": {
      "primary": {
        "color": {
          "static": {
            "value": {
              "initial": "var(--color-gray-900)",
              "dark": "var(--color-gray-50)"
            },
            "variable": "var(--elements-text-primary-color-static)",
            "raw": {
              "initial": "{color.gray.900}",
              "dark": "{color.gray.50}"
            }
          },
          "hover": {}
        }
      },
      "secondary": {
        "color": {
          "static": {
            "value": {
              "initial": "var(--color-gray-500)",
              "dark": "var(--color-gray-400)"
            },
            "variable": "var(--elements-text-secondary-color-static)",
            "raw": {
              "initial": "{color.gray.500}",
              "dark": "{color.gray.400}"
            }
          },
          "hover": {
            "value": {
              "initial": "var(--color-gray-700)",
              "dark": "var(--color-gray-200)"
            },
            "variable": "var(--elements-text-secondary-color-hover)",
            "raw": {
              "initial": "{color.gray.700}",
              "dark": "{color.gray.200}"
            }
          }
        }
      }
    },
    "container": {
      "maxWidth": {
        "value": "80rem",
        "variable": "var(--elements-container-maxWidth)",
        "raw": "80rem"
      },
      "padding": {
        "mobile": {
          "value": "var(--space-4)",
          "variable": "var(--elements-container-padding-mobile)",
          "raw": "{space.4}"
        },
        "xs": {
          "value": "var(--space-4)",
          "variable": "var(--elements-container-padding-xs)",
          "raw": "{space.4}"
        },
        "sm": {
          "value": "var(--space-6)",
          "variable": "var(--elements-container-padding-sm)",
          "raw": "{space.6}"
        },
        "md": {
          "value": "var(--space-6)",
          "variable": "var(--elements-container-padding-md)",
          "raw": "{space.6}"
        }
      }
    },
    "backdrop": {
      "filter": {
        "value": "saturate(200%) blur(20px)",
        "variable": "var(--elements-backdrop-filter)",
        "raw": "saturate(200%) blur(20px)"
      },
      "background": {
        "value": {
          "initial": "#fffc",
          "dark": "#0c0d0ccc"
        },
        "variable": "var(--elements-backdrop-background)",
        "raw": {
          "initial": "#fffc",
          "dark": "#0c0d0ccc"
        }
      }
    },
    "border": {
      "primary": {
        "static": {
          "value": {
            "initial": "var(--color-gray-100)",
            "dark": "var(--color-gray-900)"
          },
          "variable": "var(--elements-border-primary-static)",
          "raw": {
            "initial": "{color.gray.100}",
            "dark": "{color.gray.900}"
          }
        },
        "hover": {
          "value": {
            "initial": "var(--color-gray-200)",
            "dark": "var(--color-gray-800)"
          },
          "variable": "var(--elements-border-primary-hover)",
          "raw": {
            "initial": "{color.gray.200}",
            "dark": "{color.gray.800}"
          }
        }
      },
      "secondary": {
        "static": {
          "value": {
            "initial": "var(--color-gray-200)",
            "dark": "var(--color-gray-800)"
          },
          "variable": "var(--elements-border-secondary-static)",
          "raw": {
            "initial": "{color.gray.200}",
            "dark": "{color.gray.800}"
          }
        },
        "hover": {
          "value": {
            "initial": "",
            "dark": ""
          },
          "variable": "var(--elements-border-secondary-hover)",
          "raw": {
            "initial": "",
            "dark": ""
          }
        }
      }
    },
    "surface": {
      "background": {
        "base": {
          "value": {
            "initial": "var(--color-gray-100)",
            "dark": "var(--color-gray-900)"
          },
          "variable": "var(--elements-surface-background-base)",
          "raw": {
            "initial": "{color.gray.100}",
            "dark": "{color.gray.900}"
          }
        }
      },
      "primary": {
        "backgroundColor": {
          "value": {
            "initial": "var(--color-gray-100)",
            "dark": "var(--color-gray-900)"
          },
          "variable": "var(--elements-surface-primary-backgroundColor)",
          "raw": {
            "initial": "{color.gray.100}",
            "dark": "{color.gray.900}"
          }
        }
      },
      "secondary": {
        "backgroundColor": {
          "value": {
            "initial": "var(--color-gray-200)",
            "dark": "var(--color-gray-800)"
          },
          "variable": "var(--elements-surface-secondary-backgroundColor)",
          "raw": {
            "initial": "{color.gray.200}",
            "dark": "{color.gray.800}"
          }
        }
      }
    },
    "state": {
      "primary": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-primary-600)",
              "dark": "var(--color-primary-400)"
            },
            "variable": "var(--elements-state-primary-color-primary)",
            "raw": {
              "initial": "{color.primary.600}",
              "dark": "{color.primary.400}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-primary-700)",
              "dark": "var(--color-primary-200)"
            },
            "variable": "var(--elements-state-primary-color-secondary)",
            "raw": {
              "initial": "{color.primary.700}",
              "dark": "{color.primary.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-primary-50)",
              "dark": "var(--color-primary-900)"
            },
            "variable": "var(--elements-state-primary-backgroundColor-primary)",
            "raw": {
              "initial": "{color.primary.50}",
              "dark": "{color.primary.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-primary-100)",
              "dark": "var(--color-primary-800)"
            },
            "variable": "var(--elements-state-primary-backgroundColor-secondary)",
            "raw": {
              "initial": "{color.primary.100}",
              "dark": "{color.primary.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-primary-100)",
              "dark": "var(--color-primary-800)"
            },
            "variable": "var(--elements-state-primary-borderColor-primary)",
            "raw": {
              "initial": "{color.primary.100}",
              "dark": "{color.primary.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-primary-200)",
              "dark": "var(--color-primary-700)"
            },
            "variable": "var(--elements-state-primary-borderColor-secondary)",
            "raw": {
              "initial": "{color.primary.200}",
              "dark": "{color.primary.700}"
            }
          }
        }
      },
      "info": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-blue-500)",
              "dark": "var(--color-blue-400)"
            },
            "variable": "var(--elements-state-info-color-primary)",
            "raw": {
              "initial": "{color.blue.500}",
              "dark": "{color.blue.400}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-blue-600)",
              "dark": "var(--color-blue-200)"
            },
            "variable": "var(--elements-state-info-color-secondary)",
            "raw": {
              "initial": "{color.blue.600}",
              "dark": "{color.blue.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-blue-50)",
              "dark": "var(--color-blue-900)"
            },
            "variable": "var(--elements-state-info-backgroundColor-primary)",
            "raw": {
              "initial": "{color.blue.50}",
              "dark": "{color.blue.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-blue-100)",
              "dark": "var(--color-blue-800)"
            },
            "variable": "var(--elements-state-info-backgroundColor-secondary)",
            "raw": {
              "initial": "{color.blue.100}",
              "dark": "{color.blue.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-blue-100)",
              "dark": "var(--color-blue-800)"
            },
            "variable": "var(--elements-state-info-borderColor-primary)",
            "raw": {
              "initial": "{color.blue.100}",
              "dark": "{color.blue.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-blue-200)",
              "dark": "var(--color-blue-700)"
            },
            "variable": "var(--elements-state-info-borderColor-secondary)",
            "raw": {
              "initial": "{color.blue.200}",
              "dark": "{color.blue.700}"
            }
          }
        }
      },
      "success": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-green-500)",
              "dark": "var(--color-green-400)"
            },
            "variable": "var(--elements-state-success-color-primary)",
            "raw": {
              "initial": "{color.green.500}",
              "dark": "{color.green.400}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-green-600)",
              "dark": "var(--color-green-200)"
            },
            "variable": "var(--elements-state-success-color-secondary)",
            "raw": {
              "initial": "{color.green.600}",
              "dark": "{color.green.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-green-50)",
              "dark": "var(--color-green-900)"
            },
            "variable": "var(--elements-state-success-backgroundColor-primary)",
            "raw": {
              "initial": "{color.green.50}",
              "dark": "{color.green.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-green-100)",
              "dark": "var(--color-green-800)"
            },
            "variable": "var(--elements-state-success-backgroundColor-secondary)",
            "raw": {
              "initial": "{color.green.100}",
              "dark": "{color.green.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-green-100)",
              "dark": "var(--color-green-800)"
            },
            "variable": "var(--elements-state-success-borderColor-primary)",
            "raw": {
              "initial": "{color.green.100}",
              "dark": "{color.green.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-green-200)",
              "dark": "var(--color-green-700)"
            },
            "variable": "var(--elements-state-success-borderColor-secondary)",
            "raw": {
              "initial": "{color.green.200}",
              "dark": "{color.green.700}"
            }
          }
        }
      },
      "warning": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-yellow-600)",
              "dark": "var(--color-yellow-400)"
            },
            "variable": "var(--elements-state-warning-color-primary)",
            "raw": {
              "initial": "{color.yellow.600}",
              "dark": "{color.yellow.400}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-yellow-700)",
              "dark": "var(--color-yellow-200)"
            },
            "variable": "var(--elements-state-warning-color-secondary)",
            "raw": {
              "initial": "{color.yellow.700}",
              "dark": "{color.yellow.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-yellow-50)",
              "dark": "var(--color-yellow-900)"
            },
            "variable": "var(--elements-state-warning-backgroundColor-primary)",
            "raw": {
              "initial": "{color.yellow.50}",
              "dark": "{color.yellow.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-yellow-100)",
              "dark": "var(--color-yellow-800)"
            },
            "variable": "var(--elements-state-warning-backgroundColor-secondary)",
            "raw": {
              "initial": "{color.yellow.100}",
              "dark": "{color.yellow.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-yellow-100)",
              "dark": "var(--color-yellow-800)"
            },
            "variable": "var(--elements-state-warning-borderColor-primary)",
            "raw": {
              "initial": "{color.yellow.100}",
              "dark": "{color.yellow.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-yellow-200)",
              "dark": "var(--color-yellow-700)"
            },
            "variable": "var(--elements-state-warning-borderColor-secondary)",
            "raw": {
              "initial": "{color.yellow.200}",
              "dark": "{color.yellow.700}"
            }
          }
        }
      },
      "danger": {
        "color": {
          "primary": {
            "value": {
              "initial": "var(--color-red-500)",
              "dark": "var(--color-red-300)"
            },
            "variable": "var(--elements-state-danger-color-primary)",
            "raw": {
              "initial": "{color.red.500}",
              "dark": "{color.red.300}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-red-600)",
              "dark": "var(--color-red-200)"
            },
            "variable": "var(--elements-state-danger-color-secondary)",
            "raw": {
              "initial": "{color.red.600}",
              "dark": "{color.red.200}"
            }
          }
        },
        "backgroundColor": {
          "primary": {
            "value": {
              "initial": "var(--color-red-50)",
              "dark": "var(--color-red-900)"
            },
            "variable": "var(--elements-state-danger-backgroundColor-primary)",
            "raw": {
              "initial": "{color.red.50}",
              "dark": "{color.red.900}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-red-100)",
              "dark": "var(--color-red-800)"
            },
            "variable": "var(--elements-state-danger-backgroundColor-secondary)",
            "raw": {
              "initial": "{color.red.100}",
              "dark": "{color.red.800}"
            }
          }
        },
        "borderColor": {
          "primary": {
            "value": {
              "initial": "var(--color-red-100)",
              "dark": "var(--color-red-800)"
            },
            "variable": "var(--elements-state-danger-borderColor-primary)",
            "raw": {
              "initial": "{color.red.100}",
              "dark": "{color.red.800}"
            }
          },
          "secondary": {
            "value": {
              "initial": "var(--color-red-200)",
              "dark": "var(--color-red-700)"
            },
            "variable": "var(--elements-state-danger-borderColor-secondary)",
            "raw": {
              "initial": "{color.red.200}",
              "dark": "{color.red.700}"
            }
          }
        }
      }
    }
  },
  "typography": {
    "body": {
      "color": {
        "value": {
          "initial": "var(--color-black)",
          "dark": "var(--color-white)"
        },
        "variable": "var(--typography-body-color)",
        "raw": {
          "initial": "{color.black}",
          "dark": "{color.white}"
        }
      },
      "backgroundColor": {
        "value": {
          "initial": "var(--color-white)",
          "dark": "var(--color-black)"
        },
        "variable": "var(--typography-body-backgroundColor)",
        "raw": {
          "initial": "{color.white}",
          "dark": "{color.black}"
        }
      }
    },
    "verticalMargin": {
      "sm": {
        "value": "16px",
        "variable": "var(--typography-verticalMargin-sm)",
        "raw": "16px"
      },
      "base": {
        "value": "24px",
        "variable": "var(--typography-verticalMargin-base)",
        "raw": "24px"
      }
    },
    "letterSpacing": {
      "tight": {
        "value": "-0.025em",
        "variable": "var(--typography-letterSpacing-tight)",
        "raw": "-0.025em"
      },
      "wide": {
        "value": "0.025em",
        "variable": "var(--typography-letterSpacing-wide)",
        "raw": "0.025em"
      }
    },
    "fontSize": {
      "xs": {
        "value": "12px",
        "variable": "var(--typography-fontSize-xs)",
        "raw": "12px"
      },
      "sm": {
        "value": "14px",
        "variable": "var(--typography-fontSize-sm)",
        "raw": "14px"
      },
      "base": {
        "value": "16px",
        "variable": "var(--typography-fontSize-base)",
        "raw": "16px"
      },
      "lg": {
        "value": "18px",
        "variable": "var(--typography-fontSize-lg)",
        "raw": "18px"
      },
      "xl": {
        "value": "20px",
        "variable": "var(--typography-fontSize-xl)",
        "raw": "20px"
      },
      "2xl": {
        "value": "24px",
        "variable": "var(--typography-fontSize-2xl)",
        "raw": "24px"
      },
      "3xl": {
        "value": "30px",
        "variable": "var(--typography-fontSize-3xl)",
        "raw": "30px"
      },
      "4xl": {
        "value": "36px",
        "variable": "var(--typography-fontSize-4xl)",
        "raw": "36px"
      },
      "5xl": {
        "value": "48px",
        "variable": "var(--typography-fontSize-5xl)",
        "raw": "48px"
      },
      "6xl": {
        "value": "60px",
        "variable": "var(--typography-fontSize-6xl)",
        "raw": "60px"
      },
      "7xl": {
        "value": "72px",
        "variable": "var(--typography-fontSize-7xl)",
        "raw": "72px"
      },
      "8xl": {
        "value": "96px",
        "variable": "var(--typography-fontSize-8xl)",
        "raw": "96px"
      },
      "9xl": {
        "value": "128px",
        "variable": "var(--typography-fontSize-9xl)",
        "raw": "128px"
      }
    },
    "fontWeight": {
      "thin": {
        "value": "100",
        "variable": "var(--typography-fontWeight-thin)",
        "raw": "100"
      },
      "extralight": {
        "value": "200",
        "variable": "var(--typography-fontWeight-extralight)",
        "raw": "200"
      },
      "light": {
        "value": "300",
        "variable": "var(--typography-fontWeight-light)",
        "raw": "300"
      },
      "normal": {
        "value": "400",
        "variable": "var(--typography-fontWeight-normal)",
        "raw": "400"
      },
      "medium": {
        "value": "500",
        "variable": "var(--typography-fontWeight-medium)",
        "raw": "500"
      },
      "semibold": {
        "value": "600",
        "variable": "var(--typography-fontWeight-semibold)",
        "raw": "600"
      },
      "bold": {
        "value": "700",
        "variable": "var(--typography-fontWeight-bold)",
        "raw": "700"
      },
      "extrabold": {
        "value": "800",
        "variable": "var(--typography-fontWeight-extrabold)",
        "raw": "800"
      },
      "black": {
        "value": "900",
        "variable": "var(--typography-fontWeight-black)",
        "raw": "900"
      }
    },
    "lead": {
      "1": {
        "value": ".025rem",
        "variable": "var(--typography-lead-1)",
        "raw": ".025rem"
      },
      "2": {
        "value": ".5rem",
        "variable": "var(--typography-lead-2)",
        "raw": ".5rem"
      },
      "3": {
        "value": ".75rem",
        "variable": "var(--typography-lead-3)",
        "raw": ".75rem"
      },
      "4": {
        "value": "1rem",
        "variable": "var(--typography-lead-4)",
        "raw": "1rem"
      },
      "5": {
        "value": "1.25rem",
        "variable": "var(--typography-lead-5)",
        "raw": "1.25rem"
      },
      "6": {
        "value": "1.5rem",
        "variable": "var(--typography-lead-6)",
        "raw": "1.5rem"
      },
      "7": {
        "value": "1.75rem",
        "variable": "var(--typography-lead-7)",
        "raw": "1.75rem"
      },
      "8": {
        "value": "2rem",
        "variable": "var(--typography-lead-8)",
        "raw": "2rem"
      },
      "9": {
        "value": "2.25rem",
        "variable": "var(--typography-lead-9)",
        "raw": "2.25rem"
      },
      "10": {
        "value": "2.5rem",
        "variable": "var(--typography-lead-10)",
        "raw": "2.5rem"
      },
      "none": {
        "value": "1",
        "variable": "var(--typography-lead-none)",
        "raw": "1"
      },
      "tight": {
        "value": "1.25",
        "variable": "var(--typography-lead-tight)",
        "raw": "1.25"
      },
      "snug": {
        "value": "1.375",
        "variable": "var(--typography-lead-snug)",
        "raw": "1.375"
      },
      "normal": {
        "value": "1.5",
        "variable": "var(--typography-lead-normal)",
        "raw": "1.5"
      },
      "relaxed": {
        "value": "1.625",
        "variable": "var(--typography-lead-relaxed)",
        "raw": "1.625"
      },
      "loose": {
        "value": "2",
        "variable": "var(--typography-lead-loose)",
        "raw": "2"
      }
    },
    "font": {
      "display": {
        "value": "var(--font-sans)",
        "variable": "var(--typography-font-display)",
        "raw": "{font.sans}"
      },
      "body": {
        "value": "var(--font-sans)",
        "variable": "var(--typography-font-body)",
        "raw": "{font.sans}"
      },
      "code": {
        "value": "var(--font-mono)",
        "variable": "var(--typography-font-code)",
        "raw": "{font.mono}"
      }
    },
    "color": {
      "primary": {
        "50": {
          "value": "var(--color-primary-50)",
          "variable": "var(--typography-color-primary-50)",
          "raw": "{color.primary.50}"
        },
        "100": {
          "value": "var(--color-primary-100)",
          "variable": "var(--typography-color-primary-100)",
          "raw": "{color.primary.100}"
        },
        "200": {
          "value": "var(--color-primary-200)",
          "variable": "var(--typography-color-primary-200)",
          "raw": "{color.primary.200}"
        },
        "300": {
          "value": "var(--color-primary-300)",
          "variable": "var(--typography-color-primary-300)",
          "raw": "{color.primary.300}"
        },
        "400": {
          "value": "var(--color-primary-400)",
          "variable": "var(--typography-color-primary-400)",
          "raw": "{color.primary.400}"
        },
        "500": {
          "value": "var(--color-primary-500)",
          "variable": "var(--typography-color-primary-500)",
          "raw": "{color.primary.500}"
        },
        "600": {
          "value": "var(--color-primary-600)",
          "variable": "var(--typography-color-primary-600)",
          "raw": "{color.primary.600}"
        },
        "700": {
          "value": "var(--color-primary-700)",
          "variable": "var(--typography-color-primary-700)",
          "raw": "{color.primary.700}"
        },
        "800": {
          "value": "var(--color-primary-800)",
          "variable": "var(--typography-color-primary-800)",
          "raw": "{color.primary.800}"
        },
        "900": {
          "value": "var(--color-primary-900)",
          "variable": "var(--typography-color-primary-900)",
          "raw": "{color.primary.900}"
        }
      },
      "secondary": {
        "50": {
          "value": "var(--color-gray-50)",
          "variable": "var(--typography-color-secondary-50)",
          "raw": "{color.gray.50}"
        },
        "100": {
          "value": "var(--color-gray-100)",
          "variable": "var(--typography-color-secondary-100)",
          "raw": "{color.gray.100}"
        },
        "200": {
          "value": "var(--color-gray-200)",
          "variable": "var(--typography-color-secondary-200)",
          "raw": "{color.gray.200}"
        },
        "300": {
          "value": "var(--color-gray-300)",
          "variable": "var(--typography-color-secondary-300)",
          "raw": "{color.gray.300}"
        },
        "400": {
          "value": "var(--color-gray-400)",
          "variable": "var(--typography-color-secondary-400)",
          "raw": "{color.gray.400}"
        },
        "500": {
          "value": "var(--color-gray-500)",
          "variable": "var(--typography-color-secondary-500)",
          "raw": "{color.gray.500}"
        },
        "600": {
          "value": "var(--color-gray-600)",
          "variable": "var(--typography-color-secondary-600)",
          "raw": "{color.gray.600}"
        },
        "700": {
          "value": "var(--color-gray-700)",
          "variable": "var(--typography-color-secondary-700)",
          "raw": "{color.gray.700}"
        },
        "800": {
          "value": "var(--color-gray-800)",
          "variable": "var(--typography-color-secondary-800)",
          "raw": "{color.gray.800}"
        },
        "900": {
          "value": "var(--color-gray-900)",
          "variable": "var(--typography-color-secondary-900)",
          "raw": "{color.gray.900}"
        }
      }
    }
  },
  "prose": {
    "p": {
      "fontSize": {
        "value": "var(--typography-fontSize-base)",
        "variable": "var(--prose-p-fontSize)",
        "raw": "{typography.fontSize.base}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-normal)",
        "variable": "var(--prose-p-lineHeight)",
        "raw": "{typography.lead.normal}"
      },
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-p-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      },
      "br": {
        "margin": {
          "value": "var(--typography-verticalMargin-base) 0 0 0",
          "variable": "var(--prose-p-br-margin)",
          "raw": "{typography.verticalMargin.base} 0 0 0"
        }
      }
    },
    "h1": {
      "margin": {
        "value": "0 0 2rem",
        "variable": "var(--prose-h1-margin)",
        "raw": "0 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-5xl)",
        "variable": "var(--prose-h1-fontSize)",
        "raw": "{typography.fontSize.5xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-tight)",
        "variable": "var(--prose-h1-lineHeight)",
        "raw": "{typography.lead.tight}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-bold)",
        "variable": "var(--prose-h1-fontWeight)",
        "raw": "{typography.fontWeight.bold}"
      },
      "letterSpacing": {
        "value": "var(--typography-letterSpacing-tight)",
        "variable": "var(--prose-h1-letterSpacing)",
        "raw": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-3xl)",
        "variable": "var(--prose-h1-iconSize)",
        "raw": "{typography.fontSize.3xl}"
      }
    },
    "h2": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h2-margin)",
        "raw": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-4xl)",
        "variable": "var(--prose-h2-fontSize)",
        "raw": "{typography.fontSize.4xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-tight)",
        "variable": "var(--prose-h2-lineHeight)",
        "raw": "{typography.lead.tight}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h2-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      },
      "letterSpacing": {
        "value": "var(--typography-letterSpacing-tight)",
        "variable": "var(--prose-h2-letterSpacing)",
        "raw": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-2xl)",
        "variable": "var(--prose-h2-iconSize)",
        "raw": "{typography.fontSize.2xl}"
      }
    },
    "h3": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h3-margin)",
        "raw": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-3xl)",
        "variable": "var(--prose-h3-fontSize)",
        "raw": "{typography.fontSize.3xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-snug)",
        "variable": "var(--prose-h3-lineHeight)",
        "raw": "{typography.lead.snug}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h3-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      },
      "letterSpacing": {
        "value": "var(--typography-letterSpacing-tight)",
        "variable": "var(--prose-h3-letterSpacing)",
        "raw": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-xl)",
        "variable": "var(--prose-h3-iconSize)",
        "raw": "{typography.fontSize.xl}"
      }
    },
    "h4": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h4-margin)",
        "raw": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-2xl)",
        "variable": "var(--prose-h4-fontSize)",
        "raw": "{typography.fontSize.2xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-snug)",
        "variable": "var(--prose-h4-lineHeight)",
        "raw": "{typography.lead.snug}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h4-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      },
      "letterSpacing": {
        "value": "var(--typography-letterSpacing-tight)",
        "variable": "var(--prose-h4-letterSpacing)",
        "raw": "{typography.letterSpacing.tight}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-lg)",
        "variable": "var(--prose-h4-iconSize)",
        "raw": "{typography.fontSize.lg}"
      }
    },
    "h5": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h5-margin)",
        "raw": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-xl)",
        "variable": "var(--prose-h5-fontSize)",
        "raw": "{typography.fontSize.xl}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-snug)",
        "variable": "var(--prose-h5-lineHeight)",
        "raw": "{typography.lead.snug}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h5-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-lg)",
        "variable": "var(--prose-h5-iconSize)",
        "raw": "{typography.fontSize.lg}"
      }
    },
    "h6": {
      "margin": {
        "value": "3rem 0 2rem",
        "variable": "var(--prose-h6-margin)",
        "raw": "3rem 0 2rem"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-lg)",
        "variable": "var(--prose-h6-fontSize)",
        "raw": "{typography.fontSize.lg}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-normal)",
        "variable": "var(--prose-h6-lineHeight)",
        "raw": "{typography.lead.normal}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-h6-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      },
      "iconSize": {
        "value": "var(--typography-fontSize-base)",
        "variable": "var(--prose-h6-iconSize)",
        "raw": "{typography.fontSize.base}"
      }
    },
    "strong": {
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-strong-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      }
    },
    "img": {
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-img-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      }
    },
    "a": {
      "textDecoration": {
        "value": "none",
        "variable": "var(--prose-a-textDecoration)",
        "raw": "none"
      },
      "color": {
        "static": {
          "value": {
            "initial": "inherit",
            "dark": "inherit"
          },
          "variable": "var(--prose-a-color-static)",
          "raw": {
            "initial": "inherit",
            "dark": "inherit"
          }
        },
        "hover": {
          "value": {
            "initial": "var(--typography-color-primary-500)",
            "dark": "var(--typography-color-primary-400)"
          },
          "variable": "var(--prose-a-color-hover)",
          "raw": {
            "initial": "{typography.color.primary.500}",
            "dark": "{typography.color.primary.400}"
          }
        }
      },
      "border": {
        "width": {
          "value": "1px",
          "variable": "var(--prose-a-border-width)",
          "raw": "1px"
        },
        "style": {
          "static": {
            "value": "dashed",
            "variable": "var(--prose-a-border-style-static)",
            "raw": "dashed"
          },
          "hover": {
            "value": "solid",
            "variable": "var(--prose-a-border-style-hover)",
            "raw": "solid"
          }
        },
        "color": {
          "static": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            },
            "variable": "var(--prose-a-border-color-static)",
            "raw": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          },
          "hover": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            },
            "variable": "var(--prose-a-border-color-hover)",
            "raw": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          }
        },
        "distance": {
          "value": "2px",
          "variable": "var(--prose-a-border-distance)",
          "raw": "2px"
        }
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-medium)",
        "variable": "var(--prose-a-fontWeight)",
        "raw": "{typography.fontWeight.medium}"
      },
      "hasCode": {
        "borderBottom": {
          "value": "none",
          "variable": "var(--prose-a-hasCode-borderBottom)",
          "raw": "none"
        }
      },
      "code": {
        "border": {
          "width": {
            "value": "var(--prose-a-border-width)",
            "variable": "var(--prose-a-code-border-width)",
            "raw": "{prose.a.border.width}"
          },
          "style": {
            "value": "var(--prose-a-border-style-static)",
            "variable": "var(--prose-a-code-border-style)",
            "raw": "{prose.a.border.style.static}"
          },
          "color": {
            "static": {
              "value": {
                "initial": "var(--typography-color-secondary-400)",
                "dark": "var(--typography-color-secondary-600)"
              },
              "variable": "var(--prose-a-code-border-color-static)",
              "raw": {
                "initial": "{typography.color.secondary.400}",
                "dark": "{typography.color.secondary.600}"
              }
            },
            "hover": {
              "value": {
                "initial": "var(--typography-color-primary-500)",
                "dark": "var(--typography-color-primary-600)"
              },
              "variable": "var(--prose-a-code-border-color-hover)",
              "raw": {
                "initial": "{typography.color.primary.500}",
                "dark": "{typography.color.primary.600}"
              }
            }
          }
        },
        "color": {
          "static": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            },
            "variable": "var(--prose-a-code-color-static)",
            "raw": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          },
          "hover": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            },
            "variable": "var(--prose-a-code-color-hover)",
            "raw": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          }
        },
        "background": {
          "static": {},
          "hover": {
            "value": {
              "initial": "var(--typography-color-primary-50)",
              "dark": "var(--typography-color-primary-900)"
            },
            "variable": "var(--prose-a-code-background-hover)",
            "raw": {
              "initial": "{typography.color.primary.50}",
              "dark": "{typography.color.primary.900}"
            }
          }
        }
      }
    },
    "blockquote": {
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-blockquote-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      },
      "paddingInlineStart": {
        "value": "24px",
        "variable": "var(--prose-blockquote-paddingInlineStart)",
        "raw": "24px"
      },
      "quotes": {
        "value": "'201C' '201D' '2018' '2019'",
        "variable": "var(--prose-blockquote-quotes)",
        "raw": "'201C' '201D' '2018' '2019'"
      },
      "color": {
        "value": {
          "initial": "var(--typography-color-secondary-500)",
          "dark": "var(--typography-color-secondary-400)"
        },
        "variable": "var(--prose-blockquote-color)",
        "raw": {
          "initial": "{typography.color.secondary.500}",
          "dark": "{typography.color.secondary.400}"
        }
      },
      "border": {
        "width": {
          "value": "4px",
          "variable": "var(--prose-blockquote-border-width)",
          "raw": "4px"
        },
        "style": {
          "value": "solid",
          "variable": "var(--prose-blockquote-border-style)",
          "raw": "solid"
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-200)",
            "dark": "var(--typography-color-secondary-700)"
          },
          "variable": "var(--prose-blockquote-border-color)",
          "raw": {
            "initial": "{typography.color.secondary.200}",
            "dark": "{typography.color.secondary.700}"
          }
        }
      }
    },
    "ul": {
      "listStyleType": {
        "value": "disc",
        "variable": "var(--prose-ul-listStyleType)",
        "raw": "disc"
      },
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-ul-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      },
      "paddingInlineStart": {
        "value": "21px",
        "variable": "var(--prose-ul-paddingInlineStart)",
        "raw": "21px"
      },
      "li": {
        "markerColor": {
          "value": {
            "initial": "currentColor",
            "dark": "currentColor"
          },
          "variable": "var(--prose-ul-li-markerColor)",
          "raw": {
            "initial": "currentColor",
            "dark": "currentColor"
          }
        }
      }
    },
    "ol": {
      "listStyleType": {
        "value": "decimal",
        "variable": "var(--prose-ol-listStyleType)",
        "raw": "decimal"
      },
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-ol-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      },
      "paddingInlineStart": {
        "value": "21px",
        "variable": "var(--prose-ol-paddingInlineStart)",
        "raw": "21px"
      },
      "li": {
        "markerColor": {
          "value": {
            "initial": "currentColor",
            "dark": "currentColor"
          },
          "variable": "var(--prose-ol-li-markerColor)",
          "raw": {
            "initial": "currentColor",
            "dark": "currentColor"
          }
        }
      }
    },
    "li": {
      "margin": {
        "value": "var(--typography-verticalMargin-sm) 0",
        "variable": "var(--prose-li-margin)",
        "raw": "{typography.verticalMargin.sm} 0"
      },
      "listStylePosition": {
        "value": "outside",
        "variable": "var(--prose-li-listStylePosition)",
        "raw": "outside"
      }
    },
    "hr": {
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-hr-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      },
      "style": {
        "value": "solid",
        "variable": "var(--prose-hr-style)",
        "raw": "solid"
      },
      "width": {
        "value": "1px",
        "variable": "var(--prose-hr-width)",
        "raw": "1px"
      },
      "color": {
        "value": {
          "initial": "var(--typography-color-secondary-200)",
          "dark": "var(--typography-color-secondary-800)"
        },
        "variable": "var(--prose-hr-color)",
        "raw": {
          "initial": "{typography.color.secondary.200}",
          "dark": "{typography.color.secondary.800}"
        }
      }
    },
    "table": {
      "margin": {
        "value": "var(--typography-verticalMargin-base) 0",
        "variable": "var(--prose-table-margin)",
        "raw": "{typography.verticalMargin.base} 0"
      },
      "textAlign": {
        "value": "start",
        "variable": "var(--prose-table-textAlign)",
        "raw": "start"
      },
      "fontSize": {
        "value": "var(--typography-fontSize-sm)",
        "variable": "var(--prose-table-fontSize)",
        "raw": "{typography.fontSize.sm}"
      },
      "lineHeight": {
        "value": "var(--typography-lead-6)",
        "variable": "var(--prose-table-lineHeight)",
        "raw": "{typography.lead.6}"
      }
    },
    "thead": {
      "border": {
        "width": {
          "value": "0px",
          "variable": "var(--prose-thead-border-width)",
          "raw": "0px"
        },
        "style": {
          "value": "solid",
          "variable": "var(--prose-thead-border-style)",
          "raw": "solid"
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-300)",
            "dark": "var(--typography-color-secondary-600)"
          },
          "variable": "var(--prose-thead-border-color)",
          "raw": {
            "initial": "{typography.color.secondary.300}",
            "dark": "{typography.color.secondary.600}"
          }
        }
      },
      "borderBottom": {
        "width": {
          "value": "1px",
          "variable": "var(--prose-thead-borderBottom-width)",
          "raw": "1px"
        },
        "style": {
          "value": "solid",
          "variable": "var(--prose-thead-borderBottom-style)",
          "raw": "solid"
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-200)",
            "dark": "var(--typography-color-secondary-800)"
          },
          "variable": "var(--prose-thead-borderBottom-color)",
          "raw": {
            "initial": "{typography.color.secondary.200}",
            "dark": "{typography.color.secondary.800}"
          }
        }
      }
    },
    "th": {
      "color": {
        "value": {
          "initial": "var(--typography-color-secondary-600)",
          "dark": "var(--typography-color-secondary-400)"
        },
        "variable": "var(--prose-th-color)",
        "raw": {
          "initial": "{typography.color.secondary.600}",
          "dark": "{typography.color.secondary.400}"
        }
      },
      "padding": {
        "value": "0 var(--typography-verticalMargin-sm) var(--typography-verticalMargin-sm) var(--typography-verticalMargin-sm)",
        "variable": "var(--prose-th-padding)",
        "raw": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
      },
      "fontWeight": {
        "value": "var(--typography-fontWeight-semibold)",
        "variable": "var(--prose-th-fontWeight)",
        "raw": "{typography.fontWeight.semibold}"
      },
      "textAlign": {
        "value": "inherit",
        "variable": "var(--prose-th-textAlign)",
        "raw": "inherit"
      }
    },
    "tbody": {
      "tr": {
        "borderBottom": {
          "width": {
            "value": "1px",
            "variable": "var(--prose-tbody-tr-borderBottom-width)",
            "raw": "1px"
          },
          "style": {
            "value": "dashed",
            "variable": "var(--prose-tbody-tr-borderBottom-style)",
            "raw": "dashed"
          },
          "color": {
            "value": {
              "initial": "var(--typography-color-secondary-200)",
              "dark": "var(--typography-color-secondary-800)"
            },
            "variable": "var(--prose-tbody-tr-borderBottom-color)",
            "raw": {
              "initial": "{typography.color.secondary.200}",
              "dark": "{typography.color.secondary.800}"
            }
          }
        }
      },
      "td": {
        "padding": {
          "value": "var(--typography-verticalMargin-sm)",
          "variable": "var(--prose-tbody-td-padding)",
          "raw": "{typography.verticalMargin.sm}"
        }
      },
      "code": {
        "inline": {
          "fontSize": {
            "value": "var(--typography-fontSize-sm)",
            "variable": "var(--prose-tbody-code-inline-fontSize)",
            "raw": "{typography.fontSize.sm}"
          }
        }
      }
    },
    "code": {
      "block": {
        "fontSize": {
          "value": "var(--typography-fontSize-sm)",
          "variable": "var(--prose-code-block-fontSize)",
          "raw": "{typography.fontSize.sm}"
        },
        "margin": {
          "value": "var(--typography-verticalMargin-base) 0",
          "variable": "var(--prose-code-block-margin)",
          "raw": "{typography.verticalMargin.base} 0"
        },
        "border": {
          "width": {
            "value": "1px",
            "variable": "var(--prose-code-block-border-width)",
            "raw": "1px"
          },
          "style": {
            "value": "solid",
            "variable": "var(--prose-code-block-border-style)",
            "raw": "solid"
          },
          "color": {
            "value": {
              "initial": "var(--typography-color-secondary-200)",
              "dark": "var(--typography-color-secondary-800)"
            },
            "variable": "var(--prose-code-block-border-color)",
            "raw": {
              "initial": "{typography.color.secondary.200}",
              "dark": "{typography.color.secondary.800}"
            }
          }
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-700)",
            "dark": "var(--typography-color-secondary-200)"
          },
          "variable": "var(--prose-code-block-color)",
          "raw": {
            "initial": "{typography.color.secondary.700}",
            "dark": "{typography.color.secondary.200}"
          }
        },
        "backgroundColor": {
          "value": {
            "initial": "var(--typography-color-secondary-100)",
            "dark": "var(--typography-color-secondary-900)"
          },
          "variable": "var(--prose-code-block-backgroundColor)",
          "raw": {
            "initial": "{typography.color.secondary.100}",
            "dark": "{typography.color.secondary.900}"
          }
        },
        "backdropFilter": {
          "value": {
            "initial": "contrast(1)",
            "dark": "contrast(1)"
          },
          "variable": "var(--prose-code-block-backdropFilter)",
          "raw": {
            "initial": "contrast(1)",
            "dark": "contrast(1)"
          }
        },
        "pre": {
          "padding": {
            "value": "var(--typography-verticalMargin-sm)",
            "variable": "var(--prose-code-block-pre-padding)",
            "raw": "{typography.verticalMargin.sm}"
          }
        }
      },
      "inline": {
        "borderRadius": {
          "value": "var(--radii-xs)",
          "variable": "var(--prose-code-inline-borderRadius)",
          "raw": "{radii.xs}"
        },
        "padding": {
          "value": "0.2rem 0.375rem 0.2rem 0.375rem",
          "variable": "var(--prose-code-inline-padding)",
          "raw": "0.2rem 0.375rem 0.2rem 0.375rem"
        },
        "fontSize": {
          "value": "var(--typography-fontSize-sm)",
          "variable": "var(--prose-code-inline-fontSize)",
          "raw": "{typography.fontSize.sm}"
        },
        "fontWeight": {
          "value": "var(--typography-fontWeight-normal)",
          "variable": "var(--prose-code-inline-fontWeight)",
          "raw": "{typography.fontWeight.normal}"
        },
        "color": {
          "value": {
            "initial": "var(--typography-color-secondary-700)",
            "dark": "var(--typography-color-secondary-200)"
          },
          "variable": "var(--prose-code-inline-color)",
          "raw": {
            "initial": "{typography.color.secondary.700}",
            "dark": "{typography.color.secondary.200}"
          }
        },
        "backgroundColor": {
          "value": {
            "initial": "var(--typography-color-secondary-100)",
            "dark": "var(--typography-color-secondary-800)"
          },
          "variable": "var(--prose-code-inline-backgroundColor)",
          "raw": {
            "initial": "{typography.color.secondary.100}",
            "dark": "{typography.color.secondary.800}"
          }
        }
      }
    }
  },
  "docus": {
    "body": {
      "backgroundColor": {
        "value": {
          "initial": "var(--color-white)",
          "dark": "var(--color-black)"
        },
        "variable": "var(--docus-body-backgroundColor)",
        "raw": {
          "initial": "{color.white}",
          "dark": "{color.black}"
        }
      },
      "color": {
        "value": {
          "initial": "var(--color-gray-800)",
          "dark": "var(--color-gray-200)"
        },
        "variable": "var(--docus-body-color)",
        "raw": {
          "initial": "{color.gray.800}",
          "dark": "{color.gray.200}"
        }
      },
      "fontFamily": {
        "value": "var(--font-sans)",
        "variable": "var(--docus-body-fontFamily)",
        "raw": "{font.sans}"
      }
    },
    "header": {
      "height": {
        "value": "64px",
        "variable": "var(--docus-header-height)",
        "raw": "64px"
      },
      "logo": {
        "height": {
          "value": {
            "initial": "var(--space-6)",
            "sm": "var(--space-7)"
          },
          "variable": "var(--docus-header-logo-height)",
          "raw": {
            "initial": "{space.6}",
            "sm": "{space.7}"
          }
        }
      },
      "title": {
        "fontSize": {
          "value": "var(--fontSize-2xl)",
          "variable": "var(--docus-header-title-fontSize)",
          "raw": "{fontSize.2xl}"
        },
        "fontWeight": {
          "value": "var(--fontWeight-bold)",
          "variable": "var(--docus-header-title-fontWeight)",
          "raw": "{fontWeight.bold}"
        },
        "color": {
          "static": {
            "value": {
              "initial": "var(--color-gray-900)",
              "dark": "var(--color-gray-100)"
            },
            "variable": "var(--docus-header-title-color-static)",
            "raw": {
              "initial": "{color.gray.900}",
              "dark": "{color.gray.100}"
            }
          },
          "hover": {
            "value": "var(--color-primary-500)",
            "variable": "var(--docus-header-title-color-hover)",
            "raw": "{color.primary.500}"
          }
        }
      }
    },
    "footer": {
      "height": {
        "value": {
          "initial": "145px",
          "sm": "100px"
        },
        "variable": "var(--docus-footer-height)",
        "raw": {
          "initial": "145px",
          "sm": "100px"
        }
      },
      "padding": {
        "value": "var(--space-4) 0",
        "variable": "var(--docus-footer-padding)",
        "raw": "{space.4} 0"
      }
    },
    "readableLine": {
      "value": "78ch",
      "variable": "var(--docus-readableLine)",
      "raw": "78ch"
    },
    "loadingBar": {
      "height": {
        "value": "3px",
        "variable": "var(--docus-loadingBar-height)",
        "raw": "3px"
      },
      "gradientColorStop1": {
        "value": "#00dc82",
        "variable": "var(--docus-loadingBar-gradientColorStop1)",
        "raw": "#00dc82"
      },
      "gradientColorStop2": {
        "value": "#34cdfe",
        "variable": "var(--docus-loadingBar-gradientColorStop2)",
        "raw": "#34cdfe"
      },
      "gradientColorStop3": {
        "value": "#0047e1",
        "variable": "var(--docus-loadingBar-gradientColorStop3)",
        "raw": "#0047e1"
      }
    },
    "search": {
      "backdropFilter": {
        "value": "blur(24px)",
        "variable": "var(--docus-search-backdropFilter)",
        "raw": "blur(24px)"
      },
      "input": {
        "borderRadius": {
          "value": "var(--radii-2xs)",
          "variable": "var(--docus-search-input-borderRadius)",
          "raw": "{radii.2xs}"
        },
        "borderWidth": {
          "value": "1px",
          "variable": "var(--docus-search-input-borderWidth)",
          "raw": "1px"
        },
        "borderStyle": {
          "value": "solid",
          "variable": "var(--docus-search-input-borderStyle)",
          "raw": "solid"
        },
        "borderColor": {
          "value": {
            "initial": "var(--color-gray-200)",
            "dark": "transparent"
          },
          "variable": "var(--docus-search-input-borderColor)",
          "raw": {
            "initial": "{color.gray.200}",
            "dark": "transparent"
          }
        },
        "fontSize": {
          "value": "var(--fontSize-sm)",
          "variable": "var(--docus-search-input-fontSize)",
          "raw": "{fontSize.sm}"
        },
        "gap": {
          "value": "var(--space-2)",
          "variable": "var(--docus-search-input-gap)",
          "raw": "{space.2}"
        },
        "padding": {
          "value": "var(--space-2) var(--space-4)",
          "variable": "var(--docus-search-input-padding)",
          "raw": "{space.2} {space.4}"
        },
        "backgroundColor": {
          "value": {
            "initial": "var(--color-gray-200)",
            "dark": "var(--color-gray-800)"
          },
          "variable": "var(--docus-search-input-backgroundColor)",
          "raw": {
            "initial": "{color.gray.200}",
            "dark": "{color.gray.800}"
          }
        }
      },
      "results": {
        "window": {
          "marginX": {
            "value": {
              "initial": "0",
              "sm": "var(--space-4)"
            },
            "variable": "var(--docus-search-results-window-marginX)",
            "raw": {
              "initial": "0",
              "sm": "{space.4}"
            }
          },
          "borderRadius": {
            "value": {
              "initial": "none",
              "sm": "var(--radii-xs)"
            },
            "variable": "var(--docus-search-results-window-borderRadius)",
            "raw": {
              "initial": "none",
              "sm": "{radii.xs}"
            }
          },
          "marginTop": {
            "value": {
              "initial": "0",
              "sm": "20vh"
            },
            "variable": "var(--docus-search-results-window-marginTop)",
            "raw": {
              "initial": "0",
              "sm": "20vh"
            }
          },
          "maxWidth": {
            "value": "640px",
            "variable": "var(--docus-search-results-window-maxWidth)",
            "raw": "640px"
          },
          "maxHeight": {
            "value": {
              "initial": "100%",
              "sm": "320px"
            },
            "variable": "var(--docus-search-results-window-maxHeight)",
            "raw": {
              "initial": "100%",
              "sm": "320px"
            }
          }
        },
        "selected": {
          "backgroundColor": {
            "value": {
              "initial": "var(--color-gray-300)",
              "dark": "var(--color-gray-700)"
            },
            "variable": "var(--docus-search-results-selected-backgroundColor)",
            "raw": {
              "initial": "{color.gray.300}",
              "dark": "{color.gray.700}"
            }
          }
        },
        "highlight": {
          "color": {
            "value": "white",
            "variable": "var(--docus-search-results-highlight-color)",
            "raw": "white"
          },
          "backgroundColor": {
            "value": "var(--color-primary-500)",
            "variable": "var(--docus-search-results-highlight-backgroundColor)",
            "raw": "{color.primary.500}"
          }
        }
      }
    }
  }
};
const pinceau_nuxt_plugin_server_KEuz79zT4K = /* @__PURE__ */ defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.use(plugin, { colorSchemeMode: "class", theme, utils });
  nuxtApp.hook("app:rendered", async (app) => {
    app.ssrContext.event.pinceauContent = app.ssrContext.event.pinceauContent || {};
    const content = app.ssrContext.nuxt.vueApp.config.globalProperties.$pinceauSsr.get();
    app.ssrContext.event.pinceauContent.runtime = content;
  });
});
const schema = {
  "properties": {
    "id": "#tokensConfig",
    "properties": {
      "media": {
        "title": "Your website media queries.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType color",
          "@studioIcon material-symbols:screenshot-monitor-outline-rounded"
        ],
        "id": "#tokensConfig/media",
        "properties": {
          "xs": {
            "id": "#tokensConfig/media/xs",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/xs/value",
                "default": "(min-width: 475px)"
              }
            },
            "type": "object",
            "default": {
              "value": "(min-width: 475px)"
            }
          },
          "sm": {
            "id": "#tokensConfig/media/sm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/sm/value",
                "default": "(min-width: 640px)"
              }
            },
            "type": "object",
            "default": {
              "value": "(min-width: 640px)"
            }
          },
          "md": {
            "id": "#tokensConfig/media/md",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/md/value",
                "default": "(min-width: 768px)"
              }
            },
            "type": "object",
            "default": {
              "value": "(min-width: 768px)"
            }
          },
          "lg": {
            "id": "#tokensConfig/media/lg",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/lg/value",
                "default": "(min-width: 1024px)"
              }
            },
            "type": "object",
            "default": {
              "value": "(min-width: 1024px)"
            }
          },
          "xl": {
            "id": "#tokensConfig/media/xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/xl/value",
                "default": "(min-width: 1280px)"
              }
            },
            "type": "object",
            "default": {
              "value": "(min-width: 1280px)"
            }
          },
          "2xl": {
            "id": "#tokensConfig/media/2xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/2xl/value",
                "default": "(min-width: 1536px)"
              }
            },
            "type": "object",
            "default": {
              "value": "(min-width: 1536px)"
            }
          },
          "rm": {
            "id": "#tokensConfig/media/rm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/rm/value",
                "default": "(prefers-reduced-motion: reduce)"
              }
            },
            "type": "object",
            "default": {
              "value": "(prefers-reduced-motion: reduce)"
            }
          },
          "landscape": {
            "id": "#tokensConfig/media/landscape",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/landscape/value",
                "default": "only screen and (orientation: landscape)"
              }
            },
            "type": "object",
            "default": {
              "value": "only screen and (orientation: landscape)"
            }
          },
          "portrait": {
            "id": "#tokensConfig/media/portrait",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/media/portrait/value",
                "default": "only screen and (orientation: portrait)"
              }
            },
            "type": "object",
            "default": {
              "value": "only screen and (orientation: portrait)"
            }
          }
        },
        "type": "object",
        "default": {
          "xs": {
            "value": "(min-width: 475px)"
          },
          "sm": {
            "value": "(min-width: 640px)"
          },
          "md": {
            "value": "(min-width: 768px)"
          },
          "lg": {
            "value": "(min-width: 1024px)"
          },
          "xl": {
            "value": "(min-width: 1280px)"
          },
          "2xl": {
            "value": "(min-width: 1536px)"
          },
          "rm": {
            "value": "(prefers-reduced-motion: reduce)"
          },
          "landscape": {
            "value": "only screen and (orientation: landscape)"
          },
          "portrait": {
            "value": "only screen and (orientation: portrait)"
          }
        }
      },
      "color": {
        "title": "Your website color palette.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType color",
          "@studioIcon ph:palette"
        ],
        "id": "#tokensConfig/color",
        "properties": {
          "white": {
            "id": "#tokensConfig/color/white",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/color/white/value",
                "default": "#ffffff"
              }
            },
            "type": "object",
            "default": {
              "value": "#ffffff"
            }
          },
          "black": {
            "id": "#tokensConfig/color/black",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/color/black/value",
                "default": "#0B0A0A"
              }
            },
            "type": "object",
            "default": {
              "value": "#0B0A0A"
            }
          },
          "gray": {
            "id": "#tokensConfig/color/gray",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/gray/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/50/value",
                    "default": "#FBFBFB"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FBFBFB"
                }
              },
              "100": {
                "id": "#tokensConfig/color/gray/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/100/value",
                    "default": "#F6F5F4"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#F6F5F4"
                }
              },
              "200": {
                "id": "#tokensConfig/color/gray/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/200/value",
                    "default": "#ECEBE8"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ECEBE8"
                }
              },
              "300": {
                "id": "#tokensConfig/color/gray/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/300/value",
                    "default": "#DBD9D3"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#DBD9D3"
                }
              },
              "400": {
                "id": "#tokensConfig/color/gray/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/400/value",
                    "default": "#ADA9A4"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ADA9A4"
                }
              },
              "500": {
                "id": "#tokensConfig/color/gray/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/500/value",
                    "default": "#97948F"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#97948F"
                }
              },
              "600": {
                "id": "#tokensConfig/color/gray/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/600/value",
                    "default": "#67635D"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#67635D"
                }
              },
              "700": {
                "id": "#tokensConfig/color/gray/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/700/value",
                    "default": "#36332E"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#36332E"
                }
              },
              "800": {
                "id": "#tokensConfig/color/gray/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/800/value",
                    "default": "#201E1B"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#201E1B"
                }
              },
              "900": {
                "id": "#tokensConfig/color/gray/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/gray/900/value",
                    "default": "#121110"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#121110"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#FBFBFB"
              },
              "100": {
                "value": "#F6F5F4"
              },
              "200": {
                "value": "#ECEBE8"
              },
              "300": {
                "value": "#DBD9D3"
              },
              "400": {
                "value": "#ADA9A4"
              },
              "500": {
                "value": "#97948F"
              },
              "600": {
                "value": "#67635D"
              },
              "700": {
                "value": "#36332E"
              },
              "800": {
                "value": "#201E1B"
              },
              "900": {
                "value": "#121110"
              }
            }
          },
          "green": {
            "id": "#tokensConfig/color/green",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/green/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/50/value",
                    "default": "#ECFFF7"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ECFFF7"
                }
              },
              "100": {
                "id": "#tokensConfig/color/green/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/100/value",
                    "default": "#DEFFF1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#DEFFF1"
                }
              },
              "200": {
                "id": "#tokensConfig/color/green/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/200/value",
                    "default": "#C3FFE6"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#C3FFE6"
                }
              },
              "300": {
                "id": "#tokensConfig/color/green/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/300/value",
                    "default": "#86FBCB"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#86FBCB"
                }
              },
              "400": {
                "id": "#tokensConfig/color/green/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/400/value",
                    "default": "#3CEEA5"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#3CEEA5"
                }
              },
              "500": {
                "id": "#tokensConfig/color/green/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/500/value",
                    "default": "#0DD885"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0DD885"
                }
              },
              "600": {
                "id": "#tokensConfig/color/green/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/600/value",
                    "default": "#00B467"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#00B467"
                }
              },
              "700": {
                "id": "#tokensConfig/color/green/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/700/value",
                    "default": "#006037"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#006037"
                }
              },
              "800": {
                "id": "#tokensConfig/color/green/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/800/value",
                    "default": "#002817"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#002817"
                }
              },
              "900": {
                "id": "#tokensConfig/color/green/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/green/900/value",
                    "default": "#00190F"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#00190F"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#ECFFF7"
              },
              "100": {
                "value": "#DEFFF1"
              },
              "200": {
                "value": "#C3FFE6"
              },
              "300": {
                "value": "#86FBCB"
              },
              "400": {
                "value": "#3CEEA5"
              },
              "500": {
                "value": "#0DD885"
              },
              "600": {
                "value": "#00B467"
              },
              "700": {
                "value": "#006037"
              },
              "800": {
                "value": "#002817"
              },
              "900": {
                "value": "#00190F"
              }
            }
          },
          "yellow": {
            "id": "#tokensConfig/color/yellow",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/yellow/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/50/value",
                    "default": "#FFFCEE"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FFFCEE"
                }
              },
              "100": {
                "id": "#tokensConfig/color/yellow/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/100/value",
                    "default": "#FFF6D3"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FFF6D3"
                }
              },
              "200": {
                "id": "#tokensConfig/color/yellow/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/200/value",
                    "default": "#FFF0B1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FFF0B1"
                }
              },
              "300": {
                "id": "#tokensConfig/color/yellow/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/300/value",
                    "default": "#FFE372"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FFE372"
                }
              },
              "400": {
                "id": "#tokensConfig/color/yellow/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/400/value",
                    "default": "#FFDC4E"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FFDC4E"
                }
              },
              "500": {
                "id": "#tokensConfig/color/yellow/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/500/value",
                    "default": "#FBCA05"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FBCA05"
                }
              },
              "600": {
                "id": "#tokensConfig/color/yellow/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/600/value",
                    "default": "#CBA408"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#CBA408"
                }
              },
              "700": {
                "id": "#tokensConfig/color/yellow/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/700/value",
                    "default": "#614E02"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#614E02"
                }
              },
              "800": {
                "id": "#tokensConfig/color/yellow/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/800/value",
                    "default": "#292100"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#292100"
                }
              },
              "900": {
                "id": "#tokensConfig/color/yellow/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/yellow/900/value",
                    "default": "#1B1500"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#1B1500"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#FFFCEE"
              },
              "100": {
                "value": "#FFF6D3"
              },
              "200": {
                "value": "#FFF0B1"
              },
              "300": {
                "value": "#FFE372"
              },
              "400": {
                "value": "#FFDC4E"
              },
              "500": {
                "value": "#FBCA05"
              },
              "600": {
                "value": "#CBA408"
              },
              "700": {
                "value": "#614E02"
              },
              "800": {
                "value": "#292100"
              },
              "900": {
                "value": "#1B1500"
              }
            }
          },
          "orange": {
            "id": "#tokensConfig/color/orange",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/orange/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/50/value",
                    "default": "#ffe9d9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffe9d9"
                }
              },
              "100": {
                "id": "#tokensConfig/color/orange/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/100/value",
                    "default": "#ffd3b3"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffd3b3"
                }
              },
              "200": {
                "id": "#tokensConfig/color/orange/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/200/value",
                    "default": "#ffbd8d"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffbd8d"
                }
              },
              "300": {
                "id": "#tokensConfig/color/orange/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/300/value",
                    "default": "#ffa666"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffa666"
                }
              },
              "400": {
                "id": "#tokensConfig/color/orange/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/400/value",
                    "default": "#ff9040"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff9040"
                }
              },
              "500": {
                "id": "#tokensConfig/color/orange/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/500/value",
                    "default": "#ff7a1a"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff7a1a"
                }
              },
              "600": {
                "id": "#tokensConfig/color/orange/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/600/value",
                    "default": "#e15e00"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#e15e00"
                }
              },
              "700": {
                "id": "#tokensConfig/color/orange/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/700/value",
                    "default": "#a94700"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a94700"
                }
              },
              "800": {
                "id": "#tokensConfig/color/orange/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/800/value",
                    "default": "#702f00"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#702f00"
                }
              },
              "900": {
                "id": "#tokensConfig/color/orange/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/orange/900/value",
                    "default": "#381800"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#381800"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#ffe9d9"
              },
              "100": {
                "value": "#ffd3b3"
              },
              "200": {
                "value": "#ffbd8d"
              },
              "300": {
                "value": "#ffa666"
              },
              "400": {
                "value": "#ff9040"
              },
              "500": {
                "value": "#ff7a1a"
              },
              "600": {
                "value": "#e15e00"
              },
              "700": {
                "value": "#a94700"
              },
              "800": {
                "value": "#702f00"
              },
              "900": {
                "value": "#381800"
              }
            }
          },
          "red": {
            "id": "#tokensConfig/color/red",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/red/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/50/value",
                    "default": "#FFF9F8"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FFF9F8"
                }
              },
              "100": {
                "id": "#tokensConfig/color/red/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/100/value",
                    "default": "#FFF3F0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FFF3F0"
                }
              },
              "200": {
                "id": "#tokensConfig/color/red/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/200/value",
                    "default": "#FFDED7"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FFDED7"
                }
              },
              "300": {
                "id": "#tokensConfig/color/red/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/300/value",
                    "default": "#FFA692"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FFA692"
                }
              },
              "400": {
                "id": "#tokensConfig/color/red/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/400/value",
                    "default": "#FF7353"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FF7353"
                }
              },
              "500": {
                "id": "#tokensConfig/color/red/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/500/value",
                    "default": "#FF3B10"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#FF3B10"
                }
              },
              "600": {
                "id": "#tokensConfig/color/red/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/600/value",
                    "default": "#BB2402"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#BB2402"
                }
              },
              "700": {
                "id": "#tokensConfig/color/red/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/700/value",
                    "default": "#701704"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#701704"
                }
              },
              "800": {
                "id": "#tokensConfig/color/red/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/800/value",
                    "default": "#340A01"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#340A01"
                }
              },
              "900": {
                "id": "#tokensConfig/color/red/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/red/900/value",
                    "default": "#1C0301"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#1C0301"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#FFF9F8"
              },
              "100": {
                "value": "#FFF3F0"
              },
              "200": {
                "value": "#FFDED7"
              },
              "300": {
                "value": "#FFA692"
              },
              "400": {
                "value": "#FF7353"
              },
              "500": {
                "value": "#FF3B10"
              },
              "600": {
                "value": "#BB2402"
              },
              "700": {
                "value": "#701704"
              },
              "800": {
                "value": "#340A01"
              },
              "900": {
                "value": "#1C0301"
              }
            }
          },
          "pear": {
            "id": "#tokensConfig/color/pear",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/pear/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/50/value",
                    "default": "#f7f8dc"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#f7f8dc"
                }
              },
              "100": {
                "id": "#tokensConfig/color/pear/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/100/value",
                    "default": "#eff0ba"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#eff0ba"
                }
              },
              "200": {
                "id": "#tokensConfig/color/pear/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/200/value",
                    "default": "#e8e997"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#e8e997"
                }
              },
              "300": {
                "id": "#tokensConfig/color/pear/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/300/value",
                    "default": "#e0e274"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#e0e274"
                }
              },
              "400": {
                "id": "#tokensConfig/color/pear/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/400/value",
                    "default": "#d8da52"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d8da52"
                }
              },
              "500": {
                "id": "#tokensConfig/color/pear/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/500/value",
                    "default": "#d0d32f"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d0d32f"
                }
              },
              "600": {
                "id": "#tokensConfig/color/pear/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/600/value",
                    "default": "#a8aa24"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a8aa24"
                }
              },
              "700": {
                "id": "#tokensConfig/color/pear/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/700/value",
                    "default": "#7e801b"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#7e801b"
                }
              },
              "800": {
                "id": "#tokensConfig/color/pear/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/800/value",
                    "default": "#545512"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#545512"
                }
              },
              "900": {
                "id": "#tokensConfig/color/pear/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pear/900/value",
                    "default": "#2a2b09"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#2a2b09"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#f7f8dc"
              },
              "100": {
                "value": "#eff0ba"
              },
              "200": {
                "value": "#e8e997"
              },
              "300": {
                "value": "#e0e274"
              },
              "400": {
                "value": "#d8da52"
              },
              "500": {
                "value": "#d0d32f"
              },
              "600": {
                "value": "#a8aa24"
              },
              "700": {
                "value": "#7e801b"
              },
              "800": {
                "value": "#545512"
              },
              "900": {
                "value": "#2a2b09"
              }
            }
          },
          "teal": {
            "id": "#tokensConfig/color/teal",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/teal/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/50/value",
                    "default": "#d7faf8"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d7faf8"
                }
              },
              "100": {
                "id": "#tokensConfig/color/teal/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/100/value",
                    "default": "#aff4f0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#aff4f0"
                }
              },
              "200": {
                "id": "#tokensConfig/color/teal/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/200/value",
                    "default": "#87efe9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#87efe9"
                }
              },
              "300": {
                "id": "#tokensConfig/color/teal/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/300/value",
                    "default": "#5fe9e1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#5fe9e1"
                }
              },
              "400": {
                "id": "#tokensConfig/color/teal/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/400/value",
                    "default": "#36e4da"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#36e4da"
                }
              },
              "500": {
                "id": "#tokensConfig/color/teal/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/500/value",
                    "default": "#1cd1c6"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#1cd1c6"
                }
              },
              "600": {
                "id": "#tokensConfig/color/teal/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/600/value",
                    "default": "#16a79e"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#16a79e"
                }
              },
              "700": {
                "id": "#tokensConfig/color/teal/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/700/value",
                    "default": "#117d77"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#117d77"
                }
              },
              "800": {
                "id": "#tokensConfig/color/teal/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/800/value",
                    "default": "#0b544f"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0b544f"
                }
              },
              "900": {
                "id": "#tokensConfig/color/teal/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/teal/900/value",
                    "default": "#062a28"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#062a28"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#d7faf8"
              },
              "100": {
                "value": "#aff4f0"
              },
              "200": {
                "value": "#87efe9"
              },
              "300": {
                "value": "#5fe9e1"
              },
              "400": {
                "value": "#36e4da"
              },
              "500": {
                "value": "#1cd1c6"
              },
              "600": {
                "value": "#16a79e"
              },
              "700": {
                "value": "#117d77"
              },
              "800": {
                "value": "#0b544f"
              },
              "900": {
                "value": "#062a28"
              }
            }
          },
          "lightblue": {
            "id": "#tokensConfig/color/lightblue",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/lightblue/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/50/value",
                    "default": "#d9f8ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d9f8ff"
                }
              },
              "100": {
                "id": "#tokensConfig/color/lightblue/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/100/value",
                    "default": "#b3f1ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#b3f1ff"
                }
              },
              "200": {
                "id": "#tokensConfig/color/lightblue/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/200/value",
                    "default": "#8deaff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#8deaff"
                }
              },
              "300": {
                "id": "#tokensConfig/color/lightblue/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/300/value",
                    "default": "#66e4ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#66e4ff"
                }
              },
              "400": {
                "id": "#tokensConfig/color/lightblue/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/400/value",
                    "default": "#40ddff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#40ddff"
                }
              },
              "500": {
                "id": "#tokensConfig/color/lightblue/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/500/value",
                    "default": "#1ad6ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#1ad6ff"
                }
              },
              "600": {
                "id": "#tokensConfig/color/lightblue/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/600/value",
                    "default": "#00b9e1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#00b9e1"
                }
              },
              "700": {
                "id": "#tokensConfig/color/lightblue/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/700/value",
                    "default": "#008aa9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#008aa9"
                }
              },
              "800": {
                "id": "#tokensConfig/color/lightblue/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/800/value",
                    "default": "#005c70"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#005c70"
                }
              },
              "900": {
                "id": "#tokensConfig/color/lightblue/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/lightblue/900/value",
                    "default": "#002e38"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#002e38"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#d9f8ff"
              },
              "100": {
                "value": "#b3f1ff"
              },
              "200": {
                "value": "#8deaff"
              },
              "300": {
                "value": "#66e4ff"
              },
              "400": {
                "value": "#40ddff"
              },
              "500": {
                "value": "#1ad6ff"
              },
              "600": {
                "value": "#00b9e1"
              },
              "700": {
                "value": "#008aa9"
              },
              "800": {
                "value": "#005c70"
              },
              "900": {
                "value": "#002e38"
              }
            }
          },
          "blue": {
            "id": "#tokensConfig/color/blue",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/blue/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/50/value",
                    "default": "#F2FAFF"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#F2FAFF"
                }
              },
              "100": {
                "id": "#tokensConfig/color/blue/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/100/value",
                    "default": "#DFF3FF"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#DFF3FF"
                }
              },
              "200": {
                "id": "#tokensConfig/color/blue/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/200/value",
                    "default": "#C6EAFF"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#C6EAFF"
                }
              },
              "300": {
                "id": "#tokensConfig/color/blue/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/300/value",
                    "default": "#A1DDFF"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#A1DDFF"
                }
              },
              "400": {
                "id": "#tokensConfig/color/blue/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/400/value",
                    "default": "#64C7FF"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#64C7FF"
                }
              },
              "500": {
                "id": "#tokensConfig/color/blue/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/500/value",
                    "default": "#1AADFF"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#1AADFF"
                }
              },
              "600": {
                "id": "#tokensConfig/color/blue/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/600/value",
                    "default": "#0069A6"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0069A6"
                }
              },
              "700": {
                "id": "#tokensConfig/color/blue/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/700/value",
                    "default": "#014267"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#014267"
                }
              },
              "800": {
                "id": "#tokensConfig/color/blue/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/800/value",
                    "default": "#002235"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#002235"
                }
              },
              "900": {
                "id": "#tokensConfig/color/blue/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/blue/900/value",
                    "default": "#00131D"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#00131D"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#F2FAFF"
              },
              "100": {
                "value": "#DFF3FF"
              },
              "200": {
                "value": "#C6EAFF"
              },
              "300": {
                "value": "#A1DDFF"
              },
              "400": {
                "value": "#64C7FF"
              },
              "500": {
                "value": "#1AADFF"
              },
              "600": {
                "value": "#0069A6"
              },
              "700": {
                "value": "#014267"
              },
              "800": {
                "value": "#002235"
              },
              "900": {
                "value": "#00131D"
              }
            }
          },
          "indigoblue": {
            "id": "#tokensConfig/color/indigoblue",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/indigoblue/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/50/value",
                    "default": "#d9e5ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d9e5ff"
                }
              },
              "100": {
                "id": "#tokensConfig/color/indigoblue/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/100/value",
                    "default": "#b3cbff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#b3cbff"
                }
              },
              "200": {
                "id": "#tokensConfig/color/indigoblue/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/200/value",
                    "default": "#8db0ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#8db0ff"
                }
              },
              "300": {
                "id": "#tokensConfig/color/indigoblue/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/300/value",
                    "default": "#6696ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#6696ff"
                }
              },
              "400": {
                "id": "#tokensConfig/color/indigoblue/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/400/value",
                    "default": "#407cff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#407cff"
                }
              },
              "500": {
                "id": "#tokensConfig/color/indigoblue/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/500/value",
                    "default": "#1a62ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#1a62ff"
                }
              },
              "600": {
                "id": "#tokensConfig/color/indigoblue/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/600/value",
                    "default": "#0047e1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0047e1"
                }
              },
              "700": {
                "id": "#tokensConfig/color/indigoblue/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/700/value",
                    "default": "#0035a9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0035a9"
                }
              },
              "800": {
                "id": "#tokensConfig/color/indigoblue/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/800/value",
                    "default": "#002370"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#002370"
                }
              },
              "900": {
                "id": "#tokensConfig/color/indigoblue/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/indigoblue/900/value",
                    "default": "#001238"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#001238"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#d9e5ff"
              },
              "100": {
                "value": "#b3cbff"
              },
              "200": {
                "value": "#8db0ff"
              },
              "300": {
                "value": "#6696ff"
              },
              "400": {
                "value": "#407cff"
              },
              "500": {
                "value": "#1a62ff"
              },
              "600": {
                "value": "#0047e1"
              },
              "700": {
                "value": "#0035a9"
              },
              "800": {
                "value": "#002370"
              },
              "900": {
                "value": "#001238"
              }
            }
          },
          "royalblue": {
            "id": "#tokensConfig/color/royalblue",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/royalblue/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/50/value",
                    "default": "#dfdbfb"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#dfdbfb"
                }
              },
              "100": {
                "id": "#tokensConfig/color/royalblue/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/100/value",
                    "default": "#c0b7f7"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#c0b7f7"
                }
              },
              "200": {
                "id": "#tokensConfig/color/royalblue/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/200/value",
                    "default": "#a093f3"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a093f3"
                }
              },
              "300": {
                "id": "#tokensConfig/color/royalblue/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/300/value",
                    "default": "#806ff0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#806ff0"
                }
              },
              "400": {
                "id": "#tokensConfig/color/royalblue/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/400/value",
                    "default": "#614bec"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#614bec"
                }
              },
              "500": {
                "id": "#tokensConfig/color/royalblue/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/500/value",
                    "default": "#4127e8"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#4127e8"
                }
              },
              "600": {
                "id": "#tokensConfig/color/royalblue/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/600/value",
                    "default": "#2c15c4"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#2c15c4"
                }
              },
              "700": {
                "id": "#tokensConfig/color/royalblue/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/700/value",
                    "default": "#211093"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#211093"
                }
              },
              "800": {
                "id": "#tokensConfig/color/royalblue/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/800/value",
                    "default": "#160a62"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#160a62"
                }
              },
              "900": {
                "id": "#tokensConfig/color/royalblue/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/royalblue/900/value",
                    "default": "#0b0531"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0b0531"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#dfdbfb"
              },
              "100": {
                "value": "#c0b7f7"
              },
              "200": {
                "value": "#a093f3"
              },
              "300": {
                "value": "#806ff0"
              },
              "400": {
                "value": "#614bec"
              },
              "500": {
                "value": "#4127e8"
              },
              "600": {
                "value": "#2c15c4"
              },
              "700": {
                "value": "#211093"
              },
              "800": {
                "value": "#160a62"
              },
              "900": {
                "value": "#0b0531"
              }
            }
          },
          "purple": {
            "id": "#tokensConfig/color/purple",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/purple/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/50/value",
                    "default": "#ead9ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ead9ff"
                }
              },
              "100": {
                "id": "#tokensConfig/color/purple/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/100/value",
                    "default": "#d5b3ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#d5b3ff"
                }
              },
              "200": {
                "id": "#tokensConfig/color/purple/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/200/value",
                    "default": "#c08dff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#c08dff"
                }
              },
              "300": {
                "id": "#tokensConfig/color/purple/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/300/value",
                    "default": "#ab66ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ab66ff"
                }
              },
              "400": {
                "id": "#tokensConfig/color/purple/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/400/value",
                    "default": "#9640ff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#9640ff"
                }
              },
              "500": {
                "id": "#tokensConfig/color/purple/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/500/value",
                    "default": "#811aff"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#811aff"
                }
              },
              "600": {
                "id": "#tokensConfig/color/purple/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/600/value",
                    "default": "#6500e1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#6500e1"
                }
              },
              "700": {
                "id": "#tokensConfig/color/purple/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/700/value",
                    "default": "#4c00a9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#4c00a9"
                }
              },
              "800": {
                "id": "#tokensConfig/color/purple/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/800/value",
                    "default": "#330070"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#330070"
                }
              },
              "900": {
                "id": "#tokensConfig/color/purple/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/purple/900/value",
                    "default": "#190038"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#190038"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#ead9ff"
              },
              "100": {
                "value": "#d5b3ff"
              },
              "200": {
                "value": "#c08dff"
              },
              "300": {
                "value": "#ab66ff"
              },
              "400": {
                "value": "#9640ff"
              },
              "500": {
                "value": "#811aff"
              },
              "600": {
                "value": "#6500e1"
              },
              "700": {
                "value": "#4c00a9"
              },
              "800": {
                "value": "#330070"
              },
              "900": {
                "value": "#190038"
              }
            }
          },
          "pink": {
            "id": "#tokensConfig/color/pink",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/pink/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/50/value",
                    "default": "#ffd9f2"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffd9f2"
                }
              },
              "100": {
                "id": "#tokensConfig/color/pink/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/100/value",
                    "default": "#ffb3e5"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffb3e5"
                }
              },
              "200": {
                "id": "#tokensConfig/color/pink/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/200/value",
                    "default": "#ff8dd8"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff8dd8"
                }
              },
              "300": {
                "id": "#tokensConfig/color/pink/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/300/value",
                    "default": "#ff66cc"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff66cc"
                }
              },
              "400": {
                "id": "#tokensConfig/color/pink/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/400/value",
                    "default": "#ff40bf"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff40bf"
                }
              },
              "500": {
                "id": "#tokensConfig/color/pink/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/500/value",
                    "default": "#ff1ab2"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff1ab2"
                }
              },
              "600": {
                "id": "#tokensConfig/color/pink/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/600/value",
                    "default": "#e10095"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#e10095"
                }
              },
              "700": {
                "id": "#tokensConfig/color/pink/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/700/value",
                    "default": "#a90070"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a90070"
                }
              },
              "800": {
                "id": "#tokensConfig/color/pink/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/800/value",
                    "default": "#70004b"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#70004b"
                }
              },
              "900": {
                "id": "#tokensConfig/color/pink/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/pink/900/value",
                    "default": "#380025"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#380025"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#ffd9f2"
              },
              "100": {
                "value": "#ffb3e5"
              },
              "200": {
                "value": "#ff8dd8"
              },
              "300": {
                "value": "#ff66cc"
              },
              "400": {
                "value": "#ff40bf"
              },
              "500": {
                "value": "#ff1ab2"
              },
              "600": {
                "value": "#e10095"
              },
              "700": {
                "value": "#a90070"
              },
              "800": {
                "value": "#70004b"
              },
              "900": {
                "value": "#380025"
              }
            }
          },
          "ruby": {
            "id": "#tokensConfig/color/ruby",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/ruby/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/50/value",
                    "default": "#ffd9e4"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffd9e4"
                }
              },
              "100": {
                "id": "#tokensConfig/color/ruby/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/100/value",
                    "default": "#ffb3c9"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ffb3c9"
                }
              },
              "200": {
                "id": "#tokensConfig/color/ruby/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/200/value",
                    "default": "#ff8dae"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff8dae"
                }
              },
              "300": {
                "id": "#tokensConfig/color/ruby/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/300/value",
                    "default": "#ff6694"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff6694"
                }
              },
              "400": {
                "id": "#tokensConfig/color/ruby/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/400/value",
                    "default": "#ff4079"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff4079"
                }
              },
              "500": {
                "id": "#tokensConfig/color/ruby/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/500/value",
                    "default": "#ff1a5e"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#ff1a5e"
                }
              },
              "600": {
                "id": "#tokensConfig/color/ruby/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/600/value",
                    "default": "#e10043"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#e10043"
                }
              },
              "700": {
                "id": "#tokensConfig/color/ruby/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/700/value",
                    "default": "#a90032"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#a90032"
                }
              },
              "800": {
                "id": "#tokensConfig/color/ruby/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/800/value",
                    "default": "#700021"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#700021"
                }
              },
              "900": {
                "id": "#tokensConfig/color/ruby/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/ruby/900/value",
                    "default": "#380011"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#380011"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#ffd9e4"
              },
              "100": {
                "value": "#ffb3c9"
              },
              "200": {
                "value": "#ff8dae"
              },
              "300": {
                "value": "#ff6694"
              },
              "400": {
                "value": "#ff4079"
              },
              "500": {
                "value": "#ff1a5e"
              },
              "600": {
                "value": "#e10043"
              },
              "700": {
                "value": "#a90032"
              },
              "800": {
                "value": "#700021"
              },
              "900": {
                "value": "#380011"
              }
            }
          },
          "primary": {
            "id": "#tokensConfig/color/primary",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/primary/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/50/value",
                    "default": "#F1FCFF"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#F1FCFF"
                }
              },
              "100": {
                "id": "#tokensConfig/color/primary/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/100/value",
                    "default": "#DCF7FF"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#DCF7FF"
                }
              },
              "200": {
                "id": "#tokensConfig/color/primary/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/200/value",
                    "default": "#C5F2FF"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#C5F2FF"
                }
              },
              "300": {
                "id": "#tokensConfig/color/primary/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/300/value",
                    "default": "#82E3FF"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#82E3FF"
                }
              },
              "400": {
                "id": "#tokensConfig/color/primary/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/400/value",
                    "default": "#55E1FF"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#55E1FF"
                }
              },
              "500": {
                "id": "#tokensConfig/color/primary/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/500/value",
                    "default": "#1AD6FF"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#1AD6FF"
                }
              },
              "600": {
                "id": "#tokensConfig/color/primary/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/600/value",
                    "default": "#09A0C1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#09A0C1"
                }
              },
              "700": {
                "id": "#tokensConfig/color/primary/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/700/value",
                    "default": "#024757"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#024757"
                }
              },
              "800": {
                "id": "#tokensConfig/color/primary/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/800/value",
                    "default": "#00232B"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#00232B"
                }
              },
              "900": {
                "id": "#tokensConfig/color/primary/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/primary/900/value",
                    "default": "#001A1F"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#001A1F"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "#F1FCFF"
              },
              "100": {
                "value": "#DCF7FF"
              },
              "200": {
                "value": "#C5F2FF"
              },
              "300": {
                "value": "#82E3FF"
              },
              "400": {
                "value": "#55E1FF"
              },
              "500": {
                "value": "#1AD6FF"
              },
              "600": {
                "value": "#09A0C1"
              },
              "700": {
                "value": "#024757"
              },
              "800": {
                "value": "#00232B"
              },
              "900": {
                "value": "#001A1F"
              }
            }
          },
          "secondary": {
            "id": "#tokensConfig/color/secondary",
            "properties": {
              "50": {
                "id": "#tokensConfig/color/secondary/50",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/50/value",
                    "default": "{color.gray.50}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.50}"
                }
              },
              "100": {
                "id": "#tokensConfig/color/secondary/100",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/100/value",
                    "default": "{color.gray.100}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.100}"
                }
              },
              "200": {
                "id": "#tokensConfig/color/secondary/200",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/200/value",
                    "default": "{color.gray.200}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.200}"
                }
              },
              "300": {
                "id": "#tokensConfig/color/secondary/300",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/300/value",
                    "default": "{color.gray.300}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.300}"
                }
              },
              "400": {
                "id": "#tokensConfig/color/secondary/400",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/400/value",
                    "default": "{color.gray.400}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.400}"
                }
              },
              "500": {
                "id": "#tokensConfig/color/secondary/500",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/500/value",
                    "default": "{color.gray.500}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.500}"
                }
              },
              "600": {
                "id": "#tokensConfig/color/secondary/600",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/600/value",
                    "default": "{color.gray.600}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.600}"
                }
              },
              "700": {
                "id": "#tokensConfig/color/secondary/700",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/700/value",
                    "default": "{color.gray.700}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.700}"
                }
              },
              "800": {
                "id": "#tokensConfig/color/secondary/800",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/800/value",
                    "default": "{color.gray.800}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.800}"
                }
              },
              "900": {
                "id": "#tokensConfig/color/secondary/900",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/color/secondary/900/value",
                    "default": "{color.gray.900}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{color.gray.900}"
                }
              }
            },
            "type": "object",
            "default": {
              "50": {
                "value": "{color.gray.50}"
              },
              "100": {
                "value": "{color.gray.100}"
              },
              "200": {
                "value": "{color.gray.200}"
              },
              "300": {
                "value": "{color.gray.300}"
              },
              "400": {
                "value": "{color.gray.400}"
              },
              "500": {
                "value": "{color.gray.500}"
              },
              "600": {
                "value": "{color.gray.600}"
              },
              "700": {
                "value": "{color.gray.700}"
              },
              "800": {
                "value": "{color.gray.800}"
              },
              "900": {
                "value": "{color.gray.900}"
              }
            }
          },
          "shadow": {
            "id": "#tokensConfig/color/shadow",
            "properties": {
              "value": {
                "id": "#tokensConfig/color/shadow/value",
                "properties": {
                  "initial": {
                    "type": "string",
                    "id": "#tokensConfig/color/shadow/value/initial",
                    "default": "{color.gray.400}"
                  },
                  "dark": {
                    "type": "string",
                    "id": "#tokensConfig/color/shadow/value/dark",
                    "default": "{color.gray.800}"
                  }
                },
                "type": "object",
                "default": {
                  "initial": "{color.gray.400}",
                  "dark": "{color.gray.800}"
                }
              }
            },
            "type": "object",
            "default": {
              "value": {
                "initial": "{color.gray.400}",
                "dark": "{color.gray.800}"
              }
            }
          }
        },
        "type": "object",
        "default": {
          "white": {
            "value": "#ffffff"
          },
          "black": {
            "value": "#0B0A0A"
          },
          "gray": {
            "50": {
              "value": "#FBFBFB"
            },
            "100": {
              "value": "#F6F5F4"
            },
            "200": {
              "value": "#ECEBE8"
            },
            "300": {
              "value": "#DBD9D3"
            },
            "400": {
              "value": "#ADA9A4"
            },
            "500": {
              "value": "#97948F"
            },
            "600": {
              "value": "#67635D"
            },
            "700": {
              "value": "#36332E"
            },
            "800": {
              "value": "#201E1B"
            },
            "900": {
              "value": "#121110"
            }
          },
          "green": {
            "50": {
              "value": "#ECFFF7"
            },
            "100": {
              "value": "#DEFFF1"
            },
            "200": {
              "value": "#C3FFE6"
            },
            "300": {
              "value": "#86FBCB"
            },
            "400": {
              "value": "#3CEEA5"
            },
            "500": {
              "value": "#0DD885"
            },
            "600": {
              "value": "#00B467"
            },
            "700": {
              "value": "#006037"
            },
            "800": {
              "value": "#002817"
            },
            "900": {
              "value": "#00190F"
            }
          },
          "yellow": {
            "50": {
              "value": "#FFFCEE"
            },
            "100": {
              "value": "#FFF6D3"
            },
            "200": {
              "value": "#FFF0B1"
            },
            "300": {
              "value": "#FFE372"
            },
            "400": {
              "value": "#FFDC4E"
            },
            "500": {
              "value": "#FBCA05"
            },
            "600": {
              "value": "#CBA408"
            },
            "700": {
              "value": "#614E02"
            },
            "800": {
              "value": "#292100"
            },
            "900": {
              "value": "#1B1500"
            }
          },
          "orange": {
            "50": {
              "value": "#ffe9d9"
            },
            "100": {
              "value": "#ffd3b3"
            },
            "200": {
              "value": "#ffbd8d"
            },
            "300": {
              "value": "#ffa666"
            },
            "400": {
              "value": "#ff9040"
            },
            "500": {
              "value": "#ff7a1a"
            },
            "600": {
              "value": "#e15e00"
            },
            "700": {
              "value": "#a94700"
            },
            "800": {
              "value": "#702f00"
            },
            "900": {
              "value": "#381800"
            }
          },
          "red": {
            "50": {
              "value": "#FFF9F8"
            },
            "100": {
              "value": "#FFF3F0"
            },
            "200": {
              "value": "#FFDED7"
            },
            "300": {
              "value": "#FFA692"
            },
            "400": {
              "value": "#FF7353"
            },
            "500": {
              "value": "#FF3B10"
            },
            "600": {
              "value": "#BB2402"
            },
            "700": {
              "value": "#701704"
            },
            "800": {
              "value": "#340A01"
            },
            "900": {
              "value": "#1C0301"
            }
          },
          "pear": {
            "50": {
              "value": "#f7f8dc"
            },
            "100": {
              "value": "#eff0ba"
            },
            "200": {
              "value": "#e8e997"
            },
            "300": {
              "value": "#e0e274"
            },
            "400": {
              "value": "#d8da52"
            },
            "500": {
              "value": "#d0d32f"
            },
            "600": {
              "value": "#a8aa24"
            },
            "700": {
              "value": "#7e801b"
            },
            "800": {
              "value": "#545512"
            },
            "900": {
              "value": "#2a2b09"
            }
          },
          "teal": {
            "50": {
              "value": "#d7faf8"
            },
            "100": {
              "value": "#aff4f0"
            },
            "200": {
              "value": "#87efe9"
            },
            "300": {
              "value": "#5fe9e1"
            },
            "400": {
              "value": "#36e4da"
            },
            "500": {
              "value": "#1cd1c6"
            },
            "600": {
              "value": "#16a79e"
            },
            "700": {
              "value": "#117d77"
            },
            "800": {
              "value": "#0b544f"
            },
            "900": {
              "value": "#062a28"
            }
          },
          "lightblue": {
            "50": {
              "value": "#d9f8ff"
            },
            "100": {
              "value": "#b3f1ff"
            },
            "200": {
              "value": "#8deaff"
            },
            "300": {
              "value": "#66e4ff"
            },
            "400": {
              "value": "#40ddff"
            },
            "500": {
              "value": "#1ad6ff"
            },
            "600": {
              "value": "#00b9e1"
            },
            "700": {
              "value": "#008aa9"
            },
            "800": {
              "value": "#005c70"
            },
            "900": {
              "value": "#002e38"
            }
          },
          "blue": {
            "50": {
              "value": "#F2FAFF"
            },
            "100": {
              "value": "#DFF3FF"
            },
            "200": {
              "value": "#C6EAFF"
            },
            "300": {
              "value": "#A1DDFF"
            },
            "400": {
              "value": "#64C7FF"
            },
            "500": {
              "value": "#1AADFF"
            },
            "600": {
              "value": "#0069A6"
            },
            "700": {
              "value": "#014267"
            },
            "800": {
              "value": "#002235"
            },
            "900": {
              "value": "#00131D"
            }
          },
          "indigoblue": {
            "50": {
              "value": "#d9e5ff"
            },
            "100": {
              "value": "#b3cbff"
            },
            "200": {
              "value": "#8db0ff"
            },
            "300": {
              "value": "#6696ff"
            },
            "400": {
              "value": "#407cff"
            },
            "500": {
              "value": "#1a62ff"
            },
            "600": {
              "value": "#0047e1"
            },
            "700": {
              "value": "#0035a9"
            },
            "800": {
              "value": "#002370"
            },
            "900": {
              "value": "#001238"
            }
          },
          "royalblue": {
            "50": {
              "value": "#dfdbfb"
            },
            "100": {
              "value": "#c0b7f7"
            },
            "200": {
              "value": "#a093f3"
            },
            "300": {
              "value": "#806ff0"
            },
            "400": {
              "value": "#614bec"
            },
            "500": {
              "value": "#4127e8"
            },
            "600": {
              "value": "#2c15c4"
            },
            "700": {
              "value": "#211093"
            },
            "800": {
              "value": "#160a62"
            },
            "900": {
              "value": "#0b0531"
            }
          },
          "purple": {
            "50": {
              "value": "#ead9ff"
            },
            "100": {
              "value": "#d5b3ff"
            },
            "200": {
              "value": "#c08dff"
            },
            "300": {
              "value": "#ab66ff"
            },
            "400": {
              "value": "#9640ff"
            },
            "500": {
              "value": "#811aff"
            },
            "600": {
              "value": "#6500e1"
            },
            "700": {
              "value": "#4c00a9"
            },
            "800": {
              "value": "#330070"
            },
            "900": {
              "value": "#190038"
            }
          },
          "pink": {
            "50": {
              "value": "#ffd9f2"
            },
            "100": {
              "value": "#ffb3e5"
            },
            "200": {
              "value": "#ff8dd8"
            },
            "300": {
              "value": "#ff66cc"
            },
            "400": {
              "value": "#ff40bf"
            },
            "500": {
              "value": "#ff1ab2"
            },
            "600": {
              "value": "#e10095"
            },
            "700": {
              "value": "#a90070"
            },
            "800": {
              "value": "#70004b"
            },
            "900": {
              "value": "#380025"
            }
          },
          "ruby": {
            "50": {
              "value": "#ffd9e4"
            },
            "100": {
              "value": "#ffb3c9"
            },
            "200": {
              "value": "#ff8dae"
            },
            "300": {
              "value": "#ff6694"
            },
            "400": {
              "value": "#ff4079"
            },
            "500": {
              "value": "#ff1a5e"
            },
            "600": {
              "value": "#e10043"
            },
            "700": {
              "value": "#a90032"
            },
            "800": {
              "value": "#700021"
            },
            "900": {
              "value": "#380011"
            }
          },
          "primary": {
            "50": {
              "value": "#F1FCFF"
            },
            "100": {
              "value": "#DCF7FF"
            },
            "200": {
              "value": "#C5F2FF"
            },
            "300": {
              "value": "#82E3FF"
            },
            "400": {
              "value": "#55E1FF"
            },
            "500": {
              "value": "#1AD6FF"
            },
            "600": {
              "value": "#09A0C1"
            },
            "700": {
              "value": "#024757"
            },
            "800": {
              "value": "#00232B"
            },
            "900": {
              "value": "#001A1F"
            }
          },
          "secondary": {
            "50": {
              "value": "{color.gray.50}"
            },
            "100": {
              "value": "{color.gray.100}"
            },
            "200": {
              "value": "{color.gray.200}"
            },
            "300": {
              "value": "{color.gray.300}"
            },
            "400": {
              "value": "{color.gray.400}"
            },
            "500": {
              "value": "{color.gray.500}"
            },
            "600": {
              "value": "{color.gray.600}"
            },
            "700": {
              "value": "{color.gray.700}"
            },
            "800": {
              "value": "{color.gray.800}"
            },
            "900": {
              "value": "{color.gray.900}"
            }
          },
          "shadow": {
            "value": {
              "initial": "{color.gray.400}",
              "dark": "{color.gray.800}"
            }
          }
        }
      },
      "width": {
        "title": "Your website screen sizings.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon ph:ruler"
        ],
        "id": "#tokensConfig/width",
        "properties": {
          "screen": {
            "id": "#tokensConfig/width/screen",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/width/screen/value",
                "default": "100vw"
              }
            },
            "type": "object",
            "default": {
              "value": "100vw"
            }
          }
        },
        "type": "object",
        "default": {
          "screen": {
            "value": "100vw"
          }
        }
      },
      "height": {
        "title": "Your website screen sizings.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon ph:ruler"
        ],
        "id": "#tokensConfig/height",
        "properties": {
          "screen": {
            "id": "#tokensConfig/height/screen",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/height/screen/value",
                "default": "100vh"
              }
            },
            "type": "object",
            "default": {
              "value": "100vh"
            }
          }
        },
        "type": "object",
        "default": {
          "screen": {
            "value": "100vh"
          }
        }
      },
      "shadow": {
        "title": "Your website shadows.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType shadow",
          "@studioIcon mdi:box-shadow"
        ],
        "id": "#tokensConfig/shadow",
        "properties": {
          "xs": {
            "id": "#tokensConfig/shadow/xs",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/xs/value",
                "default": "0px 1px 2px 0px {color.shadow}"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 1px 2px 0px {color.shadow}"
            }
          },
          "sm": {
            "id": "#tokensConfig/shadow/sm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/sm/value",
                "default": "0px 1px 3px 0px {color.shadow}, 0px 1px 2px -1px {color.shadow}"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 1px 3px 0px {color.shadow}, 0px 1px 2px -1px {color.shadow}"
            }
          },
          "md": {
            "id": "#tokensConfig/shadow/md",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/md/value",
                "default": "0px 4px 6px -1px {color.shadow}, 0px 2px 4px -2px {color.shadow}"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 4px 6px -1px {color.shadow}, 0px 2px 4px -2px {color.shadow}"
            }
          },
          "lg": {
            "id": "#tokensConfig/shadow/lg",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/lg/value",
                "default": "0px 10px 15px -3px {color.shadow}, 0px 4px 6px -4px {color.shadow}"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 10px 15px -3px {color.shadow}, 0px 4px 6px -4px {color.shadow}"
            }
          },
          "xl": {
            "id": "#tokensConfig/shadow/xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/xl/value",
                "default": "0px 20px 25px -5px {color.shadow}, 0px 8px 10px -6px {color.shadow}"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 20px 25px -5px {color.shadow}, 0px 8px 10px -6px {color.shadow}"
            }
          },
          "2xl": {
            "id": "#tokensConfig/shadow/2xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/2xl/value",
                "default": "0px 25px 50px -12px {color.shadow}"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 25px 50px -12px {color.shadow}"
            }
          },
          "none": {
            "id": "#tokensConfig/shadow/none",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/shadow/none/value",
                "default": "0px 0px 0px 0px transparent"
              }
            },
            "type": "object",
            "default": {
              "value": "0px 0px 0px 0px transparent"
            }
          }
        },
        "type": "object",
        "default": {
          "xs": {
            "value": "0px 1px 2px 0px {color.shadow}"
          },
          "sm": {
            "value": "0px 1px 3px 0px {color.shadow}, 0px 1px 2px -1px {color.shadow}"
          },
          "md": {
            "value": "0px 4px 6px -1px {color.shadow}, 0px 2px 4px -2px {color.shadow}"
          },
          "lg": {
            "value": "0px 10px 15px -3px {color.shadow}, 0px 4px 6px -4px {color.shadow}"
          },
          "xl": {
            "value": "0px 20px 25px -5px {color.shadow}, 0px 8px 10px -6px {color.shadow}"
          },
          "2xl": {
            "value": "0px 25px 50px -12px {color.shadow}"
          },
          "none": {
            "value": "0px 0px 0px 0px transparent"
          }
        }
      },
      "radii": {
        "title": "Your website border radiuses.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon material-symbols:rounded-corner",
          "@studioInpuTokenType size"
        ],
        "id": "#tokensConfig/radii",
        "properties": {
          "none": {
            "id": "#tokensConfig/radii/none",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/none/value",
                "default": "0px"
              }
            },
            "type": "object",
            "default": {
              "value": "0px"
            }
          },
          "2xs": {
            "id": "#tokensConfig/radii/2xs",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/2xs/value",
                "default": "0.125rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.125rem"
            }
          },
          "xs": {
            "id": "#tokensConfig/radii/xs",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/xs/value",
                "default": "0.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.25rem"
            }
          },
          "sm": {
            "id": "#tokensConfig/radii/sm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/sm/value",
                "default": "0.375rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.375rem"
            }
          },
          "md": {
            "id": "#tokensConfig/radii/md",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/md/value",
                "default": "0.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.5rem"
            }
          },
          "lg": {
            "id": "#tokensConfig/radii/lg",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/lg/value",
                "default": "0.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.75rem"
            }
          },
          "xl": {
            "id": "#tokensConfig/radii/xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/xl/value",
                "default": "1rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1rem"
            }
          },
          "2xl": {
            "id": "#tokensConfig/radii/2xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/2xl/value",
                "default": "1.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.5rem"
            }
          },
          "3xl": {
            "id": "#tokensConfig/radii/3xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/3xl/value",
                "default": "1.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.75rem"
            }
          },
          "full": {
            "id": "#tokensConfig/radii/full",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/radii/full/value",
                "default": "9999px"
              }
            },
            "type": "object",
            "default": {
              "value": "9999px"
            }
          }
        },
        "type": "object",
        "default": {
          "none": {
            "value": "0px"
          },
          "2xs": {
            "value": "0.125rem"
          },
          "xs": {
            "value": "0.25rem"
          },
          "sm": {
            "value": "0.375rem"
          },
          "md": {
            "value": "0.5rem"
          },
          "lg": {
            "value": "0.75rem"
          },
          "xl": {
            "value": "1rem"
          },
          "2xl": {
            "value": "1.5rem"
          },
          "3xl": {
            "value": "1.75rem"
          },
          "full": {
            "value": "9999px"
          }
        }
      },
      "size": {
        "title": "Your website sizings.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon ph:ruler"
        ],
        "id": "#tokensConfig/size",
        "properties": {
          "0": {
            "id": "#tokensConfig/size/0",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/0/value",
                "default": "0px"
              }
            },
            "type": "object",
            "default": {
              "value": "0px"
            }
          },
          "2": {
            "id": "#tokensConfig/size/2",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/2/value",
                "default": "2px"
              }
            },
            "type": "object",
            "default": {
              "value": "2px"
            }
          },
          "4": {
            "id": "#tokensConfig/size/4",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/4/value",
                "default": "4px"
              }
            },
            "type": "object",
            "default": {
              "value": "4px"
            }
          },
          "6": {
            "id": "#tokensConfig/size/6",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/6/value",
                "default": "6px"
              }
            },
            "type": "object",
            "default": {
              "value": "6px"
            }
          },
          "8": {
            "id": "#tokensConfig/size/8",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/8/value",
                "default": "8px"
              }
            },
            "type": "object",
            "default": {
              "value": "8px"
            }
          },
          "12": {
            "id": "#tokensConfig/size/12",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/12/value",
                "default": "12px"
              }
            },
            "type": "object",
            "default": {
              "value": "12px"
            }
          },
          "16": {
            "id": "#tokensConfig/size/16",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/16/value",
                "default": "16px"
              }
            },
            "type": "object",
            "default": {
              "value": "16px"
            }
          },
          "20": {
            "id": "#tokensConfig/size/20",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/20/value",
                "default": "20px"
              }
            },
            "type": "object",
            "default": {
              "value": "20px"
            }
          },
          "24": {
            "id": "#tokensConfig/size/24",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/24/value",
                "default": "24px"
              }
            },
            "type": "object",
            "default": {
              "value": "24px"
            }
          },
          "32": {
            "id": "#tokensConfig/size/32",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/32/value",
                "default": "32px"
              }
            },
            "type": "object",
            "default": {
              "value": "32px"
            }
          },
          "40": {
            "id": "#tokensConfig/size/40",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/40/value",
                "default": "40px"
              }
            },
            "type": "object",
            "default": {
              "value": "40px"
            }
          },
          "48": {
            "id": "#tokensConfig/size/48",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/48/value",
                "default": "48px"
              }
            },
            "type": "object",
            "default": {
              "value": "48px"
            }
          },
          "56": {
            "id": "#tokensConfig/size/56",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/56/value",
                "default": "56px"
              }
            },
            "type": "object",
            "default": {
              "value": "56px"
            }
          },
          "64": {
            "id": "#tokensConfig/size/64",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/64/value",
                "default": "64px"
              }
            },
            "type": "object",
            "default": {
              "value": "64px"
            }
          },
          "80": {
            "id": "#tokensConfig/size/80",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/80/value",
                "default": "80px"
              }
            },
            "type": "object",
            "default": {
              "value": "80px"
            }
          },
          "104": {
            "id": "#tokensConfig/size/104",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/104/value",
                "default": "104px"
              }
            },
            "type": "object",
            "default": {
              "value": "104px"
            }
          },
          "200": {
            "id": "#tokensConfig/size/200",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/200/value",
                "default": "200px"
              }
            },
            "type": "object",
            "default": {
              "value": "200px"
            }
          },
          "xs": {
            "id": "#tokensConfig/size/xs",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/xs/value",
                "default": "20rem"
              }
            },
            "type": "object",
            "default": {
              "value": "20rem"
            }
          },
          "sm": {
            "id": "#tokensConfig/size/sm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/sm/value",
                "default": "24rem"
              }
            },
            "type": "object",
            "default": {
              "value": "24rem"
            }
          },
          "md": {
            "id": "#tokensConfig/size/md",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/md/value",
                "default": "28rem"
              }
            },
            "type": "object",
            "default": {
              "value": "28rem"
            }
          },
          "lg": {
            "id": "#tokensConfig/size/lg",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/lg/value",
                "default": "32rem"
              }
            },
            "type": "object",
            "default": {
              "value": "32rem"
            }
          },
          "xl": {
            "id": "#tokensConfig/size/xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/xl/value",
                "default": "36rem"
              }
            },
            "type": "object",
            "default": {
              "value": "36rem"
            }
          },
          "2xl": {
            "id": "#tokensConfig/size/2xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/2xl/value",
                "default": "42rem"
              }
            },
            "type": "object",
            "default": {
              "value": "42rem"
            }
          },
          "3xl": {
            "id": "#tokensConfig/size/3xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/3xl/value",
                "default": "48rem"
              }
            },
            "type": "object",
            "default": {
              "value": "48rem"
            }
          },
          "4xl": {
            "id": "#tokensConfig/size/4xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/4xl/value",
                "default": "56rem"
              }
            },
            "type": "object",
            "default": {
              "value": "56rem"
            }
          },
          "5xl": {
            "id": "#tokensConfig/size/5xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/5xl/value",
                "default": "64rem"
              }
            },
            "type": "object",
            "default": {
              "value": "64rem"
            }
          },
          "6xl": {
            "id": "#tokensConfig/size/6xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/6xl/value",
                "default": "72rem"
              }
            },
            "type": "object",
            "default": {
              "value": "72rem"
            }
          },
          "7xl": {
            "id": "#tokensConfig/size/7xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/7xl/value",
                "default": "80rem"
              }
            },
            "type": "object",
            "default": {
              "value": "80rem"
            }
          },
          "full": {
            "id": "#tokensConfig/size/full",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/size/full/value",
                "default": "100%"
              }
            },
            "type": "object",
            "default": {
              "value": "100%"
            }
          }
        },
        "type": "object",
        "default": {
          "0": {
            "value": "0px"
          },
          "2": {
            "value": "2px"
          },
          "4": {
            "value": "4px"
          },
          "6": {
            "value": "6px"
          },
          "8": {
            "value": "8px"
          },
          "12": {
            "value": "12px"
          },
          "16": {
            "value": "16px"
          },
          "20": {
            "value": "20px"
          },
          "24": {
            "value": "24px"
          },
          "32": {
            "value": "32px"
          },
          "40": {
            "value": "40px"
          },
          "48": {
            "value": "48px"
          },
          "56": {
            "value": "56px"
          },
          "64": {
            "value": "64px"
          },
          "80": {
            "value": "80px"
          },
          "104": {
            "value": "104px"
          },
          "200": {
            "value": "200px"
          },
          "xs": {
            "value": "20rem"
          },
          "sm": {
            "value": "24rem"
          },
          "md": {
            "value": "28rem"
          },
          "lg": {
            "value": "32rem"
          },
          "xl": {
            "value": "36rem"
          },
          "2xl": {
            "value": "42rem"
          },
          "3xl": {
            "value": "48rem"
          },
          "4xl": {
            "value": "56rem"
          },
          "5xl": {
            "value": "64rem"
          },
          "6xl": {
            "value": "72rem"
          },
          "7xl": {
            "value": "80rem"
          },
          "full": {
            "value": "100%"
          }
        }
      },
      "space": {
        "title": "Your website spacings.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon ph:ruler"
        ],
        "id": "#tokensConfig/space",
        "properties": {
          "0": {
            "id": "#tokensConfig/space/0",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/0/value",
                "default": "0px"
              }
            },
            "type": "object",
            "default": {
              "value": "0px"
            }
          },
          "1": {
            "id": "#tokensConfig/space/1",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/1/value",
                "default": "0.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.25rem"
            }
          },
          "2": {
            "id": "#tokensConfig/space/2",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/2/value",
                "default": "0.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.5rem"
            }
          },
          "3": {
            "id": "#tokensConfig/space/3",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/3/value",
                "default": "0.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.75rem"
            }
          },
          "4": {
            "id": "#tokensConfig/space/4",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/4/value",
                "default": "1rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1rem"
            }
          },
          "5": {
            "id": "#tokensConfig/space/5",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/5/value",
                "default": "1.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.25rem"
            }
          },
          "6": {
            "id": "#tokensConfig/space/6",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/6/value",
                "default": "1.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.5rem"
            }
          },
          "7": {
            "id": "#tokensConfig/space/7",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/7/value",
                "default": "1.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.75rem"
            }
          },
          "8": {
            "id": "#tokensConfig/space/8",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/8/value",
                "default": "2rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2rem"
            }
          },
          "9": {
            "id": "#tokensConfig/space/9",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/9/value",
                "default": "2.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2.25rem"
            }
          },
          "10": {
            "id": "#tokensConfig/space/10",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/10/value",
                "default": "2.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2.5rem"
            }
          },
          "11": {
            "id": "#tokensConfig/space/11",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/11/value",
                "default": "2.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2.75rem"
            }
          },
          "12": {
            "id": "#tokensConfig/space/12",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/12/value",
                "default": "3rem"
              }
            },
            "type": "object",
            "default": {
              "value": "3rem"
            }
          },
          "14": {
            "id": "#tokensConfig/space/14",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/14/value",
                "default": "3.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "3.5rem"
            }
          },
          "16": {
            "id": "#tokensConfig/space/16",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/16/value",
                "default": "4rem"
              }
            },
            "type": "object",
            "default": {
              "value": "4rem"
            }
          },
          "20": {
            "id": "#tokensConfig/space/20",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/20/value",
                "default": "5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "5rem"
            }
          },
          "24": {
            "id": "#tokensConfig/space/24",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/24/value",
                "default": "6rem"
              }
            },
            "type": "object",
            "default": {
              "value": "6rem"
            }
          },
          "28": {
            "id": "#tokensConfig/space/28",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/28/value",
                "default": "7rem"
              }
            },
            "type": "object",
            "default": {
              "value": "7rem"
            }
          },
          "32": {
            "id": "#tokensConfig/space/32",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/32/value",
                "default": "8rem"
              }
            },
            "type": "object",
            "default": {
              "value": "8rem"
            }
          },
          "36": {
            "id": "#tokensConfig/space/36",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/36/value",
                "default": "9rem"
              }
            },
            "type": "object",
            "default": {
              "value": "9rem"
            }
          },
          "40": {
            "id": "#tokensConfig/space/40",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/40/value",
                "default": "10rem"
              }
            },
            "type": "object",
            "default": {
              "value": "10rem"
            }
          },
          "44": {
            "id": "#tokensConfig/space/44",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/44/value",
                "default": "11rem"
              }
            },
            "type": "object",
            "default": {
              "value": "11rem"
            }
          },
          "48": {
            "id": "#tokensConfig/space/48",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/48/value",
                "default": "12rem"
              }
            },
            "type": "object",
            "default": {
              "value": "12rem"
            }
          },
          "52": {
            "id": "#tokensConfig/space/52",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/52/value",
                "default": "13rem"
              }
            },
            "type": "object",
            "default": {
              "value": "13rem"
            }
          },
          "56": {
            "id": "#tokensConfig/space/56",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/56/value",
                "default": "14rem"
              }
            },
            "type": "object",
            "default": {
              "value": "14rem"
            }
          },
          "60": {
            "id": "#tokensConfig/space/60",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/60/value",
                "default": "15rem"
              }
            },
            "type": "object",
            "default": {
              "value": "15rem"
            }
          },
          "64": {
            "id": "#tokensConfig/space/64",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/64/value",
                "default": "16rem"
              }
            },
            "type": "object",
            "default": {
              "value": "16rem"
            }
          },
          "72": {
            "id": "#tokensConfig/space/72",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/72/value",
                "default": "18rem"
              }
            },
            "type": "object",
            "default": {
              "value": "18rem"
            }
          },
          "80": {
            "id": "#tokensConfig/space/80",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/80/value",
                "default": "20rem"
              }
            },
            "type": "object",
            "default": {
              "value": "20rem"
            }
          },
          "96": {
            "id": "#tokensConfig/space/96",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/96/value",
                "default": "24rem"
              }
            },
            "type": "object",
            "default": {
              "value": "24rem"
            }
          },
          "128": {
            "id": "#tokensConfig/space/128",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/128/value",
                "default": "32rem"
              }
            },
            "type": "object",
            "default": {
              "value": "32rem"
            }
          },
          "px": {
            "id": "#tokensConfig/space/px",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/space/px/value",
                "default": "1px"
              }
            },
            "type": "object",
            "default": {
              "value": "1px"
            }
          },
          "rem": {
            "id": "#tokensConfig/space/rem",
            "properties": {
              "125": {
                "id": "#tokensConfig/space/rem/125",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/space/rem/125/value",
                    "default": "0.125rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0.125rem"
                }
              },
              "375": {
                "id": "#tokensConfig/space/rem/375",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/space/rem/375/value",
                    "default": "0.375rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0.375rem"
                }
              },
              "625": {
                "id": "#tokensConfig/space/rem/625",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/space/rem/625/value",
                    "default": "0.625rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0.625rem"
                }
              },
              "875": {
                "id": "#tokensConfig/space/rem/875",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/space/rem/875/value",
                    "default": "0.875rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0.875rem"
                }
              }
            },
            "type": "object",
            "default": {
              "125": {
                "value": "0.125rem"
              },
              "375": {
                "value": "0.375rem"
              },
              "625": {
                "value": "0.625rem"
              },
              "875": {
                "value": "0.875rem"
              }
            }
          }
        },
        "type": "object",
        "default": {
          "0": {
            "value": "0px"
          },
          "1": {
            "value": "0.25rem"
          },
          "2": {
            "value": "0.5rem"
          },
          "3": {
            "value": "0.75rem"
          },
          "4": {
            "value": "1rem"
          },
          "5": {
            "value": "1.25rem"
          },
          "6": {
            "value": "1.5rem"
          },
          "7": {
            "value": "1.75rem"
          },
          "8": {
            "value": "2rem"
          },
          "9": {
            "value": "2.25rem"
          },
          "10": {
            "value": "2.5rem"
          },
          "11": {
            "value": "2.75rem"
          },
          "12": {
            "value": "3rem"
          },
          "14": {
            "value": "3.5rem"
          },
          "16": {
            "value": "4rem"
          },
          "20": {
            "value": "5rem"
          },
          "24": {
            "value": "6rem"
          },
          "28": {
            "value": "7rem"
          },
          "32": {
            "value": "8rem"
          },
          "36": {
            "value": "9rem"
          },
          "40": {
            "value": "10rem"
          },
          "44": {
            "value": "11rem"
          },
          "48": {
            "value": "12rem"
          },
          "52": {
            "value": "13rem"
          },
          "56": {
            "value": "14rem"
          },
          "60": {
            "value": "15rem"
          },
          "64": {
            "value": "16rem"
          },
          "72": {
            "value": "18rem"
          },
          "80": {
            "value": "20rem"
          },
          "96": {
            "value": "24rem"
          },
          "128": {
            "value": "32rem"
          },
          "px": {
            "value": "1px"
          },
          "rem": {
            "125": {
              "value": "0.125rem"
            },
            "375": {
              "value": "0.375rem"
            },
            "625": {
              "value": "0.625rem"
            },
            "875": {
              "value": "0.875rem"
            }
          }
        }
      },
      "borderWidth": {
        "title": "Your website border widths.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon material-symbols:border-all-outline-rounded"
        ],
        "id": "#tokensConfig/borderWidth",
        "properties": {
          "noBorder": {
            "id": "#tokensConfig/borderWidth/noBorder",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/borderWidth/noBorder/value",
                "default": "0"
              }
            },
            "type": "object",
            "default": {
              "value": "0"
            }
          },
          "sm": {
            "id": "#tokensConfig/borderWidth/sm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/borderWidth/sm/value",
                "default": "1px"
              }
            },
            "type": "object",
            "default": {
              "value": "1px"
            }
          },
          "md": {
            "id": "#tokensConfig/borderWidth/md",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/borderWidth/md/value",
                "default": "2px"
              }
            },
            "type": "object",
            "default": {
              "value": "2px"
            }
          },
          "lg": {
            "id": "#tokensConfig/borderWidth/lg",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/borderWidth/lg/value",
                "default": "3px"
              }
            },
            "type": "object",
            "default": {
              "value": "3px"
            }
          }
        },
        "type": "object",
        "default": {
          "noBorder": {
            "value": "0"
          },
          "sm": {
            "value": "1px"
          },
          "md": {
            "value": "2px"
          },
          "lg": {
            "value": "3px"
          }
        }
      },
      "opacity": {
        "title": "Your website opacities.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType opacity",
          "@studioIcon material-symbols:opacity"
        ],
        "id": "#tokensConfig/opacity",
        "properties": {
          "noOpacity": {
            "id": "#tokensConfig/opacity/noOpacity",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/noOpacity/value",
                "default": "0"
              }
            },
            "type": "object",
            "default": {
              "value": "0"
            }
          },
          "bright": {
            "id": "#tokensConfig/opacity/bright",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/bright/value",
                "default": "0.1"
              }
            },
            "type": "object",
            "default": {
              "value": "0.1"
            }
          },
          "light": {
            "id": "#tokensConfig/opacity/light",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/light/value",
                "default": "0.15"
              }
            },
            "type": "object",
            "default": {
              "value": "0.15"
            }
          },
          "soft": {
            "id": "#tokensConfig/opacity/soft",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/soft/value",
                "default": "0.3"
              }
            },
            "type": "object",
            "default": {
              "value": "0.3"
            }
          },
          "medium": {
            "id": "#tokensConfig/opacity/medium",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/medium/value",
                "default": "0.5"
              }
            },
            "type": "object",
            "default": {
              "value": "0.5"
            }
          },
          "high": {
            "id": "#tokensConfig/opacity/high",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/high/value",
                "default": "0.8"
              }
            },
            "type": "object",
            "default": {
              "value": "0.8"
            }
          },
          "total": {
            "id": "#tokensConfig/opacity/total",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/opacity/total/value",
                "default": "1"
              }
            },
            "type": "object",
            "default": {
              "value": "1"
            }
          }
        },
        "type": "object",
        "default": {
          "noOpacity": {
            "value": "0"
          },
          "bright": {
            "value": "0.1"
          },
          "light": {
            "value": "0.15"
          },
          "soft": {
            "value": "0.3"
          },
          "medium": {
            "value": "0.5"
          },
          "high": {
            "value": "0.8"
          },
          "total": {
            "value": "1"
          }
        }
      },
      "font": {
        "title": "Your website fonts",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType font",
          "@studioIcon material-symbols:font-download-rounded"
        ],
        "id": "#tokensConfig/font",
        "properties": {
          "sans": {
            "id": "#tokensConfig/font/sans",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/font/sans/value",
                "default": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
              }
            },
            "type": "object",
            "default": {
              "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
            }
          },
          "serif": {
            "id": "#tokensConfig/font/serif",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/font/serif/value",
                "default": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
              }
            },
            "type": "object",
            "default": {
              "value": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
            }
          },
          "mono": {
            "id": "#tokensConfig/font/mono",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/font/mono/value",
                "default": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
              }
            },
            "type": "object",
            "default": {
              "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
            }
          }
        },
        "type": "object",
        "default": {
          "sans": {
            "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
          },
          "serif": {
            "value": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
          },
          "mono": {
            "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
          }
        }
      },
      "fontWeight": {
        "title": "Your website font weights.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType font-weight",
          "@studioIcon radix-icons:font-style"
        ],
        "id": "#tokensConfig/fontWeight",
        "properties": {
          "thin": {
            "id": "#tokensConfig/fontWeight/thin",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/thin/value",
                "default": "100"
              }
            },
            "type": "object",
            "default": {
              "value": "100"
            }
          },
          "extralight": {
            "id": "#tokensConfig/fontWeight/extralight",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/extralight/value",
                "default": "200"
              }
            },
            "type": "object",
            "default": {
              "value": "200"
            }
          },
          "light": {
            "id": "#tokensConfig/fontWeight/light",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/light/value",
                "default": "300"
              }
            },
            "type": "object",
            "default": {
              "value": "300"
            }
          },
          "normal": {
            "id": "#tokensConfig/fontWeight/normal",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/normal/value",
                "default": "400"
              }
            },
            "type": "object",
            "default": {
              "value": "400"
            }
          },
          "medium": {
            "id": "#tokensConfig/fontWeight/medium",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/medium/value",
                "default": "500"
              }
            },
            "type": "object",
            "default": {
              "value": "500"
            }
          },
          "semibold": {
            "id": "#tokensConfig/fontWeight/semibold",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/semibold/value",
                "default": "600"
              }
            },
            "type": "object",
            "default": {
              "value": "600"
            }
          },
          "bold": {
            "id": "#tokensConfig/fontWeight/bold",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/bold/value",
                "default": "700"
              }
            },
            "type": "object",
            "default": {
              "value": "700"
            }
          },
          "extrabold": {
            "id": "#tokensConfig/fontWeight/extrabold",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/extrabold/value",
                "default": "800"
              }
            },
            "type": "object",
            "default": {
              "value": "800"
            }
          },
          "black": {
            "id": "#tokensConfig/fontWeight/black",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontWeight/black/value",
                "default": "900"
              }
            },
            "type": "object",
            "default": {
              "value": "900"
            }
          }
        },
        "type": "object",
        "default": {
          "thin": {
            "value": "100"
          },
          "extralight": {
            "value": "200"
          },
          "light": {
            "value": "300"
          },
          "normal": {
            "value": "400"
          },
          "medium": {
            "value": "500"
          },
          "semibold": {
            "value": "600"
          },
          "bold": {
            "value": "700"
          },
          "extrabold": {
            "value": "800"
          },
          "black": {
            "value": "900"
          }
        }
      },
      "fontSize": {
        "title": "Your website font sizes.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType font-size",
          "@studioIcon radix-icons:font-style"
        ],
        "id": "#tokensConfig/fontSize",
        "properties": {
          "xs": {
            "id": "#tokensConfig/fontSize/xs",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/xs/value",
                "default": "0.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.75rem"
            }
          },
          "sm": {
            "id": "#tokensConfig/fontSize/sm",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/sm/value",
                "default": "0.875rem"
              }
            },
            "type": "object",
            "default": {
              "value": "0.875rem"
            }
          },
          "base": {
            "id": "#tokensConfig/fontSize/base",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/base/value",
                "default": "1rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1rem"
            }
          },
          "lg": {
            "id": "#tokensConfig/fontSize/lg",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/lg/value",
                "default": "1.125rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.125rem"
            }
          },
          "xl": {
            "id": "#tokensConfig/fontSize/xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/xl/value",
                "default": "1.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.25rem"
            }
          },
          "2xl": {
            "id": "#tokensConfig/fontSize/2xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/2xl/value",
                "default": "1.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.5rem"
            }
          },
          "3xl": {
            "id": "#tokensConfig/fontSize/3xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/3xl/value",
                "default": "1.875rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.875rem"
            }
          },
          "4xl": {
            "id": "#tokensConfig/fontSize/4xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/4xl/value",
                "default": "2.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2.25rem"
            }
          },
          "5xl": {
            "id": "#tokensConfig/fontSize/5xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/5xl/value",
                "default": "3rem"
              }
            },
            "type": "object",
            "default": {
              "value": "3rem"
            }
          },
          "6xl": {
            "id": "#tokensConfig/fontSize/6xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/6xl/value",
                "default": "3.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "3.75rem"
            }
          },
          "7xl": {
            "id": "#tokensConfig/fontSize/7xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/7xl/value",
                "default": "4.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "4.5rem"
            }
          },
          "8xl": {
            "id": "#tokensConfig/fontSize/8xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/8xl/value",
                "default": "6rem"
              }
            },
            "type": "object",
            "default": {
              "value": "6rem"
            }
          },
          "9xl": {
            "id": "#tokensConfig/fontSize/9xl",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/fontSize/9xl/value",
                "default": "8rem"
              }
            },
            "type": "object",
            "default": {
              "value": "8rem"
            }
          }
        },
        "type": "object",
        "default": {
          "xs": {
            "value": "0.75rem"
          },
          "sm": {
            "value": "0.875rem"
          },
          "base": {
            "value": "1rem"
          },
          "lg": {
            "value": "1.125rem"
          },
          "xl": {
            "value": "1.25rem"
          },
          "2xl": {
            "value": "1.5rem"
          },
          "3xl": {
            "value": "1.875rem"
          },
          "4xl": {
            "value": "2.25rem"
          },
          "5xl": {
            "value": "3rem"
          },
          "6xl": {
            "value": "3.75rem"
          },
          "7xl": {
            "value": "4.5rem"
          },
          "8xl": {
            "value": "6rem"
          },
          "9xl": {
            "value": "8rem"
          }
        }
      },
      "letterSpacing": {
        "title": "Your website letter spacings.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType letter-spacing",
          "@studioIcon fluent:font-space-tracking-out-24-filled"
        ],
        "id": "#tokensConfig/letterSpacing",
        "properties": {
          "tighter": {
            "id": "#tokensConfig/letterSpacing/tighter",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/letterSpacing/tighter/value",
                "default": "-0.05em"
              }
            },
            "type": "object",
            "default": {
              "value": "-0.05em"
            }
          },
          "tight": {
            "id": "#tokensConfig/letterSpacing/tight",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/letterSpacing/tight/value",
                "default": "-0.025em"
              }
            },
            "type": "object",
            "default": {
              "value": "-0.025em"
            }
          },
          "normal": {
            "id": "#tokensConfig/letterSpacing/normal",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/letterSpacing/normal/value",
                "default": "0em"
              }
            },
            "type": "object",
            "default": {
              "value": "0em"
            }
          },
          "wide": {
            "id": "#tokensConfig/letterSpacing/wide",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/letterSpacing/wide/value",
                "default": "0.025em"
              }
            },
            "type": "object",
            "default": {
              "value": "0.025em"
            }
          },
          "wider": {
            "id": "#tokensConfig/letterSpacing/wider",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/letterSpacing/wider/value",
                "default": "0.05em"
              }
            },
            "type": "object",
            "default": {
              "value": "0.05em"
            }
          },
          "widest": {
            "id": "#tokensConfig/letterSpacing/widest",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/letterSpacing/widest/value",
                "default": "0.1em"
              }
            },
            "type": "object",
            "default": {
              "value": "0.1em"
            }
          }
        },
        "type": "object",
        "default": {
          "tighter": {
            "value": "-0.05em"
          },
          "tight": {
            "value": "-0.025em"
          },
          "normal": {
            "value": "0em"
          },
          "wide": {
            "value": "0.025em"
          },
          "wider": {
            "value": "0.05em"
          },
          "widest": {
            "value": "0.1em"
          }
        }
      },
      "lead": {
        "title": "Your website line heights.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon icon-park-outline:auto-line-height"
        ],
        "id": "#tokensConfig/lead",
        "properties": {
          "1": {
            "id": "#tokensConfig/lead/1",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/1/value",
                "default": ".025rem"
              }
            },
            "type": "object",
            "default": {
              "value": ".025rem"
            }
          },
          "2": {
            "id": "#tokensConfig/lead/2",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/2/value",
                "default": ".5rem"
              }
            },
            "type": "object",
            "default": {
              "value": ".5rem"
            }
          },
          "3": {
            "id": "#tokensConfig/lead/3",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/3/value",
                "default": ".75rem"
              }
            },
            "type": "object",
            "default": {
              "value": ".75rem"
            }
          },
          "4": {
            "id": "#tokensConfig/lead/4",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/4/value",
                "default": "1rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1rem"
            }
          },
          "5": {
            "id": "#tokensConfig/lead/5",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/5/value",
                "default": "1.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.25rem"
            }
          },
          "6": {
            "id": "#tokensConfig/lead/6",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/6/value",
                "default": "1.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.5rem"
            }
          },
          "7": {
            "id": "#tokensConfig/lead/7",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/7/value",
                "default": "1.75rem"
              }
            },
            "type": "object",
            "default": {
              "value": "1.75rem"
            }
          },
          "8": {
            "id": "#tokensConfig/lead/8",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/8/value",
                "default": "2rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2rem"
            }
          },
          "9": {
            "id": "#tokensConfig/lead/9",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/9/value",
                "default": "2.25rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2.25rem"
            }
          },
          "10": {
            "id": "#tokensConfig/lead/10",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/10/value",
                "default": "2.5rem"
              }
            },
            "type": "object",
            "default": {
              "value": "2.5rem"
            }
          },
          "none": {
            "id": "#tokensConfig/lead/none",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/none/value",
                "default": "1"
              }
            },
            "type": "object",
            "default": {
              "value": "1"
            }
          },
          "tight": {
            "id": "#tokensConfig/lead/tight",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/tight/value",
                "default": "1.25"
              }
            },
            "type": "object",
            "default": {
              "value": "1.25"
            }
          },
          "snug": {
            "id": "#tokensConfig/lead/snug",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/snug/value",
                "default": "1.375"
              }
            },
            "type": "object",
            "default": {
              "value": "1.375"
            }
          },
          "normal": {
            "id": "#tokensConfig/lead/normal",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/normal/value",
                "default": "1.5"
              }
            },
            "type": "object",
            "default": {
              "value": "1.5"
            }
          },
          "relaxed": {
            "id": "#tokensConfig/lead/relaxed",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/relaxed/value",
                "default": "1.625"
              }
            },
            "type": "object",
            "default": {
              "value": "1.625"
            }
          },
          "loose": {
            "id": "#tokensConfig/lead/loose",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/lead/loose/value",
                "default": "2"
              }
            },
            "type": "object",
            "default": {
              "value": "2"
            }
          }
        },
        "type": "object",
        "default": {
          "1": {
            "value": ".025rem"
          },
          "2": {
            "value": ".5rem"
          },
          "3": {
            "value": ".75rem"
          },
          "4": {
            "value": "1rem"
          },
          "5": {
            "value": "1.25rem"
          },
          "6": {
            "value": "1.5rem"
          },
          "7": {
            "value": "1.75rem"
          },
          "8": {
            "value": "2rem"
          },
          "9": {
            "value": "2.25rem"
          },
          "10": {
            "value": "2.5rem"
          },
          "none": {
            "value": "1"
          },
          "tight": {
            "value": "1.25"
          },
          "snug": {
            "value": "1.375"
          },
          "normal": {
            "value": "1.5"
          },
          "relaxed": {
            "value": "1.625"
          },
          "loose": {
            "value": "2"
          }
        }
      },
      "text": {
        "title": "Your website text scales.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType size",
          "@studioIcon material-symbols:format-size-rounded"
        ],
        "id": "#tokensConfig/text",
        "properties": {
          "xs": {
            "id": "#tokensConfig/text/xs",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/xs/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/xs/fontSize/value",
                    "default": "{fontSize.xs}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.xs}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/xs/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/xs/lineHeight/value",
                    "default": "{lead.4}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.4}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.xs}"
              },
              "lineHeight": {
                "value": "{lead.4}"
              }
            }
          },
          "sm": {
            "id": "#tokensConfig/text/sm",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/sm/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/sm/fontSize/value",
                    "default": "{fontSize.sm}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.sm}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/sm/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/sm/lineHeight/value",
                    "default": "{lead.5}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.5}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.sm}"
              },
              "lineHeight": {
                "value": "{lead.5}"
              }
            }
          },
          "base": {
            "id": "#tokensConfig/text/base",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/base/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/base/fontSize/value",
                    "default": "{fontSize.base}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.base}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/base/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/base/lineHeight/value",
                    "default": "{lead.6}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.6}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.base}"
              },
              "lineHeight": {
                "value": "{lead.6}"
              }
            }
          },
          "lg": {
            "id": "#tokensConfig/text/lg",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/lg/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/lg/fontSize/value",
                    "default": "{fontSize.lg}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.lg}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/lg/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/lg/lineHeight/value",
                    "default": "{lead.7}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.7}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.lg}"
              },
              "lineHeight": {
                "value": "{lead.7}"
              }
            }
          },
          "xl": {
            "id": "#tokensConfig/text/xl",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/xl/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/xl/fontSize/value",
                    "default": "{fontSize.xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/xl/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/xl/lineHeight/value",
                    "default": "{lead.7}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.7}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.xl}"
              },
              "lineHeight": {
                "value": "{lead.7}"
              }
            }
          },
          "2xl": {
            "id": "#tokensConfig/text/2xl",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/2xl/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/2xl/fontSize/value",
                    "default": "{fontSize.2xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.2xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/2xl/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/2xl/lineHeight/value",
                    "default": "{lead.8}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.8}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.2xl}"
              },
              "lineHeight": {
                "value": "{lead.8}"
              }
            }
          },
          "3xl": {
            "id": "#tokensConfig/text/3xl",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/3xl/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/3xl/fontSize/value",
                    "default": "{fontSize.3xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.3xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/3xl/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/3xl/lineHeight/value",
                    "default": "{lead.9}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.9}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.3xl}"
              },
              "lineHeight": {
                "value": "{lead.9}"
              }
            }
          },
          "4xl": {
            "id": "#tokensConfig/text/4xl",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/4xl/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/4xl/fontSize/value",
                    "default": "{fontSize.4xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.4xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/4xl/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/4xl/lineHeight/value",
                    "default": "{lead.10}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.10}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.4xl}"
              },
              "lineHeight": {
                "value": "{lead.10}"
              }
            }
          },
          "5xl": {
            "id": "#tokensConfig/text/5xl",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/5xl/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/5xl/fontSize/value",
                    "default": "{fontSize.5xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.5xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/5xl/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/5xl/lineHeight/value",
                    "default": "{lead.none}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.none}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.5xl}"
              },
              "lineHeight": {
                "value": "{lead.none}"
              }
            }
          },
          "6xl": {
            "id": "#tokensConfig/text/6xl",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/text/6xl/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/6xl/fontSize/value",
                    "default": "{fontSize.6xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{fontSize.6xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/text/6xl/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/text/6xl/lineHeight/value",
                    "default": "{lead.none}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{lead.none}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{fontSize.6xl}"
              },
              "lineHeight": {
                "value": "{lead.none}"
              }
            }
          }
        },
        "type": "object",
        "default": {
          "xs": {
            "fontSize": {
              "value": "{fontSize.xs}"
            },
            "lineHeight": {
              "value": "{lead.4}"
            }
          },
          "sm": {
            "fontSize": {
              "value": "{fontSize.sm}"
            },
            "lineHeight": {
              "value": "{lead.5}"
            }
          },
          "base": {
            "fontSize": {
              "value": "{fontSize.base}"
            },
            "lineHeight": {
              "value": "{lead.6}"
            }
          },
          "lg": {
            "fontSize": {
              "value": "{fontSize.lg}"
            },
            "lineHeight": {
              "value": "{lead.7}"
            }
          },
          "xl": {
            "fontSize": {
              "value": "{fontSize.xl}"
            },
            "lineHeight": {
              "value": "{lead.7}"
            }
          },
          "2xl": {
            "fontSize": {
              "value": "{fontSize.2xl}"
            },
            "lineHeight": {
              "value": "{lead.8}"
            }
          },
          "3xl": {
            "fontSize": {
              "value": "{fontSize.3xl}"
            },
            "lineHeight": {
              "value": "{lead.9}"
            }
          },
          "4xl": {
            "fontSize": {
              "value": "{fontSize.4xl}"
            },
            "lineHeight": {
              "value": "{lead.10}"
            }
          },
          "5xl": {
            "fontSize": {
              "value": "{fontSize.5xl}"
            },
            "lineHeight": {
              "value": "{lead.none}"
            }
          },
          "6xl": {
            "fontSize": {
              "value": "{fontSize.6xl}"
            },
            "lineHeight": {
              "value": "{lead.none}"
            }
          }
        }
      },
      "elements": {
        "title": "All the configurable tokens for your Elements.",
        "tags": [
          "@studioIcon uiw:component"
        ],
        "id": "#tokensConfig/elements",
        "properties": {
          "text": {
            "id": "#tokensConfig/elements/text",
            "properties": {
              "primary": {
                "id": "#tokensConfig/elements/text/primary",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/text/primary/color",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/elements/text/primary/color/static",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/text/primary/color/static/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/text/primary/color/static/value/initial",
                                "default": "{color.gray.900}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/text/primary/color/static/value/dark",
                                "default": "{color.gray.50}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.gray.900}",
                              "dark": "{color.gray.50}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.gray.900}",
                            "dark": "{color.gray.50}"
                          }
                        }
                      },
                      "hover": {
                        "id": "#tokensConfig/elements/text/primary/color/hover",
                        "type": "any",
                        "default": {}
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {
                        "value": {
                          "initial": "{color.gray.900}",
                          "dark": "{color.gray.50}"
                        }
                      },
                      "hover": {}
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "static": {
                      "value": {
                        "initial": "{color.gray.900}",
                        "dark": "{color.gray.50}"
                      }
                    },
                    "hover": {}
                  }
                }
              },
              "secondary": {
                "id": "#tokensConfig/elements/text/secondary",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/text/secondary/color",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/elements/text/secondary/color/static",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/text/secondary/color/static/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/text/secondary/color/static/value/initial",
                                "default": "{color.gray.500}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/text/secondary/color/static/value/dark",
                                "default": "{color.gray.400}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.gray.500}",
                              "dark": "{color.gray.400}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.gray.500}",
                            "dark": "{color.gray.400}"
                          }
                        }
                      },
                      "hover": {
                        "id": "#tokensConfig/elements/text/secondary/color/hover",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/text/secondary/color/hover/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/text/secondary/color/hover/value/initial",
                                "default": "{color.gray.700}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/text/secondary/color/hover/value/dark",
                                "default": "{color.gray.200}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.gray.700}",
                              "dark": "{color.gray.200}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.gray.700}",
                            "dark": "{color.gray.200}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {
                        "value": {
                          "initial": "{color.gray.500}",
                          "dark": "{color.gray.400}"
                        }
                      },
                      "hover": {
                        "value": {
                          "initial": "{color.gray.700}",
                          "dark": "{color.gray.200}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "static": {
                      "value": {
                        "initial": "{color.gray.500}",
                        "dark": "{color.gray.400}"
                      }
                    },
                    "hover": {
                      "value": {
                        "initial": "{color.gray.700}",
                        "dark": "{color.gray.200}"
                      }
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "primary": {
                "color": {
                  "static": {
                    "value": {
                      "initial": "{color.gray.900}",
                      "dark": "{color.gray.50}"
                    }
                  },
                  "hover": {}
                }
              },
              "secondary": {
                "color": {
                  "static": {
                    "value": {
                      "initial": "{color.gray.500}",
                      "dark": "{color.gray.400}"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "{color.gray.700}",
                      "dark": "{color.gray.200}"
                    }
                  }
                }
              }
            }
          },
          "container": {
            "title": "Main container sizings.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType size",
              "@studioIcon material-symbols:width-full-outline"
            ],
            "id": "#tokensConfig/elements/container",
            "properties": {
              "maxWidth": {
                "id": "#tokensConfig/elements/container/maxWidth",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/elements/container/maxWidth/value",
                    "default": "80rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "80rem"
                }
              },
              "padding": {
                "id": "#tokensConfig/elements/container/padding",
                "properties": {
                  "mobile": {
                    "id": "#tokensConfig/elements/container/padding/mobile",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/elements/container/padding/mobile/value",
                        "default": "{space.4}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{space.4}"
                    }
                  },
                  "xs": {
                    "id": "#tokensConfig/elements/container/padding/xs",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/elements/container/padding/xs/value",
                        "default": "{space.4}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{space.4}"
                    }
                  },
                  "sm": {
                    "id": "#tokensConfig/elements/container/padding/sm",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/elements/container/padding/sm/value",
                        "default": "{space.6}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{space.6}"
                    }
                  },
                  "md": {
                    "id": "#tokensConfig/elements/container/padding/md",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/elements/container/padding/md/value",
                        "default": "{space.6}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{space.6}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "mobile": {
                    "value": "{space.4}"
                  },
                  "xs": {
                    "value": "{space.4}"
                  },
                  "sm": {
                    "value": "{space.6}"
                  },
                  "md": {
                    "value": "{space.6}"
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "maxWidth": {
                "value": "80rem"
              },
              "padding": {
                "mobile": {
                  "value": "{space.4}"
                },
                "xs": {
                  "value": "{space.4}"
                },
                "sm": {
                  "value": "{space.6}"
                },
                "md": {
                  "value": "{space.6}"
                }
              }
            }
          },
          "backdrop": {
            "title": "Backdrops used in Elements.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType size",
              "@studioIcon material-symbols:blur-circular"
            ],
            "id": "#tokensConfig/elements/backdrop",
            "properties": {
              "filter": {
                "id": "#tokensConfig/elements/backdrop/filter",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/elements/backdrop/filter/value",
                    "default": "saturate(200%) blur(20px)"
                  }
                },
                "type": "object",
                "default": {
                  "value": "saturate(200%) blur(20px)"
                }
              },
              "background": {
                "id": "#tokensConfig/elements/backdrop/background",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/elements/backdrop/background/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/elements/backdrop/background/value/initial",
                        "default": "#fffc"
                      },
                      "dark": {
                        "type": "string",
                        "id": "#tokensConfig/elements/backdrop/background/value/dark",
                        "default": "#0c0d0ccc"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "#fffc",
                      "dark": "#0c0d0ccc"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "#fffc",
                    "dark": "#0c0d0ccc"
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "filter": {
                "value": "saturate(200%) blur(20px)"
              },
              "background": {
                "value": {
                  "initial": "#fffc",
                  "dark": "#0c0d0ccc"
                }
              }
            }
          },
          "border": {
            "title": "Borders used in Elements.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType color",
              "@studioIcon material-symbols:border-all-outline-rounded"
            ],
            "id": "#tokensConfig/elements/border",
            "properties": {
              "primary": {
                "id": "#tokensConfig/elements/border/primary",
                "properties": {
                  "static": {
                    "id": "#tokensConfig/elements/border/primary/static",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/elements/border/primary/static/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/primary/static/value/initial",
                            "default": "{color.gray.100}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/primary/static/value/dark",
                            "default": "{color.gray.900}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{color.gray.100}",
                          "dark": "{color.gray.900}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{color.gray.100}",
                        "dark": "{color.gray.900}"
                      }
                    }
                  },
                  "hover": {
                    "id": "#tokensConfig/elements/border/primary/hover",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/elements/border/primary/hover/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/primary/hover/value/initial",
                            "default": "{color.gray.200}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/primary/hover/value/dark",
                            "default": "{color.gray.800}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{color.gray.200}",
                          "dark": "{color.gray.800}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{color.gray.200}",
                        "dark": "{color.gray.800}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "static": {
                    "value": {
                      "initial": "{color.gray.100}",
                      "dark": "{color.gray.900}"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "{color.gray.200}",
                      "dark": "{color.gray.800}"
                    }
                  }
                }
              },
              "secondary": {
                "id": "#tokensConfig/elements/border/secondary",
                "properties": {
                  "static": {
                    "id": "#tokensConfig/elements/border/secondary/static",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/elements/border/secondary/static/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/secondary/static/value/initial",
                            "default": "{color.gray.200}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/secondary/static/value/dark",
                            "default": "{color.gray.800}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{color.gray.200}",
                          "dark": "{color.gray.800}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{color.gray.200}",
                        "dark": "{color.gray.800}"
                      }
                    }
                  },
                  "hover": {
                    "id": "#tokensConfig/elements/border/secondary/hover",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/elements/border/secondary/hover/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/secondary/hover/value/initial",
                            "default": ""
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/elements/border/secondary/hover/value/dark",
                            "default": ""
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "",
                          "dark": ""
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "",
                        "dark": ""
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "static": {
                    "value": {
                      "initial": "{color.gray.200}",
                      "dark": "{color.gray.800}"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "",
                      "dark": ""
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "primary": {
                "static": {
                  "value": {
                    "initial": "{color.gray.100}",
                    "dark": "{color.gray.900}"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "{color.gray.200}",
                    "dark": "{color.gray.800}"
                  }
                }
              },
              "secondary": {
                "static": {
                  "value": {
                    "initial": "{color.gray.200}",
                    "dark": "{color.gray.800}"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "",
                    "dark": ""
                  }
                }
              }
            }
          },
          "surface": {
            "title": "Surfaces used in Elements.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType color",
              "@studioIcon fluent:surface-hub-20-filled"
            ],
            "id": "#tokensConfig/elements/surface",
            "properties": {
              "background": {
                "id": "#tokensConfig/elements/surface/background",
                "properties": {
                  "base": {
                    "id": "#tokensConfig/elements/surface/background/base",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/elements/surface/background/base/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/elements/surface/background/base/value/initial",
                            "default": "{color.gray.100}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/elements/surface/background/base/value/dark",
                            "default": "{color.gray.900}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{color.gray.100}",
                          "dark": "{color.gray.900}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{color.gray.100}",
                        "dark": "{color.gray.900}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "base": {
                    "value": {
                      "initial": "{color.gray.100}",
                      "dark": "{color.gray.900}"
                    }
                  }
                }
              },
              "primary": {
                "id": "#tokensConfig/elements/surface/primary",
                "properties": {
                  "backgroundColor": {
                    "id": "#tokensConfig/elements/surface/primary/backgroundColor",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/elements/surface/primary/backgroundColor/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/elements/surface/primary/backgroundColor/value/initial",
                            "default": "{color.gray.100}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/elements/surface/primary/backgroundColor/value/dark",
                            "default": "{color.gray.900}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{color.gray.100}",
                          "dark": "{color.gray.900}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{color.gray.100}",
                        "dark": "{color.gray.900}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "backgroundColor": {
                    "value": {
                      "initial": "{color.gray.100}",
                      "dark": "{color.gray.900}"
                    }
                  }
                }
              },
              "secondary": {
                "id": "#tokensConfig/elements/surface/secondary",
                "properties": {
                  "backgroundColor": {
                    "id": "#tokensConfig/elements/surface/secondary/backgroundColor",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/elements/surface/secondary/backgroundColor/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/elements/surface/secondary/backgroundColor/value/initial",
                            "default": "{color.gray.200}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/elements/surface/secondary/backgroundColor/value/dark",
                            "default": "{color.gray.800}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{color.gray.200}",
                          "dark": "{color.gray.800}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{color.gray.200}",
                        "dark": "{color.gray.800}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "backgroundColor": {
                    "value": {
                      "initial": "{color.gray.200}",
                      "dark": "{color.gray.800}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "background": {
                "base": {
                  "value": {
                    "initial": "{color.gray.100}",
                    "dark": "{color.gray.900}"
                  }
                }
              },
              "primary": {
                "backgroundColor": {
                  "value": {
                    "initial": "{color.gray.100}",
                    "dark": "{color.gray.900}"
                  }
                }
              },
              "secondary": {
                "backgroundColor": {
                  "value": {
                    "initial": "{color.gray.200}",
                    "dark": "{color.gray.800}"
                  }
                }
              }
            }
          },
          "state": {
            "title": "Color states used in Elements.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType color",
              "@studioIcon mdi:palette-advanced"
            ],
            "id": "#tokensConfig/elements/state",
            "properties": {
              "primary": {
                "id": "#tokensConfig/elements/state/primary",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/state/primary/color",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/primary/color/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/primary/color/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/color/primary/value/initial",
                                "default": "{color.primary.600}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/color/primary/value/dark",
                                "default": "{color.primary.400}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.primary.600}",
                              "dark": "{color.primary.400}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.primary.600}",
                            "dark": "{color.primary.400}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/primary/color/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/primary/color/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/color/secondary/value/initial",
                                "default": "{color.primary.700}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/color/secondary/value/dark",
                                "default": "{color.primary.200}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.primary.700}",
                              "dark": "{color.primary.200}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.primary.700}",
                            "dark": "{color.primary.200}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.primary.600}",
                          "dark": "{color.primary.400}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.primary.700}",
                          "dark": "{color.primary.200}"
                        }
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/elements/state/primary/backgroundColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/primary/backgroundColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/primary/backgroundColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/backgroundColor/primary/value/initial",
                                "default": "{color.primary.50}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/backgroundColor/primary/value/dark",
                                "default": "{color.primary.900}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.primary.50}",
                              "dark": "{color.primary.900}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.primary.50}",
                            "dark": "{color.primary.900}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/primary/backgroundColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/primary/backgroundColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/backgroundColor/secondary/value/initial",
                                "default": "{color.primary.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/backgroundColor/secondary/value/dark",
                                "default": "{color.primary.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.primary.100}",
                              "dark": "{color.primary.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.primary.100}",
                            "dark": "{color.primary.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.primary.50}",
                          "dark": "{color.primary.900}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.primary.100}",
                          "dark": "{color.primary.800}"
                        }
                      }
                    }
                  },
                  "borderColor": {
                    "id": "#tokensConfig/elements/state/primary/borderColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/primary/borderColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/primary/borderColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/borderColor/primary/value/initial",
                                "default": "{color.primary.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/borderColor/primary/value/dark",
                                "default": "{color.primary.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.primary.100}",
                              "dark": "{color.primary.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.primary.100}",
                            "dark": "{color.primary.800}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/primary/borderColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/primary/borderColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/borderColor/secondary/value/initial",
                                "default": "{color.primary.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/primary/borderColor/secondary/value/dark",
                                "default": "{color.primary.700}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.primary.200}",
                              "dark": "{color.primary.700}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.primary.200}",
                            "dark": "{color.primary.700}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.primary.100}",
                          "dark": "{color.primary.800}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.primary.200}",
                          "dark": "{color.primary.700}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "primary": {
                      "value": {
                        "initial": "{color.primary.600}",
                        "dark": "{color.primary.400}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.primary.700}",
                        "dark": "{color.primary.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.primary.50}",
                        "dark": "{color.primary.900}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.primary.100}",
                        "dark": "{color.primary.800}"
                      }
                    }
                  },
                  "borderColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.primary.100}",
                        "dark": "{color.primary.800}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.primary.200}",
                        "dark": "{color.primary.700}"
                      }
                    }
                  }
                }
              },
              "info": {
                "id": "#tokensConfig/elements/state/info",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/state/info/color",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/info/color/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/info/color/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/color/primary/value/initial",
                                "default": "{color.blue.500}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/color/primary/value/dark",
                                "default": "{color.blue.400}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.blue.500}",
                              "dark": "{color.blue.400}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.blue.500}",
                            "dark": "{color.blue.400}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/info/color/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/info/color/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/color/secondary/value/initial",
                                "default": "{color.blue.600}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/color/secondary/value/dark",
                                "default": "{color.blue.200}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.blue.600}",
                              "dark": "{color.blue.200}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.blue.600}",
                            "dark": "{color.blue.200}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.blue.500}",
                          "dark": "{color.blue.400}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.blue.600}",
                          "dark": "{color.blue.200}"
                        }
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/elements/state/info/backgroundColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/info/backgroundColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/info/backgroundColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/backgroundColor/primary/value/initial",
                                "default": "{color.blue.50}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/backgroundColor/primary/value/dark",
                                "default": "{color.blue.900}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.blue.50}",
                              "dark": "{color.blue.900}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.blue.50}",
                            "dark": "{color.blue.900}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/info/backgroundColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/info/backgroundColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/backgroundColor/secondary/value/initial",
                                "default": "{color.blue.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/backgroundColor/secondary/value/dark",
                                "default": "{color.blue.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.blue.100}",
                              "dark": "{color.blue.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.blue.100}",
                            "dark": "{color.blue.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.blue.50}",
                          "dark": "{color.blue.900}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.blue.100}",
                          "dark": "{color.blue.800}"
                        }
                      }
                    }
                  },
                  "borderColor": {
                    "id": "#tokensConfig/elements/state/info/borderColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/info/borderColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/info/borderColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/borderColor/primary/value/initial",
                                "default": "{color.blue.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/borderColor/primary/value/dark",
                                "default": "{color.blue.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.blue.100}",
                              "dark": "{color.blue.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.blue.100}",
                            "dark": "{color.blue.800}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/info/borderColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/info/borderColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/borderColor/secondary/value/initial",
                                "default": "{color.blue.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/info/borderColor/secondary/value/dark",
                                "default": "{color.blue.700}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.blue.200}",
                              "dark": "{color.blue.700}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.blue.200}",
                            "dark": "{color.blue.700}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.blue.100}",
                          "dark": "{color.blue.800}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.blue.200}",
                          "dark": "{color.blue.700}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "primary": {
                      "value": {
                        "initial": "{color.blue.500}",
                        "dark": "{color.blue.400}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.blue.600}",
                        "dark": "{color.blue.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.blue.50}",
                        "dark": "{color.blue.900}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.blue.100}",
                        "dark": "{color.blue.800}"
                      }
                    }
                  },
                  "borderColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.blue.100}",
                        "dark": "{color.blue.800}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.blue.200}",
                        "dark": "{color.blue.700}"
                      }
                    }
                  }
                }
              },
              "success": {
                "id": "#tokensConfig/elements/state/success",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/state/success/color",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/success/color/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/success/color/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/color/primary/value/initial",
                                "default": "{color.green.500}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/color/primary/value/dark",
                                "default": "{color.green.400}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.green.500}",
                              "dark": "{color.green.400}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.green.500}",
                            "dark": "{color.green.400}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/success/color/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/success/color/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/color/secondary/value/initial",
                                "default": "{color.green.600}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/color/secondary/value/dark",
                                "default": "{color.green.200}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.green.600}",
                              "dark": "{color.green.200}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.green.600}",
                            "dark": "{color.green.200}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.green.500}",
                          "dark": "{color.green.400}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.green.600}",
                          "dark": "{color.green.200}"
                        }
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/elements/state/success/backgroundColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/success/backgroundColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/success/backgroundColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/backgroundColor/primary/value/initial",
                                "default": "{color.green.50}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/backgroundColor/primary/value/dark",
                                "default": "{color.green.900}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.green.50}",
                              "dark": "{color.green.900}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.green.50}",
                            "dark": "{color.green.900}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/success/backgroundColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/success/backgroundColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/backgroundColor/secondary/value/initial",
                                "default": "{color.green.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/backgroundColor/secondary/value/dark",
                                "default": "{color.green.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.green.100}",
                              "dark": "{color.green.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.green.100}",
                            "dark": "{color.green.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.green.50}",
                          "dark": "{color.green.900}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.green.100}",
                          "dark": "{color.green.800}"
                        }
                      }
                    }
                  },
                  "borderColor": {
                    "id": "#tokensConfig/elements/state/success/borderColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/success/borderColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/success/borderColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/borderColor/primary/value/initial",
                                "default": "{color.green.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/borderColor/primary/value/dark",
                                "default": "{color.green.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.green.100}",
                              "dark": "{color.green.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.green.100}",
                            "dark": "{color.green.800}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/success/borderColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/success/borderColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/borderColor/secondary/value/initial",
                                "default": "{color.green.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/success/borderColor/secondary/value/dark",
                                "default": "{color.green.700}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.green.200}",
                              "dark": "{color.green.700}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.green.200}",
                            "dark": "{color.green.700}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.green.100}",
                          "dark": "{color.green.800}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.green.200}",
                          "dark": "{color.green.700}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "primary": {
                      "value": {
                        "initial": "{color.green.500}",
                        "dark": "{color.green.400}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.green.600}",
                        "dark": "{color.green.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.green.50}",
                        "dark": "{color.green.900}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.green.100}",
                        "dark": "{color.green.800}"
                      }
                    }
                  },
                  "borderColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.green.100}",
                        "dark": "{color.green.800}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.green.200}",
                        "dark": "{color.green.700}"
                      }
                    }
                  }
                }
              },
              "warning": {
                "id": "#tokensConfig/elements/state/warning",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/state/warning/color",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/warning/color/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/warning/color/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/color/primary/value/initial",
                                "default": "{color.yellow.600}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/color/primary/value/dark",
                                "default": "{color.yellow.400}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.yellow.600}",
                              "dark": "{color.yellow.400}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.yellow.600}",
                            "dark": "{color.yellow.400}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/warning/color/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/warning/color/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/color/secondary/value/initial",
                                "default": "{color.yellow.700}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/color/secondary/value/dark",
                                "default": "{color.yellow.200}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.yellow.700}",
                              "dark": "{color.yellow.200}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.yellow.700}",
                            "dark": "{color.yellow.200}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.yellow.600}",
                          "dark": "{color.yellow.400}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.yellow.700}",
                          "dark": "{color.yellow.200}"
                        }
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/elements/state/warning/backgroundColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/warning/backgroundColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/warning/backgroundColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/backgroundColor/primary/value/initial",
                                "default": "{color.yellow.50}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/backgroundColor/primary/value/dark",
                                "default": "{color.yellow.900}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.yellow.50}",
                              "dark": "{color.yellow.900}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.yellow.50}",
                            "dark": "{color.yellow.900}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/warning/backgroundColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/warning/backgroundColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/backgroundColor/secondary/value/initial",
                                "default": "{color.yellow.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/backgroundColor/secondary/value/dark",
                                "default": "{color.yellow.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.yellow.100}",
                              "dark": "{color.yellow.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.yellow.100}",
                            "dark": "{color.yellow.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.yellow.50}",
                          "dark": "{color.yellow.900}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.yellow.100}",
                          "dark": "{color.yellow.800}"
                        }
                      }
                    }
                  },
                  "borderColor": {
                    "id": "#tokensConfig/elements/state/warning/borderColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/warning/borderColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/warning/borderColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/borderColor/primary/value/initial",
                                "default": "{color.yellow.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/borderColor/primary/value/dark",
                                "default": "{color.yellow.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.yellow.100}",
                              "dark": "{color.yellow.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.yellow.100}",
                            "dark": "{color.yellow.800}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/warning/borderColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/warning/borderColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/borderColor/secondary/value/initial",
                                "default": "{color.yellow.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/warning/borderColor/secondary/value/dark",
                                "default": "{color.yellow.700}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.yellow.200}",
                              "dark": "{color.yellow.700}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.yellow.200}",
                            "dark": "{color.yellow.700}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.yellow.100}",
                          "dark": "{color.yellow.800}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.yellow.200}",
                          "dark": "{color.yellow.700}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "primary": {
                      "value": {
                        "initial": "{color.yellow.600}",
                        "dark": "{color.yellow.400}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.yellow.700}",
                        "dark": "{color.yellow.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.yellow.50}",
                        "dark": "{color.yellow.900}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.yellow.100}",
                        "dark": "{color.yellow.800}"
                      }
                    }
                  },
                  "borderColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.yellow.100}",
                        "dark": "{color.yellow.800}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.yellow.200}",
                        "dark": "{color.yellow.700}"
                      }
                    }
                  }
                }
              },
              "danger": {
                "id": "#tokensConfig/elements/state/danger",
                "properties": {
                  "color": {
                    "id": "#tokensConfig/elements/state/danger/color",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/danger/color/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/danger/color/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/color/primary/value/initial",
                                "default": "{color.red.500}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/color/primary/value/dark",
                                "default": "{color.red.300}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.red.500}",
                              "dark": "{color.red.300}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.red.500}",
                            "dark": "{color.red.300}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/danger/color/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/danger/color/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/color/secondary/value/initial",
                                "default": "{color.red.600}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/color/secondary/value/dark",
                                "default": "{color.red.200}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.red.600}",
                              "dark": "{color.red.200}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.red.600}",
                            "dark": "{color.red.200}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.red.500}",
                          "dark": "{color.red.300}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.red.600}",
                          "dark": "{color.red.200}"
                        }
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/elements/state/danger/backgroundColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/danger/backgroundColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/danger/backgroundColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/backgroundColor/primary/value/initial",
                                "default": "{color.red.50}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/backgroundColor/primary/value/dark",
                                "default": "{color.red.900}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.red.50}",
                              "dark": "{color.red.900}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.red.50}",
                            "dark": "{color.red.900}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/danger/backgroundColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/danger/backgroundColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/backgroundColor/secondary/value/initial",
                                "default": "{color.red.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/backgroundColor/secondary/value/dark",
                                "default": "{color.red.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.red.100}",
                              "dark": "{color.red.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.red.100}",
                            "dark": "{color.red.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.red.50}",
                          "dark": "{color.red.900}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.red.100}",
                          "dark": "{color.red.800}"
                        }
                      }
                    }
                  },
                  "borderColor": {
                    "id": "#tokensConfig/elements/state/danger/borderColor",
                    "properties": {
                      "primary": {
                        "id": "#tokensConfig/elements/state/danger/borderColor/primary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/danger/borderColor/primary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/borderColor/primary/value/initial",
                                "default": "{color.red.100}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/borderColor/primary/value/dark",
                                "default": "{color.red.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.red.100}",
                              "dark": "{color.red.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.red.100}",
                            "dark": "{color.red.800}"
                          }
                        }
                      },
                      "secondary": {
                        "id": "#tokensConfig/elements/state/danger/borderColor/secondary",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/elements/state/danger/borderColor/secondary/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/borderColor/secondary/value/initial",
                                "default": "{color.red.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/elements/state/danger/borderColor/secondary/value/dark",
                                "default": "{color.red.700}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.red.200}",
                              "dark": "{color.red.700}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.red.200}",
                            "dark": "{color.red.700}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "primary": {
                        "value": {
                          "initial": "{color.red.100}",
                          "dark": "{color.red.800}"
                        }
                      },
                      "secondary": {
                        "value": {
                          "initial": "{color.red.200}",
                          "dark": "{color.red.700}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "color": {
                    "primary": {
                      "value": {
                        "initial": "{color.red.500}",
                        "dark": "{color.red.300}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.red.600}",
                        "dark": "{color.red.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.red.50}",
                        "dark": "{color.red.900}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.red.100}",
                        "dark": "{color.red.800}"
                      }
                    }
                  },
                  "borderColor": {
                    "primary": {
                      "value": {
                        "initial": "{color.red.100}",
                        "dark": "{color.red.800}"
                      }
                    },
                    "secondary": {
                      "value": {
                        "initial": "{color.red.200}",
                        "dark": "{color.red.700}"
                      }
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "primary": {
                "color": {
                  "primary": {
                    "value": {
                      "initial": "{color.primary.600}",
                      "dark": "{color.primary.400}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.primary.700}",
                      "dark": "{color.primary.200}"
                    }
                  }
                },
                "backgroundColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.primary.50}",
                      "dark": "{color.primary.900}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.primary.100}",
                      "dark": "{color.primary.800}"
                    }
                  }
                },
                "borderColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.primary.100}",
                      "dark": "{color.primary.800}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.primary.200}",
                      "dark": "{color.primary.700}"
                    }
                  }
                }
              },
              "info": {
                "color": {
                  "primary": {
                    "value": {
                      "initial": "{color.blue.500}",
                      "dark": "{color.blue.400}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.blue.600}",
                      "dark": "{color.blue.200}"
                    }
                  }
                },
                "backgroundColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.blue.50}",
                      "dark": "{color.blue.900}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.blue.100}",
                      "dark": "{color.blue.800}"
                    }
                  }
                },
                "borderColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.blue.100}",
                      "dark": "{color.blue.800}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.blue.200}",
                      "dark": "{color.blue.700}"
                    }
                  }
                }
              },
              "success": {
                "color": {
                  "primary": {
                    "value": {
                      "initial": "{color.green.500}",
                      "dark": "{color.green.400}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.green.600}",
                      "dark": "{color.green.200}"
                    }
                  }
                },
                "backgroundColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.green.50}",
                      "dark": "{color.green.900}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.green.100}",
                      "dark": "{color.green.800}"
                    }
                  }
                },
                "borderColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.green.100}",
                      "dark": "{color.green.800}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.green.200}",
                      "dark": "{color.green.700}"
                    }
                  }
                }
              },
              "warning": {
                "color": {
                  "primary": {
                    "value": {
                      "initial": "{color.yellow.600}",
                      "dark": "{color.yellow.400}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.yellow.700}",
                      "dark": "{color.yellow.200}"
                    }
                  }
                },
                "backgroundColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.yellow.50}",
                      "dark": "{color.yellow.900}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.yellow.100}",
                      "dark": "{color.yellow.800}"
                    }
                  }
                },
                "borderColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.yellow.100}",
                      "dark": "{color.yellow.800}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.yellow.200}",
                      "dark": "{color.yellow.700}"
                    }
                  }
                }
              },
              "danger": {
                "color": {
                  "primary": {
                    "value": {
                      "initial": "{color.red.500}",
                      "dark": "{color.red.300}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.red.600}",
                      "dark": "{color.red.200}"
                    }
                  }
                },
                "backgroundColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.red.50}",
                      "dark": "{color.red.900}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.red.100}",
                      "dark": "{color.red.800}"
                    }
                  }
                },
                "borderColor": {
                  "primary": {
                    "value": {
                      "initial": "{color.red.100}",
                      "dark": "{color.red.800}"
                    }
                  },
                  "secondary": {
                    "value": {
                      "initial": "{color.red.200}",
                      "dark": "{color.red.700}"
                    }
                  }
                }
              }
            }
          }
        },
        "type": "object",
        "default": {
          "text": {
            "primary": {
              "color": {
                "static": {
                  "value": {
                    "initial": "{color.gray.900}",
                    "dark": "{color.gray.50}"
                  }
                },
                "hover": {}
              }
            },
            "secondary": {
              "color": {
                "static": {
                  "value": {
                    "initial": "{color.gray.500}",
                    "dark": "{color.gray.400}"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "{color.gray.700}",
                    "dark": "{color.gray.200}"
                  }
                }
              }
            }
          },
          "container": {
            "maxWidth": {
              "value": "80rem"
            },
            "padding": {
              "mobile": {
                "value": "{space.4}"
              },
              "xs": {
                "value": "{space.4}"
              },
              "sm": {
                "value": "{space.6}"
              },
              "md": {
                "value": "{space.6}"
              }
            }
          },
          "backdrop": {
            "filter": {
              "value": "saturate(200%) blur(20px)"
            },
            "background": {
              "value": {
                "initial": "#fffc",
                "dark": "#0c0d0ccc"
              }
            }
          },
          "border": {
            "primary": {
              "static": {
                "value": {
                  "initial": "{color.gray.100}",
                  "dark": "{color.gray.900}"
                }
              },
              "hover": {
                "value": {
                  "initial": "{color.gray.200}",
                  "dark": "{color.gray.800}"
                }
              }
            },
            "secondary": {
              "static": {
                "value": {
                  "initial": "{color.gray.200}",
                  "dark": "{color.gray.800}"
                }
              },
              "hover": {
                "value": {
                  "initial": "",
                  "dark": ""
                }
              }
            }
          },
          "surface": {
            "background": {
              "base": {
                "value": {
                  "initial": "{color.gray.100}",
                  "dark": "{color.gray.900}"
                }
              }
            },
            "primary": {
              "backgroundColor": {
                "value": {
                  "initial": "{color.gray.100}",
                  "dark": "{color.gray.900}"
                }
              }
            },
            "secondary": {
              "backgroundColor": {
                "value": {
                  "initial": "{color.gray.200}",
                  "dark": "{color.gray.800}"
                }
              }
            }
          },
          "state": {
            "primary": {
              "color": {
                "primary": {
                  "value": {
                    "initial": "{color.primary.600}",
                    "dark": "{color.primary.400}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.primary.700}",
                    "dark": "{color.primary.200}"
                  }
                }
              },
              "backgroundColor": {
                "primary": {
                  "value": {
                    "initial": "{color.primary.50}",
                    "dark": "{color.primary.900}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.primary.100}",
                    "dark": "{color.primary.800}"
                  }
                }
              },
              "borderColor": {
                "primary": {
                  "value": {
                    "initial": "{color.primary.100}",
                    "dark": "{color.primary.800}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.primary.200}",
                    "dark": "{color.primary.700}"
                  }
                }
              }
            },
            "info": {
              "color": {
                "primary": {
                  "value": {
                    "initial": "{color.blue.500}",
                    "dark": "{color.blue.400}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.blue.600}",
                    "dark": "{color.blue.200}"
                  }
                }
              },
              "backgroundColor": {
                "primary": {
                  "value": {
                    "initial": "{color.blue.50}",
                    "dark": "{color.blue.900}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.blue.100}",
                    "dark": "{color.blue.800}"
                  }
                }
              },
              "borderColor": {
                "primary": {
                  "value": {
                    "initial": "{color.blue.100}",
                    "dark": "{color.blue.800}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.blue.200}",
                    "dark": "{color.blue.700}"
                  }
                }
              }
            },
            "success": {
              "color": {
                "primary": {
                  "value": {
                    "initial": "{color.green.500}",
                    "dark": "{color.green.400}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.green.600}",
                    "dark": "{color.green.200}"
                  }
                }
              },
              "backgroundColor": {
                "primary": {
                  "value": {
                    "initial": "{color.green.50}",
                    "dark": "{color.green.900}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.green.100}",
                    "dark": "{color.green.800}"
                  }
                }
              },
              "borderColor": {
                "primary": {
                  "value": {
                    "initial": "{color.green.100}",
                    "dark": "{color.green.800}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.green.200}",
                    "dark": "{color.green.700}"
                  }
                }
              }
            },
            "warning": {
              "color": {
                "primary": {
                  "value": {
                    "initial": "{color.yellow.600}",
                    "dark": "{color.yellow.400}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.yellow.700}",
                    "dark": "{color.yellow.200}"
                  }
                }
              },
              "backgroundColor": {
                "primary": {
                  "value": {
                    "initial": "{color.yellow.50}",
                    "dark": "{color.yellow.900}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.yellow.100}",
                    "dark": "{color.yellow.800}"
                  }
                }
              },
              "borderColor": {
                "primary": {
                  "value": {
                    "initial": "{color.yellow.100}",
                    "dark": "{color.yellow.800}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.yellow.200}",
                    "dark": "{color.yellow.700}"
                  }
                }
              }
            },
            "danger": {
              "color": {
                "primary": {
                  "value": {
                    "initial": "{color.red.500}",
                    "dark": "{color.red.300}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.red.600}",
                    "dark": "{color.red.200}"
                  }
                }
              },
              "backgroundColor": {
                "primary": {
                  "value": {
                    "initial": "{color.red.50}",
                    "dark": "{color.red.900}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.red.100}",
                    "dark": "{color.red.800}"
                  }
                }
              },
              "borderColor": {
                "primary": {
                  "value": {
                    "initial": "{color.red.100}",
                    "dark": "{color.red.800}"
                  }
                },
                "secondary": {
                  "value": {
                    "initial": "{color.red.200}",
                    "dark": "{color.red.700}"
                  }
                }
              }
            }
          }
        }
      },
      "typography": {
        "title": "All the configurable tokens for your Typography.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType color",
          "@studioIcon material-symbols:article"
        ],
        "id": "#tokensConfig/typography",
        "properties": {
          "body": {
            "id": "#tokensConfig/typography/body",
            "properties": {
              "color": {
                "id": "#tokensConfig/typography/body/color",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/typography/body/color/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/typography/body/color/value/initial",
                        "default": "{color.black}"
                      },
                      "dark": {
                        "type": "string",
                        "id": "#tokensConfig/typography/body/color/value/dark",
                        "default": "{color.white}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "{color.black}",
                      "dark": "{color.white}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "{color.black}",
                    "dark": "{color.white}"
                  }
                }
              },
              "backgroundColor": {
                "id": "#tokensConfig/typography/body/backgroundColor",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/typography/body/backgroundColor/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/typography/body/backgroundColor/value/initial",
                        "default": "{color.white}"
                      },
                      "dark": {
                        "type": "string",
                        "id": "#tokensConfig/typography/body/backgroundColor/value/dark",
                        "default": "{color.black}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "{color.white}",
                      "dark": "{color.black}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "{color.white}",
                    "dark": "{color.black}"
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "color": {
                "value": {
                  "initial": "{color.black}",
                  "dark": "{color.white}"
                }
              },
              "backgroundColor": {
                "value": {
                  "initial": "{color.white}",
                  "dark": "{color.black}"
                }
              }
            }
          },
          "verticalMargin": {
            "title": "Vertical spacings between paragraphs.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType size",
              "@studioIcon mingcute:line-height-line"
            ],
            "id": "#tokensConfig/typography/verticalMargin",
            "properties": {
              "sm": {
                "id": "#tokensConfig/typography/verticalMargin/sm",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/verticalMargin/sm/value",
                    "default": "16px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "16px"
                }
              },
              "base": {
                "id": "#tokensConfig/typography/verticalMargin/base",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/verticalMargin/base/value",
                    "default": "24px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "24px"
                }
              }
            },
            "type": "object",
            "default": {
              "sm": {
                "value": "16px"
              },
              "base": {
                "value": "24px"
              }
            }
          },
          "letterSpacing": {
            "title": "Horizontal spacings between letters.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType size",
              "@studioIcon mingcute:letter-spacing-line"
            ],
            "id": "#tokensConfig/typography/letterSpacing",
            "properties": {
              "tight": {
                "id": "#tokensConfig/typography/letterSpacing/tight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/letterSpacing/tight/value",
                    "default": "-0.025em"
                  }
                },
                "type": "object",
                "default": {
                  "value": "-0.025em"
                }
              },
              "wide": {
                "id": "#tokensConfig/typography/letterSpacing/wide",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/letterSpacing/wide/value",
                    "default": "0.025em"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0.025em"
                }
              }
            },
            "type": "object",
            "default": {
              "tight": {
                "value": "-0.025em"
              },
              "wide": {
                "value": "0.025em"
              }
            }
          },
          "fontSize": {
            "title": "Horizontal spacings between letters.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType font-size",
              "@studioIcon mingcute:font-size-fill"
            ],
            "id": "#tokensConfig/typography/fontSize",
            "properties": {
              "xs": {
                "id": "#tokensConfig/typography/fontSize/xs",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/xs/value",
                    "default": "12px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "12px"
                }
              },
              "sm": {
                "id": "#tokensConfig/typography/fontSize/sm",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/sm/value",
                    "default": "14px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "14px"
                }
              },
              "base": {
                "id": "#tokensConfig/typography/fontSize/base",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/base/value",
                    "default": "16px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "16px"
                }
              },
              "lg": {
                "id": "#tokensConfig/typography/fontSize/lg",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/lg/value",
                    "default": "18px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "18px"
                }
              },
              "xl": {
                "id": "#tokensConfig/typography/fontSize/xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/xl/value",
                    "default": "20px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "20px"
                }
              },
              "2xl": {
                "id": "#tokensConfig/typography/fontSize/2xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/2xl/value",
                    "default": "24px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "24px"
                }
              },
              "3xl": {
                "id": "#tokensConfig/typography/fontSize/3xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/3xl/value",
                    "default": "30px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "30px"
                }
              },
              "4xl": {
                "id": "#tokensConfig/typography/fontSize/4xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/4xl/value",
                    "default": "36px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "36px"
                }
              },
              "5xl": {
                "id": "#tokensConfig/typography/fontSize/5xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/5xl/value",
                    "default": "48px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "48px"
                }
              },
              "6xl": {
                "id": "#tokensConfig/typography/fontSize/6xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/6xl/value",
                    "default": "60px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "60px"
                }
              },
              "7xl": {
                "id": "#tokensConfig/typography/fontSize/7xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/7xl/value",
                    "default": "72px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "72px"
                }
              },
              "8xl": {
                "id": "#tokensConfig/typography/fontSize/8xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/8xl/value",
                    "default": "96px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "96px"
                }
              },
              "9xl": {
                "id": "#tokensConfig/typography/fontSize/9xl",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontSize/9xl/value",
                    "default": "128px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "128px"
                }
              }
            },
            "type": "object",
            "default": {
              "xs": {
                "value": "12px"
              },
              "sm": {
                "value": "14px"
              },
              "base": {
                "value": "16px"
              },
              "lg": {
                "value": "18px"
              },
              "xl": {
                "value": "20px"
              },
              "2xl": {
                "value": "24px"
              },
              "3xl": {
                "value": "30px"
              },
              "4xl": {
                "value": "36px"
              },
              "5xl": {
                "value": "48px"
              },
              "6xl": {
                "value": "60px"
              },
              "7xl": {
                "value": "72px"
              },
              "8xl": {
                "value": "96px"
              },
              "9xl": {
                "value": "128px"
              }
            }
          },
          "fontWeight": {
            "title": "Font weights used in typography.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType font-size",
              "@studioIcon mingcute:bold-fill"
            ],
            "id": "#tokensConfig/typography/fontWeight",
            "properties": {
              "thin": {
                "id": "#tokensConfig/typography/fontWeight/thin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/thin/value",
                    "default": "100"
                  }
                },
                "type": "object",
                "default": {
                  "value": "100"
                }
              },
              "extralight": {
                "id": "#tokensConfig/typography/fontWeight/extralight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/extralight/value",
                    "default": "200"
                  }
                },
                "type": "object",
                "default": {
                  "value": "200"
                }
              },
              "light": {
                "id": "#tokensConfig/typography/fontWeight/light",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/light/value",
                    "default": "300"
                  }
                },
                "type": "object",
                "default": {
                  "value": "300"
                }
              },
              "normal": {
                "id": "#tokensConfig/typography/fontWeight/normal",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/normal/value",
                    "default": "400"
                  }
                },
                "type": "object",
                "default": {
                  "value": "400"
                }
              },
              "medium": {
                "id": "#tokensConfig/typography/fontWeight/medium",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/medium/value",
                    "default": "500"
                  }
                },
                "type": "object",
                "default": {
                  "value": "500"
                }
              },
              "semibold": {
                "id": "#tokensConfig/typography/fontWeight/semibold",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/semibold/value",
                    "default": "600"
                  }
                },
                "type": "object",
                "default": {
                  "value": "600"
                }
              },
              "bold": {
                "id": "#tokensConfig/typography/fontWeight/bold",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/bold/value",
                    "default": "700"
                  }
                },
                "type": "object",
                "default": {
                  "value": "700"
                }
              },
              "extrabold": {
                "id": "#tokensConfig/typography/fontWeight/extrabold",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/extrabold/value",
                    "default": "800"
                  }
                },
                "type": "object",
                "default": {
                  "value": "800"
                }
              },
              "black": {
                "id": "#tokensConfig/typography/fontWeight/black",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/fontWeight/black/value",
                    "default": "900"
                  }
                },
                "type": "object",
                "default": {
                  "value": "900"
                }
              }
            },
            "type": "object",
            "default": {
              "thin": {
                "value": "100"
              },
              "extralight": {
                "value": "200"
              },
              "light": {
                "value": "300"
              },
              "normal": {
                "value": "400"
              },
              "medium": {
                "value": "500"
              },
              "semibold": {
                "value": "600"
              },
              "bold": {
                "value": "700"
              },
              "extrabold": {
                "value": "800"
              },
              "black": {
                "value": "900"
              }
            }
          },
          "lead": {
            "title": "Line heights used in your typography.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType font-size",
              "@studioIcon material-symbols:height-rounded"
            ],
            "id": "#tokensConfig/typography/lead",
            "properties": {
              "1": {
                "id": "#tokensConfig/typography/lead/1",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/1/value",
                    "default": ".025rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": ".025rem"
                }
              },
              "2": {
                "id": "#tokensConfig/typography/lead/2",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/2/value",
                    "default": ".5rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": ".5rem"
                }
              },
              "3": {
                "id": "#tokensConfig/typography/lead/3",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/3/value",
                    "default": ".75rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": ".75rem"
                }
              },
              "4": {
                "id": "#tokensConfig/typography/lead/4",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/4/value",
                    "default": "1rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1rem"
                }
              },
              "5": {
                "id": "#tokensConfig/typography/lead/5",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/5/value",
                    "default": "1.25rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1.25rem"
                }
              },
              "6": {
                "id": "#tokensConfig/typography/lead/6",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/6/value",
                    "default": "1.5rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1.5rem"
                }
              },
              "7": {
                "id": "#tokensConfig/typography/lead/7",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/7/value",
                    "default": "1.75rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1.75rem"
                }
              },
              "8": {
                "id": "#tokensConfig/typography/lead/8",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/8/value",
                    "default": "2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "2rem"
                }
              },
              "9": {
                "id": "#tokensConfig/typography/lead/9",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/9/value",
                    "default": "2.25rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "2.25rem"
                }
              },
              "10": {
                "id": "#tokensConfig/typography/lead/10",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/10/value",
                    "default": "2.5rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "2.5rem"
                }
              },
              "none": {
                "id": "#tokensConfig/typography/lead/none",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/none/value",
                    "default": "1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1"
                }
              },
              "tight": {
                "id": "#tokensConfig/typography/lead/tight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/tight/value",
                    "default": "1.25"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1.25"
                }
              },
              "snug": {
                "id": "#tokensConfig/typography/lead/snug",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/snug/value",
                    "default": "1.375"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1.375"
                }
              },
              "normal": {
                "id": "#tokensConfig/typography/lead/normal",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/normal/value",
                    "default": "1.5"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1.5"
                }
              },
              "relaxed": {
                "id": "#tokensConfig/typography/lead/relaxed",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/relaxed/value",
                    "default": "1.625"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1.625"
                }
              },
              "loose": {
                "id": "#tokensConfig/typography/lead/loose",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/lead/loose/value",
                    "default": "2"
                  }
                },
                "type": "object",
                "default": {
                  "value": "2"
                }
              }
            },
            "type": "object",
            "default": {
              "1": {
                "value": ".025rem"
              },
              "2": {
                "value": ".5rem"
              },
              "3": {
                "value": ".75rem"
              },
              "4": {
                "value": "1rem"
              },
              "5": {
                "value": "1.25rem"
              },
              "6": {
                "value": "1.5rem"
              },
              "7": {
                "value": "1.75rem"
              },
              "8": {
                "value": "2rem"
              },
              "9": {
                "value": "2.25rem"
              },
              "10": {
                "value": "2.5rem"
              },
              "none": {
                "value": "1"
              },
              "tight": {
                "value": "1.25"
              },
              "snug": {
                "value": "1.375"
              },
              "normal": {
                "value": "1.5"
              },
              "relaxed": {
                "value": "1.625"
              },
              "loose": {
                "value": "2"
              }
            }
          },
          "font": {
            "title": "Your typography fonts",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType font",
              "@studioIcon material-symbols:font-download-rounded"
            ],
            "id": "#tokensConfig/typography/font",
            "properties": {
              "display": {
                "id": "#tokensConfig/typography/font/display",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/font/display/value",
                    "default": "{font.sans}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{font.sans}"
                }
              },
              "body": {
                "id": "#tokensConfig/typography/font/body",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/font/body/value",
                    "default": "{font.sans}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{font.sans}"
                }
              },
              "code": {
                "id": "#tokensConfig/typography/font/code",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/typography/font/code/value",
                    "default": "{font.mono}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{font.mono}"
                }
              }
            },
            "type": "object",
            "default": {
              "display": {
                "value": "{font.sans}"
              },
              "body": {
                "value": "{font.sans}"
              },
              "code": {
                "value": "{font.mono}"
              }
            }
          },
          "color": {
            "title": "Your typography color palette.",
            "tags": [
              "@studioInput design-token",
              "@studioInputTokenType color",
              "@studioIcon ph:palette"
            ],
            "id": "#tokensConfig/typography/color",
            "properties": {
              "primary": {
                "id": "#tokensConfig/typography/color/primary",
                "properties": {
                  "50": {
                    "id": "#tokensConfig/typography/color/primary/50",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/50/value",
                        "default": "{color.primary.50}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.50}"
                    }
                  },
                  "100": {
                    "id": "#tokensConfig/typography/color/primary/100",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/100/value",
                        "default": "{color.primary.100}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.100}"
                    }
                  },
                  "200": {
                    "id": "#tokensConfig/typography/color/primary/200",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/200/value",
                        "default": "{color.primary.200}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.200}"
                    }
                  },
                  "300": {
                    "id": "#tokensConfig/typography/color/primary/300",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/300/value",
                        "default": "{color.primary.300}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.300}"
                    }
                  },
                  "400": {
                    "id": "#tokensConfig/typography/color/primary/400",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/400/value",
                        "default": "{color.primary.400}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.400}"
                    }
                  },
                  "500": {
                    "id": "#tokensConfig/typography/color/primary/500",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/500/value",
                        "default": "{color.primary.500}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.500}"
                    }
                  },
                  "600": {
                    "id": "#tokensConfig/typography/color/primary/600",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/600/value",
                        "default": "{color.primary.600}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.600}"
                    }
                  },
                  "700": {
                    "id": "#tokensConfig/typography/color/primary/700",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/700/value",
                        "default": "{color.primary.700}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.700}"
                    }
                  },
                  "800": {
                    "id": "#tokensConfig/typography/color/primary/800",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/800/value",
                        "default": "{color.primary.800}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.800}"
                    }
                  },
                  "900": {
                    "id": "#tokensConfig/typography/color/primary/900",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/primary/900/value",
                        "default": "{color.primary.900}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.primary.900}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "50": {
                    "value": "{color.primary.50}"
                  },
                  "100": {
                    "value": "{color.primary.100}"
                  },
                  "200": {
                    "value": "{color.primary.200}"
                  },
                  "300": {
                    "value": "{color.primary.300}"
                  },
                  "400": {
                    "value": "{color.primary.400}"
                  },
                  "500": {
                    "value": "{color.primary.500}"
                  },
                  "600": {
                    "value": "{color.primary.600}"
                  },
                  "700": {
                    "value": "{color.primary.700}"
                  },
                  "800": {
                    "value": "{color.primary.800}"
                  },
                  "900": {
                    "value": "{color.primary.900}"
                  }
                }
              },
              "secondary": {
                "id": "#tokensConfig/typography/color/secondary",
                "properties": {
                  "50": {
                    "id": "#tokensConfig/typography/color/secondary/50",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/50/value",
                        "default": "{color.gray.50}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.50}"
                    }
                  },
                  "100": {
                    "id": "#tokensConfig/typography/color/secondary/100",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/100/value",
                        "default": "{color.gray.100}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.100}"
                    }
                  },
                  "200": {
                    "id": "#tokensConfig/typography/color/secondary/200",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/200/value",
                        "default": "{color.gray.200}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.200}"
                    }
                  },
                  "300": {
                    "id": "#tokensConfig/typography/color/secondary/300",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/300/value",
                        "default": "{color.gray.300}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.300}"
                    }
                  },
                  "400": {
                    "id": "#tokensConfig/typography/color/secondary/400",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/400/value",
                        "default": "{color.gray.400}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.400}"
                    }
                  },
                  "500": {
                    "id": "#tokensConfig/typography/color/secondary/500",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/500/value",
                        "default": "{color.gray.500}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.500}"
                    }
                  },
                  "600": {
                    "id": "#tokensConfig/typography/color/secondary/600",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/600/value",
                        "default": "{color.gray.600}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.600}"
                    }
                  },
                  "700": {
                    "id": "#tokensConfig/typography/color/secondary/700",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/700/value",
                        "default": "{color.gray.700}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.700}"
                    }
                  },
                  "800": {
                    "id": "#tokensConfig/typography/color/secondary/800",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/800/value",
                        "default": "{color.gray.800}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.800}"
                    }
                  },
                  "900": {
                    "id": "#tokensConfig/typography/color/secondary/900",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/typography/color/secondary/900/value",
                        "default": "{color.gray.900}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{color.gray.900}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "50": {
                    "value": "{color.gray.50}"
                  },
                  "100": {
                    "value": "{color.gray.100}"
                  },
                  "200": {
                    "value": "{color.gray.200}"
                  },
                  "300": {
                    "value": "{color.gray.300}"
                  },
                  "400": {
                    "value": "{color.gray.400}"
                  },
                  "500": {
                    "value": "{color.gray.500}"
                  },
                  "600": {
                    "value": "{color.gray.600}"
                  },
                  "700": {
                    "value": "{color.gray.700}"
                  },
                  "800": {
                    "value": "{color.gray.800}"
                  },
                  "900": {
                    "value": "{color.gray.900}"
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "primary": {
                "50": {
                  "value": "{color.primary.50}"
                },
                "100": {
                  "value": "{color.primary.100}"
                },
                "200": {
                  "value": "{color.primary.200}"
                },
                "300": {
                  "value": "{color.primary.300}"
                },
                "400": {
                  "value": "{color.primary.400}"
                },
                "500": {
                  "value": "{color.primary.500}"
                },
                "600": {
                  "value": "{color.primary.600}"
                },
                "700": {
                  "value": "{color.primary.700}"
                },
                "800": {
                  "value": "{color.primary.800}"
                },
                "900": {
                  "value": "{color.primary.900}"
                }
              },
              "secondary": {
                "50": {
                  "value": "{color.gray.50}"
                },
                "100": {
                  "value": "{color.gray.100}"
                },
                "200": {
                  "value": "{color.gray.200}"
                },
                "300": {
                  "value": "{color.gray.300}"
                },
                "400": {
                  "value": "{color.gray.400}"
                },
                "500": {
                  "value": "{color.gray.500}"
                },
                "600": {
                  "value": "{color.gray.600}"
                },
                "700": {
                  "value": "{color.gray.700}"
                },
                "800": {
                  "value": "{color.gray.800}"
                },
                "900": {
                  "value": "{color.gray.900}"
                }
              }
            }
          }
        },
        "type": "object",
        "default": {
          "body": {
            "color": {
              "value": {
                "initial": "{color.black}",
                "dark": "{color.white}"
              }
            },
            "backgroundColor": {
              "value": {
                "initial": "{color.white}",
                "dark": "{color.black}"
              }
            }
          },
          "verticalMargin": {
            "sm": {
              "value": "16px"
            },
            "base": {
              "value": "24px"
            }
          },
          "letterSpacing": {
            "tight": {
              "value": "-0.025em"
            },
            "wide": {
              "value": "0.025em"
            }
          },
          "fontSize": {
            "xs": {
              "value": "12px"
            },
            "sm": {
              "value": "14px"
            },
            "base": {
              "value": "16px"
            },
            "lg": {
              "value": "18px"
            },
            "xl": {
              "value": "20px"
            },
            "2xl": {
              "value": "24px"
            },
            "3xl": {
              "value": "30px"
            },
            "4xl": {
              "value": "36px"
            },
            "5xl": {
              "value": "48px"
            },
            "6xl": {
              "value": "60px"
            },
            "7xl": {
              "value": "72px"
            },
            "8xl": {
              "value": "96px"
            },
            "9xl": {
              "value": "128px"
            }
          },
          "fontWeight": {
            "thin": {
              "value": "100"
            },
            "extralight": {
              "value": "200"
            },
            "light": {
              "value": "300"
            },
            "normal": {
              "value": "400"
            },
            "medium": {
              "value": "500"
            },
            "semibold": {
              "value": "600"
            },
            "bold": {
              "value": "700"
            },
            "extrabold": {
              "value": "800"
            },
            "black": {
              "value": "900"
            }
          },
          "lead": {
            "1": {
              "value": ".025rem"
            },
            "2": {
              "value": ".5rem"
            },
            "3": {
              "value": ".75rem"
            },
            "4": {
              "value": "1rem"
            },
            "5": {
              "value": "1.25rem"
            },
            "6": {
              "value": "1.5rem"
            },
            "7": {
              "value": "1.75rem"
            },
            "8": {
              "value": "2rem"
            },
            "9": {
              "value": "2.25rem"
            },
            "10": {
              "value": "2.5rem"
            },
            "none": {
              "value": "1"
            },
            "tight": {
              "value": "1.25"
            },
            "snug": {
              "value": "1.375"
            },
            "normal": {
              "value": "1.5"
            },
            "relaxed": {
              "value": "1.625"
            },
            "loose": {
              "value": "2"
            }
          },
          "font": {
            "display": {
              "value": "{font.sans}"
            },
            "body": {
              "value": "{font.sans}"
            },
            "code": {
              "value": "{font.mono}"
            }
          },
          "color": {
            "primary": {
              "50": {
                "value": "{color.primary.50}"
              },
              "100": {
                "value": "{color.primary.100}"
              },
              "200": {
                "value": "{color.primary.200}"
              },
              "300": {
                "value": "{color.primary.300}"
              },
              "400": {
                "value": "{color.primary.400}"
              },
              "500": {
                "value": "{color.primary.500}"
              },
              "600": {
                "value": "{color.primary.600}"
              },
              "700": {
                "value": "{color.primary.700}"
              },
              "800": {
                "value": "{color.primary.800}"
              },
              "900": {
                "value": "{color.primary.900}"
              }
            },
            "secondary": {
              "50": {
                "value": "{color.gray.50}"
              },
              "100": {
                "value": "{color.gray.100}"
              },
              "200": {
                "value": "{color.gray.200}"
              },
              "300": {
                "value": "{color.gray.300}"
              },
              "400": {
                "value": "{color.gray.400}"
              },
              "500": {
                "value": "{color.gray.500}"
              },
              "600": {
                "value": "{color.gray.600}"
              },
              "700": {
                "value": "{color.gray.700}"
              },
              "800": {
                "value": "{color.gray.800}"
              },
              "900": {
                "value": "{color.gray.900}"
              }
            }
          }
        }
      },
      "prose": {
        "title": "All the configurable tokens for your Prose components.",
        "tags": [
          "@studioInput design-token",
          "@studioInputTokenType font-size",
          "@studioIcon lucide:component"
        ],
        "id": "#tokensConfig/prose",
        "properties": {
          "p": {
            "id": "#tokensConfig/prose/p",
            "properties": {
              "fontSize": {
                "id": "#tokensConfig/prose/p/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/p/fontSize/value",
                    "default": "{typography.fontSize.base}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.base}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/p/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/p/lineHeight/value",
                    "default": "{typography.lead.normal}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.normal}"
                }
              },
              "margin": {
                "id": "#tokensConfig/prose/p/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/p/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              },
              "br": {
                "id": "#tokensConfig/prose/p/br",
                "properties": {
                  "margin": {
                    "id": "#tokensConfig/prose/p/br/margin",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/p/br/margin/value",
                        "default": "{typography.verticalMargin.base} 0 0 0"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{typography.verticalMargin.base} 0 0 0"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "margin": {
                    "value": "{typography.verticalMargin.base} 0 0 0"
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "fontSize": {
                "value": "{typography.fontSize.base}"
              },
              "lineHeight": {
                "value": "{typography.lead.normal}"
              },
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "br": {
                "margin": {
                  "value": "{typography.verticalMargin.base} 0 0 0"
                }
              }
            }
          },
          "h1": {
            "id": "#tokensConfig/prose/h1",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/h1/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h1/margin/value",
                    "default": "0 0 2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0 0 2rem"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/h1/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h1/fontSize/value",
                    "default": "{typography.fontSize.5xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.5xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/h1/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h1/lineHeight/value",
                    "default": "{typography.lead.tight}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.tight}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/h1/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h1/fontWeight/value",
                    "default": "{typography.fontWeight.bold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.bold}"
                }
              },
              "letterSpacing": {
                "id": "#tokensConfig/prose/h1/letterSpacing",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h1/letterSpacing/value",
                    "default": "{typography.letterSpacing.tight}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.letterSpacing.tight}"
                }
              },
              "iconSize": {
                "id": "#tokensConfig/prose/h1/iconSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h1/iconSize/value",
                    "default": "{typography.fontSize.3xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.3xl}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "0 0 2rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.5xl}"
              },
              "lineHeight": {
                "value": "{typography.lead.tight}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.bold}"
              },
              "letterSpacing": {
                "value": "{typography.letterSpacing.tight}"
              },
              "iconSize": {
                "value": "{typography.fontSize.3xl}"
              }
            }
          },
          "h2": {
            "id": "#tokensConfig/prose/h2",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/h2/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h2/margin/value",
                    "default": "3rem 0 2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "3rem 0 2rem"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/h2/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h2/fontSize/value",
                    "default": "{typography.fontSize.4xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.4xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/h2/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h2/lineHeight/value",
                    "default": "{typography.lead.tight}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.tight}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/h2/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h2/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              },
              "letterSpacing": {
                "id": "#tokensConfig/prose/h2/letterSpacing",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h2/letterSpacing/value",
                    "default": "{typography.letterSpacing.tight}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.letterSpacing.tight}"
                }
              },
              "iconSize": {
                "id": "#tokensConfig/prose/h2/iconSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h2/iconSize/value",
                    "default": "{typography.fontSize.2xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.2xl}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "3rem 0 2rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.4xl}"
              },
              "lineHeight": {
                "value": "{typography.lead.tight}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              },
              "letterSpacing": {
                "value": "{typography.letterSpacing.tight}"
              },
              "iconSize": {
                "value": "{typography.fontSize.2xl}"
              }
            }
          },
          "h3": {
            "id": "#tokensConfig/prose/h3",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/h3/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h3/margin/value",
                    "default": "3rem 0 2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "3rem 0 2rem"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/h3/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h3/fontSize/value",
                    "default": "{typography.fontSize.3xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.3xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/h3/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h3/lineHeight/value",
                    "default": "{typography.lead.snug}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.snug}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/h3/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h3/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              },
              "letterSpacing": {
                "id": "#tokensConfig/prose/h3/letterSpacing",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h3/letterSpacing/value",
                    "default": "{typography.letterSpacing.tight}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.letterSpacing.tight}"
                }
              },
              "iconSize": {
                "id": "#tokensConfig/prose/h3/iconSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h3/iconSize/value",
                    "default": "{typography.fontSize.xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.xl}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "3rem 0 2rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.3xl}"
              },
              "lineHeight": {
                "value": "{typography.lead.snug}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              },
              "letterSpacing": {
                "value": "{typography.letterSpacing.tight}"
              },
              "iconSize": {
                "value": "{typography.fontSize.xl}"
              }
            }
          },
          "h4": {
            "id": "#tokensConfig/prose/h4",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/h4/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h4/margin/value",
                    "default": "3rem 0 2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "3rem 0 2rem"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/h4/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h4/fontSize/value",
                    "default": "{typography.fontSize.2xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.2xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/h4/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h4/lineHeight/value",
                    "default": "{typography.lead.snug}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.snug}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/h4/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h4/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              },
              "letterSpacing": {
                "id": "#tokensConfig/prose/h4/letterSpacing",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h4/letterSpacing/value",
                    "default": "{typography.letterSpacing.tight}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.letterSpacing.tight}"
                }
              },
              "iconSize": {
                "id": "#tokensConfig/prose/h4/iconSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h4/iconSize/value",
                    "default": "{typography.fontSize.lg}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.lg}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "3rem 0 2rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.2xl}"
              },
              "lineHeight": {
                "value": "{typography.lead.snug}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              },
              "letterSpacing": {
                "value": "{typography.letterSpacing.tight}"
              },
              "iconSize": {
                "value": "{typography.fontSize.lg}"
              }
            }
          },
          "h5": {
            "id": "#tokensConfig/prose/h5",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/h5/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h5/margin/value",
                    "default": "3rem 0 2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "3rem 0 2rem"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/h5/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h5/fontSize/value",
                    "default": "{typography.fontSize.xl}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.xl}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/h5/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h5/lineHeight/value",
                    "default": "{typography.lead.snug}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.snug}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/h5/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h5/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              },
              "iconSize": {
                "id": "#tokensConfig/prose/h5/iconSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h5/iconSize/value",
                    "default": "{typography.fontSize.lg}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.lg}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "3rem 0 2rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.xl}"
              },
              "lineHeight": {
                "value": "{typography.lead.snug}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              },
              "iconSize": {
                "value": "{typography.fontSize.lg}"
              }
            }
          },
          "h6": {
            "id": "#tokensConfig/prose/h6",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/h6/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h6/margin/value",
                    "default": "3rem 0 2rem"
                  }
                },
                "type": "object",
                "default": {
                  "value": "3rem 0 2rem"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/h6/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h6/fontSize/value",
                    "default": "{typography.fontSize.lg}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.lg}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/h6/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h6/lineHeight/value",
                    "default": "{typography.lead.normal}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.normal}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/h6/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h6/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              },
              "iconSize": {
                "id": "#tokensConfig/prose/h6/iconSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/h6/iconSize/value",
                    "default": "{typography.fontSize.base}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.base}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "3rem 0 2rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.lg}"
              },
              "lineHeight": {
                "value": "{typography.lead.normal}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              },
              "iconSize": {
                "value": "{typography.fontSize.base}"
              }
            }
          },
          "strong": {
            "id": "#tokensConfig/prose/strong",
            "properties": {
              "fontWeight": {
                "id": "#tokensConfig/prose/strong/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/strong/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              }
            },
            "type": "object",
            "default": {
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              }
            }
          },
          "img": {
            "id": "#tokensConfig/prose/img",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/img/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/img/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              }
            }
          },
          "a": {
            "id": "#tokensConfig/prose/a",
            "properties": {
              "textDecoration": {
                "id": "#tokensConfig/prose/a/textDecoration",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/a/textDecoration/value",
                    "default": "none"
                  }
                },
                "type": "object",
                "default": {
                  "value": "none"
                }
              },
              "color": {
                "id": "#tokensConfig/prose/a/color",
                "properties": {
                  "static": {
                    "id": "#tokensConfig/prose/a/color/static",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/a/color/static/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/color/static/value/initial",
                            "default": "inherit"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/color/static/value/dark",
                            "default": "inherit"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "inherit",
                          "dark": "inherit"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "inherit",
                        "dark": "inherit"
                      }
                    }
                  },
                  "hover": {
                    "id": "#tokensConfig/prose/a/color/hover",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/a/color/hover/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/color/hover/value/initial",
                            "default": "{typography.color.primary.500}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/color/hover/value/dark",
                            "default": "{typography.color.primary.400}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.primary.500}",
                          "dark": "{typography.color.primary.400}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.primary.500}",
                        "dark": "{typography.color.primary.400}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "static": {
                    "value": {
                      "initial": "inherit",
                      "dark": "inherit"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "{typography.color.primary.500}",
                      "dark": "{typography.color.primary.400}"
                    }
                  }
                }
              },
              "border": {
                "id": "#tokensConfig/prose/a/border",
                "properties": {
                  "width": {
                    "id": "#tokensConfig/prose/a/border/width",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/a/border/width/value",
                        "default": "1px"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "1px"
                    }
                  },
                  "style": {
                    "id": "#tokensConfig/prose/a/border/style",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/prose/a/border/style/static",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/border/style/static/value",
                            "default": "dashed"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "dashed"
                        }
                      },
                      "hover": {
                        "id": "#tokensConfig/prose/a/border/style/hover",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/border/style/hover/value",
                            "default": "solid"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "solid"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {
                        "value": "dashed"
                      },
                      "hover": {
                        "value": "solid"
                      }
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/a/border/color",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/prose/a/border/color/static",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/a/border/color/static/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/border/color/static/value/initial",
                                "default": "currentColor"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/border/color/static/value/dark",
                                "default": "currentColor"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "currentColor",
                              "dark": "currentColor"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "currentColor",
                            "dark": "currentColor"
                          }
                        }
                      },
                      "hover": {
                        "id": "#tokensConfig/prose/a/border/color/hover",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/a/border/color/hover/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/border/color/hover/value/initial",
                                "default": "currentColor"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/border/color/hover/value/dark",
                                "default": "currentColor"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "currentColor",
                              "dark": "currentColor"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "currentColor",
                            "dark": "currentColor"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {
                        "value": {
                          "initial": "currentColor",
                          "dark": "currentColor"
                        }
                      },
                      "hover": {
                        "value": {
                          "initial": "currentColor",
                          "dark": "currentColor"
                        }
                      }
                    }
                  },
                  "distance": {
                    "id": "#tokensConfig/prose/a/border/distance",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/a/border/distance/value",
                        "default": "2px"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "2px"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "width": {
                    "value": "1px"
                  },
                  "style": {
                    "static": {
                      "value": "dashed"
                    },
                    "hover": {
                      "value": "solid"
                    }
                  },
                  "color": {
                    "static": {
                      "value": {
                        "initial": "currentColor",
                        "dark": "currentColor"
                      }
                    },
                    "hover": {
                      "value": {
                        "initial": "currentColor",
                        "dark": "currentColor"
                      }
                    }
                  },
                  "distance": {
                    "value": "2px"
                  }
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/a/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/a/fontWeight/value",
                    "default": "{typography.fontWeight.medium}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.medium}"
                }
              },
              "hasCode": {
                "id": "#tokensConfig/prose/a/hasCode",
                "properties": {
                  "borderBottom": {
                    "id": "#tokensConfig/prose/a/hasCode/borderBottom",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/a/hasCode/borderBottom/value",
                        "default": "none"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "none"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "borderBottom": {
                    "value": "none"
                  }
                }
              },
              "code": {
                "id": "#tokensConfig/prose/a/code",
                "properties": {
                  "border": {
                    "id": "#tokensConfig/prose/a/code/border",
                    "properties": {
                      "width": {
                        "id": "#tokensConfig/prose/a/code/border/width",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/code/border/width/value",
                            "default": "{prose.a.border.width}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "{prose.a.border.width}"
                        }
                      },
                      "style": {
                        "id": "#tokensConfig/prose/a/code/border/style",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/a/code/border/style/value",
                            "default": "{prose.a.border.style.static}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "{prose.a.border.style.static}"
                        }
                      },
                      "color": {
                        "id": "#tokensConfig/prose/a/code/border/color",
                        "properties": {
                          "static": {
                            "id": "#tokensConfig/prose/a/code/border/color/static",
                            "properties": {
                              "value": {
                                "id": "#tokensConfig/prose/a/code/border/color/static/value",
                                "properties": {
                                  "initial": {
                                    "type": "string",
                                    "id": "#tokensConfig/prose/a/code/border/color/static/value/initial",
                                    "default": "{typography.color.secondary.400}"
                                  },
                                  "dark": {
                                    "type": "string",
                                    "id": "#tokensConfig/prose/a/code/border/color/static/value/dark",
                                    "default": "{typography.color.secondary.600}"
                                  }
                                },
                                "type": "object",
                                "default": {
                                  "initial": "{typography.color.secondary.400}",
                                  "dark": "{typography.color.secondary.600}"
                                }
                              }
                            },
                            "type": "object",
                            "default": {
                              "value": {
                                "initial": "{typography.color.secondary.400}",
                                "dark": "{typography.color.secondary.600}"
                              }
                            }
                          },
                          "hover": {
                            "id": "#tokensConfig/prose/a/code/border/color/hover",
                            "properties": {
                              "value": {
                                "id": "#tokensConfig/prose/a/code/border/color/hover/value",
                                "properties": {
                                  "initial": {
                                    "type": "string",
                                    "id": "#tokensConfig/prose/a/code/border/color/hover/value/initial",
                                    "default": "{typography.color.primary.500}"
                                  },
                                  "dark": {
                                    "type": "string",
                                    "id": "#tokensConfig/prose/a/code/border/color/hover/value/dark",
                                    "default": "{typography.color.primary.600}"
                                  }
                                },
                                "type": "object",
                                "default": {
                                  "initial": "{typography.color.primary.500}",
                                  "dark": "{typography.color.primary.600}"
                                }
                              }
                            },
                            "type": "object",
                            "default": {
                              "value": {
                                "initial": "{typography.color.primary.500}",
                                "dark": "{typography.color.primary.600}"
                              }
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "static": {
                            "value": {
                              "initial": "{typography.color.secondary.400}",
                              "dark": "{typography.color.secondary.600}"
                            }
                          },
                          "hover": {
                            "value": {
                              "initial": "{typography.color.primary.500}",
                              "dark": "{typography.color.primary.600}"
                            }
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "width": {
                        "value": "{prose.a.border.width}"
                      },
                      "style": {
                        "value": "{prose.a.border.style.static}"
                      },
                      "color": {
                        "static": {
                          "value": {
                            "initial": "{typography.color.secondary.400}",
                            "dark": "{typography.color.secondary.600}"
                          }
                        },
                        "hover": {
                          "value": {
                            "initial": "{typography.color.primary.500}",
                            "dark": "{typography.color.primary.600}"
                          }
                        }
                      }
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/a/code/color",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/prose/a/code/color/static",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/a/code/color/static/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/code/color/static/value/initial",
                                "default": "currentColor"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/code/color/static/value/dark",
                                "default": "currentColor"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "currentColor",
                              "dark": "currentColor"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "currentColor",
                            "dark": "currentColor"
                          }
                        }
                      },
                      "hover": {
                        "id": "#tokensConfig/prose/a/code/color/hover",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/a/code/color/hover/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/code/color/hover/value/initial",
                                "default": "currentColor"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/code/color/hover/value/dark",
                                "default": "currentColor"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "currentColor",
                              "dark": "currentColor"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "currentColor",
                            "dark": "currentColor"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {
                        "value": {
                          "initial": "currentColor",
                          "dark": "currentColor"
                        }
                      },
                      "hover": {
                        "value": {
                          "initial": "currentColor",
                          "dark": "currentColor"
                        }
                      }
                    }
                  },
                  "background": {
                    "id": "#tokensConfig/prose/a/code/background",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/prose/a/code/background/static",
                        "type": "any",
                        "default": {}
                      },
                      "hover": {
                        "id": "#tokensConfig/prose/a/code/background/hover",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/a/code/background/hover/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/code/background/hover/value/initial",
                                "default": "{typography.color.primary.50}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/a/code/background/hover/value/dark",
                                "default": "{typography.color.primary.900}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{typography.color.primary.50}",
                              "dark": "{typography.color.primary.900}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{typography.color.primary.50}",
                            "dark": "{typography.color.primary.900}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {},
                      "hover": {
                        "value": {
                          "initial": "{typography.color.primary.50}",
                          "dark": "{typography.color.primary.900}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "border": {
                    "width": {
                      "value": "{prose.a.border.width}"
                    },
                    "style": {
                      "value": "{prose.a.border.style.static}"
                    },
                    "color": {
                      "static": {
                        "value": {
                          "initial": "{typography.color.secondary.400}",
                          "dark": "{typography.color.secondary.600}"
                        }
                      },
                      "hover": {
                        "value": {
                          "initial": "{typography.color.primary.500}",
                          "dark": "{typography.color.primary.600}"
                        }
                      }
                    }
                  },
                  "color": {
                    "static": {
                      "value": {
                        "initial": "currentColor",
                        "dark": "currentColor"
                      }
                    },
                    "hover": {
                      "value": {
                        "initial": "currentColor",
                        "dark": "currentColor"
                      }
                    }
                  },
                  "background": {
                    "static": {},
                    "hover": {
                      "value": {
                        "initial": "{typography.color.primary.50}",
                        "dark": "{typography.color.primary.900}"
                      }
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "textDecoration": {
                "value": "none"
              },
              "color": {
                "static": {
                  "value": {
                    "initial": "inherit",
                    "dark": "inherit"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "{typography.color.primary.500}",
                    "dark": "{typography.color.primary.400}"
                  }
                }
              },
              "border": {
                "width": {
                  "value": "1px"
                },
                "style": {
                  "static": {
                    "value": "dashed"
                  },
                  "hover": {
                    "value": "solid"
                  }
                },
                "color": {
                  "static": {
                    "value": {
                      "initial": "currentColor",
                      "dark": "currentColor"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "currentColor",
                      "dark": "currentColor"
                    }
                  }
                },
                "distance": {
                  "value": "2px"
                }
              },
              "fontWeight": {
                "value": "{typography.fontWeight.medium}"
              },
              "hasCode": {
                "borderBottom": {
                  "value": "none"
                }
              },
              "code": {
                "border": {
                  "width": {
                    "value": "{prose.a.border.width}"
                  },
                  "style": {
                    "value": "{prose.a.border.style.static}"
                  },
                  "color": {
                    "static": {
                      "value": {
                        "initial": "{typography.color.secondary.400}",
                        "dark": "{typography.color.secondary.600}"
                      }
                    },
                    "hover": {
                      "value": {
                        "initial": "{typography.color.primary.500}",
                        "dark": "{typography.color.primary.600}"
                      }
                    }
                  }
                },
                "color": {
                  "static": {
                    "value": {
                      "initial": "currentColor",
                      "dark": "currentColor"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "currentColor",
                      "dark": "currentColor"
                    }
                  }
                },
                "background": {
                  "static": {},
                  "hover": {
                    "value": {
                      "initial": "{typography.color.primary.50}",
                      "dark": "{typography.color.primary.900}"
                    }
                  }
                }
              }
            }
          },
          "blockquote": {
            "id": "#tokensConfig/prose/blockquote",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/blockquote/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/blockquote/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              },
              "paddingInlineStart": {
                "id": "#tokensConfig/prose/blockquote/paddingInlineStart",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/blockquote/paddingInlineStart/value",
                    "default": "24px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "24px"
                }
              },
              "quotes": {
                "id": "#tokensConfig/prose/blockquote/quotes",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/blockquote/quotes/value",
                    "default": "'201C' '201D' '2018' '2019'"
                  }
                },
                "type": "object",
                "default": {
                  "value": "'201C' '201D' '2018' '2019'"
                }
              },
              "color": {
                "id": "#tokensConfig/prose/blockquote/color",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/prose/blockquote/color/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/prose/blockquote/color/value/initial",
                        "default": "{typography.color.secondary.500}"
                      },
                      "dark": {
                        "type": "string",
                        "id": "#tokensConfig/prose/blockquote/color/value/dark",
                        "default": "{typography.color.secondary.400}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "{typography.color.secondary.500}",
                      "dark": "{typography.color.secondary.400}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "{typography.color.secondary.500}",
                    "dark": "{typography.color.secondary.400}"
                  }
                }
              },
              "border": {
                "id": "#tokensConfig/prose/blockquote/border",
                "properties": {
                  "width": {
                    "id": "#tokensConfig/prose/blockquote/border/width",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/blockquote/border/width/value",
                        "default": "4px"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "4px"
                    }
                  },
                  "style": {
                    "id": "#tokensConfig/prose/blockquote/border/style",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/blockquote/border/style/value",
                        "default": "solid"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "solid"
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/blockquote/border/color",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/blockquote/border/color/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/blockquote/border/color/value/initial",
                            "default": "{typography.color.secondary.200}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/blockquote/border/color/value/dark",
                            "default": "{typography.color.secondary.700}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.200}",
                          "dark": "{typography.color.secondary.700}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.200}",
                        "dark": "{typography.color.secondary.700}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "width": {
                    "value": "4px"
                  },
                  "style": {
                    "value": "solid"
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.200}",
                      "dark": "{typography.color.secondary.700}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "paddingInlineStart": {
                "value": "24px"
              },
              "quotes": {
                "value": "'201C' '201D' '2018' '2019'"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.500}",
                  "dark": "{typography.color.secondary.400}"
                }
              },
              "border": {
                "width": {
                  "value": "4px"
                },
                "style": {
                  "value": "solid"
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.200}",
                    "dark": "{typography.color.secondary.700}"
                  }
                }
              }
            }
          },
          "ul": {
            "id": "#tokensConfig/prose/ul",
            "properties": {
              "listStyleType": {
                "id": "#tokensConfig/prose/ul/listStyleType",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/ul/listStyleType/value",
                    "default": "disc"
                  }
                },
                "type": "object",
                "default": {
                  "value": "disc"
                }
              },
              "margin": {
                "id": "#tokensConfig/prose/ul/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/ul/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              },
              "paddingInlineStart": {
                "id": "#tokensConfig/prose/ul/paddingInlineStart",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/ul/paddingInlineStart/value",
                    "default": "21px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "21px"
                }
              },
              "li": {
                "id": "#tokensConfig/prose/ul/li",
                "properties": {
                  "markerColor": {
                    "id": "#tokensConfig/prose/ul/li/markerColor",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/ul/li/markerColor/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/ul/li/markerColor/value/initial",
                            "default": "currentColor"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/ul/li/markerColor/value/dark",
                            "default": "currentColor"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "currentColor",
                          "dark": "currentColor"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "currentColor",
                        "dark": "currentColor"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "markerColor": {
                    "value": {
                      "initial": "currentColor",
                      "dark": "currentColor"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "listStyleType": {
                "value": "disc"
              },
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "paddingInlineStart": {
                "value": "21px"
              },
              "li": {
                "markerColor": {
                  "value": {
                    "initial": "currentColor",
                    "dark": "currentColor"
                  }
                }
              }
            }
          },
          "ol": {
            "id": "#tokensConfig/prose/ol",
            "properties": {
              "listStyleType": {
                "id": "#tokensConfig/prose/ol/listStyleType",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/ol/listStyleType/value",
                    "default": "decimal"
                  }
                },
                "type": "object",
                "default": {
                  "value": "decimal"
                }
              },
              "margin": {
                "id": "#tokensConfig/prose/ol/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/ol/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              },
              "paddingInlineStart": {
                "id": "#tokensConfig/prose/ol/paddingInlineStart",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/ol/paddingInlineStart/value",
                    "default": "21px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "21px"
                }
              },
              "li": {
                "id": "#tokensConfig/prose/ol/li",
                "properties": {
                  "markerColor": {
                    "id": "#tokensConfig/prose/ol/li/markerColor",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/ol/li/markerColor/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/ol/li/markerColor/value/initial",
                            "default": "currentColor"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/ol/li/markerColor/value/dark",
                            "default": "currentColor"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "currentColor",
                          "dark": "currentColor"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "currentColor",
                        "dark": "currentColor"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "markerColor": {
                    "value": {
                      "initial": "currentColor",
                      "dark": "currentColor"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "listStyleType": {
                "value": "decimal"
              },
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "paddingInlineStart": {
                "value": "21px"
              },
              "li": {
                "markerColor": {
                  "value": {
                    "initial": "currentColor",
                    "dark": "currentColor"
                  }
                }
              }
            }
          },
          "li": {
            "id": "#tokensConfig/prose/li",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/li/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/li/margin/value",
                    "default": "{typography.verticalMargin.sm} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.sm} 0"
                }
              },
              "listStylePosition": {
                "id": "#tokensConfig/prose/li/listStylePosition",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/li/listStylePosition/value",
                    "default": "outside"
                  }
                },
                "type": "object",
                "default": {
                  "value": "outside"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "{typography.verticalMargin.sm} 0"
              },
              "listStylePosition": {
                "value": "outside"
              }
            }
          },
          "hr": {
            "id": "#tokensConfig/prose/hr",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/hr/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/hr/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              },
              "style": {
                "id": "#tokensConfig/prose/hr/style",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/hr/style/value",
                    "default": "solid"
                  }
                },
                "type": "object",
                "default": {
                  "value": "solid"
                }
              },
              "width": {
                "id": "#tokensConfig/prose/hr/width",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/hr/width/value",
                    "default": "1px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "1px"
                }
              },
              "color": {
                "id": "#tokensConfig/prose/hr/color",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/prose/hr/color/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/prose/hr/color/value/initial",
                        "default": "{typography.color.secondary.200}"
                      },
                      "dark": {
                        "type": "string",
                        "id": "#tokensConfig/prose/hr/color/value/dark",
                        "default": "{typography.color.secondary.800}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "{typography.color.secondary.200}",
                      "dark": "{typography.color.secondary.800}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "{typography.color.secondary.200}",
                    "dark": "{typography.color.secondary.800}"
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "style": {
                "value": "solid"
              },
              "width": {
                "value": "1px"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.200}",
                  "dark": "{typography.color.secondary.800}"
                }
              }
            }
          },
          "table": {
            "id": "#tokensConfig/prose/table",
            "properties": {
              "margin": {
                "id": "#tokensConfig/prose/table/margin",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/table/margin/value",
                    "default": "{typography.verticalMargin.base} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.verticalMargin.base} 0"
                }
              },
              "textAlign": {
                "id": "#tokensConfig/prose/table/textAlign",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/table/textAlign/value",
                    "default": "start"
                  }
                },
                "type": "object",
                "default": {
                  "value": "start"
                }
              },
              "fontSize": {
                "id": "#tokensConfig/prose/table/fontSize",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/table/fontSize/value",
                    "default": "{typography.fontSize.sm}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontSize.sm}"
                }
              },
              "lineHeight": {
                "id": "#tokensConfig/prose/table/lineHeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/table/lineHeight/value",
                    "default": "{typography.lead.6}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.lead.6}"
                }
              }
            },
            "type": "object",
            "default": {
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "textAlign": {
                "value": "start"
              },
              "fontSize": {
                "value": "{typography.fontSize.sm}"
              },
              "lineHeight": {
                "value": "{typography.lead.6}"
              }
            }
          },
          "thead": {
            "id": "#tokensConfig/prose/thead",
            "properties": {
              "border": {
                "id": "#tokensConfig/prose/thead/border",
                "properties": {
                  "width": {
                    "id": "#tokensConfig/prose/thead/border/width",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/thead/border/width/value",
                        "default": "0px"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "0px"
                    }
                  },
                  "style": {
                    "id": "#tokensConfig/prose/thead/border/style",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/thead/border/style/value",
                        "default": "solid"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "solid"
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/thead/border/color",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/thead/border/color/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/thead/border/color/value/initial",
                            "default": "{typography.color.secondary.300}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/thead/border/color/value/dark",
                            "default": "{typography.color.secondary.600}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.300}",
                          "dark": "{typography.color.secondary.600}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.300}",
                        "dark": "{typography.color.secondary.600}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "width": {
                    "value": "0px"
                  },
                  "style": {
                    "value": "solid"
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.300}",
                      "dark": "{typography.color.secondary.600}"
                    }
                  }
                }
              },
              "borderBottom": {
                "id": "#tokensConfig/prose/thead/borderBottom",
                "properties": {
                  "width": {
                    "id": "#tokensConfig/prose/thead/borderBottom/width",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/thead/borderBottom/width/value",
                        "default": "1px"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "1px"
                    }
                  },
                  "style": {
                    "id": "#tokensConfig/prose/thead/borderBottom/style",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/thead/borderBottom/style/value",
                        "default": "solid"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "solid"
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/thead/borderBottom/color",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/thead/borderBottom/color/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/thead/borderBottom/color/value/initial",
                            "default": "{typography.color.secondary.200}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/thead/borderBottom/color/value/dark",
                            "default": "{typography.color.secondary.800}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.200}",
                          "dark": "{typography.color.secondary.800}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.200}",
                        "dark": "{typography.color.secondary.800}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "width": {
                    "value": "1px"
                  },
                  "style": {
                    "value": "solid"
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.200}",
                      "dark": "{typography.color.secondary.800}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "border": {
                "width": {
                  "value": "0px"
                },
                "style": {
                  "value": "solid"
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.300}",
                    "dark": "{typography.color.secondary.600}"
                  }
                }
              },
              "borderBottom": {
                "width": {
                  "value": "1px"
                },
                "style": {
                  "value": "solid"
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.200}",
                    "dark": "{typography.color.secondary.800}"
                  }
                }
              }
            }
          },
          "th": {
            "id": "#tokensConfig/prose/th",
            "properties": {
              "color": {
                "id": "#tokensConfig/prose/th/color",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/prose/th/color/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/prose/th/color/value/initial",
                        "default": "{typography.color.secondary.600}"
                      },
                      "dark": {
                        "type": "string",
                        "id": "#tokensConfig/prose/th/color/value/dark",
                        "default": "{typography.color.secondary.400}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "{typography.color.secondary.600}",
                      "dark": "{typography.color.secondary.400}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "{typography.color.secondary.600}",
                    "dark": "{typography.color.secondary.400}"
                  }
                }
              },
              "padding": {
                "id": "#tokensConfig/prose/th/padding",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/th/padding/value",
                    "default": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
                }
              },
              "fontWeight": {
                "id": "#tokensConfig/prose/th/fontWeight",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/th/fontWeight/value",
                    "default": "{typography.fontWeight.semibold}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{typography.fontWeight.semibold}"
                }
              },
              "textAlign": {
                "id": "#tokensConfig/prose/th/textAlign",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/prose/th/textAlign/value",
                    "default": "inherit"
                  }
                },
                "type": "object",
                "default": {
                  "value": "inherit"
                }
              }
            },
            "type": "object",
            "default": {
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.600}",
                  "dark": "{typography.color.secondary.400}"
                }
              },
              "padding": {
                "value": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.semibold}"
              },
              "textAlign": {
                "value": "inherit"
              }
            }
          },
          "tbody": {
            "id": "#tokensConfig/prose/tbody",
            "properties": {
              "tr": {
                "id": "#tokensConfig/prose/tbody/tr",
                "properties": {
                  "borderBottom": {
                    "id": "#tokensConfig/prose/tbody/tr/borderBottom",
                    "properties": {
                      "width": {
                        "id": "#tokensConfig/prose/tbody/tr/borderBottom/width",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/tbody/tr/borderBottom/width/value",
                            "default": "1px"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "1px"
                        }
                      },
                      "style": {
                        "id": "#tokensConfig/prose/tbody/tr/borderBottom/style",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/tbody/tr/borderBottom/style/value",
                            "default": "dashed"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "dashed"
                        }
                      },
                      "color": {
                        "id": "#tokensConfig/prose/tbody/tr/borderBottom/color",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/tbody/tr/borderBottom/color/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/tbody/tr/borderBottom/color/value/initial",
                                "default": "{typography.color.secondary.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/tbody/tr/borderBottom/color/value/dark",
                                "default": "{typography.color.secondary.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{typography.color.secondary.200}",
                              "dark": "{typography.color.secondary.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{typography.color.secondary.200}",
                            "dark": "{typography.color.secondary.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "width": {
                        "value": "1px"
                      },
                      "style": {
                        "value": "dashed"
                      },
                      "color": {
                        "value": {
                          "initial": "{typography.color.secondary.200}",
                          "dark": "{typography.color.secondary.800}"
                        }
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "borderBottom": {
                    "width": {
                      "value": "1px"
                    },
                    "style": {
                      "value": "dashed"
                    },
                    "color": {
                      "value": {
                        "initial": "{typography.color.secondary.200}",
                        "dark": "{typography.color.secondary.800}"
                      }
                    }
                  }
                }
              },
              "td": {
                "id": "#tokensConfig/prose/tbody/td",
                "properties": {
                  "padding": {
                    "id": "#tokensConfig/prose/tbody/td/padding",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/tbody/td/padding/value",
                        "default": "{typography.verticalMargin.sm}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{typography.verticalMargin.sm}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "padding": {
                    "value": "{typography.verticalMargin.sm}"
                  }
                }
              },
              "code": {
                "id": "#tokensConfig/prose/tbody/code",
                "properties": {
                  "inline": {
                    "id": "#tokensConfig/prose/tbody/code/inline",
                    "properties": {
                      "fontSize": {
                        "id": "#tokensConfig/prose/tbody/code/inline/fontSize",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/tbody/code/inline/fontSize/value",
                            "default": "{typography.fontSize.sm}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "{typography.fontSize.sm}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "fontSize": {
                        "value": "{typography.fontSize.sm}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "inline": {
                    "fontSize": {
                      "value": "{typography.fontSize.sm}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "tr": {
                "borderBottom": {
                  "width": {
                    "value": "1px"
                  },
                  "style": {
                    "value": "dashed"
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.200}",
                      "dark": "{typography.color.secondary.800}"
                    }
                  }
                }
              },
              "td": {
                "padding": {
                  "value": "{typography.verticalMargin.sm}"
                }
              },
              "code": {
                "inline": {
                  "fontSize": {
                    "value": "{typography.fontSize.sm}"
                  }
                }
              }
            }
          },
          "code": {
            "id": "#tokensConfig/prose/code",
            "properties": {
              "block": {
                "id": "#tokensConfig/prose/code/block",
                "properties": {
                  "fontSize": {
                    "id": "#tokensConfig/prose/code/block/fontSize",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/code/block/fontSize/value",
                        "default": "{typography.fontSize.sm}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{typography.fontSize.sm}"
                    }
                  },
                  "margin": {
                    "id": "#tokensConfig/prose/code/block/margin",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/code/block/margin/value",
                        "default": "{typography.verticalMargin.base} 0"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{typography.verticalMargin.base} 0"
                    }
                  },
                  "border": {
                    "id": "#tokensConfig/prose/code/block/border",
                    "properties": {
                      "width": {
                        "id": "#tokensConfig/prose/code/block/border/width",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/border/width/value",
                            "default": "1px"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "1px"
                        }
                      },
                      "style": {
                        "id": "#tokensConfig/prose/code/block/border/style",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/border/style/value",
                            "default": "solid"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "solid"
                        }
                      },
                      "color": {
                        "id": "#tokensConfig/prose/code/block/border/color",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/prose/code/block/border/color/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/prose/code/block/border/color/value/initial",
                                "default": "{typography.color.secondary.200}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/prose/code/block/border/color/value/dark",
                                "default": "{typography.color.secondary.800}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{typography.color.secondary.200}",
                              "dark": "{typography.color.secondary.800}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{typography.color.secondary.200}",
                            "dark": "{typography.color.secondary.800}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "width": {
                        "value": "1px"
                      },
                      "style": {
                        "value": "solid"
                      },
                      "color": {
                        "value": {
                          "initial": "{typography.color.secondary.200}",
                          "dark": "{typography.color.secondary.800}"
                        }
                      }
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/code/block/color",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/code/block/color/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/color/value/initial",
                            "default": "{typography.color.secondary.700}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/color/value/dark",
                            "default": "{typography.color.secondary.200}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.700}",
                          "dark": "{typography.color.secondary.200}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.700}",
                        "dark": "{typography.color.secondary.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/prose/code/block/backgroundColor",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/code/block/backgroundColor/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/backgroundColor/value/initial",
                            "default": "{typography.color.secondary.100}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/backgroundColor/value/dark",
                            "default": "{typography.color.secondary.900}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.100}",
                          "dark": "{typography.color.secondary.900}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.100}",
                        "dark": "{typography.color.secondary.900}"
                      }
                    }
                  },
                  "backdropFilter": {
                    "id": "#tokensConfig/prose/code/block/backdropFilter",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/code/block/backdropFilter/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/backdropFilter/value/initial",
                            "default": "contrast(1)"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/backdropFilter/value/dark",
                            "default": "contrast(1)"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "contrast(1)",
                          "dark": "contrast(1)"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "contrast(1)",
                        "dark": "contrast(1)"
                      }
                    }
                  },
                  "pre": {
                    "id": "#tokensConfig/prose/code/block/pre",
                    "properties": {
                      "padding": {
                        "id": "#tokensConfig/prose/code/block/pre/padding",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/block/pre/padding/value",
                            "default": "{typography.verticalMargin.sm}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "{typography.verticalMargin.sm}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "padding": {
                        "value": "{typography.verticalMargin.sm}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "fontSize": {
                    "value": "{typography.fontSize.sm}"
                  },
                  "margin": {
                    "value": "{typography.verticalMargin.base} 0"
                  },
                  "border": {
                    "width": {
                      "value": "1px"
                    },
                    "style": {
                      "value": "solid"
                    },
                    "color": {
                      "value": {
                        "initial": "{typography.color.secondary.200}",
                        "dark": "{typography.color.secondary.800}"
                      }
                    }
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.700}",
                      "dark": "{typography.color.secondary.200}"
                    }
                  },
                  "backgroundColor": {
                    "value": {
                      "initial": "{typography.color.secondary.100}",
                      "dark": "{typography.color.secondary.900}"
                    }
                  },
                  "backdropFilter": {
                    "value": {
                      "initial": "contrast(1)",
                      "dark": "contrast(1)"
                    }
                  },
                  "pre": {
                    "padding": {
                      "value": "{typography.verticalMargin.sm}"
                    }
                  }
                }
              },
              "inline": {
                "id": "#tokensConfig/prose/code/inline",
                "properties": {
                  "borderRadius": {
                    "id": "#tokensConfig/prose/code/inline/borderRadius",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/code/inline/borderRadius/value",
                        "default": "{radii.xs}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{radii.xs}"
                    }
                  },
                  "padding": {
                    "id": "#tokensConfig/prose/code/inline/padding",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/code/inline/padding/value",
                        "default": "0.2rem 0.375rem 0.2rem 0.375rem"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "0.2rem 0.375rem 0.2rem 0.375rem"
                    }
                  },
                  "fontSize": {
                    "id": "#tokensConfig/prose/code/inline/fontSize",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/code/inline/fontSize/value",
                        "default": "{typography.fontSize.sm}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{typography.fontSize.sm}"
                    }
                  },
                  "fontWeight": {
                    "id": "#tokensConfig/prose/code/inline/fontWeight",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/prose/code/inline/fontWeight/value",
                        "default": "{typography.fontWeight.normal}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{typography.fontWeight.normal}"
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/prose/code/inline/color",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/code/inline/color/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/inline/color/value/initial",
                            "default": "{typography.color.secondary.700}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/inline/color/value/dark",
                            "default": "{typography.color.secondary.200}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.700}",
                          "dark": "{typography.color.secondary.200}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.700}",
                        "dark": "{typography.color.secondary.200}"
                      }
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/prose/code/inline/backgroundColor",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/prose/code/inline/backgroundColor/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/inline/backgroundColor/value/initial",
                            "default": "{typography.color.secondary.100}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/prose/code/inline/backgroundColor/value/dark",
                            "default": "{typography.color.secondary.800}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{typography.color.secondary.100}",
                          "dark": "{typography.color.secondary.800}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{typography.color.secondary.100}",
                        "dark": "{typography.color.secondary.800}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "borderRadius": {
                    "value": "{radii.xs}"
                  },
                  "padding": {
                    "value": "0.2rem 0.375rem 0.2rem 0.375rem"
                  },
                  "fontSize": {
                    "value": "{typography.fontSize.sm}"
                  },
                  "fontWeight": {
                    "value": "{typography.fontWeight.normal}"
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.700}",
                      "dark": "{typography.color.secondary.200}"
                    }
                  },
                  "backgroundColor": {
                    "value": {
                      "initial": "{typography.color.secondary.100}",
                      "dark": "{typography.color.secondary.800}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "block": {
                "fontSize": {
                  "value": "{typography.fontSize.sm}"
                },
                "margin": {
                  "value": "{typography.verticalMargin.base} 0"
                },
                "border": {
                  "width": {
                    "value": "1px"
                  },
                  "style": {
                    "value": "solid"
                  },
                  "color": {
                    "value": {
                      "initial": "{typography.color.secondary.200}",
                      "dark": "{typography.color.secondary.800}"
                    }
                  }
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.700}",
                    "dark": "{typography.color.secondary.200}"
                  }
                },
                "backgroundColor": {
                  "value": {
                    "initial": "{typography.color.secondary.100}",
                    "dark": "{typography.color.secondary.900}"
                  }
                },
                "backdropFilter": {
                  "value": {
                    "initial": "contrast(1)",
                    "dark": "contrast(1)"
                  }
                },
                "pre": {
                  "padding": {
                    "value": "{typography.verticalMargin.sm}"
                  }
                }
              },
              "inline": {
                "borderRadius": {
                  "value": "{radii.xs}"
                },
                "padding": {
                  "value": "0.2rem 0.375rem 0.2rem 0.375rem"
                },
                "fontSize": {
                  "value": "{typography.fontSize.sm}"
                },
                "fontWeight": {
                  "value": "{typography.fontWeight.normal}"
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.700}",
                    "dark": "{typography.color.secondary.200}"
                  }
                },
                "backgroundColor": {
                  "value": {
                    "initial": "{typography.color.secondary.100}",
                    "dark": "{typography.color.secondary.800}"
                  }
                }
              }
            }
          }
        },
        "type": "object",
        "default": {
          "p": {
            "fontSize": {
              "value": "{typography.fontSize.base}"
            },
            "lineHeight": {
              "value": "{typography.lead.normal}"
            },
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "br": {
              "margin": {
                "value": "{typography.verticalMargin.base} 0 0 0"
              }
            }
          },
          "h1": {
            "margin": {
              "value": "0 0 2rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.5xl}"
            },
            "lineHeight": {
              "value": "{typography.lead.tight}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.bold}"
            },
            "letterSpacing": {
              "value": "{typography.letterSpacing.tight}"
            },
            "iconSize": {
              "value": "{typography.fontSize.3xl}"
            }
          },
          "h2": {
            "margin": {
              "value": "3rem 0 2rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.4xl}"
            },
            "lineHeight": {
              "value": "{typography.lead.tight}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            },
            "letterSpacing": {
              "value": "{typography.letterSpacing.tight}"
            },
            "iconSize": {
              "value": "{typography.fontSize.2xl}"
            }
          },
          "h3": {
            "margin": {
              "value": "3rem 0 2rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.3xl}"
            },
            "lineHeight": {
              "value": "{typography.lead.snug}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            },
            "letterSpacing": {
              "value": "{typography.letterSpacing.tight}"
            },
            "iconSize": {
              "value": "{typography.fontSize.xl}"
            }
          },
          "h4": {
            "margin": {
              "value": "3rem 0 2rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.2xl}"
            },
            "lineHeight": {
              "value": "{typography.lead.snug}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            },
            "letterSpacing": {
              "value": "{typography.letterSpacing.tight}"
            },
            "iconSize": {
              "value": "{typography.fontSize.lg}"
            }
          },
          "h5": {
            "margin": {
              "value": "3rem 0 2rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.xl}"
            },
            "lineHeight": {
              "value": "{typography.lead.snug}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            },
            "iconSize": {
              "value": "{typography.fontSize.lg}"
            }
          },
          "h6": {
            "margin": {
              "value": "3rem 0 2rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.lg}"
            },
            "lineHeight": {
              "value": "{typography.lead.normal}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            },
            "iconSize": {
              "value": "{typography.fontSize.base}"
            }
          },
          "strong": {
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            }
          },
          "img": {
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            }
          },
          "a": {
            "textDecoration": {
              "value": "none"
            },
            "color": {
              "static": {
                "value": {
                  "initial": "inherit",
                  "dark": "inherit"
                }
              },
              "hover": {
                "value": {
                  "initial": "{typography.color.primary.500}",
                  "dark": "{typography.color.primary.400}"
                }
              }
            },
            "border": {
              "width": {
                "value": "1px"
              },
              "style": {
                "static": {
                  "value": "dashed"
                },
                "hover": {
                  "value": "solid"
                }
              },
              "color": {
                "static": {
                  "value": {
                    "initial": "currentColor",
                    "dark": "currentColor"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "currentColor",
                    "dark": "currentColor"
                  }
                }
              },
              "distance": {
                "value": "2px"
              }
            },
            "fontWeight": {
              "value": "{typography.fontWeight.medium}"
            },
            "hasCode": {
              "borderBottom": {
                "value": "none"
              }
            },
            "code": {
              "border": {
                "width": {
                  "value": "{prose.a.border.width}"
                },
                "style": {
                  "value": "{prose.a.border.style.static}"
                },
                "color": {
                  "static": {
                    "value": {
                      "initial": "{typography.color.secondary.400}",
                      "dark": "{typography.color.secondary.600}"
                    }
                  },
                  "hover": {
                    "value": {
                      "initial": "{typography.color.primary.500}",
                      "dark": "{typography.color.primary.600}"
                    }
                  }
                }
              },
              "color": {
                "static": {
                  "value": {
                    "initial": "currentColor",
                    "dark": "currentColor"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "currentColor",
                    "dark": "currentColor"
                  }
                }
              },
              "background": {
                "static": {},
                "hover": {
                  "value": {
                    "initial": "{typography.color.primary.50}",
                    "dark": "{typography.color.primary.900}"
                  }
                }
              }
            }
          },
          "blockquote": {
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "paddingInlineStart": {
              "value": "24px"
            },
            "quotes": {
              "value": "'201C' '201D' '2018' '2019'"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.500}",
                "dark": "{typography.color.secondary.400}"
              }
            },
            "border": {
              "width": {
                "value": "4px"
              },
              "style": {
                "value": "solid"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.200}",
                  "dark": "{typography.color.secondary.700}"
                }
              }
            }
          },
          "ul": {
            "listStyleType": {
              "value": "disc"
            },
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "paddingInlineStart": {
              "value": "21px"
            },
            "li": {
              "markerColor": {
                "value": {
                  "initial": "currentColor",
                  "dark": "currentColor"
                }
              }
            }
          },
          "ol": {
            "listStyleType": {
              "value": "decimal"
            },
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "paddingInlineStart": {
              "value": "21px"
            },
            "li": {
              "markerColor": {
                "value": {
                  "initial": "currentColor",
                  "dark": "currentColor"
                }
              }
            }
          },
          "li": {
            "margin": {
              "value": "{typography.verticalMargin.sm} 0"
            },
            "listStylePosition": {
              "value": "outside"
            }
          },
          "hr": {
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "style": {
              "value": "solid"
            },
            "width": {
              "value": "1px"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.200}",
                "dark": "{typography.color.secondary.800}"
              }
            }
          },
          "table": {
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "textAlign": {
              "value": "start"
            },
            "fontSize": {
              "value": "{typography.fontSize.sm}"
            },
            "lineHeight": {
              "value": "{typography.lead.6}"
            }
          },
          "thead": {
            "border": {
              "width": {
                "value": "0px"
              },
              "style": {
                "value": "solid"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.300}",
                  "dark": "{typography.color.secondary.600}"
                }
              }
            },
            "borderBottom": {
              "width": {
                "value": "1px"
              },
              "style": {
                "value": "solid"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.200}",
                  "dark": "{typography.color.secondary.800}"
                }
              }
            }
          },
          "th": {
            "color": {
              "value": {
                "initial": "{typography.color.secondary.600}",
                "dark": "{typography.color.secondary.400}"
              }
            },
            "padding": {
              "value": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.semibold}"
            },
            "textAlign": {
              "value": "inherit"
            }
          },
          "tbody": {
            "tr": {
              "borderBottom": {
                "width": {
                  "value": "1px"
                },
                "style": {
                  "value": "dashed"
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.200}",
                    "dark": "{typography.color.secondary.800}"
                  }
                }
              }
            },
            "td": {
              "padding": {
                "value": "{typography.verticalMargin.sm}"
              }
            },
            "code": {
              "inline": {
                "fontSize": {
                  "value": "{typography.fontSize.sm}"
                }
              }
            }
          },
          "code": {
            "block": {
              "fontSize": {
                "value": "{typography.fontSize.sm}"
              },
              "margin": {
                "value": "{typography.verticalMargin.base} 0"
              },
              "border": {
                "width": {
                  "value": "1px"
                },
                "style": {
                  "value": "solid"
                },
                "color": {
                  "value": {
                    "initial": "{typography.color.secondary.200}",
                    "dark": "{typography.color.secondary.800}"
                  }
                }
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.700}",
                  "dark": "{typography.color.secondary.200}"
                }
              },
              "backgroundColor": {
                "value": {
                  "initial": "{typography.color.secondary.100}",
                  "dark": "{typography.color.secondary.900}"
                }
              },
              "backdropFilter": {
                "value": {
                  "initial": "contrast(1)",
                  "dark": "contrast(1)"
                }
              },
              "pre": {
                "padding": {
                  "value": "{typography.verticalMargin.sm}"
                }
              }
            },
            "inline": {
              "borderRadius": {
                "value": "{radii.xs}"
              },
              "padding": {
                "value": "0.2rem 0.375rem 0.2rem 0.375rem"
              },
              "fontSize": {
                "value": "{typography.fontSize.sm}"
              },
              "fontWeight": {
                "value": "{typography.fontWeight.normal}"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.700}",
                  "dark": "{typography.color.secondary.200}"
                }
              },
              "backgroundColor": {
                "value": {
                  "initial": "{typography.color.secondary.100}",
                  "dark": "{typography.color.secondary.800}"
                }
              }
            }
          }
        }
      },
      "docus": {
        "title": "All the configurable tokens from Docus.",
        "tags": [
          "@studioIcon material-symbols:docs"
        ],
        "id": "#tokensConfig/docus",
        "properties": {
          "body": {
            "id": "#tokensConfig/docus/body",
            "properties": {
              "backgroundColor": {
                "id": "#tokensConfig/docus/body/backgroundColor",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/docus/body/backgroundColor/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/docus/body/backgroundColor/value/initial",
                        "default": "{color.white}"
                      },
                      "dark": {
                        "type": "string",
                        "id": "#tokensConfig/docus/body/backgroundColor/value/dark",
                        "default": "{color.black}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "{color.white}",
                      "dark": "{color.black}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "{color.white}",
                    "dark": "{color.black}"
                  }
                }
              },
              "color": {
                "id": "#tokensConfig/docus/body/color",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/docus/body/color/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/docus/body/color/value/initial",
                        "default": "{color.gray.800}"
                      },
                      "dark": {
                        "type": "string",
                        "id": "#tokensConfig/docus/body/color/value/dark",
                        "default": "{color.gray.200}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "{color.gray.800}",
                      "dark": "{color.gray.200}"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "{color.gray.800}",
                    "dark": "{color.gray.200}"
                  }
                }
              },
              "fontFamily": {
                "id": "#tokensConfig/docus/body/fontFamily",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/body/fontFamily/value",
                    "default": "{font.sans}"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{font.sans}"
                }
              }
            },
            "type": "object",
            "default": {
              "backgroundColor": {
                "value": {
                  "initial": "{color.white}",
                  "dark": "{color.black}"
                }
              },
              "color": {
                "value": {
                  "initial": "{color.gray.800}",
                  "dark": "{color.gray.200}"
                }
              },
              "fontFamily": {
                "value": "{font.sans}"
              }
            }
          },
          "header": {
            "id": "#tokensConfig/docus/header",
            "properties": {
              "height": {
                "id": "#tokensConfig/docus/header/height",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/header/height/value",
                    "default": "64px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "64px"
                }
              },
              "logo": {
                "id": "#tokensConfig/docus/header/logo",
                "properties": {
                  "height": {
                    "id": "#tokensConfig/docus/header/logo/height",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/docus/header/logo/height/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/docus/header/logo/height/value/initial",
                            "default": "{space.6}"
                          },
                          "sm": {
                            "type": "string",
                            "id": "#tokensConfig/docus/header/logo/height/value/sm",
                            "default": "{space.7}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{space.6}",
                          "sm": "{space.7}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{space.6}",
                        "sm": "{space.7}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "height": {
                    "value": {
                      "initial": "{space.6}",
                      "sm": "{space.7}"
                    }
                  }
                }
              },
              "title": {
                "id": "#tokensConfig/docus/header/title",
                "properties": {
                  "fontSize": {
                    "id": "#tokensConfig/docus/header/title/fontSize",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/docus/header/title/fontSize/value",
                        "default": "{fontSize.2xl}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{fontSize.2xl}"
                    }
                  },
                  "fontWeight": {
                    "id": "#tokensConfig/docus/header/title/fontWeight",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/docus/header/title/fontWeight/value",
                        "default": "{fontWeight.bold}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{fontWeight.bold}"
                    }
                  },
                  "color": {
                    "id": "#tokensConfig/docus/header/title/color",
                    "properties": {
                      "static": {
                        "id": "#tokensConfig/docus/header/title/color/static",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/docus/header/title/color/static/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/docus/header/title/color/static/value/initial",
                                "default": "{color.gray.900}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/docus/header/title/color/static/value/dark",
                                "default": "{color.gray.100}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.gray.900}",
                              "dark": "{color.gray.100}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.gray.900}",
                            "dark": "{color.gray.100}"
                          }
                        }
                      },
                      "hover": {
                        "id": "#tokensConfig/docus/header/title/color/hover",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/docus/header/title/color/hover/value",
                            "default": "{color.primary.500}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "{color.primary.500}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "static": {
                        "value": {
                          "initial": "{color.gray.900}",
                          "dark": "{color.gray.100}"
                        }
                      },
                      "hover": {
                        "value": "{color.primary.500}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "fontSize": {
                    "value": "{fontSize.2xl}"
                  },
                  "fontWeight": {
                    "value": "{fontWeight.bold}"
                  },
                  "color": {
                    "static": {
                      "value": {
                        "initial": "{color.gray.900}",
                        "dark": "{color.gray.100}"
                      }
                    },
                    "hover": {
                      "value": "{color.primary.500}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "height": {
                "value": "64px"
              },
              "logo": {
                "height": {
                  "value": {
                    "initial": "{space.6}",
                    "sm": "{space.7}"
                  }
                }
              },
              "title": {
                "fontSize": {
                  "value": "{fontSize.2xl}"
                },
                "fontWeight": {
                  "value": "{fontWeight.bold}"
                },
                "color": {
                  "static": {
                    "value": {
                      "initial": "{color.gray.900}",
                      "dark": "{color.gray.100}"
                    }
                  },
                  "hover": {
                    "value": "{color.primary.500}"
                  }
                }
              }
            }
          },
          "footer": {
            "id": "#tokensConfig/docus/footer",
            "properties": {
              "height": {
                "id": "#tokensConfig/docus/footer/height",
                "properties": {
                  "value": {
                    "id": "#tokensConfig/docus/footer/height/value",
                    "properties": {
                      "initial": {
                        "type": "string",
                        "id": "#tokensConfig/docus/footer/height/value/initial",
                        "default": "145px"
                      },
                      "sm": {
                        "type": "string",
                        "id": "#tokensConfig/docus/footer/height/value/sm",
                        "default": "100px"
                      }
                    },
                    "type": "object",
                    "default": {
                      "initial": "145px",
                      "sm": "100px"
                    }
                  }
                },
                "type": "object",
                "default": {
                  "value": {
                    "initial": "145px",
                    "sm": "100px"
                  }
                }
              },
              "padding": {
                "id": "#tokensConfig/docus/footer/padding",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/footer/padding/value",
                    "default": "{space.4} 0"
                  }
                },
                "type": "object",
                "default": {
                  "value": "{space.4} 0"
                }
              }
            },
            "type": "object",
            "default": {
              "height": {
                "value": {
                  "initial": "145px",
                  "sm": "100px"
                }
              },
              "padding": {
                "value": "{space.4} 0"
              }
            }
          },
          "readableLine": {
            "id": "#tokensConfig/docus/readableLine",
            "properties": {
              "value": {
                "type": "string",
                "id": "#tokensConfig/docus/readableLine/value",
                "default": "78ch"
              }
            },
            "type": "object",
            "default": {
              "value": "78ch"
            }
          },
          "loadingBar": {
            "id": "#tokensConfig/docus/loadingBar",
            "properties": {
              "height": {
                "id": "#tokensConfig/docus/loadingBar/height",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/loadingBar/height/value",
                    "default": "3px"
                  }
                },
                "type": "object",
                "default": {
                  "value": "3px"
                }
              },
              "gradientColorStop1": {
                "id": "#tokensConfig/docus/loadingBar/gradientColorStop1",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/loadingBar/gradientColorStop1/value",
                    "default": "#00dc82"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#00dc82"
                }
              },
              "gradientColorStop2": {
                "id": "#tokensConfig/docus/loadingBar/gradientColorStop2",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/loadingBar/gradientColorStop2/value",
                    "default": "#34cdfe"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#34cdfe"
                }
              },
              "gradientColorStop3": {
                "id": "#tokensConfig/docus/loadingBar/gradientColorStop3",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/loadingBar/gradientColorStop3/value",
                    "default": "#0047e1"
                  }
                },
                "type": "object",
                "default": {
                  "value": "#0047e1"
                }
              }
            },
            "type": "object",
            "default": {
              "height": {
                "value": "3px"
              },
              "gradientColorStop1": {
                "value": "#00dc82"
              },
              "gradientColorStop2": {
                "value": "#34cdfe"
              },
              "gradientColorStop3": {
                "value": "#0047e1"
              }
            }
          },
          "search": {
            "id": "#tokensConfig/docus/search",
            "properties": {
              "backdropFilter": {
                "id": "#tokensConfig/docus/search/backdropFilter",
                "properties": {
                  "value": {
                    "type": "string",
                    "id": "#tokensConfig/docus/search/backdropFilter/value",
                    "default": "blur(24px)"
                  }
                },
                "type": "object",
                "default": {
                  "value": "blur(24px)"
                }
              },
              "input": {
                "id": "#tokensConfig/docus/search/input",
                "properties": {
                  "borderRadius": {
                    "id": "#tokensConfig/docus/search/input/borderRadius",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/docus/search/input/borderRadius/value",
                        "default": "{radii.2xs}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{radii.2xs}"
                    }
                  },
                  "borderWidth": {
                    "id": "#tokensConfig/docus/search/input/borderWidth",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/docus/search/input/borderWidth/value",
                        "default": "1px"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "1px"
                    }
                  },
                  "borderStyle": {
                    "id": "#tokensConfig/docus/search/input/borderStyle",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/docus/search/input/borderStyle/value",
                        "default": "solid"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "solid"
                    }
                  },
                  "borderColor": {
                    "id": "#tokensConfig/docus/search/input/borderColor",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/docus/search/input/borderColor/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/docus/search/input/borderColor/value/initial",
                            "default": "{color.gray.200}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/docus/search/input/borderColor/value/dark",
                            "default": "transparent"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{color.gray.200}",
                          "dark": "transparent"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{color.gray.200}",
                        "dark": "transparent"
                      }
                    }
                  },
                  "fontSize": {
                    "id": "#tokensConfig/docus/search/input/fontSize",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/docus/search/input/fontSize/value",
                        "default": "{fontSize.sm}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{fontSize.sm}"
                    }
                  },
                  "gap": {
                    "id": "#tokensConfig/docus/search/input/gap",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/docus/search/input/gap/value",
                        "default": "{space.2}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{space.2}"
                    }
                  },
                  "padding": {
                    "id": "#tokensConfig/docus/search/input/padding",
                    "properties": {
                      "value": {
                        "type": "string",
                        "id": "#tokensConfig/docus/search/input/padding/value",
                        "default": "{space.2} {space.4}"
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": "{space.2} {space.4}"
                    }
                  },
                  "backgroundColor": {
                    "id": "#tokensConfig/docus/search/input/backgroundColor",
                    "properties": {
                      "value": {
                        "id": "#tokensConfig/docus/search/input/backgroundColor/value",
                        "properties": {
                          "initial": {
                            "type": "string",
                            "id": "#tokensConfig/docus/search/input/backgroundColor/value/initial",
                            "default": "{color.gray.200}"
                          },
                          "dark": {
                            "type": "string",
                            "id": "#tokensConfig/docus/search/input/backgroundColor/value/dark",
                            "default": "{color.gray.800}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "initial": "{color.gray.200}",
                          "dark": "{color.gray.800}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "value": {
                        "initial": "{color.gray.200}",
                        "dark": "{color.gray.800}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "borderRadius": {
                    "value": "{radii.2xs}"
                  },
                  "borderWidth": {
                    "value": "1px"
                  },
                  "borderStyle": {
                    "value": "solid"
                  },
                  "borderColor": {
                    "value": {
                      "initial": "{color.gray.200}",
                      "dark": "transparent"
                    }
                  },
                  "fontSize": {
                    "value": "{fontSize.sm}"
                  },
                  "gap": {
                    "value": "{space.2}"
                  },
                  "padding": {
                    "value": "{space.2} {space.4}"
                  },
                  "backgroundColor": {
                    "value": {
                      "initial": "{color.gray.200}",
                      "dark": "{color.gray.800}"
                    }
                  }
                }
              },
              "results": {
                "id": "#tokensConfig/docus/search/results",
                "properties": {
                  "window": {
                    "id": "#tokensConfig/docus/search/results/window",
                    "properties": {
                      "marginX": {
                        "id": "#tokensConfig/docus/search/results/window/marginX",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/docus/search/results/window/marginX/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/docus/search/results/window/marginX/value/initial",
                                "default": "0"
                              },
                              "sm": {
                                "type": "string",
                                "id": "#tokensConfig/docus/search/results/window/marginX/value/sm",
                                "default": "{space.4}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "0",
                              "sm": "{space.4}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "0",
                            "sm": "{space.4}"
                          }
                        }
                      },
                      "borderRadius": {
                        "id": "#tokensConfig/docus/search/results/window/borderRadius",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/docus/search/results/window/borderRadius/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/docus/search/results/window/borderRadius/value/initial",
                                "default": "none"
                              },
                              "sm": {
                                "type": "string",
                                "id": "#tokensConfig/docus/search/results/window/borderRadius/value/sm",
                                "default": "{radii.xs}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "none",
                              "sm": "{radii.xs}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "none",
                            "sm": "{radii.xs}"
                          }
                        }
                      },
                      "marginTop": {
                        "id": "#tokensConfig/docus/search/results/window/marginTop",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/docus/search/results/window/marginTop/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/docus/search/results/window/marginTop/value/initial",
                                "default": "0"
                              },
                              "sm": {
                                "type": "string",
                                "id": "#tokensConfig/docus/search/results/window/marginTop/value/sm",
                                "default": "20vh"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "0",
                              "sm": "20vh"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "0",
                            "sm": "20vh"
                          }
                        }
                      },
                      "maxWidth": {
                        "id": "#tokensConfig/docus/search/results/window/maxWidth",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/docus/search/results/window/maxWidth/value",
                            "default": "640px"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "640px"
                        }
                      },
                      "maxHeight": {
                        "id": "#tokensConfig/docus/search/results/window/maxHeight",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/docus/search/results/window/maxHeight/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/docus/search/results/window/maxHeight/value/initial",
                                "default": "100%"
                              },
                              "sm": {
                                "type": "string",
                                "id": "#tokensConfig/docus/search/results/window/maxHeight/value/sm",
                                "default": "320px"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "100%",
                              "sm": "320px"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "100%",
                            "sm": "320px"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "marginX": {
                        "value": {
                          "initial": "0",
                          "sm": "{space.4}"
                        }
                      },
                      "borderRadius": {
                        "value": {
                          "initial": "none",
                          "sm": "{radii.xs}"
                        }
                      },
                      "marginTop": {
                        "value": {
                          "initial": "0",
                          "sm": "20vh"
                        }
                      },
                      "maxWidth": {
                        "value": "640px"
                      },
                      "maxHeight": {
                        "value": {
                          "initial": "100%",
                          "sm": "320px"
                        }
                      }
                    }
                  },
                  "selected": {
                    "id": "#tokensConfig/docus/search/results/selected",
                    "properties": {
                      "backgroundColor": {
                        "id": "#tokensConfig/docus/search/results/selected/backgroundColor",
                        "properties": {
                          "value": {
                            "id": "#tokensConfig/docus/search/results/selected/backgroundColor/value",
                            "properties": {
                              "initial": {
                                "type": "string",
                                "id": "#tokensConfig/docus/search/results/selected/backgroundColor/value/initial",
                                "default": "{color.gray.300}"
                              },
                              "dark": {
                                "type": "string",
                                "id": "#tokensConfig/docus/search/results/selected/backgroundColor/value/dark",
                                "default": "{color.gray.700}"
                              }
                            },
                            "type": "object",
                            "default": {
                              "initial": "{color.gray.300}",
                              "dark": "{color.gray.700}"
                            }
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": {
                            "initial": "{color.gray.300}",
                            "dark": "{color.gray.700}"
                          }
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "backgroundColor": {
                        "value": {
                          "initial": "{color.gray.300}",
                          "dark": "{color.gray.700}"
                        }
                      }
                    }
                  },
                  "highlight": {
                    "id": "#tokensConfig/docus/search/results/highlight",
                    "properties": {
                      "color": {
                        "id": "#tokensConfig/docus/search/results/highlight/color",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/docus/search/results/highlight/color/value",
                            "default": "white"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "white"
                        }
                      },
                      "backgroundColor": {
                        "id": "#tokensConfig/docus/search/results/highlight/backgroundColor",
                        "properties": {
                          "value": {
                            "type": "string",
                            "id": "#tokensConfig/docus/search/results/highlight/backgroundColor/value",
                            "default": "{color.primary.500}"
                          }
                        },
                        "type": "object",
                        "default": {
                          "value": "{color.primary.500}"
                        }
                      }
                    },
                    "type": "object",
                    "default": {
                      "color": {
                        "value": "white"
                      },
                      "backgroundColor": {
                        "value": "{color.primary.500}"
                      }
                    }
                  }
                },
                "type": "object",
                "default": {
                  "window": {
                    "marginX": {
                      "value": {
                        "initial": "0",
                        "sm": "{space.4}"
                      }
                    },
                    "borderRadius": {
                      "value": {
                        "initial": "none",
                        "sm": "{radii.xs}"
                      }
                    },
                    "marginTop": {
                      "value": {
                        "initial": "0",
                        "sm": "20vh"
                      }
                    },
                    "maxWidth": {
                      "value": "640px"
                    },
                    "maxHeight": {
                      "value": {
                        "initial": "100%",
                        "sm": "320px"
                      }
                    }
                  },
                  "selected": {
                    "backgroundColor": {
                      "value": {
                        "initial": "{color.gray.300}",
                        "dark": "{color.gray.700}"
                      }
                    }
                  },
                  "highlight": {
                    "color": {
                      "value": "white"
                    },
                    "backgroundColor": {
                      "value": "{color.primary.500}"
                    }
                  }
                }
              }
            },
            "type": "object",
            "default": {
              "backdropFilter": {
                "value": "blur(24px)"
              },
              "input": {
                "borderRadius": {
                  "value": "{radii.2xs}"
                },
                "borderWidth": {
                  "value": "1px"
                },
                "borderStyle": {
                  "value": "solid"
                },
                "borderColor": {
                  "value": {
                    "initial": "{color.gray.200}",
                    "dark": "transparent"
                  }
                },
                "fontSize": {
                  "value": "{fontSize.sm}"
                },
                "gap": {
                  "value": "{space.2}"
                },
                "padding": {
                  "value": "{space.2} {space.4}"
                },
                "backgroundColor": {
                  "value": {
                    "initial": "{color.gray.200}",
                    "dark": "{color.gray.800}"
                  }
                }
              },
              "results": {
                "window": {
                  "marginX": {
                    "value": {
                      "initial": "0",
                      "sm": "{space.4}"
                    }
                  },
                  "borderRadius": {
                    "value": {
                      "initial": "none",
                      "sm": "{radii.xs}"
                    }
                  },
                  "marginTop": {
                    "value": {
                      "initial": "0",
                      "sm": "20vh"
                    }
                  },
                  "maxWidth": {
                    "value": "640px"
                  },
                  "maxHeight": {
                    "value": {
                      "initial": "100%",
                      "sm": "320px"
                    }
                  }
                },
                "selected": {
                  "backgroundColor": {
                    "value": {
                      "initial": "{color.gray.300}",
                      "dark": "{color.gray.700}"
                    }
                  }
                },
                "highlight": {
                  "color": {
                    "value": "white"
                  },
                  "backgroundColor": {
                    "value": "{color.primary.500}"
                  }
                }
              }
            }
          }
        },
        "type": "object",
        "default": {
          "body": {
            "backgroundColor": {
              "value": {
                "initial": "{color.white}",
                "dark": "{color.black}"
              }
            },
            "color": {
              "value": {
                "initial": "{color.gray.800}",
                "dark": "{color.gray.200}"
              }
            },
            "fontFamily": {
              "value": "{font.sans}"
            }
          },
          "header": {
            "height": {
              "value": "64px"
            },
            "logo": {
              "height": {
                "value": {
                  "initial": "{space.6}",
                  "sm": "{space.7}"
                }
              }
            },
            "title": {
              "fontSize": {
                "value": "{fontSize.2xl}"
              },
              "fontWeight": {
                "value": "{fontWeight.bold}"
              },
              "color": {
                "static": {
                  "value": {
                    "initial": "{color.gray.900}",
                    "dark": "{color.gray.100}"
                  }
                },
                "hover": {
                  "value": "{color.primary.500}"
                }
              }
            }
          },
          "footer": {
            "height": {
              "value": {
                "initial": "145px",
                "sm": "100px"
              }
            },
            "padding": {
              "value": "{space.4} 0"
            }
          },
          "readableLine": {
            "value": "78ch"
          },
          "loadingBar": {
            "height": {
              "value": "3px"
            },
            "gradientColorStop1": {
              "value": "#00dc82"
            },
            "gradientColorStop2": {
              "value": "#34cdfe"
            },
            "gradientColorStop3": {
              "value": "#0047e1"
            }
          },
          "search": {
            "backdropFilter": {
              "value": "blur(24px)"
            },
            "input": {
              "borderRadius": {
                "value": "{radii.2xs}"
              },
              "borderWidth": {
                "value": "1px"
              },
              "borderStyle": {
                "value": "solid"
              },
              "borderColor": {
                "value": {
                  "initial": "{color.gray.200}",
                  "dark": "transparent"
                }
              },
              "fontSize": {
                "value": "{fontSize.sm}"
              },
              "gap": {
                "value": "{space.2}"
              },
              "padding": {
                "value": "{space.2} {space.4}"
              },
              "backgroundColor": {
                "value": {
                  "initial": "{color.gray.200}",
                  "dark": "{color.gray.800}"
                }
              }
            },
            "results": {
              "window": {
                "marginX": {
                  "value": {
                    "initial": "0",
                    "sm": "{space.4}"
                  }
                },
                "borderRadius": {
                  "value": {
                    "initial": "none",
                    "sm": "{radii.xs}"
                  }
                },
                "marginTop": {
                  "value": {
                    "initial": "0",
                    "sm": "20vh"
                  }
                },
                "maxWidth": {
                  "value": "640px"
                },
                "maxHeight": {
                  "value": {
                    "initial": "100%",
                    "sm": "320px"
                  }
                }
              },
              "selected": {
                "backgroundColor": {
                  "value": {
                    "initial": "{color.gray.300}",
                    "dark": "{color.gray.700}"
                  }
                }
              },
              "highlight": {
                "color": {
                  "value": "white"
                },
                "backgroundColor": {
                  "value": "{color.primary.500}"
                }
              }
            }
          }
        }
      }
    },
    "type": "object",
    "default": {
      "media": {
        "xs": {
          "value": "(min-width: 475px)"
        },
        "sm": {
          "value": "(min-width: 640px)"
        },
        "md": {
          "value": "(min-width: 768px)"
        },
        "lg": {
          "value": "(min-width: 1024px)"
        },
        "xl": {
          "value": "(min-width: 1280px)"
        },
        "2xl": {
          "value": "(min-width: 1536px)"
        },
        "rm": {
          "value": "(prefers-reduced-motion: reduce)"
        },
        "landscape": {
          "value": "only screen and (orientation: landscape)"
        },
        "portrait": {
          "value": "only screen and (orientation: portrait)"
        }
      },
      "color": {
        "white": {
          "value": "#ffffff"
        },
        "black": {
          "value": "#0B0A0A"
        },
        "gray": {
          "50": {
            "value": "#FBFBFB"
          },
          "100": {
            "value": "#F6F5F4"
          },
          "200": {
            "value": "#ECEBE8"
          },
          "300": {
            "value": "#DBD9D3"
          },
          "400": {
            "value": "#ADA9A4"
          },
          "500": {
            "value": "#97948F"
          },
          "600": {
            "value": "#67635D"
          },
          "700": {
            "value": "#36332E"
          },
          "800": {
            "value": "#201E1B"
          },
          "900": {
            "value": "#121110"
          }
        },
        "green": {
          "50": {
            "value": "#ECFFF7"
          },
          "100": {
            "value": "#DEFFF1"
          },
          "200": {
            "value": "#C3FFE6"
          },
          "300": {
            "value": "#86FBCB"
          },
          "400": {
            "value": "#3CEEA5"
          },
          "500": {
            "value": "#0DD885"
          },
          "600": {
            "value": "#00B467"
          },
          "700": {
            "value": "#006037"
          },
          "800": {
            "value": "#002817"
          },
          "900": {
            "value": "#00190F"
          }
        },
        "yellow": {
          "50": {
            "value": "#FFFCEE"
          },
          "100": {
            "value": "#FFF6D3"
          },
          "200": {
            "value": "#FFF0B1"
          },
          "300": {
            "value": "#FFE372"
          },
          "400": {
            "value": "#FFDC4E"
          },
          "500": {
            "value": "#FBCA05"
          },
          "600": {
            "value": "#CBA408"
          },
          "700": {
            "value": "#614E02"
          },
          "800": {
            "value": "#292100"
          },
          "900": {
            "value": "#1B1500"
          }
        },
        "orange": {
          "50": {
            "value": "#ffe9d9"
          },
          "100": {
            "value": "#ffd3b3"
          },
          "200": {
            "value": "#ffbd8d"
          },
          "300": {
            "value": "#ffa666"
          },
          "400": {
            "value": "#ff9040"
          },
          "500": {
            "value": "#ff7a1a"
          },
          "600": {
            "value": "#e15e00"
          },
          "700": {
            "value": "#a94700"
          },
          "800": {
            "value": "#702f00"
          },
          "900": {
            "value": "#381800"
          }
        },
        "red": {
          "50": {
            "value": "#FFF9F8"
          },
          "100": {
            "value": "#FFF3F0"
          },
          "200": {
            "value": "#FFDED7"
          },
          "300": {
            "value": "#FFA692"
          },
          "400": {
            "value": "#FF7353"
          },
          "500": {
            "value": "#FF3B10"
          },
          "600": {
            "value": "#BB2402"
          },
          "700": {
            "value": "#701704"
          },
          "800": {
            "value": "#340A01"
          },
          "900": {
            "value": "#1C0301"
          }
        },
        "pear": {
          "50": {
            "value": "#f7f8dc"
          },
          "100": {
            "value": "#eff0ba"
          },
          "200": {
            "value": "#e8e997"
          },
          "300": {
            "value": "#e0e274"
          },
          "400": {
            "value": "#d8da52"
          },
          "500": {
            "value": "#d0d32f"
          },
          "600": {
            "value": "#a8aa24"
          },
          "700": {
            "value": "#7e801b"
          },
          "800": {
            "value": "#545512"
          },
          "900": {
            "value": "#2a2b09"
          }
        },
        "teal": {
          "50": {
            "value": "#d7faf8"
          },
          "100": {
            "value": "#aff4f0"
          },
          "200": {
            "value": "#87efe9"
          },
          "300": {
            "value": "#5fe9e1"
          },
          "400": {
            "value": "#36e4da"
          },
          "500": {
            "value": "#1cd1c6"
          },
          "600": {
            "value": "#16a79e"
          },
          "700": {
            "value": "#117d77"
          },
          "800": {
            "value": "#0b544f"
          },
          "900": {
            "value": "#062a28"
          }
        },
        "lightblue": {
          "50": {
            "value": "#d9f8ff"
          },
          "100": {
            "value": "#b3f1ff"
          },
          "200": {
            "value": "#8deaff"
          },
          "300": {
            "value": "#66e4ff"
          },
          "400": {
            "value": "#40ddff"
          },
          "500": {
            "value": "#1ad6ff"
          },
          "600": {
            "value": "#00b9e1"
          },
          "700": {
            "value": "#008aa9"
          },
          "800": {
            "value": "#005c70"
          },
          "900": {
            "value": "#002e38"
          }
        },
        "blue": {
          "50": {
            "value": "#F2FAFF"
          },
          "100": {
            "value": "#DFF3FF"
          },
          "200": {
            "value": "#C6EAFF"
          },
          "300": {
            "value": "#A1DDFF"
          },
          "400": {
            "value": "#64C7FF"
          },
          "500": {
            "value": "#1AADFF"
          },
          "600": {
            "value": "#0069A6"
          },
          "700": {
            "value": "#014267"
          },
          "800": {
            "value": "#002235"
          },
          "900": {
            "value": "#00131D"
          }
        },
        "indigoblue": {
          "50": {
            "value": "#d9e5ff"
          },
          "100": {
            "value": "#b3cbff"
          },
          "200": {
            "value": "#8db0ff"
          },
          "300": {
            "value": "#6696ff"
          },
          "400": {
            "value": "#407cff"
          },
          "500": {
            "value": "#1a62ff"
          },
          "600": {
            "value": "#0047e1"
          },
          "700": {
            "value": "#0035a9"
          },
          "800": {
            "value": "#002370"
          },
          "900": {
            "value": "#001238"
          }
        },
        "royalblue": {
          "50": {
            "value": "#dfdbfb"
          },
          "100": {
            "value": "#c0b7f7"
          },
          "200": {
            "value": "#a093f3"
          },
          "300": {
            "value": "#806ff0"
          },
          "400": {
            "value": "#614bec"
          },
          "500": {
            "value": "#4127e8"
          },
          "600": {
            "value": "#2c15c4"
          },
          "700": {
            "value": "#211093"
          },
          "800": {
            "value": "#160a62"
          },
          "900": {
            "value": "#0b0531"
          }
        },
        "purple": {
          "50": {
            "value": "#ead9ff"
          },
          "100": {
            "value": "#d5b3ff"
          },
          "200": {
            "value": "#c08dff"
          },
          "300": {
            "value": "#ab66ff"
          },
          "400": {
            "value": "#9640ff"
          },
          "500": {
            "value": "#811aff"
          },
          "600": {
            "value": "#6500e1"
          },
          "700": {
            "value": "#4c00a9"
          },
          "800": {
            "value": "#330070"
          },
          "900": {
            "value": "#190038"
          }
        },
        "pink": {
          "50": {
            "value": "#ffd9f2"
          },
          "100": {
            "value": "#ffb3e5"
          },
          "200": {
            "value": "#ff8dd8"
          },
          "300": {
            "value": "#ff66cc"
          },
          "400": {
            "value": "#ff40bf"
          },
          "500": {
            "value": "#ff1ab2"
          },
          "600": {
            "value": "#e10095"
          },
          "700": {
            "value": "#a90070"
          },
          "800": {
            "value": "#70004b"
          },
          "900": {
            "value": "#380025"
          }
        },
        "ruby": {
          "50": {
            "value": "#ffd9e4"
          },
          "100": {
            "value": "#ffb3c9"
          },
          "200": {
            "value": "#ff8dae"
          },
          "300": {
            "value": "#ff6694"
          },
          "400": {
            "value": "#ff4079"
          },
          "500": {
            "value": "#ff1a5e"
          },
          "600": {
            "value": "#e10043"
          },
          "700": {
            "value": "#a90032"
          },
          "800": {
            "value": "#700021"
          },
          "900": {
            "value": "#380011"
          }
        },
        "primary": {
          "50": {
            "value": "#F1FCFF"
          },
          "100": {
            "value": "#DCF7FF"
          },
          "200": {
            "value": "#C5F2FF"
          },
          "300": {
            "value": "#82E3FF"
          },
          "400": {
            "value": "#55E1FF"
          },
          "500": {
            "value": "#1AD6FF"
          },
          "600": {
            "value": "#09A0C1"
          },
          "700": {
            "value": "#024757"
          },
          "800": {
            "value": "#00232B"
          },
          "900": {
            "value": "#001A1F"
          }
        },
        "secondary": {
          "50": {
            "value": "{color.gray.50}"
          },
          "100": {
            "value": "{color.gray.100}"
          },
          "200": {
            "value": "{color.gray.200}"
          },
          "300": {
            "value": "{color.gray.300}"
          },
          "400": {
            "value": "{color.gray.400}"
          },
          "500": {
            "value": "{color.gray.500}"
          },
          "600": {
            "value": "{color.gray.600}"
          },
          "700": {
            "value": "{color.gray.700}"
          },
          "800": {
            "value": "{color.gray.800}"
          },
          "900": {
            "value": "{color.gray.900}"
          }
        },
        "shadow": {
          "value": {
            "initial": "{color.gray.400}",
            "dark": "{color.gray.800}"
          }
        }
      },
      "width": {
        "screen": {
          "value": "100vw"
        }
      },
      "height": {
        "screen": {
          "value": "100vh"
        }
      },
      "shadow": {
        "xs": {
          "value": "0px 1px 2px 0px {color.shadow}"
        },
        "sm": {
          "value": "0px 1px 3px 0px {color.shadow}, 0px 1px 2px -1px {color.shadow}"
        },
        "md": {
          "value": "0px 4px 6px -1px {color.shadow}, 0px 2px 4px -2px {color.shadow}"
        },
        "lg": {
          "value": "0px 10px 15px -3px {color.shadow}, 0px 4px 6px -4px {color.shadow}"
        },
        "xl": {
          "value": "0px 20px 25px -5px {color.shadow}, 0px 8px 10px -6px {color.shadow}"
        },
        "2xl": {
          "value": "0px 25px 50px -12px {color.shadow}"
        },
        "none": {
          "value": "0px 0px 0px 0px transparent"
        }
      },
      "radii": {
        "none": {
          "value": "0px"
        },
        "2xs": {
          "value": "0.125rem"
        },
        "xs": {
          "value": "0.25rem"
        },
        "sm": {
          "value": "0.375rem"
        },
        "md": {
          "value": "0.5rem"
        },
        "lg": {
          "value": "0.75rem"
        },
        "xl": {
          "value": "1rem"
        },
        "2xl": {
          "value": "1.5rem"
        },
        "3xl": {
          "value": "1.75rem"
        },
        "full": {
          "value": "9999px"
        }
      },
      "size": {
        "0": {
          "value": "0px"
        },
        "2": {
          "value": "2px"
        },
        "4": {
          "value": "4px"
        },
        "6": {
          "value": "6px"
        },
        "8": {
          "value": "8px"
        },
        "12": {
          "value": "12px"
        },
        "16": {
          "value": "16px"
        },
        "20": {
          "value": "20px"
        },
        "24": {
          "value": "24px"
        },
        "32": {
          "value": "32px"
        },
        "40": {
          "value": "40px"
        },
        "48": {
          "value": "48px"
        },
        "56": {
          "value": "56px"
        },
        "64": {
          "value": "64px"
        },
        "80": {
          "value": "80px"
        },
        "104": {
          "value": "104px"
        },
        "200": {
          "value": "200px"
        },
        "xs": {
          "value": "20rem"
        },
        "sm": {
          "value": "24rem"
        },
        "md": {
          "value": "28rem"
        },
        "lg": {
          "value": "32rem"
        },
        "xl": {
          "value": "36rem"
        },
        "2xl": {
          "value": "42rem"
        },
        "3xl": {
          "value": "48rem"
        },
        "4xl": {
          "value": "56rem"
        },
        "5xl": {
          "value": "64rem"
        },
        "6xl": {
          "value": "72rem"
        },
        "7xl": {
          "value": "80rem"
        },
        "full": {
          "value": "100%"
        }
      },
      "space": {
        "0": {
          "value": "0px"
        },
        "1": {
          "value": "0.25rem"
        },
        "2": {
          "value": "0.5rem"
        },
        "3": {
          "value": "0.75rem"
        },
        "4": {
          "value": "1rem"
        },
        "5": {
          "value": "1.25rem"
        },
        "6": {
          "value": "1.5rem"
        },
        "7": {
          "value": "1.75rem"
        },
        "8": {
          "value": "2rem"
        },
        "9": {
          "value": "2.25rem"
        },
        "10": {
          "value": "2.5rem"
        },
        "11": {
          "value": "2.75rem"
        },
        "12": {
          "value": "3rem"
        },
        "14": {
          "value": "3.5rem"
        },
        "16": {
          "value": "4rem"
        },
        "20": {
          "value": "5rem"
        },
        "24": {
          "value": "6rem"
        },
        "28": {
          "value": "7rem"
        },
        "32": {
          "value": "8rem"
        },
        "36": {
          "value": "9rem"
        },
        "40": {
          "value": "10rem"
        },
        "44": {
          "value": "11rem"
        },
        "48": {
          "value": "12rem"
        },
        "52": {
          "value": "13rem"
        },
        "56": {
          "value": "14rem"
        },
        "60": {
          "value": "15rem"
        },
        "64": {
          "value": "16rem"
        },
        "72": {
          "value": "18rem"
        },
        "80": {
          "value": "20rem"
        },
        "96": {
          "value": "24rem"
        },
        "128": {
          "value": "32rem"
        },
        "px": {
          "value": "1px"
        },
        "rem": {
          "125": {
            "value": "0.125rem"
          },
          "375": {
            "value": "0.375rem"
          },
          "625": {
            "value": "0.625rem"
          },
          "875": {
            "value": "0.875rem"
          }
        }
      },
      "borderWidth": {
        "noBorder": {
          "value": "0"
        },
        "sm": {
          "value": "1px"
        },
        "md": {
          "value": "2px"
        },
        "lg": {
          "value": "3px"
        }
      },
      "opacity": {
        "noOpacity": {
          "value": "0"
        },
        "bright": {
          "value": "0.1"
        },
        "light": {
          "value": "0.15"
        },
        "soft": {
          "value": "0.3"
        },
        "medium": {
          "value": "0.5"
        },
        "high": {
          "value": "0.8"
        },
        "total": {
          "value": "1"
        }
      },
      "font": {
        "sans": {
          "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
        },
        "serif": {
          "value": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
        },
        "mono": {
          "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
        }
      },
      "fontWeight": {
        "thin": {
          "value": "100"
        },
        "extralight": {
          "value": "200"
        },
        "light": {
          "value": "300"
        },
        "normal": {
          "value": "400"
        },
        "medium": {
          "value": "500"
        },
        "semibold": {
          "value": "600"
        },
        "bold": {
          "value": "700"
        },
        "extrabold": {
          "value": "800"
        },
        "black": {
          "value": "900"
        }
      },
      "fontSize": {
        "xs": {
          "value": "0.75rem"
        },
        "sm": {
          "value": "0.875rem"
        },
        "base": {
          "value": "1rem"
        },
        "lg": {
          "value": "1.125rem"
        },
        "xl": {
          "value": "1.25rem"
        },
        "2xl": {
          "value": "1.5rem"
        },
        "3xl": {
          "value": "1.875rem"
        },
        "4xl": {
          "value": "2.25rem"
        },
        "5xl": {
          "value": "3rem"
        },
        "6xl": {
          "value": "3.75rem"
        },
        "7xl": {
          "value": "4.5rem"
        },
        "8xl": {
          "value": "6rem"
        },
        "9xl": {
          "value": "8rem"
        }
      },
      "letterSpacing": {
        "tighter": {
          "value": "-0.05em"
        },
        "tight": {
          "value": "-0.025em"
        },
        "normal": {
          "value": "0em"
        },
        "wide": {
          "value": "0.025em"
        },
        "wider": {
          "value": "0.05em"
        },
        "widest": {
          "value": "0.1em"
        }
      },
      "lead": {
        "1": {
          "value": ".025rem"
        },
        "2": {
          "value": ".5rem"
        },
        "3": {
          "value": ".75rem"
        },
        "4": {
          "value": "1rem"
        },
        "5": {
          "value": "1.25rem"
        },
        "6": {
          "value": "1.5rem"
        },
        "7": {
          "value": "1.75rem"
        },
        "8": {
          "value": "2rem"
        },
        "9": {
          "value": "2.25rem"
        },
        "10": {
          "value": "2.5rem"
        },
        "none": {
          "value": "1"
        },
        "tight": {
          "value": "1.25"
        },
        "snug": {
          "value": "1.375"
        },
        "normal": {
          "value": "1.5"
        },
        "relaxed": {
          "value": "1.625"
        },
        "loose": {
          "value": "2"
        }
      },
      "text": {
        "xs": {
          "fontSize": {
            "value": "{fontSize.xs}"
          },
          "lineHeight": {
            "value": "{lead.4}"
          }
        },
        "sm": {
          "fontSize": {
            "value": "{fontSize.sm}"
          },
          "lineHeight": {
            "value": "{lead.5}"
          }
        },
        "base": {
          "fontSize": {
            "value": "{fontSize.base}"
          },
          "lineHeight": {
            "value": "{lead.6}"
          }
        },
        "lg": {
          "fontSize": {
            "value": "{fontSize.lg}"
          },
          "lineHeight": {
            "value": "{lead.7}"
          }
        },
        "xl": {
          "fontSize": {
            "value": "{fontSize.xl}"
          },
          "lineHeight": {
            "value": "{lead.7}"
          }
        },
        "2xl": {
          "fontSize": {
            "value": "{fontSize.2xl}"
          },
          "lineHeight": {
            "value": "{lead.8}"
          }
        },
        "3xl": {
          "fontSize": {
            "value": "{fontSize.3xl}"
          },
          "lineHeight": {
            "value": "{lead.9}"
          }
        },
        "4xl": {
          "fontSize": {
            "value": "{fontSize.4xl}"
          },
          "lineHeight": {
            "value": "{lead.10}"
          }
        },
        "5xl": {
          "fontSize": {
            "value": "{fontSize.5xl}"
          },
          "lineHeight": {
            "value": "{lead.none}"
          }
        },
        "6xl": {
          "fontSize": {
            "value": "{fontSize.6xl}"
          },
          "lineHeight": {
            "value": "{lead.none}"
          }
        }
      },
      "elements": {
        "text": {
          "primary": {
            "color": {
              "static": {
                "value": {
                  "initial": "{color.gray.900}",
                  "dark": "{color.gray.50}"
                }
              },
              "hover": {}
            }
          },
          "secondary": {
            "color": {
              "static": {
                "value": {
                  "initial": "{color.gray.500}",
                  "dark": "{color.gray.400}"
                }
              },
              "hover": {
                "value": {
                  "initial": "{color.gray.700}",
                  "dark": "{color.gray.200}"
                }
              }
            }
          }
        },
        "container": {
          "maxWidth": {
            "value": "80rem"
          },
          "padding": {
            "mobile": {
              "value": "{space.4}"
            },
            "xs": {
              "value": "{space.4}"
            },
            "sm": {
              "value": "{space.6}"
            },
            "md": {
              "value": "{space.6}"
            }
          }
        },
        "backdrop": {
          "filter": {
            "value": "saturate(200%) blur(20px)"
          },
          "background": {
            "value": {
              "initial": "#fffc",
              "dark": "#0c0d0ccc"
            }
          }
        },
        "border": {
          "primary": {
            "static": {
              "value": {
                "initial": "{color.gray.100}",
                "dark": "{color.gray.900}"
              }
            },
            "hover": {
              "value": {
                "initial": "{color.gray.200}",
                "dark": "{color.gray.800}"
              }
            }
          },
          "secondary": {
            "static": {
              "value": {
                "initial": "{color.gray.200}",
                "dark": "{color.gray.800}"
              }
            },
            "hover": {
              "value": {
                "initial": "",
                "dark": ""
              }
            }
          }
        },
        "surface": {
          "background": {
            "base": {
              "value": {
                "initial": "{color.gray.100}",
                "dark": "{color.gray.900}"
              }
            }
          },
          "primary": {
            "backgroundColor": {
              "value": {
                "initial": "{color.gray.100}",
                "dark": "{color.gray.900}"
              }
            }
          },
          "secondary": {
            "backgroundColor": {
              "value": {
                "initial": "{color.gray.200}",
                "dark": "{color.gray.800}"
              }
            }
          }
        },
        "state": {
          "primary": {
            "color": {
              "primary": {
                "value": {
                  "initial": "{color.primary.600}",
                  "dark": "{color.primary.400}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.primary.700}",
                  "dark": "{color.primary.200}"
                }
              }
            },
            "backgroundColor": {
              "primary": {
                "value": {
                  "initial": "{color.primary.50}",
                  "dark": "{color.primary.900}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.primary.100}",
                  "dark": "{color.primary.800}"
                }
              }
            },
            "borderColor": {
              "primary": {
                "value": {
                  "initial": "{color.primary.100}",
                  "dark": "{color.primary.800}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.primary.200}",
                  "dark": "{color.primary.700}"
                }
              }
            }
          },
          "info": {
            "color": {
              "primary": {
                "value": {
                  "initial": "{color.blue.500}",
                  "dark": "{color.blue.400}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.blue.600}",
                  "dark": "{color.blue.200}"
                }
              }
            },
            "backgroundColor": {
              "primary": {
                "value": {
                  "initial": "{color.blue.50}",
                  "dark": "{color.blue.900}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.blue.100}",
                  "dark": "{color.blue.800}"
                }
              }
            },
            "borderColor": {
              "primary": {
                "value": {
                  "initial": "{color.blue.100}",
                  "dark": "{color.blue.800}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.blue.200}",
                  "dark": "{color.blue.700}"
                }
              }
            }
          },
          "success": {
            "color": {
              "primary": {
                "value": {
                  "initial": "{color.green.500}",
                  "dark": "{color.green.400}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.green.600}",
                  "dark": "{color.green.200}"
                }
              }
            },
            "backgroundColor": {
              "primary": {
                "value": {
                  "initial": "{color.green.50}",
                  "dark": "{color.green.900}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.green.100}",
                  "dark": "{color.green.800}"
                }
              }
            },
            "borderColor": {
              "primary": {
                "value": {
                  "initial": "{color.green.100}",
                  "dark": "{color.green.800}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.green.200}",
                  "dark": "{color.green.700}"
                }
              }
            }
          },
          "warning": {
            "color": {
              "primary": {
                "value": {
                  "initial": "{color.yellow.600}",
                  "dark": "{color.yellow.400}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.yellow.700}",
                  "dark": "{color.yellow.200}"
                }
              }
            },
            "backgroundColor": {
              "primary": {
                "value": {
                  "initial": "{color.yellow.50}",
                  "dark": "{color.yellow.900}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.yellow.100}",
                  "dark": "{color.yellow.800}"
                }
              }
            },
            "borderColor": {
              "primary": {
                "value": {
                  "initial": "{color.yellow.100}",
                  "dark": "{color.yellow.800}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.yellow.200}",
                  "dark": "{color.yellow.700}"
                }
              }
            }
          },
          "danger": {
            "color": {
              "primary": {
                "value": {
                  "initial": "{color.red.500}",
                  "dark": "{color.red.300}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.red.600}",
                  "dark": "{color.red.200}"
                }
              }
            },
            "backgroundColor": {
              "primary": {
                "value": {
                  "initial": "{color.red.50}",
                  "dark": "{color.red.900}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.red.100}",
                  "dark": "{color.red.800}"
                }
              }
            },
            "borderColor": {
              "primary": {
                "value": {
                  "initial": "{color.red.100}",
                  "dark": "{color.red.800}"
                }
              },
              "secondary": {
                "value": {
                  "initial": "{color.red.200}",
                  "dark": "{color.red.700}"
                }
              }
            }
          }
        }
      },
      "typography": {
        "body": {
          "color": {
            "value": {
              "initial": "{color.black}",
              "dark": "{color.white}"
            }
          },
          "backgroundColor": {
            "value": {
              "initial": "{color.white}",
              "dark": "{color.black}"
            }
          }
        },
        "verticalMargin": {
          "sm": {
            "value": "16px"
          },
          "base": {
            "value": "24px"
          }
        },
        "letterSpacing": {
          "tight": {
            "value": "-0.025em"
          },
          "wide": {
            "value": "0.025em"
          }
        },
        "fontSize": {
          "xs": {
            "value": "12px"
          },
          "sm": {
            "value": "14px"
          },
          "base": {
            "value": "16px"
          },
          "lg": {
            "value": "18px"
          },
          "xl": {
            "value": "20px"
          },
          "2xl": {
            "value": "24px"
          },
          "3xl": {
            "value": "30px"
          },
          "4xl": {
            "value": "36px"
          },
          "5xl": {
            "value": "48px"
          },
          "6xl": {
            "value": "60px"
          },
          "7xl": {
            "value": "72px"
          },
          "8xl": {
            "value": "96px"
          },
          "9xl": {
            "value": "128px"
          }
        },
        "fontWeight": {
          "thin": {
            "value": "100"
          },
          "extralight": {
            "value": "200"
          },
          "light": {
            "value": "300"
          },
          "normal": {
            "value": "400"
          },
          "medium": {
            "value": "500"
          },
          "semibold": {
            "value": "600"
          },
          "bold": {
            "value": "700"
          },
          "extrabold": {
            "value": "800"
          },
          "black": {
            "value": "900"
          }
        },
        "lead": {
          "1": {
            "value": ".025rem"
          },
          "2": {
            "value": ".5rem"
          },
          "3": {
            "value": ".75rem"
          },
          "4": {
            "value": "1rem"
          },
          "5": {
            "value": "1.25rem"
          },
          "6": {
            "value": "1.5rem"
          },
          "7": {
            "value": "1.75rem"
          },
          "8": {
            "value": "2rem"
          },
          "9": {
            "value": "2.25rem"
          },
          "10": {
            "value": "2.5rem"
          },
          "none": {
            "value": "1"
          },
          "tight": {
            "value": "1.25"
          },
          "snug": {
            "value": "1.375"
          },
          "normal": {
            "value": "1.5"
          },
          "relaxed": {
            "value": "1.625"
          },
          "loose": {
            "value": "2"
          }
        },
        "font": {
          "display": {
            "value": "{font.sans}"
          },
          "body": {
            "value": "{font.sans}"
          },
          "code": {
            "value": "{font.mono}"
          }
        },
        "color": {
          "primary": {
            "50": {
              "value": "{color.primary.50}"
            },
            "100": {
              "value": "{color.primary.100}"
            },
            "200": {
              "value": "{color.primary.200}"
            },
            "300": {
              "value": "{color.primary.300}"
            },
            "400": {
              "value": "{color.primary.400}"
            },
            "500": {
              "value": "{color.primary.500}"
            },
            "600": {
              "value": "{color.primary.600}"
            },
            "700": {
              "value": "{color.primary.700}"
            },
            "800": {
              "value": "{color.primary.800}"
            },
            "900": {
              "value": "{color.primary.900}"
            }
          },
          "secondary": {
            "50": {
              "value": "{color.gray.50}"
            },
            "100": {
              "value": "{color.gray.100}"
            },
            "200": {
              "value": "{color.gray.200}"
            },
            "300": {
              "value": "{color.gray.300}"
            },
            "400": {
              "value": "{color.gray.400}"
            },
            "500": {
              "value": "{color.gray.500}"
            },
            "600": {
              "value": "{color.gray.600}"
            },
            "700": {
              "value": "{color.gray.700}"
            },
            "800": {
              "value": "{color.gray.800}"
            },
            "900": {
              "value": "{color.gray.900}"
            }
          }
        }
      },
      "prose": {
        "p": {
          "fontSize": {
            "value": "{typography.fontSize.base}"
          },
          "lineHeight": {
            "value": "{typography.lead.normal}"
          },
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "br": {
            "margin": {
              "value": "{typography.verticalMargin.base} 0 0 0"
            }
          }
        },
        "h1": {
          "margin": {
            "value": "0 0 2rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.5xl}"
          },
          "lineHeight": {
            "value": "{typography.lead.tight}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.bold}"
          },
          "letterSpacing": {
            "value": "{typography.letterSpacing.tight}"
          },
          "iconSize": {
            "value": "{typography.fontSize.3xl}"
          }
        },
        "h2": {
          "margin": {
            "value": "3rem 0 2rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.4xl}"
          },
          "lineHeight": {
            "value": "{typography.lead.tight}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          },
          "letterSpacing": {
            "value": "{typography.letterSpacing.tight}"
          },
          "iconSize": {
            "value": "{typography.fontSize.2xl}"
          }
        },
        "h3": {
          "margin": {
            "value": "3rem 0 2rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.3xl}"
          },
          "lineHeight": {
            "value": "{typography.lead.snug}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          },
          "letterSpacing": {
            "value": "{typography.letterSpacing.tight}"
          },
          "iconSize": {
            "value": "{typography.fontSize.xl}"
          }
        },
        "h4": {
          "margin": {
            "value": "3rem 0 2rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.2xl}"
          },
          "lineHeight": {
            "value": "{typography.lead.snug}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          },
          "letterSpacing": {
            "value": "{typography.letterSpacing.tight}"
          },
          "iconSize": {
            "value": "{typography.fontSize.lg}"
          }
        },
        "h5": {
          "margin": {
            "value": "3rem 0 2rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.xl}"
          },
          "lineHeight": {
            "value": "{typography.lead.snug}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          },
          "iconSize": {
            "value": "{typography.fontSize.lg}"
          }
        },
        "h6": {
          "margin": {
            "value": "3rem 0 2rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.lg}"
          },
          "lineHeight": {
            "value": "{typography.lead.normal}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          },
          "iconSize": {
            "value": "{typography.fontSize.base}"
          }
        },
        "strong": {
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          }
        },
        "img": {
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          }
        },
        "a": {
          "textDecoration": {
            "value": "none"
          },
          "color": {
            "static": {
              "value": {
                "initial": "inherit",
                "dark": "inherit"
              }
            },
            "hover": {
              "value": {
                "initial": "{typography.color.primary.500}",
                "dark": "{typography.color.primary.400}"
              }
            }
          },
          "border": {
            "width": {
              "value": "1px"
            },
            "style": {
              "static": {
                "value": "dashed"
              },
              "hover": {
                "value": "solid"
              }
            },
            "color": {
              "static": {
                "value": {
                  "initial": "currentColor",
                  "dark": "currentColor"
                }
              },
              "hover": {
                "value": {
                  "initial": "currentColor",
                  "dark": "currentColor"
                }
              }
            },
            "distance": {
              "value": "2px"
            }
          },
          "fontWeight": {
            "value": "{typography.fontWeight.medium}"
          },
          "hasCode": {
            "borderBottom": {
              "value": "none"
            }
          },
          "code": {
            "border": {
              "width": {
                "value": "{prose.a.border.width}"
              },
              "style": {
                "value": "{prose.a.border.style.static}"
              },
              "color": {
                "static": {
                  "value": {
                    "initial": "{typography.color.secondary.400}",
                    "dark": "{typography.color.secondary.600}"
                  }
                },
                "hover": {
                  "value": {
                    "initial": "{typography.color.primary.500}",
                    "dark": "{typography.color.primary.600}"
                  }
                }
              }
            },
            "color": {
              "static": {
                "value": {
                  "initial": "currentColor",
                  "dark": "currentColor"
                }
              },
              "hover": {
                "value": {
                  "initial": "currentColor",
                  "dark": "currentColor"
                }
              }
            },
            "background": {
              "static": {},
              "hover": {
                "value": {
                  "initial": "{typography.color.primary.50}",
                  "dark": "{typography.color.primary.900}"
                }
              }
            }
          }
        },
        "blockquote": {
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "paddingInlineStart": {
            "value": "24px"
          },
          "quotes": {
            "value": "'201C' '201D' '2018' '2019'"
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.500}",
              "dark": "{typography.color.secondary.400}"
            }
          },
          "border": {
            "width": {
              "value": "4px"
            },
            "style": {
              "value": "solid"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.200}",
                "dark": "{typography.color.secondary.700}"
              }
            }
          }
        },
        "ul": {
          "listStyleType": {
            "value": "disc"
          },
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "paddingInlineStart": {
            "value": "21px"
          },
          "li": {
            "markerColor": {
              "value": {
                "initial": "currentColor",
                "dark": "currentColor"
              }
            }
          }
        },
        "ol": {
          "listStyleType": {
            "value": "decimal"
          },
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "paddingInlineStart": {
            "value": "21px"
          },
          "li": {
            "markerColor": {
              "value": {
                "initial": "currentColor",
                "dark": "currentColor"
              }
            }
          }
        },
        "li": {
          "margin": {
            "value": "{typography.verticalMargin.sm} 0"
          },
          "listStylePosition": {
            "value": "outside"
          }
        },
        "hr": {
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "style": {
            "value": "solid"
          },
          "width": {
            "value": "1px"
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.200}",
              "dark": "{typography.color.secondary.800}"
            }
          }
        },
        "table": {
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "textAlign": {
            "value": "start"
          },
          "fontSize": {
            "value": "{typography.fontSize.sm}"
          },
          "lineHeight": {
            "value": "{typography.lead.6}"
          }
        },
        "thead": {
          "border": {
            "width": {
              "value": "0px"
            },
            "style": {
              "value": "solid"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.300}",
                "dark": "{typography.color.secondary.600}"
              }
            }
          },
          "borderBottom": {
            "width": {
              "value": "1px"
            },
            "style": {
              "value": "solid"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.200}",
                "dark": "{typography.color.secondary.800}"
              }
            }
          }
        },
        "th": {
          "color": {
            "value": {
              "initial": "{typography.color.secondary.600}",
              "dark": "{typography.color.secondary.400}"
            }
          },
          "padding": {
            "value": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.semibold}"
          },
          "textAlign": {
            "value": "inherit"
          }
        },
        "tbody": {
          "tr": {
            "borderBottom": {
              "width": {
                "value": "1px"
              },
              "style": {
                "value": "dashed"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.200}",
                  "dark": "{typography.color.secondary.800}"
                }
              }
            }
          },
          "td": {
            "padding": {
              "value": "{typography.verticalMargin.sm}"
            }
          },
          "code": {
            "inline": {
              "fontSize": {
                "value": "{typography.fontSize.sm}"
              }
            }
          }
        },
        "code": {
          "block": {
            "fontSize": {
              "value": "{typography.fontSize.sm}"
            },
            "margin": {
              "value": "{typography.verticalMargin.base} 0"
            },
            "border": {
              "width": {
                "value": "1px"
              },
              "style": {
                "value": "solid"
              },
              "color": {
                "value": {
                  "initial": "{typography.color.secondary.200}",
                  "dark": "{typography.color.secondary.800}"
                }
              }
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.700}",
                "dark": "{typography.color.secondary.200}"
              }
            },
            "backgroundColor": {
              "value": {
                "initial": "{typography.color.secondary.100}",
                "dark": "{typography.color.secondary.900}"
              }
            },
            "backdropFilter": {
              "value": {
                "initial": "contrast(1)",
                "dark": "contrast(1)"
              }
            },
            "pre": {
              "padding": {
                "value": "{typography.verticalMargin.sm}"
              }
            }
          },
          "inline": {
            "borderRadius": {
              "value": "{radii.xs}"
            },
            "padding": {
              "value": "0.2rem 0.375rem 0.2rem 0.375rem"
            },
            "fontSize": {
              "value": "{typography.fontSize.sm}"
            },
            "fontWeight": {
              "value": "{typography.fontWeight.normal}"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.700}",
                "dark": "{typography.color.secondary.200}"
              }
            },
            "backgroundColor": {
              "value": {
                "initial": "{typography.color.secondary.100}",
                "dark": "{typography.color.secondary.800}"
              }
            }
          }
        }
      },
      "docus": {
        "body": {
          "backgroundColor": {
            "value": {
              "initial": "{color.white}",
              "dark": "{color.black}"
            }
          },
          "color": {
            "value": {
              "initial": "{color.gray.800}",
              "dark": "{color.gray.200}"
            }
          },
          "fontFamily": {
            "value": "{font.sans}"
          }
        },
        "header": {
          "height": {
            "value": "64px"
          },
          "logo": {
            "height": {
              "value": {
                "initial": "{space.6}",
                "sm": "{space.7}"
              }
            }
          },
          "title": {
            "fontSize": {
              "value": "{fontSize.2xl}"
            },
            "fontWeight": {
              "value": "{fontWeight.bold}"
            },
            "color": {
              "static": {
                "value": {
                  "initial": "{color.gray.900}",
                  "dark": "{color.gray.100}"
                }
              },
              "hover": {
                "value": "{color.primary.500}"
              }
            }
          }
        },
        "footer": {
          "height": {
            "value": {
              "initial": "145px",
              "sm": "100px"
            }
          },
          "padding": {
            "value": "{space.4} 0"
          }
        },
        "readableLine": {
          "value": "78ch"
        },
        "loadingBar": {
          "height": {
            "value": "3px"
          },
          "gradientColorStop1": {
            "value": "#00dc82"
          },
          "gradientColorStop2": {
            "value": "#34cdfe"
          },
          "gradientColorStop3": {
            "value": "#0047e1"
          }
        },
        "search": {
          "backdropFilter": {
            "value": "blur(24px)"
          },
          "input": {
            "borderRadius": {
              "value": "{radii.2xs}"
            },
            "borderWidth": {
              "value": "1px"
            },
            "borderStyle": {
              "value": "solid"
            },
            "borderColor": {
              "value": {
                "initial": "{color.gray.200}",
                "dark": "transparent"
              }
            },
            "fontSize": {
              "value": "{fontSize.sm}"
            },
            "gap": {
              "value": "{space.2}"
            },
            "padding": {
              "value": "{space.2} {space.4}"
            },
            "backgroundColor": {
              "value": {
                "initial": "{color.gray.200}",
                "dark": "{color.gray.800}"
              }
            }
          },
          "results": {
            "window": {
              "marginX": {
                "value": {
                  "initial": "0",
                  "sm": "{space.4}"
                }
              },
              "borderRadius": {
                "value": {
                  "initial": "none",
                  "sm": "{radii.xs}"
                }
              },
              "marginTop": {
                "value": {
                  "initial": "0",
                  "sm": "20vh"
                }
              },
              "maxWidth": {
                "value": "640px"
              },
              "maxHeight": {
                "value": {
                  "initial": "100%",
                  "sm": "320px"
                }
              }
            },
            "selected": {
              "backgroundColor": {
                "value": {
                  "initial": "{color.gray.300}",
                  "dark": "{color.gray.700}"
                }
              }
            },
            "highlight": {
              "color": {
                "value": "white"
              },
              "backgroundColor": {
                "value": "{color.primary.500}"
              }
            }
          }
        }
      }
    }
  },
  "default": {
    "media": {
      "xs": {
        "value": "(min-width: 475px)"
      },
      "sm": {
        "value": "(min-width: 640px)"
      },
      "md": {
        "value": "(min-width: 768px)"
      },
      "lg": {
        "value": "(min-width: 1024px)"
      },
      "xl": {
        "value": "(min-width: 1280px)"
      },
      "2xl": {
        "value": "(min-width: 1536px)"
      },
      "rm": {
        "value": "(prefers-reduced-motion: reduce)"
      },
      "landscape": {
        "value": "only screen and (orientation: landscape)"
      },
      "portrait": {
        "value": "only screen and (orientation: portrait)"
      }
    },
    "color": {
      "white": {
        "value": "#ffffff"
      },
      "black": {
        "value": "#0B0A0A"
      },
      "gray": {
        "50": {
          "value": "#FBFBFB"
        },
        "100": {
          "value": "#F6F5F4"
        },
        "200": {
          "value": "#ECEBE8"
        },
        "300": {
          "value": "#DBD9D3"
        },
        "400": {
          "value": "#ADA9A4"
        },
        "500": {
          "value": "#97948F"
        },
        "600": {
          "value": "#67635D"
        },
        "700": {
          "value": "#36332E"
        },
        "800": {
          "value": "#201E1B"
        },
        "900": {
          "value": "#121110"
        }
      },
      "green": {
        "50": {
          "value": "#ECFFF7"
        },
        "100": {
          "value": "#DEFFF1"
        },
        "200": {
          "value": "#C3FFE6"
        },
        "300": {
          "value": "#86FBCB"
        },
        "400": {
          "value": "#3CEEA5"
        },
        "500": {
          "value": "#0DD885"
        },
        "600": {
          "value": "#00B467"
        },
        "700": {
          "value": "#006037"
        },
        "800": {
          "value": "#002817"
        },
        "900": {
          "value": "#00190F"
        }
      },
      "yellow": {
        "50": {
          "value": "#FFFCEE"
        },
        "100": {
          "value": "#FFF6D3"
        },
        "200": {
          "value": "#FFF0B1"
        },
        "300": {
          "value": "#FFE372"
        },
        "400": {
          "value": "#FFDC4E"
        },
        "500": {
          "value": "#FBCA05"
        },
        "600": {
          "value": "#CBA408"
        },
        "700": {
          "value": "#614E02"
        },
        "800": {
          "value": "#292100"
        },
        "900": {
          "value": "#1B1500"
        }
      },
      "orange": {
        "50": {
          "value": "#ffe9d9"
        },
        "100": {
          "value": "#ffd3b3"
        },
        "200": {
          "value": "#ffbd8d"
        },
        "300": {
          "value": "#ffa666"
        },
        "400": {
          "value": "#ff9040"
        },
        "500": {
          "value": "#ff7a1a"
        },
        "600": {
          "value": "#e15e00"
        },
        "700": {
          "value": "#a94700"
        },
        "800": {
          "value": "#702f00"
        },
        "900": {
          "value": "#381800"
        }
      },
      "red": {
        "50": {
          "value": "#FFF9F8"
        },
        "100": {
          "value": "#FFF3F0"
        },
        "200": {
          "value": "#FFDED7"
        },
        "300": {
          "value": "#FFA692"
        },
        "400": {
          "value": "#FF7353"
        },
        "500": {
          "value": "#FF3B10"
        },
        "600": {
          "value": "#BB2402"
        },
        "700": {
          "value": "#701704"
        },
        "800": {
          "value": "#340A01"
        },
        "900": {
          "value": "#1C0301"
        }
      },
      "pear": {
        "50": {
          "value": "#f7f8dc"
        },
        "100": {
          "value": "#eff0ba"
        },
        "200": {
          "value": "#e8e997"
        },
        "300": {
          "value": "#e0e274"
        },
        "400": {
          "value": "#d8da52"
        },
        "500": {
          "value": "#d0d32f"
        },
        "600": {
          "value": "#a8aa24"
        },
        "700": {
          "value": "#7e801b"
        },
        "800": {
          "value": "#545512"
        },
        "900": {
          "value": "#2a2b09"
        }
      },
      "teal": {
        "50": {
          "value": "#d7faf8"
        },
        "100": {
          "value": "#aff4f0"
        },
        "200": {
          "value": "#87efe9"
        },
        "300": {
          "value": "#5fe9e1"
        },
        "400": {
          "value": "#36e4da"
        },
        "500": {
          "value": "#1cd1c6"
        },
        "600": {
          "value": "#16a79e"
        },
        "700": {
          "value": "#117d77"
        },
        "800": {
          "value": "#0b544f"
        },
        "900": {
          "value": "#062a28"
        }
      },
      "lightblue": {
        "50": {
          "value": "#d9f8ff"
        },
        "100": {
          "value": "#b3f1ff"
        },
        "200": {
          "value": "#8deaff"
        },
        "300": {
          "value": "#66e4ff"
        },
        "400": {
          "value": "#40ddff"
        },
        "500": {
          "value": "#1ad6ff"
        },
        "600": {
          "value": "#00b9e1"
        },
        "700": {
          "value": "#008aa9"
        },
        "800": {
          "value": "#005c70"
        },
        "900": {
          "value": "#002e38"
        }
      },
      "blue": {
        "50": {
          "value": "#F2FAFF"
        },
        "100": {
          "value": "#DFF3FF"
        },
        "200": {
          "value": "#C6EAFF"
        },
        "300": {
          "value": "#A1DDFF"
        },
        "400": {
          "value": "#64C7FF"
        },
        "500": {
          "value": "#1AADFF"
        },
        "600": {
          "value": "#0069A6"
        },
        "700": {
          "value": "#014267"
        },
        "800": {
          "value": "#002235"
        },
        "900": {
          "value": "#00131D"
        }
      },
      "indigoblue": {
        "50": {
          "value": "#d9e5ff"
        },
        "100": {
          "value": "#b3cbff"
        },
        "200": {
          "value": "#8db0ff"
        },
        "300": {
          "value": "#6696ff"
        },
        "400": {
          "value": "#407cff"
        },
        "500": {
          "value": "#1a62ff"
        },
        "600": {
          "value": "#0047e1"
        },
        "700": {
          "value": "#0035a9"
        },
        "800": {
          "value": "#002370"
        },
        "900": {
          "value": "#001238"
        }
      },
      "royalblue": {
        "50": {
          "value": "#dfdbfb"
        },
        "100": {
          "value": "#c0b7f7"
        },
        "200": {
          "value": "#a093f3"
        },
        "300": {
          "value": "#806ff0"
        },
        "400": {
          "value": "#614bec"
        },
        "500": {
          "value": "#4127e8"
        },
        "600": {
          "value": "#2c15c4"
        },
        "700": {
          "value": "#211093"
        },
        "800": {
          "value": "#160a62"
        },
        "900": {
          "value": "#0b0531"
        }
      },
      "purple": {
        "50": {
          "value": "#ead9ff"
        },
        "100": {
          "value": "#d5b3ff"
        },
        "200": {
          "value": "#c08dff"
        },
        "300": {
          "value": "#ab66ff"
        },
        "400": {
          "value": "#9640ff"
        },
        "500": {
          "value": "#811aff"
        },
        "600": {
          "value": "#6500e1"
        },
        "700": {
          "value": "#4c00a9"
        },
        "800": {
          "value": "#330070"
        },
        "900": {
          "value": "#190038"
        }
      },
      "pink": {
        "50": {
          "value": "#ffd9f2"
        },
        "100": {
          "value": "#ffb3e5"
        },
        "200": {
          "value": "#ff8dd8"
        },
        "300": {
          "value": "#ff66cc"
        },
        "400": {
          "value": "#ff40bf"
        },
        "500": {
          "value": "#ff1ab2"
        },
        "600": {
          "value": "#e10095"
        },
        "700": {
          "value": "#a90070"
        },
        "800": {
          "value": "#70004b"
        },
        "900": {
          "value": "#380025"
        }
      },
      "ruby": {
        "50": {
          "value": "#ffd9e4"
        },
        "100": {
          "value": "#ffb3c9"
        },
        "200": {
          "value": "#ff8dae"
        },
        "300": {
          "value": "#ff6694"
        },
        "400": {
          "value": "#ff4079"
        },
        "500": {
          "value": "#ff1a5e"
        },
        "600": {
          "value": "#e10043"
        },
        "700": {
          "value": "#a90032"
        },
        "800": {
          "value": "#700021"
        },
        "900": {
          "value": "#380011"
        }
      },
      "primary": {
        "50": {
          "value": "#F1FCFF"
        },
        "100": {
          "value": "#DCF7FF"
        },
        "200": {
          "value": "#C5F2FF"
        },
        "300": {
          "value": "#82E3FF"
        },
        "400": {
          "value": "#55E1FF"
        },
        "500": {
          "value": "#1AD6FF"
        },
        "600": {
          "value": "#09A0C1"
        },
        "700": {
          "value": "#024757"
        },
        "800": {
          "value": "#00232B"
        },
        "900": {
          "value": "#001A1F"
        }
      },
      "secondary": {
        "50": {
          "value": "{color.gray.50}"
        },
        "100": {
          "value": "{color.gray.100}"
        },
        "200": {
          "value": "{color.gray.200}"
        },
        "300": {
          "value": "{color.gray.300}"
        },
        "400": {
          "value": "{color.gray.400}"
        },
        "500": {
          "value": "{color.gray.500}"
        },
        "600": {
          "value": "{color.gray.600}"
        },
        "700": {
          "value": "{color.gray.700}"
        },
        "800": {
          "value": "{color.gray.800}"
        },
        "900": {
          "value": "{color.gray.900}"
        }
      },
      "shadow": {
        "value": {
          "initial": "{color.gray.400}",
          "dark": "{color.gray.800}"
        }
      }
    },
    "width": {
      "screen": {
        "value": "100vw"
      }
    },
    "height": {
      "screen": {
        "value": "100vh"
      }
    },
    "shadow": {
      "xs": {
        "value": "0px 1px 2px 0px {color.shadow}"
      },
      "sm": {
        "value": "0px 1px 3px 0px {color.shadow}, 0px 1px 2px -1px {color.shadow}"
      },
      "md": {
        "value": "0px 4px 6px -1px {color.shadow}, 0px 2px 4px -2px {color.shadow}"
      },
      "lg": {
        "value": "0px 10px 15px -3px {color.shadow}, 0px 4px 6px -4px {color.shadow}"
      },
      "xl": {
        "value": "0px 20px 25px -5px {color.shadow}, 0px 8px 10px -6px {color.shadow}"
      },
      "2xl": {
        "value": "0px 25px 50px -12px {color.shadow}"
      },
      "none": {
        "value": "0px 0px 0px 0px transparent"
      }
    },
    "radii": {
      "none": {
        "value": "0px"
      },
      "2xs": {
        "value": "0.125rem"
      },
      "xs": {
        "value": "0.25rem"
      },
      "sm": {
        "value": "0.375rem"
      },
      "md": {
        "value": "0.5rem"
      },
      "lg": {
        "value": "0.75rem"
      },
      "xl": {
        "value": "1rem"
      },
      "2xl": {
        "value": "1.5rem"
      },
      "3xl": {
        "value": "1.75rem"
      },
      "full": {
        "value": "9999px"
      }
    },
    "size": {
      "0": {
        "value": "0px"
      },
      "2": {
        "value": "2px"
      },
      "4": {
        "value": "4px"
      },
      "6": {
        "value": "6px"
      },
      "8": {
        "value": "8px"
      },
      "12": {
        "value": "12px"
      },
      "16": {
        "value": "16px"
      },
      "20": {
        "value": "20px"
      },
      "24": {
        "value": "24px"
      },
      "32": {
        "value": "32px"
      },
      "40": {
        "value": "40px"
      },
      "48": {
        "value": "48px"
      },
      "56": {
        "value": "56px"
      },
      "64": {
        "value": "64px"
      },
      "80": {
        "value": "80px"
      },
      "104": {
        "value": "104px"
      },
      "200": {
        "value": "200px"
      },
      "xs": {
        "value": "20rem"
      },
      "sm": {
        "value": "24rem"
      },
      "md": {
        "value": "28rem"
      },
      "lg": {
        "value": "32rem"
      },
      "xl": {
        "value": "36rem"
      },
      "2xl": {
        "value": "42rem"
      },
      "3xl": {
        "value": "48rem"
      },
      "4xl": {
        "value": "56rem"
      },
      "5xl": {
        "value": "64rem"
      },
      "6xl": {
        "value": "72rem"
      },
      "7xl": {
        "value": "80rem"
      },
      "full": {
        "value": "100%"
      }
    },
    "space": {
      "0": {
        "value": "0px"
      },
      "1": {
        "value": "0.25rem"
      },
      "2": {
        "value": "0.5rem"
      },
      "3": {
        "value": "0.75rem"
      },
      "4": {
        "value": "1rem"
      },
      "5": {
        "value": "1.25rem"
      },
      "6": {
        "value": "1.5rem"
      },
      "7": {
        "value": "1.75rem"
      },
      "8": {
        "value": "2rem"
      },
      "9": {
        "value": "2.25rem"
      },
      "10": {
        "value": "2.5rem"
      },
      "11": {
        "value": "2.75rem"
      },
      "12": {
        "value": "3rem"
      },
      "14": {
        "value": "3.5rem"
      },
      "16": {
        "value": "4rem"
      },
      "20": {
        "value": "5rem"
      },
      "24": {
        "value": "6rem"
      },
      "28": {
        "value": "7rem"
      },
      "32": {
        "value": "8rem"
      },
      "36": {
        "value": "9rem"
      },
      "40": {
        "value": "10rem"
      },
      "44": {
        "value": "11rem"
      },
      "48": {
        "value": "12rem"
      },
      "52": {
        "value": "13rem"
      },
      "56": {
        "value": "14rem"
      },
      "60": {
        "value": "15rem"
      },
      "64": {
        "value": "16rem"
      },
      "72": {
        "value": "18rem"
      },
      "80": {
        "value": "20rem"
      },
      "96": {
        "value": "24rem"
      },
      "128": {
        "value": "32rem"
      },
      "px": {
        "value": "1px"
      },
      "rem": {
        "125": {
          "value": "0.125rem"
        },
        "375": {
          "value": "0.375rem"
        },
        "625": {
          "value": "0.625rem"
        },
        "875": {
          "value": "0.875rem"
        }
      }
    },
    "borderWidth": {
      "noBorder": {
        "value": "0"
      },
      "sm": {
        "value": "1px"
      },
      "md": {
        "value": "2px"
      },
      "lg": {
        "value": "3px"
      }
    },
    "opacity": {
      "noOpacity": {
        "value": "0"
      },
      "bright": {
        "value": "0.1"
      },
      "light": {
        "value": "0.15"
      },
      "soft": {
        "value": "0.3"
      },
      "medium": {
        "value": "0.5"
      },
      "high": {
        "value": "0.8"
      },
      "total": {
        "value": "1"
      }
    },
    "font": {
      "sans": {
        "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji"
      },
      "serif": {
        "value": "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
      },
      "mono": {
        "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
      }
    },
    "fontWeight": {
      "thin": {
        "value": "100"
      },
      "extralight": {
        "value": "200"
      },
      "light": {
        "value": "300"
      },
      "normal": {
        "value": "400"
      },
      "medium": {
        "value": "500"
      },
      "semibold": {
        "value": "600"
      },
      "bold": {
        "value": "700"
      },
      "extrabold": {
        "value": "800"
      },
      "black": {
        "value": "900"
      }
    },
    "fontSize": {
      "xs": {
        "value": "0.75rem"
      },
      "sm": {
        "value": "0.875rem"
      },
      "base": {
        "value": "1rem"
      },
      "lg": {
        "value": "1.125rem"
      },
      "xl": {
        "value": "1.25rem"
      },
      "2xl": {
        "value": "1.5rem"
      },
      "3xl": {
        "value": "1.875rem"
      },
      "4xl": {
        "value": "2.25rem"
      },
      "5xl": {
        "value": "3rem"
      },
      "6xl": {
        "value": "3.75rem"
      },
      "7xl": {
        "value": "4.5rem"
      },
      "8xl": {
        "value": "6rem"
      },
      "9xl": {
        "value": "8rem"
      }
    },
    "letterSpacing": {
      "tighter": {
        "value": "-0.05em"
      },
      "tight": {
        "value": "-0.025em"
      },
      "normal": {
        "value": "0em"
      },
      "wide": {
        "value": "0.025em"
      },
      "wider": {
        "value": "0.05em"
      },
      "widest": {
        "value": "0.1em"
      }
    },
    "lead": {
      "1": {
        "value": ".025rem"
      },
      "2": {
        "value": ".5rem"
      },
      "3": {
        "value": ".75rem"
      },
      "4": {
        "value": "1rem"
      },
      "5": {
        "value": "1.25rem"
      },
      "6": {
        "value": "1.5rem"
      },
      "7": {
        "value": "1.75rem"
      },
      "8": {
        "value": "2rem"
      },
      "9": {
        "value": "2.25rem"
      },
      "10": {
        "value": "2.5rem"
      },
      "none": {
        "value": "1"
      },
      "tight": {
        "value": "1.25"
      },
      "snug": {
        "value": "1.375"
      },
      "normal": {
        "value": "1.5"
      },
      "relaxed": {
        "value": "1.625"
      },
      "loose": {
        "value": "2"
      }
    },
    "text": {
      "xs": {
        "fontSize": {
          "value": "{fontSize.xs}"
        },
        "lineHeight": {
          "value": "{lead.4}"
        }
      },
      "sm": {
        "fontSize": {
          "value": "{fontSize.sm}"
        },
        "lineHeight": {
          "value": "{lead.5}"
        }
      },
      "base": {
        "fontSize": {
          "value": "{fontSize.base}"
        },
        "lineHeight": {
          "value": "{lead.6}"
        }
      },
      "lg": {
        "fontSize": {
          "value": "{fontSize.lg}"
        },
        "lineHeight": {
          "value": "{lead.7}"
        }
      },
      "xl": {
        "fontSize": {
          "value": "{fontSize.xl}"
        },
        "lineHeight": {
          "value": "{lead.7}"
        }
      },
      "2xl": {
        "fontSize": {
          "value": "{fontSize.2xl}"
        },
        "lineHeight": {
          "value": "{lead.8}"
        }
      },
      "3xl": {
        "fontSize": {
          "value": "{fontSize.3xl}"
        },
        "lineHeight": {
          "value": "{lead.9}"
        }
      },
      "4xl": {
        "fontSize": {
          "value": "{fontSize.4xl}"
        },
        "lineHeight": {
          "value": "{lead.10}"
        }
      },
      "5xl": {
        "fontSize": {
          "value": "{fontSize.5xl}"
        },
        "lineHeight": {
          "value": "{lead.none}"
        }
      },
      "6xl": {
        "fontSize": {
          "value": "{fontSize.6xl}"
        },
        "lineHeight": {
          "value": "{lead.none}"
        }
      }
    },
    "elements": {
      "text": {
        "primary": {
          "color": {
            "static": {
              "value": {
                "initial": "{color.gray.900}",
                "dark": "{color.gray.50}"
              }
            },
            "hover": {}
          }
        },
        "secondary": {
          "color": {
            "static": {
              "value": {
                "initial": "{color.gray.500}",
                "dark": "{color.gray.400}"
              }
            },
            "hover": {
              "value": {
                "initial": "{color.gray.700}",
                "dark": "{color.gray.200}"
              }
            }
          }
        }
      },
      "container": {
        "maxWidth": {
          "value": "80rem"
        },
        "padding": {
          "mobile": {
            "value": "{space.4}"
          },
          "xs": {
            "value": "{space.4}"
          },
          "sm": {
            "value": "{space.6}"
          },
          "md": {
            "value": "{space.6}"
          }
        }
      },
      "backdrop": {
        "filter": {
          "value": "saturate(200%) blur(20px)"
        },
        "background": {
          "value": {
            "initial": "#fffc",
            "dark": "#0c0d0ccc"
          }
        }
      },
      "border": {
        "primary": {
          "static": {
            "value": {
              "initial": "{color.gray.100}",
              "dark": "{color.gray.900}"
            }
          },
          "hover": {
            "value": {
              "initial": "{color.gray.200}",
              "dark": "{color.gray.800}"
            }
          }
        },
        "secondary": {
          "static": {
            "value": {
              "initial": "{color.gray.200}",
              "dark": "{color.gray.800}"
            }
          },
          "hover": {
            "value": {
              "initial": "",
              "dark": ""
            }
          }
        }
      },
      "surface": {
        "background": {
          "base": {
            "value": {
              "initial": "{color.gray.100}",
              "dark": "{color.gray.900}"
            }
          }
        },
        "primary": {
          "backgroundColor": {
            "value": {
              "initial": "{color.gray.100}",
              "dark": "{color.gray.900}"
            }
          }
        },
        "secondary": {
          "backgroundColor": {
            "value": {
              "initial": "{color.gray.200}",
              "dark": "{color.gray.800}"
            }
          }
        }
      },
      "state": {
        "primary": {
          "color": {
            "primary": {
              "value": {
                "initial": "{color.primary.600}",
                "dark": "{color.primary.400}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.primary.700}",
                "dark": "{color.primary.200}"
              }
            }
          },
          "backgroundColor": {
            "primary": {
              "value": {
                "initial": "{color.primary.50}",
                "dark": "{color.primary.900}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.primary.100}",
                "dark": "{color.primary.800}"
              }
            }
          },
          "borderColor": {
            "primary": {
              "value": {
                "initial": "{color.primary.100}",
                "dark": "{color.primary.800}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.primary.200}",
                "dark": "{color.primary.700}"
              }
            }
          }
        },
        "info": {
          "color": {
            "primary": {
              "value": {
                "initial": "{color.blue.500}",
                "dark": "{color.blue.400}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.blue.600}",
                "dark": "{color.blue.200}"
              }
            }
          },
          "backgroundColor": {
            "primary": {
              "value": {
                "initial": "{color.blue.50}",
                "dark": "{color.blue.900}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.blue.100}",
                "dark": "{color.blue.800}"
              }
            }
          },
          "borderColor": {
            "primary": {
              "value": {
                "initial": "{color.blue.100}",
                "dark": "{color.blue.800}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.blue.200}",
                "dark": "{color.blue.700}"
              }
            }
          }
        },
        "success": {
          "color": {
            "primary": {
              "value": {
                "initial": "{color.green.500}",
                "dark": "{color.green.400}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.green.600}",
                "dark": "{color.green.200}"
              }
            }
          },
          "backgroundColor": {
            "primary": {
              "value": {
                "initial": "{color.green.50}",
                "dark": "{color.green.900}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.green.100}",
                "dark": "{color.green.800}"
              }
            }
          },
          "borderColor": {
            "primary": {
              "value": {
                "initial": "{color.green.100}",
                "dark": "{color.green.800}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.green.200}",
                "dark": "{color.green.700}"
              }
            }
          }
        },
        "warning": {
          "color": {
            "primary": {
              "value": {
                "initial": "{color.yellow.600}",
                "dark": "{color.yellow.400}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.yellow.700}",
                "dark": "{color.yellow.200}"
              }
            }
          },
          "backgroundColor": {
            "primary": {
              "value": {
                "initial": "{color.yellow.50}",
                "dark": "{color.yellow.900}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.yellow.100}",
                "dark": "{color.yellow.800}"
              }
            }
          },
          "borderColor": {
            "primary": {
              "value": {
                "initial": "{color.yellow.100}",
                "dark": "{color.yellow.800}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.yellow.200}",
                "dark": "{color.yellow.700}"
              }
            }
          }
        },
        "danger": {
          "color": {
            "primary": {
              "value": {
                "initial": "{color.red.500}",
                "dark": "{color.red.300}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.red.600}",
                "dark": "{color.red.200}"
              }
            }
          },
          "backgroundColor": {
            "primary": {
              "value": {
                "initial": "{color.red.50}",
                "dark": "{color.red.900}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.red.100}",
                "dark": "{color.red.800}"
              }
            }
          },
          "borderColor": {
            "primary": {
              "value": {
                "initial": "{color.red.100}",
                "dark": "{color.red.800}"
              }
            },
            "secondary": {
              "value": {
                "initial": "{color.red.200}",
                "dark": "{color.red.700}"
              }
            }
          }
        }
      }
    },
    "typography": {
      "body": {
        "color": {
          "value": {
            "initial": "{color.black}",
            "dark": "{color.white}"
          }
        },
        "backgroundColor": {
          "value": {
            "initial": "{color.white}",
            "dark": "{color.black}"
          }
        }
      },
      "verticalMargin": {
        "sm": {
          "value": "16px"
        },
        "base": {
          "value": "24px"
        }
      },
      "letterSpacing": {
        "tight": {
          "value": "-0.025em"
        },
        "wide": {
          "value": "0.025em"
        }
      },
      "fontSize": {
        "xs": {
          "value": "12px"
        },
        "sm": {
          "value": "14px"
        },
        "base": {
          "value": "16px"
        },
        "lg": {
          "value": "18px"
        },
        "xl": {
          "value": "20px"
        },
        "2xl": {
          "value": "24px"
        },
        "3xl": {
          "value": "30px"
        },
        "4xl": {
          "value": "36px"
        },
        "5xl": {
          "value": "48px"
        },
        "6xl": {
          "value": "60px"
        },
        "7xl": {
          "value": "72px"
        },
        "8xl": {
          "value": "96px"
        },
        "9xl": {
          "value": "128px"
        }
      },
      "fontWeight": {
        "thin": {
          "value": "100"
        },
        "extralight": {
          "value": "200"
        },
        "light": {
          "value": "300"
        },
        "normal": {
          "value": "400"
        },
        "medium": {
          "value": "500"
        },
        "semibold": {
          "value": "600"
        },
        "bold": {
          "value": "700"
        },
        "extrabold": {
          "value": "800"
        },
        "black": {
          "value": "900"
        }
      },
      "lead": {
        "1": {
          "value": ".025rem"
        },
        "2": {
          "value": ".5rem"
        },
        "3": {
          "value": ".75rem"
        },
        "4": {
          "value": "1rem"
        },
        "5": {
          "value": "1.25rem"
        },
        "6": {
          "value": "1.5rem"
        },
        "7": {
          "value": "1.75rem"
        },
        "8": {
          "value": "2rem"
        },
        "9": {
          "value": "2.25rem"
        },
        "10": {
          "value": "2.5rem"
        },
        "none": {
          "value": "1"
        },
        "tight": {
          "value": "1.25"
        },
        "snug": {
          "value": "1.375"
        },
        "normal": {
          "value": "1.5"
        },
        "relaxed": {
          "value": "1.625"
        },
        "loose": {
          "value": "2"
        }
      },
      "font": {
        "display": {
          "value": "{font.sans}"
        },
        "body": {
          "value": "{font.sans}"
        },
        "code": {
          "value": "{font.mono}"
        }
      },
      "color": {
        "primary": {
          "50": {
            "value": "{color.primary.50}"
          },
          "100": {
            "value": "{color.primary.100}"
          },
          "200": {
            "value": "{color.primary.200}"
          },
          "300": {
            "value": "{color.primary.300}"
          },
          "400": {
            "value": "{color.primary.400}"
          },
          "500": {
            "value": "{color.primary.500}"
          },
          "600": {
            "value": "{color.primary.600}"
          },
          "700": {
            "value": "{color.primary.700}"
          },
          "800": {
            "value": "{color.primary.800}"
          },
          "900": {
            "value": "{color.primary.900}"
          }
        },
        "secondary": {
          "50": {
            "value": "{color.gray.50}"
          },
          "100": {
            "value": "{color.gray.100}"
          },
          "200": {
            "value": "{color.gray.200}"
          },
          "300": {
            "value": "{color.gray.300}"
          },
          "400": {
            "value": "{color.gray.400}"
          },
          "500": {
            "value": "{color.gray.500}"
          },
          "600": {
            "value": "{color.gray.600}"
          },
          "700": {
            "value": "{color.gray.700}"
          },
          "800": {
            "value": "{color.gray.800}"
          },
          "900": {
            "value": "{color.gray.900}"
          }
        }
      }
    },
    "prose": {
      "p": {
        "fontSize": {
          "value": "{typography.fontSize.base}"
        },
        "lineHeight": {
          "value": "{typography.lead.normal}"
        },
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        },
        "br": {
          "margin": {
            "value": "{typography.verticalMargin.base} 0 0 0"
          }
        }
      },
      "h1": {
        "margin": {
          "value": "0 0 2rem"
        },
        "fontSize": {
          "value": "{typography.fontSize.5xl}"
        },
        "lineHeight": {
          "value": "{typography.lead.tight}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.bold}"
        },
        "letterSpacing": {
          "value": "{typography.letterSpacing.tight}"
        },
        "iconSize": {
          "value": "{typography.fontSize.3xl}"
        }
      },
      "h2": {
        "margin": {
          "value": "3rem 0 2rem"
        },
        "fontSize": {
          "value": "{typography.fontSize.4xl}"
        },
        "lineHeight": {
          "value": "{typography.lead.tight}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        },
        "letterSpacing": {
          "value": "{typography.letterSpacing.tight}"
        },
        "iconSize": {
          "value": "{typography.fontSize.2xl}"
        }
      },
      "h3": {
        "margin": {
          "value": "3rem 0 2rem"
        },
        "fontSize": {
          "value": "{typography.fontSize.3xl}"
        },
        "lineHeight": {
          "value": "{typography.lead.snug}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        },
        "letterSpacing": {
          "value": "{typography.letterSpacing.tight}"
        },
        "iconSize": {
          "value": "{typography.fontSize.xl}"
        }
      },
      "h4": {
        "margin": {
          "value": "3rem 0 2rem"
        },
        "fontSize": {
          "value": "{typography.fontSize.2xl}"
        },
        "lineHeight": {
          "value": "{typography.lead.snug}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        },
        "letterSpacing": {
          "value": "{typography.letterSpacing.tight}"
        },
        "iconSize": {
          "value": "{typography.fontSize.lg}"
        }
      },
      "h5": {
        "margin": {
          "value": "3rem 0 2rem"
        },
        "fontSize": {
          "value": "{typography.fontSize.xl}"
        },
        "lineHeight": {
          "value": "{typography.lead.snug}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        },
        "iconSize": {
          "value": "{typography.fontSize.lg}"
        }
      },
      "h6": {
        "margin": {
          "value": "3rem 0 2rem"
        },
        "fontSize": {
          "value": "{typography.fontSize.lg}"
        },
        "lineHeight": {
          "value": "{typography.lead.normal}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        },
        "iconSize": {
          "value": "{typography.fontSize.base}"
        }
      },
      "strong": {
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        }
      },
      "img": {
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        }
      },
      "a": {
        "textDecoration": {
          "value": "none"
        },
        "color": {
          "static": {
            "value": {
              "initial": "inherit",
              "dark": "inherit"
            }
          },
          "hover": {
            "value": {
              "initial": "{typography.color.primary.500}",
              "dark": "{typography.color.primary.400}"
            }
          }
        },
        "border": {
          "width": {
            "value": "1px"
          },
          "style": {
            "static": {
              "value": "dashed"
            },
            "hover": {
              "value": "solid"
            }
          },
          "color": {
            "static": {
              "value": {
                "initial": "currentColor",
                "dark": "currentColor"
              }
            },
            "hover": {
              "value": {
                "initial": "currentColor",
                "dark": "currentColor"
              }
            }
          },
          "distance": {
            "value": "2px"
          }
        },
        "fontWeight": {
          "value": "{typography.fontWeight.medium}"
        },
        "hasCode": {
          "borderBottom": {
            "value": "none"
          }
        },
        "code": {
          "border": {
            "width": {
              "value": "{prose.a.border.width}"
            },
            "style": {
              "value": "{prose.a.border.style.static}"
            },
            "color": {
              "static": {
                "value": {
                  "initial": "{typography.color.secondary.400}",
                  "dark": "{typography.color.secondary.600}"
                }
              },
              "hover": {
                "value": {
                  "initial": "{typography.color.primary.500}",
                  "dark": "{typography.color.primary.600}"
                }
              }
            }
          },
          "color": {
            "static": {
              "value": {
                "initial": "currentColor",
                "dark": "currentColor"
              }
            },
            "hover": {
              "value": {
                "initial": "currentColor",
                "dark": "currentColor"
              }
            }
          },
          "background": {
            "static": {},
            "hover": {
              "value": {
                "initial": "{typography.color.primary.50}",
                "dark": "{typography.color.primary.900}"
              }
            }
          }
        }
      },
      "blockquote": {
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        },
        "paddingInlineStart": {
          "value": "24px"
        },
        "quotes": {
          "value": "'201C' '201D' '2018' '2019'"
        },
        "color": {
          "value": {
            "initial": "{typography.color.secondary.500}",
            "dark": "{typography.color.secondary.400}"
          }
        },
        "border": {
          "width": {
            "value": "4px"
          },
          "style": {
            "value": "solid"
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.200}",
              "dark": "{typography.color.secondary.700}"
            }
          }
        }
      },
      "ul": {
        "listStyleType": {
          "value": "disc"
        },
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        },
        "paddingInlineStart": {
          "value": "21px"
        },
        "li": {
          "markerColor": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          }
        }
      },
      "ol": {
        "listStyleType": {
          "value": "decimal"
        },
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        },
        "paddingInlineStart": {
          "value": "21px"
        },
        "li": {
          "markerColor": {
            "value": {
              "initial": "currentColor",
              "dark": "currentColor"
            }
          }
        }
      },
      "li": {
        "margin": {
          "value": "{typography.verticalMargin.sm} 0"
        },
        "listStylePosition": {
          "value": "outside"
        }
      },
      "hr": {
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        },
        "style": {
          "value": "solid"
        },
        "width": {
          "value": "1px"
        },
        "color": {
          "value": {
            "initial": "{typography.color.secondary.200}",
            "dark": "{typography.color.secondary.800}"
          }
        }
      },
      "table": {
        "margin": {
          "value": "{typography.verticalMargin.base} 0"
        },
        "textAlign": {
          "value": "start"
        },
        "fontSize": {
          "value": "{typography.fontSize.sm}"
        },
        "lineHeight": {
          "value": "{typography.lead.6}"
        }
      },
      "thead": {
        "border": {
          "width": {
            "value": "0px"
          },
          "style": {
            "value": "solid"
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.300}",
              "dark": "{typography.color.secondary.600}"
            }
          }
        },
        "borderBottom": {
          "width": {
            "value": "1px"
          },
          "style": {
            "value": "solid"
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.200}",
              "dark": "{typography.color.secondary.800}"
            }
          }
        }
      },
      "th": {
        "color": {
          "value": {
            "initial": "{typography.color.secondary.600}",
            "dark": "{typography.color.secondary.400}"
          }
        },
        "padding": {
          "value": "0 {typography.verticalMargin.sm} {typography.verticalMargin.sm} {typography.verticalMargin.sm}"
        },
        "fontWeight": {
          "value": "{typography.fontWeight.semibold}"
        },
        "textAlign": {
          "value": "inherit"
        }
      },
      "tbody": {
        "tr": {
          "borderBottom": {
            "width": {
              "value": "1px"
            },
            "style": {
              "value": "dashed"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.200}",
                "dark": "{typography.color.secondary.800}"
              }
            }
          }
        },
        "td": {
          "padding": {
            "value": "{typography.verticalMargin.sm}"
          }
        },
        "code": {
          "inline": {
            "fontSize": {
              "value": "{typography.fontSize.sm}"
            }
          }
        }
      },
      "code": {
        "block": {
          "fontSize": {
            "value": "{typography.fontSize.sm}"
          },
          "margin": {
            "value": "{typography.verticalMargin.base} 0"
          },
          "border": {
            "width": {
              "value": "1px"
            },
            "style": {
              "value": "solid"
            },
            "color": {
              "value": {
                "initial": "{typography.color.secondary.200}",
                "dark": "{typography.color.secondary.800}"
              }
            }
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.700}",
              "dark": "{typography.color.secondary.200}"
            }
          },
          "backgroundColor": {
            "value": {
              "initial": "{typography.color.secondary.100}",
              "dark": "{typography.color.secondary.900}"
            }
          },
          "backdropFilter": {
            "value": {
              "initial": "contrast(1)",
              "dark": "contrast(1)"
            }
          },
          "pre": {
            "padding": {
              "value": "{typography.verticalMargin.sm}"
            }
          }
        },
        "inline": {
          "borderRadius": {
            "value": "{radii.xs}"
          },
          "padding": {
            "value": "0.2rem 0.375rem 0.2rem 0.375rem"
          },
          "fontSize": {
            "value": "{typography.fontSize.sm}"
          },
          "fontWeight": {
            "value": "{typography.fontWeight.normal}"
          },
          "color": {
            "value": {
              "initial": "{typography.color.secondary.700}",
              "dark": "{typography.color.secondary.200}"
            }
          },
          "backgroundColor": {
            "value": {
              "initial": "{typography.color.secondary.100}",
              "dark": "{typography.color.secondary.800}"
            }
          }
        }
      }
    },
    "docus": {
      "body": {
        "backgroundColor": {
          "value": {
            "initial": "{color.white}",
            "dark": "{color.black}"
          }
        },
        "color": {
          "value": {
            "initial": "{color.gray.800}",
            "dark": "{color.gray.200}"
          }
        },
        "fontFamily": {
          "value": "{font.sans}"
        }
      },
      "header": {
        "height": {
          "value": "64px"
        },
        "logo": {
          "height": {
            "value": {
              "initial": "{space.6}",
              "sm": "{space.7}"
            }
          }
        },
        "title": {
          "fontSize": {
            "value": "{fontSize.2xl}"
          },
          "fontWeight": {
            "value": "{fontWeight.bold}"
          },
          "color": {
            "static": {
              "value": {
                "initial": "{color.gray.900}",
                "dark": "{color.gray.100}"
              }
            },
            "hover": {
              "value": "{color.primary.500}"
            }
          }
        }
      },
      "footer": {
        "height": {
          "value": {
            "initial": "145px",
            "sm": "100px"
          }
        },
        "padding": {
          "value": "{space.4} 0"
        }
      },
      "readableLine": {
        "value": "78ch"
      },
      "loadingBar": {
        "height": {
          "value": "3px"
        },
        "gradientColorStop1": {
          "value": "#00dc82"
        },
        "gradientColorStop2": {
          "value": "#34cdfe"
        },
        "gradientColorStop3": {
          "value": "#0047e1"
        }
      },
      "search": {
        "backdropFilter": {
          "value": "blur(24px)"
        },
        "input": {
          "borderRadius": {
            "value": "{radii.2xs}"
          },
          "borderWidth": {
            "value": "1px"
          },
          "borderStyle": {
            "value": "solid"
          },
          "borderColor": {
            "value": {
              "initial": "{color.gray.200}",
              "dark": "transparent"
            }
          },
          "fontSize": {
            "value": "{fontSize.sm}"
          },
          "gap": {
            "value": "{space.2}"
          },
          "padding": {
            "value": "{space.2} {space.4}"
          },
          "backgroundColor": {
            "value": {
              "initial": "{color.gray.200}",
              "dark": "{color.gray.800}"
            }
          }
        },
        "results": {
          "window": {
            "marginX": {
              "value": {
                "initial": "0",
                "sm": "{space.4}"
              }
            },
            "borderRadius": {
              "value": {
                "initial": "none",
                "sm": "{radii.xs}"
              }
            },
            "marginTop": {
              "value": {
                "initial": "0",
                "sm": "20vh"
              }
            },
            "maxWidth": {
              "value": "640px"
            },
            "maxHeight": {
              "value": {
                "initial": "100%",
                "sm": "320px"
              }
            }
          },
          "selected": {
            "backgroundColor": {
              "value": {
                "initial": "{color.gray.300}",
                "dark": "{color.gray.700}"
              }
            }
          },
          "highlight": {
            "color": {
              "value": "white"
            },
            "backgroundColor": {
              "value": "{color.primary.500}"
            }
          }
        }
      }
    }
  }
};
const schema_server_zIxGbBm233 = /* @__PURE__ */ defineNuxtPlugin(() => {
  const event = useRequestEvent();
  if (event.path === "/__pinceau_tokens_config.json") {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.statusCode = 200;
    event.node.res.end(JSON.stringify(theme, null, 2));
  }
  if (event.path === "/__pinceau_tokens_schema.json") {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.statusCode = 200;
    event.node.res.end(JSON.stringify(schema, null, 2));
  }
});
const preference = "system";
const componentName = "ColorScheme";
const dataValue = "theme";
const plugin_server_XNCxeHyTuP = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const colorMode = useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      {
        htmlAttrs[`data-${dataValue}`] = colorMode.value;
      }
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const menu_13PGuw7IWk = /* @__PURE__ */ defineNuxtPlugin((ctx) => {
  const visible = ref(false);
  const open = () => visible.value = true;
  const close = () => visible.value = false;
  const toggle = () => visible.value = !visible.value;
  ctx.$router.afterEach(() => setTimeout(close, 50));
  return {
    provide: {
      menu: {
        visible,
        close,
        open,
        toggle
      }
    }
  };
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin$1,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  documentDriven_6F9UCgkXVS,
  pinceau_nuxt_plugin_server_KEuz79zT4K,
  schema_server_zIxGbBm233,
  plugin_server_XNCxeHyTuP,
  menu_13PGuw7IWk
];
const _sfc_main$i = {
  __name: "AppLoadingBar",
  __ssrInlineRender: true,
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    }
  },
  setup(__props) {
    const props = __props;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const data = reactive({
      percent: 0,
      show: false,
      canSucceed: true
    });
    let _timer = null;
    let _throttle = null;
    let _cut;
    function clear() {
      _timer && clearInterval(_timer);
      _throttle && clearTimeout(_throttle);
      _timer = null;
    }
    function start() {
      if (data.show) {
        return;
      }
      clear();
      data.percent = 0;
      data.canSucceed = true;
      if (props.throttle) {
        _throttle = setTimeout(startTimer, props.throttle);
      } else {
        startTimer();
      }
    }
    function increase(num) {
      data.percent = Math.min(100, Math.floor(data.percent + num));
    }
    function finish() {
      data.percent = 100;
      hide();
    }
    function hide() {
      clear();
      setTimeout(() => {
        data.show = false;
        setTimeout(() => {
          data.percent = 0;
        }, 400);
      }, 500);
    }
    function startTimer() {
      data.show = true;
      _cut = 1e4 / Math.floor(props.duration);
      _timer = setInterval(() => {
        increase(_cut);
      }, 100);
    }
    nuxtApp.hook("content:middleware:start", start);
    nuxtApp.hook("page:start", start);
    nuxtApp.hook("page:finish", finish);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["nuxt-progress", {
          "nuxt-progress-failed": !unref(data).canSucceed
        }],
        style: {
          width: `${unref(data).percent}%`,
          left: unref(data).left,
          opacity: unref(data).show ? 1 : 0,
          backgroundSize: `${100 / unref(data).percent * 100}% auto`
        }
      }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppLoadingBar.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const AppLoadingBar = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$i
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "Container",
  __ssrInlineRender: true,
  props: {
    as: {
      type: String,
      required: false,
      default: "div"
    },
    ...{ "padded": { "required": false, "type": [Boolean, Object], "default": true }, "fluid": { "required": false, "type": [Boolean, Object], "default": false } }
  },
  setup(__props) {
    const __$pProps = __props;
    const __$pVariants = { "padded": { "true": { "px": "{elements.container.padding.mobile}", "@xs": { "px": "{elements.container.padding.xs}" }, "@sm": { "px": "{elements.container.padding.sm}" }, "@md": { "px": "{elements.container.padding.md}" } } }, "fluid": { "true": {}, "false": { "maxWidth": "{elements.container.maxWidth}" } } };
    const { $pinceau } = usePinceauRuntime(__$pProps, __$pVariants, void 0);
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
        class: ["container", [unref($pinceau)]]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/elements/components/globals/Container.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __nuxt_component_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-a8d7e2a7"]]);
const Container = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$5
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Icon",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ""
    }
  },
  async setup(__props) {
    var _a2;
    let __temp, __restore;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const appConfig2 = useAppConfig();
    ((_a2 = appConfig2 == null ? void 0 : appConfig2.nuxtIcon) == null ? void 0 : _a2.aliases) || {};
    const props = __props;
    const state = useState("icons", () => ({}));
    const isFetching = ref(false);
    const iconName = computed(() => {
      var _a3;
      return (((_a3 = appConfig2.nuxtIcon) == null ? void 0 : _a3.aliases) || {})[props.name] || props.name;
    });
    const icon = computed(() => {
      var _a3;
      return (_a3 = state.value) == null ? void 0 : _a3[iconName.value];
    });
    const component = computed(() => nuxtApp.vueApp.component(iconName.value));
    const sSize = computed(() => {
      var _a3, _b, _c;
      if (!props.size && typeof ((_a3 = appConfig2.nuxtIcon) == null ? void 0 : _a3.size) === "boolean" && !((_b = appConfig2.nuxtIcon) == null ? void 0 : _b.size)) {
        return void 0;
      }
      const size = props.size || ((_c = appConfig2.nuxtIcon) == null ? void 0 : _c.size) || "1em";
      if (String(Number(size)) === size) {
        return `${size}px`;
      }
      return size;
    });
    const className = computed(() => {
      var _a3;
      return ((_a3 = appConfig2 == null ? void 0 : appConfig2.nuxtIcon) == null ? void 0 : _a3.class) ?? "icon";
    });
    async function loadIconComponent() {
      var _a3;
      if (component.value) {
        return;
      }
      if (!((_a3 = state.value) == null ? void 0 : _a3[iconName.value])) {
        isFetching.value = true;
        state.value[iconName.value] = await loadIcon(iconName.value).catch(() => void 0);
        isFetching.value = false;
      }
    }
    watch(() => iconName.value, loadIconComponent);
    !component.value && ([__temp, __restore] = withAsyncContext(() => loadIconComponent()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(isFetching)) {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs))} data-v-e610b8e3></span>`);
      } else if (unref(icon)) {
        _push(ssrRenderComponent(unref(Icon$1), mergeProps({
          icon: unref(icon),
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null, _parent));
      } else if (unref(component)) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
          class: unref(className),
          width: unref(sSize),
          height: unref(sSize)
        }, _attrs), null), _parent);
      } else {
        _push(`<span${ssrRenderAttrs(mergeProps({
          class: unref(className),
          style: { fontSize: unref(sSize), lineHeight: unref(sSize), width: unref(sSize), height: unref(sSize) }
        }, _attrs))} data-v-e610b8e3>${ssrInterpolate(__props.name)}</span>`);
      }
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icon/dist/runtime/Icon.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-e610b8e3"]]);
const Icon = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$4
});
const useDocus = () => {
  const docus = computed(() => {
    var _a2;
    return ((_a2 = useAppConfig()) == null ? void 0 : _a2.docus) || {};
  });
  const { navPageFromPath: navPageFromPath2, navDirFromPath: navDirFromPath2, navKeyFromPath: navKeyFromPath2 } = useContentHelpers();
  const { navigation, page } = useContent();
  const route = useRoute();
  const config = computed(
    () => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      const titleTemplate = ((_a2 = docus == null ? void 0 : docus.value) == null ? void 0 : _a2.titleTemplate) || navKeyFromPath2((_b = page == null ? void 0 : page.value) == null ? void 0 : _b._path, "titleTemplate", navigation.value || []) || `%s · ${((_c = docus == null ? void 0 : docus.value) == null ? void 0 : _c.title) || "Docus"}`;
      const main2 = ((_d = docus == null ? void 0 : docus.value) == null ? void 0 : _d.main) || {};
      const header = ((_e = docus == null ? void 0 : docus.value) == null ? void 0 : _e.header) || {};
      const aside = ((_f = docus == null ? void 0 : docus.value) == null ? void 0 : _f.aside) || {};
      const footer = ((_g = docus == null ? void 0 : docus.value) == null ? void 0 : _g.footer) || {};
      return {
        // Raw appConfig
        ...docus.value,
        // Merged attributes
        titleTemplate,
        main: {
          ...main2,
          ...navKeyFromPath2(route.path, "main", navigation.value || []),
          ...(_h = page.value) == null ? void 0 : _h.main
        },
        header: {
          ...header,
          ...navKeyFromPath2(route.path, "header", navigation.value || []),
          ...(_i = page.value) == null ? void 0 : _i.header
        },
        aside: {
          ...aside,
          ...navKeyFromPath2(route.path, "aside", navigation.value || []),
          ...(_j = page.value) == null ? void 0 : _j.aside
        },
        footer: {
          ...footer,
          ...navKeyFromPath2(route.path, "footer", navigation.value || []),
          ...(_k = page.value) == null ? void 0 : _k.footer
        }
      };
    }
  );
  const tree = computed(() => {
    var _a2, _b, _c, _d, _e;
    let nav = navigation.value || [];
    const _path = route.path;
    const level = ((_b = (_a2 = config == null ? void 0 : config.value) == null ? void 0 : _a2.aside) == null ? void 0 : _b.level) || 0;
    const filtered = ((_d = (_c = config == null ? void 0 : config.value) == null ? void 0 : _c.aside) == null ? void 0 : _d.exclude) || [];
    if (level) {
      const path = _path.split("/");
      const leveledPath = path.splice(0, 1 + level).join("/");
      nav = navDirFromPath2(leveledPath, nav) || [];
      if (!Array.isArray(nav)) {
        nav = [nav];
      }
    }
    if (nav.length === 0) {
      nav = navPageFromPath2(((_e = page.value) == null ? void 0 : _e._path) || "/", navigation.value || []);
      if (!nav) {
        return [];
      }
      if (!Array.isArray(nav)) {
        nav = [nav];
      }
    }
    return nav.filter((item) => {
      if (filtered.includes(item._path)) {
        return false;
      }
      return true;
    });
  });
  return { tree, config };
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "AppSocialIcons",
  __ssrInlineRender: true,
  setup(__props) {
    const socials = ["twitter", "facebook", "instagram", "tiktok", "youtube", "github", "medium"];
    const { config } = useDocus();
    const icons = computed(() => {
      return Object.entries(config.value.socials || {}).map(([key, value]) => {
        if (typeof value === "object") {
          return value;
        } else if (typeof value === "string" && value && socials.includes(key)) {
          return {
            href: /^https?:\/\//.test(value) ? value : `https://${key}.com/${value}`,
            icon: `fa-brands:${key}`,
            label: value,
            rel: "noopener noreferrer"
          };
        } else {
          return null;
        }
      }).filter(Boolean);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$6;
      const _component_Icon = __nuxt_component_0$4;
      _push(`<!--[-->`);
      ssrRenderList(unref(icons), (icon) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: icon.label,
          rel: icon.rel,
          title: icon.label,
          "aria-label": icon.label,
          href: icon.href,
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (icon.icon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: icon.icon
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                icon.icon ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: icon.icon
                }, null, 8, ["name"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppSocialIcons.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-22569e45"]]);
const AppSocialIcons = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_3$1
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "DocsAsideTree",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: null
    },
    parent: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    var _a2;
    const props = __props;
    const route = useRoute();
    const { config } = useDocus();
    const collapsedMap = useState(`docus-docs-aside-collapse-map-${((_a2 = props.parent) == null ? void 0 : _a2._path) || "/"}`, () => {
      if (props.level === 0) {
        return {};
      }
      return props.links.filter((link) => !!link.children).reduce((map, link) => {
        map[link._path] = true;
        return map;
      }, {});
    });
    const isActive = (link) => {
      return route.path === link._path;
    };
    const isCollapsed = (link) => {
      var _a3, _b, _c, _d;
      if (link.children) {
        if (typeof collapsedMap.value[link._path] !== "undefined") {
          return collapsedMap.value[link._path];
        }
        if ([true, false].includes((_a3 = link == null ? void 0 : link.aside) == null ? void 0 : _a3.collapsed)) {
          return link.aside.collapsed;
        }
        if (link == null ? void 0 : link.collapsed) {
          return link == null ? void 0 : link.collapsed;
        }
        if ((_c = (_b = config == null ? void 0 : config.value) == null ? void 0 : _b.aside) == null ? void 0 : _c.collapsed) {
          return (_d = config.value.aside) == null ? void 0 : _d.collapsed;
        }
      }
      return false;
    };
    const hasNesting = computed(() => props.links.some((link) => link.children));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$4;
      const _component_NuxtLink = __nuxt_component_0$6;
      const _component_DocsAsideTree = __nuxt_component_0$3;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "docs-aside-tree" }, _attrs))} data-v-d42239fd><!--[-->`);
      ssrRenderList(__props.links, (link) => {
        var _a3, _b, _c, _d, _e;
        _push(`<li class="${ssrRenderClass({
          "has-parent-icon": (_a3 = __props.parent) == null ? void 0 : _a3.icon,
          "has-children": __props.level > 0 && link.children,
          "bordered": __props.level > 0 || !unref(hasNesting),
          "active": isActive(link)
        })}" data-v-d42239fd>`);
        if (link.children) {
          _push(`<button class="title-collapsible-button" data-v-d42239fd><span class="content" data-v-d42239fd>`);
          if (((_b = link == null ? void 0 : link.navigation) == null ? void 0 : _b.icon) || link.icon) {
            _push(ssrRenderComponent(_component_Icon, {
              name: ((_c = link == null ? void 0 : link.navigation) == null ? void 0 : _c.icon) || link.icon,
              class: "icon"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<span data-v-d42239fd>${ssrInterpolate(((_d = link == null ? void 0 : link.navigation) == null ? void 0 : _d.title) || link.title || link._path)}</span></span><span data-v-d42239fd>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: isCollapsed(link) ? "lucide:chevrons-up-down" : "lucide:chevrons-down-up",
            class: "collapsible-icon"
          }, null, _parent));
          _push(`</span></button>`);
        } else {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: link.redirect ? link.redirect : link._path,
            class: ["link", {
              "padded": __props.level > 0 || !unref(hasNesting),
              "active": isActive(link)
            }],
            exact: link.exact
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a4, _b2, _c2, _d2, _e2, _f;
              if (_push2) {
                _push2(`<span class="content" data-v-d42239fd${_scopeId}>`);
                if (((_a4 = link == null ? void 0 : link.navigation) == null ? void 0 : _a4.icon) || link.icon) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: ((_b2 = link == null ? void 0 : link.navigation) == null ? void 0 : _b2.icon) || link.icon,
                    class: "icon"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span data-v-d42239fd${_scopeId}>${ssrInterpolate(((_c2 = link == null ? void 0 : link.navigation) == null ? void 0 : _c2.title) || link.title || link._path)}</span></span>`);
              } else {
                return [
                  createVNode("span", { class: "content" }, [
                    ((_d2 = link == null ? void 0 : link.navigation) == null ? void 0 : _d2.icon) || link.icon ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: ((_e2 = link == null ? void 0 : link.navigation) == null ? void 0 : _e2.icon) || link.icon,
                      class: "icon"
                    }, null, 8, ["name"])) : createCommentVNode("", true),
                    createVNode("span", null, toDisplayString(((_f = link == null ? void 0 : link.navigation) == null ? void 0 : _f.title) || link.title || link._path), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        }
        if (((_e = link.children) == null ? void 0 : _e.length) && (__props.max === null || __props.level + 1 < __props.max)) {
          _push(ssrRenderComponent(_component_DocsAsideTree, {
            style: !isCollapsed(link) ? null : { display: "none" },
            links: link.children,
            level: __props.level + 1,
            parent: link,
            max: __props.max,
            class: "recursive"
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
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/docs/DocsAsideTree.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-d42239fd"]]);
const DocsAsideTree = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0$3
});
const useMenu = () => {
  const { $menu } = /* @__PURE__ */ useNuxtApp();
  return $menu;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "AppHeaderDialog",
  __ssrInlineRender: true,
  setup(__props) {
    const { navigation } = useContent();
    const { config } = useDocus();
    const show = ref(false);
    const filtered = computed(() => {
      var _a2;
      return ((_a2 = config.value.aside) == null ? void 0 : _a2.exclude) || [];
    });
    const links = computed(() => {
      return (navigation.value || []).filter((item) => {
        if (filtered.value.includes(item._path)) {
          return false;
        }
        return true;
      });
    });
    const { close, open } = useMenu();
    watch(show, (v) => v ? open() : close());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$4;
      const _component_AppSocialIcons = __nuxt_component_3$1;
      const _component_DocsAsideTree = __nuxt_component_0$3;
      _push(`<!--[--><button aria-label="Menu" data-v-8fd30205>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "heroicons-outline:menu",
        "aria-hidden": "”true”"
      }, null, _parent));
      _push(`</button>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(show)) {
          _push2(`<nav class="dialog" data-v-8fd30205><div data-v-8fd30205><div class="wrapper" data-v-8fd30205><button aria-label="Menu" data-v-8fd30205>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "heroicons-outline:x",
            "aria-hidden": "”true”"
          }, null, _parent));
          _push2(`</button><div class="icons" data-v-8fd30205>`);
          _push2(ssrRenderComponent(_component_AppSocialIcons, null, null, _parent));
          _push2(`</div></div>`);
          _push2(ssrRenderComponent(_component_DocsAsideTree, { links: unref(links) }, null, _parent));
          _push2(`</div></nav>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppHeaderDialog.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-8fd30205"]]);
const AppHeaderDialog = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$3
});
const _sfc_main$c = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 167 44",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))} data-v-fca4477e><path d="M60 34.5945H70.2569C78.3172 34.5945 83.064 29.6369 83.064 21.1959V21.159C83.064 12.7365 78.2986 8 70.2569 8H60V34.5945ZM65.6217 29.987V12.5891H69.5867C74.5197 12.5891 77.3306 15.63 77.3306 21.1775V21.2143C77.3306 26.9645 74.6128 29.987 69.5867 29.987H65.6217Z" fill="currentColor" data-v-fca4477e></path><path d="M95.1966 35C101.228 35 105.081 31.1666 105.081 24.716V24.6792C105.081 18.284 101.153 14.4321 95.178 14.4321C89.2211 14.4321 85.312 18.3208 85.312 24.6792V24.716C85.312 31.1481 89.1281 35 95.1966 35ZM95.2152 30.7795C92.5346 30.7795 90.8407 28.5863 90.8407 24.716V24.6792C90.8407 20.8642 92.5532 18.6526 95.178 18.6526C97.8213 18.6526 99.5525 20.8642 99.5525 24.6792V24.716C99.5525 28.5679 97.8585 30.7795 95.2152 30.7795Z" fill="currentColor" data-v-fca4477e></path><path d="M116.823 35C122.147 35 125.59 31.7195 125.851 27.4068V27.2962H120.788L120.769 27.4621C120.397 29.4526 119.038 30.7795 116.86 30.7795C114.179 30.7795 112.504 28.5863 112.504 24.716V24.6976C112.504 20.9195 114.179 18.6526 116.841 18.6526C119.094 18.6526 120.415 20.0901 120.751 21.97L120.788 22.1358H125.832V22.0068C125.628 17.7311 122.184 14.4321 116.767 14.4321C110.792 14.4321 106.975 18.3577 106.975 24.6792V24.6976C106.975 31.0744 110.736 35 116.823 35Z" fill="currentColor" data-v-fca4477e></path><path d="M135.08 35C138.095 35 140.143 33.5993 141.167 31.3324H141.278V34.5945H146.714V14.8375H141.278V26.1904C141.278 28.7706 139.733 30.5399 137.295 30.5399C134.856 30.5399 133.628 29.0471 133.628 26.4669V14.8375H128.192V27.5911C128.192 32.2171 130.687 35 135.08 35Z" fill="currentColor" data-v-fca4477e></path><path d="M158.27 35C163.407 35 167 32.4567 167 28.5863V28.5679C167 25.656 165.287 24.0341 161.118 23.1679L157.73 22.4491C155.719 22.0253 155.031 21.3618 155.031 20.3481V20.3297C155.031 19.058 156.203 18.2287 158.083 18.2287C160.094 18.2287 161.267 19.2976 161.453 20.7167L161.471 20.8642H166.479V20.6799C166.348 17.215 163.389 14.4321 158.083 14.4321C153.001 14.4321 149.725 16.8648 149.725 20.6246V20.643C149.725 23.5918 151.68 25.5085 155.552 26.3195L158.94 27.0198C160.894 27.4437 161.564 28.0519 161.564 29.1024V29.1208C161.564 30.3925 160.317 31.185 158.27 31.185C156.092 31.185 154.919 30.2819 154.565 28.7338L154.528 28.5679H149.223L149.241 28.7338C149.669 32.4751 152.741 35 158.27 35Z" fill="currentColor" data-v-fca4477e></path><mask id="mask0_109_36" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="44" height="44" data-v-fca4477e><path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.8104C0 9.76479 9.80347 0 21.8967 0C33.99 0 43.7935 9.76479 43.7935 21.8104C43.7935 33.8559 33.99 43.6207 21.8967 43.6207H0V21.8104ZM19.5294 17.0944C22.1442 17.0944 24.2641 19.2059 24.2641 21.8104C24.2641 24.4148 22.1442 26.526 19.5294 26.526C16.9147 26.526 14.7948 24.4148 14.7948 21.8101C14.7948 19.2059 16.9147 17.0944 19.5294 17.0944V17.0944ZM38.4674 21.8104C38.4674 19.2059 36.3475 17.0944 33.7328 17.0944C31.1183 17.0944 28.9984 19.2059 28.9984 21.8104C28.9984 24.4148 31.1183 26.526 33.7328 26.526C36.3475 26.526 38.4674 24.4148 38.4674 21.8101V21.8104Z" fill="white" data-v-fca4477e></path></mask><g mask="url(#mask0_109_36)" data-v-fca4477e><path fill-rule="evenodd" clip-rule="evenodd" d="M0 21.8104C0 9.76479 9.80347 0 21.8967 0C33.99 0 43.7935 9.76479 43.7935 21.8104C43.7935 33.8559 33.99 43.6207 21.8967 43.6207H0V21.8104ZM19.5294 17.0944C22.1442 17.0944 24.2641 19.2059 24.2641 21.8104C24.2641 24.4148 22.1442 26.526 19.5294 26.526C16.9147 26.526 14.7948 24.4148 14.7948 21.8101C14.7948 19.2059 16.9147 17.0944 19.5294 17.0944V17.0944ZM38.4674 21.8104C38.4674 19.2059 36.3475 17.0944 33.7328 17.0944C31.1183 17.0944 28.9984 19.2059 28.9984 21.8104C28.9984 24.4148 31.1183 26.526 33.7328 26.526C36.3475 26.526 38.4674 24.4148 38.4674 21.8101V21.8104Z" fill="currentColor" data-v-fca4477e></path><path d="M9.9987e-06 43.6206H-0.156525V43.7762H9.9987e-06V43.6206ZM21.8967 -0.156006C9.71704 -0.156006 -0.156525 9.67861 -0.156525 21.8106H0.156545C0.156545 9.8508 9.88991 0.155828 21.8967 0.155828V-0.156006ZM43.9497 21.8103C43.9497 9.67861 34.0764 -0.156006 21.8967 -0.156006V0.155828C33.9036 0.155828 43.6369 9.8508 43.6369 21.8103H43.9497ZM21.8967 43.7762C34.0764 43.7762 43.9497 33.9419 43.9497 21.8103H43.6369C43.6369 33.7697 33.9036 43.4647 21.8967 43.4647V43.7762V43.7762ZM9.9987e-06 43.7762H21.8967V43.4647H9.9987e-06V43.7762ZM-0.156525 21.8103V43.6206H0.156545V21.8103H-0.156525ZM24.4203 21.8103C24.4203 19.1197 22.2306 16.9387 19.5294 16.9387V17.2502C22.0577 17.2502 24.1075 19.2916 24.1075 21.8103H24.4203V21.8103ZM19.5294 26.6816C22.2306 26.6816 24.4203 24.5005 24.4203 21.8103H24.1075C24.1075 24.3286 22.058 26.37 19.5294 26.37V26.6816V26.6816ZM14.6385 21.8106C14.6385 24.5008 16.8282 26.6819 19.5294 26.6819V26.3703C17.0011 26.3703 14.9513 24.3289 14.9513 21.8106H14.6385ZM19.5297 16.9387C16.8285 16.9387 14.6388 19.1197 14.6388 21.8103H14.9516C14.9516 19.2916 17.0011 17.2502 19.5297 17.2502V16.9387ZM33.7331 17.2502C36.2617 17.2502 38.3112 19.2916 38.3112 21.8103H38.624C38.624 19.1197 36.4343 16.9387 33.7331 16.9387V17.2502V17.2502ZM29.155 21.8103C29.155 19.2916 31.2045 17.2502 33.7328 17.2502V16.9387C31.0319 16.9387 28.8422 19.1197 28.8422 21.8103H29.155ZM33.7328 26.37C31.2045 26.37 29.155 24.3286 29.155 21.8103H28.8422C28.8422 24.5005 31.0319 26.6816 33.7328 26.6816V26.37ZM38.3109 21.8106C38.3109 24.3289 36.2614 26.3703 33.7328 26.3703V26.6819C36.434 26.6819 38.6237 24.5008 38.6237 21.8106H38.3109Z" fill="currentColor" data-v-fca4477e></path></g></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/Logo.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-fca4477e"]]);
const Logo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$2
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "AppHeaderLogo",
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useDocus();
    const logo = computed(() => {
      var _a2;
      return ((_a2 = config.value.header) == null ? void 0 : _a2.logo) || false;
    });
    const title = computed(() => {
      var _a2;
      return ((_a2 = config.value.header) == null ? void 0 : _a2.title) || config.value.title;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$6;
      const _component_Logo = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        class: "navbar-logo",
        to: "/",
        "aria-label": unref(title)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(logo)) {
              _push2(`<span class="logo" data-v-58a8631e${_scopeId}>`);
              if (typeof unref(logo) === "string") {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(logo)), null, null), _parent2, _scopeId);
              } else if (unref(logo).light && unref(logo).dark) {
                _push2(`<!--[--><img${ssrRenderAttr("src", unref(logo).light)} alt="" class="light-img" data-v-58a8631e${_scopeId}><img${ssrRenderAttr("src", unref(logo).dark)} alt="" class="dark-img" data-v-58a8631e${_scopeId}><!--]-->`);
              } else if (unref(logo)) {
                _push2(ssrRenderComponent(_component_Logo, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span>`);
            } else {
              _push2(`<span class="title" data-v-58a8631e${_scopeId}>${ssrInterpolate(unref(title))}</span>`);
            }
          } else {
            return [
              unref(logo) ? (openBlock(), createBlock("span", {
                key: 0,
                class: "logo"
              }, [
                typeof unref(logo) === "string" ? (openBlock(), createBlock(resolveDynamicComponent(unref(logo)), { key: 0 })) : unref(logo).light && unref(logo).dark ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode("img", {
                    src: unref(logo).light,
                    alt: "",
                    class: "light-img"
                  }, null, 8, ["src"]),
                  createVNode("img", {
                    src: unref(logo).dark,
                    alt: "",
                    class: "dark-img"
                  }, null, 8, ["src"])
                ], 64)) : unref(logo) ? (openBlock(), createBlock(_component_Logo, { key: 2 })) : createCommentVNode("", true)
              ])) : (openBlock(), createBlock("span", {
                key: 1,
                class: "title"
              }, toDisplayString(unref(title)), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppHeaderLogo.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-58a8631e"]]);
const AppHeaderLogo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_2$1
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "AppHeaderNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { navBottomLink: navBottomLink2 } = useContentHelpers();
    const { navigation } = useContent();
    const { config } = useDocus();
    const hasNavigation = computed(() => {
      var _a2;
      return !!((_a2 = config.value.aside) == null ? void 0 : _a2.level);
    });
    const filtered = computed(() => {
      var _a2;
      return ((_a2 = config.value.header) == null ? void 0 : _a2.exclude) || [];
    });
    const tree = computed(() => {
      return (navigation.value || []).filter((item) => {
        if (filtered.value.includes(item._path)) {
          return false;
        }
        return true;
      });
    });
    const isActive = (link) => link.exact ? route.fullPath === link._path : route.fullPath.startsWith(link._path);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$6;
      const _component_Icon = __nuxt_component_0$4;
      if (unref(hasNavigation)) {
        _push(`<nav${ssrRenderAttrs(_attrs)} data-v-4fab471c><ul data-v-4fab471c><!--[-->`);
        ssrRenderList(unref(tree), (link) => {
          _push(`<li data-v-4fab471c>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: ["link", { active: isActive(link) }],
            to: link.redirect ? link.redirect : unref(navBottomLink2)(link)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b, _c, _d;
              if (_push2) {
                if (link.icon && ((_b = (_a2 = unref(config)) == null ? void 0 : _a2.header) == null ? void 0 : _b.showLinkIcon)) {
                  _push2(ssrRenderComponent(_component_Icon, {
                    name: link.icon
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(` ${ssrInterpolate(link.title)}`);
              } else {
                return [
                  link.icon && ((_d = (_c = unref(config)) == null ? void 0 : _c.header) == null ? void 0 : _d.showLinkIcon) ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: link.icon
                  }, null, 8, ["name"])) : createCommentVNode("", true),
                  createTextVNode(" " + toDisplayString(link.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppHeaderNavigation.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-4fab471c"]]);
const AppHeaderNavigation = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_3
});
const useDocSearch = () => {
  const { $docSearch } = /* @__PURE__ */ useNuxtApp();
  if (!$docSearch) {
    return {
      hasDocSearch: ref(false)
    };
  }
  return $docSearch;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AppDocSearch",
  __ssrInlineRender: true,
  setup(__props) {
    useDocSearch();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$4;
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        "aria-label": "Search"
      }, _attrs))} data-v-67a6a092><span class="content" data-v-67a6a092>`);
      _push(ssrRenderComponent(_component_Icon, { name: "heroicons-outline:search" }, null, _parent));
      _push(`<span data-v-67a6a092>Search</span><span data-v-67a6a092><kbd data-v-67a6a092>⌘</kbd><kbd data-v-67a6a092>K</kbd></span></span></button>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppDocSearch.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-67a6a092"]]);
const AppDocSearch = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_4
});
const isDef = (val) => typeof val !== "undefined";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const noop = () => {
};
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, resolveUnref(interval));
  }
  if (immediate) {
    isPending.value = true;
  }
  tryOnScopeDispose(stop);
  return {
    isPending: readonly(isPending),
    start,
    stop
  };
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = void 0;
const defaultNavigator = void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a2;
      const el = unrefElement(target);
      if (((_a2 = window2.document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500,
    legacy = false
  } = options;
  const events = ["copy", "cut"];
  const isClipboardApiSupported = useSupported(() => navigator && "clipboard" in navigator);
  const isSupported = computed(() => isClipboardApiSupported.value || legacy);
  const text2 = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    if (isClipboardApiSupported.value) {
      navigator.clipboard.readText().then((value) => {
        text2.value = value;
      });
    } else {
      text2.value = legacyRead();
    }
  }
  if (isSupported.value && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  async function copy(value = resolveUnref(source)) {
    if (isSupported.value && value != null) {
      if (isClipboardApiSupported.value)
        await navigator.clipboard.writeText(value);
      else
        legacyCopy(value);
      text2.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  function legacyCopy(value) {
    const ta = document.createElement("textarea");
    ta.value = value != null ? value : "";
    ta.style.position = "absolute";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  function legacyRead() {
    var _a2, _b, _c;
    return (_c = (_b = (_a2 = document == null ? void 0 : document.getSelection) == null ? void 0 : _a2.call(document)) == null ? void 0 : _b.toString()) != null ? _c : "";
  }
  return {
    isSupported,
    text: text2,
    copied,
    copy
  };
}
function cloneFnJSON(source) {
  return JSON.parse(JSON.stringify(source));
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};
function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = noop
  } = options;
  const current = reactive(/* @__PURE__ */ new Set());
  const obj = {
    toJSON() {
      return {};
    },
    current
  };
  const refs = useReactive ? reactive(obj) : obj;
  const metaDeps = /* @__PURE__ */ new Set();
  const usedKeys = /* @__PURE__ */ new Set();
  function setRefs(key, value) {
    if (key in refs) {
      if (useReactive)
        refs[key] = value;
      else
        refs[key].value = value;
    }
  }
  function reset() {
    current.clear();
    for (const key of usedKeys)
      setRefs(key, false);
  }
  function updateRefs(e, value) {
    var _a2, _b;
    const key = (_a2 = e.key) == null ? void 0 : _a2.toLowerCase();
    const code = (_b = e.code) == null ? void 0 : _b.toLowerCase();
    const values = [code, key].filter(Boolean);
    if (key) {
      if (value)
        current.add(key);
      else
        current.delete(key);
    }
    for (const key2 of values) {
      usedKeys.add(key2);
      setRefs(key2, value);
    }
    if (key === "meta" && !value) {
      metaDeps.forEach((key2) => {
        current.delete(key2);
        setRefs(key2, false);
      });
      metaDeps.clear();
    } else if (typeof e.getModifierState === "function" && e.getModifierState("Meta") && value) {
      [...current, ...values].forEach((key2) => metaDeps.add(key2));
    }
  }
  useEventListener(target, "keydown", (e) => {
    updateRefs(e, true);
    return onEventFired(e);
  }, { passive });
  useEventListener(target, "keyup", (e) => {
    updateRefs(e, false);
    return onEventFired(e);
  }, { passive });
  useEventListener("blur", reset, { passive: true });
  useEventListener("focus", reset, { passive: true });
  const proxy = new Proxy(refs, {
    get(target2, prop, rec) {
      if (typeof prop !== "string")
        return Reflect.get(target2, prop, rec);
      prop = prop.toLowerCase();
      if (prop in aliasMap)
        prop = aliasMap[prop];
      if (!(prop in refs)) {
        if (/[+_-]/.test(prop)) {
          const keys = prop.split(/[+_-]/g).map((i) => i.trim());
          refs[prop] = computed(() => keys.every((key) => unref(proxy[key])));
        } else {
          refs[prop] = ref(false);
        }
      }
      const r = Reflect.get(target2, prop, rec);
      return useReactive ? unref(r) : r;
    }
  });
  return proxy;
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
function useVModel(props, key, emit, options = {}) {
  var _a2, _b, _c;
  const {
    clone = false,
    passive = false,
    eventName,
    deep = false,
    defaultValue
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a2 = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a2.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) {
    {
      key = "modelValue";
    }
  }
  event = eventName || event || `update:${key.toString()}`;
  const cloneFn = (val) => !clone ? val : isFunction(clone) ? clone(val) : cloneFnJSON(val);
  const getValue = () => isDef(props[key]) ? cloneFn(props[key]) : defaultValue;
  if (passive) {
    const initialValue = getValue();
    const proxy = ref(initialValue);
    watch(() => props[key], (v) => proxy.value = cloneFn(v));
    watch(proxy, (v) => {
      if (v !== props[key] || deep)
        _emit(event, v);
    }, { deep });
    return proxy;
  } else {
    return computed({
      get() {
        return getValue();
      },
      set(value) {
        _emit(event, value);
      }
    });
  }
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AppSearch",
  __ssrInlineRender: true,
  props: {
    fuse: {
      type: Object,
      default: () => ({
        fuseOptions: {
          keys: [
            "title",
            "description",
            "keywords",
            "body"
          ],
          ignoreLocation: true,
          threshold: 0,
          includeMatches: true,
          includeScore: true
        },
        matchAllWhenSearchEmpty: true
      })
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const q = ref("");
    const searchContentRef = ref();
    ref();
    ref();
    const selected = ref(-1);
    const show = ref(false);
    const { close, open } = useMenu();
    const { activate, deactivate } = useFocusTrap(searchContentRef);
    const { navigation } = useContent();
    const { meta_K, Escape } = useMagicKeys();
    const { data: files } = ([__temp, __restore] = withAsyncContext(() => useLazyAsyncData(
      "search-api",
      () => $fetch("/api/search", { parseResponse: JSON.parse })
    )), __temp = await __temp, __restore(), __temp);
    const { results } = useFuse(
      q,
      files,
      props.fuse
    );
    function findNavItem(children, path, parent) {
      for (const child of children) {
        if (child._path === path) {
          return {
            directoryTitle: parent.title,
            directoryIcon: parent.icon
          };
        }
        if (child.children) {
          const result = findNavItem(child.children, path, child);
          if (result) {
            return result;
          }
        }
      }
      return void 0;
    }
    function getNavItemMeta(path) {
      let result;
      for (const item of navigation.value) {
        if (item.children) {
          const found = findNavItem(item.children, path, item);
          if (found) {
            result = found;
          }
        }
      }
      return result;
    }
    function highlight(text2, result) {
      const { indices, value } = result || { indices: [], value: "" };
      if (text2 === value)
        return "";
      let content = "";
      let nextUnhighlightedIndiceStartingIndex = 0;
      indices.forEach((indice) => {
        const lastIndiceNextIndex = indice[1] + 1;
        const isMatched = lastIndiceNextIndex - indice[0] >= q.value.length;
        content += [
          value.substring(nextUnhighlightedIndiceStartingIndex, indice[0]),
          isMatched && "<mark>",
          value.substring(indice[0], lastIndiceNextIndex),
          isMatched && "</mark>"
        ].filter(Boolean).join("");
        nextUnhighlightedIndiceStartingIndex = lastIndiceNextIndex;
      });
      content += value.substring(nextUnhighlightedIndiceStartingIndex);
      const index = content.indexOf("<mark>");
      if (index > 60) {
        content = `${content.substring(index - 60)}`;
      }
      return `${content}”`;
    }
    watch(selected, (value) => {
      var _a2, _b, _c, _d;
      const nextId = (_c = (_b = (_a2 = results == null ? void 0 : results.value) == null ? void 0 : _a2[value]) == null ? void 0 : _b.item) == null ? void 0 : _c.id;
      if (nextId)
        (_d = document.querySelector(`[id="${nextId}"]`)) == null ? void 0 : _d.scrollIntoView({ block: "nearest" });
    });
    watch(
      q,
      (_) => {
        selected.value = 0;
      }
    );
    watch(show, (value) => {
      if (!value) {
        q.value = "";
        selected.value = -1;
        deactivate();
        close();
      } else {
        open();
        nextTick(() => {
          activate();
        });
      }
    });
    watch(meta_K, (v) => {
      if (v) {
        show.value = !show.value;
      }
    });
    watch(Escape, () => {
      if (show.value)
        show.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$4;
      _push(`<!--[--><button type="button" aria-label="Search" data-v-98e4ee4b><span class="content" data-v-98e4ee4b>`);
      _push(ssrRenderComponent(_component_Icon, { name: "heroicons-outline:search" }, null, _parent));
      _push(`<span data-v-98e4ee4b>Search</span><span data-v-98e4ee4b><kbd data-v-98e4ee4b>⌘</kbd><kbd data-v-98e4ee4b>K</kbd></span></span></button>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(show)) {
          _push2(`<div class="search-content" data-v-98e4ee4b><div class="search-window" data-v-98e4ee4b><div class="search-input" data-v-98e4ee4b>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "heroicons-outline:search",
            class: "search-icon"
          }, null, _parent));
          _push2(`<input${ssrRenderAttr("value", unref(q))} type="text" placeholder="Search documentation" data-v-98e4ee4b><button class="close-button" data-v-98e4ee4b>`);
          _push2(ssrRenderComponent(_component_Icon, {
            name: "heroicons:x-mark",
            class: "close-icon"
          }, null, _parent));
          _push2(`</button></div>`);
          if (unref(results).length > 0) {
            _push2(`<div class="search-results" data-v-98e4ee4b><!--[-->`);
            ssrRenderList(unref(results), (result, i) => {
              var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
              _push2(`<div${ssrRenderAttr("id", result.item.id)} class="${ssrRenderClass([{ selected: unref(selected) === i }, "search-result"])}" data-v-98e4ee4b><div class="search-result-content-wrapper" data-v-98e4ee4b><div class="search-result-content-head" data-v-98e4ee4b>`);
              if ((_b = getNavItemMeta((_a2 = result == null ? void 0 : result.item) == null ? void 0 : _a2.path)) == null ? void 0 : _b.directoryIcon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: (_d = getNavItemMeta((_c = result == null ? void 0 : result.item) == null ? void 0 : _c.path)) == null ? void 0 : _d.directoryIcon
                }, null, _parent));
              } else {
                _push2(ssrRenderComponent(_component_Icon, { name: "solar:documents-bold-duotone" }, null, _parent));
              }
              if ((_f = getNavItemMeta((_e = result == null ? void 0 : result.item) == null ? void 0 : _e.path)) == null ? void 0 : _f.directoryTitle) {
                _push2(`<span data-v-98e4ee4b>${ssrInterpolate((_h = getNavItemMeta((_g = result == null ? void 0 : result.item) == null ? void 0 : _g.path)) == null ? void 0 : _h.directoryTitle)} <span class="arrow" data-v-98e4ee4b>${`→`}</span></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span data-v-98e4ee4b>${ssrInterpolate(result.item.title)}</span></div>`);
              if ((_i = result == null ? void 0 : result.matches) == null ? void 0 : _i[0]) {
                _push2(`<p class="search-result-content-preview" data-v-98e4ee4b><span data-v-98e4ee4b>“</span><span data-v-98e4ee4b>${`${highlight(unref(q), (_j = result == null ? void 0 : result.matches) == null ? void 0 : _j[0])}`}</span><span data-v-98e4ee4b>“</span></p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else if (!unref(q)) {
            _push2(`<div class="search-results empty" data-v-98e4ee4b> Type your query to search docs </div>`);
          } else {
            _push2(`<div class="search-results empty" data-v-98e4ee4b> No results found. Try another query </div>`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppSearch.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-98e4ee4b"]]);
const AppSearch = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_5
});
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a2;
    return props ? h(component, props, slots) : (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
  } };
};
const __nuxt_component_0$2 = /* @__PURE__ */ defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a2;
      if (mounted.value) {
        return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$7 = {
  name: componentName,
  props: {
    placeholder: String,
    tag: {
      type: String,
      default: "span"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_ClientOnly, mergeProps({
    placeholder: $props.placeholder,
    "placeholder-tag": $props.tag
  }, _attrs), {}, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ThemeSelect",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ColorScheme = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$4;
      _push(`<button${ssrRenderAttrs(mergeProps({ "aria-label": "Color Mode" }, _attrs))} data-v-87324333>`);
      _push(ssrRenderComponent(_component_ColorScheme, { placeholder: "..." }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(colorMode).preference === "dark") {
              _push2(ssrRenderComponent(_component_Icon, { name: "uil:moon" }, null, _parent2, _scopeId));
            } else if (unref(colorMode).preference === "light") {
              _push2(ssrRenderComponent(_component_Icon, { name: "uil:sun" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Icon, { name: "uil:desktop" }, null, _parent2, _scopeId));
            }
          } else {
            return [
              unref(colorMode).preference === "dark" ? (openBlock(), createBlock(_component_Icon, {
                key: 0,
                name: "uil:moon"
              })) : unref(colorMode).preference === "light" ? (openBlock(), createBlock(_component_Icon, {
                key: 1,
                name: "uil:sun"
              })) : (openBlock(), createBlock(_component_Icon, {
                key: 2,
                name: "uil:desktop"
              }))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/ThemeSelect.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-87324333"]]);
const ThemeSelect = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_6
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {},
  setup(__props) {
    const { config } = useDocus();
    const { navigation } = useContent();
    const { hasDocSearch } = useDocSearch();
    const hasDialog = computed(() => {
      var _a2, _b, _c, _d;
      return ((_a2 = navigation.value) == null ? void 0 : _a2.length) > 1 || ((_d = (_c = (_b = navigation.value) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) == null ? void 0 : _d.length);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      const _component_Container = __nuxt_component_0$5;
      const _component_AppHeaderDialog = __nuxt_component_1$3;
      const _component_AppHeaderLogo = __nuxt_component_2$1;
      const _component_AppHeaderNavigation = __nuxt_component_3;
      const _component_AppDocSearch = __nuxt_component_4;
      const _component_AppSearch = __nuxt_component_5;
      const _component_ThemeSelect = __nuxt_component_6;
      const _component_AppSocialIcons = __nuxt_component_3$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: { "has-dialog": unref(hasDialog) }
      }, _attrs))} data-v-f465a985>`);
      _push(ssrRenderComponent(_component_Container, {
        fluid: (_b = (_a2 = unref(config)) == null ? void 0 : _a2.header) == null ? void 0 : _b.fluid
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section left" data-v-f465a985${_scopeId}>`);
            if (unref(hasDialog)) {
              _push2(ssrRenderComponent(_component_AppHeaderDialog, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_AppHeaderLogo, null, null, _parent2, _scopeId));
            _push2(`</div><div class="section center" data-v-f465a985${_scopeId}>`);
            if (unref(hasDialog)) {
              _push2(ssrRenderComponent(_component_AppHeaderLogo, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_AppHeaderNavigation, null, null, _parent2, _scopeId));
            _push2(`</div><div class="section right" data-v-f465a985${_scopeId}>`);
            if (unref(hasDocSearch)) {
              _push2(ssrRenderComponent(_component_AppDocSearch, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_AppSearch, {
                fuse: unref(config).fuse
              }, null, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_ThemeSelect, null, null, _parent2, _scopeId));
            _push2(`<div class="social-icons" data-v-f465a985${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppSocialIcons, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "section left" }, [
                unref(hasDialog) ? (openBlock(), createBlock(_component_AppHeaderDialog, { key: 0 })) : createCommentVNode("", true),
                createVNode(_component_AppHeaderLogo)
              ]),
              createVNode("div", { class: "section center" }, [
                unref(hasDialog) ? (openBlock(), createBlock(_component_AppHeaderLogo, { key: 0 })) : createCommentVNode("", true),
                createVNode(_component_AppHeaderNavigation)
              ]),
              createVNode("div", { class: "section right" }, [
                unref(hasDocSearch) ? (openBlock(), createBlock(_component_AppDocSearch, { key: 0 })) : (openBlock(), createBlock(_component_AppSearch, {
                  key: 1,
                  fuse: unref(config).fuse
                }, null, 8, ["fuse"])),
                createVNode(_component_ThemeSelect),
                createVNode("div", { class: "social-icons" }, [
                  createVNode(_component_AppSocialIcons)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f465a985"]]);
const AppHeader = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1$1
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useDocus();
    const socialIcons = ref(null);
    const icons = computed(() => {
      var _a2, _b;
      return ((_b = (_a2 = config.value) == null ? void 0 : _a2.footer) == null ? void 0 : _b.iconLinks) || [];
    });
    const textLinks = computed(() => {
      var _a2, _b;
      return ((_b = (_a2 = config.value) == null ? void 0 : _a2.footer) == null ? void 0 : _b.textLinks) || [];
    });
    const socialIconsCount = computed(() => {
      var _a2;
      return Object.entries(((_a2 = config.value) == null ? void 0 : _a2.socials) || {}).filter(([, v]) => v).length;
    });
    const nbSocialIcons = computed(() => socialIcons.value ? socialIconsCount.value : 0);
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b;
      const _component_Container = __nuxt_component_0$5;
      const _component_Icon = __nuxt_component_0$4;
      const _component_NuxtLink = __nuxt_component_0$6;
      const _component_AppSocialIcons = __nuxt_component_3$1;
      _push(`<footer${ssrRenderAttrs(_attrs)} data-v-39bdaab3>`);
      _push(ssrRenderComponent(_component_Container, {
        fluid: (_b = (_a2 = unref(config)) == null ? void 0 : _a2.footer) == null ? void 0 : _b.fluid,
        padded: "",
        class: "footer-container"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
          if (_push2) {
            _push2(`<div class="left" data-v-39bdaab3${_scopeId}>`);
            if ((_b2 = (_a3 = unref(config)) == null ? void 0 : _a3.footer) == null ? void 0 : _b2.credits) {
              _push2(`<a${ssrRenderAttr("href", ((_e = (_d = (_c = unref(config)) == null ? void 0 : _c.footer) == null ? void 0 : _d.credits) == null ? void 0 : _e.href) || "#")} rel="noopener" target="_blank" data-v-39bdaab3${_scopeId}>`);
              if ((_h = (_g = (_f = unref(config)) == null ? void 0 : _f.footer) == null ? void 0 : _g.credits) == null ? void 0 : _h.icon) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: (_k = (_j = (_i = unref(config)) == null ? void 0 : _i.footer) == null ? void 0 : _j.credits) == null ? void 0 : _k.icon,
                  class: "left-icon"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if ((_n = (_m = (_l = unref(config)) == null ? void 0 : _l.footer) == null ? void 0 : _m.credits) == null ? void 0 : _n.text) {
                _push2(`<p data-v-39bdaab3${_scopeId}>${ssrInterpolate(unref(config).footer.credits.text)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</a>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="center" data-v-39bdaab3${_scopeId}><!--[-->`);
            ssrRenderList(unref(textLinks), (link) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: link.href,
                class: "text-link",
                "aria-label": link.text,
                href: link.href,
                target: (link == null ? void 0 : link.target) || "_self",
                rel: (link == null ? void 0 : link.rel) || "noopener noreferrer"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(link.text)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(link.text), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="right" data-v-39bdaab3${_scopeId}><!--[-->`);
            ssrRenderList(unref(icons).slice(0, 6 - unref(nbSocialIcons)), (icon) => {
              _push2(`<a class="icon-link"${ssrRenderAttr("aria-label", icon.label)}${ssrRenderAttr("href", icon.href)} target="_blank"${ssrRenderAttr("rel", (icon == null ? void 0 : icon.rel) || "noopener noreferrer")} data-v-39bdaab3${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: icon.icon
              }, null, _parent2, _scopeId));
              _push2(`</a>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_component_AppSocialIcons, {
              ref_key: "socialIcons",
              ref: socialIcons
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "left" }, [
                ((_p = (_o = unref(config)) == null ? void 0 : _o.footer) == null ? void 0 : _p.credits) ? (openBlock(), createBlock("a", {
                  key: 0,
                  href: ((_s = (_r = (_q = unref(config)) == null ? void 0 : _q.footer) == null ? void 0 : _r.credits) == null ? void 0 : _s.href) || "#",
                  rel: "noopener",
                  target: "_blank"
                }, [
                  ((_v = (_u = (_t = unref(config)) == null ? void 0 : _t.footer) == null ? void 0 : _u.credits) == null ? void 0 : _v.icon) ? (openBlock(), createBlock(_component_Icon, {
                    key: 0,
                    name: (_y = (_x = (_w = unref(config)) == null ? void 0 : _w.footer) == null ? void 0 : _x.credits) == null ? void 0 : _y.icon,
                    class: "left-icon"
                  }, null, 8, ["name"])) : createCommentVNode("", true),
                  ((_B = (_A = (_z = unref(config)) == null ? void 0 : _z.footer) == null ? void 0 : _A.credits) == null ? void 0 : _B.text) ? (openBlock(), createBlock("p", { key: 1 }, toDisplayString(unref(config).footer.credits.text), 1)) : createCommentVNode("", true)
                ], 8, ["href"])) : createCommentVNode("", true)
              ]),
              createVNode("div", { class: "center" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(textLinks), (link) => {
                  return openBlock(), createBlock(_component_NuxtLink, {
                    key: link.href,
                    class: "text-link",
                    "aria-label": link.text,
                    href: link.href,
                    target: (link == null ? void 0 : link.target) || "_self",
                    rel: (link == null ? void 0 : link.rel) || "noopener noreferrer"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(link.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["aria-label", "href", "target", "rel"]);
                }), 128))
              ]),
              createVNode("div", { class: "right" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(icons).slice(0, 6 - unref(nbSocialIcons)), (icon) => {
                  return openBlock(), createBlock("a", {
                    key: icon.label,
                    class: "icon-link",
                    "aria-label": icon.label,
                    href: icon.href,
                    target: "_blank",
                    rel: (icon == null ? void 0 : icon.rel) || "noopener noreferrer"
                  }, [
                    createVNode(_component_Icon, {
                      name: icon.icon
                    }, null, 8, ["name"])
                  ], 8, ["aria-label", "href", "rel"]);
                }), 128)),
                createVNode(_component_AppSocialIcons, {
                  ref_key: "socialIcons",
                  ref: socialIcons
                }, null, 512)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppFooter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-39bdaab3"]]);
const AppFooter = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_2
});
const useContentHead = (_content, to = useRoute()) => {
  const content = unref(_content);
  const config = /* @__PURE__ */ useRuntimeConfig();
  const refreshHead = (data = content) => {
    if (!to.path || !data) {
      return;
    }
    const head = Object.assign({}, (data == null ? void 0 : data.head) || {});
    head.meta = [...head.meta || []];
    head.link = [...head.link || []];
    const title = head.title || (data == null ? void 0 : data.title);
    if (title) {
      head.title = title;
      if (!head.meta.some((m) => m.property === "og:title")) {
        head.meta.push({
          property: "og:title",
          content: title
        });
      }
    }
    const host = config.public.content.host;
    if (host) {
      const _url = joinURL(host ?? "/", config.app.baseURL, to.fullPath);
      const url = config.public.content.trailingSlash ? withTrailingSlash(_url) : withoutTrailingSlash(_url);
      if (!head.meta.some((m) => m.property === "og:url")) {
        head.meta.push({
          property: "og:url",
          content: url
        });
      }
      if (!head.link.some((m) => m.rel === "canonical")) {
        head.link.push({
          rel: "canonical",
          href: url
        });
      }
    }
    const description = (head == null ? void 0 : head.description) || (data == null ? void 0 : data.description);
    if (description && head.meta.filter((m) => m.name === "description").length === 0) {
      head.meta.push({
        name: "description",
        content: description
      });
    }
    if (description && !head.meta.some((m) => m.property === "og:description")) {
      head.meta.push({
        property: "og:description",
        content: description
      });
    }
    const image = (head == null ? void 0 : head.image) || (data == null ? void 0 : data.image);
    if (image && head.meta.filter((m) => m.property === "og:image").length === 0) {
      if (typeof image === "string") {
        head.meta.push({
          property: "og:image",
          // @ts-ignore - We expect `head.image` from Nuxt configurations...
          content: host && !hasProtocol(image) ? new URL(joinURL(config.app.baseURL, image), host).href : image
        });
      }
      if (typeof image === "object") {
        const imageKeys = [
          "src",
          "secure_url",
          "type",
          "width",
          "height",
          "alt"
        ];
        for (const key of imageKeys) {
          if (key === "src" && image.src) {
            const isAbsoluteURL = hasProtocol(image.src);
            const imageURL = isAbsoluteURL ? image.src : joinURL(config.app.baseURL, image.src ?? "/");
            head.meta.push({
              property: "og:image",
              content: host && !isAbsoluteURL ? new URL(imageURL, host).href : imageURL
            });
          } else if (image[key]) {
            head.meta.push({
              property: `og:image:${key}`,
              content: image[key]
            });
          }
        }
      }
    }
    {
      useHead(head);
    }
  };
  watch(() => unref(_content), refreshHead, { immediate: true });
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const { config } = useDocus();
    useHead({
      titleTemplate: config.value.titleTemplate,
      meta: [
        { name: "twitter:card", content: "summary_large_image" }
      ]
    });
    watch(
      () => config.value.titleTemplate,
      () => useHead({ titleTemplate: config.value.titleTemplate })
    );
    useContentHead(config.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppLoadingBar = _sfc_main$i;
      const _component_AppHeader = __nuxt_component_1$1;
      const _component_AppFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-layout" }, _attrs))} data-v-5c2f7786>`);
      _push(ssrRenderComponent(_component_AppLoadingBar, null, null, _parent));
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main data-v-5c2f7786>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/components/app/AppLayout.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5c2f7786"]]);
const AppLayout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_0
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a2;
    return ((_a2 = route.params[r.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a2;
    return ((_a2 = m.components) == null ? void 0 : _a2.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const RouteProvider = /* @__PURE__ */ defineComponent({
  name: "RouteProvider",
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_1 = /* @__PURE__ */ defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, {
                // @ts-expect-error seems to be an issue in vue types
                default: () => h(RouteProvider, {
                  key,
                  vnode: routeProps.Component,
                  route: routeProps.route,
                  renderKey: key,
                  trackRootNodes: hasTransition,
                  vnodeRef: pageRef
                })
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_AppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt-themes/docus/app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    (_error.stack || "").split("\n").splice(1).map((line) => {
      const text2 = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text: text2,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-404-f35a2418.mjs').then((r) => r.default || r));
    const _Error = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/error-500-04206157.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = /* @__PURE__ */ defineAsyncComponent(() => import('./_nuxt/island-renderer-3439d61d.mjs').then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { useColorMode as A, useVModel as B, usePinceauTheme as C, queryContent as D, fetchContentNavigation as E, get$1 as F, assertArray as G, ensureArray as H, omit as I, sortList as J, apply as K, LayoutMetaSymbol as L, withoutKeys as M, withKeys as N, createQuery as O, PageRouteSymbol as P, _export_sfc as _, __nuxt_component_0$6 as a, useRoute as b, createError as c, appLayoutTransition as d, entry$1 as default, _wrapIf as e, useNuxtApp as f, useRuntimeConfig as g, useContent as h, useRequestEvent as i, useContentHead as j, usePinceauRuntime as k, layouts as l, useContentPreview as m, computedStyle as n, __nuxt_component_0$4 as o, useDocus as p, __nuxt_component_0$3 as q, useAppConfig as r, useState as s, __nuxt_component_0$5 as t, useHead as u, useContentHelpers as v, useRouter as w, useClipboard as x, onClickOutside as y, useAsyncData as z };
//# sourceMappingURL=server.mjs.map
