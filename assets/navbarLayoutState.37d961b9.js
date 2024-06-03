import { g as __vitePreload } from "./index.4ea6d167.js";
import { aq as defineAsyncComponent, r as ref, h as computed } from "./vendor.11f8b2c5.js";
const NavbarLayout = defineAsyncComponent(() => __vitePreload(() => import("./NavbarLayout.3770a317.js"), true ? ["assets/NavbarLayout.3770a317.js","assets/NavbarLayout.aa43c301.css","assets/index.4ea6d167.js","assets/index.5b31624c.css","assets/vendor.11f8b2c5.js","assets/activePanelState.49edee4b.js","assets/activePanelState.9331fefc.css","assets/VDropdown.dd19268e.js","assets/VDropdown.a7b68ccd.css","assets/VIcon.580f0211.js","assets/useAppNotification.a2443950.js","assets/VAvatar.c1fa75a5.js","assets/Navbar.fefeaebe.js","assets/Navbar.a4bdbe67.css","assets/loaderState.8b0078f1.js"] : void 0));
const NavbarDropdownLayout = defineAsyncComponent(() => __vitePreload(() => import("./NavbarDropdownLayout.2446e431.js"), true ? ["assets/NavbarDropdownLayout.2446e431.js","assets/index.4ea6d167.js","assets/index.5b31624c.css","assets/vendor.11f8b2c5.js","assets/activePanelState.49edee4b.js","assets/activePanelState.9331fefc.css","assets/VDropdown.dd19268e.js","assets/VDropdown.a7b68ccd.css","assets/VIcon.580f0211.js","assets/useAppNotification.a2443950.js","assets/VAvatar.c1fa75a5.js","assets/Navbar.fefeaebe.js","assets/Navbar.a4bdbe67.css","assets/loaderState.8b0078f1.js"] : void 0));
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
