import Link from "next/link"

export function SiteNav() {
    return (
        <div className="text-lg bg-primary text-primary-foreground shadow-lg w-2xl mx-auto border-1 border-primary rounded-2xl mt-6 py-2 px-12 flex">
            <div className="flex-1">
                <Link href="/">
                    <span className="font-bold">Hilarity</span>AI
                </Link>
            </div>
        </div>
    )
}