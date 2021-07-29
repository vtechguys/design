import { classNames } from "../../utils";
import { Box } from "../flex";
import "./Divider.css";

function useDividerStyles({ className }) {
  const classes = ["divider"];
  return classNames(classes);
}

export function Divider({ className, dataComponentName, dataTestId }) {
  const classes = useDividerStyles({ className });
  return (
    <Box
      component="hr"
      dataComponentName={dataComponentName}
      dataTestId={dataTestId}
      className={classes}
    />
  );
}
Divider.defaultProps = {
  className: "",
  dataComponentName: "UI-Divider",
  dataTestId: "",
};
