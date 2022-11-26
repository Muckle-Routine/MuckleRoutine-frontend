import Button from '@/components/molecules/Button';
import BottomFixedContainer from '@/components/organisms/BottomFixedContainer';
import Layout from '@/components/organisms/Layout';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const SubmitDone: NextPageWithLayout = () => {
    const router = useRouter();

    return (
        <div>
            <div className="pt-[56px] pb-[100px] flex flex-col items-center">
                <h1 className="text-white text-4xl text-[32px] font-semibold mt-[10px] mb-3">인증 제출 완료!</h1>
                <div className="flex-col justify-start items-center">
                    <span className="text-deactive font-normal text-sm text-[13px] text-center">
                        생성한 루틴은 검증에 참여하세요.
                    </span>
                    <br />
                    <span className="text-deactive font-normal text-sm text-[13px] text-center">
                        진행 중인 루틴은 인증을 제출하세요.
                    </span>
                </div>
                <img src="/img-congratulation.svg" />
            </div>
            <BottomFixedContainer style="px-6 pb-3 flex flex-row">
                <Button onClick={() => router.push('/certification-main')}>
                    <span>인증탭으로 돌아가기</span>
                </Button>
            </BottomFixedContainer>
        </div>
    );
};

export default SubmitDone;

SubmitDone.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
