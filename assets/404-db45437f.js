import { c as createComponent, m as mergeProps, g as getNextElement, a as getNextMarker, i as insert, A, t as template } from './entry-client-0f91cfa0.js';
import { M } from './index-55791be5.js';

const _tmpl$ = /*#__PURE__*/template(`<main><!#><!/><!#><!/></main>`, 6);
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "page-not-found",
    "text": "Page Not Found"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    blockquote: "blockquote",
    p: "p",
    a: "a"
  }, M(), props.components);
  return (() => {
    const _el$ = getNextElement(_tmpl$),
      _el$2 = _el$.firstChild,
      [_el$3, _co$] = getNextMarker(_el$2.nextSibling),
      _el$4 = _el$3.nextSibling,
      [_el$5, _co$2] = getNextMarker(_el$4.nextSibling);
    insert(_el$, createComponent(_components.h1, {
      id: "page-not-found",
      children: "Page Not Found"
    }), _el$3, _co$);
    insert(_el$, createComponent(_components.blockquote, {
      get children() {
        return createComponent(_components.p, {
          get children() {
            return ["Visit ", createComponent(_components.a, {
              href: "https://solidjs.com",
              children: "https://solidjs.com"
            }), " to learn how to build Solid apps. ", createComponent(A, {
              href: "/",
              children: "Cheat Sheet"
            })];
          }
        });
      }
    }), _el$5, _co$2);
    return _el$;
  })();
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
