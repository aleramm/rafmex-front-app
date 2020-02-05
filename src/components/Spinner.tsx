import React, { useState} from 'react';
import '../assets/css/spinner.css';

const Spinner: React.FC<{color: string}> = (props) => {
    const [ colorDefine , setColor] = useState('sk-child');

    if(props.color !== undefined && props.color !== null){
        setColor(props.color);
    }

    return (
        <div className="mt-5 sk-circle">
            <div className={`sk-circle1 ${colorDefine}`}></div>
            <div className={`sk-circle2 ${colorDefine}`}></div>
            <div className={`sk-circle3 ${colorDefine}`}></div>
            <div className={`sk-circle4 ${colorDefine}`}></div>
            <div className={`sk-circle5 ${colorDefine}`}></div>
            <div className={`sk-circle6 ${colorDefine}`}></div>
            <div className={`sk-circle7 ${colorDefine}`}></div>
            <div className={`sk-circle8 ${colorDefine}`}></div>
            <div className={`sk-circle9 ${colorDefine}`}></div>
            <div className={`sk-circle10 ${colorDefine}`}></div>
            <div className={`sk-circle11 ${colorDefine}`}></div>
            <div className={`sk-circle12 ${colorDefine}`}></div>
        </div>
    );
}

export default Spinner;