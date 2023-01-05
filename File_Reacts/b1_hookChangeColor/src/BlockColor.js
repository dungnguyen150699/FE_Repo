import React,{ useState,useEffect } from 'react';

export default function BlockColor(props) {

    var [color,setColor] = useState('pink');
    const setStyle = {
        width: '50px',
        height: '50px',
        display: 'block',
        backgroundColor: color+'',
        color:'black',
        border: 'black solid 1px'
    }
    useEffect(() => {
        // effect didMountComponent
        setColor(props.color)
        const setStyle = {
            width: '50px',
            display: 'block',
            height: '50px',
            backgroundColor: 'black'+'',
            color:'black',
            border: 'black solid 1px'
        }
        console.log(color);
      },[props.color]);
      
    return (
        
        <div>
            <span style={setStyle}></span>
        </div>
    )
}
