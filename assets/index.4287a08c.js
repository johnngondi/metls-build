import { _ as __unplugin_components_2 } from "./VControl.a1e5c3aa.js";
import { d as _sfc_main$2, _ as _export_sfc, b as useNotyf } from "./index.4ea6d167.js";
import { _ as _sfc_main$3 } from "./VField.897209dd.js";
import { _ as _sfc_main$4 } from "./VTag.4c37a695.js";
import { _ as _sfc_main$5 } from "./VLoader.6d10ad6d.js";
import { d as defineComponent, r as ref, h as computed, a7 as watch, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, s as createVNode, t as withCtx, ah as withDirectives, am as vModelText, z as createTextVNode, v as unref, A as toDisplayString, y as createCommentVNode, K as Fragment, J as renderList, p as pushScopeId, e as popScopeId } from "./vendor.11f8b2c5.js";
import { u as usePos } from "./usePos.3ccf386e.js";
import { u as useApply } from "./useApply.4fc76bc2.js";
var PaymentPos_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-73bc14d8"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "pos-dashboard" };
const _hoisted_2 = { class: "columns" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "column is-md-8" }, null, -1));
const _hoisted_4 = { class: "column is-md-4" };
const _hoisted_5 = { class: "pos-wrapper" };
const _hoisted_6 = { class: "columns" };
const _hoisted_7 = { class: "column is-12" };
const _hoisted_8 = { class: "columns" };
const _hoisted_9 = { class: "column is-12" };
const _hoisted_10 = {
  key: 0,
  class: "invoice-wrapper"
};
const _hoisted_11 = { class: "invoice-header mb-5 columns" };
const _hoisted_12 = { class: "column is-8" };
const _hoisted_13 = { class: "title is-5 mb-1" };
const _hoisted_14 = { key: 0 };
const _hoisted_15 = { class: "column is-4" };
const _hoisted_16 = ["href"];
const _hoisted_17 = { class: "invoice-items mt-5 mb-5" };
const _hoisted_18 = { class: "table thead-light" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("td", null, "Item"),
    /* @__PURE__ */ createBaseVNode("td", null, "Price"),
    /* @__PURE__ */ createBaseVNode("td", null, "Total")
  ])
], -1));
const _hoisted_20 = { class: "invoice-footer" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Total:", -1));
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Paid:", -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Balance:", -1));
const _hoisted_25 = { key: 1 };
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("hr", null, null, -1));
const _hoisted_27 = { class: "columns" };
const _hoisted_28 = {
  key: 0,
  class: "column is-12"
};
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text is-4" }, "Receive Payment", -1));
const _hoisted_30 = { class: "columns mt-4" };
const _hoisted_31 = { class: "column is-4" };
const _hoisted_32 = { class: "column is-4" };
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Cash", -1));
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Mobile Money", -1));
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Bank", -1));
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Cheque", -1));
const _hoisted_37 = { class: "column is-4" };
const _hoisted_38 = { class: "columns" };
const _hoisted_39 = { class: "column is-12" };
const _hoisted_40 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "button is-static" }, "Amount", -1));
const _hoisted_41 = { class: "columns" };
const _hoisted_42 = { class: "column is-12" };
const _hoisted_43 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "button is-static" }, "Change", -1));
const _hoisted_44 = { class: "columns" };
const _hoisted_45 = { class: "column is-12" };
const _hoisted_46 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "button is-static" }, "Amount to receipt", -1));
const _hoisted_47 = ["max"];
const _hoisted_48 = { class: "columns" };
const _hoisted_49 = { class: "column is-12" };
const _sfc_main$1 = defineComponent({
  __name: "PaymentPos",
  setup(__props) {
    const { invoice, fetchInvoice, makePayment } = usePos();
    const notfy = useNotyf();
    const { RESOURCE_URL } = useApply();
    const isFetchingInvoice = ref(false);
    const invoice_no = ref(0);
    const paymentForm = ref({
      mode: "cash",
      manual_receipt_no: "",
      amount: 0,
      reference: "",
      notes: ""
    });
    const processAmount = ref({
      amount: 0,
      change: 0,
      payable_amount: 0
    });
    const resetForm = () => {
      paymentForm.value = {
        mode: "cash",
        manual_receipt_no: "",
        amount: 0,
        reference: "",
        notes: ""
      };
      processAmount.value = {
        amount: 0,
        change: 0,
        payable_amount: 0
      };
    };
    const client = computed(() => {
      var _a;
      return (_a = invoice.value) == null ? void 0 : _a.invoiceable;
    });
    const max_amount = computed(() => {
      var _a, _b;
      return ((_a = invoice.value) == null ? void 0 : _a.total) - ((_b = invoice.value) == null ? void 0 : _b.paid);
    });
    const balance = computed(() => {
      var _a, _b;
      return ((_a = invoice.value) == null ? void 0 : _a.total) - ((_b = invoice.value) == null ? void 0 : _b.paid);
    });
    watch(() => processAmount.value, () => {
      if (invoice.value) {
        const { amount, change } = processAmount.value;
        processAmount.value.change = balance.value > amount ? 0 : amount - balance.value;
        processAmount.value.payable_amount = amount - change;
      }
    }, { deep: true });
    const search = () => {
      if (!isFetchingInvoice.value) {
        isFetchingInvoice.value = true;
        fetchInvoice(invoice_no.value).finally(() => {
          isFetchingInvoice.value = false;
          resetForm();
        });
      }
    };
    const pay = async () => {
      try {
        paymentForm.value.amount = processAmount.value.payable_amount;
        const { data } = await makePayment(invoice_no.value, paymentForm.value);
        notfy.dismissAll();
        notfy.success("Invoice Payment Successful");
        await fetchInvoice(invoice_no.value);
        resetForm();
      } catch (error) {
        console.log(error.response);
        notfy.error("Invoice Payment Error");
      }
    };
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VButton = _sfc_main$2;
      const _component_VField = _sfc_main$3;
      const _component_VTag = _sfc_main$4;
      const _component_VLoader = _sfc_main$5;
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  createVNode(_component_VField, { addons: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => invoice_no.value = $event),
                            type: "number",
                            placeholder: "Invoice Number",
                            class: "input"
                          }, null, 512), [
                            [vModelText, invoice_no.value]
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_VButton, {
                            color: "primary",
                            onClick: search
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Search")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(_component_VLoader, {
                size: "large",
                active: isFetchingInvoice.value,
                lighter: "",
                style: { "min-height": "100px" }
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      unref(invoice) ? (openBlock(), createElementBlock("div", _hoisted_10, [
                        createBaseVNode("div", _hoisted_11, [
                          createBaseVNode("div", _hoisted_12, [
                            createBaseVNode("h4", _hoisted_13, "Invoice: #" + toDisplayString(unref(invoice).id), 1),
                            createBaseVNode("p", null, "Date: " + toDisplayString(unref(invoice).created_at), 1),
                            client.value ? (openBlock(), createElementBlock("p", _hoisted_14, toDisplayString(client.value.name) + " | " + toDisplayString(client.value.email) + " | " + toDisplayString(client.value.phone || "N/A"), 1)) : createCommentVNode("", true),
                            createVNode(_component_VTag, {
                              label: unref(invoice).status == 0 ? "Pending Payment" : "Paid",
                              color: unref(invoice).status == 0 ? "warning" : "primary"
                            }, null, 8, ["label", "color"])
                          ]),
                          createBaseVNode("div", _hoisted_15, [
                            createVNode(_component_VButton, {
                              color: "primary",
                              outlined: ""
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("a", {
                                  href: unref(RESOURCE_URL) + `invoices/${unref(invoice).id}/view`,
                                  target: "_blank"
                                }, "view", 8, _hoisted_16)
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_17, [
                          createBaseVNode("table", _hoisted_18, [
                            _hoisted_19,
                            createBaseVNode("tbody", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(invoice).items, (item, i) => {
                                return openBlock(), createElementBlock("tr", { key: i }, [
                                  createBaseVNode("td", null, toDisplayString(item.title), 1),
                                  createBaseVNode("td", null, toDisplayString(item.price), 1),
                                  createBaseVNode("td", null, toDisplayString(item.total), 1)
                                ]);
                              }), 128))
                            ])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_20, [
                          _hoisted_21,
                          createBaseVNode("ul", null, [
                            createBaseVNode("li", null, [
                              _hoisted_22,
                              createBaseVNode("span", null, toDisplayString(_ctx.$filters.currencyMK(unref(invoice).total)), 1)
                            ]),
                            createBaseVNode("li", null, [
                              _hoisted_23,
                              createBaseVNode("span", null, toDisplayString(_ctx.$filters.currencyMK(unref(invoice).paid)), 1)
                            ]),
                            createBaseVNode("li", null, [
                              _hoisted_24,
                              createBaseVNode("span", null, toDisplayString(_ctx.$filters.currencyMK(unref(invoice).total - unref(invoice).paid)), 1)
                            ])
                          ])
                        ])
                      ])) : (openBlock(), createElementBlock("p", _hoisted_25, "Invoice Not Available"))
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["active"]),
              _hoisted_26,
              createBaseVNode("div", _hoisted_27, [
                unref(invoice) ? (openBlock(), createElementBlock("div", _hoisted_28, [
                  _hoisted_29,
                  createBaseVNode("div", _hoisted_30, [
                    createBaseVNode("div", _hoisted_31, [
                      createVNode(_component_VField, { label: "Manual Receipt" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              withDirectives(createBaseVNode("input", {
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => paymentForm.value.manual_receipt_no = $event),
                                type: "text",
                                class: "input",
                                placeholder: "Receipt no."
                              }, null, 512), [
                                [vModelText, paymentForm.value.manual_receipt_no]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_32, [
                      createVNode(_component_VField, { label: "Payment Method" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_select, {
                                modelValue: paymentForm.value.mode,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => paymentForm.value.mode = $event),
                                size: "large",
                                placeholder: "Mode Of Payment"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_option, {
                                    value: "cash",
                                    label: "Cash"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_33
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_option, {
                                    value: "mobile_money",
                                    label: "Mobile Money"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_34
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_option, {
                                    value: "bank",
                                    label: "Bank"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_35
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_option, {
                                    value: "cheque",
                                    label: "Cheque"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_36
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_37, [
                      createVNode(_component_VField, { label: "Transaction Ref." }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              withDirectives(createBaseVNode("input", {
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => paymentForm.value.reference = $event),
                                type: "text",
                                class: "input",
                                placeholder: "Transaction ID"
                              }, null, 512), [
                                [vModelText, paymentForm.value.reference]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_38, [
                    createBaseVNode("div", _hoisted_39, [
                      createVNode(_component_VField, { addons: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              _hoisted_40
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              withDirectives(createBaseVNode("input", {
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => processAmount.value.amount = $event),
                                type: "number",
                                min: "0",
                                class: "input",
                                placeholder: "Amount"
                              }, null, 512), [
                                [vModelText, processAmount.value.amount]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_41, [
                    createBaseVNode("div", _hoisted_42, [
                      createVNode(_component_VField, { addons: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              _hoisted_43
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              withDirectives(createBaseVNode("input", {
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => processAmount.value.change = $event),
                                type: "number",
                                min: "0",
                                readonly: "",
                                class: "input",
                                placeholder: "Change"
                              }, null, 512), [
                                [vModelText, processAmount.value.change]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_44, [
                    createBaseVNode("div", _hoisted_45, [
                      createVNode(_component_VField, { addons: "" }, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              _hoisted_46
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              withDirectives(createBaseVNode("input", {
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => processAmount.value.payable_amount = $event),
                                type: "number",
                                min: "0",
                                readonly: "",
                                max: max_amount.value,
                                class: "input",
                                placeholder: "Total"
                              }, null, 8, _hoisted_47), [
                                [vModelText, processAmount.value.payable_amount]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_48, [
                    createBaseVNode("div", _hoisted_49, [
                      createVNode(_component_VButton, {
                        disabled: unref(invoice).status == 1,
                        large: "",
                        color: "primary",
                        onClick: pay
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Submit")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-73bc14d8"]]);
const _sfc_main = {};
const _hoisted_1 = { class: "page-content-inner" };
function _sfc_render(_ctx, _cache) {
  const _component_PaymentPos = __unplugin_components_0;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_PaymentPos)
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
