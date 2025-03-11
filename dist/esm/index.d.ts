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
import type { ComponentPublicInstance } from 'vue';
import type { OptionBuilder } from './optionBuilder';
declare const IdentifySymbol: unique symbol;
export interface BaseTypeIdentify {
    [IdentifySymbol]: undefined;
}
export declare function TSX<Properties extends {} = {}, Events extends {} = {}>(): <C extends VueCons<{}>>(cons: C) => new () => Omit<ComponentPublicInstance<InstanceType<C>["$props"] & Properties & { [index in keyof Events as `on${Capitalize<index & string>}`]: Events[index] extends Function ? Events[index] : (param: Events[index]) => any; }>, keyof Properties | keyof { [index in keyof Events as `on${Capitalize<index & string>}`]: Events[index] extends Function ? Events[index] : (param: Events[index]) => any; }> & InstanceType<C>;
export type VueCons<T = {}> = {
    new (optionBuilder: OptionBuilder, vueInstance: any): ComponentPublicInstance & BaseTypeIdentify & T;
};
export declare const Base: VueCons<{}>;
export declare const Vue: VueCons<{}>;
export { toNative } from './component';
//# sourceMappingURL=index.d.ts.map