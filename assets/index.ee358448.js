import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$2 } from "./VField.897209dd.js";
import { d as _sfc_main$3 } from "./index.256f70c3.js";
import { _ as _sfc_main$4 } from "./VPlaceholderPage.59076d4c.js";
import { _ as _sfc_main$5 } from "./VTag.4c37a695.js";
import { _ as _imports_0, a as _imports_1, b as _sfc_main$6 } from "./search-1-dark.f34e575e.js";
import { d as defineComponent, a as useRouter, r as ref, h as computed, a7 as watch, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, s as createVNode, t as withCtx, f as createBaseVNode, z as createTextVNode, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, v as unref, A as toDisplayString, ap as vModelSelect, n as normalizeClass, an as arrowDown, T as TransitionGroup, x as createBlock, y as createCommentVNode } from "./vendor.11f8b2c5.js";
import { u as useJuris } from "./useJuris.9d0e82c7.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import "./FileSaver.min.c8bfead3.js";
var ListJuris_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "Ready to delete this Jurisdiction?")
], -1);
const _hoisted_2 = { class: "dialog-footer" };
const _hoisted_3 = { class: "list-view-toolbar" };
const _hoisted_4 = { class: "list-info" };
const _hoisted_5 = { class: "select" };
const _hoisted_6 = ["value"];
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
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "stats" }, null, -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "network" }, null, -1);
const _hoisted_19 = { class: "buttons" };
const _hoisted_20 = { class: "el-dropdown-link" };
const _sfc_main$1 = defineComponent({
  __name: "ListJuris",
  setup(__props) {
    const { jurisdictions, fetchJurisdictions, fetchJurisTypes, jurisdictionTypes, dropJurisdiction, exportJuris } = useJuris();
    const router = useRouter();
    const filters = ref({
      search: "",
      type: "city"
    });
    const deleteModal = ref(false);
    const selectedJuri = ref(null);
    const filteredData = computed(() => {
      if (!filters.value.search) {
        return jurisdictions.value;
      } else {
        return jurisdictions.value.map((juri) => {
          return juri.title.match(new RegExp(filters.value.search, "i")) || juri.description.match(new RegExp(filters.value.search, "i"));
        });
      }
    });
    const drop = async () => {
      deleteModal.value = false;
      if (selectedJuri.value) {
        isLoading.value = true;
        dropJurisdiction(selectedJuri.value.id).then(() => {
          selectedJuri.value = void 0;
          fetchJurisdictions(filters.value.type);
        }).finally(() => isLoading.value = false);
      }
    };
    watch(() => filters.value.type, () => {
      const _type = filters.value.type;
      isLoading.value = true;
      fetchJurisdictions(_type).finally(() => isLoading.value = false);
    }, { deep: true });
    onMounted(() => {
      fetchJurisdictions(filters.value.type);
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
          title: "Delete Jurisdiction",
          width: "300px",
          "destroy-on-close": ""
        }, {
          footer: withCtx(() => [
            createBaseVNode("span", _hoisted_2, [
              createVNode(_component_el_button, {
                onClick: _cache[0] || (_cache[0] = ($event) => {
                  deleteModal.value = false;
                  selectedJuri.value = null;
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
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filters.value.search = $event),
                    class: "input custom-text-filter",
                    placeholder: "Search..."
                  }, null, 512), [
                    [vModelText, filters.value.search]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_VField, null, {
              default: withCtx(() => [
                createVNode(_component_VControl, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_5, [
                      withDirectives(createBaseVNode("select", {
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filters.value.type = $event)
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jurisdictionTypes), (type, i) => {
                          return openBlock(), createElementBlock("option", {
                            key: i,
                            value: type.id
                          }, toDisplayString(type.title), 9, _hoisted_6);
                        }), 128))
                      ], 512), [
                        [vModelSelect, filters.value.type]
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_VButton, {
              to: { name: "jurisdictions-new" },
              color: "primary",
              icon: "fas fa-plus",
              elevated: ""
            }, {
              default: withCtx(() => [
                createTextVNode(" Add Jurisdiction ")
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              onClick: _cache[4] || (_cache[4] = ($event) => unref(exportJuris)(filters.value.type))
            }, {
              default: withCtx(() => [
                createTextVNode("Export")
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
                          createBaseVNode("h3", null, toDisplayString(item.title), 1),
                          createBaseVNode("span", null, [
                            createBaseVNode("span", null, toDisplayString(item.description), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_15, [
                          createBaseVNode("div", _hoisted_16, [
                            createVNode(_component_VTag, {
                              label: item.jurisdiction_type,
                              color: "primary",
                              rounded: "",
                              elevated: ""
                            }, null, 8, ["label"])
                          ]),
                          _hoisted_17,
                          _hoisted_18,
                          createBaseVNode("div", _hoisted_19, [
                            createVNode(_component_el_dropdown, { size: "large" }, {
                              dropdown: withCtx(() => [
                                createVNode(_component_el_dropdown_menu, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_el_dropdown_item, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_el_button, {
                                          type: "text",
                                          onClick: ($event) => unref(router).push({ name: "jurisdictions-id", params: { id: item.id } })
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Edit Jurisdiction")
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
                                            selectedJuri.value = item;
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
                                createBaseVNode("span", _hoisted_20, [
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
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = defineComponent({
  __name: "index",
  setup(__props) {
    pageTitle.value = "Jurisdictions";
    return (_ctx, _cache) => {
      const _component_ListJuris = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ListJuris)
      ]);
    };
  }
});
export { _sfc_main as default };
