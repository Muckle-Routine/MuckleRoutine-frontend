import { HTMLInputTypeAttribute, useState } from 'react';

type Props = {
    placeholder?: string;
    value: string;
    onChange: (text: string) => void;
    type?: HTMLInputTypeAttribute;
    style?: string;
};

const TextInput = ({ placeholder, value, type = 'text', onChange, style }: Props): JSX.Element => {
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className={style}>
            <span className="text-base text-[14px] font-semibold text-white">{placeholder}</span>
            <div className="py-3 flex flex-row justify-between pb-3 border-b-[1px] border-b-background02">
                <input
                    className="text-base text-[20px] font-semibold text-primary bg-transparent flex-1 focus:outline-none"
                    type={type === 'password' ? (passwordVisible ? 'text' : 'password') : type}
                    value={value}
                    onChange={handleChange}
                />
                {type === 'password' && (
                    <button className="ml-2" onClick={() => setPasswordVisible((prev) => !prev)}>
                        <img src="/ic-hide.png" alt="icon-hide-password" className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default TextInput;
