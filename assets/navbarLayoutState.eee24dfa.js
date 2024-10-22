import { g as __vitePreload } from "./index.256f70c3.js";
import { aq as defineAsyncComponent, r as ref, h as computed } from "./vendor.11f8b2c5.js";
const NavbarLayout = defineAsyncComponent(() => __vitePreload(() => import("./NavbarLayout.b7767c5d.js"), true ? ["assets/NavbarLayout.b7767c5d.js","assets/NavbarLayout.aa43c301.css","assets/index.256f70c3.js","assets/index.5b31624c.css","assets/vendor.11f8b2c5.js","assets/activePanelState.bc2a93b3.js","assets/activePanelState.9331fefc.css","assets/VDropdown.bd118128.js","assets/VDropdown.a7b68ccd.css","assets/VIcon.580f0211.js","assets/useAppNotification.a15d8d78.js","assets/VAvatar.c1fa75a5.js","assets/Navbar.fefeaebe.js","assets/Navbar.a4bdbe67.css","assets/loaderState.8b0078f1.js"] : void 0));
const NavbarDropdownLayout = defineAsyncComponent(() => __vitePreload(() => import("./NavbarDropdownLayout.2f3c47fb.js"), true ? ["assets/NavbarDropdownLayout.2f3c47fb.js","assets/index.256f70c3.js","assets/index.5b31624c.css","assets/vendor.11f8b2c5.js","assets/activePanelState.bc2a93b3.js","assets/activePanelState.9331fefc.css","assets/VDropdown.bd118128.js","assets/VDropdown.a7b68ccd.css","assets/VIcon.580f0211.js","assets/useAppNotification.a15d8d78.js","assets/VAvatar.c1fa75a5.js","assets/Navbar.fefeaebe.js","assets/Navbar.a4bdbe67.css","assets/loaderState.8b0078f1.js"] : void 0));
const layoutsComponents = {
  "navbar-default": NavbarLayout,
  "navbar-fade": NavbarLayout,
  "navbar-colored": NavbarLayout,
  "navbar-dropdown": NavbarDropdownLayout,
  "navbar-dropdown-colored": NavbarDropdownLayout
};
const navbarLayoutId = ref("navbar-dropdown");
const navbarLayoutComponent = computed(() => {
  return layoutsComponents[navbarLayoutId.value] || NavbarLayout;
});
computed(() => {
  switch (navbarLayoutId.value) {
    case "navbar-fade":
      return "fade";
    case "navbar-colored":
    case "navbar-dropdown-colored":
      return "colored";
    default:
      return "default";
  }
});
const pageTitle = ref("...");
export { navbarLayoutComponent as n, pageTitle as p };
