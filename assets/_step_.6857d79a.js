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
import { _ as __unplugin_components_2 } from "./VControl.a1e5c3aa.js";
import { _ as _sfc_main$1 } from "./VField.897209dd.js";
import { d as _sfc_main$2 } from "./index.4ea6d167.js";
import { d as defineComponent, F as useRoute, a as useRouter, h as computed, r as ref, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, q as withModifiers, K as Fragment, A as toDisplayString, y as createCommentVNode, J as renderList, s as createVNode, t as withCtx, x as createBlock, ah as withDirectives, ar as vModelDynamic, z as createTextVNode } from "./vendor.11f8b2c5.js";
import { u as useApply } from "./useApply.4fc76bc2.js";
var _step__vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "section" };
const _hoisted_2 = { class: "container" };
const _hoisted_3 = ["onSubmit"];
const _hoisted_4 = { class: "form-outer" };
const _hoisted_5 = { class: "form-body" };
const _hoisted_6 = { class: "form-fieldset" };
const _hoisted_7 = { class: "fieldset-heading" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("h4", null, "Application Form", -1);
const _hoisted_9 = { class: "column is-8" };
const _hoisted_10 = ["onUpdate:modelValue", "required", "name", "type"];
const _hoisted_11 = { class: "help" };
const _hoisted_12 = { class: "help" };
const _hoisted_13 = { key: 1 };
const _hoisted_14 = { class: "form-fieldset" };
const _sfc_main = defineComponent({
  __name: "[step]",
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const { applicationStep, fetchApplicationStep, submitApplicationStep } = useApply();
    const applicationId = computed(() => route.params.id);
    const stepId = computed(() => route.params.step);
    const formValue = ref({});
    const fields = computed(() => {
      if (!applicationStep.value) {
        return [];
      } else {
        return applicationStep.value.fields;
      }
    });
    const stepInfo = computed(() => {
      if (!applicationStep.value) {
        return void 0;
      } else {
        return applicationStep.value.step;
      }
    });
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
      try {
        const { data } = await submitApplicationStep(applicationId.value, stepId.value, __spreadValues({}, formValue.value));
        formValue.value = {};
        const { application_id, next_step_id, can_access_next_step } = data.data;
        if (next_step_id && can_access_next_step) {
          router.push({ name: "home-application-id-step", params: { id: application_id, step: next_step_id } });
        } else {
          router.push({ name: "home-application-id", params: { id: application_id } });
        }
      } catch ({ response }) {
        console.log(response);
      }
    };
    onMounted(() => {
      fetchApplicationStep(applicationId.value, stepId.value);
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("form", {
            class: "form-layout",
            onSubmit: withModifiers(submit, ["prevent"])
          }, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createBaseVNode("div", _hoisted_7, [
                    _hoisted_8,
                    stepInfo.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createBaseVNode("h6", null, toDisplayString(stepInfo.value.title), 1),
                      createBaseVNode("p", null, toDisplayString(stepInfo.value.description), 1)
                    ], 64)) : createCommentVNode("", true)
                  ]),
                  fields.value && fields.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(fields.value, (field, i) => {
                    return openBlock(), createElementBlock("div", {
                      key: i,
                      class: "columns is-multiline"
                    }, [
                      createBaseVNode("div", _hoisted_9, [
                        createVNode(_component_VField, null, {
                          default: withCtx(() => [
                            createBaseVNode("label", null, toDisplayString(field.label), 1),
                            field.mode == "fill" ? (openBlock(), createBlock(_component_VControl, { key: 0 }, {
                              default: withCtx(() => [
                                withDirectives(createBaseVNode("input", {
                                  "onUpdate:modelValue": ($event) => formValue.value[field.name] = $event,
                                  required: !field.optional,
                                  name: field.name,
                                  class: "input",
                                  type: getInputType(field.type)
                                }, null, 8, _hoisted_10), [
                                  [vModelDynamic, formValue.value[field.name]]
                                ]),
                                createBaseVNode("p", _hoisted_11, toDisplayString(field.description), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true),
                            field.mode == "select" ? (openBlock(), createBlock(_component_VControl, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(_component_el_select, {
                                  modelValue: formValue.value[field.name],
                                  "onUpdate:modelValue": ($event) => formValue.value[field.name] = $event,
                                  name: field.name,
                                  required: !field.optional,
                                  multiple: !!field.multiple,
                                  size: "large"
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createElementBlock(Fragment, null, renderList(field.select_items, (item, j) => {
                                      return openBlock(), createBlock(_component_el_option, {
                                        key: j,
                                        value: item.value,
                                        label: item.label
                                      }, null, 8, ["value", "label"]);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue", "name", "required", "multiple"]),
                                createBaseVNode("p", _hoisted_12, toDisplayString(field.description), 1)
                              ]),
                              _: 2
                            }, 1024)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]);
                  }), 128)) : (openBlock(), createElementBlock("span", _hoisted_13, "No Fields"))
                ]),
                createBaseVNode("div", _hoisted_14, [
                  createVNode(_component_VButton, {
                    type: "submit",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Submit")
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ], 40, _hoisted_3)
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
