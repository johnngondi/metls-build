import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$2 } from "./VField.897209dd.js";
import { d as _sfc_main$3 } from "./index.256f70c3.js";
import { _ as _sfc_main$4 } from "./VPlaceholderSection.998599a6.js";
import { _ as _sfc_main$5 } from "./VPlaceholderPage.59076d4c.js";
import { _ as __unplugin_components_0 } from "./VDropdown.bd118128.js";
import { d as defineComponent, F as useRoute, r as ref, h as computed, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, s as createVNode, t as withCtx, ah as withDirectives, am as vModelText, z as createTextVNode, n as normalizeClass, K as Fragment, J as renderList, A as toDisplayString, T as TransitionGroup } from "./vendor.11f8b2c5.js";
import { u as useWorkflow } from "./useWorkflow.759d0480.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import "./VIcon.580f0211.js";
import "./FileSaver.min.c8bfead3.js";
import "./loaderState.8b0078f1.js";
var _imports_0 = "/assets/search-2.acae5ed9.svg";
var _imports_1 = "/assets/search-2-dark.2af849e8.svg";
var WorkflowSteps_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "list-view-toolbar" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "tabs-inner" }, null, -1);
const _hoisted_3 = { class: "actions" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "fas fa-plus"
  })
], -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", null, "Add Workflow Step", -1);
const _hoisted_6 = { class: "dialog-footer" };
const _hoisted_7 = { class: "page-content-inner" };
const _hoisted_8 = { class: "list-view list-view-v2" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("img", {
  class: "light-image",
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("img", {
  class: "dark-image",
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_11 = { class: "list-view-inner" };
const _hoisted_12 = { class: "list-view-item-inner" };
const _hoisted_13 = { class: "meta-left" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "fas fa-circle icon-separator"
}, null, -1);
const _hoisted_17 = { class: "meta-right" };
const _hoisted_18 = { class: "buttons" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", null, null, -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-eye"
  })
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Fields")
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnil lnil-pencil"
  })
], -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Edit")
], -1);
const _hoisted_24 = ["onClick"];
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "lnir lnir-trash"
  })
], -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Delete")
], -1);
const _hoisted_27 = [
  _hoisted_25,
  _hoisted_26
];
const _sfc_main$1 = defineComponent({
  __name: "WorkflowSteps",
  setup(__props) {
    const route = useRoute();
    const {
      steps,
      groups,
      fetchWorkflowSteps,
      createWorkflowStep,
      deleteWorkflowStep,
      updateWorkflowStep
    } = useWorkflow();
    const filters = ref("");
    ref(false);
    const workflowId = computed(() => route.params.id);
    const deleteModal = ref(false);
    const selectedStep = ref();
    const filteredData = computed(() => {
      var _a;
      if (!filters.value) {
        return steps.value;
      } else {
        return (_a = steps.value) == null ? void 0 : _a.filter((item) => {
          return item.name.match(new RegExp(filters.value, "i"));
        });
      }
    });
    ref({
      title: "",
      description: "",
      require_payment: false,
      has_approval: false,
      actors: {
        groups: [],
        roles: []
      }
    });
    ref("Create Workflow Step");
    onMounted(() => fetchWorkflowSteps(workflowId.value));
    return (_ctx, _cache) => {
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      const _component_VPlaceholderSection = _sfc_main$4;
      const _component_el_button = resolveComponent("el-button");
      const _component_el_dialog = resolveComponent("el-dialog");
      const _component_VPlaceholderPage = _sfc_main$5;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VDropdown = __unplugin_components_0;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_component_VField, null, {
            default: withCtx(() => [
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
              })
            ]),
            _: 1
          }),
          _hoisted_2,
          createBaseVNode("div", _hoisted_3, [
            createVNode(_component_VButton, {
              color: "primary",
              raised: "",
              to: { name: "workflow-id-new", params: { id: workflowId.value } }
            }, {
              default: withCtx(() => [
                _hoisted_4,
                _hoisted_5
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ]),
        createVNode(_component_el_dialog, {
          modelValue: deleteModal.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => deleteModal.value = $event),
          title: "Delete Workflow Step"
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_6, [
              createVNode(_component_el_button, {
                onClick: _cache[1] || (_cache[1] = ($event) => deleteModal.value = false)
              }, {
                default: withCtx(() => [
                  createTextVNode("Cancel")
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[2] || (_cache[2] = ($event) => deleteModal.value = false)
              }, {
                default: withCtx(() => [
                  createTextVNode("Confirm")
                ]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_VPlaceholderSection, {
              title: "Sure to Delete!",
              subtitle: "You are about to delete a workflow step"
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createVNode(_component_VPlaceholderPage, {
              class: normalizeClass([filteredData.value.length !== 0 && "is-hidden"]),
              title: "We couldn't find any matching results.",
              subtitle: "Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",
              larger: ""
            }, {
              image: withCtx(() => [
                _hoisted_9,
                _hoisted_10
              ]),
              _: 1
            }, 8, ["class"]),
            createBaseVNode("div", null, [
              createBaseVNode("div", _hoisted_11, [
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
                        createBaseVNode("div", _hoisted_12, [
                          createBaseVNode("div", _hoisted_13, [
                            createBaseVNode("h3", null, [
                              createBaseVNode("span", null, toDisplayString(item.title), 1)
                            ]),
                            createBaseVNode("p", null, toDisplayString(item.description), 1),
                            createBaseVNode("p", null, [
                              (openBlock(true), createElementBlock(Fragment, null, renderList(item.actors, (actor) => {
                                return openBlock(), createElementBlock("span", { key: actor }, toDisplayString(actor), 1);
                              }), 128))
                            ]),
                            createBaseVNode("span", null, [
                              createBaseVNode("span", null, toDisplayString(item.fields_count > 1 ? `${item.fields_count} fields` : `${item.fields_count} field`), 1),
                              _hoisted_14,
                              createBaseVNode("span", null, toDisplayString(item.require_payment ? "Billing Step" : "Not Billable"), 1),
                              _hoisted_15,
                              createBaseVNode("span", null, toDisplayString(item.has_approval ? "Has Approval" : "No Approval"), 1),
                              _hoisted_16,
                              createBaseVNode("span", null, toDisplayString(item.type), 1)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_17, [
                            createBaseVNode("div", _hoisted_18, [
                              _hoisted_19,
                              createVNode(_component_VDropdown, {
                                icon: "feather:more-vertical",
                                spaced: "",
                                right: ""
                              }, {
                                content: withCtx(() => [
                                  createVNode(_component_RouterLink, {
                                    role: "menuitem",
                                    to: { name: "workflow-id-step", params: { step: item.id } },
                                    class: "dropdown-item is-media"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_20,
                                      _hoisted_21
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode(_component_RouterLink, {
                                    role: "menuitem",
                                    to: { name: "workflow-id-step-edit", params: { step: item.id } },
                                    class: "dropdown-item is-media"
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_22,
                                      _hoisted_23
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createBaseVNode("a", {
                                    role: "menuitem",
                                    href: "#",
                                    class: "dropdown-item is-media is-warning",
                                    onClick: ($event) => {
                                      deleteModal.value = true;
                                      selectedStep.value = item;
                                    }
                                  }, _hoisted_27, 8, _hoisted_24)
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
            ])
          ])
        ])
      ], 64);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = defineComponent({
  __name: "index",
  setup(__props) {
    pageTitle.value = `Workflow Details`;
    return (_ctx, _cache) => {
      const _component_WorkflowSteps = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_WorkflowSteps)
      ]);
    };
  }
});
export { _sfc_main as default };
