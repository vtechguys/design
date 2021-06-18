import { Box, TabButton, TabContent, useTab } from "../design";
import { list } from "./contants";
import "./Tab.css";

const PropsMapper = {
  TabButton: {
    ButtonProps: {
      variant: "outlined",
      color: "success",
    },
  },
};
export function TabExample() {
  const { activeTab, handleTabButtonClick } = useTab();

  return (
    <Box
      flexDirection="column"
      justifyContent="flex-end"
      className="TabExample"
    >
      <Box flexGrow={1} flexDirection="row" className="TabNavigationButtons">
        {list.map(({ label }, i) => (
          <TabButton
            key={i}
            isOpen={activeTab === i}
            onClick={() => handleTabButtonClick(i)}
            className="flex-grow-1 TabButton"
            {...PropsMapper.TabButton}
          >
            {label}
          </TabButton>
        ))}
      </Box>
      <Box flexGrow={1} flexDirection="row" className="p24">
        {list.map(({ Component }, i) => (
          <TabContent isOpen={activeTab === i} key={i} unmountOnExit>
            {Component}
          </TabContent>
        ))}
      </Box>
    </Box>
  );
}
