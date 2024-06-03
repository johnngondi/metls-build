import { d as defineComponent, h as computed, r as ref, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, y as createCommentVNode, v as unref, s as createVNode, t as withCtx, z as createTextVNode, K as Fragment, J as renderList, A as toDisplayString, q as withModifiers, a2 as hooks, a as useRouter, ai as toRefs, I as onMounted, x as createBlock, n as normalizeClass, B as renderSlot, U as useI18n, u as useStorage } from "./vendor.11f8b2c5.js";
import { u as useDropdown, _ as __unplugin_components_0 } from "./VDropdown.dd19268e.js";
import { u as useAppNotification } from "./useAppNotification.a2443950.js";
import { _ as _sfc_main$6 } from "./VAvatar.c1fa75a5.js";
import { u as useUserSession, d as _sfc_main$7 } from "./index.4ea6d167.js";
const _hoisted_1$5 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:bell"
}, null, -1);
const _hoisted_2$4 = {
  key: 0,
  class: "new-indicator pulsate"
};
const _hoisted_3$4 = { class: "navbar-dropdown is-boxed is-right" };
const _hoisted_4$4 = { class: "heading" };
const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode("div", { class: "heading-left" }, [
  /* @__PURE__ */ createBaseVNode("h6", { class: "heading-title" }, "Notifications")
], -1);
const _hoisted_6$3 = { class: "heading-right" };
const _hoisted_7$3 = { class: "inner has-slimscroll" };
const _hoisted_8$3 = {
  key: 0,
  class: "notification-list"
};
const _hoisted_9$1 = { class: "user-content" };
const _hoisted_10$1 = { class: "user-info" };
const _hoisted_11$1 = { class: "time mt-2" };
const _hoisted_12$1 = {
  key: 1,
  class: "notification-list"
};
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("li", null, "No Notifications", -1);
const _hoisted_14$1 = [
  _hoisted_13$1
];
const _sfc_main$5 = defineComponent({
  __name: "NotificationsMobileDropdown",
  setup(__props) {
    const { notifications, readOne, getAllNotifications } = useAppNotification();
    const isNotf = computed(() => notifications.value && notifications.value.length > 0);
    const format = (value) => {
      if (value) {
        return hooks(String(value)).format("MM/DD/YYYY hh:mm");
      }
    };
    const open = (url, id) => {
      readOne(id).finally(() => getAllNotifications());
      window.open(url, "_blank");
    };
    const dropdownElement = ref();
    const dropdown = useDropdown(dropdownElement);
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", {
        ref_key: "dropdownElement",
        ref: dropdownElement,
        class: "navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop"
      }, [
        createBaseVNode("a", {
          class: "navbar-link is-arrowless",
          onClick: _cache[0] || (_cache[0] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
        }, [
          _hoisted_1$5,
          isNotf.value ? (openBlock(), createElementBlock("span", _hoisted_2$4)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_3$4, [
          createBaseVNode("div", _hoisted_4$4, [
            _hoisted_5$3,
            createBaseVNode("div", _hoisted_6$3, [
              createVNode(_component_RouterLink, {
                class: "notification-link",
                to: { name: "notifications" }
              }, {
                default: withCtx(() => [
                  createTextVNode(" See all ")
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_7$3, [
            unref(notifications) ? (openBlock(), createElementBlock("ul", _hoisted_8$3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(notifications), (item, i) => {
                return openBlock(), createElementBlock("li", { key: i }, [
                  createVNode(_component_RouterLink, {
                    to: {},
                    class: "notification-item",
                    onClick: withModifiers(($event) => {
                      var _a;
                      return open((_a = item.data) == null ? void 0 : _a.url, item.id);
                    }, ["prevent"])
                  }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        createBaseVNode("div", _hoisted_9$1, [
                          createBaseVNode("p", _hoisted_10$1, toDisplayString((_a = item.data) == null ? void 0 : _a.title), 1),
                          createBaseVNode("p", null, toDisplayString((_b = item.data) == null ? void 0 : _b.body), 1),
                          createBaseVNode("p", _hoisted_11$1, toDisplayString(format(item.created_at)), 1)
                        ])
                      ];
                    }),
                    _: 2
                  }, 1032, ["onClick"])
                ]);
              }), 128))
            ])) : createCommentVNode("", true),
            unref(notifications) ? (openBlock(), createElementBlock("ul", _hoisted_12$1, _hoisted_14$1)) : createCommentVNode("", true)
          ])
        ])
      ], 512);
    };
  }
});
const _hoisted_1$4 = ["onClick"];
const _hoisted_2$3 = { class: "dropdown-head" };
const _hoisted_3$3 = { class: "meta" };
const _hoisted_4$3 = { style: { "display": "block" } };
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-user-alt"
  })
], -1);
const _hoisted_6$2 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Profile"),
  /* @__PURE__ */ createBaseVNode("span", null, "View your profile")
], -1);
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_8$2 = { class: "dropdown-item is-button" };
const _sfc_main$4 = defineComponent({
  __name: "UserProfileDropdown",
  props: {
    right: {
      type: Boolean,
      default: false
    },
    up: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const userSession = useUserSession();
    const router = useRouter();
    const { right, up } = toRefs(props);
    const first_name = ref("Name");
    const email = ref("email address");
    const userId = computed(() => {
      var _a;
      return userSession.isLoggedIn ? (_a = userSession.user) == null ? void 0 : _a.id : void 0;
    });
    const logout = () => {
      userSession.logoutUser().then(() => {
        router.push({ name: "auth" });
      });
    };
    onMounted(() => {
      var _a, _b;
      if (userSession.isLoggedIn) {
        first_name.value = ((_a = userSession.user) == null ? void 0 : _a.first_name) || "Name";
        email.value = ((_b = userSession.user) == null ? void 0 : _b.email) || "email address";
      }
    });
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$6;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VButton = _sfc_main$7;
      const _component_VDropdown = __unplugin_components_0;
      return openBlock(), createBlock(_component_VDropdown, {
        right: unref(right),
        up: unref(up),
        spaced: "",
        class: "user-dropdown profile-dropdown"
      }, {
        button: withCtx(({ toggle }) => [
          createBaseVNode("a", {
            class: "toolbar-link is-trigger dropdown-trigger",
            "aria-haspopup": "true",
            onClick: toggle
          }, [
            createVNode(_component_VAvatar, {
              picture: "/images/avatars/svg/vuero-1.svg",
              size: "small"
            })
          ], 8, _hoisted_1$4)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_2$3, [
            createVNode(_component_VAvatar, {
              size: "medium",
              picture: "/images/avatars/svg/vuero-1.svg"
            }),
            createBaseVNode("div", _hoisted_3$3, [
              createBaseVNode("span", _hoisted_4$3, toDisplayString(first_name.value), 1),
              createBaseVNode("span", null, toDisplayString(email.value), 1)
            ])
          ]),
          createVNode(_component_RouterLink, {
            disabled: !userId.value,
            role: "menuitem",
            to: { name: "user-id", params: { id: userId.value } },
            class: "dropdown-item is-media"
          }, {
            default: withCtx(() => [
              _hoisted_5$2,
              _hoisted_6$2
            ]),
            _: 1
          }, 8, ["disabled", "to"]),
          _hoisted_7$2,
          createBaseVNode("div", _hoisted_8$2, [
            createVNode(_component_VButton, {
              class: "logout-button",
              icon: "feather:log-out",
              color: "primary",
              role: "menuitem",
              raised: "",
              fullwidth: "",
              onClick: _cache[0] || (_cache[0] = ($event) => logout())
            }, {
              default: withCtx(() => [
                createTextVNode(" Logout ")
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["right", "up"]);
    };
  }
});
var MobileNavbar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = {
  class: "navbar mobile-navbar is-hidden-desktop is-hidden-tablet",
  "aria-label": "main navigation"
};
const _hoisted_2$2 = { class: "container" };
const _hoisted_3$2 = { class: "navbar-brand" };
const _hoisted_4$2 = { class: "brand-start" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", null, null, -1);
const _hoisted_8$1 = [
  _hoisted_5$1,
  _hoisted_6$1,
  _hoisted_7$1
];
const _sfc_main$3 = defineComponent({
  __name: "MobileNavbar",
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("div", _hoisted_4$2, [
              createBaseVNode("div", {
                class: normalizeClass(["navbar-burger", [props.isOpen && "is-active"]]),
                onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
              }, _hoisted_8$1, 2)
            ]),
            renderSlot(_ctx.$slots, "brand")
          ])
        ])
      ]);
    };
  }
});
var MobileSidebar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$2 = { class: "inner" };
const _hoisted_2$1 = { class: "icon-side-menu" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", {
    "aria-label": "Back to homepage",
    href: "/"
  }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:activity"
    })
  ])
], -1);
const _hoisted_4$1 = { class: "bottom-icon-side-menu" };
const _sfc_main$2 = defineComponent({
  __name: "MobileSidebar",
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["toggle"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: normalizeClass([[props.isOpen && "is-active"], "mobile-main-sidebar"])
        }, [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("ul", _hoisted_2$1, [
              renderSlot(_ctx.$slots, "links", {}, () => [
                _hoisted_3$1
              ])
            ]),
            createBaseVNode("ul", _hoisted_4$1, [
              renderSlot(_ctx.$slots, "bottom-links")
            ])
          ])
        ], 2),
        props.isOpen ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "mobile-overlay",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("toggle"))
        })) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1$1 = { class: "toolbar-notifications is-hidden-mobile" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:bell"
}, null, -1);
const _hoisted_3 = {
  key: 0,
  class: "new-indicator pulsate"
};
const _hoisted_4 = {
  class: "dropdown-menu",
  role: "menu"
};
const _hoisted_5 = { class: "dropdown-content" };
const _hoisted_6 = { class: "heading" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "heading-left" }, [
  /* @__PURE__ */ createBaseVNode("h6", { class: "heading-title" }, "Notifications")
], -1);
const _hoisted_8 = { class: "heading-right" };
const _hoisted_9 = {
  key: 0,
  class: "notification-list"
};
const _hoisted_10 = {
  target: "_blank",
  class: "user-content"
};
const _hoisted_11 = { class: "user-info" };
const _hoisted_12 = { class: "time mt-2" };
const _hoisted_13 = {
  key: 1,
  class: "notification-list"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("li", null, "No Notifications", -1);
const _hoisted_15 = [
  _hoisted_14
];
const _sfc_main$1 = defineComponent({
  __name: "ToolbarNotification",
  setup(__props) {
    const { notifications, readOne, getAllNotifications } = useAppNotification();
    const isNotf = computed(() => notifications.value && notifications.value.length > 0);
    const dropdownElement = ref();
    const dropdown = useDropdown(dropdownElement);
    const open = (url, id) => {
      readOne(id).finally(() => getAllNotifications());
      window.open(url, "_blank");
    };
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", {
          ref_key: "dropdownElement",
          ref: dropdownElement,
          class: "dropdown is-spaced is-dots is-right dropdown-trigger"
        }, [
          createBaseVNode("div", {
            class: "is-trigger",
            "aria-haspopup": "true",
            onClick: _cache[0] || (_cache[0] = (...args) => unref(dropdown).toggle && unref(dropdown).toggle(...args))
          }, [
            _hoisted_2,
            isNotf.value ? (openBlock(), createElementBlock("span", _hoisted_3)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                _hoisted_7,
                createBaseVNode("div", _hoisted_8, [
                  createVNode(_component_RouterLink, {
                    class: "notification-link",
                    to: { name: "notifications" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" See all ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              unref(notifications) ? (openBlock(), createElementBlock("ul", _hoisted_9, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(notifications), (item, i) => {
                  return openBlock(), createElementBlock("li", { key: i }, [
                    createVNode(_component_RouterLink, {
                      to: {},
                      class: "notification-item",
                      onClick: withModifiers(($event) => {
                        var _a;
                        return open((_a = item.data) == null ? void 0 : _a.url, item.id);
                      }, ["prevent"])
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createBaseVNode("a", _hoisted_10, [
                            createBaseVNode("p", _hoisted_11, toDisplayString((_a = item.data) == null ? void 0 : _a.title), 1),
                            createBaseVNode("p", _hoisted_12, toDisplayString(_ctx.$filters.bDate(item.created_at)), 1)
                          ])
                        ];
                      }),
                      _: 2
                    }, 1032, ["onClick"])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              unref(notifications).length < 1 ? (openBlock(), createElementBlock("ul", _hoisted_13, _hoisted_15)) : createCommentVNode("", true)
            ])
          ])
        ], 512)
      ]);
    };
  }
});
const _hoisted_1 = { class: "toolbar ml-auto" };
const _sfc_main = defineComponent({
  __name: "Toolbar",
  setup(__props) {
    const { locale } = useI18n();
    const dropdownElement = ref();
    useDropdown(dropdownElement);
    computed(() => {
      switch (locale.value) {
        case "fr":
          return "/images/icons/flags/france.svg";
        case "es":
          return "/images/icons/flags/spain.svg";
        case "es-MX":
          return "/images/icons/flags/mexico.svg";
        case "de":
          return "/images/icons/flags/germany.svg";
        case "zh-CN":
          return "/images/icons/flags/china.svg";
        case "en":
        default:
          return "/images/icons/flags/united-states-of-america.svg";
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const activePanel = useStorage("active-panel", "none");
export { _sfc_main$5 as _, activePanel as a, _sfc_main$4 as b, _sfc_main$3 as c, _sfc_main$2 as d, _sfc_main$1 as e, _sfc_main as f };
