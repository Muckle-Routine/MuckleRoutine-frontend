type Props = {
    text: string;
    selected: boolean;
    onSelect: (text: string) => void;
};

const Chip = ({ text, selected, onSelect }: Props) => {
    return (
        <button
            className={`rounded-2xl py-1 px-4 mx-1 inline-block max-h-8 min-w-max ${
                selected ? 'bg-primary' : 'border border-deactive'
            }`}
            onClick={() => onSelect(text)}
        >
            <span
                className={`text-base text-[14px] font-semibold text-center ${
                    selected ? 'text-white' : 'text-deactive'
                }`}
            >
                {text}
            </span>
        </button>
    );
};

export default Chip;
