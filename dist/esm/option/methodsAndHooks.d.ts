import type { VueCons } from '../class';
import type { OptionBuilder } from '../optionBuilder';
export declare const HookNames: ReadonlyArray<string>;
export type HookConfig = null;
export declare const decorator: {
    (): any;
    (option: unknown): any;
    (proto: import("../identity").Identity<import("../identity").IdentityType>, name: any): any;
    (value: any, ctx: ClassMemberDecoratorContext): any;
};
export declare function build(cons: VueCons, optionBuilder: OptionBuilder): void;
//# sourceMappingURL=methodsAndHooks.d.ts.map