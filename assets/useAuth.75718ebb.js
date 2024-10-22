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
import { r as ref, I as onMounted } from "./vendor.11f8b2c5.js";
function useAuth() {
  const permissions = ref([]);
  const roles = ref([]);
  const userGroups = ref([]);
  const userData2 = ref();
  const users = ref([]);
  const role = ref();
  const api = useApi();
  const fetchPermissions = async () => {
    try {
      const { data } = await api.get("permissions");
      permissions.value = data.data.permissions;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchRoles = async (group) => {
    try {
      const { data } = await api.get(`roles?group=${group}`);
      roles.value = data.data.roles;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchUserGroups = async () => {
    try {
      const { data } = await api.get("user-groups");
      userGroups.value = data.data.groups;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchUsers = async () => {
    try {
      const { data } = await api.get("users");
      users.value = data.data.users;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const fetchUserById = async (id) => {
    try {
      const { data } = await api.get(`users/${id}`);
      userData2.value = data.data;
      console.log(data);
    } catch ({ response }) {
      console.log(response);
    }
  };
  const updateUser = async (id, data) => {
    return await api.put(`users/${id}`, __spreadValues({}, data));
  };
  const createUser = async (data) => {
    return await api.post("users", __spreadValues({}, data));
  };
  const createRole = async (data) => {
    return await api.post("roles", __spreadValues({}, data));
  };
  const fetchRole = async (id) => {
    try {
      const { data } = await api.get(`roles/${id}`);
      role.value = data.data;
    } catch ({ response }) {
      console.log(response);
    }
  };
  const updateRole = async (roleId, data) => {
    return await api.put(`roles/${roleId}`, data);
  };
  onMounted(() => {
    fetchPermissions();
    fetchUserGroups();
  });
  return {
    permissions,
    roles,
    userGroups,
    userData: userData2,
    users,
    role,
    fetchRoles,
    fetchUsers,
    fetchUserById,
    fetchRole,
    updateUser,
    createUser,
    createRole,
    updateRole
  };
}
export { useAuth as u };
