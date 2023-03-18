"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSearch = void 0;
const react_1 = require("react");
const array_search_in_by_field_1 = require("../data/array-search-in-by-field");
function useSearch(array, fields) {
    const [searchText, setSearchText] = (0, react_1.useState)(null);
    const handleSearch = (0, react_1.useCallback)((text) => {
        const trimmedText = text ? text.trim() : text;
        if (!trimmedText) {
            setSearchText(null);
        }
        else {
            setSearchText(trimmedText);
        }
    }, [array]);
    const filtered = searchText ? (0, array_search_in_by_field_1.searchArrayFilter)(array, searchText, fields) : array;
    return [handleSearch, filtered, !!searchText];
}
exports.useSearch = useSearch;
