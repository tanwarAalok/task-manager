'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

type ProtectedRouteProps = {
    children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const router = useRouter();
    const { token } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (!token) {
            router.push('/auth');
        }
    }, [token, router]);

    return token ? <>{children}</> : null;
}
