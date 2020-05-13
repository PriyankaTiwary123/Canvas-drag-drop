import React, { useState } from 'react';
import { Rectangle } from './Rectangle';
import { Circle } from './Circle';
import { Triangle } from './Triangle';
import './MyCanvas.css';
import { Toolbar } from './Toolbar';
import canvasJson from '../assets/json/canvas.json';


export const MyCanvas = () => {
    const [initialTarget, setInitialTarget] = useState('glue');
    const [dropTargetRectangle, setDropTargetRectangle] = useState(undefined);
    const [dropTargetCircle, setDropTargetCircle] = useState(undefined);
    const [dropTargetTriangle, setDropTargetTriangle] = useState(undefined);

    const onDragStart = (ev, targetId) => {
        setInitialTarget(targetId)
    }
  
    const onDropRectangle = (event, targetObj) => {
        event.preventDefault()
        setDropTargetRectangle(targetObj);

    }
    const onDropCircle = (event, targetObj) => {
          event.preventDefault()
          setDropTargetCircle(targetObj);
  
      }
      const onDropTriangle= (event, targetObj) => {
          event.preventDefault()
          setDropTargetTriangle(targetObj);
  
      }

    const onDragOver = (event) => {
        event.preventDefault()
    }
    const resetCanvas=()=>{
        window.location.reload()
    }

    return (
        <div className="my-canvas"> 
        <div>
        <button className="reset-canvas" onClick={resetCanvas}>Reset</button>
            <div className="rectangle-container" onDragOver={(event) => onDragOver(event)} onDrop={(event) => { onDropRectangle(event, 'rectangle') }}>
                <Rectangle 
                    width={canvasJson.canvasDimensions.rectangle.width} 
                    height={canvasJson.canvasDimensions.rectangle.height} 
                    color={canvasJson.canvasDimensions.rectangle.color} 
                    toolbarAction={initialTarget} 
                    dropTargetRectangle={dropTargetRectangle}
                />
            </div>
            <div className="circle-container" onDragOver={(event) => onDragOver(event)} onDrop={(event) => { onDropCircle(event, 'circle') }} >
                <Circle 
                    width={canvasJson.canvasDimensions.circle.width} 
                    height={canvasJson.canvasDimensions.circle.height} 
                    pixelRatio={window.devicePixelRatio} 
                    color={canvasJson.canvasDimensions.circle.color} 
                    toolbarAction={initialTarget} 
                    dropTargetCircle={dropTargetCircle}
                />
            </div>
            <div className="traingle-container" onDragOver={(event) => onDragOver(event)} onDrop={(event) => { onDropTriangle(event, 'triangle') }} >
                <Triangle 
                    width={canvasJson.canvasDimensions.triangle.width} 
                    height={canvasJson.canvasDimensions.triangle.height} 
                    pixelRatio={window.devicePixelRatio} 
                    color={canvasJson.canvasDimensions.triangle.color} 
                    toolbarAction={initialTarget} 
                    dropTargetTriangle={dropTargetTriangle}
                />
            </div>
        </div>   
            <Toolbar onDragStart={(ev, name) => onDragStart(ev, name)} ></Toolbar>
        </div>
    )
};