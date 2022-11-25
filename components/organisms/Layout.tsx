import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-background01 container max-w-md m-auto min-h-screen">
            <main>{children}</main>
        </div>
    );
}
