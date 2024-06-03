import { _ as _export_sfc, u as useUserSession, g as __vitePreload } from "./index.4ea6d167.js";
import { F as useRoute, H as useHead, aq as defineAsyncComponent, m as resolveComponent, o as openBlock, x as createBlock, t as withCtx, s as createVNode, W as Transition, a0 as resolveDynamicComponent } from "./vendor.11f8b2c5.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
const appName = "METLS";
const _sfc_main = {
  setup() {
    const route = useRoute();
    const { user } = useUserSession();
    pageTitle.value = "Notifications";
    useHead({ title: `${appName} - notifications` });
    const HomeSidenav = defineAsyncComponent(() => __vitePreload(() => import("./NavbarDropdownLayout.2446e431.js"), true ? ["assets/NavbarDropdownLayout.2446e431.js","assets/index.4ea6d167.js","assets/index.5b31624c.css","assets/vendor.11f8b2c5.js","assets/activePanelState.49edee4b.js","assets/activePanelState.9331fefc.css","assets/VDropdown.dd19268e.js","assets/VDropdown.a7b68ccd.css","assets/VIcon.580f0211.js","assets/useAppNotification.a2443950.js","assets/VAvatar.c1fa75a5.js","assets/Navbar.fefeaebe.js","assets/Navbar.a4bdbe67.css","assets/navbarLayoutState.37d961b9.js","assets/loaderState.8b0078f1.js"] : void 0));
    const Sidenav = defineAsyncComponent(() => __vitePreload(() => import("./SidebarLayout.57b7f1e5.js"), true ? ["assets/SidebarLayout.57b7f1e5.js","assets/SidebarLayout.c1a27aaf.css","assets/index.4ea6d167.js","assets/index.5b31624c.css","assets/vendor.11f8b2c5.js","assets/activePanelState.49edee4b.js","assets/activePanelState.9331fefc.css","assets/VDropdown.dd19268e.js","assets/VDropdown.a7b68ccd.css","assets/VIcon.580f0211.js","assets/useAppNotification.a2443950.js","assets/VAvatar.c1fa75a5.js","assets/sidebarLayoutState.9ea1d64f.js","assets/loaderState.8b0078f1.js"] : void 0));
    const group = user == null ? void 0 : user.user_group_id;
    const isAdmin = group != "citizen";
    return {
      route,
      isAdmin,
      HomeSidenav,
      Sidenav
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterView = resolveComponent("RouterView");
  return openBlock(), createBlock(resolveDynamicComponent($setup.isAdmin ? $setup.Sidenav : $setup.HomeSidenav), null, {
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
var notifications = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { notifications as default };
