import { _ as _sfc_main$1 } from "./VPlaceholderSection.998599a6.js";
import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$2 } from "./VField.897209dd.js";
import { _ as _sfc_main$3 } from "./VTag.4c37a695.js";
import { _ as _sfc_main$4 } from "./VTags.a72dab16.js";
import { i as isLargeScreen, f as isMediumScreen, d as _sfc_main$5, h as _sfc_main$6, b as useNotyf } from "./index.256f70c3.js";
import { _ as _sfc_main$7 } from "./VPlaceholderPage.59076d4c.js";
import { _ as __unplugin_components_0 } from "./VDropdown.bd118128.js";
import { d as defineComponent, F as useRoute, h as computed, r as ref, a7 as watch, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, s as createVNode, t as withCtx, z as createTextVNode, f as createBaseVNode, x as createBlock, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, y as createCommentVNode, n as normalizeClass, A as toDisplayString, q as withModifiers, T as TransitionGroup } from "./vendor.11f8b2c5.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.12f0bf0d.js";
import { u as useWorkflow } from "./useWorkflow.759d0480.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
import "./VIcon.580f0211.js";
import "./FileSaver.min.c8bfead3.js";
const _hoisted_1 = { class: "columns is-multiline" };
const _hoisted_2 = { class: "column is-6" };
const _hoisted_3 = { class: "column is-12" };
const _hoisted_4 = { class: "columns is-multiline" };
const _hoisted_5 = { class: "column is-12" };
const _hoisted_6 = { class: "columns is-multiline mb-4" };
const _hoisted_7 = { class: "column is-12" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("p", { class: "help" }, "How will data be entered in the field?", -1);
const _hoisted_9 = {
  key: 0,
  class: "column is-12 ml-2"
};
const _hoisted_10 = { class: "columns is-multiline" };
const _hoisted_11 = { class: "column is-6" };
const _hoisted_12 = { class: "column is-12" };
const _hoisted_13 = { key: 1 };
const _hoisted_14 = { class: "column is-12" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("p", { class: "help" }, " If on, the actor will be to select more than one option from the select items. ", -1);
const _hoisted_16 = { class: "columns is-multiline" };
const _hoisted_17 = { class: "column is-12" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("p", { class: "help" }, " Will this field be required or optional? If on, the actor will not be required to fill it? ", -1);
const _hoisted_19 = {
  key: 0,
  class: "column is-12"
};
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("p", { class: "help" }, " Will this field be used in calculation? If on, the filed will be used in calculation of the bill. ", -1);
const _hoisted_21 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_22 = { class: "page-content-inner" };
const _hoisted_23 = { class: "flex-list-wrapper flex-list-v1" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_26 = { class: "flex-table" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("span", { class: "is-grow" }, "Label", -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", null, "Optional", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("span", null, "Fill Mode", -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("span", null, "Type", -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("span", { class: "cell-end" }, "Actions", -1);
const _hoisted_32 = [
  _hoisted_27,
  _hoisted_28,
  _hoisted_29,
  _hoisted_30,
  _hoisted_31
];
const _hoisted_33 = { class: "flex-list-inner" };
const _hoisted_34 = { class: "flex-table-cell is-media is-grow" };
const _hoisted_35 = { class: "item-name dark-inverted" };
const _hoisted_36 = { class: "item-meta" };
const _hoisted_37 = {
  class: "flex-table-cell",
  "data-th": "Optional"
};
const _hoisted_38 = { class: "light-text" };
const _hoisted_39 = {
  class: "flex-table-cell",
  "data-th": "Fill Mode"
};
const _hoisted_40 = { class: "light-text" };
const _hoisted_41 = {
  class: "flex-table-cell",
  "data-th": "Field Type"
};
const _hoisted_42 = { class: "light-text" };
const _hoisted_43 = {
  class: "flex-table-cell cell-end",
  "data-th": "Actions"
};
const _hoisted_44 = ["onClick"];
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnir lnir-pencil"
  })
], -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Edit")
], -1);
const _hoisted_47 = [
  _hoisted_45,
  _hoisted_46
];
const _hoisted_48 = ["onClick"];
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnir lnir-trash"
  })
], -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Delete")
], -1);
const _hoisted_51 = [
  _hoisted_49,
  _hoisted_50
];
const _sfc_main = defineComponent({
  __name: "index",
  setup(__props) {
    const {
      step,
      stepFields,
      fetchStepDetails,
      fetchStepFields,
      createStepField,
      deleteWorkflowField,
      updateWorkflowField
    } = useWorkflow();
    const route = useRoute();
    const { success, error } = useNotyf();
    const workflowId = computed(() => route.params.id);
    const stepId = computed(() => route.params.step);
    const deleteModal = ref(false);
    const selectedField = ref({
      name: "",
      optional: 0,
      label: "",
      mode: "",
      description: "",
      type: "",
      calculates: 0,
      select_items: [],
      multiple: 0
    });
    const showCalculateInput = ref(false);
    ref(false);
    const isNewField = ref(false);
    const fieldTypes = ref([
      "text",
      "integer",
      "decimal",
      "date",
      "time",
      "file",
      "textarea"
    ]);
    const fillModes = ref(["fill", "select"]);
    const option_value = ref("");
    const filters = ref("");
    const addSelectOption = (value) => {
      if (value) {
        form.value.select_options.push(`${value}`);
        option_value.value = "";
      }
    };
    const removeOption = (index) => {
      form.value.select_options.splice(index, 1);
    };
    const form = ref({
      label: "",
      description: "",
      type: "text",
      mode: "fill",
      multi_select: false,
      optional: false,
      select_options: [],
      calculates: false
    });
    const resetForm = () => {
      form.value = {
        label: "",
        description: "",
        type: "text",
        mode: "fill",
        multi_select: false,
        optional: false,
        select_options: [],
        calculates: false
      };
    };
    const save = async () => {
      isLoading.value = true;
      try {
        const { data } = await createStepField(workflowId.value, stepId.value, {
          label: form.value.label,
          description: form.value.description,
          type: form.value.type,
          mode: form.value.mode,
          optional: form.value.optional,
          multiple: form.value.mode == "select" ? form.value.multi_select : false,
          selectItems: form.value.select_options,
          calculates: showCalculateInput.value ? form.value.calculates : false
        });
        isLoading.value = false;
        resetForm();
        isNewField.value = false;
        fetchStepFields(workflowId.value, stepId.value);
        success("Step Field Created!");
        console.log(data);
      } catch ({ response }) {
        console.log(response);
        isLoading.value = false;
        error("Error Occurred");
      }
    };
    const isSm = computed(() => !isLargeScreen.value && !isMediumScreen.value);
    const filteredData = computed(() => {
      if (filters.value === "") {
        return stepFields.value;
      } else {
        return [];
      }
    });
    watch(form.value, () => {
      if (form.value.type === "decimal") {
        showCalculateInput.value = true;
      } else {
        showCalculateInput.value = false;
      }
    });
    const update = async () => {
      if (selectedField.value) {
        isLoading.value = true;
        try {
          await updateWorkflowField(workflowId.value, stepId.value, selectedField.value.id, {
            label: form.value.label,
            description: form.value.description,
            type: form.value.type,
            mode: form.value.mode,
            optional: form.value.optional,
            multiple: form.value.mode == "select" ? form.value.multi_select : false,
            selectItems: form.value.select_options,
            calculates: showCalculateInput.value ? form.value.calculates : false
          });
          resetForm();
          isLoading.value = false;
          isNewField.value = false;
          selectedField.value = null;
          success("Workfield Field Updated!");
          fetchStepFields(workflowId.value, stepId.value);
        } catch (er) {
          isLoading.value = false;
          error("Error Occurred");
        }
      }
    };
    const drop = async () => {
      if (selectedField.value) {
        isLoading.value = true;
        try {
          await deleteWorkflowField(workflowId.value, stepId.value, selectedField.value.id);
          resetForm();
          selectedField.value = null;
          fetchStepFields(workflowId.value, stepId.value);
          deleteModal.value = false;
          isLoading.value = false;
        } catch ({ response }) {
          isLoading.value = false;
          error("Error Occurred");
        }
      }
    };
    const initEdit = (field) => {
      var _a;
      if (field) {
        selectedField.value = field;
        isNewField.value = true;
        const _field = selectedField.value;
        if (_field) {
          const options = (_a = _field.select_items) == null ? void 0 : _a.map((item) => {
            return item.value;
          });
          form.value = {
            label: _field.label,
            description: _field.description,
            type: _field.type,
            mode: _field.mode,
            multi_select: !!_field.multiple,
            optional: !!_field.optional,
            select_options: options || [],
            calculates: !!_field.calculates
          };
        }
      }
    };
    const close = (done) => {
      selectedField.value = null;
      resetForm();
      done();
    };
    onMounted(() => {
      fetchStepDetails(workflowId.value, stepId.value);
      fetchStepFields(workflowId.value, stepId.value);
    });
    return (_ctx, _cache) => {
      const _component_VPlaceholderSection = _sfc_main$1;
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dialog = resolveComponent("el-dialog");
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$2;
      const _component_el_radio_button = resolveComponent("el-radio-button");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_VTag = _sfc_main$3;
      const _component_VTags = _sfc_main$4;
      const _component_el_switch = resolveComponent("el-switch");
      const _component_VButton = _sfc_main$5;
      const _component_VButtons = _sfc_main$6;
      const _component_VPlaceholderPage = _sfc_main$7;
      const _component_VDropdown = __unplugin_components_0;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_dialog, {
          modelValue: deleteModal.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => deleteModal.value = $event),
          title: "Delete Workflow Field",
          width: "400px"
        }, {
          footer: withCtx(() => [
            createVNode(_component_el_button, {
              size: "large",
              onClick: _cache[0] || (_cache[0] = ($event) => deleteModal.value = false)
            }, {
              default: withCtx(() => [
                createTextVNode("Cancel")
              ]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "danger",
              size: "large",
              onClick: drop
            }, {
              default: withCtx(() => [
                createTextVNode("Confirm")
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createBaseVNode("div", null, [
              createVNode(_component_VPlaceholderSection, {
                title: "Sure to Delete!",
                subtitle: "You are about to delete a workflow Field"
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_component_el_dialog, {
          modelValue: isNewField.value,
          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => isNewField.value = $event),
          title: selectedField.value ? "Update Field" : "Create Step Field",
          "before-close": close
        }, {
          footer: withCtx(() => [
            createVNode(_component_el_button, {
              size: "large",
              onClick: _cache[11] || (_cache[11] = ($event) => {
                isNewField.value = false;
                selectedField.value = null;
                resetForm();
              })
            }, {
              default: withCtx(() => [
                createTextVNode("Cancel")
              ]),
              _: 1
            }),
            selectedField.value == null ? (openBlock(), createBlock(_component_el_button, {
              key: 0,
              type: "success",
              size: "large",
              onClick: _cache[12] || (_cache[12] = ($event) => save())
            }, {
              default: withCtx(() => [
                createTextVNode("Save Field")
              ]),
              _: 1
            })) : (openBlock(), createBlock(_component_el_button, {
              key: 1,
              type: "success",
              size: "large",
              onClick: update
            }, {
              default: withCtx(() => [
                createTextVNode("Update Field")
              ]),
              _: 1
            }))
          ]),
          default: withCtx(() => [
            createBaseVNode("div", null, [
              createBaseVNode("form", null, [
                createBaseVNode("div", _hoisted_1, [
                  createBaseVNode("div", _hoisted_2, [
                    createVNode(_component_VField, {
                      label: "Field Label",
                      textaddon: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.label = $event),
                              type: "text",
                              class: "input",
                              placeholder: "Label",
                              required: ""
                            }, null, 512), [
                              [vModelText, form.value.label]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(_component_VField, {
                      label: "Field Description",
                      textaddon: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.description = $event),
                              type: "text",
                              class: "input",
                              placeholder: "Field Description",
                              required: ""
                            }, null, 512), [
                              [vModelText, form.value.description]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_component_VField, {
                      label: "Field Type",
                      textaddon: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_radio_group, {
                              modelValue: form.value.type,
                              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.type = $event),
                              size: "large"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(fieldTypes.value, (item, index) => {
                                  return openBlock(), createBlock(_component_el_radio_button, {
                                    key: index,
                                    label: item
                                  }, null, 8, ["label"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(_component_VField, {
                      label: "Fill Modes",
                      textaddon: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_radio_group, {
                              modelValue: form.value.mode,
                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.mode = $event),
                              size: "large"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(fillModes.value, (mode) => {
                                  return openBlock(), createBlock(_component_el_radio_button, {
                                    key: mode,
                                    label: mode
                                  }, null, 8, ["label"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue"]),
                            _hoisted_8
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  form.value.mode == "select" ? (openBlock(), createElementBlock("div", _hoisted_9, [
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, [
                        createVNode(_component_VField, { addons: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, { expanded: "" }, {
                              default: withCtx(() => [
                                withDirectives(createBaseVNode("input", {
                                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => option_value.value = $event),
                                  type: "text",
                                  class: "input",
                                  placeholder: "Add a select option",
                                  required: ""
                                }, null, 512), [
                                  [vModelText, option_value.value]
                                ])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createBaseVNode("div", {
                                  class: "button is-primary",
                                  onClick: _cache[7] || (_cache[7] = ($event) => addSelectOption(option_value.value))
                                }, " Add ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_12, [
                        form.value.select_options.length > 0 ? (openBlock(), createBlock(_component_VField, {
                          key: 0,
                          grouped: "",
                          multiline: ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(form.value.select_options, (option, i) => {
                              return openBlock(), createBlock(_component_VControl, { key: i }, {
                                default: withCtx(() => [
                                  createVNode(_component_VTags, { addons: "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_VTag, {
                                        label: option,
                                        color: "primary"
                                      }, null, 8, ["label"]),
                                      createVNode(_component_VTag, {
                                        remove: "",
                                        onClick: ($event) => removeOption(i)
                                      }, null, 8, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })) : (openBlock(), createElementBlock("span", _hoisted_13, "No Options, please add options!"))
                      ]),
                      createBaseVNode("div", _hoisted_14, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createVNode(_component_VControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_el_switch, {
                                  modelValue: form.value.multi_select,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.multi_select = $event),
                                  "active-text": "Multiple"
                                }, null, 8, ["modelValue"]),
                                _hoisted_15
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", _hoisted_17, [
                    createVNode(_component_VField, { label: "Optional?" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_switch, {
                              modelValue: form.value.optional,
                              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.optional = $event)
                            }, null, 8, ["modelValue"]),
                            _hoisted_18
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  showCalculateInput.value ? (openBlock(), createElementBlock("div", _hoisted_19, [
                    createVNode(_component_VField, { label: "Calculates" }, {
                      default: withCtx(() => [
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_switch, {
                              modelValue: form.value.calculates,
                              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.calculates = $event)
                            }, null, 8, ["modelValue"]),
                            _hoisted_20
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_21, [
            createVNode(_component_VField, null, {
              default: withCtx(() => [
                createVNode(_component_VControl, { icon: "feather:search" }, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => filters.value = $event),
                      class: "input custom-text-filter",
                      placeholder: "Search..."
                    }, null, 512), [
                      [vModelText, filters.value]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VButtons, null, {
              default: withCtx(() => [
                createVNode(_component_VButton, {
                  color: "primary",
                  icon: "fas fa-plus",
                  elevated: "",
                  onClick: _cache[15] || (_cache[15] = ($event) => {
                    isNewField.value = true;
                    selectedField.value = null;
                  })
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Add Field ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, [
              createVNode(_component_VPlaceholderPage, {
                class: normalizeClass([filteredData.value.length !== 0 && "is-hidden"]),
                title: "We couldn't find any matching results.",
                subtitle: "Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",
                larger: ""
              }, {
                image: withCtx(() => [
                  _hoisted_24,
                  _hoisted_25
                ]),
                _: 1
              }, 8, ["class"]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", {
                  class: normalizeClass(["flex-table-header", [filteredData.value.length === 0 && "is-hidden"]])
                }, _hoisted_32, 2),
                createBaseVNode("div", _hoisted_33, [
                  createVNode(TransitionGroup, {
                    name: "list",
                    tag: "div"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(filteredData.value, (item) => {
                        return openBlock(), createElementBlock("div", {
                          key: item.id,
                          class: "flex-table-item"
                        }, [
                          createBaseVNode("div", _hoisted_34, [
                            createBaseVNode("div", null, [
                              createBaseVNode("span", _hoisted_35, toDisplayString(item.label), 1),
                              createBaseVNode("span", _hoisted_36, [
                                createBaseVNode("span", null, toDisplayString(item.description), 1)
                              ])
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_37, [
                            createBaseVNode("span", _hoisted_38, toDisplayString(item.optional == 0 ? "required" : "Not required"), 1)
                          ]),
                          createBaseVNode("div", _hoisted_39, [
                            createBaseVNode("span", _hoisted_40, toDisplayString(item.mode), 1)
                          ]),
                          createBaseVNode("div", _hoisted_41, [
                            createBaseVNode("span", _hoisted_42, toDisplayString(item.type), 1)
                          ]),
                          createBaseVNode("div", _hoisted_43, [
                            createVNode(_component_VDropdown, {
                              icon: "feather:more-vertical",
                              spaced: "",
                              right: !isSm.value,
                              left: isSm.value
                            }, {
                              content: withCtx(() => [
                                createBaseVNode("a", {
                                  role: "menuitem",
                                  href: "#",
                                  class: "dropdown-item is-media is-warning",
                                  onClick: withModifiers(($event) => initEdit(item), ["prevent"])
                                }, _hoisted_47, 8, _hoisted_44),
                                createBaseVNode("a", {
                                  role: "menuitem",
                                  href: "#",
                                  class: "dropdown-item is-media is-warning",
                                  onClick: withModifiers(($event) => {
                                    deleteModal.value = true;
                                    selectedField.value = item;
                                  }, ["prevent"])
                                }, _hoisted_51, 8, _hoisted_48)
                              ]),
                              _: 2
                            }, 1032, ["right", "left"])
                          ])
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
