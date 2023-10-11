export function createEnumObject(values) {
    let enumObject = {};

    for (const value of values) {
        enumObject[value] = value;
    }
    
    return Object.freeze(enumObject);
}
