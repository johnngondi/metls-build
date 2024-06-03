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
import { d as _sfc_main$2, b as useNotyf } from "./index.4ea6d167.js";
import { _ as __unplugin_components_2 } from "./VControl.a1e5c3aa.js";
import { _ as _sfc_main$3 } from "./VField.897209dd.js";
import { d as defineComponent, a as useRouter, l as useWindowScroll, U as useI18n, r as ref, h as computed, a7 as watch, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, n as normalizeClass, A as toDisplayString, v as unref, s as createVNode, t as withCtx, z as createTextVNode, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, x as createBlock, q as withModifiers } from "./vendor.11f8b2c5.js";
import { u as useTemplate } from "./useTemplate.618bfea8.js";
import { u as useWorkflow } from "./useWorkflow.ff8b08ba.js";
import { u as useJuris } from "./useJuris.34efa3fe.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import "./FileSaver.min.c8bfead3.js";
var CreateTemplate_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "form-outer" };
const _hoisted_2 = { class: "form-header-inner" };
const _hoisted_3 = { class: "left" };
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = { class: "form-body" };
const _hoisted_7 = { class: "form-fieldset" };
const _hoisted_8 = { class: "columns is-multiline" };
const _hoisted_9 = { class: "column is-6" };
const _hoisted_10 = ["placeholder"];
const _hoisted_11 = { class: "column is-12" };
const _hoisted_12 = { class: "column is-12" };
const _hoisted_13 = ["placeholder"];
const _hoisted_14 = { class: "form-fieldset" };
const _hoisted_15 = { class: "columns is-multiline" };
const _hoisted_16 = { class: "column is-12" };
const _hoisted_17 = { class: "help" };
const _hoisted_18 = { class: "column is-12" };
const _hoisted_19 = { class: "help" };
const _hoisted_20 = { class: "column is-12" };
const _hoisted_21 = ["placeholder"];
const _sfc_main$1 = defineComponent({
  __name: "CreateTemplate",
  setup(__props) {
    const { createTemplate } = useTemplate();
    const router = useRouter();
    const { y } = useWindowScroll();
    const { workflows, fetchWorkflows, workflowPage } = useWorkflow();
    const { jurisdictions, fetchJurisdictions } = useJuris();
    const notfy = useNotyf();
    const { t } = useI18n();
    const templateTypes = ref([
      { id: "certificate", label: "Certificate" },
      { id: "invoice", label: "Invoice" },
      { id: "receipt", label: "Receipt" }
    ]);
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
      loadingText.value = "Creating Template...";
      try {
        const { data } = await createTemplate(__spreadValues({}, template.value));
        notfy.dismissAll();
        notfy.success(`Template Created`);
        isLoading.value = false;
        close();
      } catch (error) {
        isLoading.value = false;
        console.log((_a = error.response) == null ? void 0 : _a.data.errors);
      }
    };
    watch(template.value, () => {
      const wfId = template.value.workflow_process_id;
      if (wfId) {
        const process = workflowPage.value.data.filter((p) => p.id == wfId)[0];
        if (process) {
          fetchJurisdictions(process.jurisdiction_type);
        }
      }
    });
    onMounted(() => {
      fetchWorkflows();
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
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("h3", null, toDisplayString(unref(t)("template.new.title")), 1)
                ]),
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_component_VButton, {
                      light: "",
                      "dark-outlined": "",
                      onClick: close
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("template.new.actions.cancel")), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: "",
                      onClick: save
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("template.new.actions.submit")), 1)
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
                        createBaseVNode("label", null, toDisplayString(unref(t)("template.new.placeholder.name")), 1),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => template.value.name = $event),
                              type: "text",
                              class: "input",
                              placeholder: unref(t)("template.new.placeholder.name")
                            }, null, 8, _hoisted_10), [
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
                        createBaseVNode("label", null, toDisplayString(unref(t)("template.new.placeholder.type")), 1),
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
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createBaseVNode("label", null, toDisplayString(unref(t)("template.new.placeholder.view")), 1),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => template.value.view = $event),
                              type: "text",
                              class: "input",
                              placeholder: unref(t)("template.new.placeholder.view")
                            }, null, 8, _hoisted_13), [
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
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createBaseVNode("label", null, toDisplayString(unref(t)("template.new.placeholder.process")), 1),
                        createBaseVNode("p", _hoisted_17, toDisplayString(unref(t)("template.new.placeholder.process", 2)), 1),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: template.value.workflow_process_id,
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => template.value.workflow_process_id = $event),
                              filterable: "",
                              placeholder: unref(t)("template.new.placeholder.process"),
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
                            }, 8, ["modelValue", "placeholder"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_18, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createBaseVNode("label", null, toDisplayString(unref(t)("template.new.placeholder.jurisdiction")), 1),
                        createBaseVNode("p", _hoisted_19, toDisplayString(unref(t)("template.new.placeholder.jurisdiction", 2)), 1),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: template.value.jurisdiction_id,
                              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => template.value.jurisdiction_id = $event),
                              filterable: "",
                              size: "large",
                              placeholder: unref(t)("template.new.placeholder.jurisdiction")
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
                            }, 8, ["modelValue", "placeholder"])
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
                        createBaseVNode("label", null, toDisplayString(unref(t)("template.new.placeholder.description")), 1),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("textarea", {
                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => template.value.description = $event),
                              class: "textarea",
                              rows: "4",
                              placeholder: unref(t)("template.new.placeholder.description", 2),
                              autocomplete: "off",
                              autocapitalize: "off",
                              spellcheck: "true"
                            }, null, 8, _hoisted_21), [
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
  __name: "new",
  setup(__props) {
    const { t } = useI18n();
    pageTitle.value = t("template.new.title");
    return (_ctx, _cache) => {
      const _component_CreateTemplate = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_CreateTemplate)
      ]);
    };
  }
});
export { _sfc_main as default };
