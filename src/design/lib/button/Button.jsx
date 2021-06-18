import { createDesignElement, classNames } from "../../utils";
import "./Button.css";

function useButtonStyles({ color, variant, className }) {
  const classes = ["ui-c-btn"];
  if (variant) {
    classes.push(`ui-c-btn-variant--${variant}`);
  }
  if (color) {
    classes.push(`ui-c-btn-color--${color}`);
  }
  if (className) {
    classes.push(className);
  }
  return classNames(classes);
}

/**
 *
 * @param {ButtonProps} ButtonProps
 */
export function Button({
  component,
  className = "",
  color,
  variant,
  ...props
}) {
  const classes = useButtonStyles({ variant, color, className });
  return createDesignElement(component, { ...props, className: classes });
}
Button.defaultProps = {
  component: "button",
  className: "",
  color: "default",
  dataComponentName: "UI-Button",
  dataTestId: "",
  type: "button",
  variant: "contained",
};
