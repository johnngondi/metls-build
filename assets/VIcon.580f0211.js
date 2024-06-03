import { d as defineComponent, h as computed, o as openBlock, b as createElementBlock, n as normalizeClass } from "./vendor.11f8b2c5.js";
const _hoisted_1 = ["data-icon"];
const _sfc_main = defineComponent({
  __name: "VIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    const props = __props;
    const isIconify = computed(() => {
      return props.icon && props.icon.indexOf(":") !== -1;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        key: props.icon
      }, [
        isIconify.value ? (openBlock(), createElementBlock("i", {
          key: 0,
          "aria-hidden": "true",
          class: "iconify",
          "data-icon": props.icon
        }, null, 8, _hoisted_1)) : (openBlock(), createElementBlock("i", {
          key: 1,
          "aria-hidden": "true",
          class: normalizeClass(props.icon)
        }, null, 2))
      ]);
    };
  }
});
export { _sfc_main as _ };
