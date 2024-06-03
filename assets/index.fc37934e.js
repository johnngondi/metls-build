import { _ as __unplugin_components_2 } from "./VControl.a1e5c3aa.js";
import { _ as _sfc_main$2 } from "./VField.897209dd.js";
import { d as _sfc_main$3, _ as _export_sfc } from "./index.4ea6d167.js";
import { _ as _sfc_main$4 } from "./VPlaceholderPage.59076d4c.js";
import { _ as _sfc_main$5 } from "./VTag.4c37a695.js";
import { _ as _imports_0, a as _imports_1, b as _sfc_main$6 } from "./search-1-dark.f34e575e.js";
import { d as defineComponent, a as useRouter, r as ref, h as computed, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, s as createVNode, t as withCtx, f as createBaseVNode, z as createTextVNode, ah as withDirectives, am as vModelText, A as toDisplayString, n as normalizeClass, K as Fragment, J as renderList, v as unref, an as arrowDown, T as TransitionGroup, x as createBlock, y as createCommentVNode } from "./vendor.11f8b2c5.js";
import { u as useTemplate } from "./useTemplate.618bfea8.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
var TemplateList_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "Ready to delete this template?")
], -1);
const _hoisted_2 = { class: "dialog-footer" };
const _hoisted_3 = { class: "list-view-toolbar" };
const _hoisted_4 = { class: "list-info" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { class: "buttons" };
const _hoisted_8 = { class: "page-content-inner" };
const _hoisted_9 = { class: "list-view list-view-v1" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_12 = { class: "list-view-inner" };
const _hoisted_13 = { class: "list-view-item-inner" };
const _hoisted_14 = { class: "meta-left" };
const _hoisted_15 = { class: "meta-right" };
const _hoisted_16 = { class: "tags" };
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "network" }, null, -1);
const _hoisted_18 = { class: "buttons" };
const _hoisted_19 = { class: "el-dropdown-link" };
const _sfc_main$1 = defineComponent({
  __name: "TemplateList",
  setup(__props) {
    const { templates, fetchTemplateList, dropTemplate } = useTemplate();
    const router = useRouter();
    const filters = ref("");
    const selectedTemplate = ref(null);
    const deleteModal = ref(false);
    const filteredData = computed(() => {
      if (filters.value == "") {
        return templates.value;
      }
      return templates.value;
    });
    const drop = async () => {
      deleteModal.value = false;
      if (selectedTemplate.value) {
        isLoading.value = true;
        dropTemplate(selectedTemplate.value.id).then(() => {
          selectedTemplate.value = void 0;
          fetchTemplateList();
        }).finally(() => isLoading.value = false);
      }
    };
    onMounted(() => {
      fetchTemplateList();
    });
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dialog = resolveComponent("el-dialog");
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_VTag = _sfc_main$5;
      const _component_el_icon = resolveComponent("el-icon");
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_VFlexPagination = _sfc_main$6;
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_dialog, {
          modelValue: deleteModal.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => deleteModal.value = $event),
          title: "Delete Template",
          width: "300px",
          "destroy-on-close": ""
        }, {
          footer: withCtx(() => [
            createBaseVNode("span", _hoisted_2, [
              createVNode(_component_el_button, {
                onClick: _cache[0] || (_cache[0] = ($event) => {
                  deleteModal.value = false;
                  selectedTemplate.value = null;
                })
              }, {
                default: withCtx(() => [
                  createTextVNode("Cancel")
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                type: "danger",
                onClick: drop
              }, {
                default: withCtx(() => [
                  createTextVNode("Confirm")
                ]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            _hoisted_1$1
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_component_VField, null, {
            default: withCtx(() => [
              createVNode(_component_VControl, { icon: "feather:search" }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filters.value = $event),
                    class: "input custom-text-filter",
                    placeholder: "Search..."
                  }, null, 512), [
                    [vModelText, filters.value]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_4, [
            filteredData.value.length === 1 ? (openBlock(), createElementBlock("span", _hoisted_5, "1 record found")) : (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(filteredData.value.length) + " records found", 1))
          ]),
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_VButton, {
              to: { name: "templates-new" },
              color: "primary",
              icon: "fas fa-plus",
              elevated: ""
            }, {
              default: withCtx(() => [
                createTextVNode(" Add Template ")
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([filteredData.value.length !== 0 && "is-hidden"]),
              title: "We couldn't find any matching results.",
              subtitle: "Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_10,
                _hoisted_11
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", _hoisted_12, [
              createVNode(TransitionGroup, {
                name: "list-complete",
                tag: "div"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(filteredData.value, (item, key) => {
                    return openBlock(), createElementBlock("div", {
                      key,
                      class: "list-view-item"
                    }, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("div", _hoisted_14, [
                          createBaseVNode("h3", null, toDisplayString(item.name), 1),
                          createBaseVNode("span", null, [
                            createBaseVNode("span", null, toDisplayString(item.description), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_15, [
                          createBaseVNode("div", _hoisted_16, [
                            createVNode(_component_VTag, {
                              label: item.status,
                              rounded: "",
                              elevated: "",
                              color: "primary"
                            }, null, 8, ["label"]),
                            createVNode(_component_VTag, {
                              label: item.type,
                              rounded: "",
                              elevated: ""
                            }, null, 8, ["label"])
                          ]),
                          _hoisted_17,
                          createBaseVNode("div", _hoisted_18, [
                            createVNode(_component_el_dropdown, { size: "large" }, {
                              dropdown: withCtx(() => [
                                createVNode(_component_el_dropdown_menu, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_dropdown_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_el_button, {
                                          type: "text",
                                          onClick: ($event) => unref(router).push({ name: "templates-id", params: { id: item.id } })
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Edit Template")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_el_dropdown_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_el_button, {
                                          type: "danger",
                                          onClick: ($event) => {
                                            deleteModal.value = true;
                                            selectedTemplate.value = item;
                                          },
                                          plain: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Delete")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              default: withCtx(() => [
                                createBaseVNode("span", _hoisted_19, [
                                  createVNode(_component_el_icon, { class: "el-icon--right" }, {
                                    default: withCtx(() => [
                                      createVNode(unref(arrowDown))
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ])
                        ])
                      ])
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ])
          ]),
          filteredData.value.length > 5 ? (openBlock(), createBlock(_component_VFlexPagination, {
            key: 0,
            "item-per-page": 10,
            "total-items": 873,
            "current-page": 42,
            "max-links-displayed": 5
          })) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const _sfc_main = {};
const _hoisted_1 = { class: "page-content-inner" };
function _sfc_render(_ctx, _cache) {
  const _component_TemplateList = _sfc_main$1;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_TemplateList)
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
