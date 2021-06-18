import { createElement } from "react";
import { classNames } from "../../utils";
import "./Box.css";

export function Box({
  dataComponentName,
  dataTestId,
  children,
  component,
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
  flexDirection,
  flexGrow,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  alignSelf,
  order,
  elevation,
  ...props
}) {
  const classes = useBoxStyles({
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
    flexDirection,
    flexGrow,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    alignSelf,
    order,
    elevation,
  });
  const componentProps = {
    ...props,
    ...getQAProps(dataComponentName, dataTestId),
    children,
    className: classes,
  };

  return createElement(component, componentProps);
}

Box.defaultProps = {
  component: "div",
  dataComponentName: "UI-Box",
  dataTestId: "UI-Box",
};

function useBoxStyles({
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
  flexDirection,
  flexGrow,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  alignSelf,
  order,
  elevation,
}) {
  const classes = [];

  // Padding
  if (p) {
    classes.push(`ui-u-padding--${p}`);
  }
  if (px) {
    classes.push(`ui-u-paddingX--${px}`);
  }
  if (py) {
    classes.push(`ui-u-paddingY--${py}`);
  }
  if (pt) {
    classes.push(`ui-u-paddingTop--${pt}`);
  }
  if (pr) {
    classes.push(`ui-u-paddingRight--${pr}`);
  }
  if (pb) {
    classes.push(`ui-u-paddingBottom--${pb}`);
  }
  if (pl) {
    classes.push(`ui-u-paddingLeft--${pl}`);
  }
  // Margin
  if (m) {
    classes.push(`ui-u-margin--${m}`);
  }
  if (mx) {
    classes.push(`ui-u-marginX--${mx}`);
  }
  if (my) {
    classes.push(`ui-u-marginY--${my}`);
  }
  if (mt) {
    classes.push(`ui-u-marginTop--${mt}`);
  }
  if (mr) {
    classes.push(`ui-u-marginRight--${mr}`);
  }
  if (mb) {
    classes.push(`ui-u-marginBottom--${mb}`);
  }
  if (ml) {
    classes.push(`ui-u-marginLeft--${ml}`);
  }
  // Box
  if (flexDirection) {
    classes.push(resolveResponsiveProp("ui-l-flex", flexDirection));
  }
  if (justifyContent) {
    classes.push(resolveResponsiveProp("ui-l-justify-content", justifyContent));
  }
  if (alignItems) {
    classes.push(resolveResponsiveProp("ui-l-align-items", alignItems));
  }
  if (alignContent) {
    classes.push(resolveResponsiveProp("ui-l-align-content", alignContent));
  }
  if (flexWrap) {
    classes.push(resolveResponsiveProp("ui-l-flex-wrap", flexWrap));
  }
  if (alignSelf) {
    classes.push(resolveResponsiveProp("ui-l-align-self", alignSelf));
  }
  if (alignSelf) {
    classes.push(resolveResponsiveProp("ui-l-align-self", alignSelf));
  }
  if (typeof flexGrow !== "undefined") {
    classes.push(resolveResponsiveProp("ui-l-flex-grow", flexGrow));
  }
  if (elevation) {
    classes.push(`ui-u-elevation--${elevation}`);
  }

  // Modifier Class
  if (className) {
    classes.push(className);
  }
  return classNames(classes);
}

function resolveResponsiveProp(prefixClassName, prop) {
  if (typeof prop !== "object") {
    return `${prefixClassName}--${prop}`;
  }
  let classes = "";
  if (prop.xs) {
    classes += `xs:${prefixClassName}--${prop.xs}`;
  }
  if (prop.sm) {
    classes += ` sm:${prefixClassName}--${prop.sm}`;
  }
  if (prop.md) {
    classes += ` md:${prefixClassName}--${prop.md}`;
  }
  if (prop.lg) {
    classes += ` lg:${prefixClassName}--${prop.lg}`;
  }
  if (prop.xl) {
    classes += ` xl:${prefixClassName}--${prop.xl}`;
  }
  return classes;
}
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
// function addEventHandlers(props) {
//   let eventHandlers = null;
//   if (props.onClick || props.onMouseOver) {
//     eventHandlers = {};
//     if (props.onClick) {
//       eventHandlers.onClick = props.onClick;
//     }
//     if (props.onMouseOver) {
//       eventHandlers.onMouseOver = props.onMouseOver;
//     }
//   }
//   return eventHandlers;
// }
