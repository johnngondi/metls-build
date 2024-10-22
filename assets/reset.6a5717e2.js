import { e as useApi, c as __unplugin_components_0, k as _sfc_main$1, d as _sfc_main$3, b as useNotyf } from "./index.256f70c3.js";
import { _ as __unplugin_components_1 } from "./ValidationErrors.48d8bce6.js";
import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$2 } from "./VField.897209dd.js";
import { d as defineComponent, r as ref, H as useHead, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, s as createVNode, t as withCtx, x as createBlock, y as createCommentVNode, z as createTextVNode, A as toDisplayString, q as withModifiers, ah as withDirectives, am as vModelText, v as unref } from "./vendor.11f8b2c5.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
const _hoisted_1 = { class: "auth-wrapper-inner columns is-gapless" };
const _hoisted_2 = { class: "column is-12" };
const _hoisted_3 = { class: "hero is-fullheight is-white" };
const _hoisted_4 = { class: "hero-heading" };
const _hoisted_5 = { class: "auth-logo" };
const _hoisted_6 = { class: "hero-body" };
const _hoisted_7 = { class: "container" };
const _hoisted_8 = { class: "columns" };
const _hoisted_9 = { class: "column is-12" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("div", { class: "auth-content" }, [
  /* @__PURE__ */ createBaseVNode("h2", null, "Forgot Your Password?"),
  /* @__PURE__ */ createBaseVNode("p", null, "Please provide us with your Identity/Passport Number.")
], -1);
const _hoisted_11 = { class: "auth-form-wrapper" };
const _hoisted_12 = ["onSubmit"];
const _hoisted_13 = { class: "login-form" };
const _hoisted_14 = { class: "forgot-link has-text-centered" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", null, "I do not have an account yet", -1);
const _sfc_main = defineComponent({
  __name: "reset",
  setup(__props) {
    const appName = "METLS";
    const api = useApi();
    const notf = useNotyf();
    const identity = ref("");
    const errors = ref(void 0);
    const message = ref("");
    const handleReset = async () => {
      var _a;
      if (!isLoading.value) {
        errors.value = [];
        message.value = "";
        isLoading.value = true;
        try {
          const { data } = await api.post("reset-password", { id_number: identity.value });
          isLoading.value = false;
          identity.value = "";
          notf.dismissAll();
          notf.success("Password Reset successful");
          message.value = "Password Reset link has been sent to your email address";
        } catch (error) {
          isLoading.value = false;
          errors.value = ((_a = error.response.data) == null ? void 0 : _a.errors) || [];
        }
      }
    };
    useHead({
      title: `${appName} - Reset Password`
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_validation_errors = __unplugin_components_1;
      const _component_VMessage = _sfc_main$1;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$2;
      const _component_VButton = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_RouterLink, { to: { name: "index" } }, {
                  default: withCtx(() => [
                    createVNode(_component_AnimatedLogo, { width: "50px" })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    _hoisted_10,
                    createBaseVNode("div", _hoisted_11, [
                      errors.value ? (openBlock(), createBlock(_component_validation_errors, {
                        key: 0,
                        errors: errors.value,
                        class: "mb-1"
                      }, null, 8, ["errors"])) : createCommentVNode("", true),
                      message.value != "" ? (openBlock(), createBlock(_component_VMessage, {
                        key: 1,
                        color: "info"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(message.value), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createBaseVNode("form", {
                        onSubmit: withModifiers(handleReset, ["prevent"])
                      }, [
                        createBaseVNode("div", _hoisted_13, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
                                default: withCtx(() => [
                                  withDirectives(createBaseVNode("input", {
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => identity.value = $event),
                                    class: "input",
                                    type: "text",
                                    autocomplete: "false",
                                    placeholder: "ID Number"
                                  }, null, 512), [
                                    [vModelText, identity.value]
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { class: "login" }, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                loading: unref(isLoading),
                                color: "primary",
                                type: "submit",
                                bold: "",
                                fullwidth: "",
                                raised: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Submit ")
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          }),
                          createBaseVNode("div", _hoisted_14, [
                            createBaseVNode("p", null, [
                              _hoisted_15,
                              createVNode(_component_RouterLink, {
                                class: "text-primary",
                                to: { name: "auth-signup" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Register ")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])
                      ], 40, _hoisted_12)
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
