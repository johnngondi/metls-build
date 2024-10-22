import { d as defineComponent, F as useRoute, h as computed, I as onMounted, o as openBlock, b as createElementBlock, f as createBaseVNode, A as toDisplayString } from "./vendor.11f8b2c5.js";
import { u as useApply } from "./useApply.7c599896.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
import "./index.256f70c3.js";
const _sfc_main = defineComponent({
  __name: "verify",
  setup(__props) {
    const route = useRoute();
    const { fetchApplication, application } = useApply();
    const applicationId = computed(() => route.params.id);
    const item = computed(() => application.value);
    onMounted(() => {
      isLoading.value = true;
      loadingText.value = "Fetch Application Details...";
      fetchApplication(applicationId.value).finally(() => isLoading.value = false);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("pre", null, toDisplayString(item.value), 1)
      ]);
    };
  }
});
export { _sfc_main as default };
