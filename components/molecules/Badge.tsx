type Props = {
    text: string;
    style?: string;
};

const Badge = ({ text, style }: Props) => {
    return (
        <div
            className={`rounded-lg justify-center items-center flex py-1 px-[10px] mx-1 max-h-8 min-w-max ${
                style ? style : 'bg-deactive'
            }`}
        >
            <span className="text-xs text-[10px] font-bold text-white">{text}</span>
        </div>
    );
};

export default Badge;
