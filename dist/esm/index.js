export { Component, ComponentBase } from './component';
export { decorator as Setup } from './option/setup';
export { decorator as Ref } from './option/ref';
export { decorator as Watch } from './option/watch';
export { decorator as Prop } from './option/props';
export { decorator as Provide } from './option/provide';
export { decorator as Inject } from './option/inject';
export { decorator as Emit } from './option/emit';
export { decorator as VModel, decorator as Model } from './option/vmodel';
export { decorator as Vanilla } from './option/vanilla';
export { decorator as Hook } from './option/methodsAndHooks';
export { createDecorator } from './custom/custom';
export { mixins } from './mixins';
const IdentifySymbol = Symbol('vue-facing-decorator-identify');
export function TSX() {
    return function (cons) {
        return cons;
    };
}
export const Base = class {
    constructor(optionBuilder, vueInstance) {
        const props = optionBuilder.props;
        if (props) {
            Object.keys(props).forEach(key => {
                this[key] = vueInstance[key];
            });
        }
        const methods = optionBuilder.methods;
        if (methods) {
            Object.keys(methods).forEach(key => {
                this[key] = methods[key].bind(vueInstance);
            });
        }
    }
};
export const Vue = Base;
export { toNative } from './component';
//# sourceMappingURL=index.js.map