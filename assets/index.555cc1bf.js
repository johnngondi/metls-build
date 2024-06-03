import { _ as _sfc_main$1 } from "./MyApplications.a49d44a8.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import { d as defineComponent, o as openBlock, b as createElementBlock, s as createVNode } from "./vendor.11f8b2c5.js";
import "./useApply.4fc76bc2.js";
import "./index.4ea6d167.js";
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = defineComponent({
  __name: "index",
  setup(__props) {
    pageTitle.value = "Applications";
    return (_ctx, _cache) => {
      const _component_my_applications = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_my_applications)
      ]);
    };
  }
});
export { _sfc_main as default };
