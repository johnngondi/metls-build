import { F as FileSaver_min } from "./FileSaver.min.c8bfead3.js";
import { i as isLoading, l as loadingText } from "./loaderState.8b0078f1.js";
import { e as useApi, b as useNotyf } from "./index.256f70c3.js";
import { r as ref, I as onMounted } from "./vendor.11f8b2c5.js";
function useJuris() {
  const api = useApi();
  const notf = useNotyf();
  ref({
    data: [],
    current_page: 1,
    total: 0,
    per_page: 5
  });
  const jurisdictionTypes = ref([]);
  const jurisdictions = ref([]);
  const jurisdiction = ref(null);
  const fetchJurisTypes = async () => {
    try {
      const { data } = await api.get(`jurisdiction-types`);
      jurisdictionTypes.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchJurisdictions = async (type) => {
    try {
      const { data } = await api.get(`jurisdictions?type=${type}`);
      jurisdictions.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchJurisdiction = async (id) => {
    try {
      const { data } = await api.get(`jurisdictions/${id}`);
      jurisdiction.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const createJurisdiction = async (data) => {
    return await api.post(`jurisdictions`, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };
  const dropJurisdiction = async (id) => {
    return await api.delete(`jurisdictions/${id}`);
  };
  const updateJurisdiction = async (id, data) => {
    return await api.put(`jurisdictions/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  };
  const exportJuris = async (type) => {
    try {
      isLoading.value = true;
      loadingText.value = "Exporting...";
      const { data } = await api.get(`jurisdictions-to-excel?type=${type}`, {
        responseType: "blob"
      }).finally(() => {
        isLoading.value = false;
      });
      notf.success("Export Success, Downloading Jurisdictions Document");
      const today = new Date();
      const _date = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
      const file_name = `${_date}-jurisdictions.csv`;
      FileSaver_min.exports.saveAs(data, file_name);
    } catch (error) {
      isLoading.value = false;
      notf.error("Export Error, Try again!");
    }
  };
  onMounted(() => {
    fetchJurisTypes();
  });
  return {
    jurisdictionTypes,
    jurisdictions,
    jurisdiction,
    fetchJurisTypes,
    fetchJurisdictions,
    fetchJurisdiction,
    createJurisdiction,
    dropJurisdiction,
    updateJurisdiction,
    exportJuris
  };
}
export { useJuris as u };
