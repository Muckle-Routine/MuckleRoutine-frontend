import { ReactNode } from 'react';
import NavBar from './NavBar';

type Props = {
    children: ReactNode;
};

const NavLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col justify-between">
            {children}
            <NavBar />
        </div>
    );
};

export default NavLayout;
