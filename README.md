# Micro Frontend using Module Federation

This is small demo how to achieve module federation

## In this we have 3 modules (remote, host and solid-host)

- Sharing Components
  - remote module have `Counter`,`Header` and `Footer` components (port `3001`)
  - host module using those all component and rendering screens (port `3000`)
- Sharing Function with all its dependencies
  - remote also exposed one function name `sortByName` in which we used `lodash.sortby`
  - now in host we can call this function without adding `lodash.sortby` in host module
- Check our component in solid-host which don't have react and it's using Solid Js framework
  - remote module have `counterWrapper` function which render `Counter` framework independently
