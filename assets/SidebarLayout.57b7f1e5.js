import { a as useAuthorize, c as __unplugin_components_0 } from "./index.4ea6d167.js";
import { a as activePanel, _ as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6, d as _sfc_main$7, e as _sfc_main$8, f as _sfc_main$9 } from "./activePanelState.49edee4b.js";
import { d as defineComponent, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, v as unref, s as createVNode, t as withCtx, z as createTextVNode, y as createCommentVNode, h as computed, B as renderSlot, n as normalizeClass, F as useRoute, r as ref, af as watchPostEffect, a7 as watch, ag as resolveDirective, ah as withDirectives, x as createBlock, W as Transition, A as toDisplayString } from "./vendor.11f8b2c5.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
import "./VDropdown.dd19268e.js";
import "./VIcon.580f0211.js";
import "./useAppNotification.a2443950.js";
import "./VAvatar.c1fa75a5.js";
var UsersMobileSubsidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "mobile-subsidebar" };
const _hoisted_2$3 = { class: "inner" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("div", { class: "sidebar-title" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "User Management")
], -1);
const _hoisted_4$3 = {
  class: "submenu",
  "data-simplebar": ""
};
const _hoisted_5$3 = { key: 0 };
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-users pr-2"
}, null, -1);
const _hoisted_7$2 = { key: 1 };
const _hoisted_8$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-block-user pr-2"
}, null, -1);
const _hoisted_9$2 = { key: 2 };
const _hoisted_10$2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user pr-2"
}, null, -1);
const _sfc_main$3 = defineComponent({
  __name: "UsersMobileSubsidebar",
  setup(__props) {
    const { hasAccess } = useAuthorize();
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          _hoisted_3$3,
          createBaseVNode("ul", _hoisted_4$3, [
            unref(hasAccess)("manage users") ? (openBlock(), createElementBlock("li", _hoisted_5$3, [
              createVNode(_component_RouterLink, { to: { name: "user-group" } }, {
                default: withCtx(() => [
                  _hoisted_6$2,
                  createTextVNode(" User Groups ")
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage roles") ? (openBlock(), createElementBlock("li", _hoisted_7$2, [
              createVNode(_component_RouterLink, { to: { name: "user-role" } }, {
                default: withCtx(() => [
                  _hoisted_8$2,
                  createTextVNode(" Roles ")
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage users") ? (openBlock(), createElementBlock("li", _hoisted_9$2, [
              createVNode(_component_RouterLink, { to: { name: "user" } }, {
                default: withCtx(() => [
                  _hoisted_10$2,
                  createTextVNode(" Users ")
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
var Sidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "sidebar-brand" };
const _hoisted_2$2 = { class: "sidebar-inner" };
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "naver" }, null, -1);
const _hoisted_4$2 = { class: "icon-menu has-slimscroll" };
const _hoisted_5$2 = { class: "bottom-menu" };
const _sfc_main$2 = defineComponent({
  __name: "Sidebar",
  props: {
    theme: { default: "default" },
    isOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const themeClasses = computed(() => {
      switch (props.theme) {
        case "color":
          return "is-colored";
        case "labels":
          return "has-labels";
        case "labels-hover":
          return "has-labels-hover";
        case "float":
          return !props.isOpen ? "is-float" : "is-float is-bordered";
        case "curved":
          return !props.isOpen ? "is-curved" : "";
        case "color-curved":
          return !props.isOpen ? "is-colored is-curved" : "is-colored";
        default:
          return "";
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["main-sidebar", [themeClasses.value]])
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createVNode(_component_RouterLink, { to: { name: "index" } }, {
            default: withCtx(() => [
              createVNode(_component_AnimatedLogo, { width: "36px" })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_2$2, [
          _hoisted_3$2,
          createBaseVNode("ul", _hoisted_4$2, [
            renderSlot(_ctx.$slots, "links")
          ]),
          createBaseVNode("ul", _hoisted_5$2, [
            renderSlot(_ctx.$slots, "bottom-links")
          ])
        ])
      ], 2);
    };
  }
});
var UsersSubsidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "sidebar-panel is-generic" };
const _hoisted_2$1 = { class: "subpanel-header" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("h3", { class: "no-mb" }, "User Management", -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_4$1
];
const _hoisted_6$1 = {
  class: "inner",
  "data-simplebar": ""
};
const _hoisted_7$1 = { key: 0 };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnir lnir-users pr-2"
}, null, -1);
const _hoisted_9$1 = { key: 1 };
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-block-user pr-2"
}, null, -1);
const _hoisted_11$1 = { key: 2 };
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "lnil lnil-user pr-2"
}, null, -1);
const _sfc_main$1 = defineComponent({
  __name: "UsersSubsidebar",
  emits: ["close"],
  setup(__props, { emit }) {
    const { hasAccess } = useAuthorize();
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          _hoisted_3$1,
          createBaseVNode("div", {
            class: "panel-close",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
          }, _hoisted_5$1)
        ]),
        createBaseVNode("div", _hoisted_6$1, [
          createBaseVNode("ul", null, [
            unref(hasAccess)("manage users") ? (openBlock(), createElementBlock("li", _hoisted_7$1, [
              createVNode(_component_RouterLink, { to: { name: "user-group" } }, {
                default: withCtx(() => [
                  _hoisted_8$1,
                  createTextVNode(" User Groups ")
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage roles") ? (openBlock(), createElementBlock("li", _hoisted_9$1, [
              createVNode(_component_RouterLink, { to: { name: "user-role" } }, {
                default: withCtx(() => [
                  _hoisted_10$1,
                  createTextVNode(" Roles ")
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage users") ? (openBlock(), createElementBlock("li", _hoisted_11$1, [
              createVNode(_component_RouterLink, { to: { name: "user" } }, {
                default: withCtx(() => [
                  _hoisted_12$1,
                  createTextVNode(" Users ")
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = ["element-loading-text"];
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1);
const _hoisted_3 = { class: "brand-end" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_5 = { key: 0 };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:users"
}, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = { key: 1 };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:box"
}, null, -1);
const _hoisted_10 = { key: 2 };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:box"
}, null, -1);
const _hoisted_12 = { key: 3 };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:file"
}, null, -1);
const _hoisted_14 = { key: 4 };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_16 = { key: 0 };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:credit-card"
}, null, -1);
const _hoisted_18 = { key: 1 };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:layers"
}, null, -1);
const _hoisted_20 = { key: 2 };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:settings"
}, null, -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_23 = { key: 0 };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:users"
}, null, -1);
const _hoisted_25 = [
  _hoisted_24
];
const _hoisted_26 = { key: 1 };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:box"
}, null, -1);
const _hoisted_28 = { key: 2 };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:box"
}, null, -1);
const _hoisted_30 = { key: 3 };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:file"
}, null, -1);
const _hoisted_32 = { key: 4 };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:map-pin"
}, null, -1);
const _hoisted_34 = { key: 0 };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:credit-card"
}, null, -1);
const _hoisted_36 = { key: 1 };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:layers"
}, null, -1);
const _hoisted_38 = {
  key: 2,
  class: "is-hidden-touch"
};
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify sidebar-svg",
  "data-icon": "feather:settings"
}, null, -1);
const _hoisted_40 = { class: "view-wrapper" };
const _hoisted_41 = { class: "page-content-wrapper" };
const _hoisted_42 = {
  key: 1,
  class: "page-content is-relative"
};
const _hoisted_43 = { class: "page-title has-text-centered" };
const _hoisted_44 = { class: "menu-toggle has-chevron" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("span", { class: "rotate" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-top"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-center"
  }),
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "icon-line-bottom"
  })
], -1);
const _hoisted_46 = [
  _hoisted_45
];
const _hoisted_47 = { class: "title-wrap" };
const _hoisted_48 = { class: "title is-4" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_50 = [
  _hoisted_49
];
const _sfc_main = defineComponent({
  __name: "SidebarLayout",
  props: {
    theme: { default: "labels" },
    defaultSidebar: { default: "dashboard" },
    closeOnChange: { type: Boolean },
    openOnMounted: { type: Boolean },
    nowrap: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const isMobileSidebarOpen = ref(false);
    const isDesktopSidebarOpen = ref(props.openOnMounted);
    const activeMobileSubsidebar = ref(props.defaultSidebar);
    const { hasAccess } = useAuthorize();
    function switchSidebar(id) {
      if (id === activeMobileSubsidebar.value) {
        isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value;
      } else {
        isDesktopSidebarOpen.value = true;
        activeMobileSubsidebar.value = id;
      }
    }
    watchPostEffect(() => {
      const isOpen = isDesktopSidebarOpen.value;
      const wrappers = document.querySelectorAll(".view-wrapper");
      wrappers.forEach((wrapper) => {
        if (isOpen === false) {
          wrapper.classList.remove("is-pushed-full");
        } else if (!wrapper.classList.contains("is-pushed-full")) {
          wrapper.classList.add("is-pushed-full");
        }
      });
    });
    watch(() => route.fullPath, () => {
      isMobileSidebarOpen.value = false;
      if (props.closeOnChange && isDesktopSidebarOpen.value) {
        isDesktopSidebarOpen.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_NotificationsMobileDropdown = _sfc_main$4;
      const _component_UserProfileDropdown = _sfc_main$5;
      const _component_MobileNavbar = _sfc_main$6;
      const _component_MobileSidebar = _sfc_main$7;
      const _component_UsersMobileSubsidebar = _sfc_main$3;
      const _component_Sidebar = _sfc_main$2;
      const _component_UsersSubsidebar = _sfc_main$1;
      const _component_ToolbarNotification = _sfc_main$8;
      const _component_Toolbar = _sfc_main$9;
      const _directive_loading = resolveDirective("loading");
      return withDirectives((openBlock(), createElementBlock("div", {
        "element-loading-text": unref(loadingText),
        class: "sidebar-layout"
      }, [
        _hoisted_2,
        createVNode(_component_MobileNavbar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[0] || (_cache[0] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          brand: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "app" },
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
              createVNode(_component_UserProfileDropdown, {
                up: false,
                right: true
              })
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_MobileSidebar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[2] || (_cache[2] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, {
                id: "open-messages",
                to: { name: "app" },
                "data-content": "Dashboard"
              }, {
                default: withCtx(() => [
                  _hoisted_4
                ]),
                _: 1
              })
            ]),
            unref(hasAccess)(["manage users", "manage roles"]) ? (openBlock(), createElementBlock("li", _hoisted_5, [
              createBaseVNode("a", {
                "aria-label": "Dsiplay User content",
                class: normalizeClass([activeMobileSubsidebar.value === "user" && "is-active"]),
                onClick: _cache[1] || (_cache[1] = ($event) => activeMobileSubsidebar.value = "user")
              }, _hoisted_7, 2)
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage applications") ? (openBlock(), createElementBlock("li", _hoisted_8, [
              createVNode(_component_RouterLink, {
                to: { name: "requests" },
                "data-content": "Applications"
              }, {
                default: withCtx(() => [
                  _hoisted_9
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage workflows") ? (openBlock(), createElementBlock("li", _hoisted_10, [
              createVNode(_component_RouterLink, {
                to: { name: "workflow" },
                "data-content": "Workflows"
              }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage templates") ? (openBlock(), createElementBlock("li", _hoisted_12, [
              createVNode(_component_RouterLink, {
                to: { name: "templates" },
                "data-content": "Templates"
              }, {
                default: withCtx(() => [
                  _hoisted_13
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage jurisdictions") ? (openBlock(), createElementBlock("li", _hoisted_14, [
              createVNode(_component_RouterLink, {
                id: "open-messages",
                to: { name: "jurisdictions" },
                "data-content": "Jurisdictions"
              }, {
                default: withCtx(() => [
                  _hoisted_15
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ]),
          "bottom-links": withCtx(() => [
            unref(hasAccess)("receive payment") ? (openBlock(), createElementBlock("li", _hoisted_16, [
              createVNode(_component_RouterLink, {
                id: "open-messages",
                to: { name: "payment" },
                "data-content": "POS"
              }, {
                default: withCtx(() => [
                  _hoisted_17
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)(["view payment report", "view applications report"]) ? (openBlock(), createElementBlock("li", _hoisted_18, [
              createVNode(_component_RouterLink, {
                id: "open-messages",
                to: { name: "reports" },
                "data-content": "Reports"
              }, {
                default: withCtx(() => [
                  _hoisted_19
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage settings") ? (openBlock(), createElementBlock("li", _hoisted_20, [
              createVNode(_component_RouterLink, { to: { name: "settings" } }, {
                default: withCtx(() => [
                  _hoisted_21
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            isMobileSidebarOpen.value && activeMobileSubsidebar.value === "user" ? (openBlock(), createBlock(_component_UsersMobileSubsidebar, { key: 0 })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_Sidebar, {
          theme: props.theme,
          "is-open": isDesktopSidebarOpen.value
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, {
                id: "open-messages",
                to: { name: "app" },
                "data-content": "Dashboard"
              }, {
                default: withCtx(() => [
                  _hoisted_22
                ]),
                _: 1
              })
            ]),
            unref(hasAccess)(["manage users", "manage roles"]) ? (openBlock(), createElementBlock("li", _hoisted_23, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "user" && "is-active"]),
                "data-content": "users",
                "aria-label": "View users",
                onClick: _cache[3] || (_cache[3] = ($event) => switchSidebar("user"))
              }, _hoisted_25, 2)
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage applications") ? (openBlock(), createElementBlock("li", _hoisted_26, [
              createVNode(_component_RouterLink, {
                to: { name: "requests" },
                "data-content": "Applications"
              }, {
                default: withCtx(() => [
                  _hoisted_27
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage workflows") ? (openBlock(), createElementBlock("li", _hoisted_28, [
              createVNode(_component_RouterLink, {
                to: { name: "workflow" },
                "data-content": "Workflows"
              }, {
                default: withCtx(() => [
                  _hoisted_29
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage templates") ? (openBlock(), createElementBlock("li", _hoisted_30, [
              createVNode(_component_RouterLink, {
                id: "open-messages",
                to: { name: "templates" },
                "data-content": "Templates"
              }, {
                default: withCtx(() => [
                  _hoisted_31
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage jurisdictions") ? (openBlock(), createElementBlock("li", _hoisted_32, [
              createVNode(_component_RouterLink, {
                id: "open-messages",
                to: { name: "jurisdictions" },
                "data-content": "Jurisdictions"
              }, {
                default: withCtx(() => [
                  _hoisted_33
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true)
          ]),
          "bottom-links": withCtx(() => [
            unref(hasAccess)("receive payment") ? (openBlock(), createElementBlock("li", _hoisted_34, [
              createVNode(_component_RouterLink, {
                id: "open-messages",
                to: { name: "payment" },
                "data-content": "POS"
              }, {
                default: withCtx(() => [
                  _hoisted_35
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)(["view payment report", "view applications report"]) ? (openBlock(), createElementBlock("li", _hoisted_36, [
              createVNode(_component_RouterLink, {
                id: "open-messages",
                to: { name: "reports" },
                "data-content": "Reports"
              }, {
                default: withCtx(() => [
                  _hoisted_37
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            unref(hasAccess)("manage settings") ? (openBlock(), createElementBlock("li", _hoisted_38, [
              createVNode(_component_RouterLink, {
                id: "open-settings",
                to: { name: "settings" },
                "data-content": "Settings"
              }, {
                default: withCtx(() => [
                  _hoisted_39
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            createBaseVNode("li", null, [
              createVNode(_component_UserProfileDropdown, { up: "" })
            ])
          ]),
          _: 1
        }, 8, ["theme", "is-open"]),
        createVNode(Transition, { name: "slide-x" }, {
          default: withCtx(() => [
            isDesktopSidebarOpen.value && activeMobileSubsidebar.value === "user" ? (openBlock(), createBlock(_component_UsersSubsidebar, {
              key: 0,
              onClose: _cache[4] || (_cache[4] = ($event) => isDesktopSidebarOpen.value = false)
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_40, [
          createBaseVNode("div", _hoisted_41, [
            props.nowrap ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("div", _hoisted_42, [
              createBaseVNode("div", _hoisted_43, [
                createBaseVNode("div", {
                  class: "vuero-hamburger nav-trigger push-resize",
                  onClick: _cache[5] || (_cache[5] = ($event) => isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value)
                }, [
                  createBaseVNode("span", _hoisted_44, [
                    createBaseVNode("span", {
                      class: normalizeClass([[isDesktopSidebarOpen.value && "active"], "icon-box-toggle"])
                    }, _hoisted_46, 2)
                  ])
                ]),
                createBaseVNode("div", _hoisted_47, [
                  createBaseVNode("h1", _hoisted_48, toDisplayString(unref(pageTitle)), 1)
                ]),
                createVNode(_component_Toolbar, { class: "desktop-toolbar" }, {
                  default: withCtx(() => [
                    createVNode(_component_ToolbarNotification),
                    createBaseVNode("a", {
                      class: "toolbar-link right-panel-trigger",
                      "aria-label": "View activity panel",
                      onClick: _cache[6] || (_cache[6] = ($event) => activePanel.value = "activity")
                    }, _hoisted_50)
                  ]),
                  _: 1
                })
              ]),
              renderSlot(_ctx.$slots, "default")
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
