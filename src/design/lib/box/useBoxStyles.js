import { classNames, resolveResponsiveProp } from "../../utils";

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
  elevation
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

  // Modifier Class
  if (className) {
    classes.push(className);
  }

  console.log(classes, className)
  return classNames(classes);
}
