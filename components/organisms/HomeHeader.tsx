import { useRouter } from 'next/router';

type Props = {
    onPressWallet: () => void;
};

const HomeHeader = ({ onPressWallet }: Props) => {
    const router = useRouter();

    const handleConnectWallet = () => {
        onPressWallet();
    };

    return (
        <div className="flex flex-row justify-between items-center bg-background01 px-6 py-2">
            <img src={'/img-logo2.png'} alt="img-logo" className="w-[82px] h-[30px]" />
            <div className="flex flex-row">
                <button
                    className="bg-primary rounded-xl w-10 h-10 justify-center items-center flex"
                    onClick={() => router.push('/add-routine')}
                >
                    <img src="/ic-add.png" alt="icon-add" className="w-6 h-6" />
                </button>
                <button
                    className="bg-primary rounded-xl w-10 h-10 justify-center items-center flex ml-2"
                    onClick={handleConnectWallet}
                >
                    <img src="/ic-wallet.png" alt="icon-add" className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default HomeHeader;
