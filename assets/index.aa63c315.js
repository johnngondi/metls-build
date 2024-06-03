import { _ as __unplugin_components_2 } from "./VControl.a1e5c3aa.js";
import { _ as _sfc_main$2 } from "./VField.897209dd.js";
import { i as isLargeScreen, f as isMediumScreen, d as _sfc_main$3, b as useNotyf, _ as _export_sfc } from "./index.4ea6d167.js";
import { _ as _sfc_main$4 } from "./VPlaceholderPage.59076d4c.js";
import { _ as _sfc_main$5 } from "./VTag.4c37a695.js";
import { _ as _sfc_main$6 } from "./VLoader.6d10ad6d.js";
import { d as defineComponent, U as useI18n, a3 as reactive, r as ref, a as useRouter, F as useRoute, h as computed, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, s as createVNode, t as withCtx, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, x as createBlock, z as createTextVNode, v as unref, n as normalizeClass, T as TransitionGroup, A as toDisplayString, y as createCommentVNode, an as arrowDown } from "./vendor.11f8b2c5.js";
import { u as useWorkflow } from "./useWorkflow.ff8b08ba.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
import "./FileSaver.min.c8bfead3.js";
var ListWorkflows_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "list-view-toolbar" };
const _hoisted_2 = { class: "tabs-inner mr-2" };
const _hoisted_3 = { class: "actions" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "Ready to delete this workflow?")
], -1);
const _hoisted_5 = { class: "dialog-footer" };
const _hoisted_6 = { class: "page-content-inner" };
const _hoisted_7 = { class: "list-view list-view-v2" };
const _hoisted_8 = { class: "list-view-inner" };
const _hoisted_9 = { class: "list-view-item-inner" };
const _hoisted_10 = { class: "meta-left" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify mr-2",
  "data-icon": "feather:user"
}, null, -1);
const _hoisted_12 = { key: 0 };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_16 = { class: "meta-right" };
const _hoisted_17 = { class: "buttons" };
const _hoisted_18 = { class: "el-dropdown-link" };
const _hoisted_19 = { class: "columns" };
const _hoisted_20 = { class: "column is-12 is-center" };
const _sfc_main$1 = defineComponent({
  __name: "ListWorkflows",
  setup(__props) {
    const { fetchWorkflows, workflows, workflowPage, deleteWorkflow, publishWorkflow, exportWorkflows } = useWorkflow();
    const { t } = useI18n();
    const filters = reactive({
      search: "",
      status: "all"
    });
    const deleteModal = ref(false);
    const selectedWorkflow = ref();
    const notf = useNotyf();
    const router = useRouter();
    const route = useRoute();
    const loading = ref(false);
    const statusOptions = reactive([
      { label: "All", value: "all" },
      { label: "Published", value: "published" },
      { label: "Draft", value: "draft" }
    ]);
    const filterByTitle = (data) => {
      return data.filter((item) => {
        return item.name.match(new RegExp(filters.search, "i")) || item.description.match(new RegExp(filters.search, "i"));
      });
    };
    const filterByStatus = (data) => {
      const { status } = filters;
      return data.filter((item) => status == "all" ? item : status == "published" ? item.status == 1 : item.status == 0);
    };
    const filteredData = computed(() => {
      return filterByStatus(filterByTitle(workflowPage.value.data));
    });
    computed(() => {
      console.log(filters);
      if (!filters.search || filters.status == "all") {
        return workflowPage.value.data;
      } else {
        return workflowPage.value.data.map((item) => {
          return item.name.match(new RegExp(filters.search, "i")) || item.description.match(new RegExp(filters.search, "i"));
        }).filter((item) => {
          console.log(item);
          if (item) {
            if (filters.status == "published") {
              return item.status == 1;
            }
            if (filters.status == "draft") {
              return item.status == 0;
            }
          } else {
            return item;
          }
        });
      }
    });
    const loadData = (page) => {
      loadFlows(page);
    };
    const drop = () => {
      deleteModal.value = false;
      if (selectedWorkflow.value) {
        isLoading.value = true;
        deleteWorkflow(selectedWorkflow.value.id).then(() => {
          selectedWorkflow.value = void 0;
          fetchWorkflows();
        }).finally(() => isLoading.value = false);
      }
    };
    const publish = async (id) => {
      isLoading.value = true;
      try {
        const { data } = await publishWorkflow(id);
        isLoading.value = false;
        const _data = data.data;
        if (_data.code == 0) {
          notf.success("Workflow Published");
          fetchWorkflows();
        }
      } catch (error) {
        isLoading.value = false;
        console.log(error);
      }
    };
    computed(() => !isLargeScreen.value && !isMediumScreen.value);
    const current_page = computed(() => {
      var _a, _b;
      if ((_a = route.query) == null ? void 0 : _a.page) {
        return (_b = route.query) == null ? void 0 : _b.page;
      }
      return workflowPage.value.current_page || 1;
    });
    const total = computed(() => workflowPage.value.total);
    const per_page = computed(() => workflowPage.value.per_page);
    const loadFlows = (page) => {
      loading.value = true;
      fetchWorkflows(page).finally(() => loading.value = false);
    };
    onMounted(() => {
      loadFlows(current_page.value);
    });
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$2;
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_VButton = _sfc_main$3;
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dialog = resolveComponent("el-dialog");
      const _component_VPlaceholderPage = _sfc_main$4;
      const _component_VTag = _sfc_main$5;
      const _component_el_icon = resolveComponent("el-icon");
      const _component_el_dropdown_item = resolveComponent("el-dropdown-item");
      const _component_el_dropdown_menu = resolveComponent("el-dropdown-menu");
      const _component_el_dropdown = resolveComponent("el-dropdown");
      const _component_VLoader = _sfc_main$6;
      const _component_el_pagination = resolveComponent("el-pagination");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
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
          createBaseVNode("div", _hoisted_2, [
            createVNode(_component_el_select, {
              modelValue: filters.status,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filters.status = $event),
              size: "large"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(statusOptions, (option) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: option.value,
                    value: option.value,
                    label: option.label
                  }, null, 8, ["value", "label"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VButton, {
              to: { name: "workflow-new" },
              color: "primary"
            }, {
              default: withCtx(() => [
                createTextVNode("New Workflow")
              ]),
              _: 1
            }),
            createVNode(_component_VButton, {
              class: "ml-1",
              onClick: unref(exportWorkflows)
            }, {
              default: withCtx(() => [
                createTextVNode("Export")
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        createVNode(_component_el_dialog, {
          modelValue: deleteModal.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => deleteModal.value = $event),
          title: "Delete Workflow",
          width: "300px",
          "destroy-on-close": ""
        }, {
          footer: withCtx(() => [
            createBaseVNode("span", _hoisted_5, [
              createVNode(_component_el_button, {
                onClick: _cache[2] || (_cache[2] = ($event) => {
                  deleteModal.value = false;
                  selectedWorkflow.value = null;
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
            _hoisted_4
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_VLoader, {
              active: loading.value,
              translucent: true
            }, {
              default: withCtx(() => [
                createVNode(_component_VPlaceholderPage, {
                  class: normalizeClass([filteredData.value.length !== 0 && "is-hidden"]),
                  title: "We couldn't find any matching results.",
                  subtitle: "Workflow Proccesses Not Found!",
                  larger: ""
                }, null, 8, ["class"]),
                createBaseVNode("div", _hoisted_8, [
                  createVNode(TransitionGroup, {
                    name: "list-complete",
                    tag: "div"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(filteredData.value, (item) => {
                        return openBlock(), createElementBlock("div", {
                          key: item.id,
                          class: "list-view-item"
                        }, [
                          createBaseVNode("div", _hoisted_9, [
                            createBaseVNode("div", _hoisted_10, [
                              createBaseVNode("h3", null, [
                                createBaseVNode("span", null, toDisplayString(item.name), 1),
                                createVNode(_component_VTag, {
                                  color: "primary",
                                  class: "ml-2",
                                  label: item.status ? "Published" : "Draft"
                                }, null, 8, ["label"])
                              ]),
                              createBaseVNode("p", null, [
                                _hoisted_11,
                                item.author ? (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString(`${item.author.first_name} | ${item.author.email}`), 1)) : createCommentVNode("", true)
                              ]),
                              createBaseVNode("p", null, toDisplayString(item.description), 1),
                              createBaseVNode("span", null, [
                                createBaseVNode("span", null, toDisplayString(item.steps_count > 1 ? `${item.steps_count} steps` : `${item.steps_count} step`), 1),
                                _hoisted_13,
                                createBaseVNode("span", null, toDisplayString(item.billable ? "Billable" : "Not Billable"), 1),
                                _hoisted_14,
                                createBaseVNode("span", null, toDisplayString(item.vatable ? "Taxable" : "Not Taxable"), 1),
                                _hoisted_15,
                                createBaseVNode("span", null, toDisplayString(item.has_certificate ? `Issues ${unref(t)("cert.title")}` : `No ${unref(t)("cert.title")}`), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_16, [
                              createBaseVNode("div", _hoisted_17, [
                                createVNode(_component_el_dropdown, { size: "large" }, {
                                  dropdown: withCtx(() => [
                                    createVNode(_component_el_dropdown_menu, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_el_dropdown_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_button, {
                                              type: "text",
                                              onClick: ($event) => unref(router).push({ name: "workflow-id", params: { id: item.id } })
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Workflow Steps")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_el_dropdown_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_button, {
                                              type: "text",
                                              onClick: ($event) => unref(router).push({ name: "workflow-id-edit", params: { id: item.id } })
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Edit Workflow")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        !item.status ? (openBlock(), createBlock(_component_el_dropdown_item, { key: 0 }, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_button, {
                                              type: "text",
                                              onClick: ($event) => publish(item.id)
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Publish")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)) : createCommentVNode("", true),
                                        createVNode(_component_el_dropdown_item, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_el_button, {
                                              type: "text",
                                              onClick: ($event) => unref(router).push({ name: "workflow-id-settings", params: { id: item.id } })
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Settings")
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
                                              plain: "",
                                              onClick: ($event) => {
                                                deleteModal.value = true;
                                                selectedWorkflow.value = item;
                                              }
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
                                    createBaseVNode("span", _hoisted_18, [
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
              _: 1
            }, 8, ["active"]),
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", _hoisted_20, [
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
      ], 64);
    };
  }
});
const _sfc_main = {};
const _hoisted_1 = { class: "page-content-inner" };
function _sfc_render(_ctx, _cache) {
  const _component_ListWorkflows = _sfc_main$1;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_ListWorkflows)
  ]);
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { index as default };
