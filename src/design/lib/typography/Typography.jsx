import './Typography.css';
import { useTypogrphyStyles } from './useTypographyStyles';
import { createElement } from 'react';

export function Typography(props) {
  const { component, variant, className, ...restProps } = props;
  const classes = useTypogrphyStyles(props);
  if (classes) {
    restProps.className = classes;
  }
  return createElement(component, restProps);
}
