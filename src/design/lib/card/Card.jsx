import {
  useCardStyles,
  useCardHeaderStyles,
  useCardFooterStyles,
  useCardBodyStyles,
} from './useCardStyles';

export function Card(props) {
  const { ...restProps } = props;
  const classes = useCardStyles();
  return <Box></Box>;
}

export function CardHeader() {}

export function CardBody() {}

export function CardFooter() {}
