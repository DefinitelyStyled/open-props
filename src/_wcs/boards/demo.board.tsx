import { createBoard } from '@wixc3/react-board';
import '../../demo/globals.st.css';
// ToDo: fix WCS resolve from 'open-props/style'
import './open-props.min.css';
import { Demo } from '../../demo/demo';

export default createBoard({
    name: 'open props demo',
    Board: () => <Demo />,
    environmentProps: {
        windowHeight: 3064,
        windowWidth: 818,
        canvasWidth: 724,
    },
});
