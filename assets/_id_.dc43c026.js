import { d as _sfc_main$2, b as useNotyf } from "./index.256f70c3.js";
import { _ as __unplugin_components_2 } from "./VControl.a5272cc2.js";
import { _ as _sfc_main$3 } from "./VField.897209dd.js";
import { d as defineComponent, l as useWindowScroll, a as useRouter, F as useRoute, r as ref, h as computed, I as onMounted, m as resolveComponent, o as openBlock, b as createElementBlock, f as createBaseVNode, n as normalizeClass, s as createVNode, t as withCtx, z as createTextVNode, ah as withDirectives, am as vModelText, K as Fragment, J as renderList, v as unref, x as createBlock, A as toDisplayString, q as withModifiers } from "./vendor.11f8b2c5.js";
import { u as useJuris } from "./useJuris.9d0e82c7.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
import { p as pageTitle } from "./sidebarLayoutState.9ea1d64f.js";
import "./FileSaver.min.c8bfead3.js";
var EditJuri_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "form-outer" };
const _hoisted_2 = { class: "form-header-inner" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "left" }, [
  /* @__PURE__ */ createBaseVNode("h3", null, "Edit Jurisdiction")
], -1);
const _hoisted_4 = { class: "right" };
const _hoisted_5 = { class: "buttons" };
const _hoisted_6 = { class: "form-body" };
const _hoisted_7 = { class: "form-fieldset" };
const _hoisted_8 = { class: "columns is-multiline" };
const _hoisted_9 = { class: "column is-6" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("label", null, " Jurisdiction Title", -1);
const _hoisted_11 = { class: "columns is-multiline" };
const _hoisted_12 = { class: "column is-6" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("label", null, "Document Initials", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("p", { class: "help-text" }, " Enter the initials to be shown on your Certificates, Invoices & receipts. e.g MOT for minitstry of trade ", -1);
const _hoisted_15 = { class: "column is-12" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("label", null, "Jurisdiction Logo(Emblem)", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("div", { class: "el-upload__tip" }, " jpg/png image square 500px x 500px ", -1);
const _hoisted_18 = { class: "column is-12" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("label", null, "Jurisdiction", -1);
const _hoisted_20 = { class: "column is-12" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("label", null, "Description", -1);
const _sfc_main$1 = defineComponent({
  __name: "EditJuri",
  setup(__props) {
    const { y } = useWindowScroll();
    const {
      jurisdictionTypes,
      updateJurisdiction,
      jurisdiction,
      fetchJurisdiction
    } = useJuris();
    const router = useRouter();
    const route = useRoute();
    const notf = useNotyf();
    const upload = ref();
    const juri = ref({
      title: "",
      cert_initials: "",
      jurisdiction_type: "",
      description: ""
    });
    const JuriId = computed(() => route.params.id);
    const resetForm = () => {
      juri.value = {
        title: "",
        cert_initials: "",
        jurisdiction_type: "",
        description: ""
      };
    };
    const save = async () => {
      var _a;
      isLoading.value = true;
      try {
        const { title, cert_initials, jurisdiction_type, description } = juri.value;
        let formData = new FormData();
        formData.append("title", title);
        formData.append("cert_initials", cert_initials);
        formData.append("jurisdiction_type", jurisdiction_type);
        formData.append("description", description);
        const _file = (_a = upload.value) == null ? void 0 : _a.uploadFiles[0];
        if (_file) {
          formData.append("emblem_file", _file.raw);
        }
        console.log(formData);
        await updateJurisdiction(JuriId.value, formData);
        close();
        isLoading.value = false;
        notf.success("Jurisdiction Updated");
      } catch ({ response }) {
        isLoading.value = false;
        console.log(response);
      }
    };
    const close = () => {
      resetForm();
      router.push({ name: "jurisdictions" });
    };
    const isStuck = computed(() => {
      return y.value > 30;
    });
    const handleExceed = (files) => {
      upload.value.clearFiles();
      upload.value.handleStart(files[0]);
    };
    onMounted(() => {
      isLoading.value = true;
      fetchJurisdiction(JuriId.value).then(() => {
        if (jurisdiction.value) {
          const { description, jurisdiction_type, cert_initials, title } = jurisdiction.value;
          juri.value = {
            title,
            cert_initials,
            jurisdiction_type,
            description
          };
        }
      }).finally(() => isLoading.value = false);
    });
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VControl = __unplugin_components_2;
      const _component_VField = _sfc_main$3;
      const _component_el_button = resolveComponent("el-button");
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("form", {
          class: "form-layout",
          onSubmit: _cache[4] || (_cache[4] = withModifiers(() => {
          }, ["prevent"]))
        }, [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", {
              class: normalizeClass([[isStuck.value && "is-stuck"], "form-header stuck-header"])
            }, [
              createBaseVNode("div", _hoisted_2, [
                _hoisted_3,
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(_component_VButton, {
                      light: "",
                      "dark-outlined": "",
                      onClick: close
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_VButton, {
                      color: "primary",
                      raised: "",
                      onClick: save
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Update Jurisdiction ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ], 2),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_10,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => juri.value.title = $event),
                              type: "text",
                              class: "input",
                              placeholder: "Title"
                            }, null, 512), [
                              [vModelText, juri.value.title]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_13,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => juri.value.cert_initials = $event),
                              type: "text",
                              class: "input",
                              placeholder: "Initials"
                            }, null, 512), [
                              [vModelText, juri.value.cert_initials]
                            ]),
                            _hoisted_14
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_15, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_16,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_upload, {
                              ref_key: "upload",
                              ref: upload,
                              action: "",
                              "auto-upload": false,
                              multiple: false,
                              limit: 1,
                              "on-exceed": handleExceed,
                              "list-type": "picture"
                            }, {
                              tip: withCtx(() => [
                                _hoisted_17
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_el_button, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Select Logo")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 512)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_18, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_19,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_el_select, {
                              modelValue: juri.value.jurisdiction_type,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => juri.value.jurisdiction_type = $event),
                              filterable: "",
                              clearable: "",
                              size: "large",
                              placeholder: "Select a Jurisdiction"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(jurisdictionTypes), (item) => {
                                  return openBlock(), createBlock(_component_el_option, {
                                    key: item.id,
                                    label: item.title,
                                    value: item.id
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("span", null, toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["label", "value"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createBaseVNode("div", _hoisted_20, [
                    createVNode(_component_VField, null, {
                      default: withCtx(() => [
                        _hoisted_21,
                        createVNode(_component_VControl, null, {
                          default: withCtx(() => [
                            withDirectives(createBaseVNode("textarea", {
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => juri.value.description = $event),
                              class: "textarea",
                              rows: "4",
                              placeholder: "short description of jurisdiction...",
                              autocomplete: "off",
                              autocapitalize: "off",
                              spellcheck: "true"
                            }, null, 512), [
                              [vModelText, juri.value.description]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ])
          ])
        ], 32)
      ]);
    };
  }
});
const _hoisted_1 = { class: "page-content-inner" };
const _sfc_main = defineComponent({
  __name: "[id]",
  setup(__props) {
    pageTitle.value = "Edit Jurisdiction";
    return (_ctx, _cache) => {
      const _component_EditJuri = _sfc_main$1;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_EditJuri)
      ]);
    };
  }
});
export { _sfc_main as default };
