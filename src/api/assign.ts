'use strict';
export function assign(target: any, ...args: any[]): any {
    if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    let output = Object(target);
    for (let source of args) {
        if (source !== undefined && source !== null) {
            for (let nextKey in source) {
                if (source.hasOwnProperty(nextKey)) {
                    output[nextKey] = source[nextKey];
                }
            }
        }
    }
    return output;
};
