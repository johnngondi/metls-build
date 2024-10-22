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
import { _ as __unplugin_components_1 } from "./ValidationErrors.48d8bce6.js";
import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$3 } from "./VField.897209dd.js";
import { d as defineComponent, a as useRouter, l as useWindowScroll, U as useI18n, h as computed, r as ref, a7 as watch, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, n as normalizeClass, A as toDisplayString, v as unref, s as createVNode, t as withCtx, z as createTextVNode, x as createBlock, y as createCommentVNode, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, q as withModifiers } from "./vendor.11f8b2c5.js";
import { u as useWorkflow } from "./useWorkflow.759d0480.js";
import { u as useJuris } from "./useJuris.9d0e82c7.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import "./FileSaver.min.c8bfead3.js";
var CreateWorkflow_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "form-outer" };
const _hoisted_2 = { class: "form-header-inner" };
const _hoisted_3 = { class: "left" };
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = { class: "form-body" };
const _hoisted_7 = { class: "form-fieldset" };
const _hoisted_8 = { class: "columns is-multiline" };
const _hoisted_9 = { class: "column is-12" };
const _hoisted_10 = { class: "columns is-multiline" };
const _hoisted_11 = { class: "column is-12" };
const _hoisted_12 = ["placeholder"];
const _hoisted_13 = { class: "column is-12" };
const _hoisted_14 = ["placeholder"];
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_16 = { class: "form-fieldset" };
const _hoisted_17 = { class: "columns is-multiline" };
const _hoisted_18 = { class: "column is-12" };
const _hoisted_19 = {
  key: 0,
  class: "columns is-multiline ml-2"
};
const _hoisted_20 = { class: "column is-12" };
const _hoisted_21 = { class: "help" };
const _hoisted_22 = { class: "column is-12" };
const _hoisted_23 = { class: "help" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_25 = { class: "form-fieldset" };
const _hoisted_26 = { class: "columns is-multiline" };
const _hoisted_27 = { class: "column is-12" };
const _hoisted_28 = { class: "ml-1" };
const _hoisted_29 = {
  key: 0,
  class: "columns is-multiline ml-2"
};
const _hoisted_30 = { class: "column is-12" };
const _hoisted_31 = ["placeholder"];
const _hoisted_32 = { class: "column is-12" };
const _hoisted_33 = ["placeholder"];
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_35 = { class: "form-fieldset" };
const _hoisted_36 = { class: "columns is-multiline" };
const _hoisted_37 = { class: "column is-12" };
const _hoisted_38 = { class: "help-text" };
const _hoisted_39 = { class: "form-fieldset" };
const _hoisted_40 = { class: "columns is-multiline" };
const _hoisted_41 = { class: "column is-12" };
const _hoisted_42 = {
  key: 0,
  class: "column is-6"
};
const _hoisted_43 = ["placeholder"];
const _hoisted_44 = { class: "help-text" };
const _hoisted_45 = { class: "form-fieldset" };
const _hoisted_46 = { class: "columns is-multiline" };
const _hoisted_47 = { class: "column is-12" };
const _hoisted_48 = { class: "title is-6" };
const _hoisted_49 = {
  key: 0,
  class: "column is-12"
};
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_51 = { class: "form-fieldset" };
const _hoisted_52 = { class: "columns is-multiline" };
const _hoisted_53 = { class: "column is-12" };
const _sfc_main$1 = defineComponent({
  __name: "CreateWorkflow",
  setup(__props) {
    const { createWorkflow } = useWorkflow();
    const { jurisdictionTypes, jurisdictions } = useJuris();
    const router = useRouter();
    const { y } = useWindowScroll();
    const notf = useNotyf();
    const { t } = useI18n();
    const isStuck = computed(() => {
      return y.value > 30;
    });
    const workflow = ref({
      name: "",
      description: "",
      billable: false,
      vatable: false,
      has_predefined_bill: false,
      enforce_jurisdiction: true,
      jurisdiction_type: "",
      has_certificate: false,
      has_items: false,
      items_table_name: "",
      items_table_description: "",
      is_child: false,
      document_initials: "",
      auto_approves: false
    });
    const resetForm = async () => {
      workflow.value = {
        name: "",
        description: "",
        billable: false,
        vatable: false,
        has_predefined_bill: false,
        enforce_jurisdiction: true,
        jurisdiction_type: "",
        has_certificate: false,
        has_items: false,
        items_table_name: "",
        items_table_description: "",
        is_child: false,
        document_initials: "",
        auto_approves: false
      };
    };
    const errors = ref(void 0);
    watch(workflow.value, () => {
      const { has_certificate, enforce_jurisdiction, has_items, billable } = workflow.value;
      if (!has_certificate) {
        workflow.value.document_initials = "";
      }
      if (!enforce_jurisdiction) {
        workflow.value.jurisdiction_type = "";
      }
      if (!has_items) {
        workflow.value.items_table_name = "";
        workflow.value.items_table_description = "";
      }
      if (!billable) {
        workflow.value.vatable = false;
        workflow.value.has_predefined_bill = false;
      }
    }, { deep: true });
    const close = () => {
      resetForm();
      router.push({
        name: "workflow"
      });
    };
    const save = async () => {
      var _a;
      isLoading.value = true;
      try {
        const { data } = await createWorkflow(__spreadValues({}, workflow.value));
        isLoading.value = false;
        notf.dismissAll();
        notf.success("Workflow Process Created!");
        close();
      } catch (error) {
        isLoading.value = false;
        errors.value = ((_a = error.response.data) == null ? void 0 : _a.errors) || [];
      }
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_validation_errors = __unplugin_components_1;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_el_switch = resolveComponent("el-switch");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      return openBlock(), createElementBlock("form", {
        class: "form-layout",
        onSubmit: _cache[13] || (_cache[13] = withModifiers(() => {
        }, ["prevent"]))
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", {
            class: normalizeClass([[isStuck.value && "is-stuck"], "form-header stuck-header"])
          }, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("h3", null, toDisplayString(unref(t)("workflow.new.title")), 1)
              ]),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createVNode(_component_VButton, { onClick: close }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("workflow.new.actions.cancel")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VButton, {
                    color: "primary",
                    raised: "",
                    onClick: save
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("workflow.new.actions.submit")), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  errors.value ? (openBlock(), createBlock(_component_validation_errors, {
                    key: 0,
                    errors: errors.value
                  }, null, 8, ["errors"])) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createBaseVNode("label", null, toDisplayString(unref(t)("workflow.new.placeholder.name")), 1),
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => workflow.value.name = $event),
                            type: "text",
                            class: "input",
                            placeholder: unref(t)("workflow.new.placeholder.name")
                          }, null, 8, _hoisted_12), [
                            [vModelText, workflow.value.name]
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_13, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createBaseVNode("label", null, toDisplayString(unref(t)("workflow.new.placeholder.description")), 1),
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("textarea", {
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => workflow.value.description = $event),
                            class: "textarea is-primary-focus",
                            rows: "2",
                            placeholder: unref(t)("workflow.new.placeholder.description")
                          }, null, 8, _hoisted_14), [
                            [vModelText, workflow.value.description]
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
            _hoisted_15,
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("div", _hoisted_18, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_switch, {
                            modelValue: workflow.value.billable,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => workflow.value.billable = $event),
                            "active-text": unref(t)("workflow.new.placeholder.billing")
                          }, null, 8, ["modelValue", "active-text"])
                        ]),
                        _: 1
                      }),
                      createBaseVNode("p", null, toDisplayString(unref(t)("workflow.new.placeholder.billing", 2)), 1)
                    ]),
                    _: 1
                  }),
                  workflow.value.billable ? (openBlock(), createElementBlock("div", _hoisted_19, [
                    createBaseVNode("div", _hoisted_20, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_switch, {
                                modelValue: workflow.value.has_predefined_bill,
                                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => workflow.value.has_predefined_bill = $event),
                                "active-text": unref(t)("workflow.new.placeholder.predefined_bill")
                              }, null, 8, ["modelValue", "active-text"])
                            ]),
                            _: 1
                          }),
                          createBaseVNode("p", _hoisted_21, toDisplayString(unref(t)("workflow.new.placeholder.predefined_bill", 2)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_22, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_switch, {
                                modelValue: workflow.value.vatable,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => workflow.value.vatable = $event),
                                "active-text": unref(t)("workflow.new.placeholder.taxable")
                              }, null, 8, ["modelValue", "active-text"])
                            ]),
                            _: 1
                          }),
                          createBaseVNode("p", _hoisted_23, toDisplayString(unref(t)("workflow.new.placeholder.taxable", 2)), 1)
                        ]),
                        _: 1
                      })
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ]),
            _hoisted_24,
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_switch, {
                            modelValue: workflow.value.has_items,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => workflow.value.has_items = $event),
                            "active-text": unref(t)("workflow.new.placeholder.items")
                          }, null, 8, ["modelValue", "active-text"])
                        ]),
                        _: 1
                      }),
                      createBaseVNode("p", _hoisted_28, toDisplayString(unref(t)("workflow.new.placeholder.items", 2)), 1)
                    ]),
                    _: 1
                  }),
                  workflow.value.has_items ? (openBlock(), createElementBlock("div", _hoisted_29, [
                    createBaseVNode("div", _hoisted_30, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createBaseVNode("label", null, toDisplayString(unref(t)("workflow.new.placeholder.item_table_name")), 1),
                          createBaseVNode("p", null, toDisplayString(unref(t)("workflow.new.placeholder.item_table_name", 2)), 1),
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              withDirectives(createBaseVNode("input", {
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => workflow.value.items_table_name = $event),
                                type: "text",
                                class: "input",
                                placeholder: unref(t)("workflow.new.placeholder.item_table_name")
                              }, null, 8, _hoisted_31), [
                                [vModelText, workflow.value.items_table_name]
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
                          createBaseVNode("label", null, toDisplayString(unref(t)("workflow.new.placeholder.item_table_desc")), 1),
                          createBaseVNode("p", null, toDisplayString(unref(t)("workflow.new.placeholder.item_table_desc", 2)), 1),
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              withDirectives(createBaseVNode("textarea", {
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => workflow.value.items_table_description = $event),
                                class: "textarea is-primary-focus",
                                rows: "2",
                                placeholder: unref(t)("workflow.new.placeholder.item_table_desc")
                              }, null, 8, _hoisted_33), [
                                [vModelText, workflow.value.items_table_description]
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
            _hoisted_34,
            createBaseVNode("div", _hoisted_35, [
              createBaseVNode("div", _hoisted_36, [
                createBaseVNode("div", _hoisted_37, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_switch, {
                            modelValue: workflow.value.is_child,
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => workflow.value.is_child = $event),
                            "active-text": unref(t)("workflow.new.placeholder.child")
                          }, null, 8, ["modelValue", "active-text"])
                        ]),
                        _: 1
                      }),
                      createBaseVNode("p", _hoisted_38, toDisplayString(unref(t)("workflow.new.placeholder.child", 2)), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_39, [
              createBaseVNode("div", _hoisted_40, [
                createBaseVNode("div", _hoisted_41, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_switch, {
                            modelValue: workflow.value.has_certificate,
                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => workflow.value.has_certificate = $event),
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
                workflow.value.has_certificate ? (openBlock(), createElementBlock("div", _hoisted_42, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createBaseVNode("label", null, toDisplayString(unref(t)("workflow.new.placeholder.cert_document")), 1),
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => workflow.value.document_initials = $event),
                            type: "text",
                            class: "input",
                            placeholder: unref(t)("workflow.new.placeholder.cert_document")
                          }, null, 8, _hoisted_43), [
                            [vModelText, workflow.value.document_initials]
                          ]),
                          createBaseVNode("p", _hoisted_44, toDisplayString(unref(t)("workflow.new.placeholder.cert_document", 2)), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_45, [
              createBaseVNode("div", _hoisted_46, [
                createBaseVNode("div", _hoisted_47, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createBaseVNode("label", _hoisted_48, toDisplayString(unref(t)("workflow.new.placeholder.enforce")), 1),
                      createBaseVNode("p", null, toDisplayString(unref(t)("workflow.new.placeholder.enforce", 2)), 1)
                    ]),
                    _: 1
                  })
                ]),
                workflow.value.enforce_jurisdiction ? (openBlock(), createElementBlock("div", _hoisted_49, [
                  createVNode(_component_el_select, {
                    modelValue: workflow.value.jurisdiction_type,
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => workflow.value.jurisdiction_type = $event),
                    filterable: "",
                    clearable: "",
                    size: "large",
                    placeholder: unref(t)("workflow.new.placeholder.enforce")
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jurisdictionTypes), (juris) => {
                        return openBlock(), createBlock(_component_el_option, {
                          key: juris.id,
                          value: juris.id,
                          label: juris.title
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(juris.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "label"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"])
                ])) : createCommentVNode("", true)
              ])
            ]),
            _hoisted_50,
            createBaseVNode("div", _hoisted_51, [
              createBaseVNode("div", _hoisted_52, [
                createBaseVNode("div", _hoisted_53, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_el_switch, {
                            modelValue: workflow.value.auto_approves,
                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => workflow.value.auto_approves = $event),
                            "active-text": unref(t)("workflow.new.placeholder.auto_approve")
                          }, null, 8, ["modelValue", "active-text"])
                        ]),
                        _: 1
                      }),
                      createBaseVNode("p", null, toDisplayString(unref(t)("workflow.new.placeholder.auto_approve", 2)), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ])
      ], 32);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = defineComponent({
  __name: "new",
  setup(__props) {
    const { t } = useI18n();
    pageTitle.value = t("workflow.new.title");
    return (_ctx, _cache) => {
      const _component_CreateWorkflow = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_CreateWorkflow)
      ]);
    };
  }
});
export { _sfc_main as default };
