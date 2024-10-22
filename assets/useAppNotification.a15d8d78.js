import { e as useApi } from "./index.256f70c3.js";
import { r as ref, I as onMounted } from "./vendor.11f8b2c5.js";
function useAppNotification() {
  const api = useApi();
  const notifications = ref([]);
  const getAllNotifications = async () => {
    const { data } = await api.get(`/notifications`);
    notifications.value = data.data;
  };
  const readOne = async (id) => {
    return await api.put(`/notifications/${id}`);
  };
  const readAll = async () => {
    return await api.post(`/notifications`);
  };
  onMounted(() => {
    getAllNotifications();
  });
  return {
    notifications,
    readOne,
    readAll,
    getAllNotifications
  };
}
export { useAppNotification as u };
