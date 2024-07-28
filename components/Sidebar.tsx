type SidebarProps = {
    onAddNewTask: () => void;
};


export default function Sidebar({ onAddNewTask }: SidebarProps) {
    return (
        <div className="h-screen bg-white border-l-[1px] border-[#DEDEDE] w-96 flex flex-col p-4">
            {/* Avatar and Name */}
            <div className="flex items-center mb-6">
                <img src="/avatar.svg" alt="avatar" className="w-12 h-12 mr-4 rounded-lg" />
                <h2 className="text-[20px] font-semibold">Joe Gardner</h2>
            </div>

            {/*/!* Icons and Logout Button *!/*/}
            <div className="flex justify-between mb-8 items-center">
                <div className="flex space-x-6">
                    <img src="/bellIcon.svg" alt="bellIcon" className="w-6 h-6 text-gray-600" />
                    <img src="/sunIcon.svg" alt="sunIcon" className="w-6 h-6 text-gray-600" />
                    <img src="/rightArrow.svg" alt="rightArrow" className="w-6 h-6 text-gray-600" />
                </div>
                <button className="flex items-center px-4 py-2 text-[#797979] bg-[#F4F4F4] rounded">
                    Logout
                </button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col gap-4 mb-8">
                <button className="flex items-center w-full py-2 px-4 text-left hover:bg-gray-100 rounded">
                    <img src="/homeIcon.svg" alt="homeIcon" className="mr-4 text-gray-600"/>
                    <span className="text-[#797979] text-lg">Home</span>
                </button>
                <button className="flex items-center w-full py-2 px-4 text-left hover:bg-gray-100 rounded">
                    <img src="/boardIcon.svg" alt="boardIcon" className="mr-4 text-gray-600"/>
                    <span className="text-[#797979] text-lg">Boards</span>
                </button>
                <button className="flex items-center w-full py-2 px-4 text-left hover:bg-gray-100 rounded">
                    <img src="/settingIcon.svg" alt="settingIcon" className="mr-4 text-gray-600"/>
                    <span className="text-[#797979] text-lg">Settings</span>
                </button>
                <button className="flex items-center w-full py-2 px-4 text-left hover:bg-gray-100 rounded">
                    <img src="/teamIcon.svg" alt="teamIcon" className="mr-4 text-gray-600"/>
                    <span className="text-[#797979] text-lg">Teams</span>
                </button>
                <button className="flex items-center w-full py-2 px-4 text-left hover:bg-gray-100 rounded">
                    <img src="/analyticIcon.svg" alt="analyticIcon" className="mr-4 text-gray-600"/>
                    <span className="text-[#797979] text-lg">Analytics</span>
                </button>
            </div>

            {/* Add New Task Button */}
            <button onClick={onAddNewTask} className="flex items-center justify-center px-4 py-2 bg-gradient-btn-blue text-white rounded-lg">
                Create New Task
                <img src="/addIcon.svg" alt="addIcon" className="ml-2"/>
            </button>
        </div>
    );
}
