import { list } from "./contants";
import {
  AccordionItem,
  AccordionContent,
  useAccordion,
  accordionStateReducer,
  Box,
  Typography,
  AccordionHeader,
} from "../design";

import "./Accordion.css";

export function AccordionExample() {
  const { openIndexes, handleItemClick } = useAccordion({
    openIndexes: [],
    stateReducer: (state, action) => {
      // single reducer
      // one open at a time
      // if (action.type === AccordionActionTypes.open) {
      //   return { ...state, openIndexes: [action.payload] };
      // }
      // // prevent closing
      // // one should be open at all times
      // // donot close if only one is open right now
      // if (
      //   action.type === AccordionActionTypes.close &&
      //   state.openIndexes.length <= 1
      // ) {
      //   return state;
      // }
      // default action in all other scenaior
      return accordionStateReducer(state, action);
    },
  });
  return (
    <Box className="AccordionExample">
      {list.map(({ label, Component }, idx) => {
        const isOpen = openIndexes.includes(idx);
        return (
          <AccordionItem
            key={idx}
            isOpen={isOpen}
            className={`MyAccordionItem ${isOpen ? "MyAccordionItemOpen" : ""}`}
          >
            <AccordionHeader
              onClick={() => handleItemClick(idx)}
              className="MyAccordionHeader"
            >
              <Typography>{label}</Typography>
            </AccordionHeader>
            <AccordionContent className="MyAccordionContent">
              {Component}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Box>
  );
}
