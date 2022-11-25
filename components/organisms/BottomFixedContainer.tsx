import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    style?: string;
};

const BottomFixedContainer = ({ children, style }: Props) => {
    return <div className={`max-w-md fixed bottom-0 w-full pt-4 bg-background01 ${style}`}>{children}</div>;
};

export default BottomFixedContainer;
