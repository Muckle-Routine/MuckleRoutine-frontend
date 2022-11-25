type Props = {
    positive: boolean;
    style?: string;
};

const ExampleBadge = ({ positive, style }: Props) => {
    return (
        <div className={`rounded-full bg-background02 p-2 w-10 h-10 ${style}`}>
            <div
                className={`rounded-full w-6 h-6 justify-center items-center flex ${
                    positive ? 'bg-primary' : 'bg-error'
                }`}
            >
                <img
                    src={positive ? '/ic-check.svg' : '/ic-close.svg'}
                    alt="example-sign-icon"
                    className="w-[9.5px] h-[9.5px]"
                />
            </div>
        </div>
    );
};

export default ExampleBadge;
