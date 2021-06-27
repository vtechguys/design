import { useRowStyles } from "./useRowStyles";
import { Box } from "../../box";
import "./css/main.css";

export function GridRow(props) {
  const classes = useRowStyles(props);
  return <Box {...props} className={classes} display={props.grid || "grid"} />;
}
