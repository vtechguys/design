import { Box } from '../../box';

import { useColumnStyles } from './useColumnStyles';
// component-css
import './css/main.css';

export function Column(props) {
  const classes = useColumnStyles(props);
  return (
    <Box
      {...props}
      display="flex"
      flexDirection="column"
      flexGrow={0}
      flexShrink={1}
      flexBasis="auto"
      flexWrap="wrap"
      className={classes}
    />
  );
}
