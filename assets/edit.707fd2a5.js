var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { k as _sfc_main$2, d as _sfc_main$3, b as useNotyf } from "./index.256f70c3.js";
import { _ as __unplugin_components_1 } from "./LocationPicker.a0540ce0.js";
import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$4 } from "./VField.897209dd.js";
import { _ as _sfc_main$5 } from "./VLoader.6d10ad6d.js";
import { d as defineComponent, a as useRouter, a6 as toRefs, h as computed, r as ref, a7 as watch, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, s as createVNode, t as withCtx, x as createBlock, z as createTextVNode, y as createCommentVNode, K as Fragment, J as renderList, f as createBaseVNode, A as toDisplayString, ah as withDirectives, am as vModelText, v as unref, ar as vModelDynamic, q as withModifiers, as as ElMessage, F as useRoute, n as normalizeClass } from "./vendor.11f8b2c5.js";
import { u as useApply } from "./useApply.7c599896.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
const _hoisted_1$1 = ["onSubmit"];
const _hoisted_2$1 = { class: "column is-8" };
const _hoisted_3$1 = { class: "help-text" };
const _hoisted_4$1 = ["onUpdate:modelValue", "required", "placeholder"];
const _hoisted_5$1 = { class: "help" };
const _hoisted_6$1 = { class: "el-upload__tip" };
const _hoisted_7$1 = { class: "help-text" };
const _hoisted_8$1 = ["onUpdate:modelValue", "required", "name", "type", "disabled"];
const _hoisted_9$1 = { class: "help" };
const _hoisted_10$1 = { class: "help" };
const _hoisted_11$1 = { key: 2 };
const _hoisted_12$1 = { class: "form-section-title mb-2" };
const _hoisted_13$1 = { class: "help-text" };
const _hoisted_14$1 = {
  key: 0,
  class: "columns is-multiline"
};
const _hoisted_15$1 = ["onUpdate:modelValue", "name", "placeholder"];
const _hoisted_16$1 = { class: "column is-12" };
const _hoisted_17$1 = {
  key: 1,
  class: "columns"
};
const _hoisted_18$1 = { class: "column is-12" };
const _hoisted_19$1 = {
  class: "table",
  style: { "width": "100%" }
};
const _hoisted_20 = { class: "title is-5" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("th", null, null, -1);
const _hoisted_22 = { class: "navigation-buttons" };
const _hoisted_23 = { class: "buttons" };
const _sfc_main$1 = defineComponent({
  __name: "StepForm",
  props: {
    stepId: {
      type: Number,
      required: true
    },
    applicationId: {
      type: String,
      required: true
    }
  },
  emits: ["next"],
  setup(__props, { emit }) {
    const props = __props;
    const router = useRouter();
    const { stepId, applicationId } = toRefs(props);
    const { applicationStep, fetchApplicationStep, submitApplicationStep, uploadFiles, UPLOAD_URL } = useApply();
    const isAllowed = computed(() => {
      var _a;
      return (_a = applicationStep.value) == null ? void 0 : _a.canEdit;
    });
    const fields = computed(() => {
      var _a;
      return (_a = applicationStep.value) == null ? void 0 : _a.fields;
    });
    computed(() => {
      var _a;
      return (_a = applicationStep.value) == null ? void 0 : _a.step;
    });
    const withItems = computed(() => {
      var _a;
      return ((_a = applicationStep.value) == null ? void 0 : _a.has_items) || false;
    });
    const items = computed(() => {
      var _a;
      return (_a = applicationStep.value) == null ? void 0 : _a.items;
    });
    const itemFields = computed(() => {
      var _a, _b;
      return items.value && ((_a = items.value) == null ? void 0 : _a.fields) ? (_b = items.value) == null ? void 0 : _b.fields : [];
    });
    const formValue = ref({});
    const item = ref({});
    const notf = useNotyf();
    const loading = ref(false);
    const itemsValue = ref([]);
    const getInputType = (type) => {
      if (type == "decimal" || type == "integer") {
        return "number";
      }
      if (type == "file") {
        return "file";
      }
      return "text";
    };
    const isEmpty = (value) => {
      return Object.keys(value).length === 0;
    };
    const addItems = () => {
      if (!isEmpty(item.value)) {
        itemsValue.value.push(__spreadValues({}, item.value));
        item.value = {};
      }
    };
    watch(() => fields.value, () => {
      if (fields.value) {
        fields.value.forEach((field) => {
          formValue.value[field.name] = field.value;
        });
      }
    });
    const removeItem = (key) => {
      itemsValue.value.splice(key, 1);
    };
    const submit = async () => {
      try {
        isLoading.value = true;
        loadingText.value = "Submitting...";
        const { data } = await submitApplicationStep(applicationId.value, stepId.value, __spreadProps(__spreadValues({}, formValue.value), { items: itemsValue.value }));
        console.log("submit", data);
        const { code, can_access_next_step, next_step_id, application_id } = data.data;
        if (code == 0 && next_step_id == null) {
          isLoading.value = false;
          notf.success("Submitted successfully");
          router.push({ name: "home-application-id", params: { id: application_id } });
        }
        if (code == 0 && next_step_id != null) {
          notf.success("Submitted successfully");
          emit("next");
        }
      } catch ({ response }) {
        isLoading.value = false;
        notf.error("Error Occurred, Try again!");
        console.log(response);
      }
    };
    const handleMaxFiles = () => {
      ElMessage.warning(`Exceed of the upload limit!`);
    };
    const handleUploadSuccess = (name, response) => {
      const _data = response.data;
      if (_data.data && _data.data.code == 0) {
        const url = _data.data.path;
        const _file = { [name]: url };
        const _current = formValue.value;
        formValue.value = Object.assign(_current, _file);
      }
    };
    const handleFileRemove = (name) => {
      delete formValue.value[name];
    };
    const handleUploadError = (error) => {
      console.log(error);
      ElMessage.error(`File Not Uploaded`);
    };
    onMounted(() => {
      loading.value = true;
      fetchApplicationStep(applicationId.value, stepId.value).then(() => {
        var _a, _b;
        if (withItems.value && applicationStep.value && applicationStep.value.items) {
          const _items = (_b = (_a = applicationStep.value) == null ? void 0 : _a.items) == null ? void 0 : _b.items;
          if (_items.length < 1) {
            itemsValue.value = [];
          } else {
            itemsValue.value.push(..._items);
          }
        }
      }).finally(() => loading.value = false);
    });
    return (_ctx, _cache) => {
      const _component_VMessage = _sfc_main$2;
      const _component_location_picker = __unplugin_components_1;
      const _component_VControl = __unplugin_components_2;
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_VButton = _sfc_main$3;
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_time_picker = resolveComponent("el-time-picker");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_VField = _sfc_main$4;
      const _component_VLoader = _sfc_main$5;
      return openBlock(), createElementBlock("form", {
        class: "form-layout is-left",
        onSubmit: withModifiers(submit, ["prevent"])
      }, [
        createVNode(_component_VLoader, {
          size: "large",
          active: loading.value,
          lighter: ""
        }, {
          default: withCtx(() => {
            var _a, _b, _c, _d;
            return [
              !isAllowed.value ? (openBlock(), createBlock(_component_VMessage, {
                key: 0,
                color: "warning"
              }, {
                default: withCtx(() => [
                  createTextVNode("You are not authorized to process this form!")
                ]),
                _: 1
              })) : createCommentVNode("", true),
              fields.value && fields.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(fields.value, (field, i) => {
                return openBlock(), createElementBlock("div", {
                  key: i,
                  class: "columns is-multiline"
                }, [
                  createBaseVNode("div", _hoisted_2$1, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createBaseVNode("label", null, toDisplayString(field.label), 1),
                        field.mode == "map" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_location_picker, {
                              modelValue: formValue.value[field.name],
                              "onUpdate:modelValue": ($event) => formValue.value[field.name] = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        field.mode == "fill" && field.type == "date" ? (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_date_picker, {
                              modelValue: formValue.value[field.name],
                              "onUpdate:modelValue": ($event) => formValue.value[field.name] = $event,
                              type: "date",
                              placeholder: field.label,
                              format: "YYYY-MM-DD",
                              "value-format": "YYYY-MM-DD"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                            createBaseVNode("p", _hoisted_3$1, toDisplayString(field.description), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        field.mode == "fill" && field.type == "textarea" ? (openBlock(), createBlock(_component_VControl, { key: 2 }, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("textarea", {
                              "onUpdate:modelValue": ($event) => formValue.value[field.name] = $event,
                              required: !field.optional,
                              class: "textarea",
                              rows: "4",
                              placeholder: field.label
                            }, null, 8, _hoisted_4$1), [
                              [vModelText, formValue.value[field.name]]
                            ]),
                            createBaseVNode("p", _hoisted_5$1, toDisplayString(field.description), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        field.mode == "fill" && field.type == "file" ? (openBlock(), createBlock(_component_VControl, { key: 3 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_upload, {
                              action: unref(UPLOAD_URL),
                              "file-list": [{ url: field.value, name: field.name }],
                              name: "upload",
                              limit: 1,
                              "on-exceed": handleMaxFiles,
                              "http-request": unref(uploadFiles),
                              "auto-upload": true,
                              "on-success": (res, file, files) => {
                                return handleUploadSuccess(field.name, res);
                              },
                              "on-remove": () => handleFileRemove(field.name),
                              "on-error": handleUploadError
                            }, {
                              tip: withCtx(() => [
                                createBaseVNode("div", _hoisted_6$1, toDisplayString(field.description), 1)
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_VButton, {
                                  light: "",
                                  color: "info"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Select File")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["action", "file-list", "http-request", "on-success", "on-remove"])
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        field.mode == "fill" && field.type == "time" ? (openBlock(), createBlock(_component_VControl, { key: 4 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_time_picker, {
                              modelValue: formValue.value[field.name],
                              "onUpdate:modelValue": ($event) => formValue.value[field.name] = $event,
                              required: !field.optional,
                              disabled: !isAllowed.value,
                              format: "hh:mm A",
                              size: "large"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "required", "disabled"]),
                            createBaseVNode("p", _hoisted_7$1, toDisplayString(field.description), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        field.mode == "fill" && field.type != "file" && field.type != "date" && field.type != "textarea" && field.type != "time" ? (openBlock(), createBlock(_component_VControl, { key: 5 }, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": ($event) => formValue.value[field.name] = $event,
                              required: !field.optional,
                              name: field.name,
                              class: "input",
                              type: getInputType(field.type),
                              disabled: !isAllowed.value
                            }, null, 8, _hoisted_8$1), [
                              [vModelDynamic, formValue.value[field.name]]
                            ]),
                            createBaseVNode("p", _hoisted_9$1, toDisplayString(field.description), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        field.mode == "select" ? (openBlock(), createBlock(_component_VControl, { key: 6 }, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: formValue.value[field.name],
                              "onUpdate:modelValue": ($event) => formValue.value[field.name] = $event,
                              disabled: !isAllowed.value,
                              name: field.name,
                              required: !field.optional,
                              multiple: !!field.multiple,
                              size: "large"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(field.select_items, (item2, j) => {
                                  return openBlock(), createBlock(_component_el_option, {
                                    key: j,
                                    value: item2.value,
                                    label: item2.label
                                  }, null, 8, ["value", "label"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "name", "required", "multiple"]),
                            createBaseVNode("p", _hoisted_10$1, toDisplayString(field.description), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ]);
              }), 128)) : (openBlock(), createElementBlock("span", _hoisted_11$1, "No Fields")),
              withItems.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                createBaseVNode("div", null, [
                  createBaseVNode("h3", _hoisted_12$1, [
                    createBaseVNode("span", null, toDisplayString((_a = items.value) == null ? void 0 : _a.title), 1),
                    createBaseVNode("p", _hoisted_13$1, toDisplayString((_b = items.value) == null ? void 0 : _b.description), 1)
                  ])
                ]),
                itemFields.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_14$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList((_c = items.value) == null ? void 0 : _c.fields, (field, j) => {
                    return openBlock(), createElementBlock("div", {
                      key: j,
                      class: "column is-4"
                    }, [
                      createVNode(_component_VField, null, {
                        default: withCtx(() => [
                          createVNode(_component_VControl, null, {
                            default: withCtx(() => [
                              withDirectives(createBaseVNode("input", {
                                "onUpdate:modelValue": ($event) => item.value[field.name] = $event,
                                name: field.name,
                                type: "text",
                                class: "input",
                                placeholder: field.label
                              }, null, 8, _hoisted_15$1), [
                                [vModelText, item.value[field.name]]
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]);
                  }), 128)),
                  createBaseVNode("div", _hoisted_16$1, [
                    createVNode(_component_VButton, {
                      onClick: _cache[0] || (_cache[0] = ($event) => addItems())
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Add")
                      ]),
                      _: 1
                    })
                  ])
                ])) : createCommentVNode("", true),
                itemFields.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_17$1, [
                  createBaseVNode("div", _hoisted_18$1, [
                    createBaseVNode("table", _hoisted_19$1, [
                      createBaseVNode("thead", null, [
                        createBaseVNode("tr", null, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList((_d = items.value) == null ? void 0 : _d.fields, (h, l) => {
                            return openBlock(), createElementBlock("th", { key: l }, [
                              createBaseVNode("span", _hoisted_20, toDisplayString(h.label), 1)
                            ]);
                          }), 128)),
                          _hoisted_21
                        ])
                      ]),
                      createBaseVNode("tbody", null, [
                        itemsValue.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(itemsValue.value, (val, k) => {
                          var _a2;
                          return openBlock(), createElementBlock("tr", { key: k }, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList((_a2 = items.value) == null ? void 0 : _a2.fields, (value, n) => {
                              return openBlock(), createElementBlock("td", { key: n }, toDisplayString(val[value.name]), 1);
                            }), 128)),
                            createBaseVNode("td", null, [
                              createVNode(_component_VButton, {
                                color: "danger",
                                light: "",
                                onClick: ($event) => removeItem(k)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Delete")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ])
                          ]);
                        }), 128)) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ], 64)) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_22, [
                createBaseVNode("div", _hoisted_23, [
                  createVNode(_component_VButton, {
                    color: "primary",
                    bold: "",
                    type: "submit",
                    disabled: !isAllowed.value,
                    loading: unref(isLoading)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Submit & Proceed ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ])
              ])
            ];
          }),
          _: 1
        }, 8, ["active"])
      ], 40, _hoisted_1$1);
    };
  }
});
var edit_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = {
  class: "section card",
  style: { "height": "100%" }
};
const _hoisted_2 = { class: "mobile-steps is-active mb-4" };
const _hoisted_3 = { class: "steps has-content-centered is-thin is-horizontal is-short" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "steps-marker" }, null, -1);
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "step-number" };
const _hoisted_7 = {
  key: 0,
  class: "mb-3 mt-2"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h1", null, "Warning!", -1);
const _hoisted_9 = { class: "stepper-form" };
const _hoisted_10 = { class: "form-sections" };
const _hoisted_11 = { class: "form-section-title" };
const _hoisted_12 = { class: "form-section-inner" };
const _hoisted_13 = {
  class: "form-stepper",
  style: { "width": "50%" }
};
const _hoisted_14 = { class: "steps is-vertical is-thin is-short" };
const _hoisted_15 = ["onClick"];
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("a", {
  href: "#",
  class: "steps-marker"
}, null, -1);
const _hoisted_17 = { class: "steps-content" };
const _hoisted_18 = { class: "step-number" };
const _hoisted_19 = { class: "step-info" };
const _sfc_main = defineComponent({
  __name: "edit",
  setup(__props) {
    const route = useRoute();
    const { application, fetchApplication } = useApply();
    const applicationId = computed(() => route.params.id);
    const steps = computed(() => application.value.steps);
    const applicationItem = computed(() => application.value.application);
    const currentStep = ref(0);
    ref(-1);
    const proceed = () => {
      loadingText.value = "Proceeding to next step";
      setTimeout(() => {
        currentStep.value += 1;
        isLoading.value = false;
      }, 2e3);
    };
    onMounted(() => {
      fetchApplication(applicationId.value);
    });
    return (_ctx, _cache) => {
      const _component_VMessage = _sfc_main$2;
      const _component_step_form = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("ul", _hoisted_3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(steps.value, (step, index) => {
              return openBlock(), createElementBlock("li", {
                key: index,
                class: normalizeClass([[currentStep.value === 0 && "is-active"], "steps-segment"])
              }, [
                _hoisted_4,
                createBaseVNode("a", {
                  href: "#",
                  class: "steps-content",
                  onClick: withModifiers(($event) => currentStep.value = index, ["prevent"])
                }, [
                  createBaseVNode("p", _hoisted_6, toDisplayString(step == null ? void 0 : step.stepInfo.title), 1)
                ], 8, _hoisted_5)
              ], 2);
            }), 128))
          ])
        ]),
        applicationItem.value && applicationItem.value.warning_body != null ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createVNode(_component_VMessage, { color: "warning" }, {
            default: withCtx(() => [
              createBaseVNode("div", null, [
                _hoisted_8,
                createBaseVNode("p", null, toDisplayString(applicationItem.value.warning_body), 1),
                createBaseVNode("p", null, toDisplayString(_ctx.$filters.bDate(applicationItem.value.warning_at)), 1)
              ])
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(steps.value, (step, i) => {
              return openBlock(), createElementBlock(Fragment, null, [
                currentStep.value === i ? (openBlock(), createElementBlock("div", {
                  id: "form-step-0",
                  key: i,
                  class: "form-section is-active"
                }, [
                  createBaseVNode("h3", _hoisted_11, [
                    createBaseVNode("span", null, toDisplayString(step == null ? void 0 : step.stepInfo.title), 1),
                    createBaseVNode("p", null, toDisplayString(step == null ? void 0 : step.stepInfo.description), 1)
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(_component_step_form, {
                      "application-id": applicationId.value,
                      "step-id": step.stepInfo.id,
                      onNext: proceed
                    }, null, 8, ["application-id", "step-id"])
                  ])
                ])) : createCommentVNode("", true)
              ], 64);
            }), 256))
          ]),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("ul", _hoisted_14, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(steps.value, (step, index) => {
                return openBlock(), createElementBlock("li", {
                  id: "step-segment-0",
                  key: index,
                  class: normalizeClass([[currentStep.value === index && "is-active"], "steps-segment"]),
                  onClick: withModifiers(($event) => currentStep.value = index, ["prevent"])
                }, [
                  _hoisted_16,
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("p", _hoisted_18, toDisplayString(step == null ? void 0 : step.stepInfo.title), 1),
                    createBaseVNode("p", _hoisted_19, toDisplayString(step == null ? void 0 : step.stepInfo.description), 1)
                  ])
                ], 10, _hoisted_15);
              }), 128))
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
