import { classNames, resolveResponsiveProp } from "../../utils";

export function useColStyles({ span, skip, order, className }) {
    const classes = ['ui-c-col'];
    if (span) {
        classes.push(resolveResponsiveProp('ui-l-col-span', span));
    } 
    if (skip) {
        classes.push(resolveResponsiveProp('ui-l-col-skip', skip));
    }

    if (order) {
        classes.push(resolveResponsiveProp('ui-l-col-order', order));
    }
    if (className) {
        classes.push(className)
    }
    return classNames(classes)
}