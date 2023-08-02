import React from 'react'
import ShortButtonCustomized from './ShortButton'


export default function TimelineComponent({header, description, image, timeframe}) {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '35px', maxWidth: '482px' }}>
                <h1 style={{ fontSize: 'calc(16px + 2vmin)' }}>{header}</h1>
                <p style={{ fontSize: 'calc(9px + 1vmin)' }}>{description}</p>
                <ShortButtonCustomized text="Learn more"/>
            </div>


        </>
    )
}