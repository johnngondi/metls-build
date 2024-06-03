import { _ as __unplugin_components_2 } from "./VControl.a1e5c3aa.js";
import { d as _sfc_main$2 } from "./index.4ea6d167.js";
import { _ as _sfc_main$3 } from "./VPlaceholderPage.59076d4c.js";
import { d as defineComponent, a as useRouter, r as ref, h as computed, a7 as watch, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, s as createVNode, t as withCtx, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, x as createBlock, n as normalizeClass, A as toDisplayString, T as TransitionGroup } from "./vendor.11f8b2c5.js";
import { _ as _imports_0, a as _imports_1 } from "./search-6-dark.5c220eb7.js";
import { u as useAuth } from "./useAuth.f504d59a.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
var ListRoles_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "tile-grid-toolbar" };
const _hoisted_2 = { class: "buttons" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", null, "Add Role", -1);
const _hoisted_5 = { class: "tile-grid tile-grid-v1" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "tile-grid-item" };
const _hoisted_10 = { class: "tile-grid-item-inner" };
const _hoisted_11 = { class: "meta" };
const _hoisted_12 = { class: "dark-inverted" };
const _hoisted_13 = { class: "mt-2" };
const _sfc_main$1 = defineComponent({
  __name: "ListRoles",
  setup(__props) {
    const { roles, fetchRoles, userGroups } = useAuth();
    const router = useRouter();
    const roleGroup = ref("technician");
    const filters = ref("");
    const groups = computed(() => {
      return userGroups.value.filter((g) => g.has_roles);
    });
    const filteredData = computed(() => {
      var _a;
      if (!filters.value) {
        return roles.value;
      } else {
        return (_a = roles.value) == null ? void 0 : _a.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i"));
        });
      }
    });
    const openRole = (id) => {
      router.push({
        name: "user-role-id",
        params: { id }
      });
    };
    watch(() => roleGroup.value, (current, prev) => {
      if (current !== prev) {
        fetchRoles(roleGroup.value);
      }
    });
    onMounted(() => {
      fetchRoles(roleGroup.value);
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_VControl = __unplugin_components_2;
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_VButton = _sfc_main$2;
      const _component_VPlaceholderPage = _sfc_main$3;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event),
                class: "input custom-text-filter",
                placeholder: "Search..."
              }, null, 512), [
                [vModelText, filters.value]
              ])
            ]),
            _: 1
          }),
          createVNode(_component_VControl, null, {
            default: withCtx(() => [
              createVNode(_component_el_select, {
                modelValue: roleGroup.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => roleGroup.value = $event),
                filterable: ""
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
          }),
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_VButton, {
              to: { name: "user-role-add" },
              color: "primary",
              raised: ""
            }, {
              default: withCtx(() => [
                _hoisted_3,
                _hoisted_4
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([((_a = filteredData.value) == null ? void 0 : _a.length) !== 0 && "is-hidden"]),
            title: "We couldn't find any matching results.",
            subtitle: "Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_6,
              _hoisted_7
            ]),
            _: 1
          }, 8, ["class"]),
          createVNode(TransitionGroup, {
            name: "list",
            tag: "div",
            class: "columns is-multiline"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredData.value, (item, key) => {
                return openBlock(), createElementBlock("div", {
                  key,
                  class: "column is-4",
                  style: { "height": "100%" },
                  onClick: ($event) => openRole(item.id)
                }, [
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", _hoisted_10, [
                      createBaseVNode("div", _hoisted_11, [
                        createBaseVNode("span", _hoisted_12, toDisplayString(item.name), 1),
                        createBaseVNode("span", _hoisted_13, toDisplayString(item.description), 1)
                      ])
                    ])
                  ])
                ], 8, _hoisted_8);
              }), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = defineComponent({
  __name: "index",
  setup(__props) {
    pageTitle.value = "Roles";
    return (_ctx, _cache) => {
      const _component_ListRoles = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ListRoles)
      ]);
    };
  }
});
export { _sfc_main as default };
