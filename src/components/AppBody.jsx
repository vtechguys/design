import { Box, Typography } from "../design";

const PropsMapper = {
  card: {
    style: {
      width: 250,
      height: 300,
      // border: "1px solid #ccc",
      // borderRadius: 20,
      margin: 10,
    },
  },
};

export function AppBody() {
  return (
    <Box className="pl24 pr24 pt16" flexDirection="column">
      <Card />
      <Card />
      <Card />
    </Box>
  );
}

function Card() {
  return (
    <Box
      className="p16"
      flexDirection="column"
      elevation="pop-out"
      {...PropsMapper.card}
    >
      <Box>
        <Typography variant="body1">CardHeading</Typography>
      </Box>
      <Box></Box>
      <Box></Box>
    </Box>
  );
}
