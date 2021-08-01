import { createUseStyles } from 'react-jss';
import { classNames, resolveResponsiveProp, resolveBreakpointUseStyleProp } from '../utils';

const styleMap = {
  sizeUnits: {
    '100p': '100%',
    '100vw': 'calc(100vw)',
    '100vh': 'calc(100vh)',
  },
};

const createMediaQueryUseStyles = styleObject => {
  const mqStyleObject = {};
  for (const className in styleObject) {
    if (!Object.prototype.hasOwnProperty.call(styleObject, className)) {
      continue;
    }
  }
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
  // [mediaQueries.xs]: {
  //   box: {
  //     flexShrink: ({ flexShrink }) => resolveBreakpointUseStyleProp(flexShrink, 'xs'),
  //     flexGrow: ({ flexGrow }) => resolveBreakpointUseStyleProp(flexGrow, 'xs'),
  //     flexBasis: ({ flexBasis }) => resolveBreakpointUseStyleProp(flexBasis, 'xs'),
  //     order: ({ order }) => resolveBreakpointUseStyleProp(order, 'xs'),
  //     width: ({ width }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[width] ? styleMap.sizeUnits[width] : width,
  //         'xs'
  //       ),
  //     height: ({ height }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[height] ? styleMap.sizeUnits[height] : height
  //       ),
  //     maxHeight: ({ maxHeight }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[maxHeight] ? styleMap.sizeUnits[maxHeight] : maxHeight,
  //         'xs'
  //       ),
  //     maxWidth: ({ maxWidth }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[maxWidth] ? styleMap.sizeUnits[maxWidth] : maxWidth,
  //         'xs'
  //       ),

  //     minWidth: ({ minWidth }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[minWidth] ? styleMap.sizeUnits[minWidth] : minWidth,
  //         'xs'
  //       ),
  //     minHeight: ({ minHeight }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[minHeight] ? styleMap.sizeUnits[minHeight] : minHeight,
  //         'xs'
  //       ),
  //   },
  // },

  // [mediaQueries.sm]: {
  //   box: {
  //     flexShrink: ({ flexShrink }) => resolveBreakpointUseStyleProp(flexShrink, 'sm'),
  //     flexGrow: ({ flexGrow }) => resolveBreakpointUseStyleProp(flexGrow, 'sm'),
  //     flexBasis: ({ flexBasis }) => resolveBreakpointUseStyleProp(flexBasis, 'sm'),
  //     order: ({ order }) => resolveBreakpointUseStyleProp(order, 'sm'),
  //     width: ({ width }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[width] ? styleMap.sizeUnits[width] : width,
  //         'sm'
  //       ),
  //     height: ({ height }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[height] ? styleMap.sizeUnits[height] : height
  //       ),
  //     maxHeight: ({ maxHeight }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[maxHeight] ? styleMap.sizeUnits[maxHeight] : maxHeight,
  //         'sm'
  //       ),
  //     maxWidth: ({ maxWidth }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[maxWidth] ? styleMap.sizeUnits[maxWidth] : maxWidth,
  //         'sm'
  //       ),
  //     minHeight: ({ minHeight }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[minHeight] ? styleMap.sizeUnits[minHeight] : minHeight,
  //         'sm'
  //       ),
  //     minWidth: ({ minWidth }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[minWidth] ? styleMap.sizeUnits[minWidth] : minWidth,
  //         'sm'
  //       ),
  //   },
  // },

  // [mediaQueries.md]: {
  //   box: {
  //     flexShrink: ({ flexShrink }) => resolveBreakpointUseStyleProp(flexShrink, 'md'),
  //     flexGrow: ({ flexGrow }) => resolveBreakpointUseStyleProp(flexGrow, 'md'),
  //     flexBasis: ({ flexBasis }) => resolveBreakpointUseStyleProp(flexBasis, 'md'),
  //     order: ({ order }) => resolveBreakpointUseStyleProp(order, 'md'),
  //     width: ({ width }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[width] ? styleMap.sizeUnits[width] : width,
  //         'md'
  //       ),
  //     height: ({ height }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[height] ? styleMap.sizeUnits[height] : height
  //       ),
  //     maxHeight: ({ maxHeight }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[maxHeight] ? styleMap.sizeUnits[maxHeight] : maxHeight,
  //         'md'
  //       ),
  //     maxWidth: ({ maxWidth }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[maxWidth] ? styleMap.sizeUnits[maxWidth] : maxWidth,
  //         'md'
  //       ),
  //     minHeight: ({ minHeight }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[minHeight] ? styleMap.sizeUnits[minHeight] : minHeight,
  //         'md'
  //       ),
  //     minWidth: ({ minWidth }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[minWidth] ? styleMap.sizeUnits[minWidth] : minWidth,
  //         'md'
  //       ),
  //   },
  // },
  // [mediaQueries.lg]: {
  //   box: {
  //     flexShrink: ({ flexShrink }) => resolveBreakpointUseStyleProp(flexShrink, 'lg'),
  //     flexGrow: ({ flexGrow }) => resolveBreakpointUseStyleProp(flexGrow, 'lg'),
  //     flexBasis: ({ flexBasis }) => resolveBreakpointUseStyleProp(flexBasis, 'lg'),
  //     order: ({ order }) => resolveBreakpointUseStyleProp(order, 'lg'),
  //     width: ({ width }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[width] ? styleMap.sizeUnits[width] : width,
  //         'lg'
  //       ),
  //     height: ({ height }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[height] ? styleMap.sizeUnits[height] : height
  //       ),
  //     maxHeight: ({ maxHeight }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[maxHeight] ? styleMap.sizeUnits[maxHeight] : maxHeight,
  //         'lg'
  //       ),
  //     maxWidth: ({ maxWidth }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[maxWidth] ? styleMap.sizeUnits[maxWidth] : maxWidth,
  //         'lg'
  //       ),
  //     minHeight: ({ minHeight }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[minHeight] ? styleMap.sizeUnits[minHeight] : minHeight,
  //         'lg'
  //       ),
  //     minWidth: ({ minWidth }) =>
  //       resolveBreakpointUseStyleProp(
  //         styleMap.sizeUnits[minWidth] ? styleMap.sizeUnits[minWidth] : minWidth,
  //         'lg'
  //       ),
  //   },
  // },

  // ! wish if this was possible

  // box: props => {
  //   // styles obj that need to be added dynamically
  //   const stylesObj = {};
  //   // to be used when prop is media query aware css prop
  //   let hasMq = false;
  //   const mqs = {
  //     xs: {},
  //     sm: {},
  //     md: {},
  //     lg: {},
  //   };

  //   for (const style in props) {
  //     // only direct values
  //     if (!Object.prototype.hasOwnProperty.call(props, style)) {
  //       continue;
  //     }
  //     // no need to add undefined/null values
  //     if (props[style] === undefined || props[style] === null) {
  //       continue;
  //     }

  //     // it is sure a media query aware pros
  //     if (typeof props[style] !== 'object') {
  //       stylesObj[style] = props[style];
  //       continue;
  //     }

  //     // get prop value for all mqs
  //     const { xs: forXs, sm: forSm, md: forMd, lg: forLg } = props[style];

  //     // if value exist for given mq then add to mqs style object
  //     // with that being present styles have mqAwareness
  //     if (forXs) {
  //       mqs.xs[style] = forXs;
  //       hasMq = true;
  //     }
  //     if (forSm) {
  //       mqs.sm[style] = forSm;
  //       hasMq = true;
  //     }
  //     if (forMd) {
  //       mqs.md[style] = forMd;
  //       hasMq = true;
  //     }
  //     if (forLg) {
  //       mqs.lg[style] = forLg;
  //       hasMq = true;
  //     }
  //   }

  //   // at this point we have recorded all mqAware styles and other styles

  //   // no specaial treatment is required for mq less styles
  //   if (!hasMq) {
  //     return stylesObj;
  //   }
  //   stylesObj.color = 'green';
  //   // for mq styles add these to style object
  //   for (const mq in mqs) {
  //     if (!Object.prototype.hasOwnProperty.call(mqs, mq)) {
  //       continue;
  //     }
  //     // add style for same class onmq
  //     stylesObj[mediaQueries[mq]] = { box: mqs[mq] };
  //   }
  //   stylesObj.backgroundColor = 'orange';
  //   stylesObj['@media (min-width: 500px)'] = {
  //     box: {
  //       border: '1px solid black',
  //     },
  //   };
  //   console.log(Object.entries(stylesObj));
  //   console.log(stylesObj);

  //   // return mq aware styles
  //   return stylesObj;
  // },
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
