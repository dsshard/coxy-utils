function e(t){return Object.keys(t).sort().reduce((c,r)=>(c[r]=typeof t[r]=="object"?e(t[r]):t[r],c),{})}export{e as objectSortByFields};
//# sourceMappingURL=object-sort-by-fields.mjs.map