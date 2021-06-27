import { classNames, resolveResponsiveProp } from "../../utils";

export function useBoxStyles({
  // use bg to create a bg-color context
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
  cursor,
  display,
  elevation
}) {
  const classes = [];

  // Padding
  if (p) {
    classes.push(resolveResponsiveProp(`ui-u-padding`, p));
  }
  if (px) {
    classes.push(resolveResponsiveProp(`ui-u-paddingX`, px));
  }
  if (py) {
    classes.push(resolveResponsiveProp(`ui-u-paddingY`, py));
  }
  if (pt) {
    classes.push(resolveResponsiveProp(`ui-u-paddingTop`, pt));
  }
  if (pr) {
    classes.push(resolveResponsiveProp(`ui-u-paddingRight`, pr));
  }
  if (pb) {
    classes.push(resolveResponsiveProp(`ui-u-paddingBottom`, pb));
  }
  if (pl) {
    classes.push(resolveResponsiveProp(`ui-u-paddingLeft`, pl));
  }
  // Margin
  if (m) {
    classes.push(resolveResponsiveProp(`ui-u-margin`, m));
  }
  if (mx) {
    classes.push(resolveResponsiveProp(`ui-u-marginX`, mx));
  }
  if (my) {
    classes.push(resolveResponsiveProp(`ui-u-marginY`, my));
  }
  if (mt) {
    classes.push(resolveResponsiveProp(`ui-u-marginTop`, mt));
  }
  if (mr) {
    classes.push(resolveResponsiveProp(`ui-u-marginRight`, mr));
  }
  if (mb) {
    classes.push(resolveResponsiveProp(`ui-u-marginBottom`, mb));
  }
  if (ml) {
    classes.push(resolveResponsiveProp(`ui-u-marginLeft`, ml));
  }

  if (elevation) {
    classes.push(resolveResponsiveProp(`ui-u-elevation`, elevation));
  }

  if (display) {
    classes.push(resolveResponsiveProp(`ui-u-display`, display));
  }

  if (cursor) {
    classes.push(resolveResponsiveProp(`ui-u-cursor`, cursor));
  }

  // Modifier Class
  if (className) {
    classes.push(className);
  }

  return classNames(classes);
}
