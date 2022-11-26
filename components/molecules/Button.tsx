import { ReactNode } from 'react';

type Props = {
    onClick?: () => void;
    style?: string;
    type?: 'solid' | 'outline';
    children?: ReactNode;
};

const styles: Record<string, string> = {
    solid: 'bg-primary text-white ',
    outline: 'border-[1px] border-deactive text-deactive',
};

const Button = ({ type = 'solid', onClick, style, children }: Props): JSX.Element => {
    return (
        <button
            className={`min-h-[56px] flex-1 gap-[10px] rounded-xl text-base text-center font-bold ${styles[type]} ${style}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
