/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export  const pick = (obj, ...fields) => {

    const entries = Object.entries(obj);
    
    const mapped = entries.map(([key, value]) => {
        return fields.includes(key) ?  [key, value] : false
    }).filter(Boolean);

    return Object.fromEntries(mapped);
};
