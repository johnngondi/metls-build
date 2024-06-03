import { _ as _export_sfc, e as useApi, c as __unplugin_components_0 } from "./index.4ea6d167.js";
import { a as activePanel, _ as _sfc_main$1, b as _sfc_main$2, c as _sfc_main$3, d as _sfc_main$4, e as _sfc_main$5, f as _sfc_main$6 } from "./activePanelState.49edee4b.js";
import { _ as _sfc_main$7 } from "./Navbar.fefeaebe.js";
import { d as defineComponent, F as useRoute, r as ref, h as computed, I as onMounted, a7 as watch, m as resolveComponent, ag as resolveDirective, ah as withDirectives, v as unref, o as openBlock, b as createElementBlock, s as createVNode, t as withCtx, f as createBaseVNode, n as normalizeClass, A as toDisplayString, B as renderSlot, p as pushScopeId, e as popScopeId } from "./vendor.11f8b2c5.js";
import { p as pageTitle } from "./navbarLayoutState.37d961b9.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
import "./VDropdown.dd19268e.js";
import "./VIcon.580f0211.js";
import "./useAppNotification.a2443950.js";
import "./VAvatar.c1fa75a5.js";
var dpo_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-c1c95bce"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  "element-loading-text": "please wait ....",
  class: "navbar-layout"
};
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1));
const _hoisted_3 = { class: "brand-end" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1));
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", null, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:box"
  })
], -1));
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", null, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:cpu"
  })
], -1));
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:message-circle"
}, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:search"
}, null, -1));
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", { href: "#" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:settings"
    })
  ])
], -1));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1));
const _hoisted_17 = { class: "title is-5" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1));
const _hoisted_19 = [
  _hoisted_18
];
const _hoisted_20 = { class: "view-wrapper has-top-nav" };
const _hoisted_21 = { class: "page-content-wrapper" };
const _hoisted_22 = {
  key: 1,
  class: "page-content is-relative"
};
const _hoisted_23 = { class: "is-navbar-lg" };
const _hoisted_24 = { class: "page-title has-text-centered" };
const _hoisted_25 = { class: "title-wrap" };
const _hoisted_26 = { class: "title is-4" };
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1));
const _hoisted_28 = [
  _hoisted_27
];
const _hoisted_29 = { class: "page-content-inner" };
const _hoisted_30 = { key: 0 };
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "has-text-centered is-size-2" }, "Payment Verification", -1));
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", { class: "has-text-centered is-size-4" }, "Verifying...", -1));
const _hoisted_33 = [
  _hoisted_31,
  _hoisted_32
];
const _hoisted_34 = { key: 1 };
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "has-text-centered is-size-2" }, "Payment Verification Error", -1));
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", { class: "has-text-centered is-size-4" }, "Please contact support", -1));
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", { class: "has-text-centered is-size-4" }, "You will now be redirected back to your applications", -1));
const _hoisted_38 = [
  _hoisted_35,
  _hoisted_36,
  _hoisted_37
];
const _hoisted_39 = { key: 2 };
const _hoisted_40 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "has-text-centered is-size-2" }, "Payment not completed", -1));
const _hoisted_41 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", { class: "has-text-centered is-size-4" }, "Please try again", -1));
const _hoisted_42 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", { class: "has-text-centered is-size-4" }, "You will now be redirected back to your application", -1));
const _hoisted_43 = [
  _hoisted_40,
  _hoisted_41,
  _hoisted_42
];
const _hoisted_44 = { key: 3 };
const _hoisted_45 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "has-text-centered is-size-2" }, "Payment Success", -1));
const _hoisted_46 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h4", { class: "has-text-centered is-size-4" }, "You will now be redirected back to your application", -1));
const _hoisted_47 = [
  _hoisted_45,
  _hoisted_46
];
const _sfc_main = defineComponent({
  __name: "dpo",
  props: {
    theme: { default: "default" },
    nowrap: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const api = useApi();
    const appName = "METLS";
    const route = useRoute();
    const filter = ref("");
    const isMobileSidebarOpen = ref(false);
    const activeMobileSubsidebar = ref("dashboard");
    const activeSubnav = ref("closed");
    const isVerifying = ref(true);
    const isVerifySuccess = ref(false);
    const isVerifyError = ref(false);
    const isPaymentNotPaid = ref(false);
    let transactionToken = ref("");
    computed(() => {
      if (!filter.value) {
        return [];
      }
      return [];
    });
    const handleUrlParameters = () => {
      const urlParams = new URLSearchParams(window.location.search);
      transactionToken = urlParams.get("TransactionToken");
      if (transactionToken) {
        verifyPayment();
      }
    };
    const verifyPayment = async () => {
      try {
        const response = await api.post("/verify_token", {
          "token": transactionToken
        });
        let invoiceId = response.data.invoice_id;
        let transactionStatus = response.data.result.ResultExplanation;
        console.log(response);
        if (transactionStatus == "Transaction Paid") {
          isVerifySuccess.value = true;
          isVerifying.value = false;
          isVerifyError.value = false;
          isPaymentNotPaid.value = false;
        } else {
          isVerifySuccess.value = false;
          isVerifying.value = false;
          isVerifyError.value = false;
          isPaymentNotPaid.value = true;
        }
        setTimeout(() => {
          window.location.href = `/home/application/${invoiceId}`;
        }, 3e3);
      } catch (error) {
        console.log(error);
        isVerifySuccess.value = false;
        isVerifying.value = false;
        isVerifyError.value = true;
        isPaymentNotPaid.value = false;
        setTimeout(() => {
          window.location.href = "/home/application";
        }, 3e3);
      }
    };
    onMounted(() => {
      handleUrlParameters();
    });
    watch(() => route.fullPath, () => {
      activeSubnav.value = "closed";
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
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_MobileNavbar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[0] || (_cache[0] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          brand: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
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
              createVNode(_component_UserProfileDropdown, { right: true })
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_MobileSidebar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[6] || (_cache[6] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashboard" && "is-active"]),
                onClick: _cache[1] || (_cache[1] = ($event) => activeMobileSubsidebar.value = "dashboard")
              }, _hoisted_5, 2)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "layouts" && "is-active"]),
                onClick: _cache[2] || (_cache[2] = ($event) => activeMobileSubsidebar.value = "layouts")
              }, _hoisted_7, 2)
            ]),
            createBaseVNode("li", {
              class: normalizeClass([activeMobileSubsidebar.value === "elements" && "is-active"]),
              onClick: _cache[3] || (_cache[3] = ($event) => activeMobileSubsidebar.value = "elements")
            }, _hoisted_9, 2),
            createBaseVNode("li", {
              class: normalizeClass([activeMobileSubsidebar.value === "components" && "is-active"]),
              onClick: _cache[4] || (_cache[4] = ($event) => activeMobileSubsidebar.value = "components")
            }, _hoisted_11, 2),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "app" } }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ]),
          "bottom-links": withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                onClick: _cache[5] || (_cache[5] = ($event) => activePanel.value = "search")
              }, _hoisted_14)
            ]),
            _hoisted_15
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
            _hoisted_16,
            createBaseVNode("h1", _hoisted_17, toDisplayString(unref(appName)), 1)
          ]),
          toolbar: withCtx(() => [
            createVNode(_component_Toolbar, { class: "desktop-toolbar" }, {
              default: withCtx(() => [
                createVNode(_component_ToolbarNotification),
                createBaseVNode("a", {
                  class: "toolbar-link right-panel-trigger",
                  onClick: _cache[7] || (_cache[7] = ($event) => activePanel.value = "activity")
                }, _hoisted_19)
              ]),
              _: 1
            }),
            createVNode(_component_UserProfileDropdown, { right: true })
          ]),
          _: 1
        }, 8, ["theme"]),
        createBaseVNode("div", _hoisted_20, [
          createBaseVNode("div", _hoisted_21, [
            props.nowrap ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("div", _hoisted_22, [
              createBaseVNode("div", _hoisted_23, [
                createBaseVNode("div", _hoisted_24, [
                  createBaseVNode("div", _hoisted_25, [
                    createBaseVNode("h1", _hoisted_26, toDisplayString(unref(pageTitle)), 1)
                  ]),
                  createVNode(_component_Toolbar, { class: "mobile-toolbar" }, {
                    default: withCtx(() => [
                      createVNode(_component_ToolbarNotification),
                      createBaseVNode("a", {
                        class: "toolbar-link right-panel-trigger",
                        onClick: _cache[8] || (_cache[8] = ($event) => activePanel.value = "activity")
                      }, _hoisted_28)
                    ]),
                    _: 1
                  })
                ]),
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createBaseVNode("div", _hoisted_29, [
                    isVerifying.value ? (openBlock(), createElementBlock("div", _hoisted_30, _hoisted_33)) : isVerifyError.value ? (openBlock(), createElementBlock("div", _hoisted_34, _hoisted_38)) : isPaymentNotPaid.value ? (openBlock(), createElementBlock("div", _hoisted_39, _hoisted_43)) : (openBlock(), createElementBlock("div", _hoisted_44, _hoisted_47))
                  ])
                ], true)
              ])
            ]))
          ])
        ])
      ])), [
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
var dpo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1c95bce"]]);
export { dpo as default };
