import Toggle from "./themetoggle";

export default function Navbar() {
    return (
        <nav className="py-3 bg-white dark:bg-black">
            <div className="w-[90%] mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Preferences</h1>
                <div className="flex flex-1 justify-end">
                    <Toggle/>
                </div>
            </div>

        </nav>
    )
}