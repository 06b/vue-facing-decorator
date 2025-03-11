"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = exports.decorator = void 0;
const utils_1 = require("../deco3/utils");
const utils_2 = require("../utils");
function decorator(setupFunction) {
    return (0, utils_1.compatibleMemberDecorator)(function (proto, name) {
        const slot = (0, utils_2.obtainSlot)(proto);
        const map = slot.obtainMap('setup');
        map.set(name, {
            setupFunction
        });
    });
}
exports.decorator = decorator;
const isPromise = (v) => v instanceof Promise;
function build(cons, optionBuilder) {
    const slot = (0, utils_2.obtainSlot)(cons.prototype);
    const map = slot.getMap('setup');
    if (!map || map.size === 0) {
        return;
    }
    const setup = function (props, ctx) {
        const setupData = {};
        let promises = null;
        for (const name of map.keys()) {
            const setupState = map.get(name).setupFunction(props, ctx);
            if (isPromise(setupState)) {
                promises !== null && promises !== void 0 ? promises : (promises = []);
                promises.push(setupState.then((v) => {
                    setupData[name] = v;
                }));
            }
            else {
                setupData[name] = setupState;
            }
        }
        if (Array.isArray(promises)) {
            return Promise.all(promises).then(() => {
                return setupData;
            });
        }
        else {
            return setupData;
        }
    };
    optionBuilder.setup = setup;
}
exports.build = build;
//# sourceMappingURL=setup.js.map