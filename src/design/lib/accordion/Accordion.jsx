import { classNames } from "../../utils";
import { Box } from "../box";
import { useAccordion } from "./useAccordion";
import "./Accordion.css";

// Base Accordion
// Render children pattern
export function BaseAccordion(props) {
  const { openIndexes, handleItemClick } = useAccordion(props);
  return <>{props.children(openIndexes, handleItemClick)}</>;
}

// Accordion Item
function useAccordionItemStyle({ className, isOpen }) {
  const classes = ["ui-c-accordion-item"];
  if (isOpen) {
    classes.push("ui-c-accordion-item--open");
  }
  if (className) {
    classes.push(className);
  }
  return classNames(classes);
}
export function AccordionItem({
  className,
  children,
  dataComponentName,
  dataTestId,
  isOpen,
  ...props
}) {
  const classes = useAccordionItemStyle({ className, isOpen });
  return (
    <Box
      {...props}
      flexDirection="column"
      className={classes}
      dataComponentName={dataComponentName}
      dataTestId={dataTestId}
    >
      {children}
    </Box>
  );
}
AccordionItem.defaultProps = {
  dataComponentName: "UI-AccordionItem",
  dataTestId: "",
  className: "",
};

// Accordion ButtonOpen
function useAccordionHeaderStyle({ className }) {
  const classes = [
    "p16",
    "ui-u-cursor--pointer",
    "ui-c-accordion-item__header",
  ];

  if (className) {
    classes.push(className);
  }
  return classNames(classes);
}
export function AccordionHeader({ className, ...props }) {
  const classes = useAccordionHeaderStyle({
    className,
  });
  return <Box {...props} className={classes} />;
}
AccordionHeader.defaultProps = {
  component: "div",
  className: "",
  dataComponentName: "UI-AccordionHeader",
  dataTestId: "",
  isOpen: false,
};

// Accordion content
function useAccodionContentStyle({ className }) {
  const classes = ["p16", "ui-c-accordion-item__content"];
  if (className) {
    classes.push(className);
  }
  return classNames(classes);
}

export function AccordionContent({
  className,
  dataComponentName,
  dataTestId,
  children,
  unmountOnExit = false,
  isOpen,
}) {
  const classes = useAccodionContentStyle({ className });
  return (
    <Box
      className={classes}
      dataComponentName={dataComponentName}
      dataTestId={dataTestId}
    >
      {unmountOnExit && !isOpen ? null : children}
    </Box>
  );
}
AccordionContent.defaultProps = {
  className: "",
  dataComponentName: "UI-AccordionContent",
  dataTestId: "",
  isOpen: false,
  unmountOnExit: false,
};
