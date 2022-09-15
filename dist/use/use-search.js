"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSearch = void 0;
const react_1 = require("react");
const array_search_in_by_field_1 = require("../data/array-search-in-by-field");
function useSearch(wallets, fields) {
    const [filteredData, setFilteredData] = (0, react_1.useState)(wallets);
    const [isSearch, setIsSearch] = (0, react_1.useState)(false);
    const handleSearch = (0, react_1.useCallback)((text) => {
        const trimmedText = text ? text.trim() : text;
        if (!trimmedText) {
            setIsSearch(false);
            setFilteredData(wallets);
            return;
        }
        const filtered = (0, array_search_in_by_field_1.searchArrayFilter)(wallets, text, fields);
        setFilteredData(filtered);
        setIsSearch(!!trimmedText);
    }, [wallets]);
    return [handleSearch, isSearch ? filteredData : wallets, isSearch];
}
exports.useSearch = useSearch;
