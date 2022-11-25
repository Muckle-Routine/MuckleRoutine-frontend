type Props = {
    iconSrc: string;
    text: string;
    onClick?: () => void;
    style?: string;
};

const IconTextButton = ({ iconSrc, text, onClick, style }: Props) => {
    return (
        <button className={`flex min-w-full flex-row p-4 rounded-xl bg-background02 ${style}`} onClick={onClick}>
            <img src={iconSrc} />
            <span className="text-white text-base font-bold ml-4">{text}</span>
        </button>
    );
};

export default IconTextButton;
