var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { e as useApi } from "./index.4ea6d167.js";
import { r as ref } from "./vendor.11f8b2c5.js";
function useTemplate() {
  const api = useApi();
  const templates = ref([]);
  const template = ref(void 0);
  const fetchTemplateList = async () => {
    try {
      const { data } = await api.get(`templates`);
      templates.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchTemplate = async (id) => {
    try {
      const { data } = await api.get(`templates/${id}`);
      template.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const createTemplate = async (data) => {
    return await api.post(`templates`, __spreadValues({}, data));
  };
  const dropTemplate = async (id) => {
    return await api.delete(`templates/${id}`);
  };
  const updateTemplate = async (id, data) => {
    return await api.put(`templates/${id}`, __spreadValues({}, data));
  };
  return {
    templates,
    template,
    fetchTemplateList,
    createTemplate,
    dropTemplate,
    updateTemplate,
    fetchTemplate
  };
}
export { useTemplate as u };
