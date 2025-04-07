import { SidebarOptions } from "./sidebar-options";

export function Sidebar() {
    return (
        <div>
            <div className="h-full bg-white rounded-2xl shadow-lg">
                <div className="w-80 p-4 ">
                    <h1 className="text-2xl">
                        <span className="font-bold">Hilarity</span>AI
                    </h1>
                    <p className="mt-4 text-sm">Generate humourous content for your social media platforms</p>
                </div>
                <SidebarOptions className="px-4"/>
            </div>
        </div>
    );
}