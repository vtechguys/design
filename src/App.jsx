import "./App.css";
import { useThemeState } from "./design/DesignSystemProvider";
import { Col, Row } from "./design";
// App css
import "./App.css";

const StyleShhet = {
  row1: {
    paddingX: {
      xs: "xs",
      sm: "sm",
      md: "md",
      lg: "shiva"
    },
    cols: {
      span: {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 1
      }
    }
  }
};


function App() {
  return (
    <div>
      <Row px={StyleShhet.row1.paddingX}>
        <Col className="div-bg--aliceblue" span={StyleShhet.row1.cols.span}>1</Col>
        <Col className="div-bg--aqua" span={StyleShhet.row1.cols.span}>2</Col>
        <Col className="div-bg--blue" span={StyleShhet.row1.cols.span}>3</Col>
        <Col className="div-bg--blueviolet" span={StyleShhet.row1.cols.span}>4</Col>
        <Col className="div-bg--brown" span={StyleShhet.row1.cols.span}>5</Col>
        <Col className="div-bg--chartreuse" span={StyleShhet.row1.cols.span}>6</Col>
        <Col className="div-bg--gold" span={StyleShhet.row1.cols.span}>7</Col>
        <Col className="div-bg--crimson" span={StyleShhet.row1.cols.span}>8</Col>
        <Col className="div-bg--teal" span={StyleShhet.row1.cols.span}>9</Col>
        <Col className="div-bg--orange" span={StyleShhet.row1.cols.span}>11</Col>
        <Col className="div-bg--chocolate" span={StyleShhet.row1.cols.span}>10</Col>
        <Col className="div-bg--plum" span={StyleShhet.row1.cols.span}>12</Col>
      </Row>
      <Row>
        <Col span={1} className="div-bg--aqua">1</Col>
        <Col span={2} className="div-bg--crimson">2</Col>
        <Col span={4} className="div-bg--plum">4</Col>
        <Col span={2} skip={3} className="div-bg--teal">2</Col>
      </Row>
    </div>
  );
}

export default App;
