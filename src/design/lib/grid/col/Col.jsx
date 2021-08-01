import { Box } from "../../box"
import { useColStyles } from "./useColStyles";
// component css
import "./css/main.css"

export function Col(props) {
    const { skip = 0, span = 1, order, className, ...restProps } = props;
    const classes = useColStyles({ skip, span, order, className })
    return <Box {...restProps} className={classes} />
}