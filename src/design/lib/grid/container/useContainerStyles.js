import { classNames, resolveResponsiveProp } from "../../../utils";

export function useContainerStyles({ mode, className }) {
    const classes = ['ui-c-container',];

    if (mode) {
        classes.push(resolveResponsiveProp('ui-l-container-mode', mode))
    }

    if (className) {
        classes.push(className);
    }

    return classNames(classes)
}