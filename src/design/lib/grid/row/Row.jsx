import { Box } from "../../box";

import { useRowStyles } from "./useRowStyles"
// component-css
import "./css/main.css";

export function Row({ justifyContent, alignItems, alignContent, className, ...props }) {
    const classes = useRowStyles({ justifyContent, alignContent, alignItems, className });
    console.log('row', classes)
    return <Box className={classes} {...props}/>
}