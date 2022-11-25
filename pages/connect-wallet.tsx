import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Button from '@/components/molecules/Button';
import Layout from '@/components/organisms/Layout';
import TextInput from '@/components/molecules/TextInput';
import useInput from 'hooks/useInput';

const ConnectWallet: NextPageWithLayout = () => {
    const router = useRouter();
    const [privateKey, updatePrivateKey] = useInput('');

    const handleConnectWallet = () => {
        router.push('/');
    };

    return (
        <div className="min-h-screen pt-20 pb-2 px-6 flex-col flex justify-between">
            <div className="flex-col flex mx-4">
                <span className="text-4xl text-[32px] font-semibold text-white">지갑연동</span>
                <span className="text-sm text-[13px] font-normal text-deactive mt-[11px]">
                    프라이빗 키로 지갑을 간편하게 연결하세요.
                </span>
                <div className="mt-10">
                    <TextInput
                        placeholder="프라이빗 키"
                        value={privateKey}
                        onChange={updatePrivateKey}
                        type="password"
                        style="mb-6"
                    />
                </div>
                <Button onClick={handleConnectWallet}>
                    <span>지갑 연결</span>
                </Button>
            </div>
        </div>
    );
};

export default ConnectWallet;

ConnectWallet.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
