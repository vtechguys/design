import "./design/design.css";
import { GridRow, GridCol } from "./design";

import "./App.css";

const StyleSheet = {
  AppHeaderContainer: {
    display: "flex",
    px: "sm",
    py: "gutter",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  AppBodyContainer: {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
      xl: "row"
    }
  },
  BoxItem: {
    p: "xxl",
    flexGrow: 1
  }
};

function App() {
  return (
    <GridRow>
      <GridCol>12</GridCol>
    </GridRow>
  );
}

export default App;
