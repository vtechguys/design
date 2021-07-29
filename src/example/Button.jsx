import { Button, Box } from "../design";

const StyleSheet = {
  buttonClassName: "mr16",
};

export function ButtonContainedExample() {
  return (
    <Box className="p16">
      <Button
        variant="contained"
        color="success"
        className={StyleSheet.buttonClassName}
      >
        Success
      </Button>
      <Button
        variant="contained"
        color="warning"
        className={StyleSheet.buttonClassName}
      >
        Warning
      </Button>
      <Button
        variant="contained"
        color="info"
        className={StyleSheet.buttonClassName}
      >
        Info
      </Button>
      <Button
        variant="contained"
        color="danger"
        className={StyleSheet.buttonClassName}
      >
        Danger
      </Button>
    </Box>
  );
}
export function ButtonOutlinedExample() {
  return (
    <Box className="p16">
      {" "}
      <Button
        variant="outlined"
        color="success"
        className={StyleSheet.buttonClassName}
      >
        Success
      </Button>
      <Button
        variant="outlined"
        color="warning"
        className={StyleSheet.buttonClassName}
      >
        Warning
      </Button>
      <Button
        variant="outlined"
        color="info"
        className={StyleSheet.buttonClassName}
      >
        Info
      </Button>
      <Button
        variant="outlined"
        color="danger"
        className={StyleSheet.buttonClassName}
      >
        Danger
      </Button>
    </Box>
  );
}
export function ButtonTextExample() {
  return (
    <Box className="p16">
      <Button
        variant="text"
        color="success"
        className={StyleSheet.buttonClassName}
      >
        Success
      </Button>
      <Button
        variant="text"
        color="warning"
        className={StyleSheet.buttonClassName}
      >
        Warning
      </Button>
      <Button
        variant="text"
        color="info"
        className={StyleSheet.buttonClassName}
      >
        Info
      </Button>
      <Button
        variant="text"
        color="danger"
        className={StyleSheet.buttonClassName}
      >
        Danger
      </Button>
    </Box>
  );
}
