import {
  useAccordion,
  AccordionActionTypes as TabActionTypes,
  accordionStateReducer,
} from "../accordion";

// One tab is open at a time and you can close all tabs
// 1. single tab reducer: utmost one tab open at time
// 2. prevent close reducer: donont let close all tab
// default to normal
function tabStateReducer(state, action) {
  // prevent closing
  // one should be open at all times
  // donot close if only one is open right now
  if (action.type === TabActionTypes.close && state.openIndexes.length <= 1) {
    return state;
  }

  //single reducer
  // one open at a time
  if (action.type === TabActionTypes.open) {
    return { ...state, openIndexes: [action.payload] };
  }

  // default action in all other scenaior
  return accordionStateReducer(state, action);
}
const defaultProps = { activeTab: 0 };
function useTab({ activeTab: initActiveTab } = defaultProps) {
  // At a time openIndexes will have only one item and that is our active tab
  const { openIndexes, handleItemClick } = useAccordion({
    openIndexes: [initActiveTab],
    stateReducer: tabStateReducer,
  });
  return {
    activeTab: openIndexes[0],
    handleTabButtonClick: handleItemClick,
  };
}
export { TabActionTypes, useTab, tabStateReducer };
