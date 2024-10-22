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
import { d as defineComponent, a as useRouter, F as useRoute, l as useWindowScroll, r as ref, h as computed, a7 as watch, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, n as normalizeClass, s as createVNode, t as withCtx, z as createTextVNode, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, x as createBlock, A as toDisplayString, v as unref, q as withModifiers } from "./vendor.11f8b2c5.js";
import { u as useTemplate } from "./useTemplate.42d85a27.js";
import { u as useWorkflow } from "./useWorkflow.759d0480.js";
import { u as useJuris } from "./useJuris.9d0e82c7.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import "./FileSaver.min.c8bfead3.js";
var EditTemplate_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "form-outer" };
const _hoisted_2 = { class: "form-header-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Edit Template")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = { class: "form-body" };
const _hoisted_7 = { class: "form-fieldset" };
const _hoisted_8 = { class: "columns is-multiline" };
const _hoisted_9 = { class: "column is-6" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("label", null, " Template Title", -1);
const _hoisted_11 = { class: "column is-12" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("label", null, "Template Type", -1);
const _hoisted_13 = { class: "column is-12" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("label", null, "View", -1);
const _hoisted_15 = { class: "form-fieldset" };
const _hoisted_16 = { class: "columns is-multiline" };
const _hoisted_17 = { class: "column is-12" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("label", null, "Workflow Process", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("p", { class: "help" }, "This template will be usable only in the selected workflow", -1);
const _hoisted_20 = { class: "column is-12" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("label", null, "Jurisdiction", -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("p", { class: "help" }, "This template will be usable only in the selected Jurisdiction", -1);
const _hoisted_23 = { class: "column is-12" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("label", null, "Description", -1);
const _sfc_main$1 = defineComponent({
  __name: "EditTemplate",
  setup(__props) {
    const { updateTemplate, fetchTemplate, template: templateData } = useTemplate();
    const router = useRouter();
    const route = useRoute();
    const { y } = useWindowScroll();
    const { workflows, fetchWorkflows, workflowPage } = useWorkflow();
    const { jurisdictions, fetchJurisdictions } = useJuris();
    const notfy = useNotyf();
    const templateTypes = ref([
      { id: "certificate", label: "Certificate" },
      { id: "invoice", label: "Invoice" },
      { id: "receipt", label: "Receipt" }
    ]);
    const templateId = computed(() => route.params.id);
    const template = ref({
      name: "",
      description: "",
      type: "",
      jurisdiction_id: void 0,
      workflow_process_id: void 0,
      view: ""
    });
    const resetForm = () => {
      template.value = {
        name: "",
        description: "",
        type: "",
        jurisdiction_id: void 0,
        workflow_process_id: void 0,
        view: ""
      };
    };
    const isStuck = computed(() => {
      return y.value > 30;
    });
    const close = function() {
      resetForm();
      router.push({ name: "templates" });
    };
    const save = async () => {
      var _a;
      isLoading.value = true;
      try {
        const { data } = await updateTemplate(templateId.value, __spreadValues({}, template.value));
        notfy.dismissAll();
        notfy.success(`Template Updated`);
        isLoading.value = false;
        close();
      } catch (error) {
        isLoading.value = false;
        console.log((_a = error.response) == null ? void 0 : _a.data.errors);
      }
    };
    watch(template.value, () => {
      const wfId = template.value.workflow_process_id;
      getJuris(wfId);
    });
    const getJuris = (wfId) => {
      if (wfId) {
        const process = workflowPage.value.data.filter((p) => p.id == wfId)[0];
        if (process) {
          fetchJurisdictions(process.jurisdiction_type);
        }
      }
    };
    onMounted(() => {
      isLoading.value = true;
      fetchWorkflows();
      fetchTemplate(templateId.value).then(() => {
        if (templateData.value) {
          const { type, name, description, view, jurisdiction_id, workflow_process_id } = templateData.value;
          template.value = {
            type,
            name,
            description,
            view,
            jurisdiction_id,
            workflow_process_id
          };
          if (workflow_process_id) {
            getJuris(workflow_process_id);
          }
        }
      }).finally(() => isLoading.value = false);
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_el_radio_button = resolveComponent("el-radio-button");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("form", {
          class: "form-layout",
          onSubmit: _cache[6] || (_cache[6] = withModifiers(() => {
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
                    createVNode(_component_VButton, {
                      light: "",
                      "dark-outlined": "",
                      onClick: close
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: "",
                      onClick: save
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Update Template ")
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
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_10,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => template.value.name = $event),
                              type: "text",
                              class: "input",
                              placeholder: "Title"
                            }, null, 512), [
                              [vModelText, template.value.name]
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
                            createVNode(_component_el_radio_group, {
                              modelValue: template.value.type,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => template.value.type = $event),
                              size: "large"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(templateTypes.value, (item) => {
                                  return openBlock(), createBlock(_component_el_radio_button, {
                                    key: item.id,
                                    label: item.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["label"]);
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
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_14,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => template.value.view = $event),
                              type: "text",
                              class: "input",
                              placeholder: "Template view name"
                            }, null, 512), [
                              [vModelText, template.value.view]
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
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("div", _hoisted_17, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_18,
                        _hoisted_19,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: template.value.workflow_process_id,
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => template.value.workflow_process_id = $event),
                              filterable: "",
                              placeholder: "Select Workflow Process",
                              size: "large"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(workflowPage).data, (item) => {
                                  return openBlock(), createBlock(_component_el_option, {
                                    key: item.id,
                                    label: item.name,
                                    value: item.id
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("span", null, toDisplayString(item.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["label", "value"]);
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
                  ]),
                  createBaseVNode("div", _hoisted_20, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_21,
                        _hoisted_22,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: template.value.jurisdiction_id,
                              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => template.value.jurisdiction_id = $event),
                              filterable: "",
                              size: "large",
                              placeholder: "Select a Jurisdiction"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jurisdictions), (item) => {
                                  return openBlock(), createBlock(_component_el_option, {
                                    key: item.id,
                                    label: item.title,
                                    value: item.id
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("span", null, toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["label", "value"]);
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
                  ]),
                  createBaseVNode("div", _hoisted_23, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_24,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("textarea", {
                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => template.value.description = $event),
                              class: "textarea",
                              rows: "4",
                              placeholder: "short description of this template...",
                              autocomplete: "off",
                              autocapitalize: "off",
                              spellcheck: "true"
                            }, null, 512), [
                              [vModelText, template.value.description]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ])
        ], 32)
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = defineComponent({
  __name: "[id]",
  setup(__props) {
    pageTitle.value = "Edit Template";
    return (_ctx, _cache) => {
      const _component_EditTemplate = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_EditTemplate)
      ]);
    };
  }
});
export { _sfc_main as default };
