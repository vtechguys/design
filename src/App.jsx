import "./App.css";
import { Col, Row, Container, Box } from "./design";
// App css
import "./App.css";

const StyleSheet = {
  row1: {
    cells: {
      span: {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 1
      }
    }
  },
};


function App() {
  return (
    <Container mode="fixed">
      <Row>
        <Col className="div-bg--aliceblue" span={StyleSheet.row1.cells.span}>1</Col>
        <Col className="div-bg--aqua" span={StyleSheet.row1.cells.span}>2</Col>
        <Col className="div-bg--blue" span={StyleSheet.row1.cells.span}>3</Col>
        <Col className="div-bg--blueviolet" span={StyleSheet.row1.cells.span}>4</Col>
        <Col className="div-bg--brown" span={StyleSheet.row1.cells.span}>5</Col>
        <Col className="div-bg--chartreuse" span={StyleSheet.row1.cells.span}>6</Col>
        <Col className="div-bg--gold" span={StyleSheet.row1.cells.span}>7</Col>
        <Col className="div-bg--crimson" span={StyleSheet.row1.cells.span}>8</Col>
        <Col className="div-bg--teal" span={StyleSheet.row1.cells.span}>9</Col>
        <Col className="div-bg--orange" span={StyleSheet.row1.cells.span}>11</Col>
        <Col className="div-bg--chocolate" span={StyleSheet.row1.cells.span}>10</Col>
        <Col className="div-bg--plum" span={StyleSheet.row1.cells.span}>12</Col>
      </Row>
    </Container>
  );
}

export default App;
