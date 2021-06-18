import { Link } from "react-router-dom";
import { Box } from "../design";

import BotIcon from "../design/icons/bot.svg";
export function Logo() {
  return (
    <Link to="/">
      <Box component="img" src={BotIcon} alt="Bot" flexGrow={1} />
    </Link>
  );
}
