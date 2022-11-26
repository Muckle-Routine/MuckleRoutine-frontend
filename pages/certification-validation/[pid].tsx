import { ReactElement, useEffect } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/organisms/Layout';
import BottomFixedContainer from '@/components/organisms/BottomFixedContainer';
import Button from '@/components/molecules/Button';
import PageHeader from '@/components/organisms/PageHeader';
import Section from '@/components/organisms/Section';
import { useRouter } from 'next/router';
import useInput from '@/hooks/useInput';

const CertificationValidation: NextPageWithLayout = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [cheerMessage, updateCheerMessage] = useInput('', 200);

    const handleValidate = () => {
        router.push(`/certification-submit/${pid}`);
    };

    useEffect(() => {
        // getCertificationForVote()
    }, []);

    return (
        <div>
            <PageHeader canGoBack title="검증 참여하기" />
            <div className="pt-[56px] pb-[100px]">
                <div className="px-6">
                    <Section title={'루틴 제목'} style="mt-3">
                        <span className="text-deactive text-base text-[18px] font-semibold">
                            아침 6시 30분 전 기상하기
                        </span>
                    </Section>
                    <Section title={'인증 기준'} style="mt-6">
                        <img
                            src="https://i.picsum.photos/id/183/200/200.jpg?hmac=mfn5w11JTbXGqdQRlmRE-PRI5ZheVq8IKlC6Xt_0jto"
                            alt="certification-image"
                            className="w-full rounded-xl aspect-video"
                        />
                    </Section>
                    <Section title={'인증 기준'} style="mt-6">
                        <ul className="list-disc ml-5 pt-2 pb-4">
                            <li className="text-deactive text-sm text-[13px] font-medium">아침 6시 30분전 기상하기</li>
                            <li className="text-deactive text-sm text-[13px] font-medium">
                                타임스탬프가 노출된 사진을 등록해주세요
                            </li>
                            <li className="text-deactive text-sm text-[13px] font-medium">
                                선명한 사진을 등록해주세요
                            </li>
                        </ul>
                    </Section>
                    <Section title={'인증 기준 설명'} style="mt-6">
                        <div className="pt-2 pl-4 bg-background02 rounded-xl">
                            <textarea
                                placeholder="인증 기준을 설명해주세요"
                                className="focus:outline-none bg-transparent min-h-[120px] min-w-full text-white"
                                value={cheerMessage}
                                onChange={(event) => updateCheerMessage(event.target.value)}
                            />
                        </div>
                    </Section>
                </div>
            </div>
            <BottomFixedContainer style="px-6 pb-3 flex flex-row">
                <Button type="outline" onClick={handleValidate}>
                    <span>실패</span>
                </Button>
                <Button style="ml-3" onClick={handleValidate}>
                    <span>성공</span>
                </Button>
            </BottomFixedContainer>
        </div>
    );
};

export default CertificationValidation;

CertificationValidation.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};
