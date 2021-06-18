import { FlexExample } from "./Flex";
import { TypographyExample } from "./Typography";
import {
  ButtonContainedExample,
  ButtonOutlinedExample,
  ButtonTextExample,
} from "./Button";
import { TabExample } from "./Tab";
import { AccordionExample } from "./Accordion";
import { Box, Typography } from "../design";
import "./DesignSystem.css";

export function DesignSystem() {
  return (
    <Box>
      <Box className="p24">
        <Typography variant="h4" component="h2">
          Box
        </Typography>
        <FlexExample />
      </Box>
      <Box className="p24">
        <Typography variant="h4" component="h2">
          Typography
        </Typography>
        <TypographyExample />
      </Box>
      <Box className="p24">
        <Typography variant="h5" component="h3">
          Buttons
        </Typography>
        <Box className="p16">
          <Typography variant="h6" component="h4">
            Contained
          </Typography>
          <ButtonContainedExample />
        </Box>
        <Box className="p16">
          <Typography variant="h6" component="h4">
            Outlined
          </Typography>
          <ButtonOutlinedExample />
        </Box>
        <Box className="p16">
          <Typography variant="h6" component="h4">
            Text
          </Typography>
          <ButtonTextExample />
        </Box>
      </Box>
      <Box className="p24">
        <Typography variant="h4" component="h2">
          Accordion
        </Typography>
        <AccordionExample />
      </Box>
      {/* <Box  className="p24">
        <Typography>Tab</Typography>
        <TabExample />
      </Box> */}
    </Box>
  );
}
