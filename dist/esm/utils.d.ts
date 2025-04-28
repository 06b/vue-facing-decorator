import type { Identity } from './identity';
import { type VueCons } from './class';
import { type Slot, type SlotMapNames } from './slot';
export declare function getPrototypeOf(proto: Identity): Identity | null;
export declare function toComponentReverse(proto: Identity): Identity<import("./identity").IdentityType>[];
export declare function getSuperSlot(proto: Identity): Slot | null;
/**
 * Filter decorated names
 */
export declare function filterNames(names: string[], slot: Slot, mapNames?: SlotMapNames[]): string[];
/**
 * Get own propertie name by a filter
 */
export declare function getValidOwnPropertyNames(obj: any, filter: (des: PropertyDescriptor, name: string) => boolean): string[];
/**
 * Transform provide into function.
 */
export declare function getProviderFunction(provide: any): () => {};
export declare function optionNullableMemberDecorator<T>(handler: {
    (proto: any, name: string, option?: T): any;
}): {
    (): any;
    (option: T): any;
    (proto: Identity, name: any): any;
    (value: any, ctx: ClassMemberDecoratorContext): any;
};
export declare function optionNullableClassDecorator<T>(handler: {
    (cons: VueCons, option?: T): any;
}): {
    (): any;
    (option: T): any;
    (cons: VueCons): any;
    (cons: VueCons, ctx: ClassDecoratorContext): any;
};
//# sourceMappingURL=utils.d.ts.map