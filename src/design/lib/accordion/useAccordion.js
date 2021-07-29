import { useState } from "react";
import { AccordionActionTypes } from "./actiontypes";
export function useAccordion({
  openIndexes: optionOpenIndexes = [0],
  stateReducer: optionStateReducer,
} = {}) {
  const [state, setState] = useState({
    openIndexes: optionOpenIndexes ? optionOpenIndexes : [0],
  });
  const { openIndexes } = state;

  const handleItemClick = (itemIndex) => {
    const type = openIndexes.includes(itemIndex)
      ? AccordionActionTypes.close
      : AccordionActionTypes.open;
    const nextState = optionStateReducer
      ? optionStateReducer(state, { type, payload: itemIndex })
      : accordionStateReducer(state, { type, payload: itemIndex });
    setState(nextState);
  };

  return {
    openIndexes,
    handleItemClick,
  };
}
export function accordionStateReducer(state, action) {
  return {
    ...state,
    openIndexes:
      action.type === AccordionActionTypes.open
        ? [...state.openIndexes, action.payload]
        : state.openIndexes.filter((idx) => idx !== action.payload),
  };
}
