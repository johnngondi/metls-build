import { _ as _sfc_main$2 } from "./VTag.4c37a695.js";
import { e as useApi, d as _sfc_main$3, h as _sfc_main$4, _ as _export_sfc, a as useAuthorize, k as _sfc_main$7, j as _sfc_main$8, b as useNotyf } from "./index.4ea6d167.js";
import { _ as __unplugin_components_2 } from "./VControl.a1e5c3aa.js";
import { _ as _sfc_main$6 } from "./VField.897209dd.js";
import { _ as _sfc_main$5 } from "./VLoader.6d10ad6d.js";
import { u as useApply } from "./useApply.4fc76bc2.js";
import { u as usePos } from "./usePos.3ccf386e.js";
import { d as defineComponent, a6 as toRefs, r as ref, h as computed, a7 as watch, o as openBlock, b as createElementBlock, s as createVNode, t as withCtx, f as createBaseVNode, A as toDisplayString, v as unref, z as createTextVNode, x as createBlock, y as createCommentVNode, a2 as hooks, p as pushScopeId, e as popScopeId, F as useRoute, a as useRouter, U as useI18n, I as onMounted, m as resolveComponent, K as Fragment, J as renderList } from "./vendor.11f8b2c5.js";
var Invoice_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-5f9e169e"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "columns" };
const _hoisted_2$1 = { class: "column is-12" };
const _hoisted_3$1 = {
  key: 0,
  class: "invoice-wrapper"
};
const _hoisted_4$1 = { class: "table" };
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", null, "Invoice No."),
    /* @__PURE__ */ createBaseVNode("th", null, "Date"),
    /* @__PURE__ */ createBaseVNode("th", null, "Status"),
    /* @__PURE__ */ createBaseVNode("th", null, "Paid"),
    /* @__PURE__ */ createBaseVNode("th", null, "Balance"),
    /* @__PURE__ */ createBaseVNode("th", null, "Total"),
    /* @__PURE__ */ createBaseVNode("th", null, "Actions")
  ])
], -1));
const _hoisted_6$1 = { key: 1 };
const _hoisted_7$1 = { key: 1 };
const _sfc_main$1 = defineComponent({
  __name: "Invoice",
  props: {
    invoiceNo: {
      type: Number,
      required: true
    },
    bill: {
      type: Object,
      default: null,
      required: false
    }
  },
  setup(__props) {
    const props = __props;
    const api = useApi();
    const { invoice: invoiceData, fetchInvoice } = usePos();
    const { RESOURCE_URL } = useApply();
    const { invoiceNo, bill } = toRefs(props);
    const isFetchingInvoice = ref(false);
    const initializingPayment = ref(false);
    const redirectNotice = ref(false);
    const invoice = computed(() => bill.value || invoiceData.value);
    const format = (value) => {
      if (value) {
        return hooks(String(value)).format("MM/DD/YYYY hh:mm");
      }
    };
    const open = (url) => {
      window.open(url, "_blank");
    };
    const initializePayment = async (invoiceId) => {
      initializingPayment.value = true;
      const response = await api.post("/create_token", {
        "invoice_id": invoiceId
      });
      console.log(response);
      if (response.status === 200 && response.data.redirectURL) {
        redirectNotice.value = true;
        console.log("Redirecting to:", response.data.redirectURL);
        window.location.href = response.data.redirectURL;
      } else {
        console.error("Invalid response or missing redirect URL:", response);
      }
    };
    watch(() => bill.value, () => {
      if (!bill) {
        isFetchingInvoice.value = true;
        fetchInvoice(invoiceNo.value).finally(() => isFetchingInvoice.value = false);
      }
    }, {
      immediate: true
    });
    return (_ctx, _cache) => {
      const _component_VTag = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VButtons = _sfc_main$4;
      const _component_VLoader = _sfc_main$5;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_VLoader, {
          size: "large",
          active: isFetchingInvoice.value,
          lighter: "",
          style: { "min-height": "100px" }
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$1, [
              createBaseVNode("div", _hoisted_2$1, [
                invoice.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                  createBaseVNode("table", _hoisted_4$1, [
                    _hoisted_5$1,
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", null, "#" + toDisplayString(invoice.value.id), 1),
                        createBaseVNode("td", null, toDisplayString(format(invoice.value.created_at)), 1),
                        createBaseVNode("td", null, [
                          createVNode(_component_VTag, {
                            label: invoice.value.status == 0 ? "Pending Payment" : "Paid",
                            color: invoice.value.status == 0 ? "warning" : "primary"
                          }, null, 8, ["label", "color"])
                        ]),
                        createBaseVNode("td", null, toDisplayString(_ctx.$filters.currencyMK(invoice.value.paid)), 1),
                        createBaseVNode("td", null, toDisplayString(_ctx.$filters.currencyMK(invoice.value.total - invoice.value.paid)), 1),
                        createBaseVNode("td", null, toDisplayString(_ctx.$filters.currencyMK(invoice.value.total)), 1),
                        createBaseVNode("td", null, [
                          createVNode(_component_VButtons, null, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                class: "d-inline",
                                light: "",
                                color: "info",
                                onClick: _cache[0] || (_cache[0] = ($event) => open(unref(RESOURCE_URL) + `${invoice.value.status == 1 ? "receipts" : "invoices"}/${invoice.value.id}/view`))
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("view")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_VButton, {
                                class: "d-inline",
                                light: "",
                                color: "info",
                                onClick: _cache[1] || (_cache[1] = ($event) => initializePayment(invoice.value.id))
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(initializingPayment.value ? "initializing payment..." : "pay"), 1)
                                ]),
                                _: 1
                              }),
                              invoice.value.status !== 0 ? (openBlock(), createBlock(_component_VButton, {
                                key: 0,
                                light: "",
                                color: "info",
                                onClick: _cache[2] || (_cache[2] = ($event) => open(unref(RESOURCE_URL) + `receipts/${invoice.value.id}/download`))
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Download")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              redirectNotice.value ? (openBlock(), createElementBlock("span", _hoisted_6$1, "You will now be redirected to DPO platform to submit your payment")) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ])
                ])) : (openBlock(), createElementBlock("p", _hoisted_7$1, "Invoice Not Available"))
              ])
            ])
          ]),
          _: 1
        }, 8, ["active"])
      ]);
    };
  }
});
var __unplugin_components_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5f9e169e"]]);
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "section" };
const _hoisted_2 = { class: "dialog-footer" };
const _hoisted_3 = { class: "dialog-footer" };
const _hoisted_4 = {
  class: "container",
  style: { "height": "100%" }
};
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { class: "c-header mb-5" };
const _hoisted_7 = { class: "title mb-1 is-4" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = { class: "mb-3" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("b", null, "Application Status", -1);
const _hoisted_11 = { class: "mb-5" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_13 = {
  key: 0,
  class: "mb-3 mt-2"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("h1", null, "Warning!", -1);
const _hoisted_15 = { class: "c-body" };
const _hoisted_16 = { class: "mb-3" };
const _hoisted_17 = { class: "title is-5 mb-1" };
const _hoisted_18 = { class: "mb-3" };
const _hoisted_19 = { class: "columns is-multiline" };
const _hoisted_20 = { class: "mb-2" };
const _hoisted_21 = { class: "title is-6" };
const _hoisted_22 = {
  key: 1,
  class: "mb-2"
};
const _hoisted_23 = { class: "title is-6" };
const _hoisted_24 = {
  key: 2,
  class: "mb-2"
};
const _hoisted_25 = { class: "title is-6" };
const _hoisted_26 = { key: 0 };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_28 = { key: 0 };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("h3", { class: "title is-5 mb-1" }, "Related Application", -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("p", null, "This application was autocreated by the current Application.", -1);
const _hoisted_31 = { class: "mt-4" };
const _hoisted_32 = {
  key: 0,
  class: "table",
  style: { "width": "100%" }
};
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", null, "Title"),
    /* @__PURE__ */ createBaseVNode("th", null, "Status"),
    /* @__PURE__ */ createBaseVNode("th")
  ])
], -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("td", null, "status", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_36 = { key: 1 };
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("h3", { class: "title is-5 mb-1" }, "Bill", -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("p", null, "Billing information", -1);
const _hoisted_39 = { class: "columns mt-4" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_41 = { key: 0 };
const _hoisted_42 = { class: "title is-5 mb-1" };
const _hoisted_43 = { class: "mt-4" };
const _hoisted_44 = { key: 1 };
const _hoisted_45 = { key: 2 };
const _sfc_main = defineComponent({
  __name: "index",
  setup(__props) {
    const {
      application,
      fetchApplication,
      workflowStatus,
      updateApplicationStatus,
      RESOURCE_URL,
      fetchApplicationStatus,
      applicationStatus
    } = useApply();
    const route = useRoute();
    const router = useRouter();
    const notf = useNotyf();
    const { hasAccess } = useAuthorize();
    const { t } = useI18n();
    const applicationId = computed(() => route.params.id);
    const isLoading = ref(true);
    const canReject = hasAccess("reject application");
    const canApprove = hasAccess("approve application");
    const item = computed(() => application.value.application);
    const steps = computed(() => application.value.steps || []);
    const jurisdiction = computed(() => application.value.jurisdiction);
    const applicant = computed(() => application.value.applicantInfo);
    const application_title = computed(() => {
      var _a, _b;
      return `${(_a = item.value) == null ? void 0 : _a.title} at ${(_b = jurisdiction.value) == null ? void 0 : _b.title}`;
    });
    const bill = computed(() => application.value.billing);
    const isParent = computed(() => application.value.is_parent);
    const childApplication = computed(() => application.value.related);
    const isCertified = computed(() => item.value.has_certificate ? true : false);
    const rejectDialog = ref(false);
    const approveDialog = ref(false);
    const comment = ref("");
    const commentRules = ref({
      comment: [{ required: true, message: "Please provide a comment", trigger: "blur" }]
    });
    const edit = () => {
      router.push({ name: "home-application-id-edit", params: { id: applicationId.value } });
    };
    const getStatus = computed(() => {
      var _a;
      return workflowStatus(((_a = item.value) == null ? void 0 : _a.status) || 0);
    });
    const reject = async () => {
      try {
        isLoading.value = true;
        await updateApplicationStatus(applicationId.value, {
          status: 2,
          comment: comment.value
        });
        isLoading.value = false;
        rejectDialog.value = false;
        fetchApplication(applicationId.value);
        notf.success("Application Rejected");
        comment.value = "";
      } catch (error) {
        console.log(error);
        isLoading.value = false;
        notf.error("Application Not Rejected");
      }
    };
    const approve = async () => {
      try {
        isLoading.value = true;
        await updateApplicationStatus(applicationId.value, {
          status: 1,
          comment: comment.value || "Test Comment"
        });
        isLoading.value = false;
        approveDialog.value = false;
        fetchApplication(applicationId.value);
        comment.value = "";
        notf.success("Application Approved");
      } catch (error) {
        isLoading.value = false;
        console.log(error);
        notf.error("Application Not Approved");
      }
    };
    const status = computed(() => applicationStatus.value || null);
    const open = (url) => {
      window.open(url, "_blank");
    };
    onMounted(() => {
      fetchApplication(applicationId.value).finally(() => isLoading.value = false);
      fetchApplicationStatus(applicationId.value);
    });
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dialog = resolveComponent("el-dialog");
      const _component_VTag = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$6;
      const _component_VMessage = _sfc_main$7;
      const _component_VButtons = _sfc_main$4;
      const _component_Invoice = __unplugin_components_6;
      const _component_VCard = _sfc_main$8;
      const _component_VLoader = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_dialog, {
          modelValue: rejectDialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => rejectDialog.value = $event),
          title: "Are you sure to Reject!",
          width: "30%",
          "close-on-click-modal": false,
          "close-on-press-escape": false
        }, {
          footer: withCtx(() => [
            createBaseVNode("span", _hoisted_2, [
              createVNode(_component_el_button, {
                onClick: _cache[1] || (_cache[1] = ($event) => {
                  rejectDialog.value = false;
                  comment.value = "";
                })
              }, {
                default: withCtx(() => [
                  createTextVNode("Cancel")
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                disabled: comment.value == "",
                type: "danger",
                onClick: reject
              }, {
                default: withCtx(() => [
                  createTextVNode("Reject")
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref: "rejectForm",
              "label-position": "top",
              rules: commentRules.value
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "Comment",
                  prop: "comment"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: comment.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => comment.value = $event),
                      type: "textarea",
                      placeholder: "Add Comment"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["rules"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_el_dialog, {
          modelValue: approveDialog.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => approveDialog.value = $event),
          title: "Are you sure to Approve!",
          width: "30%",
          "close-on-click-modal": false,
          "close-on-press-escape": false
        }, {
          footer: withCtx(() => [
            createBaseVNode("span", _hoisted_3, [
              createVNode(_component_el_button, {
                onClick: _cache[4] || (_cache[4] = ($event) => {
                  approveDialog.value = false;
                  comment.value = "";
                })
              }, {
                default: withCtx(() => [
                  createTextVNode("Cancel")
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                type: "success",
                onClick: approve
              }, {
                default: withCtx(() => [
                  createTextVNode("Approve")
                ]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref: "rejectForm",
              "label-position": "top"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, { label: "Comment" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: comment.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => comment.value = $event),
                      type: "textarea",
                      placeholder: "Add Comment"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 512)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_VLoader, {
            size: "large",
            active: isLoading.value,
            style: { "min-height": "150px" }
          }, {
            default: withCtx(() => [
              createVNode(_component_VCard, {
                radius: "smooth",
                class: "card"
              }, {
                default: withCtx(() => [
                  item.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                    createBaseVNode("div", _hoisted_6, [
                      createBaseVNode("h3", _hoisted_7, toDisplayString(application_title.value), 1),
                      applicant.value ? (openBlock(), createElementBlock("p", _hoisted_8, [
                        createTextVNode("Applicant: "),
                        createBaseVNode("em", null, toDisplayString(applicant.value.name), 1),
                        createTextVNode(" | "),
                        createBaseVNode("em", null, toDisplayString(applicant.value.email), 1),
                        createTextVNode(" | "),
                        createBaseVNode("em", null, toDisplayString(applicant.value.phone || "phone N/A"), 1)
                      ])) : createCommentVNode("", true),
                      createBaseVNode("p", null, "Applied on: " + toDisplayString(_ctx.$filters.bDate(item.value.created_at)), 1)
                    ]),
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("p", null, [
                        _hoisted_10,
                        createTextVNode(": "),
                        createVNode(_component_VTag, {
                          label: getStatus.value,
                          color: item.value.status == 2 ? "danger" : "primary"
                        }, null, 8, ["label", "color"])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", null, [
                        createVNode(_component_VField, { addons: "" }, {
                          default: withCtx(() => [
                            item.value.status == 0 ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_VButton, { onClick: edit }, {
                                  default: withCtx(() => [
                                    createTextVNode("Edit Application")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            item.value.status == 0 && item.value.status != 1 && unref(canApprove) ? (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(_component_VButton, {
                                  color: "primary",
                                  onClick: _cache[6] || (_cache[6] = ($event) => approveDialog.value = true)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Approve Application")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            item.value.status == 0 && item.value.status != 2 && unref(canReject) ? (openBlock(), createBlock(_component_VControl, { key: 2 }, {
                              default: withCtx(() => [
                                createVNode(_component_VButton, {
                                  color: "danger",
                                  onClick: _cache[7] || (_cache[7] = ($event) => rejectDialog.value = true)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Reject Application")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _hoisted_12,
                    unref(application) && unref(application).warning_body != null ? (openBlock(), createElementBlock("div", _hoisted_13, [
                      createVNode(_component_VMessage, { color: "warning" }, {
                        default: withCtx(() => [
                          createBaseVNode("div", null, [
                            _hoisted_14,
                            createBaseVNode("p", null, toDisplayString(unref(application).warning_body), 1),
                            createBaseVNode("p", null, toDisplayString(_ctx.$filters.bDate(unref(application).warning_at)), 1)
                          ])
                        ]),
                        _: 1
                      })
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_15, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(steps.value, (step, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: index,
                          class: "mb-5 block"
                        }, [
                          createBaseVNode("div", _hoisted_16, [
                            createBaseVNode("h3", _hoisted_17, toDisplayString(step.stepInfo.title), 1),
                            createBaseVNode("p", null, toDisplayString(step.stepInfo.description), 1)
                          ]),
                          createBaseVNode("div", _hoisted_18, [
                            createBaseVNode("div", _hoisted_19, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(step.fields, (field, j) => {
                                return openBlock(), createElementBlock("div", {
                                  key: j,
                                  class: "column is-4"
                                }, [
                                  field.type == "file" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                    createBaseVNode("div", _hoisted_20, [
                                      createBaseVNode("span", _hoisted_21, toDisplayString(field.label), 1),
                                      createBaseVNode("p", null, toDisplayString(field.description), 1)
                                    ]),
                                    createVNode(_component_VButtons, null, {
                                      default: withCtx(() => [
                                        field.value != null ? (openBlock(), createBlock(_component_VButton, {
                                          key: 0,
                                          light: "",
                                          color: "info",
                                          onClick: ($event) => open(field.value)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("view")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ], 64)) : createCommentVNode("", true),
                                  field.type == "text" || field.type == "time" ? (openBlock(), createElementBlock("div", _hoisted_22, [
                                    createBaseVNode("span", _hoisted_23, toDisplayString(field.label), 1),
                                    createBaseVNode("p", null, [
                                      createBaseVNode("b", null, toDisplayString(field.value || "Null"), 1)
                                    ])
                                  ])) : createCommentVNode("", true),
                                  field.type == "textarea" ? (openBlock(), createElementBlock("div", _hoisted_24, [
                                    createBaseVNode("span", _hoisted_25, toDisplayString(field.label), 1),
                                    createBaseVNode("p", null, [
                                      createBaseVNode("b", null, toDisplayString(field.value || "Null"), 1)
                                    ])
                                  ])) : createCommentVNode("", true)
                                ]);
                              }), 128))
                            ]),
                            step.fields.length < 1 ? (openBlock(), createElementBlock("p", _hoisted_26, "No Values")) : createCommentVNode("", true)
                          ]),
                          _hoisted_27
                        ]);
                      }), 128)),
                      isParent.value ? (openBlock(), createElementBlock("div", _hoisted_28, [
                        _hoisted_29,
                        _hoisted_30,
                        createBaseVNode("div", _hoisted_31, [
                          childApplication.value ? (openBlock(), createElementBlock("table", _hoisted_32, [
                            _hoisted_33,
                            createBaseVNode("tbody", null, [
                              createBaseVNode("tr", null, [
                                createBaseVNode("td", null, toDisplayString(childApplication.value.name), 1),
                                _hoisted_34,
                                createBaseVNode("td", null, [
                                  createVNode(_component_VButtons, null, {
                                    default: withCtx(() => [
                                      item.value.status == 0 && item.value.status != 2 && item.value.status != 1 ? (openBlock(), createBlock(_component_VButton, {
                                        key: 0,
                                        to: { name: "home-application-id-edit", params: { id: childApplication.value.id } },
                                        color: "primary",
                                        light: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Edit Application")
                                        ]),
                                        _: 1
                                      }, 8, ["to"])) : createCommentVNode("", true),
                                      item.value.status == 1 || item.value.status == 2 ? (openBlock(), createBlock(_component_VButton, {
                                        key: 1,
                                        to: { name: "home-application-id", params: { id: childApplication.value.id } },
                                        color: "info",
                                        light: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("View Application")
                                        ]),
                                        _: 1
                                      }, 8, ["to"])) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        _hoisted_35
                      ])) : createCommentVNode("", true),
                      bill.value ? (openBlock(), createElementBlock("div", _hoisted_36, [
                        _hoisted_37,
                        _hoisted_38,
                        createBaseVNode("div", _hoisted_39, [
                          bill.value ? (openBlock(), createBlock(_component_Invoice, {
                            key: 0,
                            class: "column sm-12 is-10",
                            "invoice-no": bill.value.id,
                            bill: bill.value
                          }, null, 8, ["invoice-no", "bill"])) : createCommentVNode("", true)
                        ]),
                        _hoisted_40
                      ])) : createCommentVNode("", true),
                      status.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                        status.value.status == 1 && isCertified.value ? (openBlock(), createElementBlock("div", _hoisted_41, [
                          createBaseVNode("h3", _hoisted_42, toDisplayString(unref(t)("cert.title", 2)), 1),
                          createBaseVNode("p", null, toDisplayString(unref(t)("cert.download_desc")), 1),
                          createBaseVNode("div", _hoisted_43, [
                            createVNode(_component_VButtons, null, {
                              default: withCtx(() => [
                                createVNode(_component_VButton, {
                                  color: "info",
                                  light: "",
                                  onClick: _cache[8] || (_cache[8] = ($event) => open(unref(RESOURCE_URL) + `applications/${applicationId.value}/certificate/view`))
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("view")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_VButton, {
                                  color: "primary",
                                  light: "",
                                  onClick: _cache[9] || (_cache[9] = ($event) => open(unref(RESOURCE_URL) + `applications/${applicationId.value}/certificate/download`))
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Download")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])) : createCommentVNode("", true)
                      ], 64)) : createCommentVNode("", true)
                    ])
                  ])) : isLoading.value ? (openBlock(), createElementBlock("span", _hoisted_44, " Loading Application ")) : (openBlock(), createElementBlock("span", _hoisted_45, " Application Not Found! "))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["active"])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
