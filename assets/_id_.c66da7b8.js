import { j as _sfc_main$1, d as _sfc_main$4, h as _sfc_main$5, b as useNotyf } from "./index.4ea6d167.js";
import { _ as __unplugin_components_2 } from "./VControl.a1e5c3aa.js";
import { _ as _sfc_main$2 } from "./VField.897209dd.js";
import { _ as _sfc_main$3 } from "./VCheckbox.d817b735.js";
import { d as defineComponent, F as useRoute, h as computed, r as ref, a3 as reactive, a7 as watch, I as onMounted, o as openBlock, b as createElementBlock, x as createBlock, t as withCtx, f as createBaseVNode, A as toDisplayString, y as createCommentVNode, s as createVNode, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, ap as vModelSelect, v as unref, z as createTextVNode } from "./vendor.11f8b2c5.js";
import { u as useAuth } from "./useAuth.f504d59a.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = { class: "title is-5 mb-2" };
const _hoisted_3 = { class: "columns is-multiline" };
const _hoisted_4 = { class: "column is-6" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("label", null, "Role Name", -1);
const _hoisted_6 = { class: "column is-6" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("label", null, "Role Group", -1);
const _hoisted_8 = { class: "select" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("option", {
  disabled: "",
  value: ""
}, "Select a User Group", -1);
const _hoisted_10 = ["value"];
const _hoisted_11 = { class: "column is-12" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("label", null, "Role Description", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h3", { class: "title is-5 mb-2" }, "Permissions", -1);
const _hoisted_14 = { class: "columns is-multiline mt-6" };
const _hoisted_15 = { class: "column is-12" };
const _sfc_main = defineComponent({
  __name: "[id]",
  setup(__props) {
    const route = useRoute();
    const { fetchRole, role, permissions, updateRole, userGroups } = useAuth();
    const notf = useNotyf();
    pageTitle.value = "Role Details";
    const roleId = computed(() => route.params.id);
    const roleDetails = computed(() => {
      var _a;
      return ((_a = role.value) == null ? void 0 : _a.role) || null;
    });
    const permissionRoles = ref([]);
    const groups = computed(() => userGroups.value.filter((g) => g.has_roles));
    const roleItem = reactive({
      name: "",
      user_group_id: "",
      description: ""
    });
    watch(() => role.value, () => {
      if (role.value) {
        permissionRoles.value = role.value.permissions.map((r) => r.id);
        if (roleDetails.value) {
          roleItem.name = roleDetails.value.name;
          roleItem.user_group_id = roleDetails.value.user_group_id;
          roleItem.description = roleDetails.value.description;
        }
      }
    });
    const cancel = () => {
      fetchRole(roleId.value);
    };
    const submit = async () => {
      isLoading.value = true;
      loadingText.value = "Updating Role...";
      try {
        const { data } = await updateRole(roleId.value, {
          name: roleItem.name,
          user_group_id: roleItem.user_group_id,
          description: roleItem.description,
          permissions: [...permissionRoles.value]
        });
        isLoading.value = false;
        fetchRole(roleId.value);
        notf.success("Role Updated");
      } catch ({ response }) {
        isLoading.value = false;
        notf.error("Error Occurred");
      }
    };
    onMounted(() => {
      fetchRole(roleId.value);
    });
    return (_ctx, _cache) => {
      const _component_VCard = _sfc_main$1;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$2;
      const _component_VCheckbox = _sfc_main$3;
      const _component_VButton = _sfc_main$4;
      const _component_VButtons = _sfc_main$5;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        roleDetails.value ? (openBlock(), createBlock(_component_VCard, {
          key: 0,
          radius: "smooth",
          class: "mb-5"
        }, {
          default: withCtx(() => [
            createBaseVNode("h3", _hoisted_2, toDisplayString(roleDetails.value.name) + " | " + toDisplayString(roleDetails.value.user_group_id), 1),
            createBaseVNode("p", null, toDisplayString(roleDetails.value.description), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        roleDetails.value ? (openBlock(), createBlock(_component_VCard, {
          key: 1,
          radius: "smooth",
          class: "mb-5"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    _hoisted_5,
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => roleItem.name = $event),
                          type: "text",
                          class: "input",
                          placeholder: "Role Name"
                        }, null, 512), [
                          [vModelText, roleItem.name]
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    _hoisted_7,
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_8, [
                          withDirectives(createBaseVNode("select", {
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => roleItem.user_group_id = $event),
                            placeholder: "Select a User Group"
                          }, [
                            _hoisted_9,
                            (openBlock(true), createElementBlock(Fragment, null, renderList(groups.value, (group) => {
                              return openBlock(), createElementBlock("option", {
                                key: group.id,
                                value: group.id
                              }, toDisplayString(group.title), 9, _hoisted_10);
                            }), 128))
                          ], 512), [
                            [vModelSelect, roleItem.user_group_id]
                          ])
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
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => roleItem.description = $event),
                          class: "textarea is-primary-focus",
                          rows: "2",
                          placeholder: "more info..."
                        }, null, 512), [
                          [vModelText, roleItem.description]
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
          _: 1
        })) : createCommentVNode("", true),
        createVNode(_component_VCard, { radius: "smooth" }, {
          default: withCtx(() => [
            _hoisted_13,
            unref(permissions).length > 0 && unref(role) ? (openBlock(), createBlock(_component_VField, { key: 0 }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(permissions), (perm) => {
                      return openBlock(), createBlock(_component_VCheckbox, {
                        key: perm.id,
                        modelValue: permissionRoles.value,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => permissionRoles.value = $event),
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
            })) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                createVNode(_component_VButtons, null, {
                  default: withCtx(() => [
                    createVNode(_component_VButton, { onClick: cancel }, {
                      default: withCtx(() => [
                        createTextVNode("Reset")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VButton, {
                      color: "primary",
                      onClick: submit
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Update")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
export { _sfc_main as default };
