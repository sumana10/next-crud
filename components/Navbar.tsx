import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-indigo-400 px-8 py-3">
            <Link className="text-white text-2xl font-bold" href="/">Home</Link>
            <Link className="bg-white p-2 text-blue-900" href={"/addTopic"}>Add Topic</Link>
        </nav>
    )
}