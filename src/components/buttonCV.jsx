'use client'

import { Button } from "./ui/button"

export default function ButtonCV_Theme() {

    return (
        <>
            <Button className="bg-[#C8FF00]" size={"lg"}>
                <a
                    href="/cv.pdf"
                    download
                    className="flex flex-row gap-3 text-black hover:text-black/80"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Descargar CV
                </a>
            </Button>
        </>
    )
}