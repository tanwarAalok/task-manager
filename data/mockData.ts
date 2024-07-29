import {Board, Task} from "@/types";


export const mockTasks: Task[] = [
    {
        id: '1',
        title: 'Design new landing page',
        description: 'Create a new design for the upcoming product launch.',
        priority: 'low',
        status: 'todo',
        deadline: new Date('2024-08-10'),
        createdAt: new Date('2024-07-23'),
    },
    {
        id: '2',
        title: 'Fix authentication bugs',
        description: 'Resolve login and signup issues reported by users.',
        priority: 'medium',
        status: 'todo',
        deadline: new Date('2024-08-05'),
        createdAt: new Date('2024-07-22'),
    },
    {
        id: '3',
        title: 'Update user profile page',
        description: 'Add new fields and validation to the user profile page.',
        priority: 'urgent',
        status: 'inprogress',
        deadline: new Date('2024-08-15'),
        createdAt: new Date('2024-07-20'),
    },
    {
        id: '4',
        title: 'Write unit tests',
        description: 'Ensure code coverage is above 80% for the new features.',
        priority: 'urgent',
        status: 'inprogress',
        deadline: new Date('2024-08-12'),
        createdAt: new Date('2024-07-21'),
    },
    {
        id: '5',
        title: 'Review PR #42',
        description: 'Check the code and provide feedback on pull request #42.',
        priority: 'urgent',
        status: 'underreview',
        deadline: new Date('2024-08-08'),
        createdAt: new Date('2024-07-19'),
    },
    {
        id: '6',
        title: 'Test new login flow',
        description: 'Verify the new login flow on sprioritying before release.',
        priority: 'urgent',
        status: 'underreview',
        deadline: new Date('2024-08-09'),
        createdAt: new Date('2024-07-18'),
    },
    {
        id: '7',
        title: 'Deploy to production',
        description: 'Deploy the latest release to the production environment.',
        priority: 'low',
        status: 'finished',
        deadline: new Date('2024-07-25'),
        createdAt: new Date('2024-07-17'),
    },
    {
        id: '8',
        title: 'Update documentation',
        description: 'Update the user guide and API documentation.',
        priority: 'urgent',
        status: 'finished',
        deadline: new Date('2024-07-24'),
        createdAt: new Date('2024-07-16'),
    },
]

export const mockBoard: Board = {
    columns: new Map([
        ["todo", {
            id: "todo",
            tasks: [
                {
                    id: "todo-1",
                    title: "Task 1",
                    description: "Description for task 1",
                    status: "todo",
                    priority: "low",
                    deadline: new Date('2024-08-10'),
                    createdAt: new Date('2024-07-23')
                },
                {
                    id: "todo-2",
                    title: "Task 2",
                    description: "Description for task 2",
                    status: "todo",
                    priority: "medium",
                    deadline: new Date('2024-08-15'),
                    createdAt: new Date('2024-07-20')
                }
            ]
        }],
        ["inprogress", {
            id: "inprogress",
            tasks: [
                {
                    id: "inprogress-1",
                    title: "Task 3",
                    description: "Description for task 3",
                    status: "inprogress",
                    priority: "urgent",
                    deadline: new Date('2024-08-12'),
                    createdAt: new Date('2024-07-22')
                }
            ]
        }],
        ["underreview", {
            id: "underreview",
            tasks: [
                {
                    id: "underreview-1",
                    title: "Task 4",
                    description: "Description for task 4",
                    status: "underreview",
                    priority: "medium",
                    deadline: new Date('2024-08-20'),
                    createdAt: new Date('2024-07-21')
                }
            ]
        }],
        ["finished", {
            id: "finished",
            tasks: [
                {
                    id: "finished-1",
                    title: "Task 5",
                    description: "Description for task 5",
                    status: "finished",
                    priority: "low",
                    deadline: new Date('2024-08-18'),
                    createdAt: new Date('2024-07-19')
                }
            ]
        }]
    ])
};