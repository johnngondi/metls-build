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
import { e as useApi, b as useNotyf } from "./index.256f70c3.js";
import { r as ref } from "./vendor.11f8b2c5.js";
function useApply() {
  const api = useApi();
  const notify = useNotyf();
  const RESOURCE_URL = ref(`${"https://staging.wfp.nwrealite.app"}`);
  const UPLOAD_URL = ref(`${"https://staging.wfp.nwrealite.app/api/v1"}/uploads`);
  const myFlows = ref([]);
  const startFields = ref({
    fields: [],
    has_items: false,
    items: {
      description: "",
      fields: [],
      title: ""
    }
  });
  const myApplications = ref();
  const application = ref({
    application: void 0,
    steps: void 0,
    jurisdiction: void 0,
    applicantInfo: void 0,
    billing: void 0,
    is_parent: false,
    related: null,
    has_certificate: void 0
  });
  const applicationStep = ref();
  const applicationSteps = ref([]);
  const applicationStatus = ref(null);
  const fetchApplicationSteps = async (applicationId) => {
    try {
      const { data } = await api.get(`applications/${applicationId}/steps`);
      applicationSteps.value = data.data;
    } catch ({ response }) {
      notify.dismissAll();
      notify.error("An Error Occured!");
    }
  };
  const fetchMyworkflows = async () => {
    try {
      const { data } = await api.get("my-workflows");
      myFlows.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchMyApplications = async () => {
    try {
      const { data } = await api.get("applications");
      myApplications.value = data;
    } catch ({ response }) {
      console.log(response);
      notify.error("An Error Occured!");
    }
  };
  const fetchApplication = async (applicationId) => {
    try {
      const { data } = await api.get(`applications/${applicationId}`);
      application.value = data.data;
    } catch ({ response }) {
      console.log(response);
      notify.error("An Error Occured!");
    }
  };
  const fetchStartFields = async (flowId) => {
    try {
      const { data } = await api.get(`applications/new/${flowId}`);
      console.log(data);
      startFields.value = data.data;
    } catch ({ response }) {
      console.log(response);
      notify.error("An Error Occured!");
    }
  };
  const submitStartFields = async (flowId, data) => {
    return await api.post(`applications/new/${flowId}`, __spreadValues({}, data));
  };
  const fetchApplicationStep = async (applicationId, stepId) => {
    try {
      const { data } = await api.get(`applications/${applicationId}/fill/${stepId}`);
      applicationStep.value = data.data;
    } catch ({ response }) {
      console.log(response);
      notify.error("An Error Occured!");
    }
  };
  const submitApplicationStep = async (applicationId, stepId, data) => {
    return await api.post(`applications/${applicationId}/fill/${stepId}`, __spreadValues({}, data));
  };
  const updateApplicationStatus = async (applicationId, data) => {
    const { status: status2, comment } = data;
    return await api.post(`applications/${applicationId}/status`, {
      status: status2,
      actor_comment: comment
    });
  };
  const fetchApplicationStatus = async (applicationId) => {
    try {
      const { data } = await api.get(`applications/${applicationId}/status`);
      applicationStatus.value = data.data;
      console.log(data);
    } catch ({ response }) {
      console.log(response);
      notify.error("An Error Occured!");
    }
  };
  const status = (code) => {
    if (code == 0) {
      return "In Progress";
    } else if (code == 1) {
      return "Complete & Approved";
    } else if (code == 2) {
      return "Rejected";
    }
  };
  const uploadFiles = async (options) => {
    const { file, filename } = options;
    const data = new FormData();
    data.append(filename, file);
    return await api.post(`uploads`, data);
  };
  return {
    myFlows,
    startFields,
    myApplications,
    application,
    applicationStep,
    applicationSteps,
    applicationStatus,
    fetchMyApplications,
    fetchMyworkflows,
    fetchStartFields,
    submitStartFields,
    fetchApplication,
    fetchApplicationStep,
    submitApplicationStep,
    fetchApplicationSteps,
    workflowStatus: status,
    fetchApplicationStatus,
    RESOURCE_URL,
    UPLOAD_URL,
    updateApplicationStatus,
    uploadFiles
  };
}
export { useApply as u };
