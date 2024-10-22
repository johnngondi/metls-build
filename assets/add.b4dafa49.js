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
import { _ as _sfc_main$4 } from "./VCheckbox.d817b735.js";
import { d as defineComponent, l as useWindowScroll, a as useRouter, h as computed, r as ref, o as openBlock, b as createElementBlock, f as createBaseVNode, n as normalizeClass, s as createVNode, t as withCtx, z as createTextVNode, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, A as toDisplayString, ap as vModelSelect, v as unref, x as createBlock, q as withModifiers } from "./vendor.11f8b2c5.js";
import { u as useAuth } from "./useAuth.75718ebb.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
var CreateRole_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "form-outer" };
const _hoisted_2 = { class: "form-header-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Create Role")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = { class: "form-body" };
const _hoisted_7 = { class: "form-fieldset" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Role Information"),
  /* @__PURE__ */ createBaseVNode("p", null, "Role Details")
], -1);
const _hoisted_9 = { class: "columns is-multiline" };
const _hoisted_10 = { class: "column is-6" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("label", null, "Role Name", -1);
const _hoisted_12 = { class: "column is-6" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("label", null, "Role Group", -1);
const _hoisted_14 = { class: "select" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("option", {
  disabled: "",
  value: ""
}, "Select a User Group", -1);
const _hoisted_16 = ["value"];
const _hoisted_17 = { class: "column is-12" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("label", null, "Role Description", -1);
const _hoisted_19 = { class: "form-fieldset" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "fieldset-heading" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Permissions"),
  /* @__PURE__ */ createBaseVNode("p", null, "Privileges under this Role")
], -1);
const _hoisted_21 = { class: "columns is-multiline" };
const _hoisted_22 = { class: "column is-12" };
const _sfc_main$1 = defineComponent({
  __name: "CreateRole",
  setup(__props) {
    const notif = useNotyf();
    const { y } = useWindowScroll();
    const router = useRouter();
    const { userGroups, createRole, permissions } = useAuth();
    const groups = computed(() => userGroups.value.filter((g) => g.has_roles));
    const role = ref({
      name: "",
      user_group_id: "",
      description: "",
      permissions: []
    });
    const isStuck = computed(() => {
      return y.value > 10;
    });
    const resetForm = () => {
      role.value = {
        name: "",
        user_group_id: "",
        permissions: [],
        description: ""
      };
    };
    const save = async () => {
      isLoading.value = true;
      loadingText.value = "Creating Role...";
      try {
        const { data } = await createRole(__spreadValues({}, role.value));
        console.log(data);
        isLoading.value = false;
        resetForm();
        notif.dismissAll();
        notif.success("Role Created Successfully");
        router.push({
          name: "user-role"
        });
      } catch ({ response }) {
        isLoading.value = false;
        notif.dismissAll();
        const error = response == null ? void 0 : response.data;
        notif.error(error.message || "An Error Occurred!");
        console.log(response);
      }
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_VCheckbox = _sfc_main$4;
      return openBlock(), createElementBlock("form", {
        class: "form-layout",
        onSubmit: _cache[4] || (_cache[4] = withModifiers(() => {
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
                  createVNode(_component_VButton, { onClick: resetForm }, {
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
                      createTextVNode(" Submit ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              _hoisted_8,
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_11,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => role.value.name = $event),
                            type: "text",
                            class: "input",
                            placeholder: "Role Name"
                          }, null, 512), [
                            [vModelText, role.value.name]
                          ])
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
                      _hoisted_13,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_14, [
                            withDirectives(createBaseVNode("select", {
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => role.value.user_group_id = $event),
                              placeholder: "Select a User Group"
                            }, [
                              _hoisted_15,
                              (openBlock(true), createElementBlock(Fragment, null, renderList(groups.value, (group) => {
                                return openBlock(), createElementBlock("option", {
                                  key: group.id,
                                  value: group.id
                                }, toDisplayString(group.title), 9, _hoisted_16);
                              }), 128))
                            ], 512), [
                              [vModelSelect, role.value.user_group_id]
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_17, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      _hoisted_18,
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          withDirectives(createBaseVNode("textarea", {
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => role.value.description = $event),
                            class: "textarea is-primary-focus",
                            rows: "2",
                            placeholder: "more info..."
                          }, null, 512), [
                            [vModelText, role.value.description]
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
            createBaseVNode("div", _hoisted_19, [
              _hoisted_20,
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("div", _hoisted_22, [
                  createVNode(_component_VField, null, {
                    default: withCtx(() => [
                      createVNode(_component_VControl, null, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(permissions), (perm) => {
                            return openBlock(), createBlock(_component_VCheckbox, {
                              key: perm.name,
                              modelValue: role.value.permissions,
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => role.value.permissions = $event),
                              color: "info",
                              value: perm.id,
                              label: perm.name
                            }, null, 8, ["modelValue", "value", "label"]);
                          }), 128))
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
      ], 32);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = defineComponent({
  __name: "add",
  setup(__props) {
    ref("world");
    pageTitle.value = "Create Role";
    return (_ctx, _cache) => {
      const _component_CreateRole = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_CreateRole)
      ]);
    };
  }
});
export { _sfc_main as default };
