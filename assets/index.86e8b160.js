var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { e as useApi, b as useNotyf, d as _sfc_main$1 } from "./index.256f70c3.js";
import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$2 } from "./VField.897209dd.js";
import { r as ref, I as onMounted, d as defineComponent, l as useWindowScroll, U as useI18n, h as computed, o as openBlock, b as createElementBlock, f as createBaseVNode, n as normalizeClass, A as toDisplayString, v as unref, s as createVNode, t as withCtx, z as createTextVNode, K as Fragment, J as renderList, ah as withDirectives, am as vModelText } from "./vendor.11f8b2c5.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
function useSettings() {
  const api = useApi();
  const notify = useNotyf();
  const settings = ref();
  const fetchSettings = async () => {
    try {
      const { data } = await api.get(`settings`);
      settings.value = data.data;
    } catch ({ response }) {
      console.log(response);
      notify.error("Error Occurred");
    }
  };
  const updateSettings = async (data) => {
    return await api.post(`settings`, __spreadValues({}, data));
  };
  onMounted(() => {
    fetchSettings();
  });
  return {
    settings,
    updateSettings,
    fetchSettings
  };
}
var index_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "form-layout" };
const _hoisted_2 = { class: "form-outer" };
const _hoisted_3 = { class: "form-header-inner" };
const _hoisted_4 = { class: "left" };
const _hoisted_5 = { class: "right" };
const _hoisted_6 = { class: "buttons" };
const _hoisted_7 = { class: "form-body" };
const _hoisted_8 = { class: "form-fieldset" };
const _hoisted_9 = { class: "columns is-multiline" };
const _hoisted_10 = { class: "title is-8" };
const _hoisted_11 = { class: "help-text" };
const _hoisted_12 = ["onUpdate:modelValue"];
const _sfc_main = defineComponent({
  __name: "index",
  setup(__props) {
    const { settings, updateSettings, fetchSettings } = useSettings();
    const { y } = useWindowScroll();
    const notf = useNotyf();
    const { t } = useI18n();
    const isStuck = computed(() => {
      return y.value > 30;
    });
    const update = async () => {
      isLoading.value = true;
      loadingText.value = "Updating Settings";
      try {
        const _settings = Object.values(settings.value).map((_s) => {
          return { key: _s.key, value: _s.value };
        });
        const { data } = await updateSettings({ settings: _settings });
        isLoading.value = false;
        notf.success("Settings Updated");
        fetchSettings();
      } catch ({ response }) {
        isLoading.value = false;
        notf.error("Settings Not Updated!");
      }
    };
    const cancel = () => {
      fetchSettings().finally(() => notf.success("Settings Reset"));
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$1;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$2;
      return openBlock(), createElementBlock("form", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            class: normalizeClass([[isStuck.value && "is-stuck"], "form-header stuck-header"])
          }, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("h3", null, toDisplayString(unref(t)("settings.title")), 1)
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_VButton, { onClick: cancel }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("settings.actions.cancel")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_VButton, {
                    color: "primary",
                    onClick: update
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("settings.actions.submit")), 1)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])
          ], 2),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(settings), (option, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "column is-12"
                  }, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        createBaseVNode("span", _hoisted_10, toDisplayString(option.key), 1),
                        createBaseVNode("p", _hoisted_11, toDisplayString(option.description), 1),
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": ($event) => option.value = $event,
                              type: "text",
                              class: "input",
                              style: { "width": "100px" }
                            }, null, 8, _hoisted_12), [
                              [vModelText, option.value]
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]);
                }), 128))
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
