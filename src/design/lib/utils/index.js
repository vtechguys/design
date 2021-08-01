export function resolveResponsiveProp(prefixClassName, prop) {
  if (typeof prop !== 'object') {
    return `${prefixClassName}--${prop}`;
  }
  let classes = '';
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
export function classNames(classes, joinBy = ' ') {
  return Array.from(new Set(classes))
    .map(className => className.trim())
    .filter(Boolean)
    .join(joinBy)
    .trim();
}
export function resolveBreakpointUseStyleProp(prop, bp) {
  console.log(prop, bp);
  if (typeof prop === 'object' && bp in prop) {
    return prop[bp];
  }
  return prop;
}
