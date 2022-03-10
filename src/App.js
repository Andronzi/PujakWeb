import CanvasComponent from './components/CanvasComponent'
import React from 'react'
import { Stage, Layer, Text, Line } from 'react-konva';
import('./App.css');

class App extends React.Component {
  render() {
    return (
            <Stage width={500} height={500}>
              <Layer>
                  <Text text="click" />
                  <CanvasComponent />
                  <Line
                      x={0}
                      y={0}
                      points={[0, 500, 0, 0, 0, 0]}
                      strokeWidth={5}
                      tension={0.5}
                      closed
                      stroke="black"
                  />
                  <Line
                      x={0}
                      y={500}
                      points={[0, 0, 500, 0, 0, 0]}
                      strokeWidth={5}
                      tension={0.5}
                      closed
                      stroke="black"
                  />
                  <Line
                      x={0}
                      y={0}
                      points={[0, 0, 500, 0, 0, 0]}
                      strokeWidth={5}
                      tension={0.5}
                      closed
                      stroke="black"
                  />
                  <Line
                      x={500}
                      y={0}
                      points={[0, 500, 0, 0, 0, 0]}
                      strokeWidth={5}
                      tension={0.5}
                      closed
                      stroke="black"
                  />
              </Layer>
            </Stage>
    )
  }
}

export default App;
