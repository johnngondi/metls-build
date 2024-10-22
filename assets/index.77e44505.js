import { _ as _sfc_main$3 } from "./VAvatar.c1fa75a5.js";
import { u as useUserSession, e as useApi, k as _sfc_main$4, d as _sfc_main$5, _ as _export_sfc } from "./index.256f70c3.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, B as renderSlot, f as createBaseVNode, A as toDisplayString, y as createCommentVNode, n as normalizeClass, r as ref, h as computed, I as onMounted, m as resolveComponent, s as createVNode, z as createTextVNode, x as createBlock, t as withCtx, K as Fragment, J as renderList, v as unref, p as pushScopeId, e as popScopeId } from "./vendor.11f8b2c5.js";
import { u as useApply } from "./useApply.7c599896.js";
const _hoisted_1$2 = { key: 0 };
const _hoisted_2$1 = { key: 1 };
const _hoisted_3$1 = { class: "flex-end" };
const _sfc_main$2 = defineComponent({
  __name: "VBlock",
  props: {
    title: {},
    subtitle: { default: void 0 },
    infratitle: { default: void 0 },
    center: { type: Boolean },
    lighter: { type: Boolean },
    narrow: { type: Boolean },
    mResponsive: { type: Boolean },
    tResponsive: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          !props.center && "media-flex",
          props.center && "media-flex-center",
          props.narrow && "no-margin",
          props.mResponsive && "is-responsive-mobile",
          props.tResponsive && "is-responsive-tablet-p"
        ])
      }, [
        renderSlot(_ctx.$slots, "icon"),
        createBaseVNode("div", {
          class: normalizeClass(["flex-meta", [props.lighter && "is-lighter"]])
        }, [
          createBaseVNode("span", null, toDisplayString(props.title), 1),
          props.subtitle ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(props.subtitle), 1)) : createCommentVNode("", true),
          props.infratitle ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(props.infratitle), 1)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "default")
        ], 2),
        createBaseVNode("div", _hoisted_3$1, [
          renderSlot(_ctx.$slots, "action")
        ])
      ], 2);
    };
  }
});
var ApplicantDashboard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-4b049948"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "personal-dashboard personal-dashboard-v2" };
const _hoisted_2 = { class: "columns is-multiline" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "dashboard-header" };
const _hoisted_5 = { class: "user-meta is-dark-bordered-12" };
const _hoisted_6 = { class: "title is-4 is-narrow is-bold" };
const _hoisted_7 = {
  key: 0,
  class: "iconify is-green is-small",
  "data-icon": "feather:check-circle",
  "aria-hidden": "true"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, "It's really nice to see you again", -1));
