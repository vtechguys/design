import { Box } from "../design";
import "./AppHeader.css";

export function AppHeader({ Logo, Nav }) {
  return (
    <Box
      flexGrow={1}
      dataComponentName="AppHeader"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      className="p16 AppHeader"
    >
      <Box className="AppLogoContainer">{Logo}</Box>
      <Box flexGrow={1} className=" AppNavContainer">
        {Nav}
      </Box>
    </Box>
  );
}
