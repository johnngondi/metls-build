import { _ as _export_sfc, c as __unplugin_components_0$1 } from "./index.4ea6d167.js";
import { a as activePanel, _ as _sfc_main$6, b as _sfc_main$7, c as _sfc_main$8, d as _sfc_main$9, e as _sfc_main$a, f as _sfc_main$b } from "./activePanelState.49edee4b.js";
import { u as useViaPlaceholderError, _ as _sfc_main$5 } from "./VAvatar.c1fa75a5.js";
import { _ as _sfc_main$c } from "./Navbar.fefeaebe.js";
import { d as defineComponent, U as useI18n, u as useStorage, a7 as watch, o as openBlock, b as createElementBlock, f as createBaseVNode, A as toDisplayString, v as unref, ah as withDirectives, aJ as vModelRadio, aa as isRef, n as normalizeClass, r as ref, s as createVNode, z as createTextVNode, C as createStaticVNode, x as createBlock, t as withCtx, F as useRoute, h as computed, m as resolveComponent, ag as resolveDirective, am as vModelText, K as Fragment, J as renderList, ak as normalizeProps, al as guardReactiveProps, y as createCommentVNode, B as renderSlot } from "./vendor.11f8b2c5.js";
import { _ as __unplugin_components_0 } from "./VDropdown.dd19268e.js";
import { p as pageTitle } from "./navbarLayoutState.37d961b9.js";
import { i as isLoading } from "./loaderState.8b0078f1.js";
import "./useAppNotification.a2443950.js";
import "./VIcon.580f0211.js";
var _imports_0$2 = "/images/icons/flags/united-states-of-america.svg";
var _imports_1$1 = "/images/icons/flags/france.svg";
var _imports_2$1 = "/images/icons/flags/spain.svg";
var _imports_3 = "/images/icons/flags/germany.svg";
var _imports_4 = "/images/icons/flags/mexico.svg";
var _imports_5 = "/images/icons/flags/china.svg";
var _imports_6 = "/assets/languages.e0fe0d4d.svg";
var _imports_7 = "/assets/languages-dark.503c0ba0.svg";
var LanguagesPanel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$4 = { class: "right-panel" };
const _hoisted_2$4 = { class: "right-panel-head" };
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_4$4 = [
  _hoisted_3$4
];
const _hoisted_5$4 = { class: "right-panel-body has-slimscroll" };
const _hoisted_6$3 = { class: "languages-boxes" };
const _hoisted_7$3 = { class: "language-box" };
const _hoisted_8$3 = { class: "language-option" };
const _hoisted_9$3 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0$2,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_10$3 = { class: "language-box" };
const _hoisted_11$3 = { class: "language-option" };
const _hoisted_12$3 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_1$1,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_13$3 = { class: "language-box" };
const _hoisted_14$3 = { class: "language-option" };
const _hoisted_15$3 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_2$1,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_16$3 = { class: "language-box" };
const _hoisted_17$3 = { class: "language-option" };
const _hoisted_18$3 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_3,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_19$3 = { class: "language-box" };
const _hoisted_20$3 = { class: "language-option" };
const _hoisted_21$3 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_4,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_22$3 = { class: "language-box" };
const _hoisted_23$3 = { class: "language-option" };
const _hoisted_24$3 = /* @__PURE__ */ createBaseVNode("div", { class: "language-option-inner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_5,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("div", { class: "indicator" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:check"
    })
  ])
], -1);
const _hoisted_25$3 = /* @__PURE__ */ createBaseVNode("div", { class: "img-wrap has-text-centered" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    class: "light-image",
    src: _imports_6,
    alt: ""
  }),
  /* @__PURE__ */ createBaseVNode("img", {
    class: "dark-image",
    src: _imports_7,
    alt: ""
  })
], -1);
const _sfc_main$4 = defineComponent({
  __name: "LanguagesPanel",
  setup(__props) {
    const { locale, t } = useI18n();
    const defaultLocale = useStorage("locale", (navigator == null ? void 0 : navigator.language) || "en");
    watch(locale, () => {
      defaultLocale.value = locale.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "languages-panel",
        class: normalizeClass([[unref(activePanel) === "languages" && "is-active"], "right-panel-wrapper is-languages"])
      }, [
        createBaseVNode("div", {
          class: "panel-overlay",
          onClick: _cache[0] || (_cache[0] = ($event) => activePanel.value = "none")
        }),
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("div", _hoisted_2$4, [
            createBaseVNode("h3", null, toDisplayString(unref(t)("select-language")), 1),
            createBaseVNode("a", {
              class: "close-panel",
              onClick: _cache[1] || (_cache[1] = ($event) => activePanel.value = "none")
            }, _hoisted_4$4)
          ]),
          createBaseVNode("div", _hoisted_5$4, [
            createBaseVNode("div", _hoisted_6$3, [
              createBaseVNode("div", _hoisted_7$3, [
                createBaseVNode("div", _hoisted_8$3, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "en",
                    checked: ""
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_9$3
                ])
              ]),
              createBaseVNode("div", _hoisted_10$3, [
                createBaseVNode("div", _hoisted_11$3, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "fr"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_12$3
                ])
              ]),
              createBaseVNode("div", _hoisted_13$3, [
                createBaseVNode("div", _hoisted_14$3, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "es"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_15$3
                ])
              ]),
              createBaseVNode("div", _hoisted_16$3, [
                createBaseVNode("div", _hoisted_17$3, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "de"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_18$3
                ])
              ]),
              createBaseVNode("div", _hoisted_19$3, [
                createBaseVNode("div", _hoisted_20$3, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "es-MX"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_21$3
                ])
              ]),
              createBaseVNode("div", _hoisted_22$3, [
                createBaseVNode("div", _hoisted_23$3, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(locale) ? locale.value = $event : null),
                    type: "radio",
                    name: "language_selection",
                    value: "zh-CN"
                  }, null, 512), [
                    [vModelRadio, unref(locale)]
                  ]),
                  _hoisted_24$3
                ])
              ])
            ]),
            _hoisted_25$3
          ])
        ])
      ], 2);
    };
  }
});
var _imports_0$1 = "/assets/avatar.2beb57eb.svg";
var ActivityPanel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "right-panel" };
const _hoisted_2$3 = { class: "right-panel-head" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("h3", null, "Activity", -1);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_5$3 = [
  _hoisted_4$3
];
const _hoisted_6$2 = { class: "tabs-wrapper is-triple-slider is-squared" };
const _hoisted_7$2 = { class: "tabs-inner" };
const _hoisted_8$2 = { class: "tabs" };
const _hoisted_9$2 = /* @__PURE__ */ createBaseVNode("span", null, "Team", -1);
const _hoisted_10$2 = [
  _hoisted_9$2
];
const _hoisted_11$2 = /* @__PURE__ */ createBaseVNode("span", null, "Projects", -1);
const _hoisted_12$2 = [
  _hoisted_11$2
];
const _hoisted_13$2 = /* @__PURE__ */ createBaseVNode("span", null, "Schedule", -1);
const _hoisted_14$2 = [
  _hoisted_13$2
];
const _hoisted_15$2 = /* @__PURE__ */ createBaseVNode("li", { class: "tab-naver" }, null, -1);
const _hoisted_16$2 = { class: "right-panel-body" };
const _hoisted_17$2 = { class: "team-card" };
const _hoisted_18$2 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Joshua S."),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:map-pin"
    }),
    /* @__PURE__ */ createTextVNode(" Las Vegas, NV ")
  ])
], -1);
const _hoisted_19$2 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-right"
  })
], -1);
const _hoisted_20$2 = { class: "team-card" };
const _hoisted_21$2 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Melany W."),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:map-pin"
    }),
    /* @__PURE__ */ createTextVNode(" San Jose, CA ")
  ])
], -1);
const _hoisted_22$2 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-right"
  })
], -1);
const _hoisted_23$2 = { class: "team-card" };
const _hoisted_24$2 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Esteban C."),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:map-pin"
    }),
    /* @__PURE__ */ createTextVNode(" Miami, FL ")
  ])
], -1);
const _hoisted_25$2 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-right"
  })
], -1);
const _hoisted_26$2 = { class: "team-card" };
const _hoisted_27$2 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Tara S."),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:map-pin"
    }),
    /* @__PURE__ */ createTextVNode(" New York, NY ")
  ])
], -1);
const _hoisted_28$2 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-right"
  })
], -1);
const _hoisted_29$2 = { class: "project-card" };
const _hoisted_30$2 = { class: "project-inner" };
const _hoisted_31$2 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "The slicer project"),
  /* @__PURE__ */ createBaseVNode("span", null, "getslicer.io")
], -1);
const _hoisted_32$2 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-right"
  })
], -1);
const _hoisted_33$2 = { class: "project-foot" };
const _hoisted_34$2 = /* @__PURE__ */ createBaseVNode("progress", {
  class: "progress is-primary is-tiny",
  value: "31",
  max: "100"
}, " 31% ", -1);
const _hoisted_35$2 = { class: "foot-stats" };
const _hoisted_36$1 = /* @__PURE__ */ createBaseVNode("span", null, "5 / 24", -1);
const _hoisted_37$1 = { class: "avatar-stack" };
const _hoisted_38$1 = { class: "project-card" };
const _hoisted_39$1 = { class: "project-inner" };
const _hoisted_40$1 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Metamovies reworked"),
  /* @__PURE__ */ createBaseVNode("span", null, "metamovies.co")
], -1);
const _hoisted_41$1 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-right"
  })
], -1);
const _hoisted_42$1 = { class: "project-foot" };
const _hoisted_43$1 = /* @__PURE__ */ createBaseVNode("progress", {
  class: "progress is-primary is-tiny",
  value: "84",
  max: "100"
}, " 84% ", -1);
const _hoisted_44$1 = { class: "foot-stats" };
const _hoisted_45$1 = /* @__PURE__ */ createBaseVNode("span", null, "28 / 31", -1);
const _hoisted_46$1 = { class: "avatar-stack" };
const _hoisted_47$1 = { class: "project-card" };
const _hoisted_48$1 = { class: "project-inner" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Fast Pizza redesign"),
  /* @__PURE__ */ createBaseVNode("span", null, "fastpizza.com")
], -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("a", { class: "link" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:arrow-right"
  })
], -1);
const _hoisted_51 = { class: "project-foot" };
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("progress", {
  class: "progress is-primary is-tiny",
  value: "60",
  max: "100"
}, " 60% ", -1);
const _hoisted_53 = { class: "foot-stats" };
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("span", null, "25 / 39", -1);
const _hoisted_55 = { class: "avatar-stack" };
const _hoisted_56 = { class: "icon-timeline" };
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("div", { class: "timeline-item" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "timeline-icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:phone-call"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "timeline-content" }, [
    /* @__PURE__ */ createBaseVNode("p", null, "Call Danny at Colby's"),
    /* @__PURE__ */ createBaseVNode("span", null, "Today - 11:30am")
  ])
], -1);
const _hoisted_58 = { class: "timeline-item" };
const _hoisted_59 = { class: "timeline-icon" };
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("div", { class: "timeline-content" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "Meeting with Alice"),
  /* @__PURE__ */ createBaseVNode("span", null, "Today - 01:00pm")
], -1);
const _hoisted_61 = /* @__PURE__ */ createStaticVNode('<div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></div><div class="timeline-content"><p>Answer Annie&#39;s message</p><span>Today - 01:45pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></div><div class="timeline-content"><p>Send new campaign</p><span>Today - 02:30pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:smile"></i></div><div class="timeline-content"><p>Project review</p><span>Today - 03:30pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Trisha Jackson</p><span>Today - 05:00pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:feather"></i></div><div class="timeline-content"><p>Write proposal for Don</p><span>Today - 06:00pm</span></div></div>', 5);
const _sfc_main$3 = defineComponent({
  __name: "ActivityPanel",
  setup(__props) {
    const activeTab = ref("team");
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$5;
      return openBlock(), createElementBlock("div", {
        id: "activity-panel",
        class: normalizeClass([[unref(activePanel) === "activity" && "is-active"], "right-panel-wrapper is-activity"])
      }, [
        createBaseVNode("div", {
          class: "panel-overlay",
          onClick: _cache[0] || (_cache[0] = ($event) => activePanel.value = "none")
        }),
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", _hoisted_2$3, [
            _hoisted_3$3,
            createBaseVNode("a", {
              class: "close-panel",
              onClick: _cache[1] || (_cache[1] = ($event) => activePanel.value = "none")
            }, _hoisted_5$3)
          ]),
          createBaseVNode("div", _hoisted_6$2, [
            createBaseVNode("div", _hoisted_7$2, [
              createBaseVNode("div", _hoisted_8$2, [
                createBaseVNode("ul", null, [
                  createBaseVNode("li", {
                    class: normalizeClass([activeTab.value === "team" && "is-active"])
                  }, [
                    createBaseVNode("a", {
                      onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "team")
                    }, _hoisted_10$2)
                  ], 2),
                  createBaseVNode("li", {
                    class: normalizeClass([activeTab.value === "projects" && "is-active"])
                  }, [
                    createBaseVNode("a", {
                      onClick: _cache[3] || (_cache[3] = ($event) => activeTab.value = "projects")
                    }, _hoisted_12$2)
                  ], 2),
                  createBaseVNode("li", {
                    class: normalizeClass([activeTab.value === "schedule" && "is-active"])
                  }, [
                    createBaseVNode("a", {
                      onClick: _cache[4] || (_cache[4] = ($event) => activeTab.value = "schedule")
                    }, _hoisted_14$2)
                  ], 2),
                  _hoisted_15$2
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_16$2, [
              createBaseVNode("div", {
                id: "team-side-tab",
                class: normalizeClass(["tab-content", [activeTab.value === "team" && "is-active"]])
              }, [
                createBaseVNode("div", _hoisted_17$2, [
                  createVNode(_component_VAvatar, { picture: "/@src/assets/illustrations/components/avatar.svg" }),
                  _hoisted_18$2,
                  _hoisted_19$2
                ]),
                createBaseVNode("div", _hoisted_20$2, [
                  createVNode(_component_VAvatar, { picture: "/@src/assets/illustrations/components/avatar.svg" }),
                  _hoisted_21$2,
                  _hoisted_22$2
                ]),
                createBaseVNode("div", _hoisted_23$2, [
                  createVNode(_component_VAvatar, { picture: "/@src/assets/illustrations/components/avatar.svg" }),
                  _hoisted_24$2,
                  _hoisted_25$2
                ]),
                createBaseVNode("div", _hoisted_26$2, [
                  createVNode(_component_VAvatar, { picture: "/@src/assets/illustrations/components/avatar.svg" }),
                  _hoisted_27$2,
                  _hoisted_28$2
                ])
              ], 2),
              createBaseVNode("div", {
                id: "projects-side-tab",
                class: normalizeClass(["tab-content", [activeTab.value === "projects" && "is-active"]])
              }, [
                createBaseVNode("div", _hoisted_29$2, [
                  createBaseVNode("div", _hoisted_30$2, [
                    createBaseVNode("img", {
                      class: "project-avatar",
                      src: _imports_0$1,
                      alt: "",
                      onErrorOnce: _cache[5] || (_cache[5] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 32),
                    _hoisted_31$2,
                    _hoisted_32$2
                  ]),
                  createBaseVNode("div", _hoisted_33$2, [
                    _hoisted_34$2,
                    createBaseVNode("div", _hoisted_35$2, [
                      _hoisted_36$1,
                      createBaseVNode("div", _hoisted_37$1, [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/@src/assets/illustrations/components/avatar.svg"
                        }),
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/@src/assets/illustrations/components/avatar.svg"
                        }),
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/@src/assets/illustrations/components/avatar.svg"
                        })
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_38$1, [
                  createBaseVNode("div", _hoisted_39$1, [
                    createBaseVNode("img", {
                      class: "project-avatar",
                      src: _imports_0$1,
                      alt: "",
                      onErrorOnce: _cache[6] || (_cache[6] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 32),
                    _hoisted_40$1,
                    _hoisted_41$1
                  ]),
                  createBaseVNode("div", _hoisted_42$1, [
                    _hoisted_43$1,
                    createBaseVNode("div", _hoisted_44$1, [
                      _hoisted_45$1,
                      createBaseVNode("div", _hoisted_46$1, [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/@src/assets/illustrations/components/avatar.svg"
                        }),
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/@src/assets/illustrations/components/avatar.svg"
                        })
                      ])
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_47$1, [
                  createBaseVNode("div", _hoisted_48$1, [
                    createBaseVNode("img", {
                      class: "project-avatar",
                      src: _imports_0$1,
                      alt: "",
                      onErrorOnce: _cache[7] || (_cache[7] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                    }, null, 32),
                    _hoisted_49,
                    _hoisted_50
                  ]),
                  createBaseVNode("div", _hoisted_51, [
                    _hoisted_52,
                    createBaseVNode("div", _hoisted_53, [
                      _hoisted_54,
                      createBaseVNode("div", _hoisted_55, [
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/@src/assets/illustrations/components/avatar.svg"
                        }),
                        createVNode(_component_VAvatar, {
                          size: "small",
                          picture: "/@src/assets/illustrations/components/avatar.svg"
                        })
                      ])
                    ])
                  ])
                ])
              ], 2),
              createBaseVNode("div", {
                id: "schedule-side-tab",
                class: normalizeClass(["tab-content", [activeTab.value === "schedule" && "is-active"]])
              }, [
                createBaseVNode("div", _hoisted_56, [
                  _hoisted_57,
                  createBaseVNode("div", _hoisted_58, [
                    createBaseVNode("div", _hoisted_59, [
                      createBaseVNode("img", {
                        class: "avatar",
                        src: _imports_0$1,
                        alt: "",
                        onErrorOnce: _cache[8] || (_cache[8] = (event) => unref(useViaPlaceholderError)(event, "150x150"))
                      }, null, 32)
                    ]),
                    _hoisted_60
                  ]),
                  _hoisted_61
                ])
              ], 2)
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _sfc_main$2 = {};
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-cloud-download"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Download"),
    /* @__PURE__ */ createBaseVNode("span", null, "Download this file")
  ])
], -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-checkmark-circle"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "View Task"),
    /* @__PURE__ */ createBaseVNode("span", null, "View related task")
  ])
], -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("hr", { class: "dropdown-divider" }, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-cloud-upload"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Update"),
    /* @__PURE__ */ createBaseVNode("span", null, "Upload a new version")
  ])
], -1);
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("a", {
  role: "menuitem",
  href: "#",
  class: "dropdown-item is-media"
}, [
  /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "lnil lnil-trash-can-alt-1"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
    /* @__PURE__ */ createBaseVNode("span", null, "Delete"),
    /* @__PURE__ */ createBaseVNode("span", null, "Delete this file")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_VDropdown = __unplugin_components_0;
  return openBlock(), createBlock(_component_VDropdown, {
    icon: "feather:more-vertical",
    class: "end-action",
    spaced: "",
    right: ""
  }, {
    content: withCtx(() => [
      _hoisted_1$2,
      _hoisted_2$2,
      _hoisted_3$2,
      _hoisted_4$2,
      _hoisted_5$2
    ]),
    _: 1
  });
}
var __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
var _imports_0 = "/images/icons/files/zip-format.svg";
var _imports_1 = "/images/icons/files/sheet.svg";
var _imports_2 = "/images/icons/files/video.svg";
var TaskPanel_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = { class: "right-panel" };
const _hoisted_2$1 = { class: "right-panel-head" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("h3", null, "Task Details", -1);
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:chevron-right"
}, null, -1);
const _hoisted_5$1 = [
  _hoisted_4$1
];
const _hoisted_6$1 = {
  class: "right-panel-body has-slimscroll",
  "data-simplebar": ""
};
const _hoisted_7$1 = { class: "task-group task-overview" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("h3", null, "Overview", -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("div", { class: "task-description" }, [
  /* @__PURE__ */ createBaseVNode("h4", null, "Build a desktop and mobile landing page wireframe"),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Videmus igitur ut conquiescere ne infantes quidem possint. Duo Reges: constructio interrete... "),
    /* @__PURE__ */ createBaseVNode("a", null, "See More")
  ])
], -1);
const _hoisted_10$1 = { class: "task-participants" };
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("h5", null, "Participants", -1);
const _hoisted_12$1 = { class: "participants-inner" };
const _hoisted_13$1 = { class: "avatar-stack" };
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("button", null, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:plus"
  })
], -1);
const _hoisted_15$1 = /* @__PURE__ */ createStaticVNode('<div class="task-group"><h3>Statistics</h3><div class="task-stats"><div class="task-stat"><i aria-hidden="true" class="iconify" data-icon="feather:clock"></i><span>5 days</span></div><div class="task-stat"><i aria-hidden="true" class="iconify" data-icon="feather:file"></i><span>3 files</span></div><div class="task-stat"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i><span>54</span></div><a><i aria-hidden="true" class="iconify" data-icon="feather:plus"></i><span>Add Checklist</span></a></div></div>', 1);
const _hoisted_16$1 = { class: "task-group" };
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("h3", null, "Files", -1);
const _hoisted_18$1 = { class: "task-files" };
const _hoisted_19$1 = { class: "file-box" };
const _hoisted_20$1 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: ""
}, null, -1);
const _hoisted_21$1 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Preliminary Sketches"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createTextVNode("3MB "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createTextVNode(" 5 days ago")
  ])
], -1);
const _hoisted_22$1 = { class: "file-box" };
const _hoisted_23$1 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1,
  alt: ""
}, null, -1);
const _hoisted_24$1 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Project Budget"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createTextVNode("0.6MB "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createTextVNode(" 8 days ago")
  ])
], -1);
const _hoisted_25$1 = { class: "file-box" };
const _hoisted_26$1 = /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_2,
  alt: ""
}, null, -1);
const _hoisted_27$1 = /* @__PURE__ */ createBaseVNode("div", { class: "meta" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "POC Demo"),
  /* @__PURE__ */ createBaseVNode("span", null, [
    /* @__PURE__ */ createTextVNode("8.75MB "),
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "fas fa-circle"
    }),
    /* @__PURE__ */ createTextVNode(" 8 days ago")
  ])
], -1);
const _hoisted_28$1 = { class: "task-group" };
const _hoisted_29$1 = /* @__PURE__ */ createBaseVNode("h3", null, "Messages", -1);
const _hoisted_30$1 = { class: "field has-textarea-addon" };
const _hoisted_31$1 = /* @__PURE__ */ createBaseVNode("div", { class: "control" }, [
  /* @__PURE__ */ createBaseVNode("textarea", {
    class: "textarea",
    rows: "3",
    placeholder: "Send a quick message..."
  })
], -1);
const _hoisted_32$1 = { class: "control is-textarea-addon" };
const _hoisted_33$1 = { class: "start" };
const _hoisted_34$1 = { class: "avatar-stack" };
const _hoisted_35$1 = /* @__PURE__ */ createStaticVNode('<div class="end"><a class="message-action"><i aria-hidden="true" class="iconify" data-icon="feather:smile"></i></a><a class="message-action"><i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i></a><a class="message-action"><i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i></a><a class="button v-button is-primary is-bold is-raised">Send</a></div>', 1);
const _sfc_main$1 = defineComponent({
  __name: "TaskPanel",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VAvatar = _sfc_main$5;
      const _component_FileCardDropdown = __unplugin_components_1;
      return openBlock(), createElementBlock("div", {
        id: "task-panel",
        class: normalizeClass([[unref(activePanel) === "task" && "is-active"], "right-panel-wrapper is-task"])
      }, [
        createBaseVNode("div", {
          class: "panel-overlay",
          onClick: _cache[0] || (_cache[0] = ($event) => activePanel.value = "none")
        }),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            _hoisted_3$1,
            createBaseVNode("a", {
              class: "close-panel",
              onClick: _cache[1] || (_cache[1] = ($event) => activePanel.value = "none")
            }, _hoisted_5$1)
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("div", _hoisted_7$1, [
              _hoisted_8$1,
              _hoisted_9$1,
              createBaseVNode("div", _hoisted_10$1, [
                _hoisted_11$1,
                createBaseVNode("div", _hoisted_12$1, [
                  createBaseVNode("div", _hoisted_13$1, [
                    createVNode(_component_VAvatar, { picture: "/@src/assets/illustrations/components/avatar.svg" }),
                    createVNode(_component_VAvatar, { picture: "/images/avatars/svg/vuero-1.svg" }),
                    createVNode(_component_VAvatar, { picture: "/@src/assets/illustrations/components/avatar.svg" })
                  ]),
                  _hoisted_14$1
                ])
              ])
            ]),
            _hoisted_15$1,
            createBaseVNode("div", _hoisted_16$1, [
              _hoisted_17$1,
              createBaseVNode("div", _hoisted_18$1, [
                createBaseVNode("div", _hoisted_19$1, [
                  _hoisted_20$1,
                  _hoisted_21$1,
                  createVNode(_component_FileCardDropdown)
                ]),
                createBaseVNode("div", _hoisted_22$1, [
                  _hoisted_23$1,
                  _hoisted_24$1,
                  createVNode(_component_FileCardDropdown)
                ]),
                createBaseVNode("div", _hoisted_25$1, [
                  _hoisted_26$1,
                  _hoisted_27$1,
                  createVNode(_component_FileCardDropdown)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_28$1, [
              _hoisted_29$1,
              createBaseVNode("div", _hoisted_30$1, [
                _hoisted_31$1,
                createBaseVNode("div", _hoisted_32$1, [
                  createBaseVNode("div", _hoisted_33$1, [
                    createBaseVNode("div", _hoisted_34$1, [
                      createVNode(_component_VAvatar, {
                        size: "small",
                        picture: "/images/avatars/svg/vuero-1.svg"
                      })
                    ])
                  ]),
                  _hoisted_35$1
                ])
              ])
            ])
          ])
        ])
      ], 2);
    };
  }
});
const _hoisted_1 = {
  "element-loading-text": "please wait ....",
  class: "navbar-layout"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "app-overlay" }, null, -1);
