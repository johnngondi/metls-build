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
import { _ as _sfc_main$4 } from "./VTag.4c37a695.js";
import { _ as _sfc_main$5 } from "./VTags.a72dab16.js";
import { d as defineComponent, l as useWindowScroll, F as useRoute, a as useRouter, r as ref, h as computed, a7 as watch, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, n as normalizeClass, s as createVNode, t as withCtx, z as createTextVNode, x as createBlock, ah as withDirectives, K as Fragment, J as renderList, A as toDisplayString, y as createCommentVNode, ap as vModelSelect, am as vModelText, v as unref } from "./vendor.11f8b2c5.js";
import { u as useWorkflow } from "./useWorkflow.759d0480.js";
import { u as useJuris } from "./useJuris.9d0e82c7.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import "./FileSaver.min.c8bfead3.js";
var FlowSettings_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "form-layout" };
const _hoisted_2 = { class: "form-outer" };
const _hoisted_3 = { class: "form-header-inner" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Settings")
], -1);
const _hoisted_5 = { class: "right" };
const _hoisted_6 = { class: "buttons" };
const _hoisted_7 = { class: "form-body" };
const _hoisted_8 = { class: "form-fieldset" };
const _hoisted_9 = { class: "columns is_multiline" };
const _hoisted_10 = { class: "column is-12" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("label", null, "Parent Process", -1);
const _hoisted_12 = { class: "select" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select Parent Process", -1);
const _hoisted_14 = ["value"];
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", { class: "help" }, "Select a Parent Process for a child Workflow Process", -1);
const _hoisted_16 = { class: "columns is-multiline" };
const _hoisted_17 = { class: "column is-12" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("label", null, "Items Step", -1);
const _hoisted_19 = { class: "select" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("option", { value: "" }, "Select An Item Step", -1);
const _hoisted_21 = ["value"];
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", { class: "help" }, "This is the step to get item information", -1);
const _hoisted_23 = {
  key: 0,
  class: "column is-12"
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("label", null, "Items Fields", -1);
const _hoisted_25 = { class: "mb-3" };
const _hoisted_26 = { class: "form-fieldset" };
const _hoisted_27 = { class: "columns is-multiline" };
const _hoisted_28 = { class: "column is-12" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("label", null, "Billing Step", -1);
const _hoisted_30 = { class: "select" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("option", {
  disabled: "",
  value: ""
}, "Select a Billing Step", -1);
const _hoisted_32 = ["value"];
const _hoisted_33 = {
  key: 0,
  class: "column is-12"
};
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("label", null, "Bill Items", -1);
const _hoisted_35 = { class: "mb-5" };
const _hoisted_36 = { class: "columns is-multiline mt-2" };
const _hoisted_37 = { class: "column is-6" };
const _sfc_main$1 = defineComponent({
  __name: "FlowSettings",
  setup(__props) {
    const { y } = useWindowScroll();
    const route = useRoute();
    const router = useRouter();
    const {
      workflowSettings,
      settings,
      updateWorkflowSettings
    } = useWorkflow();
    const { jurisdictions, fetchJurisdictions } = useJuris();
    const notf = useNotyf();
    const _settings = ref({
      bill_step: 0,
      items_step: 0,
      items_fields: [],
      bill_items: [],
      related_workflow_process_id: 0
    });
    const activeCollapse = ref([1, 2, 3, 4]);
    const bill = ref({
      juri: void 0,
      name: "",
      total: 0
    });
    const resetForm = () => {
      bill.value = {
        juri: void 0,
        name: "",
        total: 0
      };
    };
    const addItem = () => {
      const { juri, name, total } = bill.value;
      if (juri && name != "" && total > 0) {
        const _isJuri = _settings.value.bill_items.filter((item) => item.jurisdiction_id == juri);
        if (_isJuri.length > 0) {
          _isJuri.map((item) => {
            item.items.push({ label: name, value: total });
          });
        } else {
          _settings.value.bill_items.push({
            jurisdiction_id: juri,
            items: [{ label: name, value: total }]
          });
        }
        resetForm();
        return;
      }
    };
    const removeItem = (index, juri) => {
      const _isJuri = _settings.value.bill_items.filter((item) => item.jurisdiction_id == juri);
      if (_isJuri.length > 0) {
        _isJuri.map((item) => item.items.splice(index, 1));
      }
    };
    const isStuck = computed(() => {
      return y.value > 30;
    });
    const workflowId = computed(() => route.params.id);
    const isBillable = computed(() => !!settings.value.workflowProcess.billable);
    const hasItems = computed(() => !!settings.value.workflowProcess.has_items);
    const isPredefined = computed(() => !!settings.value.workflowProcess.has_predefined_bill);
    const processes = computed(() => settings.value.workflowProcesses);
    const isChild = computed(() => !!settings.value.workflowProcess.is_child);
    const juriType = computed(() => {
      if (settings.value && settings.value.workflowProcess) {
        return settings.value.workflowProcess.jurisdiction_type;
      } else {
        return "";
      }
    });
    const steps = computed(() => settings.value.steps);
    const juri_bills = (juri) => {
      var _a;
      return (_a = _settings.value.bill_items.filter((b) => b.jurisdiction_id == juri)[0]) == null ? void 0 : _a.items;
    };
    watch(() => juriType.value, () => {
      fetchJurisdictions(juriType.value);
    });
    watch(() => settings.value, () => {
      if (settings.value) {
        _settings.value.bill_step = settings.value.workflowProcess.bill_step;
        _settings.value.items_step = settings.value.workflowProcess.items_step;
        _settings.value.related_workflow_process_id = settings.value.workflowProcess.related_workflow_process_id;
      }
    }, { deep: true });
    const update = async () => {
      isLoading.value = true;
      loadingText.value = "Updating...";
      try {
        const { data } = await updateWorkflowSettings(workflowId.value, __spreadValues({}, _settings.value));
        loadingText.value = "Refreshing Settings...";
        initSettings();
        notf.dismissAll();
        notf.success("Settings Updated");
      } catch ({ response }) {
        isLoading.value = false;
        notf.dismissAll();
        notf.error("An Error occurred");
      }
    };
    computed(() => settings.value.itemsFields);
    const item_field = ref("");
    const addItemField = (value) => {
      if (value) {
        _settings.value.items_fields.push(value);
        item_field.value = "";
      }
    };
    const removeItemField = (index) => {
      _settings.value.items_fields.splice(index, 1);
    };
    const cancel = () => {
      router.push({ name: "workflow" });
    };
    const groupBy = (array, key) => {
      return array.reduce((result, value) => {
        (result[value[key]] = result[value[key]] || []).push(value);
        return result;
      }, []);
    };
    const initSettings = () => {
      workflowSettings(workflowId.value).then(() => {
        const _items = settings.value.itemsFields.map((field) => field.label);
        _settings.value.items_fields = [..._items];
        const _Bills = settings.value.billItems.map((bill2) => bill2);
        console.log(_Bills);
        const groupedBills = groupBy(_Bills, "jurisdiction_id");
        Object.values(_Bills).forEach((bill2) => {
          const items = groupedBills[bill2.jurisdiction_id];
          _settings.value.bill_items.push({
            jurisdiction_id: bill2.jurisdiction_id,
            items: Object.values(items).map((item) => {
              return { label: item.label, value: item.value };
            })
          });
        });
      }).finally(() => isLoading.value = false);
    };
    onMounted(() => {
      isLoading.value = true;
      loadingText.value = "Fetching settings...";
      initSettings();
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_VTag = _sfc_main$4;
      const _component_VTags = _sfc_main$5;
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_collapse_item = resolveComponent("el-collapse-item");
      const _component_el_collapse = resolveComponent("el-collapse");
      return openBlock(), createElementBlock("form", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            class: normalizeClass([[isStuck.value && "is-stuck"], "form-header stuck-header"])
          }, [
            createBaseVNode("div", _hoisted_3, [
              _hoisted_4,
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_VButton, { onClick: cancel }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VButton, {
                    color: "primary",
                    onClick: update
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Update Settings")
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  isChild.value ? (openBlock(), createBlock(_component_VField, { key: 0 }, {
                    default: withCtx(() => [
                      _hoisted_11,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_12, [
                            withDirectives(createBaseVNode("select", {
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _settings.value.related_workflow_process_id = $event),
                              placeholder: "Select Workflow Process"
                            }, [
                              _hoisted_13,
                              processes.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(processes.value, (p) => {
                                return openBlock(), createElementBlock("option", {
                                  key: p.id,
                                  value: p.id
                                }, toDisplayString(p.name), 9, _hoisted_14);
                              }), 128)) : createCommentVNode("", true)
                            ], 512), [
                              [vModelSelect, _settings.value.related_workflow_process_id]
                            ])
                          ]),
                          _hoisted_15
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  hasItems.value ? (openBlock(), createBlock(_component_VField, { key: 0 }, {
                    default: withCtx(() => [
                      _hoisted_18,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_19, [
                            withDirectives(createBaseVNode("select", {
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _settings.value.items_step = $event)
                            }, [
                              _hoisted_20,
                              steps.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(steps.value, (step) => {
                                return openBlock(), createElementBlock("option", {
                                  key: step.id,
                                  value: step.id
                                }, toDisplayString(step.title), 9, _hoisted_21);
                              }), 128)) : createCommentVNode("", true)
                            ], 512), [
                              [vModelSelect, _settings.value.items_step]
                            ])
                          ]),
                          _hoisted_22
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                hasItems.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
                  _hoisted_24,
                  createVNode(_component_VField, { addons: "" }, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => item_field.value = $event),
                            type: "text",
                            class: "input",
                            placeholder: "Item Field"
                          }, null, 512), [
                            [vModelText, item_field.value]
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_VButton, {
                            color: "primary",
                            onClick: _cache[3] || (_cache[3] = ($event) => addItemField(item_field.value))
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Add")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_25, [
                    createVNode(_component_VTags, { addons: "" }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(_settings.value.items_fields, (item, j) => {
                          return openBlock(), createElementBlock(Fragment, { key: j }, [
                            createVNode(_component_VTag, {
                              label: item,
                              color: "primary"
                            }, null, 8, ["label"]),
                            createVNode(_component_VTag, {
                              remove: "",
                              onClick: ($event) => removeItemField(j)
                            }, null, 8, ["onClick"])
                          ], 64);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ])
                ])) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("div", _hoisted_27, [
                createBaseVNode("div", _hoisted_28, [
                  isBillable.value ? (openBlock(), createBlock(_component_VField, { key: 0 }, {
                    default: withCtx(() => [
                      _hoisted_29,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_30, [
                            withDirectives(createBaseVNode("select", {
                              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _settings.value.bill_step = $event)
                            }, [
                              _hoisted_31,
                              steps.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(steps.value, (step) => {
                                return openBlock(), createElementBlock("option", {
                                  key: step.id,
                                  value: step.id
                                }, toDisplayString(step.title), 9, _hoisted_32);
                              }), 128)) : createCommentVNode("", true)
                            ], 512), [
                              [vModelSelect, _settings.value.bill_step]
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                isPredefined.value ? (openBlock(), createElementBlock("div", _hoisted_33, [
                  _hoisted_34,
                  createBaseVNode("div", _hoisted_35, [
                    createVNode(_component_VField, { addons: "" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: bill.value.juri,
                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => bill.value.juri = $event),
                              size: "large",
                              placeholder: "jurisdiction",
                              filterable: "",
                              clearable: ""
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jurisdictions), (juri, k) => {
                                  return openBlock(), createBlock(_component_el_option, {
                                    key: k,
                                    value: juri.id,
                                    label: juri.title
                                  }, null, 8, ["value", "label"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => bill.value.name = $event),
                              type: "text",
                              class: "input",
                              placeholder: "bill name"
                            }, null, 512), [
                              [vModelText, bill.value.name]
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => bill.value.total = $event),
                              type: "number",
                              class: "input",
                              placeholder: "bill amount"
                            }, null, 512), [
                              [vModelText, bill.value.total]
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createBaseVNode("span", {
                              class: "button is-primary",
                              onClick: addItem
                            }, "Add")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_el_collapse, {
                    modelValue: activeCollapse.value,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => activeCollapse.value = $event)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jurisdictions), (place, i) => {
                        return openBlock(), createBlock(_component_el_collapse_item, {
                          key: i,
                          title: place.title,
                          name: i + 1
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_36, [
                              createBaseVNode("div", _hoisted_37, [
                                createVNode(_component_VTags, { addons: "" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(juri_bills(place.id), (item, l) => {
                                      return openBlock(), createElementBlock(Fragment, { key: l }, [
                                        createVNode(_component_VTag, {
                                          label: item.label + " : " + item.value,
                                          color: "primary"
                                        }, null, 8, ["label"]),
                                        createVNode(_component_VTag, {
                                          remove: "",
                                          onClick: ($event) => removeItem(l, place.id)
                                        }, null, 8, ["onClick"])
                                      ], 64);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["title", "name"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = defineComponent({
  __name: "settings",
  setup(__props) {
    pageTitle.value = "Workflow settings";
    return (_ctx, _cache) => {
      const _component_FlowSettings = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_FlowSettings)
      ]);
    };
  }
});
export { _sfc_main as default };
