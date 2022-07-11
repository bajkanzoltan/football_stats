import React, { useState } from 'react'

export default function AccordionItem({item}) {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className='accordion'>
            <div className="accordion-que" onClick={() => setIsActive(!isActive)}>
                <div>{item.question}</div>
                <div className="accordion-icon">{isActive ? '-' : '+'}</div>
            </div>
            {isActive ? <div className="accordion-ans">{item.answer}</div> : ''}
        </div>
    )
}
