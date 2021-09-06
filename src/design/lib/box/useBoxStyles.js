import { createUseStyles } from 'react-jss';
import { classNames, resolveResponsiveProp } from '../utils';

const styleMap = {
  sizeUnits: {
    '100p': '100%',
    '100vw': 'calc(100vw)',
    '100vh': 'calc(100vh)',
  },
};

const useDynamicBoxStyles = createUseStyles({
  box: {
    flexShrink: ({ flexShrink }) => flexShrink,
    flexGrow: ({ flexGrow }) => flexGrow,
    flexBasis: ({ flexBasis }) => flexBasis,
    order: ({ order }) => order,
    width: ({ width }) => (styleMap.sizeUnits[width] ? styleMap.sizeUnits[width] : width),
    height: ({ height }) => (styleMap.sizeUnits[height] ? styleMap.sizeUnits[height] : height),
    maxHeight: ({ maxHeight }) =>
      styleMap.sizeUnits[maxHeight] ? styleMap.sizeUnits[maxHeight] : maxHeight,
    maxWidth: ({ maxWidth }) =>
      styleMap.sizeUnits[maxWidth] ? styleMap.sizeUnits[maxWidth] : maxWidth,
    minHeight: ({ minHeight }) =>
      styleMap.sizeUnits[minHeight] ? styleMap.sizeUnits[minHeight] : minHeight,
    minWidth: ({ minWidth }) =>
      styleMap.sizeUnits[minWidth] ? styleMap.sizeUnits[minWidth] : minWidth,
  },
});

export function useBoxStyles({
  // use bg to create a bg-color context
  className,
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
  cursor,
  display,
  elevation,
  flexDirection,
  flexShrink,
  flexGrow,
  flexBasis,
  justifyContent,
  alignItems,
  alignContent,
  order,
  width,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  flexWrap,
}) {
  const classes = [];

  // Padding
  if (p) {
    classes.push(resolveResponsiveProp(`ui-u-padding-left`, p));
    classes.push(resolveResponsiveProp(`ui-u-padding-top`, p));
    classes.push(resolveResponsiveProp(`ui-u-padding-right`, p));
    classes.push(resolveResponsiveProp(`ui-u-padding-bottom`, p));
  }
  if (px) {
    classes.push(resolveResponsiveProp(`ui-u-padding-left`, px));
    classes.push(resolveResponsiveProp(`ui-u-padding-right`, px));
  }
  if (py) {
    classes.push(resolveResponsiveProp(`ui-u-padding-top`, py));
    classes.push(resolveResponsiveProp(`ui-u-padding-bottom`, py));
  }
  if (pt) {
    classes.push(resolveResponsiveProp(`ui-u-padding-top`, pt));
  }
  if (pr) {
    classes.push(resolveResponsiveProp(`ui-u-padding-right`, pr));
  }
  if (pb) {
    classes.push(resolveResponsiveProp(`ui-u-padding-bottom`, pb));
  }
  if (pl) {
    classes.push(resolveResponsiveProp(`ui-u-padding-left`, pl));
  }
  // Margin
  if (m) {
    classes.push(resolveResponsiveProp(`ui-u-margin-left`, m));
    classes.push(resolveResponsiveProp(`ui-u-margin-top`, m));
    classes.push(resolveResponsiveProp(`ui-u-margin-right`, m));
    classes.push(resolveResponsiveProp(`ui-u-margin-bottom`, m));
  }
  if (mx) {
    classes.push(resolveResponsiveProp(`ui-u-margin-left`, mx));
    classes.push(resolveResponsiveProp(`ui-u-margin-right`, mx));
  }
  if (my) {
    classes.push(resolveResponsiveProp(`ui-u-margin-top`, my));
    classes.push(resolveResponsiveProp(`ui-u-margin-bottom`, my));
  }
  if (mt) {
    classes.push(resolveResponsiveProp(`ui-u-margin-top`, mt));
  }
  if (mr) {
    classes.push(resolveResponsiveProp(`ui-u-margin-right`, mr));
  }
  if (mb) {
    classes.push(resolveResponsiveProp(`ui-u-margin-bottom`, mb));
  }
  if (ml) {
    classes.push(resolveResponsiveProp(`ui-u-margin-left`, ml));
  }
  // elevation
  if (elevation) {
    classes.push(resolveResponsiveProp(`ui-u-elevation`, elevation));
  }
  // display
  if (display) {
    classes.push(resolveResponsiveProp(`ui-u-display`, display));
  }
  // cursor
  if (cursor) {
    classes.push(resolveResponsiveProp(`ui-u-cursor`, cursor));
  }

  if (flexDirection) {
    classes.push(resolveResponsiveProp('ui-u-flex-direction', flexDirection));
  }

  if (justifyContent) {
    classes.push(resolveResponsiveProp('ui-u-justify-content', justifyContent));
  }

  if (alignContent) {
    classes.push(resolveResponsiveProp('ui-u-align-content', alignContent));
  }

  if (alignItems) {
    classes.push(resolveResponsiveProp('ui-u-align-items', alignItems));
  }

  if (flexWrap) {
    classes.push(resolveResponsiveProp('ui-u-flex-wrap', flexWrap));
  }

  const dynamicBoxClasses = useDynamicBoxStyles({
    flexShrink,
    flexGrow,
    flexBasis,
    order,
    width,
    height,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
  });

  if (dynamicBoxClasses?.box) {
    classes.push(dynamicBoxClasses.box);
  }

  // Modifier Class
  if (className) {
    classes.push(className);
  }

  return classNames(classes);
}
