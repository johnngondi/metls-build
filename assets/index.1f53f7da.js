import { _ as __unplugin_components_2 } from "./VControl.a1e5c3aa.js";
import { _ as _sfc_main$3 } from "./VField.897209dd.js";
import { e as useApi, b as useNotyf, d as _sfc_main$4, h as _sfc_main$5 } from "./index.4ea6d167.js";
import { _ as _sfc_main$6 } from "./VPlaceholderPage.59076d4c.js";
import { _ as __unplugin_components_0 } from "./VDropdown.dd19268e.js";
import { F as FileSaver_min } from "./FileSaver.min.c8bfead3.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
import { r as ref, I as onMounted, d as defineComponent, m as resolveComponent, o as openBlock, x as createBlock, t as withCtx, s as createVNode, f as createBaseVNode, A as toDisplayString, v as unref, a as useRouter, F as useRoute, a3 as reactive, h as computed, a7 as watch, b as createElementBlock, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, z as createTextVNode, n as normalizeClass, y as createCommentVNode, T as TransitionGroup } from "./vendor.11f8b2c5.js";
import { u as useAuth } from "./useAuth.f504d59a.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import "./VIcon.580f0211.js";
function useUser() {
  const api = useApi();
  const resourceUrl = "users";
  const notf = useNotyf();
  const users = ref({
    data: [],
    current_page: 0,
    total: 0,
    per_page: 0
  });
  const fetchUsers = async (page = 1, group = "ministry") => {
    try {
      const { data } = await api.get(`${resourceUrl}?page=${page}&group=${group}`);
      users.value = data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchUsersByRole = async (role_id) => {
    try {
      const { data } = await api.get(`users-by-role?role=${role_id}`);
      users.value = data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const dropUser = async (user_id) => {
    try {
      const { data } = await api.delete(`${resourceUrl}/${user_id}`);
      notf.success("User Deleted");
    } catch (error) {
      notf.error("User not Deleted");
    }
  };
  const exportUsers = async (params) => {
    try {
      isLoading.value = true;
      loadingText.value = "Exporting...";
      const { data } = await api.get(`users-to-excel${params}`, {
        responseType: "blob"
      }).finally(() => {
        isLoading.value = false;
      });
      notf.success("Export Success, Downloading Users Document");
      const today = new Date();
      const _date = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
      const file_name = `${_date}-users.csv`;
      FileSaver_min.exports.saveAs(data, file_name);
    } catch (error) {
      isLoading.value = false;
      notf.error("Export Error, Try again!");
    }
  };
  onMounted(() => {
    fetchUsers();
  });
  return {
    userPage: users,
    fetchUsers,
    fetchUsersByRole,
    exportUsers,
    dropUser
  };
}
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-user-alt"
  })
], -1);
const _hoisted_2$1 = { class: "meta" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("span", null, "Profile", -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_5$1 = {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
};
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-trash"
  })
], -1);
const _hoisted_7$1 = { class: "meta" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("span", null, "Delete", -1);
const _sfc_main$2 = defineComponent({
  __name: "UserListDropdown",
  props: {
    user: {}
  },
  setup(__props) {
    const { dropUser } = useUser();
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_el_popconfirm = resolveComponent("el-popconfirm");
      const _component_VDropdown = __unplugin_components_0;
      return openBlock(), createBlock(_component_VDropdown, {
        icon: "feather:more-vertical",
        spaced: "",
        right: ""
      }, {
        content: withCtx(() => [
          createVNode(_component_RouterLink, {
            role: "menuitem",
            to: { name: "user-id", params: { id: _ctx.user.id } },
            class: "dropdown-item is-media"
          }, {
            default: withCtx(() => [
              _hoisted_1$2,
              createBaseVNode("div", _hoisted_2$1, [
                _hoisted_3$1,
                createBaseVNode("span", null, toDisplayString(_ctx.user.first_name) + " profile", 1)
              ])
            ]),
            _: 1
          }, 8, ["to"]),
          _hoisted_4$1,
          createVNode(_component_el_popconfirm, {
            class: "dropdown-item",
            title: "Are you sure to delete this User?",
            onConfirm: _cache[0] || (_cache[0] = ($event) => unref(dropUser)(_ctx.user.id))
          }, {
            reference: withCtx(() => [
              createBaseVNode("a", _hoisted_5$1, [
                _hoisted_6$1,
                createBaseVNode("div", _hoisted_7$1, [
                  _hoisted_8$1,
                  createBaseVNode("span", null, toDisplayString(_ctx.user.name), 1)
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var ListUsers_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "list-flex-toolbar flex-list-v1" };
const _hoisted_2 = { class: "is-flex" };
const _hoisted_3 = { class: "page-content-inner" };
const _hoisted_4 = { class: "flex-list-wrapper flex-list-v1" };
const _hoisted_5 = { class: "flex-table" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("span", { class: "is-grow" }, "User", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", null, "Email Address", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("span", null, "Jurisdiction", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", null, "Status", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", { class: "cell-end" }, null, -1);
const _hoisted_11 = [
  _hoisted_6,
  _hoisted_7,
  _hoisted_8,
  _hoisted_9,
  _hoisted_10
];
const _hoisted_12 = { class: "flex-list-inner" };
const _hoisted_13 = { class: "flex-table-cell is-media is-grow" };
const _hoisted_14 = { class: "item-name dark-inverted" };
const _hoisted_15 = { class: "item-meta" };
const _hoisted_16 = {
  class: "flex-table-cell",
  "data-th": "Email Address"
};
const _hoisted_17 = { class: "light-text" };
const _hoisted_18 = {
  class: "flex-table-cell",
  "data-th": "Country"
};
const _hoisted_19 = { class: "light-text" };
const _hoisted_20 = {
  class: "flex-table-cell",
  "data-th": "Status"
};
const _hoisted_21 = {
  key: 0,
  class: "tag is-success is-rounded"
};
const _hoisted_22 = {
  key: 1,
  class: "tag is-rounded"
};
const _hoisted_23 = {
  class: "flex-table-cell cell-end",
  "data-th": "actions"
};
const _hoisted_24 = { class: "columns" };
const _hoisted_25 = { class: "column is-12 is-center" };
const _sfc_main$1 = defineComponent({
  __name: "ListUsers",
  setup(__props) {
    useRouter();
    const route = useRoute();
    const { userPage, fetchUsers, fetchUsersByRole, exportUsers } = useUser();
    const { userGroups, roles, fetchRoles } = useAuth();
    const notf = useNotyf();
    const filters = reactive({
      search: "",
      group: "ministry",
      role: void 0
    });
    const groups = computed(() => userGroups.value.filter((g) => g.has_roles));
    const current_page = computed(() => {
      var _a, _b;
      if ((_a = route.query) == null ? void 0 : _a.page) {
        return (_b = route.query) == null ? void 0 : _b.page;
      }
      return userPage.value.current_page || 1;
    });
    const total = computed(() => userPage.value.total);
    const per_page = computed(() => userPage.value.per_page);
    const loadData = (page) => {
      isLoading.value = true;
      loadingText.value = "Loading Users";
      fetchUsers(page, filters.group).finally(() => isLoading.value = false);
    };
    const filterBySearch = (data) => {
      const { search } = filters;
      return data.filter((item) => {
        return item.first_name.match(new RegExp(search, "i")) || item.last_name.match(new RegExp(search, "i")) || item.email.match(new RegExp(search, "i"));
      });
    };
    const filteredData = computed(() => {
      return filterBySearch(userPage.value.data);
    });
    watch(() => filters.group, () => {
      if (filters.group) {
        filters.role = void 0;
        isLoading.value = true;
        loadingText.value = "Loading Roles";
        fetchUsers(current_page.value, filters.group);
        fetchRoles(filters.group).finally(() => isLoading.value = false);
      }
    }, { immediate: true });
    watch(() => filters.role, () => {
      if (filters.role) {
        isLoading.value = true;
        loadingText.value = "Loading Users";
        fetchUsersByRole(filters.role).finally(() => isLoading.value = false);
      }
    }, { immediate: true });
    const initExport = () => {
      if (filters.role) {
        exportUsers(`?role=${filters.role}`);
      } else {
        notf.warning("Please provide role filter!");
      }
    };
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_VButton = _sfc_main$4;
      const _component_VButtons = _sfc_main$5;
      const _component_VPlaceholderPage = _sfc_main$6;
      const _component_UserListDropdown = _sfc_main$2;
      const _component_el_pagination = resolveComponent("el-pagination");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_VField, null, {
              default: withCtx(() => [
                createVNode(_component_VControl, { icon: "feather:search" }, {
                  default: withCtx(() => [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.search = $event),
                      class: "input custom-text-filter",
                      placeholder: "Search..."
                    }, null, 512), [
                      [vModelText, filters.search]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VField, null, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_el_select, {
                      modelValue: filters.group,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filters.group = $event),
                      size: "large",
                      clearable: "",
                      filterable: "",
                      placeholder: "User Groups"
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
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_VField, null, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createVNode(_component_el_select, {
                      modelValue: filters.role,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filters.role = $event),
                      size: "large",
                      clearable: "",
                      filterable: "",
                      placeholder: "User Roles"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(roles), (role) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: role.id,
                            value: role.id,
                            label: role.name
                          }, null, 8, ["value", "label"]);
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
          createVNode(_component_VButtons, null, {
            default: withCtx(() => [
              createVNode(_component_VButton, {
                to: { name: "user-add" },
                color: "primary",
                icon: "fas fa-plus",
                elevated: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" Add User ")
                ]),
                _: 1
              }),
              createVNode(_component_VButton, {
                onClick: _cache[3] || (_cache[3] = ($event) => initExport())
              }, {
                default: withCtx(() => [
                  createTextVNode("Export")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([filteredData.value.length !== 0 && "is-hidden"]),
              title: "We couldn't find any matching results.",
              subtitle: "Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",
              larger: ""
            }, null, 8, ["class"]),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", {
                class: normalizeClass(["flex-table-header", [filteredData.value < 1 && "is-hidden"]])
              }, _hoisted_11, 2),
              createBaseVNode("div", _hoisted_12, [
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
                        createBaseVNode("div", _hoisted_13, [
                          createBaseVNode("div", null, [
                            createBaseVNode("span", _hoisted_14, toDisplayString(item.first_name + " " + item.last_name), 1),
                            createBaseVNode("span", _hoisted_15, [
                              createBaseVNode("span", null, toDisplayString(item.user_group_id), 1)
                            ])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_16, [
                          createBaseVNode("span", _hoisted_17, toDisplayString(item.email), 1)
                        ]),
                        createBaseVNode("div", _hoisted_18, [
                          createBaseVNode("span", _hoisted_19, toDisplayString(item.jurisdiction.title || "N/A"), 1)
                        ]),
                        createBaseVNode("div", _hoisted_20, [
                          item.status ? (openBlock(), createElementBlock("span", _hoisted_21, toDisplayString("online"))) : createCommentVNode("", true),
                          !item.status ? (openBlock(), createElementBlock("span", _hoisted_22, toDisplayString("offline"))) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("div", _hoisted_23, [
                          createVNode(_component_UserListDropdown, { user: item }, null, 8, ["user"])
                        ])
                      ]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                createVNode(_component_el_pagination, {
                  "current-page": current_page.value,
                  background: "",
                  layout: "prev, pager, next",
                  total: total.value,
                  "page-size": per_page.value,
                  "hide-on-single-page": "",
                  onCurrentChange: loadData
                }, null, 8, ["current-page", "total", "page-size"])
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
  __name: "index",
  setup(__props) {
    pageTitle.value = "Users";
    return (_ctx, _cache) => {
      const _component_ListUsers = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ListUsers)
      ]);
    };
  }
});
export { _sfc_main as default };
