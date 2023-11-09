import React from 'react'

export const Icons = (props) => {
    if (props.name === "icon-success") {
        return <svg xmlns="http://www.w3.org/2000/svg" width={54} height={54} {...props}>
            <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6A3A" />
                    <stop offset="100%" stopColor="#FF527B" />
                </linearGradient>
            </defs>
            <g fill="none">
                <circle cx={24} cy={24} r={24} fill="url(#a)" />
                <path
                    stroke="#FFF"
                    strokeWidth={4}
                    d="m9.286 24.686 8.334 7.98 19.094-18.285"
                />
            </g>
        </svg>
    }

    if (props.name === "icon-list") {
        return <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} {...props}>
            <g fill="none">
                <circle cx={10.5} cy={10.5} r={10.5} fill="#FF6155" />
                <path stroke="#FFF" strokeWidth={2} d="M6 11.381 8.735 14 15 8" />
            </g>
        </svg>
    }
}
