import React from 'react';
import '../TodoApp/TodoApp'

export default function SubmitButtons (props) {
    return (
        <div className='input-button'>
        <button id='btn1' className='btn' onSubmit={props.handClick} style={{backgroundColor: 'tomato', color: 'whitesmoke'}}>Very Urgent</button>
        <button id='btn2' className='btn' onSubmit={props.handClick} style={{backgroundColor: 'goldenrod', color: 'whitesmoke'}}>Somewhat Urgent</button>
        <button id='btn3' className='btn' onSubmit={props.handClick} style={{backgroundColor: 'seagreen', color: 'whitesmoke'}}>Not Very Urgent</button>
        </div>
    )
}
