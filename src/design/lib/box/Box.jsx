import { createElement } from "react";
import { useBoxStyles } from "./useBoxStyles";
import "./css/main.css";

export function Box(props) {
  const {
    // Box Props
    dataComponentName,
    dataTestId,
    // css props
    display,
    cursor,
    component = "div",
    bg,
    className,
    color,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    overflow,
    ...componentProps
  } = props;
  const classes = useBoxStyles(props);

  // className
  if (classes) {
    componentProps.className = classes;
  }

  if (process.env.NODE_ENV !== "production") {
    if (dataComponentName) {
      componentProps["data-component-name"] = dataComponentName;
    }
    if (dataTestId) {
      componentProps["data-test-id"] = dataTestId;
    }
  }

  return createElement(component, componentProps);
}
