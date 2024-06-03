import { e as useApi, a as useAuthorize } from "./index.4ea6d167.js";
import { u as useApply } from "./useApply.4fc76bc2.js";
import { d as defineComponent, r as ref, h as computed, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, A as toDisplayString, y as createCommentVNode, s as createVNode, t as withCtx, z as createTextVNode, v as unref } from "./vendor.11f8b2c5.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
var FlightsDashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "business-dashboard flights-dashboard" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = { class: "column is-9" };
const _hoisted_4 = {
  key: 0,
  class: "flights-summary-wrapper"
};
const _hoisted_5 = { class: "columns is-flex-tablet-p" };
const _hoisted_6 = { class: "column is-4" };
const _hoisted_7 = { class: "flight-summary" };
const _hoisted_8 = { class: "flight-price" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Pending"),
  /* @__PURE__ */ createBaseVNode("span", null, "Applications")
], -1);
const _hoisted_10 = { class: "column is-4" };
const _hoisted_11 = { class: "flight-summary is-featured" };
const _hoisted_12 = { class: "flight-price" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Completed"),
  /* @__PURE__ */ createBaseVNode("span", null, "Applications")
], -1);
const _hoisted_14 = { class: "column is-4" };
const _hoisted_15 = { class: "flight-summary" };
const _hoisted_16 = { class: "flight-price" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Rejected"),
  /* @__PURE__ */ createBaseVNode("span", null, "Applications")
], -1);
const _hoisted_18 = { class: "flights" };
const _hoisted_19 = { key: 0 };
const _hoisted_20 = { class: "column is-3" };
const _hoisted_21 = { class: "filters-card" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("a", { class: "button v-button is-primary is-fullwidth is-bold is-disabled" }, " Quick Links ", -1);
const _hoisted_23 = {
  key: 0,
  class: "checkboxes-list"
};
const _hoisted_24 = {
  key: 1,
  class: "checkboxes-list"
};
const _hoisted_25 = {
  key: 2,
  class: "checkboxes-list"
};
const _sfc_main$1 = defineComponent({
  __name: "FlightsDashboard",
  setup(__props) {
    const api = useApi();
    const { workflowStatus } = useApply();
    const { hasAccess } = useAuthorize();
    ref({
      start: new Date(),
      end: new Date()
    });
    const analytics = ref(null);
    const getStatus = (status) => {
      return workflowStatus(status || 0);
    };
    const fetchDash = async () => {
      try {
        const { data } = await api.get(`/admin/dashboard`);
        analytics.value = data.data;
      } catch (error) {
        console.log(error);
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
    onMounted(() => {
      fetchDash();
    });
    return (_ctx, _cache) => {
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_el_table = resolveComponent("el-table");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            stats.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("a", _hoisted_7, [
                    createBaseVNode("div", _hoisted_8, toDisplayString(stats.value.pending), 1),
                    _hoisted_9
                  ])
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("a", _hoisted_11, [
                    createBaseVNode("div", _hoisted_12, toDisplayString(stats.value.completed), 1),
                    _hoisted_13
                  ])
                ]),
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("a", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, toDisplayString(stats.value.cancelled), 1),
                    _hoisted_17
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_18, [
              createVNode(_component_el_table, {
                border: "",
                data: recentApplications.value,
                "empty-text": "No Applications!",
                style: { "height": "100%" },
                stripe: ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_table_column, { width: "50" }, {
                    default: withCtx(({}) => [
                      createVNode(_component_el_checkbox)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "title",
                    label: "Application Title"
                  }, {
                    default: withCtx(({ row }) => {
                      var _a;
                      return [
                        createBaseVNode("span", null, toDisplayString(((_a = row.workflow_process) == null ? void 0 : _a.name) || "N/A"), 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "date",
                    label: "Applied On"
                  }, {
                    default: withCtx(({ row }) => [
                      row.created_at ? (openBlock(), createElementBlock("span", _hoisted_19, toDisplayString(_ctx.$filters.bDate(row.created_at)), 1)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "status",
                    label: "Status"
                  }, {
                    default: withCtx(({ row }) => [
                      createBaseVNode("span", null, toDisplayString(getStatus(row.status)), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, {
                    prop: "user",
                    label: "Applicant"
                  }, {
                    default: withCtx(({ row }) => {
                      var _a, _b, _c;
                      return [
                        createBaseVNode("span", null, toDisplayString(((_a = row.applicant) == null ? void 0 : _a.name) || ((_b = row.applicant) == null ? void 0 : _b.first_name)), 1),
                        createBaseVNode("p", null, toDisplayString((_c = row.applicant) == null ? void 0 : _c.email), 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_el_table_column, { label: "" }, {
                    default: withCtx(({ row }) => [
                      createVNode(_component_RouterLink, {
                        class: "is-primary",
                        to: { name: "home-application-id", params: { id: row.id } }
                      }, {
                        default: withCtx(() => [
                          createTextVNode("View Application")
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["data"])
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            createBaseVNode("div", _hoisted_21, [
              _hoisted_22,
              unref(hasAccess)("manage workflows") ? (openBlock(), createElementBlock("div", _hoisted_23, [
                createVNode(_component_RouterLink, {
                  class: "button v-button is-primary is-outlined",
                  to: { name: "workflow-new" }
                }, {
                  default: withCtx(() => [
                    createTextVNode("Add Workflow")
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              unref(hasAccess)("manage jurisdictions") ? (openBlock(), createElementBlock("div", _hoisted_24, [
                createVNode(_component_RouterLink, {
                  class: "button v-button is-primary is-outlined",
                  to: { name: "jurisdictions-new" }
                }, {
                  default: withCtx(() => [
                    createTextVNode("Add Jurisdiction ")
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              unref(hasAccess)("manage templates") ? (openBlock(), createElementBlock("div", _hoisted_25, [
                createVNode(_component_RouterLink, {
                  class: "button v-button is-primary is-outlined",
                  to: { name: "templates-new" }
                }, {
                  default: withCtx(() => [
                    createTextVNode("Add Template ")
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true)
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = defineComponent({
  __name: "index",
  setup(__props) {
    pageTitle.value = "Dashboard";
    return (_ctx, _cache) => {
      const _component_FlightsDashboard = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_FlightsDashboard)
      ]);
    };
  }
});
export { _sfc_main as default };
