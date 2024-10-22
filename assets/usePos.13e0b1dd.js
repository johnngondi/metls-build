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
import { e as useApi } from "./index.256f70c3.js";
import { r as ref } from "./vendor.11f8b2c5.js";
function usePos() {
  const api = useApi();
  const invoice = ref(null);
  const fetchInvoice = async (invoice_no) => {
    try {
      const { data } = await api.get(`invoices/${invoice_no}`);
      console.log(data);
      invoice.value = data.data;
    } catch (error) {
      console.log(error);
    }
  };
  const makePayment = async (invoice_no, data) => {
    return await api.post(`invoices/${invoice_no}/pay`, __spreadValues({}, data));
  };
  return {
    invoice,
    fetchInvoice,
    makePayment
  };
}
export { usePos as u };
