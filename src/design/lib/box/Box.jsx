import { createElement } from 'react';
import { useBoxStyles } from './useBoxStyles';

export function Box(props) {
  // get style props, data component props, other diff props
  // we cannot do `delete props.display` becuase props are immutable
  // i.e why extract all in idependet variable
  const {
    // Box Props
    dataComponentName,
    dataTestId,
    dataRegionName,
    component = 'div',
    // styles props

    display,
    cursor,
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
    flexShrink,
    flexGrow,
    flexBasis,
    justifyContent,
    alignItems,
    alignContent,
    order,
    flexWrap,
    width,
    height,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,

    ...componentProps
  } = props;
  // css classes to be added
  const classes = useBoxStyles(props);

  // className
  if (classes) {
    componentProps.className = classes;
  }

  // attach QA props based on .env
  if (process.env.NODE_ENV !== 'production') {
    if (dataComponentName) {
      componentProps['data-component-name'] = dataComponentName;
    }
    if (dataRegionName) {
      componentProps['data-region-name'] = dataRegionName;
    }
    if (dataTestId) {
      componentProps['data-test-id'] = dataTestId;
    }
  }
  // create given html component
  return createElement(component, componentProps);
}
