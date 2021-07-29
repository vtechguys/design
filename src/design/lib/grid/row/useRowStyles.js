import { classNames, resolveResponsiveProp } from "../../utils";

export function useRowStyles({ justifyContent, alignItems, alignContent, className }) {
    const classes = ["ui-c-row"];
    if (justifyContent) {
        classes.push(resolveResponsiveProp('ui-l-justify-content', justifyContent))
    }
    if (alignContent) {
        classes.push(resolveResponsiveProp('ui-l-align-content', alignContent))
    }
    if (alignItems) {
        classes.push(resolveResponsiveProp('ui-l-align-items', alignItems))
    }
    if(className) {
        classes.push(className)
    }
    return classNames(classes)
}