const _hoisted_3 = { class: "brand-end" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("a", null, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:box"
  })
], -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("a", null, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:cpu"
  })
], -1);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:message-circle"
}, null, -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:search"
}, null, -1);
const _hoisted_14 = [
  _hoisted_13
];
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("a", { href: "#" }, [
    /* @__PURE__ */ createBaseVNode("i", {
      "aria-hidden": "true",
      class: "iconify",
      "data-icon": "feather:settings"
    })
  ])
], -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "separator" }, null, -1);
const _hoisted_17 = { class: "title is-5" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_19 = [
  _hoisted_18
];
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:home"
}, null, -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", null, "Home", -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:home"
}, null, -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", null, "Applications", -1);
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:activity"
}, null, -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("span", null, "Dashboards", -1);
const _hoisted_26 = [
  _hoisted_24,
  _hoisted_25
];
const _hoisted_27 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", null, "Layouts", -1);
const _hoisted_29 = [
  _hoisted_27,
  _hoisted_28
];
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:search"
}, null, -1);
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("span", null, "Search", -1);
const _hoisted_32 = [
  _hoisted_30,
  _hoisted_31
];
const _hoisted_33 = { class: "field" };
const _hoisted_34 = { class: "control has-icon" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("div", { class: "form-icon" }, [
  /* @__PURE__ */ createBaseVNode("i", {
    "aria-hidden": "true",
    class: "iconify",
    "data-icon": "feather:search"
  })
], -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:x"
}, null, -1);
const _hoisted_37 = [
  _hoisted_36
];
const _hoisted_38 = {
  key: 0,
  class: "search-results has-slimscroll is-active"
};
const _hoisted_39 = { class: "meta" };
const _hoisted_40 = { class: "view-wrapper has-top-nav" };
const _hoisted_41 = { class: "page-content-wrapper" };
const _hoisted_42 = {
  key: 1,
  class: "page-content is-relative"
};
const _hoisted_43 = { class: "is-navbar-lg" };
const _hoisted_44 = { class: "page-title has-text-centered" };
const _hoisted_45 = { class: "title-wrap" };
const _hoisted_46 = { class: "title is-4" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("i", {
  "aria-hidden": "true",
  class: "iconify",
  "data-icon": "feather:grid"
}, null, -1);
const _hoisted_48 = [
  _hoisted_47
];
const _sfc_main = defineComponent({
  __name: "NavbarLayout",
  props: {
    theme: { default: "default" },
    nowrap: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const appName = "METLS";
    const route = useRoute();
    const filter = ref("");
    const isMobileSidebarOpen = ref(false);
    const activeMobileSubsidebar = ref("dashboard");
    const activeSubnav = ref("closed");
    const filteredUsers = computed(() => {
      if (!filter.value) {
        return [];
      }
      return [];
    });
    function toggleSubnav(subnav) {
      if (activeSubnav.value === subnav) {
        activeSubnav.value = "closed";
      } else {
        activeSubnav.value = subnav;
      }
    }
    watch(() => route.fullPath, () => {
      activeSubnav.value = "closed";
      isMobileSidebarOpen.value = false;
    });
    return (_ctx, _cache) => {
      const _component_AnimatedLogo = __unplugin_components_0$1;
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_NotificationsMobileDropdown = _sfc_main$6;
      const _component_UserProfileDropdown = _sfc_main$7;
      const _component_MobileNavbar = _sfc_main$8;
      const _component_MobileSidebar = _sfc_main$9;
      const _component_ToolbarNotification = _sfc_main$a;
      const _component_Toolbar = _sfc_main$b;
      const _component_VAvatar = _sfc_main$5;
      const _component_Navbar = _sfc_main$c;
      const _component_LanguagesPanel = _sfc_main$4;
      const _component_ActivityPanel = _sfc_main$3;
      const _component_TaskPanel = _sfc_main$1;
      const _directive_loading = resolveDirective("loading");
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createVNode(_component_MobileNavbar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[0] || (_cache[0] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          brand: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "index" },
              class: "navbar-item is-brand"
            }, {
              default: withCtx(() => [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_3, [
              createVNode(_component_NotificationsMobileDropdown),
              createVNode(_component_UserProfileDropdown, { right: true })
            ])
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_MobileSidebar, {
          "is-open": isMobileSidebarOpen.value,
          onToggle: _cache[6] || (_cache[6] = ($event) => isMobileSidebarOpen.value = !isMobileSidebarOpen.value)
        }, {
          links: withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "dashboard" && "is-active"]),
                onClick: _cache[1] || (_cache[1] = ($event) => activeMobileSubsidebar.value = "dashboard")
              }, _hoisted_5, 2)
            ]),
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                class: normalizeClass([activeMobileSubsidebar.value === "layouts" && "is-active"]),
                onClick: _cache[2] || (_cache[2] = ($event) => activeMobileSubsidebar.value = "layouts")
              }, _hoisted_7, 2)
            ]),
            createBaseVNode("li", {
              class: normalizeClass([activeMobileSubsidebar.value === "elements" && "is-active"]),
              onClick: _cache[3] || (_cache[3] = ($event) => activeMobileSubsidebar.value = "elements")
            }, _hoisted_9, 2),
            createBaseVNode("li", {
              class: normalizeClass([activeMobileSubsidebar.value === "components" && "is-active"]),
              onClick: _cache[4] || (_cache[4] = ($event) => activeMobileSubsidebar.value = "components")
            }, _hoisted_11, 2),
            createBaseVNode("li", null, [
              createVNode(_component_RouterLink, { to: { name: "app" } }, {
                default: withCtx(() => [
                  _hoisted_12
                ]),
                _: 1
              })
            ])
          ]),
          "bottom-links": withCtx(() => [
            createBaseVNode("li", null, [
              createBaseVNode("a", {
                onClick: _cache[5] || (_cache[5] = ($event) => activePanel.value = "search")
              }, _hoisted_14)
            ]),
            _hoisted_15
          ]),
          _: 1
        }, 8, ["is-open"]),
        createVNode(_component_Navbar, {
          theme: props.theme
        }, {
          title: withCtx(() => [
            createVNode(_component_RouterLink, {
              to: { name: "home" },
              class: "brand"
            }, {
              default: withCtx(() => [
                createVNode(_component_AnimatedLogo, {
                  width: "38px",
                  height: "38px"
                })
              ]),
              _: 1
            }),
            _hoisted_16,
            createBaseVNode("h1", _hoisted_17, toDisplayString(unref(appName)), 1)
          ]),
          toolbar: withCtx(() => [
            createVNode(_component_Toolbar, { class: "desktop-toolbar" }, {
              default: withCtx(() => [
                createVNode(_component_ToolbarNotification),
                createBaseVNode("a", {
                  class: "toolbar-link right-panel-trigger",
                  onClick: _cache[7] || (_cache[7] = ($event) => activePanel.value = "activity")
                }, _hoisted_19)
              ]),
              _: 1
            }),
            createVNode(_component_UserProfileDropdown, { right: true })
          ]),
          links: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(["centered-links", [activeSubnav.value === "search" && "is-hidden"]])
            }, [
              createVNode(_component_RouterLink, {
                class: normalizeClass([[unref(route).path.fullPath == "/home" && "is-active"], "centered-link centered-link-toggle"]),
                to: { name: "home" }
              }, {
                default: withCtx(() => [
                  _hoisted_20,
                  _hoisted_21
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(_component_RouterLink, {
                class: normalizeClass([[unref(route).path.fullPath == "/home/my-applications" && "is-active"], "centered-link centered-link-toggle"]),
                to: { name: "home-my-applications" }
              }, {
                default: withCtx(() => [
                  _hoisted_22,
                  _hoisted_23
                ]),
                _: 1
              }, 8, ["class"]),
              createBaseVNode("a", {
                class: normalizeClass([[
                  (activeSubnav.value === "home" || unref(route).path.startsWith("/navbar/dashboards")) && "is-active"
                ], "centered-link centered-link-toggle"]),
                onClick: _cache[8] || (_cache[8] = ($event) => toggleSubnav("home"))
              }, _hoisted_26, 2),
              createBaseVNode("a", {
                class: normalizeClass([[
                  (activeSubnav.value === "layouts" || unref(route).path.startsWith("/navbar/layouts")) && "is-active"
                ], "centered-link centered-link-toggle"]),
                onClick: _cache[9] || (_cache[9] = ($event) => toggleSubnav("layouts"))
              }, _hoisted_29, 2),
              createBaseVNode("a", {
                class: "centered-link centered-link-search",
                onClick: _cache[10] || (_cache[10] = ($event) => toggleSubnav("search"))
              }, _hoisted_32)
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(["centered-search", [activeSubnav.value !== "search" && "is-hidden"]])
            }, [
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("div", _hoisted_34, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => filter.value = $event),
                    type: "text",
                    class: "input is-rounded search-input",
                    placeholder: "Search records..."
                  }, null, 512), [
                    [vModelText, filter.value]
                  ]),
                  _hoisted_35,
                  createBaseVNode("div", {
                    class: "form-icon is-right",
                    onClick: _cache[12] || (_cache[12] = ($event) => toggleSubnav("search"))
                  }, _hoisted_37),
                  filteredUsers.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_38, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(filteredUsers.value, (user) => {
                      return openBlock(), createElementBlock("div", {
                        key: user.id,
                        class: "search-result"
                      }, [
                        createVNode(_component_VAvatar, normalizeProps(guardReactiveProps(_ctx.getAvatarData(user))), null, 16),
                        createBaseVNode("div", _hoisted_39, [
                          createBaseVNode("span", null, toDisplayString(user.username), 1),
                          createBaseVNode("span", null, toDisplayString(user.position), 1)
                        ])
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ])
              ])
            ], 2)
          ]),
          _: 1
        }, 8, ["theme"]),
        createVNode(_component_LanguagesPanel),
        createVNode(_component_ActivityPanel),
        createVNode(_component_TaskPanel),
        createBaseVNode("div", _hoisted_40, [
          createBaseVNode("div", _hoisted_41, [
            props.nowrap ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("div", _hoisted_42, [
              createBaseVNode("div", _hoisted_43, [
                createBaseVNode("div", _hoisted_44, [
                  createBaseVNode("div", _hoisted_45, [
                    createBaseVNode("h1", _hoisted_46, toDisplayString(unref(pageTitle)), 1)
                  ]),
                  createVNode(_component_Toolbar, { class: "mobile-toolbar" }, {
                    default: withCtx(() => [
                      createVNode(_component_ToolbarNotification),
                      createBaseVNode("a", {
                        class: "toolbar-link right-panel-trigger",
                        onClick: _cache[13] || (_cache[13] = ($event) => activePanel.value = "activity")
                      }, _hoisted_48)
                    ]),
                    _: 1
                  })
                ]),
                renderSlot(_ctx.$slots, "default")
              ])
            ]))
          ])
        ])
      ])), [
        [
          _directive_loading,
          unref(isLoading),
          void 0,
          {
            fullscreen: true,
            lock: true
          }
        ]
      ]);
    };
  }
});
export { _sfc_main as default };
