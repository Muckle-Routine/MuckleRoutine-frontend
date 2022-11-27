import { ReactNode } from 'react';
import NavBar from './NavBar';
import BottomSheetProvider from '@/components/organisms/DimProvider';

type Props = {
    children: ReactNode;
};

const NavLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col justify-between">
            <BottomSheetProvider>
                {children}
                <NavBar />
            </BottomSheetProvider>
        </div>
    );
};

export default NavLayout;
