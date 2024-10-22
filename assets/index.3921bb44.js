import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$2 } from "./VField.897209dd.js";
import { e as useApi, j as _sfc_main$3, d as _sfc_main$5, h as _sfc_main$6, b as useNotyf, _ as _export_sfc } from "./index.256f70c3.js";
import { _ as _sfc_main$4 } from "./VCheckbox.d817b735.js";
import { d as defineComponent, F as useRoute, h as computed, r as ref, a7 as watch, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, s as createVNode, t as withCtx, v as unref, f as createBaseVNode, ah as withDirectives, am as vModelText, y as createCommentVNode, x as createBlock, K as Fragment, J as renderList, z as createTextVNode } from "./vendor.11f8b2c5.js";
import { u as useAuth } from "./useAuth.75718ebb.js";
import { u as useJuris } from "./useJuris.9d0e82c7.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import "./FileSaver.min.c8bfead3.js";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h3", { class: "title is-5 mb-2" }, "Personal Information", -1);
const _hoisted_2 = {
  key: 0,
  class: "columns is-multiline"
};
const _hoisted_3 = { class: "column is-8" };
const _hoisted_4 = { class: "columns is-multiline" };
const _hoisted_5 = { class: "column is-6" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("label", null, "First Name", -1);
const _hoisted_7 = { class: "column is-6" };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("label", null, "Last Name", -1);
const _hoisted_9 = { class: "column is-8" };
const _hoisted_10 = { class: "columns is-multiline" };
const _hoisted_11 = { class: "column is-12 is-6-desktop" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("label", null, "Email Address", -1);
const _hoisted_13 = { class: "column is-6" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("label", null, "Phone Number", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("h3", { class: "title is-5 mb-2" }, "Roles & Permissions", -1);
const _hoisted_16 = { class: "columns is-multiline" };
const _hoisted_17 = { class: "column is-3" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("label", null, "Role Group", -1);
const _hoisted_19 = { key: 1 };
const _hoisted_20 = { class: "columns is-multiline mt-4" };
const _hoisted_21 = { class: "column is-12" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("label", null, "Jurisdictions", -1);
const _hoisted_23 = { key: 1 };
const _hoisted_24 = { class: "columns is-multiline mt-6" };
const _hoisted_25 = { class: "column is-12" };
const _sfc_main$1 = defineComponent({
  __name: "UserDetails",
  setup(__props) {
    const route = useRoute();
    useApi();
    const {
      permissions,
      roles,
      fetchRoles,
      userGroups,
      userData,
      fetchUserById,
      updateUser
    } = useAuth();
    const notf = useNotyf();
    const { fetchJurisdictions, jurisdictions } = useJuris();
    pageTitle.value = "User Profile";
    const groups = computed(() => userGroups.value.filter((g) => g.has_roles));
    const userRoles = ref([]);
    const userId = computed(() => {
      return parseInt(route.params.id);
    });
    const jurisdiction_id = ref("");
    const cancel = () => {
      fetchUserById(userId.value);
    };
    const submit = async () => {
      try {
        if (!userData.value) {
          notf.warning("UserData is required!");
          return;
        }
        isLoading.value = true;
        loadingText.value = "Updating User...";
        const { first_name, last_name, phone, email, user_group_id } = userData.value.user;
        const { data } = await updateUser(userId.value, {
          first_name,
          last_name,
          phone,
          email,
          user_group_id,
          roles: userRoles.value,
          jurisdiction_id: jurisdiction_id.value
        });
        isLoading.value = false;
        notf.success("User Updated Successful");
      } catch ({ response }) {
        isLoading.value = false;
        notf.error("User is not updated!");
      }
    };
    const loadRoles = () => {
      if (userData.value) {
        const { roles: roles2, user } = userData.value;
        userRoles.value = Object.values(roles2).map((item) => item.id);
        isLoading.value = true;
        loadingText.value = "Fetching Roles...";
        fetchRoles(user.user_group_id).finally(() => isLoading.value = false);
      }
    };
    const resetRoles = (group_id) => {
      if (group_id) {
        userRoles.value = [];
        isLoading.value = true;
        loadingText.value = "Fetching Roles...";
        fetchRoles(group_id).finally(() => isLoading.value = false);
      }
    };
    watch(() => userData.value, () => {
      if (userData.value) {
        const { user } = userData.value;
        fetchJurisdictions(user.user_group_id).finally(() => jurisdiction_id.value = "");
      }
    }, { immediate: true, deep: true });
    onMounted(() => {
      isLoading.value = true;
      loadingText.value = "Fetching User Data...";
      fetchUserById(userId.value).then(() => {
        loadRoles();
      }).finally(() => isLoading.value = false);
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$2;
      const _component_VCard = _sfc_main$3;
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_VCheckbox = _sfc_main$4;
      const _component_VButton = _sfc_main$5;
      const _component_VButtons = _sfc_main$6;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_VCard, {
          radius: "smooth",
          class: "mb-5"
        }, {
          default: withCtx(() => [
            _hoisted_1$1,
            unref(userData) && unref(userData).user ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_6,
                        createVNode(_component_VControl, { icon: "feather:user" }, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(userData).user.first_name = $event),
                              type: "text",
                              class: "input",
                              placeholder: "",
                              autocomplete: "given-name"
                            }, null, 512), [
                              [vModelText, unref(userData).user.first_name]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_8,
                        createVNode(_component_VControl, { icon: "feather:user" }, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(userData).user.last_name = $event),
                              type: "text",
                              class: "input",
                              placeholder: "",
                              autocomplete: "family-name"
                            }, null, 512), [
                              [vModelText, unref(userData).user.last_name]
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
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_12,
                        createVNode(_component_VControl, { icon: "feather:mail" }, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(userData).user.email = $event),
                              type: "email",
                              class: "input",
                              placeholder: "",
                              autocomplete: "email",
                              inputmode: "email"
                            }, null, 512), [
                              [vModelText, unref(userData).user.email]
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
                        _hoisted_14,
                        createVNode(_component_VControl, { icon: "feather:phone" }, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(userData).user.phone = $event),
                              type: "tel",
                              class: "input",
                              placeholder: "",
                              autocomplete: "tel",
                              inputmode: "tel"
                            }, null, 512), [
                              [vModelText, unref(userData).user.phone]
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
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_VCard, { radius: "smooth" }, {
          default: withCtx(() => [
            _hoisted_15,
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    _hoisted_18,
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        unref(userData) && unref(userData).user ? (openBlock(), createBlock(_component_el_select, {
                          key: 0,
                          modelValue: unref(userData).user.user_group_id,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(userData).user.user_group_id = $event),
                          onChange: resetRoles
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(groups.value, (group) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key: group.id,
                                value: group.id,
                                label: group.title
                              }, null, 8, ["value", "label"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            unref(userData) && unref(roles).length > 0 ? (openBlock(), createBlock(_component_VField, { key: 0 }, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(roles), (role) => {
                      return openBlock(), createBlock(_component_VCheckbox, {
                        key: role.id,
                        modelValue: userRoles.value,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => userRoles.value = $event),
                        color: "info",
                        value: role.id,
                        label: role.name
                      }, null, 8, ["modelValue", "value", "label"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : (openBlock(), createElementBlock("p", _hoisted_19, "No Roles.")),
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createVNode(_component_VField, null, {
                  default: withCtx(() => [
                    _hoisted_22,
                    createVNode(_component_VControl, null, {
                      default: withCtx(() => [
                        unref(jurisdictions).length > 0 ? (openBlock(), createBlock(_component_el_select, {
                          key: 0,
                          modelValue: jurisdiction_id.value,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => jurisdiction_id.value = $event),
                          filterable: "",
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jurisdictions), (item) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key: item.id,
                                label: item.title,
                                value: item.id
                              }, null, 8, ["label", "value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])) : (openBlock(), createElementBlock("p", _hoisted_23, "No Jurisdictions, please select a user group."))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
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
                        createTextVNode("Update User")
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
const _sfc_main = {};
const _hoisted_1 = { class: "page-content-inner" };
function _sfc_render(_ctx, _cache) {
  const _component_UserDetails = _sfc_main$1;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_UserDetails)
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
