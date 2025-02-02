import { d as defineComponent, o as openBlock, b as createElementBlock, K as Fragment, f as createBaseVNode, A as toDisplayString, B as renderSlot, n as normalizeClass } from "./vendor.11f8b2c5.js";
const _hoisted_1 = { class: "field-label is-normal" };
const _hoisted_2 = { class: "label" };
const _hoisted_3 = { class: "field-body" };
const _hoisted_4 = { class: "label" };
const _sfc_main = defineComponent({
  __name: "VField",
  props: {
    label: { default: void 0 },
    addons: { type: Boolean },
    textaddon: { type: Boolean },
    grouped: { type: Boolean },
    multiline: { type: Boolean },
    horizontal: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["field", [
          props.addons && "has-addons",
          props.textaddon && "has-textarea-addon",
          props.grouped && "is-grouped",
          props.grouped && props.multiline && "is-grouped-multiline",
          props.horizontal && "is-horizontal"
        ]])
      }, [
        typeof props.label === "string" && props.horizontal ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("label", _hoisted_2, toDisplayString(props.label), 1)
          ]),
          createBaseVNode("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "default")
          ])
        ], 64)) : typeof props.label === "string" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("label", _hoisted_4, toDisplayString(props.label), 1),
          renderSlot(_ctx.$slots, "default")
        ], 64)) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 2);
    };
  }
});
export { _sfc_main as _ };
