import { u as useUserSession, e as useApi, c as __unplugin_components_0, d as _sfc_main$2, b as useNotyf } from "./index.4ea6d167.js";
import { _ as __unplugin_components_2 } from "./VControl.a1e5c3aa.js";
import { _ as _sfc_main$1 } from "./VField.897209dd.js";
import { d as defineComponent, r as ref, a as useRouter, F as useRoute, H as useHead, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, s as createVNode, t as withCtx, z as createTextVNode, q as withModifiers, ah as withDirectives, am as vModelText, C as createStaticVNode } from "./vendor.11f8b2c5.js";
var _imports_0 = "/assets/hero.ba008591.png";
function sleep(time = 1e3) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
const _hoisted_1 = { class: "auth-wrapper-inner columns is-gapless" };
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<div class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner"><div class="hero login-hero is-fullheight is-app-grey"><div class="hero-body"><div class="columns"><div class="column is-10 is-offset-1"><img class="light-image" src="' + _imports_0 + '" alt=""></div></div></div><div class="hero-footer"><p class="has-text-centered"></p></div></div></div>', 1);
const _hoisted_3 = { class: "column is-4" };
const _hoisted_4 = { class: "hero is-fullheight is-white" };
const _hoisted_5 = { class: "hero-heading" };
const _hoisted_6 = { class: "auth-logo" };
const _hoisted_7 = { class: "hero-body" };
const _hoisted_8 = { class: "container" };
const _hoisted_9 = { class: "columns" };
const _hoisted_10 = { class: "column is-12" };
const _hoisted_11 = { class: "auth-content" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("h2", null, "Welcome Back.", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", null, "Please sign in to your account", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", null, "I do not have an account yet", -1);
const _hoisted_15 = { class: "auth-form-wrapper" };
const _hoisted_16 = ["onSubmit"];
const _hoisted_17 = { class: "login-form" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("label", {
  for: "remember-me",
  class: "form-switch is-primary"
}, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "remember-me",
    type: "checkbox",
    class: "is-switch"
  }),
  /* @__PURE__ */ createBaseVNode("i", { "aria-hidden": "true" })
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("div", { class: "setting-meta" }, [
  /* @__PURE__ */ createBaseVNode("label", { for: "remember-me" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Remember Me")
  ])
], -1);
const _hoisted_20 = { class: "forgot-link has-text-centered" };
const _sfc_main = defineComponent({
  __name: "login",
  setup(__props) {
    const appName = "METLS";
    const isLoading = ref(false);
    const router = useRouter();
    const route = useRoute();
    const notif = useNotyf();
    const userSession = useUserSession();
    const redirect = route.query.redirect;
    const api = useApi();
    const identity = ref("");
    const password = ref("");
    const handleLogin = async () => {
      if (!isLoading.value) {
        isLoading.value = true;
        await sleep(2e3);
        try {
          const { data } = await api.post("login", {
            id_number: identity.value,
            password: password.value
          });
          const { token, user, permissions } = data.data;
          userSession.setToken(token);
          userSession.setUser(user);
          userSession.setPermissions(permissions);
          const group = user == null ? void 0 : user.user_group_id;
          notif.dismissAll();
          notif.success(`Welcome back, ${user.first_name}`);
          if (redirect) {
            router.push(redirect);
          } else {
            if (group != "citizen") {
              router.push({ name: "app" });
            } else {
              router.push({ name: "home" });
            }
          }
          isLoading.value = false;
        } catch ({ response }) {
          isLoading.value = false;
        }
      }
    };
    useHead({
      title: `${appName} - Signin`
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$1;
      const _component_VButton = _sfc_main$2;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createVNode(_component_RouterLink, { to: { name: "index" } }, {
                  default: withCtx(() => [
                    createVNode(_component_AnimatedLogo, { width: "50px" })
                  ]),
                  _: 1
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, [
                      _hoisted_12,
                      _hoisted_13,
                      createBaseVNode("p", null, [
                        _hoisted_14,
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
                    ]),
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("form", {
                        onSubmit: withModifiers(handleLogin, ["prevent"])
                      }, [
                        createBaseVNode("div", _hoisted_17, [
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:user" }, {
                                default: withCtx(() => [
                                  withDirectives(createBaseVNode("input", {
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => identity.value = $event),
                                    class: "input",
                                    type: "text",
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
                          createVNode(_component_VField, null, {
                            default: withCtx(() => [
                              createVNode(_component_VControl, { icon: "feather:lock" }, {
                                default: withCtx(() => [
                                  withDirectives(createBaseVNode("input", {
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event),
                                    class: "input",
                                    type: "password",
                                    placeholder: "Password"
                                  }, null, 512), [
                                    [vModelText, password.value]
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { class: "setting-item" }, {
                            default: withCtx(() => [
                              _hoisted_18,
                              _hoisted_19
                            ]),
                            _: 1
                          }),
                          createVNode(_component_VControl, { class: "login" }, {
                            default: withCtx(() => [
                              createVNode(_component_VButton, {
                                loading: isLoading.value,
                                color: "primary",
                                type: "submit",
                                bold: "",
                                fullwidth: "",
                                raised: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Sign In ")
                                ]),
                                _: 1
                              }, 8, ["loading"])
                            ]),
                            _: 1
                          }),
                          createBaseVNode("div", _hoisted_20, [
                            createVNode(_component_RouterLink, { to: { name: "auth-reset" } }, {
                              default: withCtx(() => [
                                createTextVNode("Forgot Password?")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ], 40, _hoisted_16)
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
