import {Component} from "react";
import { Rect } from 'react-konva';
import Konva from 'konva';

class CanvasComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "white",
        }
    }

    render() {
        return (
            <Rect
                width={500}
                height={500}
                fill={this.state.color}
            />
        )
    }
}


export default CanvasComponent