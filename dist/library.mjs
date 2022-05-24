import { openBlock, createElementBlock, Fragment, createElementVNode } from 'vue';

var script = {
  name: 'InputText'
};

const _hoisted_1 = /*#__PURE__*/createElementVNode("input", { type: "text" }, null, -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/createElementVNode("button", null, "Go", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2
  ], 64 /* STABLE_FRAGMENT */))
}

script.render = render;
script.__file = "src/components/InputText.vue";

var components = { InputText: script };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

export { plugin as default };
