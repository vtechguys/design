import { createElement } from "react";
import { createDesignElement } from "../../utils";

import "./Typography.css";

export function Typography({
  component,
  variant,
  className,
  dataTestId,
  ...props
}) {
  return createDesignElement(component, {
    ...props,
    className: `${variant} ${className}`.trim(),
  });
}
Typography.defaultProps = {
  component: "p",
  className: "",
  dataComponentName: "UI-Typography",
  dataTestId: "",
  variant: "body1",
};
