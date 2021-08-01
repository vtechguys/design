import { classNames } from '../../utils';

export function useColumnStyles({ className }) {
  const classes = ['ui-c-column'];
  if (className) {
    classes.push(className);
  }
  return classNames(classes);
}
