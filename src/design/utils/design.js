import { createElement } from "react";

function getQAProps(dataComponentName = "", dataTestId = "") {
  let qaProps = null;
  if (process.env.NODE_ENV !== "production") {
    if (dataComponentName || dataTestId) {
      qaProps = {};
      if (dataTestId) {
        qaProps["data-test-id"] = dataTestId;
      }
      if (dataComponentName) {
        qaProps["data-component-name"] = dataComponentName;
      }
    }
  }
  return qaProps;
}
function addEventHandlers(props) {
  let eventHandlers = null;
  if (props.onClick || props.onMouseOver) {
    eventHandlers = {};
    if (props.onClick) {
      eventHandlers.onClick = props.onClick;
    }
    if (props.onMouseOver) {
      eventHandlers.onMouseOver = props.onMouseOver;
    }
  }
  return eventHandlers;
}

export function createDesignElement(
  component,
  { dataComponentName, dataTestId, className, ...props }
) {
  const componentProps = {
    ...props,
    ...getQAProps(dataComponentName, dataTestId),
    ...addEventHandlers(props),
  };
  if (className.length) {
    componentProps.className = className;
  }
  return createElement(component, componentProps);
}
