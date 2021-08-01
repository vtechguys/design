import { Box } from "../../box";
import { useContainerStyles } from "./useContainerStyles";
// component css
import "./css/main.css"

export function Container({ mode = "fluid", className, ...props }) {
    const classes = useContainerStyles({ mode, className });
    return <Box  {...props} className={classes}  width="100%" mx="auto" />
}