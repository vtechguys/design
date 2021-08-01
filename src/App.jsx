import './design/design.css';
import './App.css';

import { Col, Row, Container, Box, mediaQueries } from './design';
// App css
import './App.css';

const StyleSheet = {
  AppWrapper: {
    width: '100vw',
    height: '100vh',
  },
  AppHeader: {
    p: 'sm',
    Header: {
      justifyContent: 'space-between',
      LogoArea: {
        // don't go more then 3 levels the accessing and naming tends to be messy
        justifyContent: 'space-between',
      },
    },
  },
  HeaderNavArea: {
    justifyContent: 'flex-end',
    // `NavItem: {...}` doing this prevent you from {...HeaderNavArea}
    NavItem: {
      mx: 'xs',
    },
  },
  AppBody: {
    width: '100p',
    my: 'md',
    Panel: {
      span: {
        xs: 12,
        sm: 12,
        md: 6,
        lg: 6,
      },
      minHeight: 400,
    },
  },
};

function App() {
  return (
    <Box
      dataRegionName="App"
      width={StyleSheet.AppWrapper.width}
      height={StyleSheet.AppWrapper.height}>
      <Box dataRegionName="AppHeader" p={StyleSheet.AppHeader.p}>
        <Container>
          <Row justifyContent={StyleSheet.AppHeader.Header.justifyContent}>
            <Col span={3}>
              <Container>
                <Row>
                  <Col span={3}>Logo</Col>
                  <Col span={5} skip={2}>
                    Brand
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col span={6}>
              <Container>
                <Row justifyContent={StyleSheet.HeaderNavArea.justifyContent}>
                  <Col span={2}>
                    <Box
                      py={StyleSheet.HeaderNavArea.NavItem.py}
                      mx={StyleSheet.HeaderNavArea.NavItem.mx}>
                      Link 1
                    </Box>
                  </Col>
                  <Col span={2}>
                    <Box
                      py={StyleSheet.HeaderNavArea.NavItem.py}
                      mx={StyleSheet.HeaderNavArea.NavItem.mx}>
                      Link 2{' '}
                    </Box>
                  </Col>
                  <Col span={2}>
                    <Box
                      py={StyleSheet.HeaderNavArea.NavItem.py}
                      mx={StyleSheet.HeaderNavArea.NavItem.mx}>
                      Link 3{' '}
                    </Box>
                  </Col>
                  <Col span={2}>
                    <Box
                      py={StyleSheet.HeaderNavArea.NavItem.py}
                      mx={StyleSheet.HeaderNavArea.NavItem.mx}>
                      Link 4{' '}
                    </Box>
                  </Col>
                  <Col span={2}>
                    <Box
                      py={StyleSheet.HeaderNavArea.NavItem.py}
                      mx={StyleSheet.HeaderNavArea.NavItem.mx}>
                      Link 5{' '}
                    </Box>
                  </Col>
                  <Col span={2}>
                    <Box
                      py={StyleSheet.HeaderNavArea.NavItem.py}
                      mx={StyleSheet.HeaderNavArea.NavItem.mx}>
                      Link 6{' '}
                    </Box>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Box>
      <Box dataRegionName="AppBody" width={StyleSheet.AppBody.width} my={StyleSheet.AppBody.my}>
        <Container mode="fixed">
          <Row>
            <Col span={StyleSheet.AppBody.Panel.span} className="div-bg--brown">
              {/* ! FIND A WAY TO MAKE minHeight and maxHeight a responsive props */}
              <Box py="sm" px="md" minHeight={StyleSheet.AppBody.Panel.minHeight}>
                Input
              </Box>
            </Col>
            <Col span={StyleSheet.AppBody.Panel.span} className="div-bg--aqua">
              <Box py="sm" px="md" minHeight={StyleSheet.AppBody.Panel.minHeight}>
                Output
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
      <Box dataRegionName="AppFooter"></Box>
      <Container mode="fluid">
        <Row>
          <Col className="div-bg--aliceblue">1</Col>
          <Col className="div-bg--aqua">2</Col>
          <Col className="div-bg--blue">3</Col>
          <Col className="div-bg--blueviolet">4</Col>
          <Col className="div-bg--brown">5</Col>
          <Col className="div-bg--chartreuse">6</Col>
          <Col className="div-bg--gold">7</Col>
          <Col className="div-bg--crimson">8</Col>
          <Col className="div-bg--teal">9</Col>
          <Col className="div-bg--orange">11</Col>
          <Col className="div-bg--chocolate">10</Col>
          <Col className="div-bg--plum">12</Col>
        </Row>
      </Container>
    </Box>
  );
}

export default App;
