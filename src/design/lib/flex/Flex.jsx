import { Box } from "../box";
import { useFlexStyles } from "./useFlexStyles";

export function Flex(props) {
  const classes = useFlexStyles(props);
  return <Box {...props} className={classes} />;
}
