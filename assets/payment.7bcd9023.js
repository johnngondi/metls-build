import _sfc_main$1 from "./SidebarLayout.c6818199.js";
import { F as useRoute, H as useHead, m as resolveComponent, o as openBlock, x as createBlock, t as withCtx, s as createVNode, W as Transition, a0 as resolveDynamicComponent } from "./vendor.11f8b2c5.js";
import { _ as _export_sfc, u as useUserSession, a as useAuthorize, b as useNotyf } from "./index.256f70c3.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import "./activePanelState.bc2a93b3.js";
import "./VDropdown.bd118128.js";
import "./VIcon.580f0211.js";
import "./useAppNotification.a15d8d78.js";
import "./VAvatar.c1fa75a5.js";
import "./loaderState.8b0078f1.js";
const appName = "METLS";
const _sfc_main = {
  beforeRouteEnter(to) {
    var _a;
    const userSession = useUserSession();
    const notfy = useNotyf();
    (_a = userSession.user) == null ? void 0 : _a.user_group_id;
    const { hasAccess } = useAuthorize();
    if (!userSession.isLoggedIn) {
      return {
        name: "auth",
        query: { redirect: to.fullPath }
      };
    }
    if (!hasAccess("receive payment")) {
      notfy.error({
        message: "Sorry, you are not authorized to access this section(Contact Admin)",
        duration: 7e3
      });
      return { name: "index" };
    }
  },
  setup() {
    const route = useRoute();
    pageTitle.value = "POS";
    useHead({
      title: `${appName} - POS`
    });
    return { route };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterView = resolveComponent("RouterView");
  const _component_SidebarLayout = _sfc_main$1;
  return openBlock(), createBlock(_component_SidebarLayout, null, {
    default: withCtx(() => [
      createVNode(_component_RouterView, null, {
        default: withCtx(({ Component }) => [
          createVNode(Transition, {
            name: "fade-fast",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(Component), {
                key: $setup.route.fullPath
              }))
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
var payment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { payment as default };
