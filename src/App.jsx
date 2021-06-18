import { Box } from "./design";
import { AppBody } from "./components/AppBody";
import { AppHeader } from "./components/AppHeader";
import { Logo } from "./components/Logo";
import { AppNav } from "./components/AppNav";
import { Switch, Route } from "react-router-dom";
import { DesignSystem } from "./example/DesignSystem";
import "./design/design.css";
import "./App.css";

const StyleSheet = {
  AppHeaderContainer: {
    px: "sm",
    py: "gutter",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  AppBodyContainer: {
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
      xl: "row",
    },
  },
  BoxItem: {
    p: "xxl",
    flexGrow: 1,
  },
};

function App() {
  return (
    <Box flexDirection="column">
      <Box {...StyleSheet.AppHeaderContainer}>
        <Box>Logo</Box>
        <Box flexGrow={1} flexDirection="row" justifyContent="flex-end">
          <Box component="a" mx="sm">
            Home
          </Box>
          <Box component="a" mx="sm">
            About
          </Box>
          <Box component="a" mx="sm">
            contact
          </Box>
          <Box component="a" mx="sm">
            ETC
          </Box>
        </Box>
      </Box>
      <Box
        flexGrow={1}
        justifyContent="space-between"
        p="sm"
        flexDirection={StyleSheet.AppBodyContainer.flexDirection}
        className="boxWithShadow"
        // wouldn't allow this className
      >
        <Box p="xxl" flexGrow={1}>
          1
        </Box>
        <Box p={StyleSheet.BoxItem.p} flexGrow={StyleSheet.BoxItem.flexGrow}>
          2
        </Box>
        <Box {...StyleSheet.BoxItem}>3</Box>
      </Box>
    </Box>
  );
}

export default App;
