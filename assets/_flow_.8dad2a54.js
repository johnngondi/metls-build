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
import { _ as __unplugin_components_1 } from "./LocationPicker.0035601b.js";
import { _ as __unplugin_components_2 } from "./VControl.a1e5c3aa.js";
import { d as _sfc_main$1, b as useNotyf } from "./index.4ea6d167.js";
import { _ as _sfc_main$2 } from "./VField.897209dd.js";
import { _ as _sfc_main$3 } from "./VLoader.6d10ad6d.js";
import { d as defineComponent, F as useRoute, a as useRouter, r as ref, h as computed, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, q as withModifiers, s as createVNode, t as withCtx, v as unref, K as Fragment, J as renderList, A as toDisplayString, x as createBlock, y as createCommentVNode, ah as withDirectives, am as vModelText, z as createTextVNode, ar as vModelDynamic, as as ElMessage } from "./vendor.11f8b2c5.js";
import { u as useApply } from "./useApply.4fc76bc2.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
var _flow__vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "section" };
const _hoisted_2 = { class: "container" };
const _hoisted_3 = ["onSubmit"];
const _hoisted_4 = { class: "form-outer" };
const _hoisted_5 = { class: "form-body" };
const _hoisted_6 = { class: "form-fieldset" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Application Form"),
  /* @__PURE__ */ createBaseVNode("p", null, "Please provide the required information")
], -1);
const _hoisted_8 = { class: "column is-8" };
const _hoisted_9 = { class: "help-text" };
const _hoisted_10 = ["onUpdate:modelValue", "required", "placeholder"];
const _hoisted_11 = { class: "help" };
const _hoisted_12 = { class: "el-upload__tip" };
const _hoisted_13 = { class: "help-text" };
const _hoisted_14 = ["onUpdate:modelValue", "required", "name", "type"];
const _hoisted_15 = { class: "help" };
const _hoisted_16 = { class: "help" };
const _hoisted_17 = { key: 1 };
const _hoisted_18 = { class: "form-section-title mb-2" };
const _hoisted_19 = { class: "help-text" };
const _hoisted_20 = {
  key: 0,
  class: "columns"
};
const _hoisted_21 = ["onUpdate:modelValue", "name", "placeholder"];
const _hoisted_22 = { class: "column is-4" };
const _hoisted_23 = {
  key: 1,
  class: "columns"
};
const _hoisted_24 = { class: "column is-12" };
const _hoisted_25 = {
  class: "table",
  style: { "width": "100%" }
};
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("th", null, null, -1);
const _hoisted_27 = { class: "form-fieldset" };
const _sfc_main = defineComponent({
  __name: "[flow]",
  setup(__props) {
    const { startFields, fetchStartFields, submitStartFields, UPLOAD_URL, uploadFiles } = useApply();
    const notify = useNotyf();
    const route = useRoute();
    const router = useRouter();
    const formValue = ref({});
    const withItems = computed(() => {
      var _a;
      return ((_a = startFields.value) == null ? void 0 : _a.has_items) || false;
    });
    const items = computed(() => {
      var _a;
      return (_a = startFields.value) == null ? void 0 : _a.items;
    });
    const itemFields = computed(() => {
      var _a, _b;
      return items.value && ((_a = items.value) == null ? void 0 : _a.fields) ? (_b = items.value) == null ? void 0 : _b.fields : [];
    });
    const item = ref({});
    const workflowId = computed(() => route.params.flow);
    const loading = ref(false);
    const isEmpty = (value) => {
      return Object.keys(value).length === 0;
    };
    const itemsValue = ref([]);
    const addItems = () => {
      if (!isEmpty(item.value)) {
        itemsValue.value.push(__spreadValues({}, item.value));
        item.value = {};
      }
    };
    const removeItem = (key) => {
      itemsValue.value.splice(key, 1);
    };
    const getInputType = (type) => {
      if (type == "decimal" || type == "integer") {
        return "number";
      }
      if (type == "file") {
        return "file";
      }
      return "text";
    };
    const submit = async () => {
      isLoading.value = true;
      try {
        const { data } = await submitStartFields(workflowId.value, __spreadProps(__spreadValues({}, formValue.value), { items: itemsValue.value }));
        formValue.value = {};
        const { application_id, can_access_next_step, code, next_step_id } = data.data;
        notify.dismissAll();
        notify.success("Application Submitted");
        isLoading.value = false;
        if (next_step_id && can_access_next_step) {
          router.push({ name: "home-application-id-step", params: { id: application_id, step: next_step_id } });
        } else {
          router.push({ name: "home-application-id", params: { id: application_id } });
        }
      } catch (error) {
        isLoading.value = false;
        console.log(error.response);
        notify.dismissAll();
        notify.error("Unable to submit application");
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
      fetchStartFields(workflowId.value).finally(() => loading.value = false);
    });
    return (_ctx, _cache) => {
      const _component_location_picker = __unplugin_components_1;
      const _component_VControl = __unplugin_components_2;
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_VButton = _sfc_main$1;
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_time_picker = resolveComponent("el-time-picker");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_VField = _sfc_main$2;
      const _component_VLoader = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("form", {
            class: "form-layout",
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_VLoader, {
                active: loading.value,
                translucent: true
              }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d;
                  return [
                    createBaseVNode("div", _hoisted_5, [
                      createBaseVNode("div", _hoisted_6, [
                        _hoisted_7,
                        unref(startFields) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(startFields).fields, (field, i) => {
                          return openBlock(), createElementBlock("div", {
                            key: i,
                            class: "columns is-multiline"
                          }, [
                            createBaseVNode("div", _hoisted_8, [
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
                                        required: !field.optional,
                                        type: "date",
                                        placeholder: field.label,
                                        format: "dd/MM/yyyy",
                                        "value-format": "yyyy-MM-dd"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "required", "placeholder"]),
                                      createBaseVNode("p", _hoisted_9, toDisplayString(field.description), 1)
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
                                      }, null, 8, _hoisted_10), [
                                        [vModelText, formValue.value[field.name]]
                                      ]),
                                      createBaseVNode("p", _hoisted_11, toDisplayString(field.description), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true),
                                  field.mode == "fill" && field.type == "file" ? (openBlock(), createBlock(_component_VControl, { key: 3 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_el_upload, {
                                        action: unref(UPLOAD_URL),
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
                                          createBaseVNode("div", _hoisted_12, toDisplayString(field.description), 1)
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
                                      }, 1032, ["action", "http-request", "on-success", "on-remove"])
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true),
                                  field.mode == "fill" && field.type == "time" ? (openBlock(), createBlock(_component_VControl, { key: 4 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_el_time_picker, {
                                        modelValue: formValue.value[field.name],
                                        "onUpdate:modelValue": ($event) => formValue.value[field.name] = $event,
                                        required: !field.optional,
                                        disabled: !_ctx.isAllowed,
                                        format: "hh:mm A",
                                        size: "large"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "required", "disabled"]),
                                      createBaseVNode("p", _hoisted_13, toDisplayString(field.description), 1)
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
                                        type: getInputType(field.type)
                                      }, null, 8, _hoisted_14), [
                                        [vModelDynamic, formValue.value[field.name]]
                                      ]),
                                      createBaseVNode("p", _hoisted_15, toDisplayString(field.description), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true),
                                  field.mode == "select" ? (openBlock(), createBlock(_component_VControl, { key: 6 }, {
                                    default: withCtx(() => [
                                      createVNode(_component_el_select, {
                                        modelValue: formValue.value[field.name],
                                        "onUpdate:modelValue": ($event) => formValue.value[field.name] = $event,
                                        name: field.name
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
                                      }, 1032, ["modelValue", "onUpdate:modelValue", "name"]),
                                      createBaseVNode("p", _hoisted_16, toDisplayString(field.description), 1)
                                    ]),
                                    _: 2
                                  }, 1024)) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]);
                        }), 128)) : createCommentVNode("", true),
                        !unref(startFields) ? (openBlock(), createElementBlock("span", _hoisted_17, "No Fields")) : createCommentVNode("", true),
                        withItems.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                          createBaseVNode("div", null, [
                            createBaseVNode("h3", _hoisted_18, [
                              createBaseVNode("span", null, toDisplayString((_a = items.value) == null ? void 0 : _a.title), 1),
                              createBaseVNode("p", _hoisted_19, toDisplayString((_b = items.value) == null ? void 0 : _b.description), 1)
                            ])
                          ]),
                          itemFields.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_20, [
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
                                        }, null, 8, _hoisted_21), [
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
                            createBaseVNode("div", _hoisted_22, [
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
                          itemFields.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_23, [
                            createBaseVNode("div", _hoisted_24, [
                              createBaseVNode("table", _hoisted_25, [
                                createBaseVNode("thead", null, [
                                  createBaseVNode("tr", null, [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList((_d = items.value) == null ? void 0 : _d.fields, (h, l) => {
                                      return openBlock(), createElementBlock("th", { key: l }, [
                                        createBaseVNode("span", null, toDisplayString(h.label), 1)
                                      ]);
                                    }), 128)),
                                    _hoisted_26
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
                        ], 64)) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("div", _hoisted_27, [
                        createVNode(_component_VButton, {
                          type: "submit",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Submit & Proceed")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }),
                _: 1
              }, 8, ["active"])
            ])
          ], 40, _hoisted_3)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
