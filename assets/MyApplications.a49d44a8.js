import { u as useApply } from "./useApply.4fc76bc2.js";
import { d as defineComponent, h as computed, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, s as createVNode, t as withCtx, f as createBaseVNode, A as toDisplayString, z as createTextVNode } from "./vendor.11f8b2c5.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "center is-align-middle" }, null, -1);
const _sfc_main = defineComponent({
  __name: "MyApplications",
  setup(__props) {
    const { myApplications, fetchMyApplications, workflowStatus } = useApply();
    const data = computed(() => {
      var _a;
      return (_a = myApplications.value) == null ? void 0 : _a.data;
    });
    computed(() => {
      var _a;
      return (_a = myApplications.value) == null ? void 0 : _a.total;
    });
    const getStatus = (status) => {
      return workflowStatus(status || 0);
    };
    onMounted(() => {
      fetchMyApplications();
    });
    return (_ctx, _cache) => {
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_el_table = resolveComponent("el-table");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_table, {
          border: "",
          data: data.value,
          "empty-text": "No Applications!",
          style: { "height": "100%" },
          stripe: ""
        }, {
          default: withCtx(() => [
            createVNode(_component_el_table_column, { width: "50" }, {
              default: withCtx(({}) => [
                createVNode(_component_el_checkbox)
              ]),
              _: 1
            }),
            createVNode(_component_el_table_column, {
              prop: "title",
              label: "Application Title"
            }, {
              default: withCtx(({ row }) => {
                var _a;
                return [
                  createBaseVNode("span", null, toDisplayString(((_a = row.workflow_process) == null ? void 0 : _a.name) || "N/A"), 1)
                ];
              }),
              _: 1
            }),
            createVNode(_component_el_table_column, {
              prop: "date",
              label: "Applied On"
            }, {
              default: withCtx(({ row }) => [
                createBaseVNode("span", null, toDisplayString(_ctx.$filters.bDate(row.created_at)), 1)
              ]),
              _: 1
            }),
            createVNode(_component_el_table_column, {
              prop: "status",
              label: "Status"
            }, {
              default: withCtx(({ row }) => [
                createBaseVNode("span", null, toDisplayString(getStatus(row.status)), 1)
              ]),
              _: 1
            }),
            createVNode(_component_el_table_column, {
              prop: "user",
              label: "Applicant"
            }, {
              default: withCtx(({ row }) => {
                var _a, _b, _c;
                return [
                  createBaseVNode("span", null, toDisplayString(((_a = row.applicant) == null ? void 0 : _a.name) || ((_b = row.applicant) == null ? void 0 : _b.first_name)), 1),
                  createBaseVNode("p", null, toDisplayString((_c = row.applicant) == null ? void 0 : _c.email), 1)
                ];
              }),
              _: 1
            }),
            createVNode(_component_el_table_column, { label: "Actions" }, {
              default: withCtx(({ row }) => [
                createVNode(_component_RouterLink, {
                  class: "is-primary",
                  to: { name: "home-application-id", params: { id: row.id } }
                }, {
                  default: withCtx(() => [
                    createTextVNode("View Application")
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["data"]),
        _hoisted_1
      ]);
    };
  }
});
export { _sfc_main as _ };
