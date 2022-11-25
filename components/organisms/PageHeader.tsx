import { useRouter } from 'next/router';

type Props = {
    canGoBack: boolean;
    title?: string;
    rightIconSrc?: string;
    onClickRight?: () => void;
};

const PageHeader = ({ canGoBack, title, rightIconSrc, onClickRight }: Props) => {
    const router = useRouter();

    return (
        <div className="flex-row flex justify-between items-center py-3 max-w-md w-full fixed top-0 px-6 bg-background01">
            {canGoBack && (
                <button
                    className="rounded-lg border-2 border-white/10 w-[30.67px] h-[30.67px] flex items-center justify-center"
                    onClick={() => router.back()}
                >
                    <img src={'/ic-arrow-left.png'} alt="ic-go-back" className="w-3 h-3" />
                </button>
            )}
            <h2 className="text-base text-[18px] font-semibold text-white">{title}</h2>
            <button
                className="flex justify-center items-center w-[30.67px] h-[30.67px]"
                onClick={onClickRight}
                disabled={rightIconSrc === undefined}
            >
                {rightIconSrc && <img src={rightIconSrc} alt="ic-go-back" className="w-6 h-6" />}
            </button>
        </div>
    );
};

export default PageHeader;
