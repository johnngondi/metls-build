var __defProp = Object.defineProperty;
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
import { d as _sfc_main$2, b as useNotyf } from "./index.256f70c3.js";
import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$3 } from "./VField.897209dd.js";
import { d as defineComponent, F as useRoute, a as useRouter, l as useWindowScroll, U as useI18n, h as computed, r as ref, a7 as watch, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, n as normalizeClass, s as createVNode, t as withCtx, z as createTextVNode, v as unref, ah as withDirectives, am as vModelText, y as createCommentVNode, A as toDisplayString, K as Fragment, J as renderList, x as createBlock, q as withModifiers } from "./vendor.11f8b2c5.js";
import { u as useJuris } from "./useJuris.9d0e82c7.js";
import { u as useWorkflow } from "./useWorkflow.759d0480.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import "./FileSaver.min.c8bfead3.js";
var EditWorkflow_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "form-outer" };
const _hoisted_2 = { class: "form-header-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Update Workflow")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = { class: "form-body" };
const _hoisted_7 = { class: "form-fieldset" };
const _hoisted_8 = { class: "columns is-multiline" };
const _hoisted_9 = { class: "column is-12" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("label", null, "Workflow Title", -1);
const _hoisted_11 = { class: "column is-12" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("label", null, "Workflow Description", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_14 = { class: "form-fieldset" };
const _hoisted_15 = { class: "columns is-multiline" };
const _hoisted_16 = { class: "column is-12" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", null, "Will this process generate a bill?", -1);
const _hoisted_18 = {
  key: 0,
  class: "columns is-multiline ml-2"
};
const _hoisted_19 = { class: "column is-12" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("p", null, " Will this process have predefined bill? If on, the amount of the bill will be defined at settings, including breakdown. ", -1);
const _hoisted_21 = { class: "column is-12" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", null, "Will apply VAT on the final Bill", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_24 = { class: "form-fieldset" };
const _hoisted_25 = { class: "columns is-multiline" };
const _hoisted_26 = { class: "column is-12" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("p", { class: "ml-1" }, " Will this process require some items to be added by the initiator? These items will be added dynamically by the initiator e.g. Products or items to export. ", -1);
const _hoisted_28 = {
  key: 0,
  class: "columns is-multiline ml-2"
};
const _hoisted_29 = { class: "column is-12" };
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("label", null, "Items table Name", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("p", null, " This is the name that will be displayed as the title of the items added by the initiator! ", -1);
const _hoisted_32 = { class: "column is-12" };
const _hoisted_33 = /* @__PURE__ */ createBaseVNode("label", null, "Items table Description", -1);
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("p", null, " This is the description of the Items table, it will describe what is to the items involves. Just give a short description! ", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_36 = { class: "form-fieldset" };
const _hoisted_37 = { class: "columns is-multiline" };
const _hoisted_38 = { class: "column is-12" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("p", { class: "help-text" }, "If on, This workflow process will be depedent on another workflow process(Parent). This will be set on settings", -1);
const _hoisted_40 = { class: "form-fieldset" };
const _hoisted_41 = { class: "columns is-multiline" };
const _hoisted_42 = { class: "column is-12" };
const _hoisted_43 = {
  key: 0,
  class: "column is-6"
};
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("label", null, "Document Initials", -1);
const _hoisted_45 = { class: "help-text" };
const _hoisted_46 = { class: "form-fieldset" };
const _hoisted_47 = { class: "columns is-multiline" };
const _hoisted_48 = { class: "column is-12" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("label", { class: "title is-6" }, "Enforce Jurisdiction", -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("p", { class: "help help-text" }, " Will allow only the initiating Jurisdiction to act on it. ", -1);
const _hoisted_51 = {
  key: 0,
  class: "column is-12"
};
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_53 = { class: "form-fieldset" };
const _hoisted_54 = { class: "columns is-multiline" };
const _hoisted_55 = { class: "column is-12" };
const _hoisted_56 = /* @__PURE__ */ createBaseVNode("p", null, "If on, the application will approve automatically once payment has been made.", -1);
const _sfc_main$1 = defineComponent({
  __name: "EditWorkflow",
  setup(__props) {
    const { fetchWorkflow, workflow, updateWorkflow } = useWorkflow();
    const route = useRoute();
    const router = useRouter();
    const { y } = useWindowScroll();
    const { jurisdictionTypes, jurisdictions } = useJuris();
    const notf = useNotyf();
    const { t } = useI18n();
    const isStuck = computed(() => {
      return y.value > 30;
    });
    const workFlowId = computed(() => route.params.id);
    const wprocess = ref({
      name: "",
      description: "",
      billable: false,
      vatable: false,
      has_predefined_bill: false,
      enforce_jurisdiction: false,
      jurisdiction_type: "",
      has_certificate: false,
      has_items: false,
      items_table_name: "",
      items_table_description: "",
      is_child: false,
      document_initials: "",
      auto_approves: false
    });
    watch(wprocess.value, () => {
      const { has_certificate, enforce_jurisdiction, has_items, billable } = wprocess.value;
      if (!has_certificate) {
        wprocess.value.document_initials = "";
      }
      if (!enforce_jurisdiction) {
        wprocess.value.jurisdiction_type = "";
      }
      if (!has_items) {
        wprocess.value.items_table_name = "";
        wprocess.value.items_table_description = "";
      }
      if (!billable) {
        wprocess.value.vatable = false;
        wprocess.value.has_predefined_bill = false;
      }
    }, { deep: true });
    const save = async () => {
      isLoading.value = true;
      try {
        const { data } = await updateWorkflow(workFlowId.value, __spreadValues({}, wprocess.value));
        isLoading.value = false;
        notf.success("Workflow Updated!");
        console.log(data);
      } catch ({ response }) {
        isLoading.value = false;
        console.error(response);
      }
    };
    const close = () => {
      router.push({ name: "workflow" });
    };
    onMounted(() => {
      fetchWorkflow(workFlowId.value).then(() => {
        if (workflow.value) {
          const flow = workflow.value;
          console.log(flow);
          wprocess.value = {
            name: flow.name,
            description: flow.description,
            billable: !!flow.billable,
            vatable: !!flow.vatable,
            has_predefined_bill: !!flow.has_predefined_bill,
            enforce_jurisdiction: !!flow.enforce_jurisdiction,
            jurisdiction_type: flow.jurisdiction_type,
            has_certificate: !!flow.has_certificate,
            has_items: !!flow.has_items,
            items_table_name: flow.items_table_name,
            items_table_description: flow.items_table_description,
            is_child: !!flow.is_child,
            document_initials: flow.document_initials,
            auto_approves: !!flow.auto_approves
          };
        }
      });
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_el_switch = resolveComponent("el-switch");
      const _component_el_radio_button = resolveComponent("el-radio-button");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      return wprocess.value ? (openBlock(), createElementBlock("form", {
        key: 0,
        class: "form-layout",
        onSubmit: _cache[13] || (_cache[13] = withModifiers(() => {
        }, ["prevent"]))
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", {
            class: normalizeClass([[isStuck.value && "is-stuck"], "form-header stuck-header"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(_component_VButton, { onClick: close }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VButton, {
                    loading: unref(isLoading),
                    color: "primary",
                    raised: "",
                    onClick: save
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Submit ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_10,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => wprocess.value.name = $event),
                            type: "text",
                            class: "input",
                            placeholder: "Workflow Name"
                          }, null, 512), [
                            [vModelText, wprocess.value.name]
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_12,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("textarea", {
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => wprocess.value.description = $event),
                            class: "textarea is-primary-focus",
                            rows: "2",
                            placeholder: "more info..."
                          }, null, 512), [
                            [vModelText, wprocess.value.description]
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            _hoisted_13,
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_switch, {
                            modelValue: wprocess.value.billable,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => wprocess.value.billable = $event),
                            "active-text": "Billing"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      _hoisted_17
                    ]),
                    _: 1
                  }),
                  wprocess.value.billable ? (openBlock(), createElementBlock("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_switch, {
                                modelValue: wprocess.value.has_predefined_bill,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => wprocess.value.has_predefined_bill = $event),
                                "active-text": "Has predefined Bill"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          _hoisted_20
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_21, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_switch, {
                                modelValue: wprocess.value.vatable,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => wprocess.value.vatable = $event),
                                "active-text": "Taxable"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          _hoisted_22
                        ]),
                        _: 1
                      })
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ]),
            _hoisted_23,
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("div", _hoisted_26, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_switch, {
                            modelValue: wprocess.value.has_items,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => wprocess.value.has_items = $event),
                            "active-text": "Process items details"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      _hoisted_27
                    ]),
                    _: 1
                  }),
                  wprocess.value.has_items ? (openBlock(), createElementBlock("div", _hoisted_28, [
                    createBaseVNode("div", _hoisted_29, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          _hoisted_30,
                          _hoisted_31,
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              withDirectives(createBaseVNode("input", {
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => wprocess.value.items_table_name = $event),
                                type: "text",
                                class: "input",
                                placeholder: "Name"
                              }, null, 512), [
                                [vModelText, wprocess.value.items_table_name]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_32, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          _hoisted_33,
                          _hoisted_34,
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              withDirectives(createBaseVNode("textarea", {
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => wprocess.value.items_table_description = $event),
                                class: "textarea is-primary-focus",
                                rows: "2",
                                placeholder: "more info..."
                              }, null, 512), [
                                [vModelText, wprocess.value.items_table_description]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ]),
            _hoisted_35,
            createBaseVNode("div", _hoisted_36, [
              createBaseVNode("div", _hoisted_37, [
                createBaseVNode("div", _hoisted_38, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_switch, {
                            modelValue: wprocess.value.is_child,
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => wprocess.value.is_child = $event),
                            "active-text": "Is Child?"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      _hoisted_39
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_40, [
              createBaseVNode("div", _hoisted_41, [
                createBaseVNode("div", _hoisted_42, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_switch, {
                            modelValue: wprocess.value.has_certificate,
                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => wprocess.value.has_certificate = $event),
                            "active-text": unref(t)("workflow.new.placeholder.certificate")
                          }, null, 8, ["modelValue", "active-text"])
                        ]),
                        _: 1
                      }),
                      createBaseVNode("p", null, toDisplayString(unref(t)("workflow.new.placeholder.certificate", 2)), 1)
                    ]),
                    _: 1
                  })
                ]),
                wprocess.value.has_certificate ? (openBlock(), createElementBlock("div", _hoisted_43, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_44,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => wprocess.value.document_initials = $event),
                            type: "text",
                            class: "input",
                            placeholder: "Initials"
                          }, null, 512), [
                            [vModelText, wprocess.value.document_initials]
                          ]),
                          createBaseVNode("p", _hoisted_45, toDisplayString(unref(t)("workflow.new.placeholder.cert_document", 2)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_46, [
              createBaseVNode("div", _hoisted_47, [
                createBaseVNode("div", _hoisted_48, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_49,
                      _hoisted_50
                    ]),
                    _: 1
                  })
                ]),
                wprocess.value.enforce_jurisdiction ? (openBlock(), createElementBlock("div", _hoisted_51, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jurisdictionTypes), (juris) => {
                    return openBlock(), createBlock(_component_el_radio_group, {
                      key: juris.id,
                      modelValue: wprocess.value.jurisdiction_type,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => wprocess.value.jurisdiction_type = $event),
                      size: "large"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_radio_button, {
                          label: juris.id
                        }, null, 8, ["label"])
                      ]),
                      _: 2
                    }, 1032, ["modelValue"]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ]),
            _hoisted_52,
            createBaseVNode("div", _hoisted_53, [
              createBaseVNode("div", _hoisted_54, [
                createBaseVNode("div", _hoisted_55, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_switch, {
                            modelValue: wprocess.value.auto_approves,
                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => wprocess.value.auto_approves = $event),
                            "active-text": "Auto Approve on Payment"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      }),
                      _hoisted_56
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ])
      ], 32)) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = defineComponent({
  __name: "edit",
  setup(__props) {
    pageTitle.value = "Edit Workflow";
    return (_ctx, _cache) => {
      const _component_EditWorkflow = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_EditWorkflow)
      ]);
    };
  }
});
export { _sfc_main as default };
