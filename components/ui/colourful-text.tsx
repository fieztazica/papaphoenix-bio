'use client'
import React from 'react'
import { motion } from 'motion/react'

export default function ColourfulText({ text }: { text: string }) {
    const colors = [
        'rgb(131, 179, 32)',
        'rgb(47, 195, 106)',
        'rgb(42, 169, 210)',
        'rgb(4, 112, 202)',
        'rgb(107, 10, 255)',
        'rgb(183, 0, 218)',
        'rgb(218, 0, 171)',
        'rgb(230, 64, 92)',
        'rgb(232, 98, 63)',
        'rgb(249, 129, 47)',
        'rgb(72, 44, 123)',
        'rgb(210, 180, 140)',
        'rgb(255, 165, 0)',
        'rgb(60, 179, 113)',
        'rgb(0, 128, 128)',
        'rgb(255, 105, 180)',
        'rgb(75, 0, 130)',
        'rgb(139, 69, 19)',
        'rgb(152, 251, 152)',
        'rgb(70, 130, 180)',
        'rgb(220, 20, 60)',
        'rgb(255, 255, 0)',
        'rgb(128, 0, 128)',
        'rgb(30, 144, 255)',
        'rgb(199, 21, 133)',
        'rgb(0, 255, 255)',
        'rgb(255, 20, 147)',
        'rgb(34, 139, 34)',
        'rgb(47, 79, 79)',
        'rgb(255, 99, 71)',
        'rgb(0, 191, 255)',
        'rgb(186, 85, 211)',
    ]

    const [currentColors, setCurrentColors] = React.useState(colors)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {
            const shuffled = [...colors].sort(() => Math.random() - 0.5)
            setCurrentColors(shuffled)
            setCount((prev) => prev + 1)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return text.split('').map((char, index) => (
        <motion.span
            key={`${char}-${count}-${index}`}
            initial={{
                y: 0,
            }}
            animate={{
                color: currentColors[index % currentColors.length],
                y: [0, -3, 0],
                scale: [1, 1.01, 1],
                filter: ['blur(0px)', `blur(5px)`, 'blur(0px)'],
                opacity: [1, 0.8, 1],
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
            }}
            className="inline-block whitespace-pre font-sans tracking-tight"
        >
            {char}
        </motion.span>
    ))
}
