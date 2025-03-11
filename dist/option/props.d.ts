import type { Cons } from '../component';
import type { OptionBuilder } from '../optionBuilder';
export interface PropsConfig {
    type?: any;
    required?: boolean;
    default?: any;
    validator?(value: any): boolean;
}
export declare const decorator: {
    (option?: PropsConfig | undefined): any;
    (proto: import("..").BaseTypeIdentify, name: any): any;
    (value: any, ctx: ClassMemberDecoratorContext): any;
};
export declare function build(cons: Cons, optionBuilder: OptionBuilder): void;
//# sourceMappingURL=props.d.ts.map