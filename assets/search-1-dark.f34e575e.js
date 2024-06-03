var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { d as defineComponent, U as useI18n, F as useRoute, h as computed, m as resolveComponent, o as openBlock, b as createElementBlock, x as createBlock, t as withCtx, y as createCommentVNode, f as createBaseVNode, s as createVNode, z as createTextVNode, n as normalizeClass, v as unref, K as Fragment, J as renderList, A as toDisplayString } from "./vendor.11f8b2c5.js";
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Gehe zu Seite ", _interpolate(_named("page"))]);
        }
      },
      "en": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Goto page ", _interpolate(_named("page"))]);
        }
      },
      "es-MX": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Ir a la p\xE1gina ", _interpolate(_named("page"))]);
        }
      },
      "es": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Ir a la p\xE1gina ", _interpolate(_named("page"))]);
        }
      },
      "fr": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Aller \xE0 la page ", _interpolate(_named("page"))]);
        }
      },
      "zh-CN": {
        "goto-page-title": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["\u8F6C\u5230\u7B2C", _interpolate(_named("page")), "\u9875"]);
        }
      }
    }
  });
}
const _hoisted_1 = {
  role: "navigation",
  class: "flex-pagination pagination is-rounded",
  "aria-label": "pagination",
  "data-filter-hide": ""
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-left"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_4 = { class: "pagination-list" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "pagination-ellipsis" }, "\u2026", -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = { key: 1 };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "pagination-ellipsis" }, "\u2026", -1);
const _hoisted_10 = [
  _hoisted_9
];
const _sfc_main = defineComponent({
  __name: "VFlexPagination",
  props: {
    itemPerPage: {},
    totalItems: {},
    currentPage: { default: 1 },
    maxLinksDisplayed: { default: 4 }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const route = useRoute();
    const lastPage = computed(() => Math.ceil(props.totalItems / props.itemPerPage) || 1);
    const totalPageDisplayed = computed(() => lastPage.value > props.maxLinksDisplayed - 2 ? props.maxLinksDisplayed - 2 : lastPage.value);
    const pages = computed(() => {
      const _pages = [];
      let firstButton = props.currentPage - Math.floor(totalPageDisplayed.value / 2);
      let lastButton = firstButton + (totalPageDisplayed.value - Math.ceil(totalPageDisplayed.value % 2));
      if (firstButton < 1) {
        firstButton = 1;
        lastButton = firstButton + (totalPageDisplayed.value - 1);
      }
      if (lastButton > lastPage.value) {
        lastButton = lastPage.value;
        firstButton = lastButton - (totalPageDisplayed.value - 1);
      }
      for (let page = firstButton; page <= lastButton; page += 1) {
        if (page === firstButton || page === lastButton) {
          continue;
        }
        _pages.push(page);
      }
      return _pages;
    });
    computed(() => pages.value[0] > 1);
    computed(() => pages.value[pages.value.length - 1] < lastPage.value);
    const paginatedLink = (page = 1) => {
      const _page = Math.min(page, lastPage.value);
      const query = __spreadProps(__spreadValues({}, route.query), {
        page: _page <= 1 ? void 0 : _page
      });
      return {
        name: route.name,
        params: route.params,
        query
      };
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("nav", _hoisted_1, [
        lastPage.value > 1 ? (openBlock(), createBlock(_component_RouterLink, {
          key: 0,
          to: paginatedLink(_ctx.currentPage - 1),
          class: "pagination-previous has-chevron"
        }, {
          default: withCtx(() => [
            _hoisted_2
          ]),
          _: 1
        }, 8, ["to"])) : createCommentVNode("", true),
        lastPage.value > 1 ? (openBlock(), createBlock(_component_RouterLink, {
          key: 1,
          to: paginatedLink(_ctx.currentPage + 1),
          class: "pagination-next has-chevron"
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }, 8, ["to"])) : createCommentVNode("", true),
        createBaseVNode("ul", _hoisted_4, [
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, {
              to: paginatedLink(1),
              class: normalizeClass(["pagination-link", [_ctx.currentPage === 1 && "is-current"]]),
              "aria-label": unref(t)("goto-page-title", { page: 1 })
            }, {
              default: withCtx(() => [
                createTextVNode(" 1 ")
              ]),
              _: 1
            }, 8, ["to", "aria-label", "class"])
          ]),
          pages.value.length === 0 || pages.value[0] > 2 ? (openBlock(), createElementBlock("li", _hoisted_5, _hoisted_7)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(pages.value, (page) => {
            return openBlock(), createElementBlock("li", { key: page }, [
              createVNode(_component_RouterLink, {
                to: paginatedLink(page),
                class: normalizeClass(["pagination-link", [_ctx.currentPage === page && "is-current"]]),
                "aria-label": unref(t)("goto-page-title", { page }),
                "aria-current": _ctx.currentPage === page ? "page" : void 0
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(page), 1)
                ]),
                _: 2
              }, 1032, ["to", "aria-label", "aria-current", "class"])
            ]);
          }), 128)),
          pages.value[pages.value.length - 1] < lastPage.value - 1 ? (openBlock(), createElementBlock("li", _hoisted_8, _hoisted_10)) : createCommentVNode("", true),
          createBaseVNode("li", null, [
            createVNode(_component_RouterLink, {
              to: paginatedLink(lastPage.value),
              class: normalizeClass(["pagination-link", [_ctx.currentPage === lastPage.value && "is-current"]]),
              "aria-label": unref(t)("goto-page-title", { page: lastPage.value })
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(lastPage.value), 1)
              ]),
              _: 1
            }, 8, ["to", "aria-label", "class"])
          ])
        ])
      ]);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
var _imports_0 = "/assets/search-1.4ee24cfe.svg";
var _imports_1 = "/assets/search-1-dark.6a09ff7e.svg";
export { _imports_0 as _, _imports_1 as a, _sfc_main as b };
