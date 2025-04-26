'use client'
import { useState } from 'react'

function PapaPhoenixHead() {
    const [isSShowHiddenText, setIsSShowHiddenText] = useState(false)
    return (
        <div
            className="w-64 min-h-64 flex justify-center items-center cursor-pointer transition-colors select-none"
            onClick={() => setIsSShowHiddenText((value) => !value)}
        >
            {!isSShowHiddenText ? (
                <img
                    src="/Avatar_Phoenix_transparent.png"
                    alt="Papa Phoenix's Logo"
                />
            ) : (
                <h3 className="py-32 font-medium">lai xe va sap rai nha!</h3>
            )}
        </div>
    )
}

export default PapaPhoenixHead
