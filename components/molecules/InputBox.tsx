import { HTMLInputTypeAttribute } from 'react';

type Props = {
    placeholder?: string;
    value: string;
    onChange: (text: string) => void;
    type?: HTMLInputTypeAttribute;
    style?: string;
};

const InputBox = ({ placeholder, value, onChange, type = 'text', style }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    const handleClearInput = () => onChange('');

    return (
        <div className={`flex flex-rows items-center py-2 px-4 bg-background02 rounded-xl flex-1 ${style}`}>
            <input
                className="text-base text-[14px] font-semibold text-white bg-transparent flex-1 focus:outline-none"
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
            {false && (
                <button className=" justify-center items-center flex p-2" onClick={handleClearInput}>
                    <img src="/ic-close.png" alt="icon-add" className="w-4 h-4" />
                </button>
            )}
        </div>
    );
};

export default InputBox;
