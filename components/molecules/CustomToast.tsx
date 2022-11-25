import { Toast } from 'react-hot-toast';

type Props = {
    toast: Toast;
    text: string;
};

const CustomToast = ({ toast, text }: Props): JSX.Element => {
    return (
        <div className={`${toast.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full -mt-2`}>
            <div className="py-[17.5px] pl-4 bg-deactive rounded-[4px]">
                <span className="text-sm font-normal text-white">{text}</span>
            </div>
        </div>
    );
};

export default CustomToast;
