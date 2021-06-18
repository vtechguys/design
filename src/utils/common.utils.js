// export function combineReducers(...reducers) {
//   return function combinedReducer(state, reduced, ...args) {
//     return reducers.reduce((acc, fn) => {
//       const next = fn(state, acc, ...args);
//       return !next ? acc : { ...acc, ...next };
//     }, state);
//   };
// }
