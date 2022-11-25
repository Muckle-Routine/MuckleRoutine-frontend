import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Button from '@/components/molecules/Button';
import BottomFixedContainer from '@/components/organisms/BottomFixedContainer';
import Layout from '@/components/organisms/Layout';
import Section from '@/components/organisms/Section';
import PageHeader from '@/components/organisms/PageHeader';
import { useRouter } from 'next/router';

const CertificationSubmit: NextPageWithLayout = () => {
    const router = useRouter();

    const handleSubmit = () => {
        router.push('/');
    };

    return (
        <div>
            <PageHeader canGoBack title="인증 제출" />
            <div className="px-6 pt-[66px] pb-[100px]">
                <Section title={'루틴 제목'} style="mt-3">
                    <span className="text-deactive text-base text-[18px] font-semibold">아침 6시 30분 전 기상하기</span>
                </Section>
                <Section title={'인증 기준'} style="mt-6">
                    <ul className="list-disc ml-5 pt-2 pb-4">
                        <li className="text-deactive text-sm text-[13px] font-medium">아침 6시 30분전 기상하기</li>
                        <li className="text-deactive text-sm text-[13px] font-medium">
                            타임스탬프가 노출된 사진을 등록해주세요
                        </li>
                        <li className="text-deactive text-sm text-[13px] font-medium">선명한 사진을 등록해주세요</li>
                    </ul>
                </Section>
                <Section title={'인증 기준'} style="mt-6">
                    <img
                        src="https://i.picsum.photos/id/183/200/200.jpg?hmac=mfn5w11JTbXGqdQRlmRE-PRI5ZheVq8IKlC6Xt_0jto"
                        alt="certification-image"
                        className="w-full rounded-xl aspect-video"
                    />
                </Section>
            </div>
            <BottomFixedContainer style="px-6 pb-3 flex flex-row">
                <Button onClick={handleSubmit}>
                    <span>인증 제출하기</span>
                </Button>
            </BottomFixedContainer>
        </div>
    );
};

export default CertificationSubmit;

CertificationSubmit.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
