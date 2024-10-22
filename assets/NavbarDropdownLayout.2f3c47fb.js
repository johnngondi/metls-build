import { c as __unplugin_components_0 } from "./index.256f70c3.js";
import { a as activePanel, _ as _sfc_main$1, b as _sfc_main$2, c as _sfc_main$3, d as _sfc_main$4, e as _sfc_main$5, f as _sfc_main$6 } from "./activePanelState.bc2a93b3.js";
import { _ as _sfc_main$7 } from "./Navbar.fefeaebe.js";
import { d as defineComponent, F as useRoute, r as ref, h as computed, a7 as watch, m as resolveComponent, ag as resolveDirective, ah as withDirectives, v as unref, o as openBlock, b as createElementBlock, s as createVNode, t as withCtx, f as createBaseVNode, A as toDisplayString, n as normalizeClass, B as renderSlot } from "./vendor.11f8b2c5.js";
import { p as pageTitle } from "./navbarLayoutState.eee24dfa.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
import "./VDropdown.bd118128.js";
import "./VIcon.580f0211.js";
import "./useAppNotification.a15d8d78.js";
import "./VAvatar.c1fa75a5.js";
const _hoisted_1 = ["element-loading-text"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1);
const _hoisted_3 = { class: "brand-end" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:home"
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:book"
}, null, -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_7 = { class: "title is-5" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", null, "Home", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, "My Applications", -1);
const _hoisted_12 = { class: "view-wrapper has-top-nav" };
const _hoisted_13 = { class: "page-content-wrapper" };
const _hoisted_14 = {
  key: 1,
  class: "page-content is-relative"
};
const _hoisted_15 = { class: "is-navbar-lg" };
const _hoisted_16 = { class: "page-title has-text-centered" };
const _hoisted_17 = { class: "title-wrap" };
const _hoisted_18 = { class: "title is-4" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_20 = [
  _hoisted_19
];
const _sfc_main = defineComponent({
  __name: "NavbarDropdownLayout",
  props: {
    theme: { default: "default" },
    nowrap: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const appName = "METLS";
    const route = useRoute();
    const displaySearch = ref(false);
    const isMobileSidebarOpen = ref(false);
    ref("dashboard");
    const filter = ref("");
    computed(() => {
      if (!filter.value) {
        return [];
      }
      return [];
    });
    pageTitle.value = `${appName}`;
    watch(() => route.fullPath, () => {
      isMobileSidebarOpen.value = false;
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_NotificationsMobileDropdown = _sfc_main$1;
      const _component_UserProfileDropdown = _sfc_main$2;
      const _component_MobileNavbar = _sfc_main$3;
      const _component_MobileSidebar = _sfc_main$4;
      const _component_ToolbarNotification = _sfc_main$5;
      const _component_Toolbar = _sfc_main$6;
      const _component_Navbar = _sfc_main$7;
      const _directive_loading = resolveDirective("loading");
      return withDirectives((openBlock(), createElementBlock("div", {
        "element-loading-text": unref(loadingText),
        class: "navbar-layout"
      }, [
        _hoisted_2,
        createVNode(_component_MobileNavbar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[0] || (_cache[0] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          brand: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "home" },
              class: "navbar-item is-brand"
            }, {
              default: withCtx(() => [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_NotificationsMobileDropdown),
              createVNode(_component_UserProfileDropdown)
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_MobileSidebar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[1] || (_cache[1] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "home" } }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "home-my-applications" } }, {
                default: withCtx(() => [
                  _hoisted_5
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_Navbar, {
          theme: props.theme
        }, {
          title: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "home" },
              class: "brand"
            }, {
              default: withCtx(() => [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _: 1
            }),
            _hoisted_6,
            createBaseVNode("h1", _hoisted_7, toDisplayString(unref(pageTitle)), 1)
          ]),
          toolbar: withCtx(() => [
            createVNode(_component_Toolbar, { class: "desktop-toolbar" }, {
              default: withCtx(() => [
                createVNode(_component_ToolbarNotification),
                createBaseVNode("a", {
                  class: "toolbar-link right-panel-trigger",
                  onClick: _cache[2] || (_cache[2] = ($event) => activePanel.value = "activity")
                }, _hoisted_9)
              ]),
              _: 1
            }),
            createVNode(_component_UserProfileDropdown, { right: true })
          ]),
          links: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(["centered-drops", [displaySearch.value && "is-hidden"]])
            }, [
              createVNode(_component_RouterLink, {
                to: { name: "home" },
                class: "centered-drop"
              }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              }),
              createVNode(_component_RouterLink, {
                to: { name: "home-my-applications" },
                class: "centered-drop"
              }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ], 2)
          ]),
          _: 1
        }, 8, ["theme"]),
        createBaseVNode("div", _hoisted_12, [
          createBaseVNode("div", _hoisted_13, [
            props.nowrap ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("h1", _hoisted_18, toDisplayString(unref(pageTitle)), 1)
                  ]),
                  createVNode(_component_Toolbar, { class: "mobile-toolbar" }, {
                    default: withCtx(() => [
                      createVNode(_component_ToolbarNotification),
                      createBaseVNode("a", {
                        class: "toolbar-link right-panel-trigger",
                        onClick: _cache[3] || (_cache[3] = ($event) => activePanel.value = "activity")
                      }, _hoisted_20)
                    ]),
                    _: 1
                  })
                ]),
                renderSlot(_ctx.$slots, "default")
              ])
            ]))
          ])
        ])
      ], 8, _hoisted_1)), [
        [
          _directive_loading,
          unref(isLoading),
          void 0,
          {
            fullscreen: true,
            lock: true
          }
        ]
      ]);
    };
  }
});
export { _sfc_main as default };
