var c=(r,s)=>r.reduce((e,n)=>{let t=s(n);return e[t]?(e[t].items.push(n),e):Object.assign(e,{[t]:{key:t,items:[n]}})},{});export{c as groupBy};
//# sourceMappingURL=group-by.mjs.map