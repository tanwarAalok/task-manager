import { ReactNode } from 'react';
import Sidebar from "@/components/Sidebar";

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-grow bg-[#F9F9F9] p-8">
                {children}
            </main>
        </div>
    );
}
