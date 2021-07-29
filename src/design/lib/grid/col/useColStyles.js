import { classNames, resolveResponsiveProp } from "../../utils";

export function useColStyles({ span, skip, className }) {
    const classes = ['ui-c-col'];
    if (span) {
        classes.push(resolveResponsiveProp('ui-col-span', span));
    } if (skip) {
        classes.push(resolveResponsiveProp('ui-col-skip', skip));
    }
    if (className) {
        classes.push(className)
    }
    return classNames(classes)
}