import { ReactNode } from 'react';

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex min-h-screen">
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                <nav>
                    <ul>
                        <li className="mb-2"><a href="/dashboard" className="hover:text-gray-300">Home</a></li>
                        <li className="mb-2"><a href="/dashboard/profile" className="hover:text-gray-300">Profile</a></li>
                        <li className="mb-2"><a href="/dashboard/settings" className="hover:text-gray-300">Settings</a></li>
                    </ul>
                </nav>
            </aside>
            <main className="flex-1 bg-gray-100 p-8">
                {children}
            </main>
        </div>
    );
}
