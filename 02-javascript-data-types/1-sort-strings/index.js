/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param) {

    let sorted = arr.map(item => item)
    sorted.sort((a,b) => a.localeCompare(b, ['ru-RU', 'en-US'], { caseFirst: 'upper'}))
    if (param === 'desc') {
        return sorted.reverse()
    }

    return sorted
}
