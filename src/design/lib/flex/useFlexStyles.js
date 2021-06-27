import { classNames, resolveResponsiveProp } from "../../utils";
export function useFlexStyles({
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  flexWrap,
  alignSelf,
  flexGrow,
  order
}) {
  const classes = [];
  if (flexDirection) {
    classes.push(resolveResponsiveProp("ui-l-flex", flexDirection));
  }
  if (justifyContent) {
    classes.push(resolveResponsiveProp("ui-l-justify-content", justifyContent));
  }
  if (alignItems) {
    classes.push(resolveResponsiveProp("ui-l-align-items", alignItems));
  }
  if (alignContent) {
    classes.push(resolveResponsiveProp("ui-l-align-content", alignContent));
  }
  if (flexWrap) {
    classes.push(resolveResponsiveProp("ui-l-flex-wrap", flexWrap));
  }
  if (alignSelf) {
    classes.push(resolveResponsiveProp("ui-l-align-self", alignSelf));
  }
  if (alignSelf) {
    classes.push(resolveResponsiveProp("ui-l-align-self", alignSelf));
  }
  if (typeof flexGrow !== "undefined") {
    classes.push(resolveResponsiveProp("ui-l-flex-grow", flexGrow));
  }
  return classNames(classes);
}
