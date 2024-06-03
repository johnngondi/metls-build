import { _ as _export_sfc, l as useGoogle } from "./index.4ea6d167.js";
import { m as resolveComponent, o as openBlock, b as createElementBlock, s as createVNode, t as withCtx, f as createBaseVNode, A as toDisplayString } from "./vendor.11f8b2c5.js";
const _sfc_main = {
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  setup() {
    const api = useGoogle();
    return {
      loader: api
    };
  },
  data: () => ({
    query: ""
  }),
  created() {
    if (this.modelValue) {
      this.query = this.modelValue;
    }
  },
  methods: {
    querySearch(_search, cb) {
      if (_search) {
        this.$emit("update:modelValue", "");
        this.loader.load().then((_google) => {
          const autocomplete = new _google.maps.places.AutocompleteService();
          autocomplete.getPlacePredictions({
            input: _search,
            componentRestrictions: { country: "mw" },
            types: ["geocode"]
          }, (results, status) => {
            if (status == "OK") {
              cb([...results]);
            } else {
              cb([]);
            }
          });
        });
      }
    },
    handleSelection(item) {
      this.query = item.description;
      this.$emit("update:modelValue", this.query);
    }
  }
};
const _hoisted_1 = { class: "title is-6" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_autocomplete = resolveComponent("el-autocomplete");
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_el_autocomplete, {
      modelValue: _ctx.query,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.query = $event),
      size: "large",
      placeholder: "Search Location",
      "fetch-suggestions": $options.querySearch,
      "trigger-on-focus": false,
      style: { "width": "100%" },
      onSelect: $options.handleSelection
    }, {
      default: withCtx(({ item }) => [
        createBaseVNode("span", _hoisted_1, toDisplayString(item.description), 1)
      ]),
      _: 1
    }, 8, ["modelValue", "fetch-suggestions", "onSelect"])
  ]);
}
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __unplugin_components_1 as _ };
