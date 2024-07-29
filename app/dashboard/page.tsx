import DashboardLayout from "@/components/DashboardLayout";
import {topCardsData} from "@/data/dashboardTopCardData";
import DashboardTopCards from "@/components/DashboardTopCards";
import TaskDraggableZone from "@/components/TaskDraggableZone";


export default function Dashboard(){

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <header className="flex justify-between items-center">
                    <h1 className="text-5xl font-bold">Good Morning, User</h1>
                    <button
                        className="flex items-center">
                        Help & feedback
                        <img src="/help.svg" alt="help icon" className="w-5 h-5 ml-1" />
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        topCardsData.map((card, index) => (
                            <DashboardTopCards
                                key={index}
                                imgSrc={card.imgSrc}
                                title={card.title}
                                description={card.description}
                            />
                        ))
                    }
                </div>

                <div className="flex justify-between items-center">
                    <div className="relative w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-4 py-2 border border-[#E9E9E9] rounded-lg pl-6"
                        />
                        <img src="/searchIcon.svg" alt="searchIcon" className="absolute right-3 top-1/2 transform -translate-y-1/2"/>
                    </div>
                    <div className="space-x-4 flex">
                        <button className="flex items-center px-4 py-2 text-[#797979] bg-[#F4F4F4] rounded">
                            Calendar View
                            <img src="/calendarIcon.svg" alt="calendarIcon"  className="ml-2"/>
                        </button>
                        <button className="flex items-center px-4 py-2 text-[#797979] bg-[#F4F4F4] rounded">
                            Automation
                            <img src="/automationIcon.svg" alt="automationIcon"  className="ml-2"/>
                        </button>
                        <button className="flex items-center px-4 py-2 text-[#797979] bg-[#F4F4F4] rounded">
                            Filter
                            <img src="/filterIcon.svg" alt="filterIcon"  className="ml-2"/>
                        </button>
                        <button className="flex items-center px-4 py-2 text-[#797979] bg-[#F4F4F4] rounded">
                            Share
                            <img src="/shareIcon.svg" alt="shareIcon"  className="ml-2"/>
                        </button>

                        <button className="flex items-center px-4 py-2 bg-gradient-btn-blue text-white rounded-lg">
                            Create New
                            <img src="/addIcon.svg" alt="addIcon"  className="ml-2"/>
                        </button>
                    </div>
                </div>

                <TaskDraggableZone />
            </div>
        </DashboardLayout>
    )
}