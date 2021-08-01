import { classNames } from "../../utils";

export function useRowStyles({ className }) {
    const classes = ["ui-c-row"];
    if(className) {
        classes.push(className)
    }
    return classNames(classes)
}