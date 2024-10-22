import { d as _sfc_main$2, b as useNotyf } from "./index.256f70c3.js";
import { _ as __unplugin_components_1 } from "./ValidationErrors.48d8bce6.js";
import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$3 } from "./VField.897209dd.js";
import { d as defineComponent, l as useWindowScroll, a as useRouter, F as useRoute, h as computed, r as ref, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, n as normalizeClass, s as createVNode, t as withCtx, z as createTextVNode, x as createBlock, y as createCommentVNode, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, A as toDisplayString, v as unref, q as withModifiers } from "./vendor.11f8b2c5.js";
import { u as useWorkflow } from "./useWorkflow.759d0480.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
import { p as pageTitle } from "./navbarLayoutState.eee24dfa.js";
import "./FileSaver.min.c8bfead3.js";
var EditWorkflowStep_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "form-outer" };
const _hoisted_2 = { class: "form-header-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Edit Step")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = { class: "form-body" };
const _hoisted_7 = { class: "form-fieldset" };
const _hoisted_8 = { class: "columns" };
const _hoisted_9 = { class: "column is-12" };
const _hoisted_10 = { class: "columns is-multiline" };
const _hoisted_11 = { class: "column is-6" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "Step Title", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", null, "This will be the title of the step.", -1);
const _hoisted_14 = { class: "column is-8" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "Step Description", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("p", null, "Give a short description of what is involved", -1);
const _hoisted_17 = { class: "form-fieldset" };
const _hoisted_18 = { class: "columns is-multiline" };
const _hoisted_19 = { class: "column is-12" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("label", { class: "label" }, "Step Actors", -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("p", null, "Select the people who will perform tasks on this step.", -1);
const _hoisted_22 = { class: "columns is-multiline mb-1" };
const _hoisted_23 = { class: "column is-12" };
const _hoisted_24 = { class: "form-fieldset" };
const _hoisted_25 = { class: "columns is-multiline" };
const _hoisted_26 = { class: "column is-12" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("p", null, "Will this process require payment? If on, this step will be inaccessible until the bill in the process is paid.", -1);
const _hoisted_28 = { class: "column is-12" };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("p", null, "Will this process require approval? If on, this step will be inaccessible until it`s approved`.", -1);
const _sfc_main$1 = defineComponent({
  __name: "EditWorkflowStep",
  setup(__props) {
    const { y } = useWindowScroll();
    const router = useRouter();
    const route = useRoute();
    const { groups, step: stepDetails, updateWorkflowStep, fetchStepDetails, fetchWorkflowSteps } = useWorkflow();
    const { success } = useNotyf();
    const workflowId = computed(() => route.params.id);
    const stepId = computed(() => route.params.step);
    const errors = ref(void 0);
    const step = ref({
      title: "",
      description: "",
      require_payment: false,
      has_approval: false,
      actors: {
        groups: [],
        roles: []
      }
    });
    const resetForm = () => {
      step.value = {
        title: "",
        description: "",
        require_payment: false,
        has_approval: false,
        actors: {
          groups: [],
          roles: []
        }
      };
    };
    const isStuck = computed(() => {
      return y.value > 30;
    });
    const isActive = (actor_id) => {
      return step.value ? step.value.actors.groups.includes(actor_id) : false;
    };
    const close = function() {
      resetForm();
      router.push({ name: "workflow-id", params: { id: workflowId.value } });
    };
    const update = async () => {
      isLoading.value = true;
      try {
        const { data } = await updateWorkflowStep(stepId.value, workflowId.value, {
          title: step.value.title,
          description: step.value.description,
          require_payment: step.value.require_payment,
          has_approval: step.value.has_approval
        });
        success("Workflow step Updated!");
        resetForm();
        close();
        isLoading.value = false;
      } catch ({ response }) {
        console.log(response);
        isLoading.value = false;
      }
    };
    onMounted(() => {
      fetchWorkflowSteps(workflowId.value);
      fetchStepDetails(workflowId.value, stepId.value).then(() => {
        console.log(stepDetails.value);
        const _step = stepDetails.value;
        step.value = {
          title: _step.title,
          description: _step.description,
          require_payment: !!_step.require_payment,
          has_approval: !!_step.has_approval,
          actors: _step.all_actors
        };
      });
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_validation_errors = __unplugin_components_1;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_switch = resolveComponent("el-switch");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("form", {
          class: "form-layout",
          onSubmit: _cache[6] || (_cache[6] = withModifiers(() => {
          }, ["prevent"]))
        }, [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", {
              class: normalizeClass([[isStuck.value && "is-stuck"], "form-header stuck-header"])
            }, [
              createBaseVNode("div", _hoisted_2, [
                _hoisted_3,
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_component_VButton, {
                      light: "",
                      "dark-outlined": "",
                      onClick: close
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: "",
                      onClick: update
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Update Step ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ], 2),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    errors.value ? (openBlock(), createBlock(_component_validation_errors, {
                      key: 0,
                      errors: errors.value
                    }, null, 8, ["errors"])) : createCommentVNode("", true)
                  ])
                ]),
                createBaseVNode("div", _hoisted_10, [
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_12,
                        _hoisted_13,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => step.value.title = $event),
                              type: "text",
                              class: "input",
                              placeholder: "Step Title"
                            }, null, 512), [
                              [vModelText, step.value.title]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_14, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_15,
                        _hoisted_16,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("textarea", {
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => step.value.description = $event),
                              class: "textarea is-primary-focus",
                              rows: "2",
                              placeholder: "more info..."
                            }, null, 512), [
                              [vModelText, step.value.description]
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
              createBaseVNode("div", _hoisted_17, [
                createBaseVNode("div", _hoisted_18, [
                  createBaseVNode("div", _hoisted_19, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_20,
                        _hoisted_21
                      ]),
                      _: 1
                    })
                  ]),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(groups), (group) => {
                    return openBlock(), createElementBlock("div", {
                      key: group.id,
                      class: "column is-12"
                    }, [
                      createBaseVNode("div", _hoisted_22, [
                        createBaseVNode("div", _hoisted_23, [
                          (openBlock(), createBlock(_component_el_checkbox, {
                            key: group.id,
                            modelValue: step.value.actors.groups,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => step.value.actors.groups = $event),
                            label: group.id
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("span", null, toDisplayString(group.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "label"]))
                        ]),
                        isActive(group.id) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(group.roles, (role) => {
                          return openBlock(), createElementBlock("div", {
                            key: role.id,
                            class: "column is-12 ml-2"
                          }, [
                            createVNode(_component_el_checkbox, {
                              modelValue: step.value.actors.roles,
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => step.value.actors.roles = $event),
                              label: role.id
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("span", null, toDisplayString(role.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "label"])
                          ]);
                        }), 128)) : createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("div", _hoisted_25, [
                  createBaseVNode("div", _hoisted_26, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_switch, {
                          modelValue: step.value.require_payment,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => step.value.require_payment = $event),
                          "active-text": "Requires Payment?"
                        }, null, 8, ["modelValue"]),
                        _hoisted_27
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_28, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createVNode(_component_el_switch, {
                          modelValue: step.value.has_approval,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => step.value.has_approval = $event),
                          "active-text": "Has Approval?"
                        }, null, 8, ["modelValue"]),
                        _hoisted_29
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ])
        ], 32)
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = defineComponent({
  __name: "edit",
  setup(__props) {
    pageTitle.value = "Edit Workflow Step";
    return (_ctx, _cache) => {
      const _component_edit_workflow_step = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_edit_workflow_step)
      ]);
    };
  }
});
export { _sfc_main as default };
