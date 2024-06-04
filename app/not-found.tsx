'use client'

import clsx from "clsx"
import Link from "next/link"
import { lusitana } from "./ui/fonts"

export default function NotFound({
   error,
   reset,
}: {
   error: Error & { digest?: string }
   reset: () => void
}) {
   return (
      <html>
         <body className={clsx(lusitana.className, "bg-black flex flex-col gap-8 justify-center items-center min-h-screen")}>
            <h2 className="text-4xl text-white">404 Page Error!</h2>
            <Link href='/dashboard' className="bg-blue-400 text-white px-4 py-2">Go to Home</Link>
         </body>
      </html>
   )
}