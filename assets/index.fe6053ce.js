import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$2 } from "./VPlaceholderPage.59076d4c.js";
import { d as defineComponent, F as useRoute, h as computed, r as ref, I as onMounted, o as openBlock, b as createElementBlock, f as createBaseVNode, s as createVNode, t as withCtx, ah as withDirectives, am as vModelText, n as normalizeClass, K as Fragment, J as renderList, A as toDisplayString, T as TransitionGroup } from "./vendor.11f8b2c5.js";
import { _ as _imports_0, a as _imports_1 } from "./search-6-dark.5c220eb7.js";
import { u as useAuth } from "./useAuth.75718ebb.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import "./index.256f70c3.js";
var ListGroupRoles_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "tile-grid-toolbar" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, null, -1);
const _hoisted_3 = { class: "tile-grid tile-grid-v1" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_6 = { class: "tile-grid-item" };
const _hoisted_7 = { class: "tile-grid-item-inner" };
const _hoisted_8 = { class: "meta" };
const _hoisted_9 = { class: "dark-inverted" };
const _hoisted_10 = { class: "mt-2" };
const _sfc_main$1 = defineComponent({
  __name: "ListGroupRoles",
  setup(__props) {
    const route = useRoute();
    const { roles, fetchRoles } = useAuth();
    const roleGroup = computed(() => route.params.group);
    const filters = ref("");
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
    onMounted(() => {
      fetchRoles(roleGroup.value);
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_VControl = __unplugin_components_2;
      const _component_VPlaceholderPage = _sfc_main$2;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_component_VControl, { icon: "feather:search" }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("input", {
                class: "input custom-text-filter",
                placeholder: "Search...",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value = $event)
              }, null, 512), [
                [vModelText, filters.value]
              ])
            ]),
            _: 1
          }),
          _hoisted_2
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([((_a = filteredData.value) == null ? void 0 : _a.length) !== 0 && "is-hidden"]),
            title: "We couldn't find any matching results.",
            subtitle: "Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",
            larger: ""
          }, {
            image: withCtx(() => [
              _hoisted_4,
              _hoisted_5
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
                  style: { "height": "100%" }
                }, [
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("div", _hoisted_7, [
                      createBaseVNode("div", _hoisted_8, [
                        createBaseVNode("span", _hoisted_9, toDisplayString(item.name), 1),
                        createBaseVNode("span", _hoisted_10, toDisplayString(item.description), 1)
                      ])
                    ])
                  ])
                ]);
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
    const route = useRoute();
    ref(route.params.group);
    pageTitle.value = `${route.params.group} roles`;
    return (_ctx, _cache) => {
      const _component_ListGroupRoles = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ListGroupRoles)
      ]);
    };
  }
});
export { _sfc_main as default };
