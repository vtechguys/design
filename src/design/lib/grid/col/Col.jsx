import { Box } from "../../box"
import { useColStyles } from "./useColStyles";
// component css
import "./css/main.css"

export function Col({ skip = 0, span = 1, className, ...props }) {
    const classes = useColStyles({ skip, span, className })
    return <Box  className={classes} {...props}/>
}