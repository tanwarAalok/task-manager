'use client'

import DashboardLayout from "@/components/DashboardLayout";
import {topCardsData} from "@/data/dashboardTopCardData";
import DashboardTopCards from "@/components/DashboardTopCards";
import {useState} from "react";
import TaskDraggableZone from "@/components/TaskDraggableZone";
import {Task} from "@/types";

const todoTasks: Task[] = [
    {
        id: 'todo-1',
        title: 'Design new landing page',
        description: 'Create a new design for the upcoming product launch.',
        priority: 'low',
        status: 'todos',
        deadline: new Date('2024-08-10'),
        createdAt: new Date('2024-07-23'),
    },
    {
        id: 'todo-2',
        title: 'Fix authentication bugs',
        description: 'Resolve login and signup issues reported by users.',
        priority: 'medium',
        status: 'todos',
        deadline: new Date('2024-08-05'),
        createdAt: new Date('2024-07-22'),
    },
];

const inProgressTasks: Task[] = [
    {
        id: 'inprogress-1',
        title: 'Update user profile page',
        description: 'Add new fields and validation to the user profile page.',
        priority: 'urgent',
        status: 'inProgress',
        deadline: new Date('2024-08-15'),
        createdAt: new Date('2024-07-20'),
    },
    {
        id: 'inprogress-2',
        title: 'Write unit tests',
        description: 'Ensure code coverage is above 80% for the new features.',
        priority: 'urgent',
        status: 'inProgress',
        deadline: new Date('2024-08-12'),
        createdAt: new Date('2024-07-21'),
    },
];

const underReviewTasks: Task[] = [
    {
        id: 'underreview-1',
        title: 'Review PR #42',
        description: 'Check the code and provide feedback on pull request #42.',
        priority: 'urgent',
        status: 'underReview',
        deadline: new Date('2024-08-08'),
        createdAt: new Date('2024-07-19'),
    },
    {
        id: 'underreview-2',
        title: 'Test new login flow',
        description: 'Verify the new login flow on sprioritying before release.',
        priority: 'urgent',
        status: 'underReview',
        deadline: new Date('2024-08-09'),
        createdAt: new Date('2024-07-18'),
    },
];

const finishedTasks: Task[] = [
    {
        id: 'finished-1',
        title: 'Deploy to production',
        description: 'Deploy the latest release to the production environment.',
        priority: 'low',
        status: 'finished',
        deadline: new Date('2024-07-25'),
        createdAt: new Date('2024-07-17'),
    },
    {
        id: 'finished-2',
        title: 'Update documentation',
        description: 'Update the user guide and API documentation.',
        priority: 'urgent',
        status: 'finished',
        deadline: new Date('2024-07-24'),
        createdAt: new Date('2024-07-16'),
    },
];

export default function Dashboard(){
    const [tasks, setTasks] = useState({
        todo: todoTasks,
        inProgress: inProgressTasks,
        underReview: underReviewTasks,
        finished: finishedTasks,
    });

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <header className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Good Morning, User</h1>
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
                            className="w-full px-4 py-2 border rounded pl-6"
                        />
                        <img src="/searchIcon.svg" alt="searchIcon" className="absolute right-3 top-1/2 transform -translate-y-1/2"/>
                    </div>
                    <div className="space-x-4 flex">
                        <button className="flex items-center px-4 py-2 text-[#797979]">
                            Calendar View
                            <img src="/calendarIcon.svg" alt="calendarIcon"  className="ml-2"/>
                        </button>
                        <button className="flex items-center px-4 py-2 text-[#797979]">
                            Automation
                            <img src="/automationIcon.svg" alt="automationIcon"  className="ml-2"/>
                        </button>
                        <button className="flex items-center px-4 py-2 text-[#797979]">
                            Filter
                            <img src="/filterIcon.svg" alt="filterIcon"  className="ml-2"/>
                        </button>
                        <button className="flex items-center px-4 py-2 text-[#797979]">
                            Share
                            <img src="/shareIcon.svg" alt="shareIcon"  className="ml-2"/>
                        </button>

                        <button className="flex items-center px-4 py-2 bg-gradient-btn-blue text-white rounded-[8px]">
                            Create New
                            <img src="/addIcon.svg" alt="addIcon"  className="ml-2"/>
                        </button>
                    </div>
                </div>

                <TaskDraggableZone
                    todos={todoTasks}
                    inProgress={inProgressTasks}
                    underReview={underReviewTasks}
                    finished={finishedTasks}
                />
            </div>
        </DashboardLayout>
    )
}