'use client'

import { Button } from '@/components/ui/button'
import { socialLinks } from '@/data/social-links'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
    const [isSShowHiddenText, setIsSShowHiddenText] = useState(false)

    return (
        <div className="@container flex items-center justify-center min-h-screen py-16 px-4">
            <div className="flex items-center justify-center h-full w-full max-w-sm">
                <div className="flex flex-col gap-4">
                    <div
                        className="w-64 min-h-64 flex justify-center items-center cursor-pointer transition-colors"
                        onClick={() => setIsSShowHiddenText((value) => !value)}
                    >
                        {!isSShowHiddenText ? (
                            <img
                                src="/Avatar_Phoenix_transparent.png"
                                alt="Papa Phoenix's Logo"
                            />
                        ) : (
                            <h3 className='py-32 font-medium'>
                                lai xe va sap rai nha!
                            </h3>
                        )}
                    </div>
                    <h1 className="text-3xl font-black text-center font-lexend -mt-8 mb-4">
                        PaPa Phoenix
                    </h1>
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 p-2 rounded-lg bg-primary hover:bg-primary/90 transition-colors relative font-quicksand text-primary-foreground"
                        >
                            <Image
                                src={link.icon}
                                alt={link.name}
                                width={24}
                                height={24}
                                className="absolute left-3 fill-primary-foreground text-primary-foreground"
                            />
                            <span className="text-xl font-black">
                                {link.name}
                            </span>
                        </a>
                    ))}
                </div>
                <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-center w-full h-10 bg-background/50 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-2 flex-1 px-4">
                        <span className="text-xs font-semibold text-primary-foreground">
                            PaPa Phoenix @ {new Date().getFullYear()}
                        </span>
                        <span className="text-xs font-semibold text-black/5">
                            Made with ❤️ by Fiezt
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    )
}
