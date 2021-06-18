import { Link } from "react-router-dom";
import { Button, Box, Typography } from "../design";

export function AppNav({ isAuthenticated }) {
  if (!isAuthenticated) {
    return (
      <Box
        flexGrow={1}
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Link to="/design">
          <Typography component="span" variant="body1">
            Design
          </Typography>
        </Link>
      </Box>
    );
  }
  return <Box>Profile</Box>;
}
