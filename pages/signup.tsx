import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from './_app';
import Button from '@/components/molecules/Button';
import TextInput from '@/components/molecules/TextInput';
import useInput from 'hooks/useInput';
import Layout from '@/components/organisms/Layout';

const SignUp: NextPageWithLayout = () => {
    const router = useRouter();
    const [id, updateId] = useInput('', 30);
    const [password, updatePassword] = useInput('', 30);

    const handleGoback = () => {
        router.back();
    };

    const handleSignUp = () => {
        router.push('/connect-wallet');
    };

    return (
        <div className="pt-[11px] px-6">
            <button
                className="rounded-lg border-2 border-white/10 w-[30.67px] h-[30.67px]  flex items-center justify-center"
                onClick={handleGoback}
            >
                <img src={'/ic-arrow-left.svg'} alt="ic-go-back" className="w-3 h-3" />
            </button>
            <div className="min-h-screen pt-[34px] pb-2 flex-col flex justify-between">
                <div className="flex-col flex mx-4">
                    <span className="text-4xl text-[32px] font-semibold text-white">회원가입</span>
                    <span className="text-sm text-[13px] font-normal text-deactive mt-[11px]">
                        회원정보를 입력해주세요.
                    </span>
                    <div className="mt-10">
                        <TextInput placeholder="아이디" value={id} onChange={updateId} />
                        <TextInput
                            placeholder="패스워드"
                            value={password}
                            onChange={updatePassword}
                            type="password"
                            style="my-6"
                        />
                    </div>
                    <Button onClick={handleSignUp}>
                        <span>회원가입</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
