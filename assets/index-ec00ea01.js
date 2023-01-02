import { d as delegateEvents, g as getNextElement, i as insert, c as createComponent, N as NoHydration, r as runHydrationEvents, t as template, o as onMount, e as onCleanup, f as createRenderEffect, h as className, u as useContext, s as setAttribute, b as createContext, m as mergeProps, T as Title } from './entry-client-1ac441f3.js';
import { M } from './index-6e7c418a.js';

const _tmpl$$2 = /*#__PURE__*/template(`<main></main>`, 2);
const useTooltipPositions = () => {
  if (useTooltipPositions.applied || !globalThis.window) {
    return;
  }
  useTooltipPositions.applied = true;
  const handler = () => {
    const midHeight = globalThis.window.innerHeight >> 1;
    const midWidth = globalThis.window.innerWidth >> 1;
    const tooltips = Array.from(globalThis.document?.querySelectorAll('.cheat-sheet [role="tooltip"]'));
    tooltips.forEach(tooltip => {
      const opener = tooltip.previousSibling;
      if (opener) {
        const pos = opener.getBoundingClientRect();
        if (pos) {
          tooltip.classList.toggle('bottom', pos.bottom - (pos.height >> 1) > midHeight);
          tooltip.classList.toggle('right', pos.right - (pos.width >> 1) > midWidth);
        }
      }
    });
  };
  globalThis.window.addEventListener('resize', handler);
  globalThis.window.addEventListener('scroll', handler);
  onMount(handler);
  onCleanup(() => {
    globalThis.window.removeEventListener('resize', handler);
    globalThis.window.removeEventListener('scroll', handler);
    useTooltipPositions.applied = false;
  });
};
const Sheet = props => {
  return (() => {
    const _el$ = getNextElement(_tmpl$$2);
    _el$.$$touchmove = () => useTooltipPositions();
    _el$.$$touchstart = () => useTooltipPositions();
    _el$.$$mousemove = () => useTooltipPositions();
    insert(_el$, createComponent(NoHydration, {
      get children() {
        return props.children;
      }
    }));
    runHydrationEvents();
    return _el$;
  })();
};
delegateEvents(["mousemove", "touchstart", "touchmove"]);

const Section$1 = '';

const _tmpl$$1 = /*#__PURE__*/template(`<section class="cheat-sheet"><dl></dl></section>`, 4),
  _tmpl$2$1 = /*#__PURE__*/template(`<dt tabindex="0"></dt>`, 2),
  _tmpl$3 = /*#__PURE__*/template(`<dd role="tooltip"></dd>`, 2);
const Section = props => (() => {
  const _el$ = getNextElement(_tmpl$$1),
    _el$2 = _el$.firstChild;
  insert(_el$2, () => props.children);
  createRenderEffect(() => className(_el$2, props.class));
  return _el$;
})();
const SectionItemContext = createContext('');
const SectionItem = props => {
  return createComponent(SectionItemContext.Provider, {
    get value() {
      return props.id;
    },
    get children() {
      return props.children;
    }
  });
};
const SectionItemHead = props => {
  const id = useContext(SectionItemContext);
  return (() => {
    const _el$3 = getNextElement(_tmpl$2$1);
    setAttribute(_el$3, "aria-describedby", id);
    insert(_el$3, () => props.children);
    return _el$3;
  })();
};
const SectionItemText = props => {
  const [id] = useContext(SectionItemContext);
  return (() => {
    const _el$4 = getNextElement(_tmpl$3);
    setAttribute(_el$4, "id", id);
    insert(_el$4, () => props.children);
    return _el$4;
  })();
};

