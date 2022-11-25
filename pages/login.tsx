import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Button from '@/components/molecules/Button';
import Layout from '@/components/organisms/Layout';
import TextInput from '@/components/molecules/TextInput';
import useInput from 'hooks/useInput';

const Login: NextPageWithLayout = () => {
    const router = useRouter();
    const [id, updateId] = useInput('', 30);
    const [pw, updatePw] = useInput('', 30);

    const handleLogin = () => {
        router.push('/connect-wallet');
    };

    const handlePressSigningUpButton = () => {
        router.push('/signup');
    };

    return (
        <div className="min-h-screen pt-20 pb-2 px-6 flex-col flex justify-between">
            <div className="flex-col flex mx-4">
                <span className="text-4xl text-[32px] font-semibold text-white">로그인</span>
                <span className="text-sm text-[13px] font-normal text-deactive mt-[11px]">
                    로그인 정보를 입력해주세요.
                </span>
                <div className="mt-10">
                    <TextInput placeholder="아이디" value={id} onChange={updateId} />
                    <TextInput placeholder="패스워드" value={pw} onChange={updatePw} type="password" style="my-6" />
                </div>
                <Button onClick={handleLogin}>
                    <span>로그인</span>
                </Button>
            </div>
            <div className="flex justify-center mb-3">
                <span className="text-base font-normal text-white">계정이 없으신가요?</span>
                <button
                    className="text-base font-semibold text-primary cursor-pointer ml-2"
                    onClick={handlePressSigningUpButton}
                >
                    회원가입
                </button>
            </div>
        </div>
    );
};

export default Login;

Login.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
