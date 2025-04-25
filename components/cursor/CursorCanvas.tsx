'use client'
import { useCanvasCursor } from '@/lib/hooks/use-canvas-cursor'
import React from 'react'

function CursorCanvas() {
    useCanvasCursor()
    return <canvas className="pointer-events-none fixed inset-0" id="canvas" />
}

export default CursorCanvas
