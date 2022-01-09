import React from 'react'

export const Button = (props) => {
    return (
        <div style={{ backgroundColor: props.bgdColor, width: props.witdh, color: props.color }} >
            {
                props.children
            }
        </div>
    )
}
