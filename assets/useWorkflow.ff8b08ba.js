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
import { F as FileSaver_min } from "./FileSaver.min.c8bfead3.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
import { e as useApi, b as useNotyf } from "./index.4ea6d167.js";
import { r as ref } from "./vendor.11f8b2c5.js";
function useWorkflow() {
  const api = useApi();
  const { warning, success, error, dismissAll } = useNotyf();
  const workflows = ref([]);
  const workflow = ref();
  const steps = ref([]);
  const groups = ref([]);
  const step = ref();
  const stepFields = ref([]);
  const workflowPage = ref({
    data: [],
    current_page: 0,
    total: 0,
    per_page: 5
  });
  const settings = ref({
    billItems: [],
    itemsFields: [],
    workflowProcess: {
      id: 0,
      name: "",
      billable: false,
      description: "",
      jurisdiction_type: "",
      has_items: false,
      has_predefined_bill: false,
      bill_step: 0,
      items_step: 0,
      items_table_description: "",
      items_table_name: "",
      has_certificate: false,
      enforce_jurisdiction: false,
      vatable: false,
      auto_approves: false,
      document_initials: ""
    },
    workflowProcesses: [],
    steps: []
  });
  const createWorkflow = async (data) => {
    return await api.post("workflow-processes", __spreadValues({}, data));
  };
  const fetchWorkflows = async (page = 1) => {
    try {
      const { data } = await api.get(`workflow-processes?page=${page}`);
      workflowPage.value = data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchWorkflow = async (id) => {
    try {
      const { data } = await api.get(`workflow-processes/${id}`);
      workflow.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const updateWorkflow = async (id, data) => {
    return await api.put(`workflow-processes/${id}`, __spreadValues({}, data));
  };
  const deleteWorkflow = async (id) => {
    try {
      const { data } = await api.delete(`workflow-processes/${id}`);
      console.log(data);
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchWorkflowSteps = async (id) => {
    try {
      const { data } = await api.get(`workflow-processes/${id}/steps`);
      console.log(data);
      steps.value = data.data.steps;
      groups.value = data.data.groups;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const createWorkflowStep = async (id, _data) => {
    return await api.post(`workflow-processes/${id}/steps`, __spreadValues({}, _data));
  };
  const fetchStepDetails = async (workflowId, stepId) => {
    try {
      const { data } = await api.get(`workflow-processes/${workflowId}/steps/${stepId}`);
      step.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchStepFields = async (workflowId, stepId) => {
    try {
      const { data } = await api.get(`workflow-processes/${workflowId}/steps/${stepId}/fields`);
      stepFields.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const createStepField = async (workflowId, stepId, data) => {
    return await api.post(`workflow-processes/${workflowId}/steps/${stepId}/fields`, __spreadValues({}, data));
  };
  const publishWorkflow = async (workflowId) => {
    return await api.post(`workflow-processes/${workflowId}/publish`);
  };
  const updateWorkflowStep = async (stepId, workflowId, data) => {
    return await api.put(`workflow-processes/${workflowId}/steps/${stepId}`, __spreadValues({}, data));
  };
  const deleteWorkflowStep = async (stepId, workflowId) => {
    try {
      const { data } = await api.delete(`workflow-processes/${workflowId}/steps/${stepId}`);
      success("Workflow Step Deleted!");
    } catch ({ response }) {
      dismissAll();
      error("Error Occurred!");
    }
  };
  const updateWorkflowField = async (workflowId, stepId, fieldId, data) => {
    return await api.put(`workflow-processes/${workflowId}/steps/${stepId}/fields/${fieldId}`, __spreadValues({}, data));
  };
  const deleteWorkflowField = async (workflowId, stepId, fieldId) => {
    try {
      const { data } = await api.delete(`workflow-processes/${workflowId}/steps/${stepId}/fields/${fieldId}`);
      success("Workflow Field Deleted!");
    } catch ({ response }) {
      dismissAll();
      error("Error Occurred!");
    }
  };
  const workflowSettings = async (workflowId) => {
    try {
      const { data } = await api.get(`workflow-processes/${workflowId}/settings`);
      settings.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const updateWorkflowSettings = async (workflowId, data) => {
    return await api.post(`workflow-processes/${workflowId}/settings`, __spreadValues({}, data));
  };
  const exportWorkflows = async (type) => {
    try {
      isLoading.value = true;
      loadingText.value = "Exporting...";
      const { data } = await api.get(`workflow-processes-to-excel`, {
        responseType: "blob"
      }).finally(() => {
        isLoading.value = false;
      });
      success("Export Success, Downloading Workflows Document");
      const today = new Date();
      const _date = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
      const file_name = `${_date}-workflows.csv`;
      FileSaver_min.exports.saveAs(data, file_name);
    } catch (e) {
      isLoading.value = false;
      error("Export Error, Try again!");
    }
  };
  return {
    workflows,
    workflowPage,
    workflow,
    steps,
    groups,
    step,
    stepFields,
    settings,
    fetchWorkflow,
    createWorkflow,
    fetchWorkflows,
    fetchWorkflowSteps,
    createWorkflowStep,
    fetchStepDetails,
    fetchStepFields,
    createStepField,
    deleteWorkflow,
    updateWorkflow,
    publishWorkflow,
    deleteWorkflowStep,
    updateWorkflowStep,
    updateWorkflowField,
    deleteWorkflowField,
    workflowSettings,
    updateWorkflowSettings,
    exportWorkflows
  };
}
export { useWorkflow as u };
