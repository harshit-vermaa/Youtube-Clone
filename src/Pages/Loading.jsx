import React, { useState } from 'react'
// import Typewriter from "typewriter-effect";

const Loading = ({ reason }) => {
    const [late, setlate] = useState(null);
    setInterval(() => {
        setlate('sorry i know its to much !!!')
    }, 10000);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh', flexDirection: 'column', gap: '1rem' }}>
            <h1 style={{ opacity: '0.8' }}>Please Wait {reason} is loading...</h1>
            <h2 style={{ opacity: '0.8' }}>{late}</h2>
        </div>
    )
}

export default Loading