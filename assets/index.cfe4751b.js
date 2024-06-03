import { _ as _export_sfc, j as _sfc_main$1 } from "./index.4ea6d167.js";
import { u as useAppNotification } from "./useAppNotification.a2443950.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, v as unref, y as createCommentVNode, K as Fragment, J as renderList, x as createBlock, t as withCtx, f as createBaseVNode, A as toDisplayString } from "./vendor.11f8b2c5.js";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "page-content-inner" };
const _hoisted_2 = {
  key: 0,
  class: "center"
};
const _hoisted_3 = { class: "title is-5 mb-2" };
const _sfc_main = defineComponent({
  __name: "index",
  setup(__props) {
    const { notifications, readOne, getAllNotifications } = useAppNotification();
    const open = (url, id) => {
      readOne(id).finally(() => getAllNotifications());
      window.open(url, "_blank");
    };
    return (_ctx, _cache) => {
      const _component_VCard = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        unref(notifications).length == 0 ? (openBlock(), createElementBlock("p", _hoisted_2, " No Notifications ")) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(notifications), (item, i) => {
          return openBlock(), createBlock(_component_VCard, {
            key: i,
            class: "mb-3",
            radius: "small",
            onClick: ($event) => {
              var _a;
              return open((_a = item.data) == null ? void 0 : _a.url, item.id);
            }
          }, {
            default: withCtx(() => [
              createBaseVNode("h3", _hoisted_3, toDisplayString(item.data.title), 1),
              createBaseVNode("p", null, toDisplayString(item.data.body), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]);
        }), 128))
      ]);
    };
  }
});
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5f49ba27"]]);
export { index as default };
