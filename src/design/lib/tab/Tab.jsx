import { classNames } from "../../utils";
import { AccordionHeader, AccordionContent } from "../accordion";
import "./Tab.css";

// * TabContent
function useTabContentStyles({ className = "", isOpen }) {
  const classes = ["ui-c-tabContent"];
  if (isOpen) {
    classes.push("ui-c-tabOpen");
  }
  if (className) {
    classes.push(className);
  }
  return classNames(classes);
}
export function TabContent({
  dataComponentName,
  dataTestId,
  className,
  children,
  isOpen,
  unmountOnExit,
  ...props
}) {
  const classNames = useTabContentStyles({ className, isOpen });
  return (
    <AccordionContent
      {...props}
      isOpen={isOpen}
      flexGrow={1}
      dataComponentName={dataComponentName}
      dataTestId={dataTestId}
      className={classNames}
    >
      {unmountOnExit && !isOpen ? null : children}
    </AccordionContent>
  );
}
TabContent.defaultProps = {
  dataComponentName: "UI-TabContent",
  dataTestId: "",
  className: "",
  isOpen: false,
  unmountOnExit: false,
};

// * TabButton

function useTabButtonStyles({ className = "", isOpen }) {
  const classes = ["ui-c-tabButton"];
  if (isOpen) {
    classes.push("ui-c-tabOpen");
  }
  if (className) {
    classes.push(className);
  }
  return classNames(classes);
}

export function TabButton({
  dataComponentName,
  dataTestId,
  className,
  isOpen,
  ButtonProps,
  ...props
}) {
  const classNames = useTabButtonStyles({ className, isOpen });
  return (
    <AccordionHeader
      {...props}
      ButtonProps={ButtonProps}
      isOpen={isOpen}
      className={classNames}
      dataComponentName={dataComponentName}
      dataTestId={dataTestId}
    />
  );
}
TabButton.defaultProps = {
  dataComponentName: "UI-TabButton",
  dataTestId: "",
  className: "",
  isOpen: false,
  ButtonProps: { variant: "contained", color: "default" },
};
