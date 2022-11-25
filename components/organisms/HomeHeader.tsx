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
            <img src={'/img-logo2.svg'} alt="img-logo" />
            <div className="flex flex-row">
                <button
                    className="bg-primary rounded-xl w-10 h-10 justify-center items-center flex"
                    onClick={() => router.push('/add-routine')}
                >
                    <img src="/ic-add.svg" alt="icon-add" />
                </button>
                <button
                    className="bg-primary rounded-xl w-10 h-10 justify-center items-center flex ml-2"
                    onClick={handleConnectWallet}
                >
                    <img src="/ic-wallet.svg" alt="icon-add" />
                </button>
            </div>
        </div>
    );
};

export default HomeHeader;
