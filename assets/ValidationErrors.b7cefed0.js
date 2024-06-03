import { _ as _export_sfc } from "./index.4ea6d167.js";
import { m as resolveComponent, o as openBlock, b as createElementBlock, K as Fragment, J as renderList, x as createBlock } from "./vendor.11f8b2c5.js";
var ValidationErrors_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  props: {
    errors: {
      type: Object,
      required: true
    }
  },
  computed: {
    items() {
      return this.errors ? Object.keys(this.errors) : [];
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_alert = resolveComponent("el-alert");
  return openBlock(), createElementBlock("div", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.items, (item) => {
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.errors[item], (error, i) => {
          return openBlock(), createBlock(_component_el_alert, {
            key: i,
            title: error,
            type: "error",
            closable: false
          }, null, 8, ["title"]);
        }), 128))
      ], 64);
    }), 256))
  ]);
}
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5cec6451"]]);
export { __unplugin_components_1 as _ };
