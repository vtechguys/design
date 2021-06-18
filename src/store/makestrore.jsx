import React from "react";

export function makeStore(name, reducer) {
  /**
   * State and idispatch context
   */
  const StateContext = React.createContext();
  StateContext.displayName = `${name}StateContext`;
  const DispatchContext = React.createContext();
  DispatchContext.displayName = `${name}DispatchContext`;
  /**
   * Hooks to consume individual contexts
   */
  function useContextStore() {
    const context = React.useContext(StateContext);
    if (!context) {
      throw new Error(`use${name}State cannot be used outside ${name}Provider`);
    }
    return context;
  }
  function useContextDispatch() {
    const context = React.useContext(DispatchContext);
    if (!context) {
      throw new Error(
        `use${name}Dispatch cannot be used outside ${name}Provider`
      );
    }
    return context;
  }

  function useStoreAndDispatch() {
    return [useContextStore(), useContextDispatch()];
  }
  /**
   * React Tree Context Provider
   */
  function Provider({
    initilizerArg,
    initilizer = (initState) => initState,
    children,
  }) {
    const [state, dispatch] = React.useReducer(
      reducer,
      initilizerArg,
      initilizer
    );
    return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    );
  }
  Provider.displayName = `${name}Provider`;
  return { Provider, useContextStore, useContextDispatch, useStoreAndDispatch };
}
