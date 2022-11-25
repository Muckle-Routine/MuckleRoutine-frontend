type Props = {
    name: string;
    count: number;
    style?: string;
};

const CountCard = ({ name, count, style }: Props) => {
    return (
        <div
            className={`bg-background02 rounded-xl flex-1 justify-center items-center flex flex-col py-[18.5px] ${style}`}
        >
            <span className="text-base font-bold text-white">{name}</span>
            <div className="bg-primary rounded-full w-[33px] h-6 justify-center items-center flex mt-1">
                <span className="text-base text-[13px] font-bold text-active">{count}</span>
            </div>
        </div>
    );
};

export default CountCard;
