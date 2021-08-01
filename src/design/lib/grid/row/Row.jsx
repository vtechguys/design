import { Box } from "../../box";

import { useRowStyles } from "./useRowStyles"
// component-css
import "./css/main.css";

export function Row(props) {
    const classes = useRowStyles(props);
    return <Box {...props} display="flex" flexDirection="row" flexGrow={1} flexShrink={1} flexBasis="auto" flexWrap="wrap" className={classes} />
}