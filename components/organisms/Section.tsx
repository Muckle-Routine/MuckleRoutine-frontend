import { ReactNode } from 'react';

type Props = {
    title: string;
    children: ReactNode;
    style?: string;
};

const Section = ({ title, children, style }: Props) => {
    return (
        <div className={style}>
            <h3 className="text-white font-semibold text-base text-[14px] mb-1">{title}</h3>
            {children}
        </div>
    );
};

export default Section;
