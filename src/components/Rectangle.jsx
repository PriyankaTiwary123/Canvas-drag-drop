import React from 'react';
import './MyCanvas.css';

export const Rectangle = (props = {}) => {
    const {
        width,
        height,
        color,
        toolbarAction,
        dropTargetRectangle,

    } = props;

    const canvas1 = React.useRef(null);
    const canvas2 = React.useRef(null);

    React.useLayoutEffect(() => {
        if (toolbarAction === 'scissor' && dropTargetRectangle === 'rectangle') {
            const context1 = canvas1.current.getContext("2d");
            const context2 = canvas2.current.getContext("2d");
            context1.beginPath();
            context1.fillStyle = color;
            context1.fillRect(10, 10, width, height);
            context1.closePath();

            context2.beginPath();
            context2.fillStyle = color;
            context2.fillRect(10, 10, width, height);
            context2.closePath();

        } else if (toolbarAction === 'glue') {
            const context1 = canvas1.current.getContext("2d");
            context1.beginPath();
            context1.fillStyle = color;
            context1.fillRect(10, 10, width, height);
            context1.closePath();
        }
        else if (!dropTargetRectangle && toolbarAction === 'scissor') {
            const context1 = canvas1.current.getContext("2d");
            context1.beginPath();
            context1.fillStyle = color;
            context1.fillRect(10, 10, width, height);
            context1.closePath();
        }


    }, [dropTargetRectangle, toolbarAction,width,color,height]);

    return (
        <div>
            {
                !dropTargetRectangle && toolbarAction === 'scissor' ?
                    <canvas ref={canvas1} width={width} height={height} /> :
                    toolbarAction === 'scissor' && dropTargetRectangle==='rectangle' ?
                        <div className="split-rec">
                            <canvas ref={canvas1} width={width / 2} height={height} />
                            <canvas ref={canvas2} width={width / 2} height={height} />
                        </div> :
                            toolbarAction === 'glue' ?
                            <canvas ref={canvas1} width={width} height={height} /> :
                            ''                           
            }
        </div>
    )
};