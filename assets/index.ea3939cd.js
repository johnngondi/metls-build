import { _ as _sfc_main$4 } from "./VPlaceholderPage.59076d4c.js";
import { _ as _sfc_main$5 } from "./VLoader.6d10ad6d.js";
import { e as useApi, b as useNotyf, a as useAuthorize, _ as _export_sfc } from "./index.256f70c3.js";
import { u as useJuris } from "./useJuris.9d0e82c7.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
import { F as FileSaver_min } from "./FileSaver.min.c8bfead3.js";
import { r as ref, d as defineComponent, a3 as reactive, h as computed, a7 as watch, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, s as createVNode, n as normalizeClass, x as createBlock, t as withCtx, f as createBaseVNode, K as Fragment, J as renderList, v as unref, z as createTextVNode, A as toDisplayString, y as createCommentVNode, p as pushScopeId, e as popScopeId, a2 as hooks, B as renderSlot, W as Transition } from "./vendor.11f8b2c5.js";
import { _ as _sfc_main$6 } from "./VIcon.580f0211.js";
function useReporting() {
  const api = useApi();
  const notf = useNotyf();
  const applicationReports = ref(void 0);
  const paymentReports = ref(void 0);
  const jurisdictions = ref(void 0);
  const cashiers = ref(void 0);
  const fetchApplicationsCount = async (params) => {
    try {
      const { data } = await api.get(`reports/applications-count${params}`);
      console.log(data);
      applicationReports.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchReportJurisdictions = async (type = "ministry") => {
    try {
      const { data } = await api.get(`jurisdictions?type=${type}&restrict=true`);
      console.log(data);
      jurisdictions.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchCashiers = async (jurisdiction_id) => {
    try {
      const { data } = await api.get(`reports/cashiers?jurisdiction=${jurisdiction_id}`);
      console.log(data);
      cashiers.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchPaymentCount = async (data) => {
    const { jurisdiction, start, end, mode, cashier } = data;
    try {
      let query = `?jurisdiction=${jurisdiction}`;
      if (start != "") {
        query += `&start_date=${start}`;
      }
      if (end != "") {
        query += `&end_date=${end}`;
      }
      if (mode || mode != "") {
        query += `&mode=${mode}`;
      }
      if (cashier) {
        query += `&cashier=${cashier}`;
      }
      const { data: data2 } = await api.get(`reports/payments${query}`);
      console.log(data2);
      paymentReports.value = data2.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const exportApplicationReport = async (type, params) => {
    isLoading.value = true;
    loadingText.value = "Exporting...";
    try {
      const item = type == "PDF" ? "pdf" : "excel";
      const { data } = await api.get(`reports/applications-count-to-${item}${params}`, { responseType: "blob" });
      isLoading.value = false;
      notf.success("Export Success, Downloading Report");
      const today = new Date();
      const _date = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
      const file_name = type == "PDF" ? `${_date}-applications-count.pdf` : `${_date}-applications-count.xlsx`;
      FileSaver_min.exports.saveAs(data, file_name);
    } catch (error) {
      isLoading.value = false;
      notf.error("Export Error, Try again!");
    }
  };
  const exportPaymentsReport = async (type, params) => {
    isLoading.value = true;
    loadingText.value = "Exporting...";
    try {
      const { jurisdiction, start, end, mode, cashier } = params;
      let query = `?jurisdiction=${jurisdiction}`;
      if (start != "") {
        query += `&start_date=${start}`;
      }
      if (end != "") {
        query += `&end_date=${end}`;
      }
      if (mode || mode != "") {
        query += `&mode=${mode}`;
      }
      if (cashier) {
        query += `&cashier=${cashier}`;
      }
      const item = type == "PDF" ? "pdf" : "excel";
      const { data } = await api.get(`reports/payments-to-${item}${query}`, {
        responseType: "blob"
      });
      isLoading.value = false;
      notf.success("Export Success, Downloading Report");
      const today = new Date();
      const _date = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
      const file_name = type == "PDF" ? `${_date}-payments.pdf` : `${_date}-payments.xlsx`;
      FileSaver_min.exports.saveAs(data, file_name);
    } catch (error) {
      isLoading.value = false;
      notf.error("Export Error, Try again!");
    }
  };
  return {
    fetchApplicationsCount,
    applicationReports,
    fetchReportJurisdictions,
    jurisdictions,
    fetchCashiers,
    cashiers,
    fetchPaymentCount,
    paymentReports,
    exportApplicationReport,
    exportPaymentsReport
  };
}
var ApplicationReports_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-1c6b10d2"), n = n(), popScopeId(), n);
const _hoisted_1$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "title is-6" }, "Applications Count Report", -1));
const _hoisted_2$2 = { class: "mt-4 is-flex is-flex-wrap-wrap" };
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { style: { "flex": "1 auto" } }, null, -1));
const _hoisted_4$2 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_5$1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_6$1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_7$1 = {
  key: 1,
  class: "is-center"
};
const _hoisted_8$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "title is-6" }, "No Reports", -1));
const _hoisted_9$1 = [
  _hoisted_8$1
];
const _sfc_main$3 = defineComponent({
  __name: "ApplicationReports",
  setup(__props) {
    const { fetchApplicationsCount, applicationReports, exportApplicationReport } = useReporting();
    const { jurisdictionTypes, jurisdictions, fetchJurisdictions } = useJuris();
    const { hasAccess } = useAuthorize();
    const loading = ref(false);
    const filters = reactive({
      jurisdiction_type: "ministry",
      jurisdiction_id: void 0,
      period: ""
    });
    const authorized = computed(() => hasAccess("view applications report"));
    watch(() => filters, () => {
      const juri = filters.jurisdiction_type;
      const juri_id = filters.jurisdiction_id;
      const start = filters.period[0] || new Date();
      const end = filters.period[1] || new Date();
      loading.value = true;
      const q = `?jurisdiction_type=${juri}${juri_id ? "&jurisdiction_id=" + juri_id : ""}&start_date=${start}&end_date=${end}`;
      fetchApplicationsCount(q).finally(() => loading.value = false);
    }, { deep: true });
    watch(() => filters.jurisdiction_type, (type) => {
      if (type) {
        loading.value = true;
        filters.jurisdiction_id = void 0;
        fetchJurisdictions(type).finally(() => loading.value = false);
      }
    }, { deep: true, immediate: true });
    const exportReport = (command) => {
      if (command == "pdf") {
        exportApplicationReport("PDF", `?jurisdiction_type=${filters.jurisdiction_type}${filters.jurisdiction_id ? "&jurisdiction_id=" + filters.jurisdiction_id : ""}
    &start_date=${new Date()}&end_date=${new Date()}`);
      }
      if (command == "excel") {
        exportApplicationReport("EXCEL", `?jurisdiction_type=${filters.jurisdiction_type}${filters.jurisdiction_id ? "&jurisdiction_id=" + filters.jurisdiction_id : ""}
    &start_date=${new Date()}&end_date=${new Date()}`);
      }
    };
    onMounted(() => {
      loading.value = true;
      fetchApplicationsCount(`?jurisdiction_type=${filters.jurisdiction_type}&start_date=${new Date()}&end_date=${new Date()}`).finally(() => loading.value = false);
    });
    return (_ctx, _cache) => {
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_table = resolveComponent("el-table");
      const _component_VLoader = _sfc_main$5;
      const _component_el_card = resolveComponent("el-card");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_VPlaceholderPage, {
          class: normalizeClass([!!authorized.value && "is-hidden"]),
          title: "UnAuthorized",
          subtitle: "You are not authorized to view Applications Report!",
          larger: ""
        }, null, 8, ["class"]),
        authorized.value ? (openBlock(), createBlock(_component_el_card, {
          key: 0,
          shadow: "never",
          class: "reports-card"
        }, {
          header: withCtx(() => [
            createBaseVNode("div", null, [
              _hoisted_1$3,
              createBaseVNode("div", _hoisted_2$2, [
                createVNode(_component_el_select, {
                  modelValue: filters.jurisdiction_type,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.jurisdiction_type = $event),
                  placeholder: "Jurisdiction Type",
                  filterable: "",
                  clearable: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jurisdictionTypes), (item) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: item.id,
                        value: item.id,
                        label: item.title
                      }, null, 8, ["value", "label"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(_component_el_select, {
                  modelValue: filters.jurisdiction_id,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filters.jurisdiction_id = $event),
                  placeholder: "Jurisdiction",
                  filterable: "",
                  clearable: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jurisdictions), (item) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: item.id,
                        value: item.id,
                        label: item.title
                      }, null, 8, ["value", "label"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(_component_el_date_picker, {
                  modelValue: filters.period,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filters.period = $event),
                  type: "daterange",
                  "range-separator": "To",
                  "start-placeholder": "Start Date",
                  "end-placeholder": "End Date",
                  format: "YYYY-MM-DD",
                  "value-format": "YYYY-MM-DD"
                }, null, 8, ["modelValue"]),
                _hoisted_3$2,
                createVNode(_component_el_dropdown, {
                  "hide-on-click": "",
                  onCommand: exportReport
                }, {
                  dropdown: withCtx(() => [
                    createVNode(_component_el_dropdown_menu, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_dropdown_item, { command: "pdf" }, {
                          default: withCtx(() => [
                            createTextVNode("Export PDF")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_dropdown_item, { command: "excel" }, {
                          default: withCtx(() => [
                            createTextVNode("Export EXCEL")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_el_button, { type: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode("Export")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_VLoader, {
              active: loading.value,
              translucent: true,
              style: { "min-height": "150px" }
            }, {
              default: withCtx(() => [
                unref(applicationReports) && unref(applicationReports).length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(applicationReports), (report, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "mb-5"
                  }, [
                    createVNode(_component_el_table, {
                      data: report.jurisdictions,
                      "show-summary": true,
                      "sum-text": "Total"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_table_column, {
                          label: report.wp.name
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_table_column, {
                              prop: "title",
                              label: "Jurisdiction"
                            }, {
                              default: withCtx(({ row }) => [
                                createBaseVNode("div", _hoisted_4$2, [
                                  createBaseVNode("span", null, toDisplayString(row.title), 1)
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_table_column, {
                              prop: "completedCount",
                              label: "Completed"
                            }, {
                              default: withCtx(({ row }) => [
                                createBaseVNode("div", _hoisted_5$1, [
                                  createBaseVNode("span", null, toDisplayString(row.completedCount), 1)
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_el_table_column, {
                              prop: "pendingCount",
                              label: "Pending"
                            }, {
                              default: withCtx(({ row }) => [
                                createBaseVNode("div", _hoisted_6$1, [
                                  createBaseVNode("span", null, toDisplayString(row.pendingCount), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["label"])
                      ]),
                      _: 2
                    }, 1032, ["data"])
                  ]);
                }), 128)) : (openBlock(), createElementBlock("div", _hoisted_7$1, _hoisted_9$1))
              ]),
              _: 1
            }, 8, ["active"])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1c6b10d2"]]);
var PaymentReports_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-3c4bba98"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "is-flex" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "title is-6" }, "Payments Report", -1));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { style: { "flex": "1 auto" } }, null, -1));
const _hoisted_4$1 = { class: "mt-4" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = {
  key: 1,
  class: "is-center"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "title is-6" }, "No Reports", -1));
const _hoisted_9 = [
  _hoisted_8
];
const _sfc_main$2 = defineComponent({
  __name: "PaymentReports",
  setup(__props) {
    const { jurisdictionTypes } = useJuris();
    const {
      fetchReportJurisdictions,
      jurisdictions,
      fetchCashiers,
      cashiers,
      fetchPaymentCount,
      paymentReports,
      exportPaymentsReport
    } = useReporting();
    const { hasAccess } = useAuthorize();
    const filters = reactive({
      jurisdiction: "",
      jurisdiction_type: "",
      period: "",
      cashier: "",
      payment_mode: ""
    });
    const today = hooks(new Date()).format("YYYY-MM-DD");
    const lastMonth = hooks(new Date()).subtract(1, "month").format("YYYY-MM-DD");
    const authorized = computed(() => hasAccess("view payment report"));
    const loading = ref(false);
    const paymentModes = [
      { type: "cash", label: " Cash" },
      { type: "mobile_money", label: "Mobile Money" },
      { type: "bank", label: "Bank" },
      { type: "cheque", label: " Cheque" },
      { type: "dpo", label: " DPO" }
    ];
    const getTotalAmount = (params) => {
      const { columns, data } = params;
      const sums = [];
      const sumIndex = Object.values(columns).length;
      const values = Object.values(data).map((item) => item.amount);
      sums[0] = "Total";
      const total = values.reduce((prev, curr) => {
        const val = Number(curr);
        const last = Number(prev);
        if (!Number.isNaN(val)) {
          return last + val;
        } else {
          return last;
        }
      }, 0);
      const _total = Number(total).toFixed(2);
      sums[sumIndex - 1] = _total;
      return sums;
    };
    watch(() => filters.jurisdiction_type, () => {
      if (filters.jurisdiction_type) {
        isLoading.value = true;
        fetchReportJurisdictions(filters.jurisdiction_type).then(() => {
          filters.jurisdiction = "";
          filters.cashier = "";
        }).finally(() => isLoading.value = false);
      }
    });
    watch(() => filters.jurisdiction, () => {
      if (filters.jurisdiction) {
        isLoading.value = true;
        fetchCashiers(filters.jurisdiction).then(() => {
          filters.cashier = "";
        }).finally(() => isLoading.value = false);
      }
    });
    watch(() => filters, () => {
      const { jurisdiction, period, cashier, payment_mode } = filters;
      if (jurisdiction) {
        loading.value = true;
        fetchPaymentCount({
          jurisdiction,
          mode: payment_mode,
          start: period ? period[0] : lastMonth,
          end: period ? period[1] : today,
          cashier: cashier ? cashier : null
        }).finally(() => loading.value = false);
      }
    }, { deep: true });
    const exportReport = (command) => {
      const { jurisdiction, period, cashier, payment_mode } = filters;
      if (command == "pdf") {
        exportPaymentsReport("PDF", {
          jurisdiction,
          mode: payment_mode,
          start: period ? period[0] : lastMonth,
          end: period ? period[1] : today,
          cashier: cashier ? cashier : null
        });
      }
      if (command == "excel") {
        exportPaymentsReport("EXCEL", {
          jurisdiction,
          mode: payment_mode,
          start: period ? period[0] : lastMonth,
          end: period ? period[1] : today,
          cashier: cashier ? cashier : null
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_table = resolveComponent("el-table");
      const _component_VLoader = _sfc_main$5;
      const _component_el_card = resolveComponent("el-card");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_VPlaceholderPage, {
          class: normalizeClass([!!authorized.value && "is-hidden"]),
          title: "UnAuthorized",
          subtitle: "You are not authorized to view Payments Report!",
          larger: ""
        }, null, 8, ["class"]),
        authorized.value ? (openBlock(), createBlock(_component_el_card, {
          key: 0,
          shadow: "never",
          class: "reports-card"
        }, {
          header: withCtx(() => [
            createBaseVNode("div", null, [
              createBaseVNode("div", _hoisted_1$2, [
                _hoisted_2$1,
                _hoisted_3$1,
                createVNode(_component_el_dropdown, {
                  "hide-on-click": "",
                  onCommand: exportReport
                }, {
                  dropdown: withCtx(() => [
                    createVNode(_component_el_dropdown_menu, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_dropdown_item, { command: "pdf" }, {
                          default: withCtx(() => [
                            createTextVNode("Export PDF")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_dropdown_item, { command: "excel" }, {
                          default: withCtx(() => [
                            createTextVNode("Export EXCEL")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_el_button, { type: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode("Export")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_4$1, [
                createVNode(_component_el_select, {
                  modelValue: filters.jurisdiction_type,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.jurisdiction_type = $event),
                  placeholder: "Jurisdiction Type",
                  filterable: "",
                  clearable: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jurisdictionTypes), (item) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: item.id,
                        value: item.id,
                        label: item.title
                      }, null, 8, ["value", "label"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(_component_el_select, {
                  modelValue: filters.jurisdiction,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filters.jurisdiction = $event),
                  placeholder: "Jurisdiction",
                  filterable: "",
                  clearable: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jurisdictions), (item) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: item.id,
                        value: item.id,
                        label: item.title
                      }, null, 8, ["value", "label"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(_component_el_select, {
                  modelValue: filters.cashier,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filters.cashier = $event),
                  placeholder: "Cashier",
                  filterable: "",
                  clearable: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(cashiers), (item) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key: item.id,
                        value: item.id,
                        label: item.name
                      }, null, 8, ["value", "label"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(_component_el_select, {
                  modelValue: filters.payment_mode,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filters.payment_mode = $event),
                  placeholder: "Payment Methods",
                  filterable: "",
                  clearable: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(), createElementBlock(Fragment, null, renderList(paymentModes, (item) => {
                      return createVNode(_component_el_option, {
                        key: item.type,
                        value: item.type,
                        label: item.label
                      }, null, 8, ["value", "label"]);
                    }), 64))
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(_component_el_date_picker, {
                  modelValue: filters.period,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => filters.period = $event),
                  type: "daterange",
                  "range-separator": "To",
                  "start-placeholder": "Start Date",
                  "end-placeholder": "End Date",
                  style: { "width": "200px" },
                  format: "YYYY-MM-DD",
                  "value-format": "YYYY-MM-DD"
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_VLoader, {
              active: loading.value,
              translucent: true,
              style: { "min-height": "150px" }
            }, {
              default: withCtx(() => [
                unref(paymentReports) && unref(paymentReports).length > 0 ? (openBlock(), createBlock(_component_el_table, {
                  key: 0,
                  data: unref(paymentReports),
                  "show-summary": true,
                  "summary-method": getTotalAmount,
                  "sum-text": "Total Amount",
                  style: { "width": "100%" }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_table_column, { label: "Receipt No." }, {
                      default: withCtx(({ row }) => [
                        createBaseVNode("span", null, toDisplayString(row.manual_receipt_no), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, { label: "Payment Method" }, {
                      default: withCtx(({ row }) => [
                        createBaseVNode("span", null, toDisplayString(row.mode), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, { label: "Recipient" }, {
                      default: withCtx(({ row }) => [
                        row.recipient ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(`${row.recipient.first_name}|${row.recipient.email}`), 1)) : (openBlock(), createElementBlock("span", _hoisted_6, "No Recipient"))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, { label: "Timestamp" }, {
                      default: withCtx(({ row }) => [
                        createBaseVNode("span", null, toDisplayString(_ctx.$filters.bDate(new Date(row.created_at))), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, { label: "Amount" }, {
                      default: withCtx(({ row }) => [
                        createBaseVNode("span", null, toDisplayString(row.amount), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["data"])) : (openBlock(), createElementBlock("div", _hoisted_7, _hoisted_9))
              ]),
              _: 1
            }, 8, ["active"])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3c4bba98"]]);
const _hoisted_1$1 = { class: "tabs-inner" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = {
  key: 0,
  class: "tab-naver"
};
const _hoisted_4 = { class: "tab-content is-active" };
const _sfc_main$1 = defineComponent({
  __name: "VTabs",
  props: {
    tabs: {},
    selected: { default: void 0 },
    type: { default: void 0 },
    align: { default: void 0 },
    slider: { type: Boolean },
    slow: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const activeValue = ref(props.selected);
    const sliderClass = computed(() => {
      if (!props.slider) {
        return "";
      }
      if (props.type === "rounded") {
        if (props.tabs.length === 3) {
          return "is-triple-slider";
        }
        if (props.tabs.length === 2) {
          return "is-slider";
        }
        return "";
      }
      if (!props.type) {
        if (props.tabs.length === 3) {
          return "is-squared is-triple-slider";
        }
        if (props.tabs.length === 2) {
          return "is-squared is-slider";
        }
      }
      return "";
    });
    return (_ctx, _cache) => {
      const _component_VIcon = _sfc_main$6;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["tabs-wrapper", [sliderClass.value]])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", {
            class: normalizeClass(["tabs", [
              props.align === "centered" && "is-centered",
              props.align === "right" && "is-right",
              props.type === "rounded" && !props.slider && "is-toggle is-toggle-rounded",
              props.type === "toggle" && "is-toggle",
              props.type === "boxed" && "is-boxed"
            ]])
          }, [
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tabs, (tab, key) => {
                return openBlock(), createElementBlock("li", {
                  key,
                  class: normalizeClass([activeValue.value === tab.value && "is-active"])
                }, [
                  createBaseVNode("a", {
                    onClick: ($event) => activeValue.value = tab.value
                  }, [
                    tab.icon ? (openBlock(), createBlock(_component_VIcon, {
                      key: 0,
                      icon: tab.icon
                    }, null, 8, ["icon"])) : createCommentVNode("", true),
                    createBaseVNode("span", null, toDisplayString(tab.label), 1)
                  ], 8, _hoisted_2)
                ], 2);
              }), 128)),
              sliderClass.value ? (openBlock(), createElementBlock("li", _hoisted_3)) : createCommentVNode("", true)
            ])
          ], 2)
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(Transition, {
            name: props.slow ? "fade-slow" : "fade-fast",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "tab", { activeValue: activeValue.value })
            ]),
            _: 3
          }, 8, ["name"])
        ])
      ], 2);
    };
  }
});
const _hoisted_1 = {
  class: "page-content-inner",
  style: { "background-color": "rgba(255,255,255,1)" }
};
const _sfc_main = defineComponent({
  __name: "index",
  setup(__props) {
    const { hasAccess } = useAuthorize();
    const tabs = reactive([
      { label: "Application Reports", value: "application", isActive: hasAccess("view applications report") },
      { label: "Payment Reports", value: "payment", isActive: hasAccess("view payment report") }
    ]);
    const filteredTabs = computed(() => tabs.filter((t) => t.isActive == true));
    const selectedItem = ref("application");
    return (_ctx, _cache) => {
      const _component_ApplicationReports = __unplugin_components_0;
      const _component_PaymentReports = __unplugin_components_1;
      const _component_VTabs = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_VTabs, {
          selected: selectedItem.value,
          tabs: filteredTabs.value
        }, {
          tab: withCtx(({ activeValue }) => [
            activeValue == "application" ? (openBlock(), createBlock(_component_ApplicationReports, { key: 0 })) : activeValue == "payment" ? (openBlock(), createBlock(_component_PaymentReports, { key: 1 })) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["selected", "tabs"])
      ]);
    };
  }
});
export { _sfc_main as default };
