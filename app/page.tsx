import CursorCanvas from '@/components/cursor/CursorCanvas'
import { ModeToggle } from '@/components/mode-toggle'
import PapaPhoenixHead from '@/components/PapaPhoenixHead/PapaPhoenixHead'
import BackgroundGradient from '@/components/ui/background-gradient'
import { socialLinks } from '@/data/social-links'
import { IconHome } from '@tabler/icons-react'

export default function Home() {
    const links = [
        {
            title: 'Home',
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: '/',
        },
    ]

    return (
        <>
            {/* <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/20 dark:bg-transparent"></div> */}
            <div className="@container flex items-center justify-center min-h-screen px-4 bg-light-coral-400 z-10">
                <div className="fixed top-2 right-2 z-10">
                    <ModeToggle />
                </div>
                <BackgroundGradient
                    containerClassName="my-8"
                    className="flex items-center justify-center h-full w-full max-w-sm p-4 sm:p-10 rounded-[22px] bg-secondary dark:bg-zinc-900"
                >
                    <div className="flex flex-col gap-4">
                        <PapaPhoenixHead />
                        <h1 className="text-3xl font-black text-center font-lexend -mt-8 mb-4">
                            PaPa Phoenix
                        </h1>
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex justify-center items-center px-8 py-2 rounded-md bg-primary dark:bg-teal-500 dark:text-white font-bold transition duration-200 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black border-2 border-transparent hover:border-primary dark:hover:border-teal-500"
                            >
                                <link.icon className="absolute left-3" />
                                <span className="text-xl font-black">
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </BackgroundGradient>
                <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-center w-full h-10 bg-light-coral-400 backdrop-blur-md z-0">
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
            <CursorCanvas />
        </>
    )
}
