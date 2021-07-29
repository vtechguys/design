import React from "react";

export function withStoreSlice(Comp, getStore, stateSlicer) {
  const MemoComp = React.memo(Comp);
  function Wrapper(props, ref) {
    // get the realted store
    const store = getStore();
    // stateSlicer is object of state slicing functions
    const state = Object.fromEntries(
      Object.entries(stateSlicer).map(([prop, fn]) => [prop, fn(store, props)])
    );
    return <MemoComp {...props} {...state} ref={ref} />;
  }
  Wrapper.displayName = `withStoreSlice(${
    Comp.displayName || Comp.name || "Component"
  })`;
  return React.memo(React.forwardRef(Wrapper));
}
