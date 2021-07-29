import { Box } from "../design";
import "./Flex.css";

const PropsMapper = {
  Container: {
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
      xl: "row",
    },
  },
};

export function FlexExample() {
  return (
    <Box {...PropsMapper.Container} alignItems="center">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        className="Box"
      >
        <Box>Name:</Box>
        <Box>Aniket</Box>
      </Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        className="Box"
      >
        <Box>Age:</Box>
        <Box>23</Box>
      </Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        className="Box"
      >
        <Box>Gender:</Box>
        <Box>Male</Box>
      </Box>
    </Box>
  );
}
