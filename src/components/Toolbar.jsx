import React  from 'react';
import glue from '../assets/glue.svg';
import eraser from '../assets/eraser.svg';
import scissor from '../assets/scissor.svg';
import './MyCanvas.css';

export const Toolbar = (props) => {
    
   
    return (
        <div className="my-toolbar">
           <img key='scissor'
            src={scissor}
            alt="A Scissor" 
            height="45px"
            width="45px" 
            draggable
            onDragStart={(e)=>{props.onDragStart(e,'scissor')}}
        />
           <img src={eraser} alt="An Eraser" height="45px" width="45px"  draggable
            onDragStart={(e)=>{props.onDragStart(e,'eraser')}} />
           <img src={glue} alt="A Glue" height="45px" width="45px"  draggable
            onDragStart={(e)=>{props.onDragStart(e,'glue')}} />
        </div>
    )
  };
  