const _tmpl$ = /*#__PURE__*/template(`<br>`, 1),
  _tmpl$2 = /*#__PURE__*/template(`<a href="https://www.solidjs.com/docs/latest/api#creatememo">Docs</a>`, 2);
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "solid-cheat-sheet---apis",
    "text": "Solid Cheat Sheet - APIs"
  }, {
    "depth": 2,
    "slug": "reactive-state",
    "text": "Reactive state"
  }, {
    "depth": 2,
    "slug": "effects",
    "text": "Effects"
  }, {
    "depth": 2,
    "slug": "reactive-tracking",
    "text": "Reactive Tracking"
  }, {
    "depth": 2,
    "slug": "reactive-scope",
    "text": "Reactive Scope"
  }, {
    "depth": 2,
    "slug": "reactive-data",
    "text": "Reactive Data"
  }, {
    "depth": 2,
    "slug": "component-apis",
    "text": "Component APIs"
  }, {
    "depth": 2,
    "slug": "rendering",
    "text": "Rendering"
  }, {
    "depth": 2,
    "slug": "jsx-propvalue",
    "text": "<JSX prop={value}"
  }, {
    "depth": 2,
    "slug": "propschildrenjsx",
    "text": "/>{props.children}</JSX>"
  }, {
    "depth": 2,
    "slug": "jsx-control-flow",
    "text": "JSX Control Flow"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    a: "a",
    code: "code",
    pre: "pre",
    div: "div",
    span: "span",
    em: "em",
    strong: "strong"
  }, M(), props.components);
  return [createComponent(Title, {
    children: "Solid Cheat Sheet"
  }), createComponent(Sheet, {
    get children() {
      return [createComponent(_components.h1, {
        id: "solid-cheat-sheet---apis",
        children: "Solid Cheat Sheet - APIs"
      }), createComponent(Section, {
        get children() {
          return [createComponent(SectionItem, {
            id: "reactiveState",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.h2, {
                    id: "reactive-state",
                    children: "Reactive state"
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["In Solid.js, state is tracked inside a reactive root, which registers function calls (even if through a store getter). Effects and memos are later re-evaluated when state is updated. This allows a very precise control of reactivity.", getNextElement(_tmpl$), getNextElement(_tmpl$), "\nIt also means that evaluating reactive state outside of the reactive root, i.e. by destructuring store objects, will result in a loss of reactivity.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/guides/reactivity",
                        children: "Guide"
                      })];
                    }
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createSignal",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createSignal"
                      }), " - simple state"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " ["
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "getter"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "setter"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "] "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createSignal"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(initialValue)"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "getter"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-comment)"
                                    },
                                    children: "// reads and tracks the value if inside reactive root"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "setter"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(value) "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-comment)"
                                    },
                                    children: "// overwrites the value and triggers state updates"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["The initial value is optional, createSignal can be typed in TypeScript with a generic.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#createsignal",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createMemo",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createMemo"
                      }), " - derived state"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "getter"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createMemo"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "((lastValue) "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " memoizedValue)"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "getter"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-comment)"
                                    },
                                    children: "// reads and tracks the derived value if inside reactive root"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Derived memoized state allows you to reduce the times your effects run due to changes.", getNextElement(_tmpl$), getNextElement(_tmpl$2)];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createResource",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createResource"
                      }), " - async state"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " ["
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "resource"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " { "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "mutate"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "refetch"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " }] "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createResource"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(fetcher"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " options)"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-comment)"
                                    },
                                    children: "// or"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " ["
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "resource"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " { "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "mutate"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "refetch"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " }] "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createResource"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(source"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " fetcher"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " options)"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "fetcher()"
                      }), " is a function that receives the output of ", createComponent(_components.code, {
                        children: "source()"
                      }), ", if given, and returns a Promise that resolves to the value of the ", createComponent(_components.code, {
                        children: "resource()"
                      }), ", which also contains the properties loading (", createComponent(_components.code, {
                        children: "boolean"
                      }), ") and ", createComponent(_components.code, {
                        children: "error"
                      }), " (", createComponent(_components.code, {
                        children: "Error | undefined"
                      }), "). ", createComponent(_components.code, {
                        children: "mutate(value)"
                      }), " allows overwriting the value and ", createComponent(_components.code, {
                        children: "refetch()"
                      }), " will re-run the last call of ", createComponent(_components.code, {
                        children: "fetcher()"
                      }), ".", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#createresource",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createStore",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createStore"
                      }), " - state objects"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " ["
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "store"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "setStore"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "] "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createStore"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(initialValue)"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "store"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "."
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "nested"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ".prop "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-comment)"
                                    },
                                    children: "// is a getter that will be tracked"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "setStore"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'nested'"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'prop'"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " value)"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "setStore"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'list'"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " ["
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "2"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "]"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " value)"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Creates a reactive ", createComponent(_components.em, {
                        children: "store"
                      }), ", an object that tracks read access to all (sub-)properties and a versatile setter function to allow fine-grained manipulation.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#createStore",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "produce",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "produce"
                      }), " - local store mutation"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "setStore"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'todos'"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "reconcile"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(todos))"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Allows direct manipulation of the store object like in ", createComponent(_components.a, {
                        href: "https://immerjs.github.io/immer/",
                        children: "Immer"
                      }), ".", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#produce",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "reconcile",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "reconcile"
                      }), " - store diffing"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "setStore"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'todos'"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "reconcile"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(todos))"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Diffs store with another immutable version, e.g. from a large API response", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#reconcile",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "unwrap",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "unwrap"
                      }), " - returns data without the store"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "unwrappedStore"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "unwrap"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(store)"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Gets the data out of a store so it is no longer reactive or connected to the setter.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#unwrap",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createMutable",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createMutable"
                      }), " - store with setters"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["Wraps a store into a proxy with reactive setters, so you can use it like in ", createComponent(_components.a, {
                        href: "https://mobx.js.org/",
                        children: "MobX"
                      }), "/", createComponent(_components.a, {
                        href: "https://vuejs.org/",
                        children: "Vue"
                      }), ".", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#createMutable",
                        children: "Docs"
                      })];
                    }
                  });
                }
              })];
            }
          })];
        }
      }), createComponent(Section, {
        get children() {
          return [createComponent(SectionItem, {
            id: "effects",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.h2, {
                    id: "effects",
                    children: "Effects"
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    children: "In Solid.js, everything caused by updates inside the reactive system - DOM modifications, calling external libraries and so on - is managed inside effects."
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createEffect",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createEffect"
                      }), " - run side effect"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createEffect"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "((previous) "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "return"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "setValue"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "otherValue"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "())"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "})"
                                  });
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Runs a reactive side effect initially and then whenever a tracked state changes after rendering.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#createeffect",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "onMount",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "onMount"
                      }), " - run side effect on mount"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "onMount"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "ref"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: ".setAttribute"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "value"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "()))"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Runs a side effect only once on mount, regardless of signals used, like an untracked createEffect.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#onmount",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "onCleanup",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "onCleanup"
                      }), " - run side effects on unmount"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "onCleanup"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "connection"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: ".close"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "())"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Runs a side effect on unmount (or ", createComponent(_components.code, {
                        children: "dispose()"
                      }), " call of a reactive root created through ", createComponent(_components.code, {
                        children: "createRoot()"
                      }), ").", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#oncleanup",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "onError",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "onError"
                      }), " - run side effect on error"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "onError"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "connection"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: ".retry"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "())"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Runs a side effect on any error thrown within the reactive root. The effect callback will receive the error as argument.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#onerror",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createDeferred",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createDeferred"
                      }), " - defer signal when idle"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["Creates a new signal from an input signal that is deferred until all other side effects are run or an optional timeout is reached.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#createdeferred",
                        children: "Docs"
                      })];
                    }
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createComputed",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createComputed"
                      }), " - effect immediately before render"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["Runs a side effect like ", createComponent(_components.code, {
                        children: "createEffect()"
                      }), ", but before instead of after rendering.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#createcomputed",
                        children: "Docs"
                      })];
                    }
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createRenderEffect",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createRenderEffect"
                      }), " - effect during rendering"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["Like ", createComponent(_components.code, {
                        children: "createEffect()"
                      }), ", but is called while rendering.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#createrendereffect",
                        children: "Docs"
                      })];
                    }
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createReaction",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createReaction"
                      }), " - effect with external tracking"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "track"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createReaction"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " { "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "..."
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " })"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "track"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "signal"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "())"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Creates an effect that has an external tracking part.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#createreaction",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createSelector",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createSelector"
                      }), " - signal only when selected"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "isSelected"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createSelector"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(selectedId)"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Creates a conditional signal that only notifies subscribers when entering or exiting their key matching the value.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#createselector",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          })];
        }
      }), createComponent(Section, {
        get children() {
          return [createComponent(SectionItem, {
            id: "reactiveTracking",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.h2, {
                    id: "reactive-tracking",
                    children: "Reactive Tracking"
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    children: "Solid.js comes with a collection of tools to put you in control of what state is tracked when and from where."
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "untrack",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "untrack"
                      }), " - reads without tracking updates"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createEffect"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "console"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: ".log"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "untrack"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "a"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "()))"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Reads the signal ", createComponent(_components.code, {
                        children: "a()"
                      }), " without the effect being subscribed to changes, while still tracking everything else.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#untrack",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "batch",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "batch"
                      }), " - synchronous updates"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createEffect"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "batch"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "setB"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "setA"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(value))))"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Without batch(), the signal a() would have been updated and only then the signal b(), but using it ensures, that the notification of tracking effects are deferred until both are ready.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#batch",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "on_effect",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "on"
                      }), " - explicitly tracks updates"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createEffect"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "on"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(a"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " (a) "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "console"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: ".log"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(a"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "b"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "()))"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["The first argument is either an array of signal accessors or a single signal accessor to be tracked, the second is a function that receives the value(s) of these tracked signals and won't track any signal inside. It's basically the opposite of ", createComponent(_components.code, {
                        children: "untrack()"
                      }), ".", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#on",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "useTransition",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "useTransition"
                      }), " - batch asynchronous updates"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " ["
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "pending"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "start"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "] "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "useTransition"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "start"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "setSignal"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(newValue))"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Batches asynchronous updates in a transaction deferring commit until all processes under the same Suspense boundaries are complete. ", createComponent(_components.code, {
                        children: "start(...)"
                      }), " returns a Promise that resolves on completion.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#usetransition",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "startTransition",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "startTransition"
                      }), " - batch asynchronous updates"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "startTransition"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "setSignal"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(newValue))"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Like useTransition, just without the pending accessor.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#starttransition",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "observable",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "observable"
                      }), " - signal to rxjs observable"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "import"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " { from } "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "from"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"rxjs\""
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " ["
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "value"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "setValue"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "] "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createSignal"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "0"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ")"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "from"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "observable"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(value))"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: ".subscribe"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "..."
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ")"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Creates an observable from a signal to be consumed by any observable library like rxjs.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#observable",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "from",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "from"
                      }), " - rxjs observable to signal"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "rxValue"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "from"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(observable$)"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Creates a reactive accessor from rxjs type observables (or anything else with a subscribe method, like a svelte store), only subscribing if the signal is tracked and unsubscribing when its tracking scope is disposed.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#from",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          })];
        }
      }), createComponent(Section, {
        get children() {
          return [createComponent(SectionItem, {
            id: "reactiveScope",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.h2, {
                    id: "reactive-scope",
                    children: "Reactive Scope"
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["Solid.js uses a reactive scope to track the use of reactive state. Every use of a reactive state inside the scope is done through a function call, which registers effects to re-run on updates. Asynchronous calls like ", createComponent(_components.code, {
                        children: "Promise"
                      }), " or ", createComponent(_components.code, {
                        children: "Event"
                      }), " break out of the reactive scope, so Solid.js comes with tools to handle the scope itself."];
                    }
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createRoot",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createRoot"
                      }), " - creates tracking context"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "dispose"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createRoot"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "((dispose) "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createEffect"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "..."
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ")"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "return"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " dispose"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "})"
                                  });
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Creates a reactive scope that can manually unsubscribe all effects through its dispose handler and will return the return value of the scope. Effects will not be able to track signals and stores.", getNextElement(_tmpl$), getNextElement(_tmpl$), "\nFunctions like ", createComponent(_components.code, {
                        children: "render()"
                      }), " automatically create their reactive scope, but you can still use ", createComponent(_components.code, {
                        children: "createRoot()"
                      }), " inside it to gain manual disposal for your reactive effects.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#createroot",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "getOwner",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "getOwner"
                      }), " - get the current tracking context"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "scope"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "getOwner"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "return"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " <"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "onClick"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{(ev) "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "runWithOwner"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(scope"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " () "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "props"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: ".onClick"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(ev))}"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "/>"
                                  });
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Gets the reactive scope that tracks effects either in order to test its existence or to run effects inside it outside of the current function (e.g. in timeouts or events) by using ", createComponent(_components.code, {
                        children: "runWithOwner()"
                      }), ".", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#getowner",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "runWithOwner",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "runWithOwner"
                      }), " - runs in tracking context"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "scope"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "getOwner"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "return"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " <"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "onClick"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{(ev) "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "runWithOwner"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(scope"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " () "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "props"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: ".onClick"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(ev))}"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "/>"
                                  });
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Runs a callback inside the scope of a reactive root obtained through ", createComponent(_components.code, {
                        children: "getOwner()"
                      }), ", for example to run it inside a timeout or event.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#runwithowner",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          })];
        }
      }), createComponent(Section, {
        get children() {
          return [createComponent(SectionItem, {
            id: "reactiveData",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.h2, {
                    id: "reactive-data",
                    children: "Reactive Data"
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    children: "Since reactive data like props are often handled by object getters or proxies, destructuring them outside of an effect will break reactivity. Solid.js brings tools to handle them without losing reactivity."
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "mergeProps",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "mergeProps"
                      }), " - reactive object merge"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "p"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "mergeProps"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(defaults"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " props)"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Shallowly merges all reactive objects together, retaining their reactivity (you can add as many objects as you like).", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#mergeprops",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "splitProps",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "splitProps"
                      }), " - reactive object splitting"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " ["
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "local"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "rest"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "] "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "splitProps"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(props"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " ["
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"children\""
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "])"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "..."
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "rest}><"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "span"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">{"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "local"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ".children}</"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "span"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "></"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Splits a reactive object into multiple objects while retaining the reactivity of the properties.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#splitprops",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "mapArray",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "mapArray"
                      }), " - reactively maps fixed length array"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["maps a reactive array, retaining the reactive properties of the items; otherwise similar to mapArray. Is used by the ", createComponent(_components.code, {
                        children: "<For>"
                      }), " flow control.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#maparray",
                        children: "Docs"
                      })];
                    }
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "indexArray",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "indexArray"
                      }), " - reactively maps varying length array"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["maps a reactive array, retaining the reactive properties of the indices; items are cached by reference, while the index argument is a signal. The map function itself is not tracking. Is used by the ", createComponent(_components.code, {
                        children: "<Index>"
                      }), " flow control.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#indexarray",
                        children: "Docs"
                      })];
                    }
                  });
                }
              })];
            }
          })];
        }
      }), createComponent(Section, {
        get children() {
          return [createComponent(SectionItem, {
            id: "componentApis",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.h2, {
                    id: "component-apis",
                    children: "Component APIs"
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    children: "Solid.js comes with a few helpers to manage components internally."
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createContext",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createContext"
                      }), " - state bound to component tree"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "context"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createContext"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(defaultValue)"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "Consumer"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " (props) "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "contextValue"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "useContext"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(context)"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "}"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "context.Provider"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "><"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Consumer"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " /></context.Provider/>"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Creates a context object with a provider component to inject dependencies bound to the view to be used with ", createComponent(_components.code, {
                        children: "useContext()"
                      }), ". The default value is optional.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#createcontext",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "useContext",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "useContext"
                      }), " - use bound state"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "context"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createContext"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(defaultValue)"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "Consumer"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " (props) "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "contextValue"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "useContext"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(context)"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "}"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "context.Provider"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "><"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Consumer"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " /></context.Provider/>"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Gets the (default) value of the nearest context provider created with ", createComponent(_components.code, {
                        children: "createContext()"
                      }), " from the given context object.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#usecontext",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "children",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "children"
                      }), " - reactively unwrap children"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "childs"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "children"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "props"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ".children)"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Helper that automatically unwraps children (or other reactive values) that are function elements and memoizes the result in an accessor.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#children",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "lazy",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "lazy"
                      }), " - unwrap promise containing component"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "AsyncComponent"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "lazy"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "import"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'./AsyncComponent'"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "))"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "return"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " <"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Suspense"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "fallback"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"...Loading\""
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  <"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "AsyncComponent"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " />"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "</"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Suspense"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Creates a component from a Promise that can be tracked and replaced with a fallback until resolved in ", createComponent(_components.code, {
                        children: "<Suspense>"
                      }), ".", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#lazy",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "createUniqueId",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "createUniqueId"
                      }), " - unique ID for components"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "componentId"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createUniqueId"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Creates a unique ID that is stable across server and browser to enable synchronization of server-rendered templates in client-side hydration.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#createuniqueid",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          })];
        }
      }), createComponent(Section, {
        get children() {
          return [createComponent(SectionItem, {
            id: "rendering",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.h2, {
                    id: "rendering",
                    children: "Rendering"
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    children: "Solid.js is very flexible when it comes to rendering both on the server and the client."
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "render",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "render"
                      }), " - applies component to mount point"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "render"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " <"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "App"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " />"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "document"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: ".getElementById"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"root\""
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "))"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Browser-only method to add a component to a mount point inside its own reactive root.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#render",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "hydrate",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "hydrate"
                      }), " - adds client-side logic to server-rendered html"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "hydrate"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " <"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "App"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " />"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "document"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: ".getElementById"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"root\""
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "))"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Browser-only method to add client-side logic (e.g. event handlers) to server-rendered code.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#hydrate",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "renderToString",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "renderToString"
                      }), " - html string from component"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "html"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "renderToString"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " <"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "App"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " />)"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Creates a static HTML string from a component to be sent to the client and be hydrated using ", createComponent(_components.code, {
                        children: "hydrate()"
                      }), ".", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#rendertostring",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "renderToStringAsync",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "renderToStringAsync"
                      }), " - async renderToString"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "const"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "html"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "await"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "renderToStringAsync"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " <"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "App"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " />)"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Creates a static HTML string from a component to be sent to the client and be hydrated using ", createComponent(_components.code, {
                        children: "hydrate()"
                      }), ", but attempts to resolve all async components and resolve all resources.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#rendertostringasync",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "renderToStream",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "renderToStream"
                      }), " - render to (node/web) stream"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "renderToStream"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " <"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "App"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " />)"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: ".pipe"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "(res)"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Rendering the component asynchronously as string into a stream to be hydrated on the client using ", createComponent(_components.code, {
                        children: "hydrate()"
                      }), "; initial data contains suspense fallback placeholders and everything else will come in once it resolves.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#rendertostream",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "isServer",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "isServer"
                      }), " - true if run in ssr mode"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["is ", createComponent(_components.code, {
                        children: "true"
                      }), " on the server and ", createComponent(_components.code, {
                        children: "false"
                      }), " in the browser; helpful for tree-shaking.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#isserver",
                        children: "Docs"
                      })];
                    }
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "generateHydrationScript",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "generateHydrationScript"
                      }), " - hydrate SSR components on the server"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["Generates hydration script as string to be used on the server.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#hydrationscript",
                        children: "Docs"
                      })];
                    }
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "hydrationScript",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "<HydrationScript />"
                      }), " - hydrate SSR components on the client"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["Generates hydration script as a JSX.Component to be used in the client.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#hydrationscript",
                        children: "Docs"
                      })];
                    }
                  });
                }
              })];
            }
          })];
        }
      }), createComponent(Section, {
        get children() {
          return [createComponent(SectionItem, {
            id: "jsx",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.h2, {
                    id: "jsx-propvalue",
                    get children() {
                      return createComponent(_components.code, {
                        children: "<JSX prop={value}"
                      });
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.p, {
                    children: "JSX elements receive attributes separately or with a spread operator:"
                  }), createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Element"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "..."
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "props} />"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Solid uses a babel plugin to transform JSX to efficient rendering through cloning templates; updates are just side effects within Solid's reactive system.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/guides/rendering#attributes-and-props",
                        children: "Guide"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "ref",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "ref"
                      }), " - access DOM element"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "let"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " ref"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "!:"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "HTMLDivElement"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "ref"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{ref} />"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-comment)"
                                    },
                                    children: "// or"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "let"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " [ref"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " setRef] "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "createSignal"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "HTMLDivElement"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">()"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "ref"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{setRef} />"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["A reference to DOM arrays for intrinsic elements and whatever reference components return (or not). Can be used with a let variable or a setter-style function (or any other function receiving the reference).", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#ref",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "classList",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "classList"
                      }), " - class names from object"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "classList"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{{ xl"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "size"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "==="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'xl'"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ","
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " box"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "true"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " }} />"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Preferred method of setting and toggling multiple class names using an object with the keys being the class names, and the values being truthy or falsy toggling them. Beware that there might be side effects if using class and classList at the same time.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#classlist",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "styles",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "style"
                      }), " - inline styles (string or object)"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "style"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"color: red;\""
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " />"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "style"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{{ color"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'red '"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "}} />"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Attribute to set inline styles and CSS variables, either as a string or from an object.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#style",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "innerHTML",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "innerHTML"
                      }), " - directly inject HTML"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["Set the HTML content (", createComponent(_components.strong, {
                        children: "Warning"
                      }), ": overwrites child nodes and can lead to security issues if the content is not completely controlled).", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#innerhtml",
                        children: "Docs"
                      })];
                    }
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "textContent",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "textContent"
                      }), " - directly inject Text"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["Replace the content with a text node containing the given text (", createComponent(_components.strong, {
                        children: "Warning"
                      }), ": may overwrite child nodes)", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#textcontent",
                        children: "Docs"
                      })];
                    }
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "on_delegated_event",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "on[event]"
                      }), " - delegated dom events"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["Delegated event listeners (using event.currentTarget instead of event.target), only bound once.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#on__",
                        children: "Docs"
                      })];
                    }
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "on_dom_event",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "on:[event]"
                      }), " - direct dom events"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "import"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " { JSX } "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "from"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"solid-js\""
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line"
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "declare"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "module"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"solid-js\""
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "namespace"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "JSX"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "    "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "interface"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "CustomEvents"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "      MyEvent"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "Event"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "    }"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  }"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "}"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line"
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "on"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "MyEvent"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{handler} />"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Native event listener (for typescript, this requires extending the JSX namespace, as shown above)", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#on%3A___%2Foncapture%3A___",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "on_captured_events",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "oncapture:[event]"
                      }), " - capturing dom events"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "import"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " { JSX } "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "from"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"solid-js\""
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line"
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "declare"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "module"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"solid-js\""
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "namespace"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "JSX"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "    "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "interface"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "CustomCaptureEvents"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "      MyEvent"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "Event"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "    }"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  }"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "}"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line"
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "oncapture"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "MyEvent"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{handler} />"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Native event listener with capturing (for typescript, this requires extending the JSX namespace, as shown above)", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#on%3A___%2Foncapture%3A___",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "directives",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "use:[directive]"
                      }), " - use custom directive"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "import"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " { JSX } "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "from"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"solid-js\""
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line"
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "declare"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "module"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"solid-js\""
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "namespace"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "JSX"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "    "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "interface"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "Directives"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "      clickOutside"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " [() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "void"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "]"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "    }"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  }"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "}"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line"
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "use"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "clickOutside"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{handler} />"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Directives are functions that receives the node of the intrinsic element as first and their property as second argument, allowing for elegant code reuse (for typescript, this requires extending the JSX namespace)", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#use%3A___",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "properties",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "prop:[property]"
                      }), " - direct dom property access"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "import"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " { JSX } "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "from"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"solid-js\""
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line"
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "declare"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "module"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"solid-js\""
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "namespace"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "JSX"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "    "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "interface"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "ExplicitProperties"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "      property"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "string"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "    }"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  }"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "}"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line"
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "prop"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "property"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"foobar\""
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " />"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Will set the property as property of the intrinsic element instead of an attribute.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#prop%3A___",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "attributes",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "attr:[attribute]"
                      }), " - direct dom attribute access"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "import"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " { JSX } "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "from"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"solid-js\""
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line"
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "declare"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "module"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "\"solid-js\""
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "namespace"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "JSX"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "    "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "interface"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "ExplicitAttributes"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "      attribute"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "number"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "    }"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  }"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "}"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line"
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "attr"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-punctuation)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "attribute"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "2"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "} />"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Will set the property as attribute of the intrinsic element instead of a property.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#attr%3A___",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "once",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "/*@once*/"
                      }), " - untrack for JSX properties"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Component"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "prop"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-comment)"
                                    },
                                    children: "/*@once*/"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "prop"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ".foo} />"
                                  })];
                                }
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Will make sure prop.foo will not be tracked by not converting the assignment to an effect, which is more efficient than untrack.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/latest/api#%2F*-%40once-*%2F",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "children",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.h2, {
                    id: "propschildrenjsx",
                    get children() {
                      return createComponent(_components.code, {
                        children: "/>{props.children}</JSX>"
                      });
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return ["Children in Solid are typically HTML elements, an array of HTML elements, server rendered elements (Objects with ", createComponent(_components.code, {
                        children: "{ t: template-string }"
                      }), "), strings (TextNodes), false, null or a function returning any of the aforementioned."];
                    }
                  });
                }
              })];
            }
          })];
        }
      }), createComponent(Section, {
        get children() {
          return [createComponent(SectionItem, {
            id: "controlFlow",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.h2, {
                    id: "jsx-control-flow",
                    children: "JSX Control Flow"
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return createComponent(_components.p, {
                    children: "Solid comes with control flow components that allow you to express conditional and iterative rendering directly within the JSX."
                  });
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "show",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "<Show>"
                      }), " - conditionally show content"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Show"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "when"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "condition"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "()}"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "fallback"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">Fallback</"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">}"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">"
                                  });
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  <"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Content"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " />"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "</"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Show"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Renders the children if the condition returns a truthy value, otherwise renders the optional fallback (or nothing as a default).", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#%3Cshow%3E",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "switch_match",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "<Switch>/<Match>"
                      }), " - multiple conditions"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Switch"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "fallback"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">Fallback</"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "div"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">}>"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  <"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Match"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "when"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "conditionA"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "()}><"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "PartA"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " /></"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Match"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  <"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Match"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "when"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "conditionB"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "()}><"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "PartB"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " /></"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Match"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "</"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Switch"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: ">"
                                  })];
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Like a switch-Statement, but as a control flow component and with fallback prop instead of a default case.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#%3Cswitch%3E%2F%3Cmatch%3E",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "for",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "<For>"
                      }), " - map array items by position"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line"
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Will track array items by reference over changing positions; if you expect more changes of positions than changes of content, use ", createComponent(_components.code, {
                        children: "<For>"
                      }), ", otherwise consider using ", createComponent(_components.code, {
                        children: "<Index>"
                      }), ".", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#%3Cfor%3E",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "index",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "<Index>"
                      }), " - map array items by value"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line"
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Will track array items by content; if you expect content to change rather than changing positions, use ", createComponent(_components.code, {
                        children: "<Index>"
                      }), ", otherwise consider using ", createComponent(_components.code, {
                        children: "<For>"
                      }), ".", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#%3Cindex%3E",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "dynamic",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "<Dynamic>"
                      }), " - variable component"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return [createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "<"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-constant)"
                                    },
                                    children: "Dynamic"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "component"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "loggedIn"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "() "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "?"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " App "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: ":"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: " Login}"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return [createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "  "
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "user"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-keyword)"
                                    },
                                    children: "="
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "{"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-token-function)"
                                    },
                                    children: "user"
                                  }), createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "()}"
                                  })];
                                }
                              }), createComponent(_components.div, {
                                className: "line",
                                get children() {
                                  return createComponent(_components.span, {
                                    style: {
                                      color: "var(--shiki-color-text)"
                                    },
                                    children: "/>"
                                  });
                                }
                              })];
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Returns a component of a variable type, use strings for intrinsic elements or functions for components.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#%3Cdynamic%3E",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "portal",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "<Portal>"
                      }), " - render elsewhere"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line"
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Switch the mount point for the children.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#%3Cportal%3E",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "errorBoundary",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "<ErrorBoundary>"
                      }), " - catch errors in components"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line"
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Catches errors for the childrens, present a fallback and allows handling the errors and reset the state.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#%3Cerrorboundary%3E",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "suspense",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.code, {
                        children: "<Suspense>"
                      }), " - fallback for async state"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line"
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return ["Shows an optional fallback until the resource promises inside the component (from createResource or lazy) are resolved.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#%3Csuspense%3E",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          }), createComponent(SectionItem, {
            id: "suspenseList",
            get children() {
              return [createComponent(SectionItemHead, {
                get children() {
                  return createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.em, {
                        get children() {
                          return createComponent(_components.code, {
                            children: "<SuspenseList>"
                          });
                        }
                      }), " - organize async fallback"];
                    }
                  });
                }
              }), createComponent(SectionItemText, {
                get children() {
                  return [createComponent(_components.pre, {
                    className: "shiki css-variables",
                    style: {
                      backgroundColor: "var(--shiki-color-background)",
                      color: "var(--shiki-color-text)"
                    },
                    get children() {
                      return [createComponent(_components.div, {
                        className: "language-id",
                        children: "tsx"
                      }), createComponent(_components.div, {
                        className: "code-container",
                        get children() {
                          return createComponent(_components.code, {
                            get children() {
                              return createComponent(_components.div, {
                                className: "line"
                              });
                            }
                          });
                        }
                      })];
                    }
                  }), createComponent(_components.p, {
                    get children() {
                      return [createComponent(_components.strong, {
                        children: "Experimental;"
                      }), " allows defining the order in which suspended parts of the layout are replaced with the loaded content in order to avoid layout thrashing.", getNextElement(_tmpl$), createComponent(_components.a, {
                        href: "https://www.solidjs.com/docs/api#%3Csuspenselist%3E",
                        children: "Docs"
                      })];
                    }
                  })];
                }
              })];
            }
          })];
        }
      })];
    }
  })];
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, M(), props.components);
  return MDXLayout ? createComponent(MDXLayout, mergeProps(props, {
    get children() {
      return createComponent(_createMdxContent, props);
    }
  })) : _createMdxContent(props);
}

export { MDXContent as default, getHeadings };
