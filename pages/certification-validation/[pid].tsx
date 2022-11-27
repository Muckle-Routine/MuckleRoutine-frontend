import { ReactElement, useEffect, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import Layout from '@/components/organisms/Layout';
import BottomFixedContainer from '@/components/organisms/BottomFixedContainer';
import Button from '@/components/molecules/Button';
import PageHeader from '@/components/organisms/PageHeader';
import Section from '@/components/organisms/Section';
import { useRouter } from 'next/router';
import useInput from '@/hooks/useInput';

const MOCK = [
    {
        title: '하루 1잔 물마시기',
        thumbnail: '/img-cert1.png',
        standard: '물 1컵과 타임스탬프가 노출된 사진을 등록해주세요.',
        standard2: '선명한 사진을 등록해주세요',
    },
    {
        title: '원하는 책 읽고 저녁에 필사하기',
        thumbnail: '/img-cert2.png',
        standard: '하루에 1권 원하는 책',
        standard2: '책 표지와 필사한 노트가 노출된 사진을 등록해주세요.',
    },
];

const CertificationValidation: NextPageWithLayout = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [cheerMessage, updateCheerMessage] = useInput('', 200);
    const [isLastCert, setIsLastCert] = useState<boolean>(false);

    const handleValidate = () => {
        if (isLastCert) {
            router.push(`/certification-submit/${pid}`);
        } else {
            setIsLastCert(true);
        }
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
                            {isLastCert ? MOCK[0].title : MOCK[1].title}
                        </span>
                    </Section>
                    <Section title={'인증 기준'} style="mt-6">
                        <img
                            src={isLastCert ? MOCK[0].thumbnail : MOCK[1].thumbnail}
                            alt="certification-image"
                            className="w-full rounded-xl aspect-video"
                        />
                    </Section>
                    <Section title={'인증 기준'} style="mt-6">
                        <ul className="list-disc ml-5 pt-2 pb-4">
                            <li className="text-deactive text-sm text-[13px] font-medium">
                                {isLastCert ? MOCK[0].standard : MOCK[1].standard}
                            </li>
                            <li className="text-deactive text-sm text-[13px] font-medium">
                                {isLastCert ? MOCK[0].standard2 : MOCK[1].standard2}
                            </li>
                        </ul>
                    </Section>
                    <Section title={'응원의 한마디'} style="mt-6">
                        <div className="pt-2 pl-4 bg-background02 rounded-xl">
                            <textarea
                                placeholder="응원의 한마디를 입력해주세요"
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
