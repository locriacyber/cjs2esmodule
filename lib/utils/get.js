"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getName = exports.getSafe = void 0;
const reg = /(\w+)\[(\d+)\]/;
const _get = (obj, names) => {
    const keys = Array.isArray(names) ? names : names.split('.');
    return keys.reduce((prev, next) => {
        if (reg.test(next)) {
            const [, name, index] = next.match(reg);
            return prev && prev[name] && prev[name][index];
        }
        else {
            return prev && prev[next];
        }
    }, obj);
};
const getSafe = (obj, names, defaultValue) => _get(obj, names) || defaultValue;
exports.getSafe = getSafe;
const getName = (obj, names) => (0, exports.getSafe)(obj, `${names}.name`) || (0, exports.getSafe)(obj, `${names}.value`);
exports.getName = getName;
