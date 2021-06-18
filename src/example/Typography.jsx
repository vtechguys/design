import { Typography, typographyStyles } from "../design";
export function TypographyExample() {
  return (
    <>
      {" "}
      <Typography
        variant={typographyStyles.variant.heading1}
        component={typographyStyles.typographyComponent.h1}
      >
        Heading 1
      </Typography>
      <Typography
        variant={typographyStyles.variant.heading2}
        component={typographyStyles.typographyComponent.h2}
      >
        Heading 2
      </Typography>
      <Typography
        variant={typographyStyles.variant.heading3}
        component={typographyStyles.typographyComponent.h3}
      >
        Heading 3
      </Typography>
      <Typography
        variant={typographyStyles.variant.heading4}
        component={typographyStyles.typographyComponent.h4}
      >
        Heading 4
      </Typography>
      <Typography
        variant={typographyStyles.variant.heading5}
        component={typographyStyles.typographyComponent.h5}
      >
        Heading 5
      </Typography>
      <Typography
        variant={typographyStyles.variant.heading6}
        component={typographyStyles.typographyComponent.h6}
      >
        Heading 6
      </Typography>
      <Typography variant={typographyStyles.variant.body1}>Body 1</Typography>
      <Typography variant={typographyStyles.variant.body2}>Body 2</Typography>
      <Typography variant={typographyStyles.variant.caption}>
        Caption
      </Typography>
      <Typography variant={typographyStyles.variant.subtitle1}>
        Subtitle 1
      </Typography>
      <Typography variant={typographyStyles.variant.subtitle2}>
        Subtitle 2
      </Typography>
      <Typography variant={typographyStyles.variant.overview}>
        Overview
      </Typography>
    </>
  );
}
