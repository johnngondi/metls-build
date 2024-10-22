import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$1 } from "./VPlaceholderPage.59076d4c.js";
import { d as _sfc_main$2 } from "./index.256f70c3.js";
import { d as defineComponent, U as useI18n, r as ref, h as computed, I as onMounted, o as openBlock, b as createElementBlock, f as createBaseVNode, s as createVNode, t as withCtx, ah as withDirectives, am as vModelText, n as normalizeClass, K as Fragment, J as renderList, A as toDisplayString, y as createCommentVNode, v as unref, z as createTextVNode, T as TransitionGroup } from "./vendor.11f8b2c5.js";
import { _ as _imports_0, a as _imports_1 } from "./search-4-dark.12f0bf0d.js";
import { u as useApply } from "./useApply.7c599896.js";
var myApplications_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "card-grid-toolbar" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "buttons" }, null, -1);
const _hoisted_3 = { class: "card-grid card-grid-v1" };
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
const _hoisted_6 = { class: "card-grid-item" };
const _hoisted_7 = { class: "card-grid-item-body" };
const _hoisted_8 = {
  key: 0,
  class: "meta"
};
const _hoisted_9 = { class: "title is-6" };
const _hoisted_10 = { class: "is-block" };
const _hoisted_11 = { class: "card-grid-item-footer pt-0 pb-0" };
const _hoisted_12 = { class: "meta-left mb-4 is-block" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_15 = { class: "card-grid-item-footer" };
const _hoisted_16 = { class: "left" };
const _hoisted_17 = { class: "buttons" };
const _sfc_main = defineComponent({
  __name: "my-applications",
  setup(__props) {
    const { myApplications, fetchMyApplications, workflowStatus } = useApply();
    const { t } = useI18n();
    const filters = ref("");
    const filteredData = computed(() => {
      return myApplications.value ? myApplications.value.data : [];
    });
    onMounted(() => {
      fetchMyApplications();
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VPlaceholderPage = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
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
          _hoisted_2
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_VPlaceholderPage, {
            class: normalizeClass([filteredData.value.length !== 0 && "is-hidden"]),
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
              (openBlock(true), createElementBlock(Fragment, null, renderList(filteredData.value, (item, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "column is-6"
                }, [
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("div", _hoisted_7, [
                      createBaseVNode("div", null, [
                        item.workflow_process ? (openBlock(), createElementBlock("div", _hoisted_8, [
                          createBaseVNode("span", _hoisted_9, toDisplayString(item.workflow_process.name), 1),
                          createBaseVNode("span", _hoisted_10, toDisplayString(item.workflow_process.description), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", _hoisted_12, [
                        createBaseVNode("span", null, [
                          createBaseVNode("span", null, toDisplayString(unref(workflowStatus)(item.status)), 1),
                          _hoisted_13,
                          createBaseVNode("span", null, toDisplayString(item.billable ? "Paid Service" : "Free"), 1),
                          _hoisted_14,
                          createBaseVNode("span", null, toDisplayString(item.has_certificate ? `Issues ${unref(t)("cert.title")}` : `No ${unref(t)("cert.title")}`), 1)
                        ])
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("div", _hoisted_16, [
                        createBaseVNode("div", _hoisted_17, [
                          createVNode(_component_VButton, {
                            to: { name: "home-application-id", params: { id: item.id } },
                            light: "",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("View Application")
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ])
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
export { _sfc_main as default };