const _hoisted_9 = { class: "is-bold" };
const _hoisted_10 = { class: "user-action" };
const _hoisted_11 = { class: "title is-3 is-uppercase is-narrow" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "light-text" }, "Unpaid Amount", -1));
const _hoisted_13 = { class: "column is-8" };
const _hoisted_14 = { class: "dashboard-card has-margin-bottom" };
const _hoisted_15 = { class: "card-head" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Recent Applications", -1));
const _hoisted_17 = { class: "active-projects" };
const _hoisted_18 = { class: "mr-5" };
const _hoisted_19 = { key: 0 };
const _hoisted_20 = { class: "dashboard-card has-margin-bottom" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Pending Payments")
], -1));
const _hoisted_22 = {
  key: 0,
  class: "active-projects"
};
const _hoisted_23 = { class: "mr-5" };
const _hoisted_24 = ["href"];
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_26 = { key: 0 };
const _hoisted_27 = { key: 1 };
const _hoisted_28 = ["href"];
const _hoisted_29 = {
  key: 1,
  class: "active-projects"
};
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", null, "No Pending Payments", -1));
const _hoisted_31 = [
  _hoisted_30
];
const _hoisted_32 = { class: "column is-4" };
const _hoisted_33 = { class: "dashboard-card" };
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "card-head" }, [
  /* @__PURE__ */ createBaseVNode("h3", { class: "dark-inverted" }, "Services"),
  /* @__PURE__ */ createBaseVNode("a", { class: "action-link" }, "View All")
], -1));
const _hoisted_35 = { class: "active-team" };
const _hoisted_36 = { class: "user-list" };
const _hoisted_37 = { class: "user-list-info" };
const _hoisted_38 = { class: "name dark-inverted" };
const _hoisted_39 = { class: "position" };
const _hoisted_40 = { class: "user-list-icons" };
const _sfc_main$1 = defineComponent({
  __name: "ApplicantDashboard",
  setup(__props) {
    const {
      myFlows,
      fetchMyworkflows,
      myApplications,
      fetchMyApplications,
      workflowStatus,
      RESOURCE_URL
    } = useApply();
    const userSession = useUserSession();
    const api = useApi();
    const analytics = ref(null);
    const user = computed(() => {
      return userSession.user;
    });
    computed(() => {
      return myApplications.value ? myApplications.value.data : [];
    });
    const fetchDash = async () => {
      try {
        const { data } = await api.get(`/user/dashboard`);
        analytics.value = data.data;
      } catch (error) {
      }
    };
    const stats = computed(() => {
      var _a;
      return (_a = analytics.value) == null ? void 0 : _a.stats;
    });
    const recentApplications = computed(() => {
      var _a;
      return (_a = analytics.value) == null ? void 0 : _a.recent_five_apps;
    });
    const unpaidInvoices = computed(() => {
      var _a;
      return analytics.value && ((_a = analytics.value) == null ? void 0 : _a.unpaid_invoices) ? analytics.value.unpaid_invoices : [];
    });
    const verification_status = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = analytics.value) == null ? void 0 : _a.stats) == null ? void 0 : _b.verification_status) == null ? void 0 : _c.status;
    });
    const verification = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = analytics.value) == null ? void 0 : _a.stats) == null ? void 0 : _b.verification_status) == null ? void 0 : _c.data;
    });
    const vmsg_status = computed(() => {
      if (verification_status.value == "pending") {
        return "warning";
      }
      if (verification_status.value == "failed") {
        return "danger";
      }
      return "warning";
    });
    const getStatus = (status) => {
      return workflowStatus(status || 0);
    };
    const sendingMRA = ref(false);
    const printingMRAAdvice = ref(false);
    const mode = ref("");
    const modes = ref([
      {
        id: "ATM",
        description: "ATM"
      },
      {
        id: "CASH",
        description: "Cash"
      },
      {
        id: "CHQ",
        description: "Cheque"
      },
      {
        id: "EFT",
        description: "Electronic Funds Transfer"
      },
      {
        id: "FT",
        description: "Funds Transfer"
      },
      {
        id: "IB",
        description: "Internet Banking"
      },
      {
        id: "MB",
        description: "Mobile Banking"
      },
      {
        id: "MM",
        description: "Mobile Money"
      },
      {
        id: "O",
        description: "Other"
      },
      {
        id: "POS",
        description: "Point of Sale"
      }
    ]);
    const makeMRAPayment = async (invoice) => {
      if (mode.value == "") {
        alert("select Payment method!");
        return;
      }
      sendingMRA.value = true;
      await api.post(`mra/invoices/${invoice}/pay`, {
        mode: mode.value
      }).then((data) => {
        console.log(data);
        printingMRAAdvice.value = true;
        window.location.href = data.data.payment;
        printingMRAAdvice.value = false;
      }).finally(() => {
        sendingMRA.value = false;
      });
    };
    onMounted(() => {
      fetchMyworkflows();
      fetchMyApplications();
      fetchDash();
    });
    return (_ctx, _cache) => {
      var _a, _b;
      const _component_VAvatar = _sfc_main$3;
      const _component_VMessage = _sfc_main$4;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VButton = _sfc_main$5;
      const _component_VBlock = _sfc_main$2;
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VAvatar, {
                picture: "/images/avatars/svg/vuero-1.svg",
                size: "xl"
              }),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("h3", _hoisted_6, [
                  createTextVNode(" Hello, " + toDisplayString((_a = user.value) == null ? void 0 : _a.first_name) + " ", 1),
                  verification_status.value == "verified" ? (openBlock(), createElementBlock("i", _hoisted_7)) : createCommentVNode("", true)
                ]),
                _hoisted_8,
                verification_status.value != "verified" ? (openBlock(), createBlock(_component_VMessage, {
                  key: 0,
                  class: "mt-2 is-small",
                  color: vmsg_status.value
                }, {
                  default: withCtx(() => {
                    var _a2, _b2;
                    return [
                      createBaseVNode("h1", _hoisted_9, toDisplayString(((_a2 = verification.value) == null ? void 0 : _a2.title) || "..."), 1),
                      createTextVNode(" " + toDisplayString(((_b2 = verification.value) == null ? void 0 : _b2.description) || "..."), 1)
                    ];
                  }),
                  _: 1
                }, 8, ["color"])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("h3", _hoisted_11, toDisplayString(_ctx.$filters.currencyMK(((_b = stats.value) == null ? void 0 : _b.unpaid) || 0)), 1),
                _hoisted_12
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                _hoisted_16,
                createVNode(_component_RouterLink, {
                  to: { name: "home-my-applications" },
                  class: "action-link"
                }, {
                  default: withCtx(() => [
                    createTextVNode("View All")
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_17, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(recentApplications.value, (item, index2) => {
                  var _a2, _b2;
                  return openBlock(), createBlock(_component_VBlock, {
                    key: index2,
                    title: (_a2 = item == null ? void 0 : item.workflow_process) == null ? void 0 : _a2.name,
                    subtitle: ` At ${((_b2 = item == null ? void 0 : item.jurisdiction) == null ? void 0 : _b2.title) || "Undefined"}`
                  }, {
                    action: withCtx(() => [
                      createBaseVNode("div", _hoisted_18, toDisplayString(getStatus(item.status)), 1),
                      createVNode(_component_VButton, {
                        to: { name: "home-application-id", params: { id: item.id } },
                        color: "primary",
                        elevated: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode("view")
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1032, ["title", "subtitle"]);
                }), 128)),
                recentApplications.value && recentApplications.value.length < 0 ? (openBlock(), createElementBlock("p", _hoisted_19, " No Recent Applications ")) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_20, [
              _hoisted_21,
              unpaidInvoices.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_22, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unpaidInvoices.value, (item, index2) => {
                  var _a2;
                  return openBlock(), createBlock(_component_VBlock, {
                    key: index2,
                    title: `#${item.id} ${item.created_at}`,
                    subtitle: `${(_a2 = item.application) == null ? void 0 : _a2.workflow_process.name} at ${item.jurisdiction.title}`
                  }, {
                    action: withCtx(() => [
                      createBaseVNode("div", _hoisted_23, [
                        createBaseVNode("a", {
                          href: unref(RESOURCE_URL) + `invoices/${item.id}/view`,
                          target: "_blank"
                        }, toDisplayString(_ctx.$filters.currencyMK(item.total - item.paid)), 9, _hoisted_24)
                      ]),
                      _hoisted_25,
                      item.mra_payments_count == 0 ? (openBlock(), createElementBlock("div", _hoisted_26, [
                        createVNode(_component_el_select, {
                          modelValue: mode.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => mode.value = $event),
                          filterable: "",
                          size: "medium",
                          disabled: sendingMRA.value || printingMRAAdvice.value
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_option, {
                              key: "select_null",
                              label: "Select Payment Method",
                              value: "",
                              disabled: ""
                            }),
                            (openBlock(true), createElementBlock(Fragment, null, renderList(modes.value, (pMode) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key: pMode.id,
                                label: pMode.description,
                                value: pMode.id
                              }, null, 8, ["label", "value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "disabled"]),
                        createVNode(_component_VButton, {
                          loading: sendingMRA.value,
                          disabled: printingMRAAdvice.value,
                          class: "ml-2",
                          onClick: ($event) => makeMRAPayment(item.id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(printingMRAAdvice.value ? "Printing Advice..." : "Pay Via MRA"), 1)
                          ]),
                          _: 2
                        }, 1032, ["loading", "disabled", "onClick"])
                      ])) : (openBlock(), createElementBlock("div", _hoisted_27, [
                        createBaseVNode("a", {
                          href: unref(RESOURCE_URL) + `mra/invoices/${item.mra_payments[0].id}/print`,
                          target: "_blank"
                        }, " Print MRA Advice: " + toDisplayString(item.mra_payments[0].prn), 9, _hoisted_28)
                      ]))
                    ]),
                    _: 2
                  }, 1032, ["title", "subtitle"]);
                }), 128))
              ])) : createCommentVNode("", true),
              unpaidInvoices.value.length < 1 ? (openBlock(), createElementBlock("div", _hoisted_29, _hoisted_31)) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_32, [
            createBaseVNode("div", _hoisted_33, [
              _hoisted_34,
              createBaseVNode("div", _hoisted_35, [
                createBaseVNode("ul", _hoisted_36, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(myFlows), (flow, index2) => {
                    return openBlock(), createElementBlock("li", { key: index2 }, [
                      createBaseVNode("div", _hoisted_37, [
                        createBaseVNode("div", _hoisted_38, toDisplayString(flow.workflow.name), 1),
                        createBaseVNode("div", _hoisted_39, toDisplayString(flow.workflow.description), 1)
                      ]),
                      createBaseVNode("div", _hoisted_40, [
                        createVNode(_component_VButton, {
                          to: {
                            name: "home-flow",
                            params: { flow: flow.workflow.id }
                          },
                          color: "primary",
                          class: "text-white",
                          disabled: !flow.canInitiate
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Apply")
                          ]),
                          _: 2
                        }, 1032, ["to", "disabled"])
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4b049948"]]);
const _sfc_main = {};
const _hoisted_1 = { class: "page-content-inner" };
function _sfc_render(_ctx, _cache) {
  const _component_ApplicantDashboard = __unplugin_components_0;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_ApplicantDashboard)
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
