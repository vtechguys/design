export function resolveResponsiveProp(prefixClassName, prop) {
  if (typeof prop !== "object") {
    return `xs:${prefixClassName}--${prop}`;
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
export function classNames(classes, joinBy = " ") {
  return Array.from(new Set(classes)).join(joinBy).trim();
}