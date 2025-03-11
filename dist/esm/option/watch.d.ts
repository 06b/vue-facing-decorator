import type { Cons } from '../component';
import type { OptionBuilder } from '../optionBuilder';
import type { WatchCallback } from 'vue';
export interface WatchConfig {
    key: string;
    handler: WatchCallback;
    flush?: 'post';
    deep?: boolean;
    immediate?: boolean;
}
type Option = Omit<WatchConfig, 'handler' | 'key'>;
export declare function decorator(key: string, option?: Option): (arg: any, ctx: string | DecoratorContext) => any;
export declare function build(cons: Cons, optionBuilder: OptionBuilder): void;
export {};
//# sourceMappingURL=watch.d.ts.map